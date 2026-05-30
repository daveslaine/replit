import React from "react";
import { Link, useLocation } from "wouter";
import { adminApi } from "@/lib/adminApi";
import { Button } from "@/components/ui/button";
import { Plane, Users, LayoutDashboard, LogOut } from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/instructors", label: "Instructors", icon: Users },
  { href: "/admin/aircraft", label: "Aircraft", icon: Plane },
];

interface Props { children: React.ReactNode; onLogout: () => void; }

export function AdminLayout({ children, onLogout }: Props) {
  const [location] = useLocation();

  async function handleLogout() {
    await adminApi.logout();
    onLogout();
  }

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-56 bg-slate-900 text-white flex flex-col shrink-0">
        <div className="p-5 border-b border-white/10">
          <p className="font-bold text-sm text-white leading-tight">AFS Admin</p>
          <p className="text-xs text-slate-400">Accelerated Flight School</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = href === "/admin" ? location === "/admin" : location.startsWith(href);
            return (
              <Link key={href} href={href}>
                <div className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${active ? "bg-primary text-white" : "text-slate-400 hover:text-white hover:bg-white/5"}`}>
                  <Icon className="w-4 h-4" />
                  {label}
                </div>
              </Link>
            );
          })}
        </nav>
        <div className="p-3 border-t border-white/10">
          <Button variant="ghost" size="sm" onClick={handleLogout} className="w-full justify-start text-slate-400 hover:text-white gap-2 text-xs">
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
