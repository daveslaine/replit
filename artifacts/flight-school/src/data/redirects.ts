// Permanent consolidations of duplicate/near-duplicate landing pages.
// Maps an old (removed) slug -> the canonical slug it should resolve to.
// Used for client-side <Redirect> and for build-time canonical redirect stubs.
export const redirects: Record<string, string> = {
  "best-flight-school-van-nuys-accelerated-flight-school-kvny":
    "best-flight-school-los-angeles-accelerated-flight-school-van-nuys-kvny",
  "best-flight-school-los-angeles-accelerated-flight-school-van-nuys-airport-kvny":
    "best-flight-school-los-angeles-accelerated-flight-school-van-nuys-kvny",
  "private-pilot-license-cost-accelerated-flight-school-van-nuys-airport-kvny":
    "private-pilot-license-cost-los-angeles-accelerated-flight-school-van-nuys-kvny",
  "private-pilot-license-cost-in-los-angeles-accelerated-flight-school-van-nuys-airport-kvny":
    "private-pilot-license-cost-los-angeles-accelerated-flight-school-van-nuys-kvny",
  "discovery-flight-los-angeles-accelerated-flight-school-van-nuys-airport-kvny":
    "discovery-flight-los-angeles-accelerated-flight-school-van-nuys-kvny",
};
