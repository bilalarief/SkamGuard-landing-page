import { Link } from 'react-router-dom';
import blogData from '../data/blogData.json';

const Blog = () => {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 border border-gray-300 rounded-lg text-sm sm:text-base font-medium text-[#333333] mb-5">
            Blog
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#333333] leading-[1.2] lg:leading-[1.15] tracking-[-0.02em]">
            Learn how to spot scams
            <br className="hidden sm:block" />
            before they happen
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogData.articles.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group flex flex-col h-full bg-white transition-all duration-300"
            >
              {/* Image Container */}
              <div className="bg-[#EDF1F7] rounded-2xl h-56 mb-5 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-[#333333] leading-snug mb-3 group-hover:text-[#2AABEE] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-[15px] font-light text-[#555555] leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
