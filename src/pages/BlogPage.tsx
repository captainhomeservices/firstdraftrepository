import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Fish, Wrench, FileText, MapPin, Leaf, Clock, BookOpen, Waves, Shield, HelpCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const BlogPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const blogPageSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Captain's Log - Austin Lake Management Blog",
    "description": "Expert insights on Austin lake weed removal, hydrilla control, and aquatic vegetation management from Captain Home Services.",
    "url": "https://austinlakemanagement.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Captain Home Services",
      "logo": {
        "@type": "ImageObject",
        "url": "https://austinlakemanagement.com/captain-home-logo-wheel-circle.webp"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "BlogPosting",
          "position": 1,
          "headline": "Lake Austin Hydrilla Management Methods: A Historical Perspective and Modern Solutions",
          "url": "https://austinlakemanagement.com/blog/lake-austin-hydrilla-management-methods"
        },
        {
          "@type": "BlogPosting",
          "position": 2,
          "headline": "Understanding Lake Weeds: Why They Grow and How to Manage Them",
          "url": "https://austinlakemanagement.com/blog/understanding-lake-weeds-why-they-grow-and-how-to-manage-them"
        },
        {
          "@type": "BlogPosting", 
          "position": 3,
          "headline": "Navigating Permitting for Aquatic Vegetation Removal in Texas",
          "url": "https://austinlakemanagement.com/blog/navigating-permitting-aquatic-vegetation-removal-texas"
        },
        {
          "@type": "BlogPosting",
          "position": 4, 
          "headline": "The Benefits of Manual Aquatic Weed Removal: A Sustainable Approach",
          "url": "https://austinlakemanagement.com/blog/benefits-manual-aquatic-weed-removal-sustainable-approach"
        },
        {
          "@type": "BlogPosting",
          "position": 5,
          "headline": "The Importance of Aquatic Vegetation Removal for a Healthy Lakefront",
          "url": "https://austinlakemanagement.com/captain logo green  copy copy.png"
        }
      ]
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "Lake Weed Removal FAQ: Hydrilla, Root Removal, Benthic Barriers & What to Expect",
      slug: "lake-weed-removal-faq",
      excerpt: "Your complete guide to lake weed removal. Get answers to the most common questions about hydrilla, root removal methods, benthic barriers, pricing, and what to expect from professional aquatic weed management services.",
      date: "January 8, 2026",
      author: "Captain Cam",
      category: "FAQ",
      image: "/dock1.jpg",
      icon: <HelpCircle className="h-5 w-5" />,
      keywords: ["lake weed removal FAQ", "hydrilla questions", "benthic barriers", "aquatic weed removal cost", "lake weed removal pricing", "manual weed removal"],
      readTime: "18 min read",
      featured: true,
      isNew: false
    },
    {
      id: 2,
      title: "A Proposal for Austin: Innovative Chain Drag Seine Net System for Sustainable Hydrilla Management",
      slug: "austin-hydrilla-proposal-chain-drag-seine-net-system",
      excerpt: "A comprehensive proposal to Austin city leaders and community stakeholders for implementing an innovative chain drag seine net system to combat hydrilla infestation—a proven method used successfully in Asia and California that removes plants at the root while preventing fragmentation.",
      date: "January 27, 2025",
      author: "Captain Cam",
      category: "City Proposals",
      image: "/echelon cleaned up.jpg",
      icon: <FileText className="h-5 w-5" />,
      keywords: ["austin hydrilla management", "lake austin chain drag", "seine net hydrilla removal", "austin invasive species", "sustainable lake management", "austin city proposal"],
      readTime: "18 min read",
      featured: true,
      isNew: true
    },
    {
      id: 3,
      title: "Lake Austin Hydrilla Crisis Deepens: City Plans Major Grass Carp Response for Fall 2025",
      slug: "lake-austin-hydrilla-crisis-deepens-city-plans-grass-carp-response-fall-2025",
      excerpt: "The hydrilla crisis on Lake Austin has reached critical levels in fall 2025, with nearly 456 acres now affected. Learn about the City's grass carp response plan, TPWD survey findings, and what lakefront property owners can do to protect their waterfronts right now.",
      date: "October 16, 2025",
      author: "Captain Cam",
      category: "Local News",
      image: "/Copy of Untitled.jpg",
      icon: <Waves className="h-5 w-5" />,
      keywords: ["Lake Austin hydrilla 2025", "Austin lake weeds", "grass carp stocking", "TPWD vegetation survey", "Lake Austin property values", "aquatic weed removal"],
      readTime: "9 min read",
      featured: true,
      isNew: false
    },
    {
      id: 4,
      title: "Understanding Hydrilla: The Most Invasive Aquatic Weed in Austin Lakes",
      slug: "understanding-hydrilla-most-invasive-aquatic-weed-austin-lakes",
      excerpt: "Everything you need to know about hydrilla - the most problematic aquatic weed in Austin lakes. Learn how it spreads, why it's so difficult to control, and what proven methods work for Lake Austin properties. Includes local news coverage and expert research from LSU AgCenter and University of Florida.",
      date: "January 26, 2025",
      author: "Captain Cam",
      category: "Invasive Species",
      image: "/lake weeds removed.png",
      icon: <Waves className="h-5 w-5" />,
      keywords: ["austin sea weed", "lake weed removal", "hydrilla removal", "austin grass carp", "austin hydrilla control", "Lake Austin hydrilla"],
      readTime: "14 min read",
      featured: true,
      isNew: false
    },
    {
      id: 5,
      title: "Global Innovations in Hydrilla Management: Beyond Traditional Removal Methods",
      slug: "global-innovations-hydrilla-management-beyond-traditional-methods",
      excerpt: "Explore cutting-edge hydrilla removal techniques from around the world and discover how harvested biomass can be transformed into valuable resources. From dragline systems to bio-oil production, learn how global innovations could revolutionize Austin lake management.",
      date: "January 24, 2025",
      author: "Captain Cam",
      category: "Global Innovations",
      image: "/IMG_5761 copy.jpeg",
      icon: <Waves className="h-5 w-5" />,
      keywords: ["global hydrilla management", "biomass recycling", "aquatic vegetation removal", "sustainable lake management", "hydrilla composting"],
      readTime: "12 min read",
      featured: true,
      isNew: false
    },
    {
      id: 6,
      title: "Lake Austin Hydrilla Management Methods: A Historical Perspective and Modern Solutions",
      slug: "lake-austin-hydrilla-management-methods",
      excerpt: "A comprehensive examination of hydrilla invasion in Central Texas lakes, exploring the historical context, management approaches, and why precision manual removal offers the most effective solution for Lake Austin property owners.",
      date: "January 22, 2025",
      author: "Captain Cam",
      category: "Hydrilla Management",
      image: "/lake weed removal tools.jpg",
      icon: <Waves className="h-5 w-5" />,
      keywords: ["Lake Austin hydrilla management", "Lake Austin hydrilla control", "hydrilla removal methods", "invasive species management", "TPWD permits"],
      readTime: "15 min read",
      featured: true,
      isNew: false
    },
    {
      id: 7,
      title: "Benthic Barriers: The Complete Guide to Effective Lake Bottom Weed Control",
      slug: "benthic-barriers-complete-guide",
      excerpt: "Discover how benthic barriers provide long-term aquatic weed control for Austin lakes. Learn about installation, effectiveness, costs, and why they're the safest management option available.",
      date: "January 15, 2025",
      author: "Captain Cam",
      category: "Weed Control Methods",
      image: "/benthic barrier pic.jpeg",
      icon: <Shield className="h-5 w-5" />,
      keywords: ["benthic barriers", "lake mats", "lake bottom blankets", "LakeMat", "aquatic weed control", "hydrilla control Austin", "safe weed management"],
      readTime: "16 min read",
      featured: true
    },
    {
      id: 8,
      title: "Understanding Lake Weeds: Why They Grow and How to Manage Them",
      slug: "understanding-lake-weeds-why-they-grow-and-how-to-manage-them",
      excerpt: "Discover the key factors behind aquatic weed growth in Texas lakes and learn sustainable management strategies. From nutrient levels to invasive species, understand why lakes get weeds and how professional removal can restore your waterfront.",
      date: "January 20, 2025",
      author: "Captain Cam",
      category: "Lake Management",
      image: "https://mdc.mo.gov/sites/default/files/styles/gallery_main_image/public/mo_nature/media/images/2010/07/eurasian_water_milfoilcmyk.jpg?itok=efZIYgsg",
      icon: <Leaf className="h-5 w-5" />,
      keywords: ["lake weeds", "aquatic vegetation management", "Austin lake management", "invasive aquatic species", "lake weed control"],
      readTime: "8 min read",
      featured: true
    },
    {
      id: 9,
      title: "Navigating Permitting for Aquatic Vegetation Removal in Texas",
      slug: "navigating-permitting-aquatic-vegetation-removal-texas",
      excerpt: "Learn about TPWD and LCRA permitting requirements for aquatic vegetation removal in Texas. Understand why compliance matters and how Captain Home Services handles all the red tape for legal, hassle-free lake weed removal.",
      date: "January 18, 2025",
      author: "Captain Cam",
      category: "Permitting & Compliance",
      image: "https://i.imgur.com/dmrnTO6.jpg",
      icon: <FileText className="h-5 w-5" />,
      keywords: ["TPWD permits", "LCRA compliance", "Texas aquatic vegetation removal", "lake weed removal permits", "Austin permitting"],
      readTime: "6 min read",
      featured: true
    },
    {
      id: 10,
      title: "The Benefits of Manual Aquatic Weed Removal: A Sustainable Approach",
      slug: "benefits-manual-aquatic-weed-removal-sustainable-approach",
      excerpt: "Discover why manual aquatic weed removal is the most sustainable and effective method for lakefront restoration. Learn about precision targeting, chemical-free approaches, and long-term benefits for your Texas waterfront.",
      date: "January 16, 2025",
      author: "Captain Cam",
      category: "Sustainable Methods",
      image: "https://cdn11.bigcommerce.com/s-94ve5l/images/stencil/500x659/products/2411/4162/WeedRay-1__62680.1736887802.jpg?c=2",
      icon: <Leaf className="h-5 w-5" />,
      keywords: ["manual aquatic weed removal", "sustainable lake management", "chemical-free weed removal", "Austin lake cleaning", "eco-friendly lake services"],
      readTime: "7 min read",
      featured: true
    },
    {
      id: 11,
      title: "The Importance of Aquatic Vegetation Removal for a Healthy Lakefront",
      slug: "importance-aquatic-vegetation-removal-healthy-lakefront",
      excerpt: "Understand how aggressive aquatic weeds impact your lakefront's ecology, recreation value, and property worth. Learn why professional aquatic vegetation removal is essential for maintaining a healthy Texas waterfront.",
      date: "January 14, 2025",
      author: "Captain Cam",
      category: "Lakefront Health",
      image: "https://static01.nyt.com/images/2023/12/10/nyregion/10Conn-River-01-wvbc/Conn-River--01-wvbc-superJumbo.jpg?quality=75&auto=webp",
      icon: <Fish className="h-5 w-5" />,
      keywords: ["aquatic vegetation removal", "lakefront health", "Austin lake weeds", "hydrilla removal", "lake property value"],
      readTime: "9 min read",
      featured: false
    },
    {
      id: 12,
      title: "The Battle for Our Lakes: Understanding and Removing Invasive Aquatic Plants in Texas",
      excerpt: "Texas lakes face constant threats from invasive aquatic plants. Learn about hydrilla and Eurasian watermilfoil science, plus the most effective removal methods for Austin area lakes.",
      date: "January 15, 2025",
      author: "Captain Cam",
      category: "Invasive Species",
      image: "https://parks.traviscountytx.gov/files/images/loop-360/hero.jpg",
      icon: <FileText className="h-5 w-5" />,
      readTime: "10 min read"
    },
    {
      id: 13,
      title: "Beyond the Weeds: Your Guide to Boating and Dining on Lake Austin",
      excerpt: "Once your waterfront is clear, discover the best boating experiences, lakeside restaurants, and water activities that make Lake Austin special.",
      date: "January 10, 2025",
      author: "Captain Cam",
      category: "Lake Austin Life",
      image: "https://activerain-store.s3.amazonaws.com/image_store/uploads/agents/afranzetti/files/Screen%20Shot%202014-03-14%20at%206.30.41%20AM.jpg",
      icon: <MapPin className="h-5 w-5" />,
      readTime: "6 min read"
    },
    {
      id: 14,
      title: "Bass Fishing on Lake Austin: Techniques and Top Spots",
      excerpt: "Lake Austin offers excellent bass fishing. Learn the best techniques, prime locations, and why clear water makes all the difference for successful fishing.",
      date: "January 5, 2025",
      author: "Captain Cam",
      category: "Fishing",
      image: "https://www.austinmonitor.com/wp-content/uploads/2024/07/red_bud_isle_ii_by_mkocaoglu_d9blj0t-fullview-620x365.jpg",
      icon: <Fish className="h-5 w-5" />,
      readTime: "8 min read"
    },
    {
      id: 15,
      title: "Lake Austin Resources: Essential Links for Waterfront Owners",
      excerpt: "Your resource hub for Lake Austin living. Find boat rentals, repair services, marinas, and everything needed for your waterfront lifestyle.",
      date: "December 28, 2024",
      author: "Captain Cam",
      category: "Resources",
      image: "https://rentalboataustin.com/wp-content/uploads/ryan.jpeg",
      icon: <Wrench className="h-5 w-5" />,
      readTime: "5 min read"
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const additionalPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Captain's Log - Austin Lake Management Blog | Captain Home Services"
        description="Expert insights on Austin lake weed removal, hydrilla control, and aquatic vegetation management. Learn about TPWD permits, manual removal techniques, and Highland Lakes management from Captain Home Services."
        keywords="Austin lake management blog, lake weed removal tips, hydrilla control Austin, TPWD permits, aquatic vegetation removal, Lake Austin management, Highland Lakes weed control, Captain Home Services blog"
        canonicalUrl="https://austinlakemanagement.com/blog"
        structuredData={blogPageSchema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <BookOpen className="h-16 w-16 text-white opacity-90" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              The Captain's Log
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto font-light">
              Austin Lake Management Insights & Local Knowledge
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
              Expert guidance on <strong>hydrilla removal</strong>, <strong>lake weed removal</strong>, and everything you need to know about maintaining clear, healthy Austin area lakes.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            From tackling stubborn <strong>Lake Austin weed removal</strong> challenges to sharing the best local spots for boating and fishing, we cover what matters to Austin lakefront property owners. Our focus is practical <strong>lake management</strong> advice, proven <strong>hydrilla removal</strong> techniques, and insights that help you get the most from your waterfront investment.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              In-depth guides and expert insights on Austin lake management
            </p>
          </div>
          
          {/* Featured Blog Posts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {post.slug ? (
                  <Link to={`/blog/${post.slug}`} onClick={scrollToTop}>
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.id === 1 ? "Lake Austin hydrilla plant identification showing detailed leaf structure and growth pattern from Mississippi State University Extension" : post.title}
                        className="w-full h-64 md:h-72 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="bg-white bg-opacity-95 text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium flex items-center space-x-1 shadow-lg">
                          {post.icon}
                          <span>{post.category}</span>
                        </div>
                      </div>
                      {post.isNew && (
                        <div className="absolute top-4 right-4">
                          <div className="bg-red-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                            NEW
                          </div>
                        </div>
                      )}
                      {post.readTime && !post.isNew && (
                        <div className="absolute top-4 right-4">
                          <div className="bg-black bg-opacity-70 text-white px-3 py-1.5 rounded-full text-sm flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      )}
                    </div>
                  </Link>
                ) : (
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.id === 1 ? "Lake Austin hydrilla plant identification showing detailed leaf structure and growth pattern from Mississippi State University Extension" : post.title}
                      className="w-full h-64 md:h-72 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white bg-opacity-95 text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium flex items-center space-x-1 shadow-lg">
                        {post.icon}
                        <span>{post.category}</span>
                      </div>
                    </div>
                    {post.isNew && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-red-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                          NEW
                        </div>
                      </div>
                    )}
                    {post.readTime && !post.isNew && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-black bg-opacity-70 text-white px-3 py-1.5 rounded-full text-sm flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="p-6 md:p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <time dateTime={post.date}>{post.date}</time>
                    <span className="mx-2">•</span>
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight hover:text-teal-600 transition-colors">
                    {post.slug ? (
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    ) : (
                      post.title
                    )}
                  </h2>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  {post.keywords && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {post.keywords.slice(0, 3).map((keyword, index) => (
                          <span key={index} className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full text-xs font-medium">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {post.slug ? (
                    <Link
                      to={`/blog/${post.slug}`}
                     onClick={scrollToTop}
                      className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors group"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  ) : (
                    <div className="inline-flex items-center text-gray-400 font-semibold">
                      <span>Coming Soon</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Additional Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                {post.slug ? (
                  <Link to={`/blog/${post.slug}`} onClick={scrollToTop}>
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <div className="bg-white bg-opacity-95 text-gray-800 px-2 py-1 rounded text-xs font-medium flex items-center space-x-1">
                          {post.icon}
                          <span>{post.category}</span>
                        </div>
                      </div>
                      {post.readTime && (
                        <div className="absolute top-3 right-3">
                          <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      )}
                    </div>
                  </Link>
                ) : (
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <div className="bg-white bg-opacity-95 text-gray-800 px-2 py-1 rounded text-xs font-medium flex items-center space-x-1">
                        {post.icon}
                        <span>{post.category}</span>
                      </div>
                    </div>
                    {post.readTime && (
                      <div className="absolute top-3 right-3">
                        <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="p-4">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <Calendar className="h-3 w-3 mr-1" />
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  
                  <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  {post.slug ? (
                    <Link
                      to={`/blog/${post.slug}`}
                     onClick={scrollToTop}
                      className="flex items-center text-teal-600 font-medium text-sm hover:text-teal-700 transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Link>
                  ) : (
                    <div className="flex items-center text-gray-400 font-medium text-sm">
                      <span>Coming Soon</span>
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Topic Categories */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What We Cover
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-blue-50 rounded-xl border border-blue-100">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lake Weed Control</h3>
              <p className="text-gray-700 leading-relaxed">
                Practical advice on <Link to="/how-it-works" onClick={scrollToTop} className="text-blue-600 hover:text-blue-700 font-semibold underline">hydrilla removal</Link>, <strong>lake weed removal</strong> techniques, and <Link to="/benthic-barriers" onClick={scrollToTop} className="text-blue-600 hover:text-blue-700 font-semibold underline">benthic barriers</Link> for Austin area lakes.
              </p>
            </div>
            
            <div className="text-center p-8 bg-green-50 rounded-xl border border-green-100">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Fish className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lake Austin Living</h3>
              <p className="text-gray-700 leading-relaxed">
                Local insights on fishing, boating, dining, and making the most of your Austin lakefront property.
              </p>
            </div>
            
            <div className="text-center p-8 bg-teal-50 rounded-xl border border-teal-100">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lake Management</h3>
              <p className="text-gray-700 leading-relaxed">
                Professional <strong>lake management</strong> strategies, <Link to="/permitting" onClick={scrollToTop} className="text-teal-600 hover:text-teal-700 font-semibold underline">permitting guidance</Link>, and sustainable waterfront maintenance practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Informed</h2>
          <p className="text-xl mb-8 opacity-90">
            Get updates on <strong>Austin lake management</strong>, seasonal maintenance tips, and local waterfront news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-base"
            />
            <button className="bg-white text-teal-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need Professional Lake Weed Removal?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            <strong>Captain Home Services</strong> provides expert <Link to="/how-it-works" onClick={scrollToTop} className="text-green-600 hover:text-green-700 font-semibold underline">manual lake weed removal</Link> and <Link to="/benthic-barriers" onClick={scrollToTop} className="text-emerald-600 hover:text-emerald-700 font-semibold underline">benthic barrier installation</Link> throughout the Highland Lakes. All work is <Link to="/permitting" onClick={scrollToTop} className="text-blue-600 hover:text-blue-700 font-semibold underline">fully permitted</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(737)-300-9033"
              className="inline-flex items-center justify-center bg-white text-teal-600 hover:bg-gray-50 border border-teal-600 px-8 py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200 shadow-lg"
            >
              <svg className="mr-2 w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;