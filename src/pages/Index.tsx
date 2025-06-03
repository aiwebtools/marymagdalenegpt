
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import DisclaimerPopup from "@/components/DisclaimerPopup";

const Index = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  
  useEffect(() => {
    // Enhanced SEO title and meta description
    document.title = "Free AI Tools | AI Web Tools - Best AI Software & Applications 2024";
    
    // Update meta description for better SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover the best free AI tools and AI web applications. Access powerful AI software for content creation, automation, and productivity. Leading AI tools directory with Mary Magdalene GPT and more."
      );
    }

    // Add meta keywords if not present
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      'content',
      'free ai tools, ai web tools, ai tools, artificial intelligence tools, ai software, ai applications, ai productivity tools, best ai tools 2024, free artificial intelligence, ai automation tools, mary magdalene gpt, ai chat tools, spiritual ai'
    );

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://aiwebtools.ai/');

    // Add hreflang for international SEO
    let hreflang = document.querySelector('link[hreflang="en"]');
    if (!hreflang) {
      hreflang = document.createElement('link');
      hreflang.setAttribute('rel', 'alternate');
      hreflang.setAttribute('hreflang', 'en');
      hreflang.setAttribute('href', 'https://aiwebtools.ai/');
      document.head.appendChild(hreflang);
    }
    
    // Add Google Fonts with preload for performance
    const linkCinzel = document.createElement("link");
    linkCinzel.rel = "preload";
    linkCinzel.as = "style";
    linkCinzel.href = "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap";
    linkCinzel.onload = function() {
      this.onload = null;
      this.rel = 'stylesheet';
    };
    document.head.appendChild(linkCinzel);
    
    const linkCormorant = document.createElement("link");
    linkCormorant.rel = "preload";
    linkCormorant.as = "style";
    linkCormorant.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap";
    linkCormorant.onload = function() {
      this.onload = null;
      this.rel = 'stylesheet';
    };
    document.head.appendChild(linkCormorant);
    
    // Enhanced smooth scroll for anchor links with SEO-friendly URLs
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            // Update URL for SEO without triggering page reload
            history.pushState(null, '', targetId);
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Check if user has seen the disclaimer
    const hasAgreed = localStorage.getItem('disclaimerAgreed');
    if (!hasAgreed) {
      const timer = setTimeout(() => {
        setShowDisclaimer(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
    
    // Add page view tracking for SEO analytics
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: 'Free AI Tools | AI Web Tools - Best AI Software & Applications 2024',
        page_location: window.location.href
      });
    }
    
    return () => {
      // Clean up if needed
    };
  }, []);

  const handleAgreeDisclaimer = () => {
    localStorage.setItem('disclaimerAgreed', 'true');
    setShowDisclaimer(false);
  };

  return (
    <>
      {/* SEO-optimized semantic HTML structure */}
      <div className="min-h-screen bg-black text-white overflow-x-hidden" itemScope itemType="https://schema.org/WebPage">
        <Header />
        <main role="main">
          <Hero />
          <VideoSection />
          <Features />
          <Testimonials />
          <FAQ />
          <Disclaimer />
        </main>
        <Footer />
        
        {/* Disclaimer Popup */}
        <DisclaimerPopup 
          show={showDisclaimer} 
          onAgree={handleAgreeDisclaimer} 
        />
      </div>

      {/* Additional SEO elements */}
      <div style={{ display: 'none' }}>
        {/* Hidden content for search engines - keywords and context */}
        <h1>AI Web Tools - Free Artificial Intelligence Tools Directory</h1>
        <p>Best free AI tools, AI web applications, artificial intelligence software, AI productivity tools, AI automation, Mary Magdalene GPT spiritual AI chat</p>
      </div>
    </>
  );
};

export default Index;
