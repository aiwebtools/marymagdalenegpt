
import { useState, useEffect } from "react";
import { Eye, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "TALK TO MARY MAGDALENE GPT", href: "https://chatgpt.com/g/g-Looq4sK74-mary-magdalene-gpt" },
    { name: "FAQ", href: "#faq" },
    { name: "Disclaimer", href: "#disclaimer" },
    { name: "More AI Tools", href: "https://www.aiwebtools.ai" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/70 py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 bg-divine rounded-full flex items-center justify-center">
            <Eye className="w-6 h-6 text-white" />
            <div className="absolute inset-0 rounded-full animate-pulse-glow shadow-neon" />
          </div>
          <div className="flex flex-col">
            <span className="font-[Cinzel] text-white text-xl font-semibold">Mary Magdalene GPT</span>
            <span className="text-xs text-divine-light opacity-80">
              <a href="https://www.aiwebtools.ai" className="hover:text-divine transition-colors">
                Presented by AiWebTools.Ai
              </a>
            </span>
          </div>
        </a>

        {isMobile ? (
          <>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="z-50"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>

            {mobileMenuOpen && (
              <div className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center animate-fade-in">
                <nav className="flex flex-col items-center gap-8 w-full">
                  {navLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      className="text-xl font-[Cinzel] text-divine hover:text-mystic transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-6">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-white hover:text-divine relative overflow-hidden group"
              >
                <span className="relative z-10 font-[Cinzel]">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-divine scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
