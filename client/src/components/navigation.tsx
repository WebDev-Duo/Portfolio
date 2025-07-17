import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
            >
              WebDev Duo
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-primary transition-colors duration-300 px-3 py-2 text-sm font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="hover:text-primary transition-colors duration-300 px-3 py-2 text-sm font-medium"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-primary transition-colors duration-300 px-3 py-2 text-sm font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-primary transition-colors duration-300 px-3 py-2 text-sm font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-primary transition-colors duration-300 px-3 py-2 text-sm font-medium"
              >
                Services
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-accent transition-colors duration-300 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Contact
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("home")}
              className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors w-full text-left"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors w-full text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors w-full text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
