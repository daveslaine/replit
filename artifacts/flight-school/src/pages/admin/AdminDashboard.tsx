import React from "react";
import { Link } from "wouter";
import { Users, Plane, ArrowRight, ExternalLink } from "lucide-react";

export function AdminDashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 text-sm mt-1">Manage your flight school website content.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
        <Link href="/admin/instructors">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer group">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-primary/10 rounded-xl p-3">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
            </div>
            <h2 className="font-bold text-slate-900 mb-1">Instructors</h2>
            <p className="text-sm text-slate-500">Add, edit, or remove instructors and their profile photos.</p>
          </div>
        </Link>

        <Link href="/admin/aircraft">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer group">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-primary/10 rounded-xl p-3">
                <Plane className="w-6 h-6 text-primary" />
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
            </div>
            <h2 className="font-bold text-slate-900 mb-1">Aircraft</h2>
            <p className="text-sm text-slate-500">Add new aircraft with photos and descriptions.</p>
          </div>
        </Link>
      </div>

      <div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-2xl">
        <p className="text-sm font-medium text-slate-700 mb-2">View public site</p>
        <a href="/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium">
          <ExternalLink className="w-3.5 h-3.5" />
          Open website in new tab
        </a>
      </div>
    </div>
  );
}
