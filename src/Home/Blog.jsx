import React, { useState } from "react";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Master Spin to Win: Tips & Tricks",
      excerpt:
        "Discover ultimate strategies to maximize your winnings using redeem codes in Spin to Win games.",
      date: "August 10, 2025",
      author: "Gaming Pro",
      category: "Strategy",
      readTime: "5 min read",
      image:
        "https://placehold.co/400x250/FF6B35/FFFFFF?text=Spin+to+Win+Tips&font=montserrat",
      featured: true,
    },
    {
      id: 2,
      title: "How to Safely Sell Your Game IDs",
      excerpt:
        "A comprehensive guide on securely selling your game accounts and IDs for real cash.",
      date: "August 8, 2025",
      author: "Security Expert",
      category: "Guide",
      readTime: "8 min read",
      image:
        "https://placehold.co/400x250/10B981/FFFFFF?text=Sell+Game+IDs&font=montserrat",
      featured: false,
    },
    {
      id: 3,
      title: "Top 5 Gaming Tournaments This Month",
      excerpt:
        "Stay updated on the most exciting gaming tournaments to boost your competitive skills.",
      date: "August 5, 2025",
      author: "Tournament Tracker",
      category: "News",
      readTime: "6 min read",
      image:
        "https://placehold.co/400x250/F59E0B/FFFFFF?text=Gaming+Tournaments&font=montserrat",
      featured: false,
    },
    {
      id: 4,
      title: "Daily Bonus Strategies That Actually Work",
      excerpt:
        "Learn proven methods to maximize your daily bonuses and free spins effectively.",
      date: "August 3, 2025",
      author: "Bonus Hunter",
      category: "Tips",
      readTime: "4 min read",
      image:
        "https://placehold.co/400x250/8B5CF6/FFFFFF?text=Daily+Bonus+Tips&font=montserrat",
      featured: false,
    },
    {
      id: 5,
      title: "The Future of Mobile Gaming Rewards",
      excerpt:
        "Explore upcoming trends in mobile gaming rewards and what they mean for players.",
      date: "July 30, 2025",
      author: "Future Gamer",
      category: "Trends",
      readTime: "7 min read",
      image:
        "https://placehold.co/400x250/EC4899/FFFFFF?text=Future+Gaming&font=montserrat",
      featured: false,
    },
    {
      id: 6,
      title: "Building Your Gaming Portfolio",
      excerpt:
        "Smart ways to diversify your gaming investments and maximize long-term earnings.",
      date: "July 28, 2025",
      author: "Investment Guru",
      category: "Finance",
      readTime: "10 min read",
      image:
        "https://placehold.co/400x250/06B6D4/FFFFFF?text=Gaming+Portfolio&font=montserrat",
      featured: false,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    "Strategy",
    "Guide",
    "News",
    "Tips",
    "Trends",
    "Finance",
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 py-16 px-6 sm:px-8 md:px-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-300/10 rounded-full blur-2xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-yellow-300 to-orange-200 bg-clip-text text-transparent drop-shadow-2xl">
              Gaming
            </span>
            <br />
            <span className="text-white drop-shadow-2xl">Blog</span>
          </h2>
          <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-medium max-w-3xl mx-auto">
            Stay updated with the latest gaming news, strategies, and winning
            tips from our experts!
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-white text-orange-500 shadow-lg transform scale-105"
                    : "bg-white/20 text-white hover:bg-white/30 border border-white/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.some((post) => post.featured) && (
          <div className="mb-16">
            <h3 className="text-white text-3xl font-bold mb-8 text-center">
              🔥 Featured Post
            </h3>
            {filteredPosts
              .filter((post) => post.featured)
              .map((post) => (
                <div
                  key={post.id}
                  className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl hover:bg-white/25 transition-all duration-300 cursor-pointer group"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                          FEATURED
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-white/70 text-sm">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-white text-3xl font-bold mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-white/90 text-lg leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-white/80">
                          <p className="font-semibold">{post.author}</p>
                          <p className="text-sm">{post.date}</p>
                        </div>
                        <button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts
            .filter((post) => !post.featured)
            .map((post) => (
              <div
                key={post.id}
                className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:bg-white/25 transition-all duration-300 cursor-pointer group transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-white/80">
                      <p className="font-semibold text-sm">{post.author}</p>
                      <p className="text-xs">{post.date}</p>
                    </div>
                    <button className="text-yellow-300 font-semibold text-sm hover:text-yellow-200 transition-colors duration-200">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white/15 backdrop-blur-lg border border-white/30 rounded-3xl p-8 text-center">
          <h3 className="text-white text-2xl font-bold mb-4">
            Stay Updated with Gaming News
          </h3>
          <p className="text-white/90 mb-6">
            Get the latest gaming tips, strategies, and news delivered to your
            inbox!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>

        {/* Floating action elements */}
        <div className="absolute top-10 right-10 animate-bounce">
          <div className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12">
            NEW POSTS! 📝
          </div>
        </div>

        <div className="absolute bottom-10 left-10 animate-pulse">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform -rotate-12">
            HOT TOPICS 🔥
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
