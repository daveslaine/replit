import { Link } from "wouter";
import { Plane, Home, Phone } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center bg-slate-50 px-4 py-20">
      <Seo
        title="Page Not Found | Accelerated Flight School"
        description="The page you were looking for could not be found. Explore our flight training programs at Van Nuys Airport (KVNY) or get in touch."
        robots="noindex, follow"
      />

      <div className="max-w-lg w-full text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
          <Plane className="w-8 h-8" />
        </div>

        <p className="text-sm font-bold uppercase tracking-widest text-primary/60 mb-2">
          404 — Off Course
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
          This page couldn't be found
        </h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          The page may have moved or no longer exists. Let's get you back on the
          right heading.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button className="gap-2 font-bold w-full sm:w-auto">
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <a href="tel:323-332-0585">
            <Button
              variant="outline"
              className="gap-2 font-bold w-full sm:w-auto border-primary text-primary hover:bg-primary/5"
            >
              <Phone className="w-4 h-4" />
              Call 323-332-0585
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
