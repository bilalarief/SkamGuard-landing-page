import logoFooter from '../assets/logo-footer.png';

const CTABanner = () => {
  return (
    <section id="cta" className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto bg-[#2AABEE] rounded-3xl py-16 px-6 sm:px-12 text-center relative overflow-hidden">
        {/* Background watermark shield */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10">
          <svg width="200" height="200" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L3 7V12C3 17.55 6.84 22.74 12 24C17.16 22.74 21 17.55 21 12V7L12 2Z"/>
          </svg>
        </div>

        <div className="relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-50 leading-[1.2] lg:leading-[1.15] tracking-[-0.02em] mb-4">
            RM1.57 billion lost last year.
            <br className="hidden sm:block" />
            Don't be next.
          </h2>

          <p className="text-sky-100 text-sm sm:text-[15px] font-medium mb-8 max-w-lg mx-auto px-4">
            <span className="font-extrabold text-white">SkamGuard</span> gives you the one thing scammers hate most: time to think before you act.
          </p>

          <a
            href="#"
            className="inline-block px-6 py-3 bg-white text-gray-800 text-base font-medium rounded-md hover:bg-gray-100 transition-colors duration-200 mb-8"
          >
            Protect Yourself Now
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
