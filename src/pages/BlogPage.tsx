import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Fish, Wrench, FileText, MapPin } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Battle for Our Lakes: Understanding and Removing Invasive Aquatic Plants in Texas",
      excerpt: "Texas lakes are a treasure, but they face a constant threat from invasive aquatic plants. Learn about the science behind hydrilla and Eurasian watermilfoil, and discover the most effective removal methods.",
      date: "January 15, 2025",
      author: "Captain Home Services",
      category: "Aquatic Vegetation",
      image: "https://parks.traviscountytx.gov/files/images/loop-360/hero.jpg",
      icon: <FileText className="h-5 w-5" />
    },
    {
      id: 2,
      title: "Beyond the Weeds: Your Ultimate Guide to Boating and Dining on Lake Austin",
      excerpt: "Once your waterfront is clear, it's time to enjoy! Discover the best boating experiences, lakeside restaurants, and water activities that make Lake Austin special.",
      date: "January 10, 2025",
      author: "Captain Home Services",
      category: "Lake Austin Life",
      image: "https://activerain-store.s3.amazonaws.com/image_store/uploads/agents/afranzetti/files/Screen%20Shot%202014-03-14%20at%206.30.41%20AM.jpg",
      icon: <MapPin className="h-5 w-5" />
    },
    {
      id: 3,
      title: "Reel Big Fun: A Guide to Bass Fishing on Lake Austin",
      excerpt: "Lake Austin is renowned for its bass fishing. Learn the best techniques, top spots, and why clear water makes all the difference for trophy fishing.",
      date: "January 5, 2025",
      author: "Captain Home Services",
      category: "Fishing",
      image: "https://www.austinmonitor.com/wp-content/uploads/2024/07/red_bud_isle_ii_by_mkocaoglu_d9blj0t-fullview-620x365.jpg",
      icon: <Fish className="h-5 w-5" />
    },
    {
      id: 4,
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

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
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
                  
                  <div className="flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Topics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Invasive Species Control</h3>
              <p className="text-gray-700 mb-4">
                Learn about <strong>hydrilla harvesting</strong>, <strong>Austin Eurasian watermilfoil removal</strong>, and effective <strong>Austin invasive aquatic species removal</strong> techniques.
              </p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Fish className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lake Austin Recreation</h3>
              <p className="text-gray-700 mb-4">
                Discover the best fishing spots, boating activities, and waterfront dining that make Lake Austin a premier destination.
              </p>
            </div>
            
            <div className="text-center p-6 bg-teal-50 rounded-lg">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Waterfront Resources</h3>
              <p className="text-gray-700 mb-4">
                Your essential guide to boat rentals, marina services, and everything needed for Lake Austin living.
              </p>
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