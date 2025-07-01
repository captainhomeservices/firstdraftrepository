import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import SEOHead from './SEOHead';

interface BlogPostProps {
  title: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  excerpt: string;
  keywords?: string[];
  readTime?: string;
  slug: string;
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
  slug
}) => {
  const canonicalUrl = `https://austinlakemanagement.com/blog/${slug}`;
  
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": excerpt,
    "image": image,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Captain Home Services",
      "logo": {
        "@type": "ImageObject",
        "url": "https://austinlakemanagement.com/captain-home-logo-wheel-circle.webp"
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
    "wordCount": content.split(' ').length,
    "timeRequired": readTime || "5-10 minutes"
  };

  // Convert markdown-style links to React Router Links
  const processContent = (content: string) => {
    // Replace markdown links with HTML
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    return content.replace(linkRegex, '<a href="$2" class="text-teal-600 hover:text-teal-700 font-medium underline">$1</a>');
  };

  const processedContent = processContent(content);

  return (
    <div className="min-h-screen bg-white">
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
      <section className="relative py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-white hover:text-teal-200 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="mb-4">
            <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          
          <div className="flex items-center text-white text-opacity-90 space-x-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm">{date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span className="text-sm">{author}</span>
            </div>
            {readTime && (
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-sm">{readTime}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={image}
            alt={title}
            className="w-full h-80 object-cover rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-base max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-base prose-strong:text-gray-900 prose-a:text-teal-600 prose-a:no-underline hover:prose-a:text-teal-700 prose-ul:text-gray-700 prose-li:text-gray-700 prose-li:text-base"
            dangerouslySetInnerHTML={{ __html: processedContent.replace(/\n/g, '<br />').replace(/## /g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">').replace(/### /g, '<h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">') }}
          />
        </div>
      </article>

      {/* Keywords */}
      {keywords.length > 0 && (
        <section className="py-6 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Topics</h3>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Clear Your Waterfront?</h2>
          <p className="text-lg mb-6">
            <strong>Captain Home Services</strong> provides expert lake weed removal and aquatic vegetation management throughout the Austin area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-teal-600 hover:bg-gray-100 px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/pricing"
              className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-200 border border-teal-500"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Continue Reading
          </h2>
          <div className="text-center">
            <Link
              to="/blog"
              className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;