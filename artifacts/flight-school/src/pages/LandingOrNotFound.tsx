import { Redirect, useLocation } from "wouter";
import NotFound from "@/pages/not-found";
import { LandingPage } from "@/pages/LandingPage";
import { getLandingPage } from "@/data/landingPages";
import { AirTourPage } from "@/pages/AirTourPage";
import { getAirTourPage } from "@/data/airTourPages";
import { redirects } from "@/data/redirects";

export default function LandingOrNotFound() {
  const [location] = useLocation();
  const slug = location.replace(/^\//, "");
  const redirectTarget = redirects[slug];

  if (redirectTarget) {
    return <Redirect to={`/${redirectTarget}`} replace />;
  }
  if (getAirTourPage(slug)) {
    return <AirTourPage />;
  }
  if (getLandingPage(slug)) {
    return <LandingPage />;
  }
  return <NotFound />;
}