import { useTranslation } from "react-i18next";
import heroImage from "../assets/hero-image.png";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-white flex flex-col justify-center pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-8 lg:py-0">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-6 items-center">
          {/* Left Side Content */}
          <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0 z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#333333] leading-[1.2] lg:leading-[1.1] tracking-[-0.02em] mb-6">
              {t("hero.title")}
            </h1>

            <p className="text-sm sm:text-base lg:text-[16px] font-light text-[#303030] leading-[1.6] lg:leading-[1.7] mb-8 max-w-md mx-auto lg:mx-0">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://skamguard-710868323753.asia-southeast1.run.app/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#2AABEE] hover:bg-[#1C9AD9] text-white text-[15px] font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              >
                {t("hero.cta")}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <p className="mt-5 text-xs sm:text-sm text-gray-400 italic">
              {t("hero.footer")}
            </p>
          </div>

          {/* Right Side Content */}
          <div className="relative flex justify-center lg:justify-end items-center">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[90%] h-[110%] bg-[#F3F5F8] rounded-[2.5rem] -z-10 hidden lg:block" />

            <img
              src={heroImage}
              alt="Hand holding a smartphone displaying the SkamGuard app interface with scam analysis results and risk score statistics"
              className="relative z-10 w-full max-w-[480px] lg:max-w-[520px] max-h-[60vh] lg:max-h-[80vh] object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
