
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

type DisclaimerPopupProps = {
  onAgree: () => void;
  show: boolean;
};

const DisclaimerPopup = ({ onAgree, show }: DisclaimerPopupProps) => {
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
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="w-full max-w-xl glass-card rounded-2xl overflow-hidden relative"
          >
            {/* Top decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-divine via-mystic to-divine-light" />
            
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="text-divine h-6 w-6" />
                <h2 className="font-[Cinzel] text-2xl font-bold text-white tracking-wide">
                  Spiritual Disclaimer
                </h2>
              </div>
              <button
                onClick={onAgree}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4">
              <div className="flex gap-3 items-start bg-divine/5 p-4 rounded-lg">
                <Info className="text-divine-light h-6 w-6 mt-1 flex-shrink-0" />
                <p className="font-[Cormorant_Garamond] text-lg italic">
                  Mary Magdalene GPT provides spiritual content based on various historical texts
                  and spiritual traditions, particularly from Gnostic sources. This is an AI interpretation and not a channel to a
                  historical or spiritual entity.
                </p>
              </div>
              
              <p className="font-[Cormorant_Garamond] text-lg leading-relaxed">
                This service is designed for <span className="text-divine shimmer-text font-semibold">educational, inspirational, and entertainment</span> purposes only.
                It is not a substitute for professional advice in areas of mental health, medical care, legal issues, 
                financial decisions, or other specialized fields.
              </p>
              
              <p className="font-[Cormorant_Garamond] text-lg leading-relaxed">
                By continuing to use this service, you acknowledge these limitations and agree that AI WEB TOOLS LLC is not liable
                for any consequences arising from using Mary Magdalene GPT or the information it provides.
              </p>
            </div>
            
            {/* Action buttons */}
            <div className="p-6 border-t border-white/10 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={handleAgree}
                  className="bg-gradient-to-r from-divine to-mystic hover:from-divine-light hover:to-divine text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-divine/20 transition-all duration-300 text-lg min-w-[180px]"
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
