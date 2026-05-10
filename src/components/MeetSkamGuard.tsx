import { useTranslation } from 'react-i18next';
import solutionImage from '../assets/Solution-Image.png';

const MeetSkamGuard = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left flex flex-col h-full">
            <div className="mb-auto">
              <span className="inline-block px-4 py-1.5 border border-gray-300 rounded-lg text-sm sm:text-base font-medium text-[#333333] mb-5">
                {t("about.label")}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1a1a1a] leading-[1.2] lg:leading-[1.15] tracking-[-0.02em] mb-8 lg:mb-12">
                {t("about.title")}
              </h2>
            </div>

            <p className="text-sm sm:text-base lg:text-[15px] text-[#333333] font-light leading-[1.6] lg:leading-[1.8] max-w-md mx-auto lg:mx-0 lg:mt-16">
              {t("about.text")}
            </p>
          </div>

          {/* Right - Phone Image */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src={solutionImage}
              alt="SkamGuard app"
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default MeetSkamGuard;
