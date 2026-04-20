import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const apps = [
  {
    id: "bill-buddy",
    label: "Bill Buddy",
    items: [
      { label: "Privacy Policy", path: "/privacy/bill-buddy/policy" },
      { label: "Delete Account", path: "/privacy/bill-buddy/delete-account" },
    ],
  },
  {
    id: "monsoon",
    label: "Monsoon Dhara",
    items: [{ label: "Privacy Policy", path: "/privacy/monsoon/policy" }],
  },
  {
    id: "skipq-vendor",
    label: "SkipQ Vendor",
    items: [{ label: "Privacy Policy", path: "/privacy/skipq-vendor/policy" }],
  },
  {
    id: "skipq",
    label: "SkipQ",
    items: [{ label: "Privacy Policy", path: "/privacy/skipq/policy" }],
  },
];

export default function PrivacyLayout() {
  const [collapsed, setCollapsed] = useState(true);
  const [openPanels, setOpenPanels] = useState<Set<string>>(new Set());
  const location = useLocation();

  // Auto-open the panel whose routes match the current path
  useEffect(() => {
    apps.forEach((app) => {
      if (location.pathname.startsWith(`/privacy/${app.id}`)) {
        setOpenPanels((prev) => new Set([...prev, app.id]));
      }
    });
  }, [location.pathname]);

  const togglePanel = (id: string) => {
    setOpenPanels((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left collapsible sidebar */}
      <aside
        className={`border-r border-border/60 bg-card/30 flex-shrink-0 transition-[width] duration-300 ${
          collapsed ? "w-14" : "w-56"
        }`}
      >
        <div className="sticky top-0 pt-8">
          {/* Sidebar header with collapse toggle */}
          <div
            className={`flex items-center px-3 py-3 ${
              collapsed ? "justify-center" : "justify-between"
            }`}
          >
            {!collapsed && (
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Apps
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

          {/* App accordion panels */}
          {!collapsed && (
            <nav className="mt-2 px-2 space-y-1">
              {apps.map((app) => {
                const isOpen = openPanels.has(app.id);
                const isAnyChildActive = app.items.some(
                  (item) => location.pathname === item.path
                );

                return (
                  <div key={app.id}>
                    {/* App panel header */}
                    <button
                      onClick={() => togglePanel(app.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                        isAnyChildActive
                          ? "text-foreground font-medium"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      }`}
                    >
                      <span>{app.label}</span>
                      {isOpen ? (
                        <ChevronUp size={14} />
                      ) : (
                        <ChevronDown size={14} />
                      )}
                    </button>

                    {/* Sub-items */}
                    {isOpen && (
                      <div className="ml-3 mt-0.5 space-y-0.5 border-l border-border/50 pl-2">
                        {app.items.map((item) => (
                          <NavLink
                            key={item.path}
                            to={item.path}
                            end
                            className={({ isActive }) =>
                              `block px-2 py-1.5 rounded-md text-sm transition-colors ${
                                isActive
                                  ? "bg-primary/10 text-primary font-medium"
                                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                              }`
                            }
                          >
                            {item.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
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
