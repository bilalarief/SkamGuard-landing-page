import { useTranslation } from 'react-i18next';
import painPoint1 from '../assets/PainPoints-1.png';
import painPoint2 from '../assets/PainPoints-2.png';
import painPoint3 from '../assets/PainPoints-3.png';

const PainPoints = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-28 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="inline-block px-4 py-1.5 border border-gray-300 rounded-lg text-sm sm:text-base font-medium text-gray-900 mb-5">
            {t("pain_points.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#333333] leading-[1.2] lg:leading-[1.15] tracking-[-0.02em] mb-4">
            {t("pain_points.title")}
          </h2>
          <p className="text-[#333333] text-sm sm:text-base lg:text-[16px] font-light">
            {t("pain_points.subtitle")}
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 - Scam Message */}
          <div className="bg-white rounded-2xl p-6 pb-8">
            {/* Image placeholder area */}
            <div className="bg-[#F3F5F8] rounded-xl h-52 mb-6 flex items-center justify-center overflow-hidden p-4">
              <img
                src={painPoint1}
                alt={t("pain_points.c1_text")}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-[15px] text-[#333333] font-light leading-relaxed">
              {t("pain_points.c1_text")}
            </p>
          </div>

          {/* Card 2 - Phone Number */}
          <div className="bg-white rounded-2xl p-6 pb-8">
            <div className="bg-[#F3F5F8] rounded-xl h-52 mb-6 flex items-center justify-center overflow-hidden p-4">
              <img
                src={painPoint2}
                alt={t("pain_points.c2_text")}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-[15px] text-[#333333] font-light leading-relaxed">
              {t("pain_points.c2_text")}
            </p>
          </div>

          {/* Card 3 - Statistics */}
          <div className="bg-white rounded-2xl p-6 pb-8">
            <div className="bg-[#F3F5F8] rounded-xl h-52 mb-6 flex items-center justify-center overflow-hidden p-4">
              <img
                src={painPoint3}
                alt={t("pain_points.c3_text")}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-[15px] text-[#333333] font-light leading-relaxed">
              {t("pain_points.c3_text")}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainPoints;
