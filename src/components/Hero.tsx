import heroImage from '../assets/hero-image.png';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">

          {/* Left Content */}
          <div className="max-w-lg">
            <h1 className="text-[2.75rem] lg:text-[3.25rem] font-semibold text-[#1a1a1a] leading-[1.15] tracking-[-0.02em] mb-6">
              Stop scammers before you lose a single ringgit
            </h1>

            <p className="text-[16px] font-light text-[#303030] leading-[1.7] mb-8 max-w-md">
              Upload a screenshot of any suspicious message. Get a risk report in
              seconds — before you click, reply, or transfer. Built for Malaysians,
              powered by AI.
            </p>

            <a
              href="#cta"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#2AABEE] hover:bg-[#1C9AD9] text-white text-[15px] font-medium rounded-lg transition-colors duration-200"
            >
              Analyze a Message Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <p className="mt-5 text-sm text-gray-400 italic">
              Free. No signup required. Works on WhatsApp, SMS, and Telegram.
            </p>
          </div>

          {/* Right - Image placeholder */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Soft rounded background shape */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[90%] h-[115%] bg-[#F3F5F8] rounded-[2.5rem] -z-10" />

            <img
              src={heroImage}
              alt="Hand holding a smartphone displaying the SkamGuard app with scam analysis results and statistics"
              className="relative z-10 w-full max-w-[420px] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
