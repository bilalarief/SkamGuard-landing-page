import solutionImage from '../assets/Solution-Image.png';

const MeetSkamGuard = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left flex flex-col h-full">
            <div className="mb-auto">
              <span className="inline-block px-4 py-1.5 border border-gray-300 rounded-lg text-sm sm:text-base font-medium text-[#333333] mb-5">
                Solution
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1a1a1a] leading-[1.2] lg:leading-[1.15] tracking-[-0.02em] mb-8 lg:mb-12">
                Meet SkamGuard:
                <br className="sm:hidden" />
                Your Instant Scam Detector
              </h2>
            </div>

            <p className="text-sm sm:text-base lg:text-[15px] text-[#333333] font-light leading-[1.6] lg:leading-[1.8] max-w-md mx-auto lg:mx-0 lg:mt-16">
              SkamGuard is your real-time defense against online scams. Just upload a
              screenshot of a suspicious message and get a detailed risk report in seconds.
              No guesswork. No Googling. No panic. Just clear answers when you need them
              most.
            </p>
          </div>

          {/* Right - Phone Image */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src={solutionImage}
              alt="SkamGuard app showing scan screenshot feature with message analysis and Analyze Now button"
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default MeetSkamGuard;
