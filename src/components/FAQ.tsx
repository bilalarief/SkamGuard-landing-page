import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') },
    { question: t('faq.q6'), answer: t('faq.a6') },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-16">

          {/* Left - Header */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 border border-gray-300 rounded-lg text-sm sm:text-base font-medium text-[#333333] mb-5">
              {t("faq.label")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#333333] leading-[1.2] lg:leading-[1.15] tracking-[-0.02em]">
              {t("faq.title")}
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
