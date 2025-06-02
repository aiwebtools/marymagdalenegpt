import { Eye } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "TALK TO MARY MAGDALENE GPT", href: "https://chatgpt.com/g/g-Looq4sK74-mary-magdalene-gpt" },
    { name: "FAQ", href: "#faq" },
    { name: "Disclaimer", href: "#disclaimer" },
    { name: "More AI Tools", href: "https://www.aiwebtools.ai" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "https://openai.com/policies/privacy-policy/" },
    { name: "Terms of Service", href: "https://aiwebtools.lovable.app/disclaimers" }
  ];

  return (
    <footer className="bg-black/70 backdrop-blur-md border-t border-divine/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Educational Disclaimer Notice */}
        <div className="mb-8 text-center">
          <div className="inline-block px-4 py-2 bg-amber-900/20 rounded-lg border border-amber-500/30">
            <p className="text-amber-100 text-sm font-[Cormorant_Garamond]">
              <span className="font-semibold">Educational Notice:</span> This tool is for informational, educational, and research purposes only.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6">
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
            <p className="text-gray-400 text-sm italic">
              "The Divine Spark is Within You My Child" - Mary Magdalene
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-[Cinzel] text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-divine transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-[Cinzel] text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-divine transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-[Cinzel] text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:+14758008096" 
                  className="text-gray-400 hover:text-divine transition-colors text-sm flex items-center gap-2"
                >
                  <span>Phone:</span>
                  <span>(475) 800-8096</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-400 hover:text-divine transition-colors text-sm flex items-center gap-2"
                >
                  <span>Email:</span>
                  <span>Contact@ai-webtools.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-divine/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <a 
            href="https://www.aiwebtools.ai" 
            className="text-gray-400 hover:text-divine transition-colors text-sm"
          >
            © {currentYear} AI WEB TOOLS LLC. All rights reserved.
          </a>
          
          <div className="mt-4 md:mt-0 text-xs text-gray-500">
            <p>This site uses cookies to enhance your experience. By continuing to browse, you consent to our use of cookies.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
