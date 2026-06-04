import React from "react";
import { ShieldCheck } from "lucide-react";

export function StudentPromise() {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 my-12 max-w-4xl mx-auto shadow-sm">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
        <div className="bg-primary/10 p-4 rounded-full shrink-0">
          <ShieldCheck className="w-10 h-10 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-primary mb-3">Our Student-First Promise</h3>
          <p className="text-lg text-slate-700 leading-relaxed">
            If we do not deliver the structured, transparent, and student-focused training experience described on this website, contact us directly. We will review the issue and work to make it right.
          </p>
        </div>
      </div>
    </div>
  );
}