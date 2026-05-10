import { useTranslation } from "react-i18next";
import howItWorks1 from "../assets/howitworks-1.png";
import howItWorks2 from "../assets/howitworks-2.png";
import howItWorks3 from "../assets/howitworks-3.png";

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 border border-gray-300 rounded-lg text-sm sm:text-base font-medium text-[#333333] mb-5">
            {t("how_it_works.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#333333] leading-[1.2] lg:leading-[1.15] tracking-[-0.02em]">
            {t("how_it_works.title")}
          </h2>
        </div>

        {/* Three Step Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Step 1 - Upload */}
          <div className="bg-[#F3F5F8] rounded-2xl p-6 flex flex-col">
            <img
              src={howItWorks1}
              alt={t("how_it_works.s1_title")}
              className="max-w-full h-auto object-contain"
            />
            <h3 className="text-lg font-semibold text-[#333333] mb-2">
              {t("how_it_works.s1_title")}
            </h3>
            <p className="text-[15px] font-light text-[#333333] leading-relaxed">
              {t("how_it_works.s1_text")}
            </p>
          </div>

          {/* Step 2 - AI Analyzes */}
          <div className="bg-[#F3F5F8] rounded-2xl p-6 flex flex-col">
            <img
              src={howItWorks2}
              alt={t("how_it_works.s2_title")}
              className="max-w-full h-auto object-contain"
            />

            <h3 className="text-lg font-semibold text-[#333333] mb-2">
              {t("how_it_works.s2_title")}
            </h3>
            <p className="text-[15px] font-light text-[#333333] leading-relaxed">
              {t("how_it_works.s2_text")}
            </p>
          </div>

          {/* Step 3 - Get Results */}
          <div className="bg-[#F3F5F8] rounded-2xl p-6 flex flex-col">
            <img
              src={howItWorks3}
              alt={t("how_it_works.s3_title")}
              className="max-w-full h-auto object-contain"
            />

            <h3 className="text-lg font-semibold text-[#333333] mb-2">
              {t("how_it_works.s3_title")}
            </h3>
            <p className="text-[15px] font-light text-[#333333] leading-relaxed">
              {t("how_it_works.s3_text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
