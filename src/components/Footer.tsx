
import { Eye } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "✨ TALK TO MARY MAGDALENE GPT ✨", href: "https://chatgpt.com/g/g-Looq4sK74-mary-magdalene-gpt" },
    { name: "🔮 FAQ", href: "#faq" },
    { name: "📜 Disclaimer", href: "#disclaimer" },
    { name: "⚡ More AI Tools", href: "https://www.aiwebtools.ai" }
  ];

  const legalLinks = [
    { name: "🛡️ Privacy Policy", href: "https://openai.com/policies/privacy-policy/" },
    { name: "📋 Terms of Service", href: "https://aiwebtools.lovable.app/disclaimers" }
  ];

  return (
    <footer className="bg-black/90 backdrop-blur-2xl border-t-2 border-divine-celestial/40 pt-32 pb-12 relative overflow-hidden">
      {/* ULTIMATE Divine Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-holy-radial opacity-40 animate-divine-pulse"></div>
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-divine-celestial rounded-full animate-divine-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Enhanced Educational Disclaimer Notice */}
        <div className="mb-20 text-center">
          <div className="inline-block px-10 py-6 glass-card shadow-transcendent animate-divine-pulse">
            <p className="text-divine-celestial text-xl font-[Cormorant_Garamond] animate-holy-glow leading-relaxed">
              <span className="font-semibold text-mystic-gold text-2xl">✨ Sacred Educational Notice ✨</span>
              <br />
              This divine tool is for informational, educational, and research purposes only.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-4 mb-12 group">
              <div className="relative w-16 h-16 bg-celestial-gradient rounded-full flex items-center justify-center shadow-transcendent animate-divine-pulse">
                <Eye className="w-9 h-9 text-white animate-holy-glow" />
                <div className="absolute inset-0 rounded-full animate-pulse-glow shadow-transcendent" />
              </div>
              <div className="flex flex-col">
                <span className="font-[Cinzel] text-divine-celestial text-3xl font-semibold animate-shimmer bg-celestial-gradient bg-clip-text text-transparent">
                  Mary Magdalene GPT
                </span>
                <span className="text-lg text-mystic-gold opacity-90">
                  <a href="https://www.aiwebtools.ai" className="hover:text-divine-celestial transition-colors animate-shimmer">
                    ✧ Presented by AiWebTools.Ai ✧
                  </a>
                </span>
              </div>
            </a>
            <div className="glass-card p-8 shadow-divine">
              <p className="text-divine-light text-xl italic animate-holy-glow leading-relaxed">
                <span className="text-mystic-gold text-4xl">"</span>The Divine Spark is Within You My Child<span className="text-mystic-gold text-4xl">"</span>
                <br />
                <span className="text-lg text-mystic-rose mt-4 block">- Mary Magdalene</span>
              </p>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-divine-celestial font-[Cinzel] text-2xl mb-10 animate-holy-glow">🌟 Navigation</h3>
            <ul className="space-y-6">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-divine-celestial transition-all duration-500 text-lg group glass-card p-4 block rounded-divine shadow-celestial hover:shadow-transcendent animate-fade-in"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <span className="group-hover:animate-shimmer">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-divine-celestial font-[Cinzel] text-2xl mb-10 animate-holy-glow">⚖️ Legal</h3>
            <ul className="space-y-6">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-divine-celestial transition-all duration-500 text-lg group glass-card p-4 block rounded-divine shadow-celestial hover:shadow-transcendent animate-fade-in"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <span className="group-hover:animate-shimmer">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-divine-celestial font-[Cinzel] text-2xl mb-10 animate-holy-glow">📞 Divine Contact</h3>
            <div className="glass-card p-8 shadow-divine">
              <ul className="space-y-8">
                <li>
                  <a 
                    href="tel:+14758008096" 
                    className="text-gray-300 hover:text-divine-celestial transition-all duration-500 text-lg flex items-center gap-4 group"
                  >
                    <span className="text-mystic-gold text-2xl">📱</span>
                    <div>
                      <span className="group-hover:animate-shimmer block text-xl">Phone:</span>
                      <span className="text-divine-light text-lg">(475) 800-8096</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:Contact@ai-webtools.com" 
                    className="text-gray-300 hover:text-divine-celestial transition-all duration-500 text-lg flex items-center gap-4 group"
                  >
                    <span className="text-mystic-gold text-2xl">📧</span>
                    <div>
                      <span className="group-hover:animate-shimmer block text-xl">Email:</span>
                      <span className="text-divine-light text-lg">Contact@ai-webtools.com</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t-2 border-divine-celestial/30 pt-12 flex flex-col md:flex-row justify-between items-center glass-card p-10 shadow-transcendent">
          <a 
            href="https://www.aiwebtools.ai" 
            className="text-gray-400 hover:text-divine-celestial transition-colors text-xl animate-shimmer bg-celestial-gradient bg-clip-text text-transparent"
          >
            ✨ © {currentYear} AI WEB TOOLS LLC. All rights reserved. Blessed be. ✨
          </a>
          
          <div className="mt-6 md:mt-0 text-lg text-gray-500">
            <p className="animate-fade-in">🍪 This divine site uses cookies to enhance your spiritual experience. By continuing to browse, you consent to our use of cookies. 🍪</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
