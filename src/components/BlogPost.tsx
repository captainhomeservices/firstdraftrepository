import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Clock, Share2, BookOpen } from 'lucide-react';
import SEOHead from './SEOHead';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

interface BlogPostProps {
  title: string;
  content?: string;
  date: string;
  author: string;
  category: string;
  image?: string;
  excerpt: string;
  keywords?: string[];
  readTime?: string;
  slug?: string;
  children?: React.ReactNode;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  content,
  date,
  author,
  category,
  image,
  excerpt,
  keywords = [],
  readTime,
  slug,
  children
}) => {
  const canonicalUrl = slug ? `https://austinlakemanagement.com/blog/${slug}` : 'https://austinlakemanagement.com/blog';

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": excerpt,
    "image": image || "https://austinlakemanagement.com/lake weed removal pose copy.jpeg",
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Captain Home Services",
      "logo": {
        "@type": "ImageObject",
        "url": "https://austinlakemanagement.com/captain logo green  copy copy.png"
      }
    },
    "datePublished": date,
    "dateModified": date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "keywords": keywords.join(", "),
    "articleSection": category,
    "wordCount": content ? content.split(' ').length : 1000,
    "timeRequired": readTime || "5-10 minutes"
  };

  // Enhanced content processing with better internal linking
  const processContent = (content: string) => {
    let processedContent = content;

    // Convert markdown-style links to HTML with proper styling
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    processedContent = processedContent.replace(linkRegex, '<a href="$2" class="text-teal-600 hover:text-teal-700 font-medium underline decoration-2 underline-offset-2 transition-colors duration-200">$1</a>');

    // Add internal links for key terms
    const internalLinks = {
      'Captain Home Services': '/contact',
      'Austin lake weed removal': '/how-it-works',
      'Lake Austin hydrilla removal': '/contact',
      'Austin aquatic vegetation removal': '/how-it-works',
      'TPWD permits': '/permitting',
      'LCRA compliance': '/permitting',
      'manual lake weed removal': '/how-it-works',
      'chemical-free lake cleaning': '/how-it-works',
      'Austin lake management': '/contact',
      'Lake Austin weed removal': '/contact',
      'hydrilla control': '/how-it-works',
      'aquatic vegetation management': '/contact'
    };

    // Apply internal links only to first occurrence and avoid double-linking
    Object.entries(internalLinks).forEach(([term, url]) => {
      const regex = new RegExp(`\\b(${term})\\b(?![^<]*>)`, 'i');
      if (processedContent.match(regex) && !processedContent.includes(`href="${url}"`)) {
        processedContent = processedContent.replace(regex, `<a href="${url}" class="text-teal-600 hover:text-teal-700 font-semibold underline decoration-2 underline-offset-2 transition-colors duration-200">$1</a>`);
      }
    });

    return processedContent;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title={`${title} | Captain Home Services Blog`}
        description={excerpt}
        keywords={keywords.join(", ")}
        canonicalUrl={canonicalUrl}
        ogImage={image}
        ogType="article"
        structuredData={blogPostSchema}
      />

      {/* Hero Section */}
      <section className="relative bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <Link
            to="/blog"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-6 md:mb-8 transition-colors duration-200 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">Back to Captain's Log</span>
          </Link>
          
          <div className="mb-6">
            <span className="inline-flex items-center bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
              <BookOpen className="h-4 w-4 mr-1" />
              {category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            {title}
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-600 gap-4 md:gap-6 text-sm md:text-base">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-gray-400" />
              <time dateTime={date}>{date}</time>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2 text-gray-400" />
              <span>{author}</span>
            </div>
            {readTime && (
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-gray-400" />
                <span>{readTime}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {image && (
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src={image}
                alt={title}
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {children ? (
            children
          ) : content ? (
            <div className="prose prose-lg max-w-none">
              <style jsx>{`
                .prose {
                  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                  line-height: 1.7;
                  color: #374151;
                }
                .prose h2 {
                  font-size: 1.875rem;
                  font-weight: 700;
                  color: #111827;
                  margin-top: 2.5rem;
                  margin-bottom: 1.25rem;
                  line-height: 1.3;
                  letter-spacing: -0.025em;
                }
                .prose h3 {
                  font-size: 1.5rem;
                  font-weight: 600;
                  color: #111827;
                  margin-top: 2rem;
                  margin-bottom: 1rem;
                  line-height: 1.4;
                }
                .prose p {
                  font-size: 1.125rem;
                  line-height: 1.7;
                  margin-bottom: 1.5rem;
                  color: #374151;
                }
                .prose strong {
                  font-weight: 600;
                  color: #111827;
                }
                .prose ul {
                  margin: 1.5rem 0;
                  padding-left: 0;
                }
                .prose li {
                  font-size: 1.125rem;
                  line-height: 1.7;
                  margin-bottom: 0.75rem;
                  padding-left: 1.5rem;
                  position: relative;
                  color: #374151;
                }
                .prose li::before {
                  content: '•';
                  color: #0d9488;
                  font-weight: bold;
                  position: absolute;
                  left: 0;
                  font-size: 1.25rem;
                }
                .prose a {
                  color: #0d9488;
                  text-decoration: underline;
                  text-decoration-thickness: 2px;
                  text-underline-offset: 3px;
                  font-weight: 500;
                  transition: all 0.2s ease;
                }
                .prose a:hover {
                  color: #0f766e;
                  text-decoration-thickness: 3px;
                }
              `}</style>

              <div
                dangerouslySetInnerHTML={{
                  __html: processContent(content)
                    .replace(/\n\n/g, '</p><p>')
                    .replace(/^/, '<p>')
                    .replace(/$/, '</p>')
                    .replace(/## ([^<]+)/g, '<h2>$1</h2>')
                    .replace(/### ([^<]+)/g, '<h3>$1</h3>')
                    .replace(/<p><h/g, '<h')
                    .replace(/<\/h([1-6])><\/p>/g, '</h$1>')
                    .replace(/<p><\/p>/g, '')
                }}
              />
            </div>
          ) : null}
        </div>
      </article>

      {/* Keywords Section */}
      {keywords.length > 0 && (
        <section className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Topics</h3>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="bg-white text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium border border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition-colors duration-200"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Clear Your Waterfront?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            <strong>Captain Home Services</strong> provides expert lake weed removal and aquatic vegetation management throughout the Austin area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="bg-white text-teal-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Free Estimate
            </Link>
            <Link
              to="/how-it-works"
              onClick={scrollToTop}
              className="bg-teal-700 hover:bg-teal-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg font-semibold transition-colors duration-200 border border-teal-500 shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles Navigation */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Continue Reading
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Explore more insights on Austin lake management and aquatic vegetation control
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                onClick={scrollToTop}
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg"
              >
                <BookOpen className="h-5 w-5 inline mr-2" />
                View All Articles
              </Link>
              <Link
                to="/how-it-works"
                onClick={scrollToTop}
                className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
              >
                Learn Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;