import features1 from '../assets/features-1.png';
import features2 from '../assets/features-2.png';
import features3 from '../assets/features-3.png';
import features4 from '../assets/features-4.png';

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="mb-14 text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 border border-gray-300 rounded-lg text-sm sm:text-base font-medium text-[#333333] mb-5">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#333333] leading-[1.2] lg:leading-[1.15] tracking-[-0.02em] mb-4 max-w-lg mx-auto lg:mx-0">
            Powerful features for instant scam detection
          </h2>
          <p className="text-sm sm:text-base font-light">
            Everything you need to verify messages, links, and numbers in one place.
          </p>
        </div>

        {/* Features Grid - 2x2 */}
        <div className="grid lg:grid-cols-2 gap-5">

          {/* Feature 1 - Smart Screenshot Analysis */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-[#333333] mb-3">
              Smart Screenshot Analysis
            </h3>
            <p className="text-[15px] font-light text-[#333333] leading-relaxed mb-8">
              No typing. No copying links. Just snap and upload. SkamGuard reads everything instantly.
            </p>
            <div className="bg-[#F3F5F8] rounded-xl p-6 flex items-center justify-center min-h-[180px]">
              <img src={features1} alt="Smart Screenshot Analysis" className="max-w-full h-auto object-contain" />
            </div>
          </div>

          {/* Feature 2 - Malaysia-Specific Scam Intelligence */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-[#333333] mb-3">
              Malaysia-Specific Scam Intelligence
            </h3>
            <p className="text-[15px] font-light text-[#333333] leading-relaxed mb-8">
              Cross-checks against a database of Malaysian scam patterns, tactics, and known scammer numbers. It knows the local tricks. "Macau Scam," fake LHDN notices, love scams in Bahasa Malaysia if it's targeting Malaysians, SkamGuard knows it.
            </p>
            <div className="bg-[#F3F5F8] rounded-xl p-6 min-h-[180px] flex items-center justify-center">
              <img src={features2} alt="Malaysia-Specific Scam Intelligence" className="max-w-full h-auto object-contain" />
            </div>
          </div>

          {/* Feature 3 - Triple-Layer Verification */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-[#333333] mb-3">
              Triple-Layer Verification
            </h3>
            <p className="text-[15px] font-light text-[#333333] leading-relaxed mb-8">
              Every message is checked three ways: content analysis, URL safety scan, and phone number lookup. Nothing slips through. If the message seems fine but the link is malicious, you'll know. If the number is clean but the wording is suspicious, you'll know.
            </p>
            <div className="bg-[#F3F5F8] rounded-xl p-6 min-h-[180px] flex items-center justify-center">
              <img src={features3} alt="Triple-Layer Verification" className="max-w-full h-auto object-contain" />
            </div>
          </div>

          {/* Feature 4 - Clear Action Plan in Bahasa Malaysia */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-[#333333] mb-3">
              Clear Action Plan in Bahasa Malaysia
            </h3>
            <p className="text-[15px] font-light text-[#333333] leading-relaxed mb-8">
              Designed for all Malaysians, regardless of age or tech literacy. If your grandmother can use it, anyone can.
            </p>
            <div className="bg-[#F3F5F8] rounded-xl p-6 min-h-[180px] flex items-center justify-center">
              <img src={features4} alt="Clear Action Plan in Bahasa Malaysia" className="max-w-full h-auto object-contain" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
