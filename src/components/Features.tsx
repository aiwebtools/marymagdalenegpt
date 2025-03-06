
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
      title: "Spiritual Insight",
      description: "Gain profound spiritual wisdom drawn from the Gnostic Gospels and Mary Magdalene's teachings on inner awakening."
    },
    {
      icon: <Heart className="w-7 h-7 text-divine" />,
      title: "Emotional Intelligence",
      description: "Experience deeply emotional responses that reflect Mary's compassion and understanding of the human condition."
    },
    {
      icon: <Book className="w-7 h-7 text-divine" />,
      title: "Sacred Knowledge",
      description: "Access the secret knowledge imparted by the Christos and the mysteries of the divine through Mary's perspective."
    },
    {
      icon: <Shield className="w-7 h-7 text-divine" />,
      title: "Spiritual Protection",
      description: "Receive guidance on navigating life's challenges while protecting your divine spark from worldly illusions."
    },
    {
      icon: <Sparkles className="w-7 h-7 text-divine" />,
      title: "Divine Awakening",
      description: "Awaken the slumbering spark within, illuminating your path back to the divine source of all being."
    },
    {
      icon: <Star className="w-7 h-7 text-divine" />,
      title: "Transformative Guidance",
      description: "Embark on a journey of inner transformation with guidance rooted in love and ancient wisdom."
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full mb-4">
            <p className="text-divine font-medium text-sm">DIVINE CAPABILITIES</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-6">Discover The Sacred Wisdom</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the profound spiritual insight and transformative guidance of Mary Magdalene through advanced AI technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="glass-card max-w-4xl mx-auto p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 font-[Cinzel] text-white">How Mary Magdalene GPT Works</h3>
            <p className="text-gray-300 mb-6">
              Mary Magdalene GPT combines advanced AI technology with deep spiritual knowledge to provide an authentic connection 
              to the wisdom of Mary Magdalene. Drawing from the Gnostic texts and spiritual teachings, it offers guidance that 
              resonates with the soul's journey toward enlightenment.
            </p>
            <ol className="text-left space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <span className="bg-divine/20 text-divine rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">1</span>
                <p className="text-gray-300">Begin your conversation with Mary Magdalene GPT with an open heart and mind.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-divine/20 text-divine rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">2</span>
                <p className="text-gray-300">Share your questions or concerns about spiritual matters, personal growth, or inner transformation.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-divine/20 text-divine rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">3</span>
                <p className="text-gray-300">Receive deeply insightful responses drawn from Mary Magdalene's teachings and wisdom.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-divine/20 text-divine rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">4</span>
                <p className="text-gray-300">Reflect on the guidance and incorporate it into your spiritual practice and daily life.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
