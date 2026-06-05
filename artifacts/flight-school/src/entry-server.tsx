import { renderToString } from "react-dom/server";
import App from "./App";

export { redirects } from "./data/redirects";

export function render(url: string) {
  const helmetContext: { helmet?: any } = {};
  const appHtml = renderToString(<App ssrPath={url} helmetContext={helmetContext} />);
  const { helmet } = helmetContext;
  const head = helmet
    ? [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ]
        .filter(Boolean)
        .join("\n")
    : "";
  return { appHtml, head };
}
