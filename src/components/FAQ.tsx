import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Is my data safe?',
    answer: "Yes. Your screenshots are processed securely and never stored permanently. We don't sell or share your data with anyone.",
  },
  {
    question: 'Does it work for scams in Bahasa Malaysia?',
    answer: 'Absolutely. SkamGuard is trained on Malaysian scam patterns, including common Bahasa Malaysia phrases used by scammers.',
  },
  {
    question: "What if the scam isn't in the database yet?",
    answer: "SkamGuard uses AI to detect scam tactics — not just known scams. Even if the exact message is new, it can spot urgency language, fake authority claims, and suspicious links.",
  },
  {
    question: 'Is my data safe?',
    answer: "Yes. Your screenshots are processed securely and never stored permanently. We don't sell or share your data with anyone.",
  },
  {
    question: 'Can I use this for free?',
    answer: 'Yes. SkamGuard is free for personal use with a daily limit. Premium plans for unlimited checks are coming soon.',
  },
  {
    question: 'How is this different from just Googling the number?',
    answer: "Google won't analyze the message content, check URL safety, or give you a risk score. SkamGuard does all three at once — and it's trained specifically on Malaysian scams.",
  },
  {
    question: "What if I'm not tech-savvy?",
    answer: "That's exactly who we built this for. Just upload the screenshot. Everything else is automatic.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-16">

          {/* Left - Header */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 border border-gray-300 rounded-lg text-sm sm:text-base font-medium text-[#333333] mb-5">
              Questions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#333333] leading-[1.2] lg:leading-[1.15] tracking-[-0.02em]">
              Frequently Ask
              <br className="hidden sm:block" />
              {" "}Question
            </h2>
          </div>

          {/* Right - Accordion */}
          <div className="divide-y divide-gray-200">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-2">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between py-6 text-left group transition-all"
                    aria-expanded={isOpen}
                  >
                    <h3 className="md:text-lg lg:text-xl text-md font-semibold transition-colors duration-300 text-[#333333]">
                      {item.question}
                    </h3>
                    <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`${isOpen ? 'text-[#2AABEE]' : 'text-gray-400'}`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-[16px] font-normal text-[#4a4a4a] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
