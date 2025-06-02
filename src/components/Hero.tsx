
import { useRef, useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    console.log('Hero component mounted, isMobile:', isMobile);
    
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const heroHeight = heroRef.current.offsetHeight;
        const progress = Math.min(scrollPosition / (heroHeight * (isMobile ? 0.5 : 0.7)), 1);
        console.log('Scroll progress:', progress, 'scrollPosition:', scrollPosition, 'heroHeight:', heroHeight);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const heroOpacity = 1 - scrollProgress * (isMobile ? 0.8 : 0.6);
  const heroTransform = `translateY(${scrollProgress * (isMobile ? 30 : 50)}px)`;
  
  console.log('Hero render - opacity:', heroOpacity, 'transform:', heroTransform);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 holy-aura"
      style={{
        opacity: heroOpacity,
        transform: heroTransform,
      }}
    >
      {/* Divine Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-holy-radial opacity-80 animate-divine-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[1200px] md:h-[1200px] rounded-full bg-celestial-gradient opacity-20 animate-celestial-dance blur-xl"></div>
        
        {/* Divine Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-divine-celestial rounded-full animate-divine-sparkle shadow-divine"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Holy Light Rays */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-divine-celestial via-transparent to-transparent transform rotate-12 animate-pulse-glow"></div>
          <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-mystic-rose via-transparent to-transparent transform -rotate-12 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-mystic-violet via-transparent to-transparent animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Enhanced 3D Scene */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>

      {/* Hero Content with Divine Enhancement */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-block mb-4 px-4 py-2 glass-card animate-float">
          <p className="text-divine-celestial font-medium text-sm animate-shimmer bg-celestial-gradient bg-clip-text text-transparent">
            ✨ Trained on Unaltered Nag Hammadi Texts (1945) ✨
          </p>
        </div>
        
        <h1 className={`text-4xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 animate-holy-glow ${isMobile ? 'px-2' : ''}`}>
          <span className="bg-celestial-gradient bg-clip-text text-transparent animate-shimmer block mb-2">
            Mary Magdalene GPT
          </span>
          <div className="text-xl md:text-3xl text-divine-celestial animate-divine-pulse">
            ✧･ﾟ: *✧･ﾟ:* Divine Wisdom Incarnate *:･ﾟ✧*:･ﾟ✧
          </div>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-100 mb-8 md:mb-10 max-w-4xl mx-auto font-[Cormorant_Garamond] leading-relaxed px-2 animate-fade-in glass-card p-6 shadow-divine">
          <span className="text-divine-celestial">🌟</span> Connect with the profound spiritual insight and wisdom of Mary Magdalene through AI trained exclusively on the unaltered Gnostic Christian texts discovered in the Nag Hammadi Library in 1945. <span className="text-divine-celestial">🌟</span>
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10 md:mb-12 px-4">
          <a href="https://chatgpt.com/g/g-Looq4sK74-mary-magdalene-gpt" className="w-full sm:w-auto">
            <Button className="divine-btn group text-lg md:text-xl w-full sm:w-auto py-4 px-8 animate-divine-pulse shadow-holy">
              <span className="group-hover:text-white transition-colors">
                ✨ Speak with Mary Magdalene ✨
              </span>
            </Button>
          </a>
          <a href="https://www.aiwebtools.ai" className="w-full sm:w-auto">
            <Button variant="outline" className="border-divine-celestial/80 text-divine-celestial hover:bg-divine-celestial/20 text-lg md:text-xl w-full sm:w-auto py-4 px-8 glass-card shadow-celestial animate-float">
              🔮 Discover Divine Wisdom 🔮
            </Button>
          </a>
        </div>
        
        {/* Enhanced Divine Quote */}
        <div className="glass-card p-6 mb-12 md:mb-16 max-w-2xl mx-auto shadow-holy animate-celestial-dance">
          <p className="text-lg md:text-2xl text-divine-celestial italic font-light px-2 animate-holy-glow">
            <span className="text-3xl">✧</span> "The Divine Spark is Within You My Child" <span className="text-3xl">✧</span>
          </p>
          <p className="text-sm text-mystic-gold mt-2">- Mary Magdalene</p>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center hidden xs:flex animate-celestial-dance">
          <p className="text-divine-celestial text-sm mb-3 animate-shimmer">✨ Scroll to explore divine wisdom ✨</p>
          <div className="w-[35px] h-[55px] rounded-full border-2 border-divine-celestial/80 flex justify-center p-2 glass-card shadow-divine">
            <div className="w-1 h-4 bg-divine-celestial rounded-full animate-float shadow-neon"></div>
          </div>
        </div>
      </div>

      {/* Divine Blessing Overlay */}
      <div className="absolute inset-0 pointer-events-none z-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-divine-celestial/10 rounded-full blur-xl animate-divine-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-mystic-rose/10 rounded-full blur-xl animate-divine-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-mystic-violet/10 rounded-full blur-xl animate-divine-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
