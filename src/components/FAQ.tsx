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
          <div>
            <span className="inline-block px-4 py-1.5 border border-gray-300 rounded-lg text-base font-medium text-[#333333] mb-5">
              Questions
            </span>
            <h2 className="text-5xl sm:text-3xl sm:leading-[1.15] lg:text-[2.75rem] font-medium text-[#333333] leading-[1.15] tracking-[-0.02em]">
              Frequently Ask Question
            </h2>
          </div>

          {/* Right - Accordion */}
          <div className="divide-y divide-gray-200">
            {faqItems.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start justify-between py-5 text-left group"
                  aria-expanded={openIndex === index}
                >
                  <div className="pr-8 flex-1">
                    <h3 className="text-lg font-semibold text-[#333333] mb-0">
                      {item.question}
                    </h3>
                    {/* Always show answer (matches design where all are expanded) */}
                    <p className="text-[15px] font-light text-[#333333] leading-relaxed mt-2">
                      {item.answer}
                    </p>
                  </div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9ca3af"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 mt-1"
                  >
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
