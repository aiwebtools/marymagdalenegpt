
import { Eye } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "✨ TALK TO MARY MAGDALENE GPT ✨", href: "https://chatgpt.com/g/g-Looq4sK74-mary-magdalene-gpt" },
    { name: "🔮 FAQ", href: "#faq" },
    { name: "📜 Disclaimer", href: "#disclaimer" },
    { name: "⚡ More AI Tools", href: "https://aiwebtools.lovable.app/?via=aiwebtools" }
  ];

  const legalLinks = [
    { name: "🛡️ Privacy Policy", href: "https://openai.com/policies/privacy-policy/" },
    { name: "📋 Terms of Service", href: "https://aiwebtools.lovable.app/disclaimers" }
  ];

  return (
    <footer className="bg-black/80 backdrop-blur-xl border-t border-divine-celestial/30 pt-20 pb-8 relative overflow-hidden">
      {/* Divine Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-holy-radial opacity-30 animate-divine-pulse"></div>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-divine-celestial rounded-full animate-divine-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Educational Disclaimer Notice */}
        <div className="mb-12 text-center">
          <div className="inline-block px-6 py-4 glass-card shadow-divine animate-divine-pulse">
            <p className="text-divine-celestial text-base font-[Cormorant_Garamond] animate-holy-glow">
              <span className="font-semibold text-mystic-gold">✨ Sacred Educational Notice ✨</span>
              <br />
              This divine tool is for informational, educational, and research purposes only.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-8 group">
              <div className="relative w-12 h-12 bg-celestial-gradient rounded-full flex items-center justify-center shadow-divine animate-divine-pulse">
                <Eye className="w-7 h-7 text-white animate-holy-glow" />
                <div className="absolute inset-0 rounded-full animate-pulse-glow shadow-holy" />
              </div>
              <div className="flex flex-col">
                <span className="font-[Cinzel] text-divine-celestial text-2xl font-semibold animate-shimmer bg-celestial-gradient bg-clip-text text-transparent">
                  Mary Magdalene GPT
                </span>
                <span className="text-sm text-mystic-gold opacity-90">
                  <a href="https://aiwebtools.lovable.app/?via=aiwebtools" className="hover:text-divine-celestial transition-colors animate-shimmer">
                    ✧ Presented by AiWebTools.Ai ✧
                  </a>
                </span>
              </div>
            </a>
            <div className="glass-card p-4 shadow-celestial">
              <p className="text-divine-light text-base italic animate-holy-glow">
                <span className="text-mystic-gold">"</span>The Divine Spark is Within You My Child<span className="text-mystic-gold">"</span>
                <br />
                <span className="text-sm text-mystic-rose">- Mary Magdalene</span>
              </p>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-divine-celestial font-[Cinzel] text-xl mb-6 animate-holy-glow">🌟 Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-divine-celestial transition-all duration-300 text-base group glass-card p-2 block rounded shadow-celestial hover:shadow-divine animate-fade-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <span className="group-hover:animate-shimmer">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-divine-celestial font-[Cinzel] text-xl mb-6 animate-holy-glow">⚖️ Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-divine-celestial transition-all duration-300 text-base group glass-card p-2 block rounded shadow-celestial hover:shadow-divine animate-fade-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <span className="group-hover:animate-shimmer">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-divine-celestial font-[Cinzel] text-xl mb-6 animate-holy-glow">📞 Divine Contact</h3>
            <div className="glass-card p-4 shadow-celestial">
              <ul className="space-y-4">
                <li>
                  <a 
                    href="tel:+14758008096" 
                    className="text-gray-300 hover:text-divine-celestial transition-all duration-300 text-base flex items-center gap-3 group"
                  >
                    <span className="text-mystic-gold">📱</span>
                    <div>
                      <span className="group-hover:animate-shimmer">Phone:</span>
                      <br />
                      <span className="text-divine-light">(475) 800-8096</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:Contact@ai-webtools.com" 
                    className="text-gray-300 hover:text-divine-celestial transition-all duration-300 text-base flex items-center gap-3 group"
                  >
                    <span className="text-mystic-gold">📧</span>
                    <div>
                      <span className="group-hover:animate-shimmer">Email:</span>
                      <br />
                      <span className="text-divine-light">Contact@ai-webtools.com</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-divine-celestial/20 pt-8 flex flex-col md:flex-row justify-between items-center glass-card p-6 shadow-divine">
          <a 
            href="https://www.aiwebtools.ai" 
            className="text-gray-400 hover:text-divine-celestial transition-colors text-base animate-shimmer bg-celestial-gradient bg-clip-text text-transparent"
          >
            ✨ © {currentYear} AI WEB TOOLS LLC. All rights reserved. Blessed be. ✨
          </a>
          
          <div className="mt-4 md:mt-0 text-sm text-gray-500">
            <p className="animate-fade-in">🍪 This divine site uses cookies to enhance your spiritual experience. By continuing to browse, you consent to our use of cookies. 🍪</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
