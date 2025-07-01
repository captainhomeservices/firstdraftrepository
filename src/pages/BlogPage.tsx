import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Fish, Wrench, FileText, MapPin, Leaf } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Lake Weeds: Why They Grow and How to Manage Them",
      slug: "understanding-lake-weeds-why-they-grow-and-how-to-manage-them",
      excerpt: "Discover the key factors behind aquatic weed growth in Texas lakes and learn sustainable management strategies. From nutrient levels to invasive species, understand why lakes get weeds and how professional removal can restore your waterfront.",
      date: "January 20, 2025",
      author: "Captain Home Services",
      category: "Lake Management",
      image: "https://mdc.mo.gov/sites/default/files/styles/gallery_main_image/public/mo_nature/media/images/2010/07/eurasian_water_milfoilcmyk.jpg?itok=efZIYgsg",
      icon: <Leaf className="h-5 w-5" />,
      keywords: ["lake weeds", "aquatic vegetation management", "Austin lake management", "invasive aquatic species", "lake weed control"],
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Navigating Permitting for Aquatic Vegetation Removal in Texas",
      slug: "navigating-permitting-aquatic-vegetation-removal-texas",
      excerpt: "Learn about TPWD and LCRA permitting requirements for aquatic vegetation removal in Texas. Understand why compliance matters and how Captain Home Services handles all the red tape for legal, hassle-free lake weed removal.",
      date: "January 18, 2025",
      author: "Captain Home Services",
      category: "Permitting & Compliance",
      image: "https://i.imgur.com/dmrnTO6.jpg",
      icon: <FileText className="h-5 w-5" />,
      keywords: ["TPWD permits", "LCRA compliance", "Texas aquatic vegetation removal", "lake weed removal permits", "Austin permitting"],
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "The Benefits of Manual Aquatic Weed Removal: A Sustainable Approach",
      slug: "benefits-manual-aquatic-weed-removal-sustainable-approach",
      excerpt: "Discover why manual aquatic weed removal is the most sustainable and effective method for lakefront restoration. Learn about precision targeting, chemical-free approaches, and long-term benefits for your Texas waterfront.",
      date: "January 16, 2025",
      author: "Captain Home Services",
      category: "Sustainable Methods",
      image: "https://cdn11.bigcommerce.com/s-94ve5l/images/stencil/500x659/products/2411/4162/WeedRay-1__62680.1736887802.jpg?c=2",
      icon: <Leaf className="h-5 w-5" />,
      keywords: ["manual aquatic weed removal", "sustainable lake management", "chemical-free weed removal", "Austin lake cleaning", "eco-friendly lake services"],
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "The Importance of Aquatic Vegetation Removal for a Healthy Lakefront",
      slug: "importance-aquatic-vegetation-removal-healthy-lakefront",
      excerpt: "Understand how aggressive aquatic weeds impact your lakefront's ecology, recreation value, and property worth. Learn why professional aquatic vegetation removal is essential for maintaining a healthy Texas waterfront.",
      date: "January 14, 2025",
      author: "Captain Home Services",
      category: "Lakefront Health",
      image: "https://static01.nyt.com/images/2023/12/10/nyregion/10Conn-River-01-wvbc/Conn-River--01-wvbc-superJumbo.jpg?quality=75&auto=webp",
      icon: <Fish className="h-5 w-5" />,
      keywords: ["aquatic vegetation removal", "lakefront health", "Austin lake weeds", "hydrilla removal", "lake property value"],
      readTime: "9 min read"
    },
    {
      id: 5,
      title: "The Battle for Our Lakes: Understanding and Removing Invasive Aquatic Plants in Texas",
      excerpt: "Texas lakes are a treasure, but they face a constant threat from invasive aquatic plants. Learn about the science behind hydrilla and Eurasian watermilfoil, and discover the most effective removal methods.",
      date: "January 15, 2025",
      author: "Captain Home Services",
      category: "Invasive Species",
      image: "https://parks.traviscountytx.gov/files/images/loop-360/hero.jpg",
      icon: <FileText className="h-5 w-5" />
    },
    {
      id: 6,
      title: "Beyond the Weeds: Your Ultimate Guide to Boating and Dining on Lake Austin",
      excerpt: "Once your waterfront is clear, it's time to enjoy! Discover the best boating experiences, lakeside restaurants, and water activities that make Lake Austin special.",
      date: "January 10, 2025",
      author: "Captain Home Services",
      category: "Lake Austin Life",
      image: "https://activerain-store.s3.amazonaws.com/image_store/uploads/agents/afranzetti/files/Screen%20Shot%202014-03-14%20at%206.30.41%20AM.jpg",
      icon: <MapPin className="h-5 w-5" />
    },
    {
      id: 7,
      title: "Reel Big Fun: A Guide to Bass Fishing on Lake Austin",
      excerpt: "Lake Austin is renowned for its bass fishing. Learn the best techniques, top spots, and why clear water makes all the difference for trophy fishing.",
      date: "January 5, 2025",
      author: "Captain Home Services",
      category: "Fishing",
      image: "https://www.austinmonitor.com/wp-content/uploads/2024/07/red_bud_isle_ii_by_mkocaoglu_d9blj0t-fullview-620x365.jpg",
      icon: <Fish className="h-5 w-5" />
    },
    {
      id: 8,
      title: "Your Lake Austin Lifeline: Essential Links for Boaters, Anglers, and Waterfront Owners",
      excerpt: "Your comprehensive resource hub for Lake Austin living. Find boat rentals, repair services, marinas, and everything you need to enjoy your waterfront lifestyle.",
      date: "December 28, 2024",
      author: "Captain Home Services",
      category: "Resources",
      image: "https://rentalboataustin.com/wp-content/uploads/ryan.jpeg",
      icon: <Wrench className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags would be handled by a head component in a real app */}
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The Captain's Log
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Your Guide to a Clearer Lake and a Finer Austin Life
          </p>
          <p className="text-lg max-w-3xl mx-auto">
            Welcome to the official blog of Captain Home Services! Here, we're not just talking about pulling weeds; we're diving deep into everything that makes your Austin waterfront experience truly exceptional.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            From conquering stubborn aquatic invaders like <strong>Lake Austin hydrilla</strong> and <strong>Austin Eurasian watermilfoil</strong> to discovering the best bass fishing spots and lakeside eateries, consider this your go-to guide for all things Lake Austin. We'll share our expertise on <strong>Austin aquatic vegetation removal</strong>, <strong>Austin lake management</strong>, and <strong>Austin hydrilla control</strong>, ensuring you have the knowledge to keep your slice of Texas paradise pristine.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            So, grab a sweet tea, kick back, and let's explore the clear waters and vibrant life around Lake Austin!
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Latest Expert Insights
          </h2>
          
          {/* Featured Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {blogPosts.slice(0, 4).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      {post.icon}
                      <span>{post.category}</span>
                    </div>
                  </div>
                  {post.readTime && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                        {post.readTime}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {post.keywords && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {post.keywords.slice(0, 3).map((keyword, index) => (
                          <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors cursor-pointer">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Additional Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.slice(4).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <div className="bg-teal-600 text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1">
                      {post.icon}
                      <span>{post.category}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors cursor-pointer text-sm">
                    <span>Read More</span>
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Expert Austin Lake Management Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lake Weed Identification</h3>
                <p className="text-gray-700">
                  Learn to identify common invasive species like <strong>Lake Austin hydrilla</strong>, <strong>Eurasian watermilfoil</strong>, and other problematic aquatic vegetation affecting Texas lakes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Permitting Made Simple</h3>
                <p className="text-gray-700">
                  Navigate <strong>TPWD permits</strong> and <strong>LCRA compliance</strong> requirements for legal <strong>Austin aquatic vegetation removal</strong> with our expert guidance.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Fish className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainable Solutions</h3>
                <p className="text-gray-700">
                  Discover <strong>chemical-free lake management</strong> techniques and <strong>manual aquatic weed removal</strong> methods that protect your waterfront ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with the Captain's Log</h2>
          <p className="text-xl mb-8">
            Get the latest insights on <strong>Austin lake management</strong>, seasonal tips, and Lake Austin lifestyle updates delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <button className="bg-white text-teal-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Clear Your Waterfront?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Don't let aquatic vegetation take over your slice of paradise. <strong>Captain Home Services</strong> is here to help with professional <strong>Austin aquatic vegetation removal</strong> and <strong>Austin lake cleaning</strong> services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/how-it-works"
              className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Learn Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;