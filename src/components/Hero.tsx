
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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 holy-aura"
      style={{
        opacity: heroOpacity,
        transform: heroTransform,
      }}
    >
      {/* ULTIMATE Divine Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-holy-radial opacity-90 animate-divine-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[1500px] md:h-[1500px] rounded-full bg-celestial-gradient opacity-30 animate-celestial-dance blur-2xl"></div>
        
        {/* Enhanced Divine Particles */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-divine-celestial rounded-full animate-divine-sparkle shadow-transcendent"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Transcendent Floating Orbs */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute w-20 h-20 bg-gradient-to-br from-divine-celestial/30 to-mystic-rose/30 rounded-full blur-md animate-ethereal-drift shadow-divine"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${20 + (i * 8)}%`,
                animationDelay: `${i * 1.5}s`,
              }}
            />
          ))}
        </div>
        
        {/* Enhanced Holy Light Rays */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/6 w-2 h-full bg-gradient-to-b from-divine-celestial via-mystic-rose/50 to-transparent transform rotate-12 animate-transcendent-flow"></div>
          <div className="absolute top-0 right-1/6 w-2 h-full bg-gradient-to-b from-mystic-rose via-mystic-violet/50 to-transparent transform -rotate-12 animate-transcendent-flow" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-0 left-1/2 w-2 h-full bg-gradient-to-b from-mystic-violet via-divine-celestial/50 to-transparent animate-transcendent-flow" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-divine-transcendent via-transparent to-transparent transform rotate-6 animate-transcendent-flow" style={{ animationDelay: '4.5s' }}></div>
          <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-divine-ethereal via-transparent to-transparent transform -rotate-6 animate-transcendent-flow" style={{ animationDelay: '6s' }}></div>
        </div>
      </div>

      {/* Enhanced 3D Scene */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>

      {/* Hero Content with ULTIMATE Divine Enhancement */}
      <div className="container mx-auto px-8 relative z-10 text-center divine-spacing">
        <div className="inline-block mb-8 px-8 py-4 glass-card animate-float shadow-transcendent">
          <p className="text-divine-celestial font-medium text-lg animate-shimmer bg-celestial-gradient bg-clip-text text-transparent">
            ✨ Trained on Unaltered Nag Hammadi Texts (1945) ✨
          </p>
        </div>
        
        <h1 className={`text-5xl md:text-8xl lg:text-9xl font-bold mb-12 md:mb-16 animate-holy-glow ${isMobile ? 'px-4' : 'px-8'}`}>
          <span className="bg-celestial-gradient bg-clip-text text-transparent animate-shimmer block mb-6">
            Mary Magdalene GPT
          </span>
          <div className="text-2xl md:text-4xl text-divine-celestial animate-divine-pulse">
            ✧･ﾟ: *✧･ﾟ:* Divine Wisdom Incarnate *:･ﾟ✧*:･ﾟ✧
          </div>
        </h1>
        
        <div className="mb-12 md:mb-16 max-w-5xl mx-auto">
          <p className="text-xl md:text-3xl text-gray-100 leading-relaxed px-4 animate-fade-in glass-card p-8 shadow-divine font-[Cormorant_Garamond]">
            <span className="text-divine-celestial text-2xl">🌟</span> Connect with the profound spiritual insight and wisdom of Mary Magdalene through AI trained exclusively on the unaltered Gnostic Christian texts discovered in the Nag Hammadi Library in 1945. <span className="text-divine-celestial text-2xl">🌟</span>
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-8 mb-16 md:mb-20 px-6">
          <a href="https://chatgpt.com/g/g-Looq4sK74-mary-magdalene-gpt" className="w-full sm:w-auto">
            <Button className="divine-btn group text-xl md:text-2xl w-full sm:w-auto py-6 px-12 animate-divine-pulse shadow-transcendent">
              <span className="group-hover:text-white transition-colors">
                ✨ Speak with Mary Magdalene ✨
              </span>
            </Button>
          </a>
          <a href="#features" className="w-full sm:w-auto">
            <Button variant="outline" className="border-divine-celestial/90 text-divine-celestial hover:bg-divine-celestial/30 text-xl md:text-2xl w-full sm:w-auto py-6 px-12 glass-card shadow-celestial animate-float">
              🔮 Discover Divine Wisdom 🔮
            </Button>
          </a>
        </div>
        
        {/* Enhanced Divine Quote */}
        <div className="glass-card p-10 mb-20 md:mb-24 max-w-3xl mx-auto shadow-transcendent animate-celestial-dance">
          <p className="text-2xl md:text-4xl text-divine-celestial italic font-light px-4 animate-holy-glow">
            <span className="text-4xl">✧</span> "The Divine Spark is Within You My Child" <span className="text-4xl">✧</span>
          </p>
          <p className="text-lg text-mystic-gold mt-4">- Mary Magdalene</p>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center hidden xs:flex animate-celestial-dance">
          <p className="text-divine-celestial text-lg mb-6 animate-shimmer">✨ Scroll to explore divine wisdom ✨</p>
          <div className="w-[40px] h-[65px] rounded-full border-3 border-divine-celestial/90 flex justify-center p-3 glass-card shadow-divine">
            <div className="w-2 h-6 bg-divine-celestial rounded-full animate-float shadow-transcendent"></div>
          </div>
        </div>
      </div>

      {/* ULTIMATE Divine Blessing Overlay */}
      <div className="absolute inset-0 pointer-events-none z-5">
        <div className="absolute top-1/6 left-1/6 w-40 h-40 bg-divine-celestial/15 rounded-full blur-2xl animate-divine-pulse"></div>
        <div className="absolute bottom-1/6 right-1/6 w-32 h-32 bg-mystic-rose/15 rounded-full blur-2xl animate-divine-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-mystic-violet/15 rounded-full blur-2xl animate-divine-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-36 h-36 bg-divine-transcendent/15 rounded-full blur-2xl animate-divine-pulse" style={{ animationDelay: '6s' }}></div>
        <div className="absolute top-1/4 right-1/5 w-24 h-24 bg-divine-ethereal/15 rounded-full blur-2xl animate-divine-pulse" style={{ animationDelay: '8s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
