import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { name: "Home", path: "/" },
  { name: "Admin Dashboard", path: "/admin" },
  { name: "Learning", path: "/learning" },
  { name: "Map", path: "/map" },
  { name: "Emergency Contacts", path: "/emergency" },
  { name: "Weather", path: "/weather" },
  { name: "About", path: "/about" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-primary shadow-card">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center py-4">
        <div className="flex space-x-8">
          {navigationItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary-foreground text-primary shadow-card"
                    : "text-primary-foreground hover:bg-primary-light/20 hover:shadow-sm"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between p-4">
        <div className="text-primary-foreground font-semibold">Menu</div>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          className="text-primary-foreground hover:bg-primary-light/20"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-primary-light/20">
          <div className="py-4 space-y-2">
            {navigationItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-6 py-3 font-medium transition-all duration-200 slide-in-right ${
                    isActive
                      ? "bg-primary-foreground text-primary"
                      : "text-primary-foreground hover:bg-primary-light/20"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};