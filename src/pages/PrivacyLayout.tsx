import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const policies = [
  { label: "Monsoon Dhara", path: "/privacy/monsoon" },
  { label: "Bill Buddy", path: "/privacy/bill-buddy" },
];

export default function PrivacyLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left collapsible sidebar */}
      <aside
        className={`border-r border-border/60 bg-card/30 flex-shrink-0 transition-[width] duration-300 ${
          collapsed ? "w-14" : "w-56"
        }`}
      >
        <div className="sticky top-0 pt-8">
          <div
            className={`flex items-center px-3 py-3 ${
              collapsed ? "justify-center" : "justify-between"
            }`}
          >
            {!collapsed && (
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Policies
              </span>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-1.5 rounded-lg hover:bg-muted/60 text-muted-foreground transition-colors"
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? (
                <ChevronRight size={16} />
              ) : (
                <ChevronLeft size={16} />
              )}
            </button>
          </div>

          {!collapsed && (
            <nav className="mt-2 px-2 space-y-1">
              {policies.map((p) => (
                <NavLink
                  key={p.path}
                  to={p.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    }`
                  }
                >
                  {p.label}
                </NavLink>
              ))}
            </nav>
          )}
        </div>
      </aside>

      {/* Right content area */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
