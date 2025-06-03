
import { Eye, Book, Heart, Shield, Star, Sparkles } from "lucide-react";

const FeatureCard = ({ icon, title, description }: { icon: JSX.Element; title: string; description: string }) => {
  return (
    <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-neon group">
      <div className="bg-divine/10 rounded-full w-14 h-14 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-divine/30">
        {icon}
      </div>
      <h3 className="text-white text-xl font-[Cinzel] mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Eye className="w-7 h-7 text-divine" />,
      title: "AI Spiritual Insights",
      description: "Access profound spiritual wisdom through our advanced AI tool trained on the unaltered Gnostic Christian texts of the Nag Hammadi Library, discovered in 1945. Free AI-powered spiritual guidance."
    },
    {
      icon: <Heart className="w-7 h-7 text-divine" />,
      title: "Emotional AI Intelligence",
      description: "Experience deeply emotional AI responses that reflect Mary's compassion and understanding. Our free AI tool provides empathetic spiritual guidance based on authentic Gnostic gospels."
    },
    {
      icon: <Book className="w-7 h-7 text-divine" />,
      title: "AI Knowledge Base",
      description: "Access sacred knowledge through our AI tool trained on the secret teachings imparted by the Christos. Free artificial intelligence powered by the original Nag Hammadi texts."
    },
    {
      icon: <Shield className="w-7 h-7 text-divine" />,
      title: "AI Spiritual Protection",
      description: "Receive AI-powered guidance on navigating life's challenges while protecting your divine spark. Our free AI tool provides spiritual protection based on unmodified ancient wisdom."
    },
    {
      icon: <Sparkles className="w-7 h-7 text-divine" />,
      title: "AI Divine Awakening",
      description: "Awaken your inner spark with our revolutionary AI tool. Free artificial intelligence technology helps illuminate your path through teachings from pristine Gnostic texts."
    },
    {
      icon: <Star className="w-7 h-7 text-divine" />,
      title: "AI Transformation Tool",
      description: "Embark on inner transformation with our free AI spiritual guide. Advanced artificial intelligence rooted in love and unaltered ancient wisdom from the Nag Hammadi discovery."
    }
  ];

  return (
    <section id="features" className="py-24 relative" itemScope itemType="https://schema.org/ItemList">
      <meta itemProp="name" content="Free AI Tools Features" />
      <meta itemProp="description" content="Discover the powerful features of our free AI spiritual tools and artificial intelligence applications" />
      
      <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full mb-4">
            <p className="text-divine font-medium text-sm">FREE AI TOOLS CAPABILITIES</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-6">Discover The Sacred AI Wisdom</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the profound spiritual insight and transformative guidance of Mary Magdalene through our advanced free AI tools technology, trained exclusively on unaltered Gnostic Christian texts from the Nag Hammadi Library discovered in 1945.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
              <meta itemProp="position" content={`${index + 1}`} />
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="glass-card max-w-4xl mx-auto p-8 rounded-xl" itemScope itemType="https://schema.org/HowTo">
            <h3 className="text-2xl font-bold mb-6 font-[Cinzel] text-white" itemProp="name">How Our Free AI Tools Work</h3>
            <p className="text-gray-300 mb-6" itemProp="description">
              Mary Magdalene GPT combines advanced free AI technology with deep spiritual knowledge to provide an authentic connection 
              to the wisdom of Mary Magdalene. Our AI tools are trained exclusively on the unaltered Gnostic Christian texts discovered in the 
              Nag Hammadi Library in 1945, offering guidance that resonates with the soul's journey toward enlightenment through 
              the most authentic ancient sources available.
            </p>
            <ol className="text-left space-y-4 mb-6">
              <li className="flex items-start gap-3" itemScope itemType="https://schema.org/HowToStep" itemProp="step">
                <span className="bg-divine/20 text-divine rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">1</span>
                <p className="text-gray-300" itemProp="text">Begin your conversation with our free AI spiritual tool with an open heart and mind.</p>
              </li>
              <li className="flex items-start gap-3" itemScope itemType="https://schema.org/HowToStep" itemProp="step">
                <span className="bg-divine/20 text-divine rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">2</span>
                <p className="text-gray-300" itemProp="text">Share your questions with our AI tool about spiritual matters, personal growth, or inner transformation.</p>
              </li>
              <li className="flex items-start gap-3" itemScope itemType="https://schema.org/HowToStep" itemProp="step">
                <span className="bg-divine/20 text-divine rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">3</span>
                <p className="text-gray-300" itemProp="text">Receive deeply insightful AI-powered responses drawn from Mary Magdalene's teachings and pristine Nag Hammadi texts.</p>
              </li>
              <li className="flex items-start gap-3" itemScope itemType="https://schema.org/HowToStep" itemProp="step">
                <span className="bg-divine/20 text-divine rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">4</span>
                <p className="text-gray-300" itemProp="text">Reflect on the AI guidance and incorporate it into your spiritual practice and daily life.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
