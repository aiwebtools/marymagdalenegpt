
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
    { name: "✨ TALK TO MARY MAGDALENE GPT ✨", href: "https://chatgpt.com/g/g-Looq4sK74-mary-magdalene-gpt" },
    { name: "🔮 FAQ", href: "#faq" },
    { name: "📜 Disclaimer", href: "#disclaimer" },
    { name: "⚡ More AI Tools", href: "https://aiwebtools.lovable.app/?via=aiwebtools" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "backdrop-blur-xl bg-black/80 py-2 shadow-divine border-b border-divine-celestial/30" 
          : "py-4 bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 bg-celestial-gradient rounded-full flex items-center justify-center shadow-divine animate-divine-pulse">
            <Eye className="w-7 h-7 text-white animate-holy-glow" />
            <div className="absolute inset-0 rounded-full animate-pulse-glow shadow-holy" />
            
            {/* Divine particles around logo */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-divine-celestial rounded-full animate-divine-sparkle"
                style={{
                  top: `${20 + Math.cos(i * 60) * 25}px`,
                  left: `${20 + Math.sin(i * 60) * 25}px`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </div>
          <div className="flex flex-col">
            <span className="font-[Cinzel] text-divine-celestial text-xl font-semibold animate-shimmer bg-celestial-gradient bg-clip-text text-transparent group-hover:animate-holy-glow">
              Mary Magdalene GPT
            </span>
            <span className="text-xs text-mystic-gold opacity-90">
              <a href="https://www.aiwebtools.ai" className="hover:text-divine-celestial transition-colors animate-shimmer">
                ✧ Presented by AiWebTools.Ai ✧
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
              className="z-50 glass-card shadow-celestial border-divine-celestial/30 text-divine-celestial hover:bg-divine-celestial/20"
            >
              {mobileMenuOpen ? <X className="animate-divine-pulse" /> : <Menu className="animate-divine-pulse" />}
            </Button>

            {mobileMenuOpen && (
              <div className="fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center animate-fade-in">
                {/* Divine background effects for mobile menu */}
                <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-divine-celestial rounded-full animate-divine-sparkle"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`
                      }}
                    />
                  ))}
                </div>
                
                <nav className="flex flex-col items-center gap-8 w-full relative z-10">
                  {navLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      className="text-xl font-[Cinzel] text-divine-celestial hover:text-mystic-gold transition-all duration-300 py-3 glass-card px-6 shadow-divine animate-fade-in hover:shadow-holy"
                      onClick={() => setMobileMenuOpen(false)}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <span className="animate-shimmer hover:animate-holy-glow">{link.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-divine-celestial hover:text-mystic-gold relative overflow-hidden group transition-all duration-300 glass-card px-4 py-2 shadow-celestial hover:shadow-divine"
              >
                <span className="relative z-10 font-[Cinzel] text-sm animate-shimmer group-hover:animate-holy-glow">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-celestial-gradient scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 shadow-divine" />
                
                {/* Divine sparkle effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(3)].map((_, j) => (
                    <div
                      key={j}
                      className="absolute w-0.5 h-0.5 bg-divine-celestial rounded-full animate-divine-sparkle"
                      style={{
                        left: `${20 + j * 30}%`,
                        top: `${20 + j * 20}%`,
                        animationDelay: `${j * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
