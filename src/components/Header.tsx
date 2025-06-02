
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
    { name: "⚡ More AI Tools", href: "https://www.aiwebtools.ai" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? "backdrop-blur-2xl bg-black/90 py-4 shadow-transcendent border-b-2 border-divine-celestial/40" 
          : "py-8 bg-black/30 backdrop-blur-xl"
      }`}
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        <a href="/" className="flex items-center gap-4 group">
          <div className="relative w-16 h-16 bg-celestial-gradient rounded-full flex items-center justify-center shadow-transcendent animate-divine-pulse">
            <Eye className="w-9 h-9 text-white animate-holy-glow" />
            <div className="absolute inset-0 rounded-full animate-pulse-glow shadow-transcendent" />
            
            {/* Enhanced Divine particles around logo */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-divine-celestial rounded-full animate-divine-sparkle"
                style={{
                  top: `${24 + Math.cos(i * 45) * 30}px`,
                  left: `${24 + Math.sin(i * 45) * 30}px`,
                  animationDelay: `${i * 0.4}s`
                }}
              />
            ))}
          </div>
          <div className="flex flex-col">
            <span className="font-[Cinzel] text-divine-celestial text-2xl font-semibold animate-shimmer bg-celestial-gradient bg-clip-text text-transparent group-hover:animate-holy-glow">
              Mary Magdalene GPT
            </span>
            <span className="text-sm text-mystic-gold opacity-90">
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
              className="z-50 glass-card shadow-divine border-divine-celestial/40 text-divine-celestial hover:bg-divine-celestial/30 p-4"
            >
              {mobileMenuOpen ? <X className="animate-divine-pulse w-7 h-7" /> : <Menu className="animate-divine-pulse w-7 h-7" />}
            </Button>

            {mobileMenuOpen && (
              <div className="fixed inset-0 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center animate-fade-in">
                {/* Enhanced Divine background effects for mobile menu */}
                <div className="absolute inset-0">
                  {[...Array(30)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-divine-celestial rounded-full animate-divine-sparkle"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 4}s`
                      }}
                    />
                  ))}
                </div>
                
                <nav className="flex flex-col items-center gap-12 w-full relative z-10">
                  {navLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      className="text-2xl font-[Cinzel] text-divine-celestial hover:text-mystic-gold transition-all duration-500 py-6 glass-card px-10 shadow-transcendent animate-fade-in hover:shadow-transcendent"
                      onClick={() => setMobileMenuOpen(false)}
                      style={{ animationDelay: `${i * 0.15}s` }}
                    >
                      <span className="animate-shimmer hover:animate-holy-glow">{link.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-12">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-divine-celestial hover:text-mystic-gold relative overflow-hidden group transition-all duration-500 glass-card px-6 py-4 shadow-celestial hover:shadow-transcendent"
              >
                <span className="relative z-10 font-[Cinzel] text-lg animate-shimmer group-hover:animate-holy-glow">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-celestial-gradient scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700 shadow-transcendent" />
                
                {/* Enhanced Divine sparkle effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(5)].map((_, j) => (
                    <div
                      key={j}
                      className="absolute w-1 h-1 bg-divine-celestial rounded-full animate-divine-sparkle"
                      style={{
                        left: `${15 + j * 20}%`,
                        top: `${15 + j * 15}%`,
                        animationDelay: `${j * 0.3}s`
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
