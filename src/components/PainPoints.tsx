import painPoint1 from '../assets/PainPoints-1.png';
import painPoint2 from '../assets/PainPoints-2.png';
import painPoint3 from '../assets/PainPoints-3.png';

const PainPoints = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="inline-block px-4 py-1.5 border border-gray-300 rounded-lg text-sm sm:text-base font-medium text-gray-900 mb-5">
            Problem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#333333] leading-[1.2] lg:leading-[1.15] tracking-[-0.02em] mb-4">
            You know something feels off
            <br />
            but you're not sure
          </h2>
          <p className="text-[#333333] text-sm sm:text-base lg:text-[16px] font-light">
            And by the time you figure it out, it's too late
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
                alt="Chat conversation showing a bank scam message in Bahasa Malaysia with a reply"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-[15px] text-[#333333] font-light leading-relaxed">
              That WhatsApp prize. The "urgent" bank call. The too-good job offer.
            </p>
          </div>

          {/* Card 2 - Phone Number */}
          <div className="bg-white rounded-2xl p-6 pb-8">
            <div className="bg-[#F3F5F8] rounded-xl h-52 mb-6 flex items-center justify-center overflow-hidden p-4">
              <img
                src={painPoint2}
                alt="Phone number input showing +60 11-1234 5678 being checked for scam"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-[15px] text-[#333333] font-light leading-relaxed">
              You hesitate. You screenshot it. You Google the number. But scammers count on this delay and on your doubt.
            </p>
          </div>

          {/* Card 3 - Statistics */}
          <div className="bg-white rounded-2xl p-6 pb-8">
            <div className="bg-[#F3F5F8] rounded-xl h-52 mb-6 flex items-center justify-center overflow-hidden p-4">
              <img
                src={painPoint3}
                alt="Bar chart showing 2025 statistics with RM2.7 billion lost to scams in Malaysia"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-[15px] text-[#333333] font-light leading-relaxed">
              Malaysians lost RM2.7 billion to online scams in just 11 months of 2025. Investment fraud alone accounts for RM1.47 billion victims lured by fake profits before being hit with hidden fees they never saw coming.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainPoints;
