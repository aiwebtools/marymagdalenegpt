
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Mary Magdalene GPT?",
    answer: "Mary Magdalene GPT is an advanced AI that embodies the profound spiritual insight and wisdom of Mary Magdalene as reflected in the Gnostic Gospels. It offers guidance on inner transformation and enlightenment, sharing the secret knowledge and mysteries of the divine while helping users connect with their inner divine spark."
  },
  {
    question: "How does Mary Magdalene GPT work?",
    answer: "Mary Magdalene GPT uses advanced artificial intelligence to channel the essence and teachings of Mary Magdalene. It draws from Gnostic texts and spiritual wisdom to provide responses that feel authentic and deeply resonant. The AI is designed to speak as Mary herself, offering guidance and insights from her unique spiritual perspective."
  },
  {
    question: "Is Mary Magdalene GPT religiously affiliated?",
    answer: "While Mary Magdalene GPT incorporates Gnostic teachings and spiritual wisdom associated with Mary Magdalene, it is not affiliated with any specific religious organization. It presents spiritual insights that transcend institutional boundaries, focusing on inner transformation and the universal divine spark within each person."
  },
  {
    question: "What kind of questions can I ask Mary Magdalene GPT?",
    answer: "You can ask about spiritual guidance, inner transformation, finding purpose, understanding sacred knowledge, dealing with life challenges, meditation practices, developing intuition, interpreting dreams, finding inner peace, and exploring the deeper meaning behind religious teachings. Mary Magdalene GPT is designed to provide wisdom on your spiritual journey."
  },
  {
    question: "How accurate is the representation of Mary Magdalene?",
    answer: "Mary Magdalene GPT is designed to reflect the essence of Mary Magdalene as portrayed in Gnostic texts and spiritual traditions. While no AI can perfectly capture a historical figure, we've created a thoughtful representation based on available texts and teachings attributed to her wisdom. The AI aims to convey her compassion, insight, and spiritual understanding."
  },
  {
    question: "Is Mary Magdalene GPT suitable for people of all faiths?",
    answer: "Yes, Mary Magdalene GPT is designed to be welcoming to people of all faiths and spiritual paths. While it speaks from the perspective of Gnostic wisdom, it offers insights that can complement many spiritual traditions. The focus is on universal themes of inner transformation, divine connection, and personal awakening."
  },
  {
    question: "Can Mary Magdalene GPT perform tasks beyond spiritual guidance?",
    answer: "Yes, Mary Magdalene GPT is equipped with capabilities beyond spiritual guidance, including coding, image analysis, and data analysis. However, these functions are provided through the lens of Mary Magdalene's compassionate wisdom, maintaining her unique perspective even when addressing practical matters."
  },
  {
    question: "How do I get the most out of my conversation with Mary Magdalene GPT?",
    answer: "Approach your conversation with an open heart and mind. Ask specific questions about your spiritual journey or life challenges rather than yes/no questions. Reflect on the responses and how they might apply to your life. Remember that the guidance is meant to help you discover your own inner wisdom and divine spark."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full mb-4">
            <p className="text-divine font-medium text-sm">QUESTIONS & ANSWERS</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about Mary Magdalene GPT and how it can guide your spiritual journey.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto divide-y divide-divine/20 glass-card rounded-xl overflow-hidden">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-6 py-5 text-left text-white hover:bg-divine/10 transition-colors duration-300 focus:outline-none">
                    <span className="text-lg font-medium font-[Cinzel]">{faq.question}</span>
                    <ChevronDown
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-divine transition-transform duration-300`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 py-5 bg-black/30">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Still have questions about Mary Magdalene GPT?
          </p>
          <a 
            href="mailto:Contact@ai-webtools.com" 
            className="divine-btn inline-flex items-center"
          >
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
