interface BlogPost {
  title: string;
  excerpt: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'The Ultimate Guide to Spotting Scams in Malaysia',
    excerpt: 'Learn how to identify common scam tactics targeting Malaysians — from Macau Scams to love scams. Protect yourself before you lose money.',
  },
  {
    title: 'How AI is Revolutionizing Scam Detection in Malaysia',
    excerpt: 'Discusses how AI tools like SkamGuard use Gemini Vision and Vertex AI to analyze scam messages in real-time',
  },
  {
    title: '5 Red Flags Every Malaysian Should Know',
    excerpt: 'Quick-read listicle covering: urgency language, requests for personal info, suspicious URLs',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 border border-gray-300 rounded-lg text-base font-medium text-[#333333] mb-5">
            Blog
          </span>
          <h2 className="text-5xl sm:text-3xl sm:leading-[1.15] lg:text-[2.75rem] font-medium text-[#333333] leading-[1.15] tracking-[-0.02em]">
            Learn how to spot scams
            <br />
            before they happen
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              {/* Image placeholder */}
              <div className="bg-[#EDF1F7] rounded-2xl h-48 mb-5 overflow-hidden">
                <img
                  src=""
                  alt={`Blog thumbnail for article: ${post.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content */}
              <h3 className="text-lg font-semibold text-[#333333] leading-snug mb-2 group-hover:text-[#2AABEE] transition-colors">
                {post.title}
              </h3>
              <p className="text-[15px] font-light text-[#333333] leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>

        {/* See more button */}
        <div className="text-center">
          <a
            href="#"
            className="inline-block px-6 py-2.5 border border-gray-300 rounded-lg text-base font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
          >
            See more
          </a>
        </div>

      </div>
    </section>
  );
};

export default Blog;
