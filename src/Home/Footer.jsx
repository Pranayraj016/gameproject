import React, { useState, useEffect } from "react";

function Footer() {
  const [currentYear] = useState(new Date().getFullYear());
  const [liveUsers, setLiveUsers] = useState(1247);

  // Simulate live user count updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveUsers((prev) => prev + Math.floor(Math.random() * 10) - 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const footerSections = [
    {
      title: "🎮 Game Zone",
      links: [
        { name: "🎯 Spin to Win", href: "#spin", highlight: true },
        { name: "💰 Sell Game IDs", href: "#sell", highlight: true },
        { name: "🏆 Tournaments", href: "#tournaments" },
        { name: "🎁 Daily Rewards", href: "#rewards" },
      ],
    },
    {
      title: "⚡ Quick Links",
      links: [
        { name: "💎 VIP Club", href: "#vip" },
        { name: "🤝 Referrals", href: "#referral" },
        { name: "📊 Leaderboard", href: "#leaderboard" },
        { name: "🎪 Events", href: "#events" },
      ],
    },
    {
      title: "🛠️ Support Hub",
      links: [
        { name: "💬 Live Chat", href: "#chat", badge: "24/7" },
        { name: "❓ Help Center", href: "#help" },
        { name: "🔧 Report Bug", href: "#bug" },
        { name: "💡 Suggestions", href: "#suggest" },
      ],
    },
    {
      title: "📄 Legal Stuff",
      links: [
        { name: "🔐 Privacy Policy", href: "#privacy" },
        { name: "📋 Terms of Service", href: "#terms" },
        { name: "🍪 Cookie Policy", href: "#cookies" },
        { name: "⚖️ Fair Play", href: "#fairplay" },
      ],
    },
  ];

  const socialPlatforms = [
    {
      name: "Discord",
      icon: "💬",
      href: "#discord",
      color: "from-indigo-500 to-purple-600",
      users: "50K+",
    },
    {
      name: "YouTube",
      icon: "📺",
      href: "#youtube",
      color: "from-red-500 to-pink-600",
      users: "100K+",
    },
    {
      name: "Twitter",
      icon: "🐦",
      href: "#twitter",
      color: "from-blue-400 to-cyan-500",
      users: "75K+",
    },
    {
      name: "Instagram",
      icon: "📷",
      href: "#instagram",
      color: "from-pink-500 to-rose-600",
      users: "200K+",
    },
    {
      name: "TikTok",
      icon: "🎵",
      href: "#tiktok",
      color: "from-gray-800 to-gray-900",
      users: "500K+",
    },
  ];

  const achievements = [
    {
      icon: "👥",
      number: "2.5M+",
      label: "Happy Gamers",
      color: "text-blue-400",
    },
    {
      icon: "💎",
      number: "$1.2M+",
      label: "Rewards Paid",
      color: "text-green-400",
    },
    { icon: "⚡", number: "99.9%", label: "Uptime", color: "text-yellow-400" },
    {
      icon: "⭐",
      number: "4.9★",
      label: "App Rating",
      color: "text-orange-400",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 animate-pulse"></div>

      {/* Floating Gaming Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl animate-bounce opacity-30"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full blur-lg animate-pulse opacity-40"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-md animate-bounce opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Live Status Bar */}
        {/* <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-4 mb-12 border border-green-500/30">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-white font-bold text-lg">🔴 LIVE NOW</span>
              <span className="text-green-300">
                {liveUsers.toLocaleString()} players online
              </span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-yellow-300">⚡ All systems GO!</span>
              <span className="text-blue-300">🛡️ Secure & Safe</span>
              <span className="text-pink-300">🚀 Lightning Fast</span>
            </div>
          </div>
        </div> */}

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="group cursor-pointer">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-3xl animate-spin-slow">🎯</span>
                </div>
                <div>
                  <h3 className="text-3xl font-black  bg-gradient-to-r from-yellow-300 to-orange-200 bg-clip-text text-transparent">
                    SPIN & WIN
                  </h3>
                  <p className="text-orange-400 text-sm font-bold animate-pulse">
                    🎮 Ultimate Gaming Hub
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              🚀 Join millions of players in the most exciting gaming platform
              ever! Spin, win, earn real money, and become a gaming legend! 💎
            </p>

            {/* Epic Download Buttons */}
            {/* <div className="space-y-4">
              <div className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 rounded-2xl p-4 cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl group-hover:animate-bounce">📱</div>
                  <div>
                    <p className="text-white text-xs font-semibold">
                      GET IT ON
                    </p>
                    <p className="text-white font-black text-lg">Google Play</p>
                  </div>
                  <div className="ml-auto bg-white/20 px-3 py-1 rounded-full">
                    <span className="text-white text-xs font-bold">FREE</span>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 rounded-2xl p-4 cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl group-hover:animate-bounce">🍎</div>
                  <div>
                    <p className="text-white text-xs font-semibold">
                      DOWNLOAD ON
                    </p>
                    <p className="text-white font-black text-lg">App Store</p>
                  </div>
                  <div className="ml-auto bg-white/20 px-3 py-1 rounded-full">
                    <span className="text-white text-xs font-bold">FREE</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-black text-lg mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className={`group flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 text-sm ${
                        link.highlight ? "hover:scale-105 font-semibold" : ""
                      }`}
                    >
                      <span
                        className={
                          link.highlight ? "group-hover:animate-pulse" : ""
                        }
                      >
                        {link.name}
                      </span>
                      {link.badge && (
                        <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                          {link.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Epic Newsletter Section */}
        <div className="bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-red-500/30 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 animate-pulse"></div>
          <div className="relative z-10 text-center">
            <div className="text-6xl mb-4 animate-bounce">🎁</div>
            <h3 className="text-white text-3xl font-black mb-4">
              Get{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                FREE REWARDS!
              </span>
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Subscribe now and get{" "}
              <strong className="text-yellow-400">100 FREE SPINS</strong> +
              exclusive bonus codes! 🔥
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your gaming email..."
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border-2 border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white font-black py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                🚀 GET REWARDS!
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Explosion */}
        <div className="mb-12">
          <h3 className="text-center text-white text-2xl font-black mb-8">
            🌟 Join Our Gaming Community! 🌟
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {socialPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.href}
                className={`group bg-gradient-to-r ${platform.color} rounded-2xl p-4 cursor-pointer transform hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl min-w-[120px] text-center`}
              >
                <div className="text-3xl mb-2 group-hover:animate-bounce">
                  {platform.icon}
                </div>
                <div className="text-white font-bold text-sm">
                  {platform.name}
                </div>
                <div className="text-white/80 text-xs">{platform.users}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Epic Stats Section */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {achievements.map((stat, index) => (
              <div key={index} className="group cursor-pointer">
                <div
                  className={`text-4xl mb-2 group-hover:scale-125 transition-transform duration-300 ${stat.color}`}
                >
                  {stat.icon}
                </div>
                <div className="text-white text-2xl font-black mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear}{" "}
              <span className="font-bold text-white">Spin & Win Gaming</span>.
              Made with ❤️ for gamers worldwide! 🌎
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <span className="flex items-center space-x-2 text-green-400">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Servers Online</span>
              </span>
              <span className="text-yellow-400">⚡ Ultra Fast</span>
              <span className="text-blue-400">🛡️ Bank-Level Security</span>
              <span className="text-pink-400">🏆 Award Winning</span>
            </div>
          </div>
        </div>

        {/* Floating Success Elements */}
        <div className="absolute top-4 right-4 animate-bounce">
          <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl transform rotate-12">
            💰 JACKPOT WINNER! 🎉
          </div>
        </div>

        <div className="absolute bottom-4 left-4 animate-pulse">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl transform -rotate-12">
            🔥 HOT STREAK! 🔥
          </div>
        </div>
      </div>

      {/* Add custom keyframe for slow spin */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
