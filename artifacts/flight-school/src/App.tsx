import React, { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { AdminRoot } from "@/pages/admin/AdminRoot";

import { HomePage } from "@/pages/HomePage";
import { CheapestPage } from "@/pages/CheapestPage";
import { LowCostPage } from "@/pages/LowCostPage";
import { PrivatePilotPage } from "@/pages/PrivatePilotPage";
import { InstrumentRatingPage } from "@/pages/InstrumentRatingPage";
import { CommercialPilotPage } from "@/pages/CommercialPilotPage";
import { CfiTrainingPage } from "@/pages/CfiTrainingPage";
import { AirlinePathPage } from "@/pages/AirlinePathPage";
import { CommercialMultiEnginePage } from "@/pages/CommercialMultiEnginePage";
import { OurAircraftPage } from "@/pages/OurAircraftPage";
import { InstructorsPage } from "@/pages/InstructorsPage";
import { PricingPage } from "@/pages/PricingPage";
import { ContactPage } from "@/pages/ContactPage";
import { DiscoveryFlightPage } from "@/pages/DiscoveryFlightPage";
import { DealsPage } from "@/pages/DealsPage";
import { AboutUsPage } from "@/pages/AboutUsPage";
import { DirectionsPage } from "@/pages/DirectionsPage";
import { FaqPage } from "@/pages/FaqPage";
import { LandingPage } from "@/pages/LandingPage";
import { getLandingPage } from "@/data/landingPages";
import { AirTourPage } from "@/pages/AirTourPage";
import { getAirTourPage } from "@/data/airTourPages";
import { AreasServedPage } from "@/pages/AreasServedPage";
import { AirToursHubPage } from "@/pages/AirToursHubPage";
import { redirects } from "@/data/redirects";
import { SeoSchema } from "@/components/SeoSchema";

const queryClient = new QueryClient();

function LandingOrNotFound() {
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

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <SeoSchema />
      <Header />
      <main className="flex-1 pb-16 md:pb-0">{children}</main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}

function PublicRoutes() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/cheapest-flight-school-van-nuys-ca" component={CheapestPage} />
        <Route path="/low-cost-flight-school-van-nuys-ca" component={LowCostPage} />
        <Route path="/private-pilot-van-nuys" component={PrivatePilotPage} />
        <Route path="/instrument-rating-van-nuys" component={InstrumentRatingPage} />
        <Route path="/commercial-pilot-training-van-nuys" component={CommercialPilotPage} />
        <Route path="/commercial-pilot-training" component={CommercialPilotPage} />
        <Route path="/commercial-pilot-multi-engine-add-on-van-nuys-flight-training" component={CommercialMultiEnginePage} />
        <Route path="/cfi-training-van-nuys" component={CfiTrainingPage} />
        <Route path="/cfi-training" component={CfiTrainingPage} />
        <Route path="/airline-pilot-path-van-nuys" component={AirlinePathPage} />
        <Route path="/airline-pilot-path" component={AirlinePathPage} />
        <Route path="/our-aircraft" component={OurAircraftPage} />
        <Route path="/instructors" component={InstructorsPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/discovery-flight-van-nuys" component={DiscoveryFlightPage} />
        <Route path="/discovery-flight" component={DiscoveryFlightPage} />
        <Route path="/van-nuys-accelerated-flight-school-deals-coupons" component={DealsPage} />
        <Route path="/van-nuys-accelerated-flight-school-pricing" component={PricingPage} />
        <Route path="/van-nuys-accelerated-flight-school-aircraft" component={OurAircraftPage} />
        <Route path="/van-nuys-accelerated-flight-school-instructors" component={InstructorsPage} />
        <Route path="/van-nuys-accelerated-flight-school-contact" component={ContactPage} />
        <Route path="/van-nuys-accelerated-flight-school-about" component={AboutUsPage} />
        <Route path="/van-nuys-accelerated-flight-school-directions" component={DirectionsPage} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/flight-training-faq-van-nuys" component={FaqPage} />
        <Route path="/flight-school-locations-los-angeles" component={AreasServedPage} />
        <Route path="/los-angeles-air-tours-sightseeing-flights" component={AirToursHubPage} />
        <Route component={LandingOrNotFound} />
      </Switch>
    </Layout>
  );
}

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function AppRouter() {
  const [location] = useLocation();
  const isAdmin = location === "/admin" || location.startsWith("/admin/");
  if (isAdmin) return <AdminRoot />;
  return (
    <>
      <ScrollToTop />
      <PublicRoutes />
    </>
  );
}

function App({ ssrPath, helmetContext }: { ssrPath?: string; helmetContext?: object } = {}) {
  return (
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, "") || ""} ssrPath={ssrPath}>
            <AppRouter />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
