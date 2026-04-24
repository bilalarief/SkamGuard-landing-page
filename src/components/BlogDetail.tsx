import { useParams, Link } from 'react-router-dom';
import blogData from '../data/blogData.json';
import CTABanner from './CTABanner';
import Blog from './Blog';
import Navigation from './Navigation';
import { useEffect, useState } from 'react';

const getImageUrl = (path: string) => {
  return new URL(path, import.meta.url).href;
};

const BlogDetail = () => {
  const { slug } = useParams();
  const article = blogData.articles.find((a) => a.slug === slug);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

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

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(article.title);

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
              
              <button 
                onClick={() => setIsShareOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
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

      {/* Share Modal */}
      {isShareOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsShareOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Share Article</h3>
              <button 
                onClick={() => setIsShareOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <a 
                href={`https://wa.me/?text=${shareTitle}%20${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">WhatsApp</span>
              </a>

              <a 
                href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Twitter (X)</span>
              </a>

              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Facebook</span>
              </a>

              <a 
                href={`https://t.me/share/url?url=${shareUrl}&text=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 bg-[#26A5E4] rounded-full flex items-center justify-center text-white">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0C5.346 0 0 5.346 0 11.944s5.346 11.944 11.944 11.944 11.944-5.346 11.944-11.944S18.542 0 11.944 0zm5.206 8.19l-1.745 8.227c-.132.581-.475.725-.96.452l-2.652-1.954-1.28 1.231c-.141.141-.26.26-.534.26l.19-2.698 4.912-4.437c.213-.189-.046-.294-.33-.106l-6.07 3.823-2.615-.818c-.568-.177-.579-.568.118-.84l10.22-3.938c.473-.172.886.11.746.833z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Telegram</span>
              </a>
            </div>

            <button 
              onClick={copyToClipboard}
              className={`w-full py-3 rounded-xl border-2 transition-all font-semibold flex items-center justify-center gap-2 ${
                isCopied 
                ? 'bg-green-50 border-green-200 text-green-600' 
                : 'bg-white border-gray-200 text-gray-700 hover:border-[#2AABEE] hover:text-[#2AABEE]'
              }`}
            >
              {isCopied ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  Copy Link
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
