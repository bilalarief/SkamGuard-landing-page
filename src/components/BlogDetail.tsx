import { useParams, Link } from 'react-router-dom';
import blogData from '../data/blogData.json';
import CTABanner from './CTABanner';
import Blog from './Blog';
import Navigation from './Navigation';
import { useEffect } from 'react';

const getImageUrl = (path: string) => {
  return new URL(path, import.meta.url).href;
};

const BlogDetail = () => {
  const { slug } = useParams();
  const article = blogData.articles.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
        <Link to="/" className="text-[#2AABEE] hover:underline font-medium">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Article Header */}
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-start mb-20">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#333333] leading-[1.15] tracking-[-0.02em] mb-6">
                {article.title}
              </h1>
              <p className="text-base font-light text-[#333333] leading-relaxed mb-8">
                {article.summary}
              </p>
              
              <button className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8m-12 0l4-4m0 0l4 4m-4-4v12" />
                </svg>
                Share
              </button>
            </div>
            
            <div className="bg-[#EDF1F7] rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[450px]">
              <img 
                src={getImageUrl(article.image)} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Article Body */}
          <div className="max-w-3xl mx-auto mb-32">
            <div className="prose prose-lg prose-slate max-w-none">
              <h2 className="text-2xl font-semibold text-[#333333] mb-6">Introduction</h2>
              <p className="text-base font-normal text-[#333333] leading-relaxed mb-12">
                {article.content.introduction}
              </p>

              {article.content.sections.map((section, idx) => (
                <div key={idx} className="mb-12">
                  <h2 className="text-2xl font-semibold text-[#333333] mb-6">{section.title}</h2>
                  <p className="text-base font-normal text-[#333333] leading-relaxed mb-6 italic">
                    {section.text}
                  </p>
                  
                  {section.red_flags && (
                    <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                      <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Red Flags:</h4>
                      <ul className="space-y-3">
                        {section.red_flags.map((flag, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3 text-[16px] text-gray-700">
                            <span className="text-[#2AABEE] mt-1">•</span>
                            {flag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {section.what_to_do && (
                    <p className="text-[16px] text-gray-700 font-medium">
                      <span className="text-gray-900 font-bold">What to do: </span>
                      {section.what_to_do}
                    </p>
                  )}
                </div>
              ))}

              <h2 className="text-2xl font-semibold text-[#333333] mb-4">Conclusion</h2>
              <p className="text-[17px] font-light text-[#333333] leading-relaxed">
                {article.content.conclusion}
              </p>
            </div>
          </div>
        </div>

        {/* Similar Articles / Blog Section */}
        <Blog />
        
        <CTABanner />
      </main>
    </div>
  );
};

export default BlogDetail;
