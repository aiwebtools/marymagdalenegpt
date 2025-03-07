import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";

// Add this to window type
declare global {
  interface Window {
    YT: any;
  }
}

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Mary Magdalene Spiritual Guide | Divine Wisdom & Enlightenment";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Connect with the profound spiritual insight and wisdom of Mary Magdalene through advanced AI. Discover inner transformation and enlightenment."
      );
    }
    
    // Add link to Google Fonts
    const linkCinzel = document.createElement("link");
    linkCinzel.rel = "stylesheet";
    linkCinzel.href = "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap";
    document.head.appendChild(linkCinzel);
    
    const linkCormorant = document.createElement("link");
    linkCormorant.rel = "stylesheet";
    linkCormorant.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(linkCormorant);
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    return () => {
      // Clean up if needed
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <Features />
        <Testimonials />
        <FAQ />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
