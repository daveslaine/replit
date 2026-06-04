import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { adminApi } from "@/lib/adminApi";
import { AdminLogin } from "./AdminLogin";
import { AdminLayout } from "./AdminLayout";
import { AdminDashboard } from "./AdminDashboard";
import { AdminInstructors } from "./AdminInstructors";
import { AdminAircraft } from "./AdminAircraft";

export function AdminRoot() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    adminApi.me()
      .then(() => setIsAdmin(true))
      .catch(() => setIsAdmin(false));
  }, []);

  if (isAdmin === null) {
    return <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white text-sm">Loading…</div>;
  }

  if (!isAdmin) {
    return <AdminLogin onLogin={() => setIsAdmin(true)} />;
  }

  return (
    <AdminLayout onLogout={() => setIsAdmin(false)}>
      <Switch>
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/admin/instructors" component={AdminInstructors} />
        <Route path="/admin/aircraft" component={AdminAircraft} />
      </Switch>
    </AdminLayout>
  );
}
