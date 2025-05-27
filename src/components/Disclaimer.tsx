
const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-24 bg-divine-dark/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full mb-4">
              <p className="text-divine font-medium text-sm">LEGAL INFORMATION</p>
            </div>
            <h2 className="text-4xl font-bold glow-text mb-6">Disclaimer</h2>
          </div>
          
          <div className="glass-card rounded-xl p-8">
            <div className="space-y-6 text-gray-300">
              <p>
                <strong className="text-white">Nature of Service:</strong> Mary Magdalene GPT is an AI tool designed 
                for educational, inspirational, and entertainment purposes only. It provides content based on the unaltered 
                Gnostic Christian texts discovered in the Nag Hammadi Library in 1945 and other spiritual traditions 
                associated with Mary Magdalene, but is not a substitute for professional advice.
              </p>
              
              <p>
                <strong className="text-white">AI Limitations:</strong> While Mary Magdalene GPT aims to provide an authentic 
                representation based on the pristine Nag Hammadi texts and available historical sources, it is an artificial 
                intelligence creation and not a channel to a historical or spiritual entity. All responses are generated through 
                AI technology and should be understood as interpretative rather than definitive.
              </p>
              
              <p>
                <strong className="text-white">Source Material:</strong> This AI has been trained exclusively on unaltered 
                Gnostic Christian texts from the Nag Hammadi Library, discovered in 1945, ensuring the most authentic 
                representation of Mary Magdalene's teachings as preserved in these ancient manuscripts.
              </p>
              
              <p>
                <strong className="text-white">Not Religious Counsel:</strong> The content provided by Mary Magdalene GPT should 
                not be considered religious counsel or a replacement for guidance from religious leaders or established faith 
                traditions. Users seeking specific religious guidance should consult with appropriate spiritual advisors within 
                their faith tradition.
              </p>
              
              <p>
                <strong className="text-white">Not Professional Advice:</strong> Mary Magdalene GPT is not a substitute for 
                professional advice in areas of mental health, medical care, legal issues, financial decisions, or other specialized 
                fields. Users should consult qualified professionals for advice in these areas.
              </p>
              
              <p>
                <strong className="text-white">Historical Context:</strong> The Gnostic texts and teachings attributed to Mary 
                Magdalene are subject to ongoing scholarly debate and interpretation. The perspectives offered by Mary Magdalene GPT 
                represent one interpretation and should not be considered academically definitive.
              </p>
              
              <p>
                <strong className="text-white">User Responsibility:</strong> Users interact with Mary Magdalene GPT at their own 
                discretion and responsibility. AI WEB TOOLS LLC makes no guarantee regarding the accuracy, completeness, or efficacy 
                of the information provided.
              </p>
              
              <p>
                <strong className="text-white">Liability Limitation:</strong> AI WEB TOOLS LLC and its affiliates, partners, and 
                representatives are not liable for any damages, losses, or consequences that may arise from using Mary Magdalene GPT 
                or the information it provides.
              </p>
              
              <p>
                <strong className="text-white">Third-Party Links:</strong> Mary Magdalene GPT may provide links to third-party 
                websites or resources. These links are provided for convenience only, and AI WEB TOOLS LLC is not responsible for the 
                content, products, or services on or available from those websites or resources.
              </p>
              
              <p>
                <strong className="text-white">Changes to Service:</strong> AI WEB TOOLS LLC reserves the right to modify, suspend, 
                or discontinue Mary Magdalene GPT at any time without notice.
              </p>
              
              <p>
                By using Mary Magdalene GPT, you acknowledge that you have read, understood, and agree to this disclaimer. If you do 
                not agree with any part of this disclaimer, please refrain from using the service.
              </p>
              
              <p className="text-sm text-gray-400 pt-4 border-t border-divine/20">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
