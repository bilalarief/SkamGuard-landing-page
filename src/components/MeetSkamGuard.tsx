import solutionImage from '../assets/Solution-Image.png';

const MeetSkamGuard = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 border border-gray-300 rounded-lg text-base font-medium text-[#333333] mb-5">
              Solution
            </span>
            <h2 className="text-5xl sm:text-3xl sm:leading-[1.15] lg:text-[2.75rem] font-medium text-[#1a1a1a] leading-[1.15] tracking-[-0.02em] mb-8">
              Meet SkamGuard Your Instant Scam Detector
            </h2>

            <p className="text-[15px] text-[#333333] font-light leading-[1.8] max-w-md">
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
              className="w-full max-w-[380px] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default MeetSkamGuard;
