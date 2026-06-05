import type { UniqueSection } from "./uniqueSection";
import { landingUniqueAreas } from "./landingUniqueAreas";
import { landingUniqueTopics } from "./landingUniqueTopics";

export type { UniqueSection };

// Merged map of slug -> unique prose section for every landing page.
export const landingUnique: Record<string, UniqueSection> = {
  ...landingUniqueAreas,
  ...landingUniqueTopics,
};

export function getLandingUnique(slug: string): UniqueSection | undefined {
  return landingUnique[slug];
}
