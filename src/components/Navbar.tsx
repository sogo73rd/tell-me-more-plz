import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  items: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Personal Info",
    items: [
      { label: "Profile", href: "#profile" },
      { label: "Family Background", href: "#family-background" },
    ],
  },
  {
    label: "Academic",
    items: [
      { label: "Education", href: "#education" },
      { label: "Books", href: "#books" },
      { label: "Thesis/Projects", href: "#thesis" },
      { label: "Journals", href: "#journals" },
    ],
  },
  {
    label: "Security Career",
    items: [
      { label: "Overview", href: "#security" },
      { label: "Trainings", href: "#trainings" },
      { label: "Served States", href: "#states" },
      { label: "Posts Held", href: "#posts" },
    ],
  },
  {
    label: "Achievements",
    items: [
      { label: "Awards", href: "#certificates" },
      { label: "Fellowships", href: "#fellowships" },
      { label: "Conferences", href: "#conferences" },
      { label: "Community Service", href: "#community" },
    ],
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleLinkClick = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-[var(--shadow-elegant)] backdrop-blur-sm transition-all duration-300">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <a href="#profile" className="text-primary-foreground text-xl font-bold transition-all duration-300 hover:scale-110 hover:text-secondary">
            Prof. Gidado Fari
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary-foreground p-2 transition-transform duration-300 hover:scale-110 active:scale-95"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-1">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-primary-foreground hover:bg-secondary rounded transition-all duration-300 hover:scale-105">
                  {item.label}
                  <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                </button>

                {/* Desktop dropdown */}
                <div
                  className={cn(
                    "absolute top-full left-0 min-w-[200px] bg-primary rounded shadow-xl transition-all duration-300 border border-secondary/20",
                    openDropdown === index
                      ? "opacity-100 visible translate-y-0 scale-100"
                      : "opacity-0 invisible -translate-y-2 scale-95"
                  )}
                >
                  {item.items.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.href}
                      className="block px-4 py-3 text-primary-foreground hover:bg-secondary transition-all duration-200 whitespace-nowrap hover:translate-x-1 first:rounded-t last:rounded-b"
                      onClick={handleLinkClick}
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-in slide-in-from-top duration-300">
            {navItems.map((item, index) => (
              <div key={index} className="mb-2">
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                  className="flex items-center justify-between w-full px-4 py-2 text-primary-foreground hover:bg-secondary rounded transition-all duration-300"
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={cn(
                      "transition-transform duration-300",
                      openDropdown === index && "rotate-180"
                    )}
                  />
                </button>

                {/* Mobile dropdown */}
                {openDropdown === index && (
                  <div className="ml-4 mt-1 bg-primary/50 rounded overflow-hidden animate-in slide-in-from-top duration-200">
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="block px-4 py-2 text-primary-foreground hover:bg-secondary transition-all duration-200 hover:translate-x-1"
                        onClick={handleLinkClick}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
