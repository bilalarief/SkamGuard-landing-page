import howItWorks1 from "../assets/howitworks-1.png";
import howItWorks2 from "../assets/howitworks-2.png";
import howItWorks3 from "../assets/howitworks-3.png";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 border border-gray-300 rounded-lg text-sm sm:text-base font-medium text-[#333333] mb-5">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#333333] leading-[1.2] lg:leading-[1.15] tracking-[-0.02em]">
            Three steps. Ten seconds.
            <br className="hidden sm:block" />
            Zero risk.
          </h2>
        </div>

        {/* Three Step Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Step 1 - Upload */}
          <div className="bg-[#F3F5F8] rounded-2xl p-6 flex flex-col">
            <img
              src={howItWorks1}
              alt="User interface showing the process of uploading a screenshot of a suspicious message to SkamGuard"
              className="max-w-full h-auto object-contain"
            />
            <h3 className="text-lg font-semibold text-[#333333] mb-2">
              Upload your screenshot
            </h3>
            <p className="text-[15px] font-light text-[#333333] leading-relaxed">
              Paste or drag any suspicious message image. Works on mobile and
              desktop.
            </p>
          </div>

          {/* Step 2 - AI Analyzes */}
          <div className="bg-[#F3F5F8] rounded-2xl p-6 flex flex-col">
            <img
              src={howItWorks2}
              alt="Visualization of SkamGuard AI analyzing message content, checking URLs for safety, and verifying phone numbers"
              className="max-w-full h-auto object-contain"
            />

            <h3 className="text-lg font-semibold text-[#333333] mb-2">
              AI analyzes instantly
            </h3>
            <p className="text-[15px] font-light text-[#333333] leading-relaxed">
              SkamGuard checks the message, verifies URLs, looks up phone
              numbers, and scans for scam patterns all at once.
            </p>
          </div>

          {/* Step 3 - Get Results */}
          <div className="bg-[#F3F5F8] rounded-2xl p-6 flex flex-col">
            <img
              src={howItWorks3}
              alt="A detailed SkamGuard risk report showing a risk score, identified red flags, and recommended next steps for the user"
              className="max-w-full h-auto object-contain"
            />

            <h3 className="text-lg font-semibold text-[#333333] mb-2">
              Get your risk report
            </h3>
            <p className="text-[15px] font-light text-[#333333] leading-relaxed">
              See your risk score (0–100), identified red flags, scam type, and
              what to do next. In Bahasa Malaysia and English.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
