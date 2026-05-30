import React, { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
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
import { OurAircraftPage } from "@/pages/OurAircraftPage";
import { InstructorsPage } from "@/pages/InstructorsPage";
import { PricingPage } from "@/pages/PricingPage";
import { ContactPage } from "@/pages/ContactPage";
import { DiscoveryFlightPage } from "@/pages/DiscoveryFlightPage";
import { DealsPage } from "@/pages/DealsPage";
import { AboutUsPage } from "@/pages/AboutUsPage";

const queryClient = new QueryClient();

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
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
        <Route path="/commercial-pilot-training" component={CommercialPilotPage} />
        <Route path="/cfi-training" component={CfiTrainingPage} />
        <Route path="/airline-pilot-path" component={AirlinePathPage} />
        <Route path="/our-aircraft" component={OurAircraftPage} />
        <Route path="/instructors" component={InstructorsPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/discovery-flight" component={DiscoveryFlightPage} />
        <Route path="/van-nuys-accelerated-flight-school-deals-coupons" component={DealsPage} />
        <Route path="/van-nuys-accelerated-flight-school-pricing" component={PricingPage} />
        <Route path="/van-nuys-accelerated-flight-school-aircraft" component={OurAircraftPage} />
        <Route path="/van-nuys-accelerated-flight-school-instructors" component={InstructorsPage} />
        <Route path="/van-nuys-accelerated-flight-school-contact" component={ContactPage} />
        <Route path="/van-nuys-accelerated-flight-school-about" component={AboutUsPage} />
        <Route component={NotFound} />
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

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, "") || ""}>
            <AppRouter />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
