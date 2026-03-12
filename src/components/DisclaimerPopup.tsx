
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

type DisclaimerPopupProps = {
  onAgree: () => void;
  show: boolean;
};

const DisclaimerPopup = ({ onAgree, show }: DisclaimerPopupProps) => {
  const isMobile = useIsMobile();
  
  const handleAgree = () => {
    toast({
      title: "Welcome!",
      description: "Thank you for acknowledging our disclaimer.",
      duration: 3000,
    });
    onAgree();
  };

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className={`w-full ${isMobile ? 'max-w-[95%]' : 'max-w-md'} glass-card rounded-2xl overflow-hidden relative shadow-[0_15px_50px_-12px_rgba(155,135,245,0.3)]`}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-divine-light via-mystic to-divine" />
            <div className="absolute -left-20 -top-20 w-40 h-40 rounded-full bg-divine/10 blur-3xl" />
            <div className="absolute -right-20 -bottom-20 w-40 h-40 rounded-full bg-mystic/10 blur-3xl" />
            
            {/* Header */}
            <div className="p-4 md:p-6 border-b border-white/10 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <Shield className="text-divine h-5 w-5 md:h-6 md:w-6" />
                <h2 className="font-[Cinzel] text-xl md:text-2xl font-bold text-white tracking-wide shimmer-text">
                  Spiritual Disclaimer
                </h2>
              </div>
              <button
                onClick={onAgree}
                className="text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5 p-1"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-3 md:p-4 max-h-[55vh] overflow-y-auto space-y-3 relative z-10">
              <div className="flex gap-2 items-start bg-divine/5 p-3 rounded-lg border border-divine/20">
                <Info className="text-divine-light h-4 w-4 mt-0.5 flex-shrink-0" />
                <p className="font-[Cormorant_Garamond] text-sm md:text-base italic leading-snug">
                  Mary Magdalene GPT provides spiritual content based on unaltered Gnostic Christian texts 
                  discovered in the Nag Hammadi Library in 1945 and other spiritual traditions. This is an AI 
                  interpretation and not a channel to a historical or spiritual entity.
                </p>
              </div>
              
              <div className="bg-amber-900/20 p-3 rounded-lg border border-amber-500/30">
                <p className="font-[Cormorant_Garamond] text-sm md:text-base leading-snug text-amber-100">
                  <span className="font-semibold text-amber-200">Important:</span> This tool is for 
                  <span className="text-divine shimmer-text font-semibold"> educational and religious research purposes only</span>. 
                  True connection with God cannot be found within a computer. Seek authentic spiritual guidance through prayer, meditation, and your personal relationship with the Divine.
                </p>
              </div>
              
              <p className="font-[Cormorant_Garamond] text-sm md:text-base leading-snug">
                This service is for <span className="text-divine shimmer-text font-semibold">educational, inspirational, and entertainment</span> purposes only. It is not a substitute for professional advice in mental health, medical care, legal, financial, or other specialized fields.
              </p>
              
              <p className="font-[Cormorant_Garamond] text-sm md:text-base leading-snug">
                By continuing, you acknowledge these limitations and agree that AI WEB TOOLS LLC is not liable for any consequences arising from using Mary Magdalene GPT.
              </p>
            </div>
            
            {/* Action buttons */}
            <div className="p-3 md:p-4 border-t border-white/10 flex justify-center relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={handleAgree}
                  className="bg-gradient-to-r from-divine to-mystic hover:from-divine-light hover:to-divine text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-full shadow-lg shadow-divine/20 transition-all duration-300 text-base md:text-lg min-w-[160px]"
                >
                  <span className="font-[Cinzel]">I AGREE</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerPopup;
