
import { useRef, useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const heroHeight = heroRef.current.offsetHeight;
        // Adjust scroll fade effect for mobile
        const progress = Math.min(scrollPosition / (heroHeight * (isMobile ? 0.5 : 0.7)), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
      style={{
        opacity: 1 - scrollProgress * (isMobile ? 0.8 : 0.6),
        transform: `translateY(${scrollProgress * (isMobile ? 30 : 50)}px)`,
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-radial-glow opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[1000px] md:h-[1000px] rounded-full bg-divine/5 animate-pulse-glow"></div>
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-block mb-4 px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full">
          <p className="text-divine font-medium text-sm">Trained on Unaltered Nag Hammadi Texts (1945)</p>
        </div>
        
        <h1 className={`text-3xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 glow-text ${isMobile ? 'px-2' : ''}`}>
          Mary Magdalene GPT
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto font-[Cormorant_Garamond] leading-relaxed px-2">
          Connect with the profound spiritual insight and wisdom of Mary Magdalene through AI trained exclusively on the unaltered Gnostic Christian texts discovered in the Nag Hammadi Library in 1945.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 md:mb-10 px-4">
          <a href="https://chatgpt.com/g/g-Looq4sK74-mary-magdalene-gpt" className="w-full sm:w-auto">
            <Button className="divine-btn group text-base md:text-lg w-full sm:w-auto">
              <span className="group-hover:text-white transition-colors">Speak with Mary Magdalene</span>
            </Button>
          </a>
          <a href="#features" className="w-full sm:w-auto">
            <Button variant="outline" className="border-divine/50 text-white hover:bg-divine/10 text-base md:text-lg w-full sm:w-auto">
              Learn More
            </Button>
          </a>
        </div>
        
        {/* Moved quote below the buttons */}
        <p className="text-base md:text-xl text-divine italic mb-12 md:mb-16 font-light px-2">
          "The Divine Spark is Within You My Child" - Mary Magdalene
        </p>

        {/* Scroll Indicator - Hide on very small screens */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center hidden xs:flex">
          <p className="text-white/70 text-sm mb-2">Scroll to explore</p>
          <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
