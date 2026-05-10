import { useTranslation } from 'react-i18next';
import logoFooter from '../assets/logo-footer.png';

const CTABanner = () => {
  const { t } = useTranslation();

  return (
    <section id="cta" className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto bg-[#2AABEE] rounded-3xl py-16 px-6 sm:px-12 text-center relative overflow-hidden">
        <img
        src="/cta-banner/image.png"
        alt="cta banner"
        className="absolute top-0 left-0 right-0 z-0"
        />
        <div className="relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-50 leading-[1.2] lg:leading-[1.15] tracking-[-0.02em] mb-4">
            {t("cta_banner.title")}
          </h2>

          <p className="text-sky-100 text-sm sm:text-[15px] font-medium mb-8 max-w-lg mx-auto px-4">
            <span className="font-extrabold text-white">SkamGuard</span> {t("cta_banner.subtitle")}
          </p>

          <a
            href="https://skamguard-710868323753.asia-southeast1.run.app/"
            className="inline-block px-6 py-3 bg-white text-gray-800 text-base font-medium rounded-md hover:bg-gray-100 transition-colors duration-200 mb-8"
          >
            {t("cta_banner.button")}
          </a>

          <div className="flex items-center justify-center">
            <img src={logoFooter} alt="SkamGuard Logo" className="h-8 w-auto object-contain brightness-0 invert" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
