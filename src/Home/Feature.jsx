import React, { useState } from "react";
import spinimg from "../assets/spin.png";
import sellid from "../assets/sellid.png";

function Feature() {
  const features = [
    {
      icon: "🎯",
      title: "Spin to Win Redeem Code",
      description:
        "Get exclusive codes and unlock amazing rewards with every spin!",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "💰",
      title: "Sell Your Game IDs",
      description:
        "Turn your gaming achievements into real cash instantly and securely.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: "🏆",
      title: "Compete & Win Big",
      description:
        "Join tournaments, climb leaderboards, and earn massive rewards.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: "🎁",
      title: "Daily Bonuses",
      description:
        "Log in daily to claim free spins, coins, and exclusive rewards.",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  // Feature content for popup
  const featureContent = {
    "Spin to Win Redeem Code": {
      image: spinimg,
      description:
        "🎯 Unlock exclusive redeem codes by spinning the wheel daily! \n\n💰 Win real money rewards and exciting game bonuses \n\n🎮 Cash out your earnings instantly to your preferred payment method \n\n🏆 Special bonus spins for VIP members \n\n⭐ Track your wins and redeem history in real-time",
    },
    "Sell Your Game IDs": {
      image: sellid,
      description:
        "💰 Easily sell your gaming accounts and IDs on our secure platform \n\n🔒 Connect with verified buyers through our trusted marketplace \n\n⚡ Get instant payments with multiple withdrawal options \n\n🛡️ Maintain complete account security throughout the trading process \n\n📊 Track your sales and earnings with detailed analytics",
    },
  };

  const [selectedFeature, setSelectedFeature] = useState(null);

  const closeModal = () => setSelectedFeature(null);

  const openModal = (featureTitle) => {
    setSelectedFeature(featureTitle);
  };

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
              Amazing
            </span>
            <span className="text-white drop-shadow-2xl"> Features</span>
          </h2>
          <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-medium max-w-2xl mx-auto">
            Experience the ultimate gaming platform with incredible features
            designed for winners!
          </p>

          {/* Floating badges */}
          <div className="flex justify-center space-x-4 mt-6">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <span className="text-white font-bold text-sm">
                🔥 HOT FEATURES
              </span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <span className="text-white font-bold text-sm">⭐ PREMIUM</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {features.map((feature, index) => {
            const showLearnMore =
              feature.title === "Spin to Win Redeem Code" ||
              feature.title === "Sell Your Game IDs";

            return (
              <div
                key={index}
                onClick={() => openModal(feature.title)}
                className="group cursor-pointer transform transition-transform duration-300 hover:scale-105"
                aria-label={`${feature.title} feature`}
              >
                <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl hover:bg-white/25 transition-all duration-300 h-full flex flex-col">
                  {/* Icon with gradient background */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <span className="text-3xl">{feature.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 flex-grow flex flex-col">
                    <h3 className="text-white text-xl font-bold group-hover:text-yellow-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed flex-grow">
                      {feature.description}
                    </p>

                    {/* Action indicator - Only for specific features */}
                    {showLearnMore && (
                      <div className="flex items-center space-x-2 cursor-pointer mt-4 text-yellow-300 font-semibold text-sm hover:text-yellow-200 transition-colors duration-200">
                        <span>Learn More</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/15 backdrop-blur-lg border border-white/30 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-white text-2xl font-bold mb-4">
              Ready to Experience These Features?
            </h3>
            <p className="text-white/90 mb-6">
              Join millions of players and start winning today!
            </p>
            <button className="group bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-4 px-16 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 uppercase tracking-wider">
              <span className="flex items-center space-x-3">
                <span>🚀</span>
                <span>Start Playing Now</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  FREE
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Floating action elements */}
        <div className="absolute top-10 right-10 animate-bounce">
          <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12">
            NEW! 🎉
          </div>
        </div>

        <div className="absolute bottom-10 left-10 animate-pulse">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform -rotate-12">
            LIMITED TIME ⏰
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedFeature && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-0 "
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 rounded-3xl p-8 max-w-4xl w-full mx-4 relative shadow-2xl transform transition-all duration-300 scale-100 max-h-[95vh] overflow-auto no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl font-bold w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-200"
              aria-label="Close popup"
            >
              ×
            </button>

            {/* Modal content */}
            <div className="space-y-6">
              <h3 className="text-white text-3xl md:text-4xl font-black mb-6 pr-12">
                {selectedFeature}
              </h3>

              {/* iPhone Mobile App Screenshot - Status bar and home indicator HIDDEN */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  {/* iPhone Frame */}
                  <div className="bg-black rounded-[3rem] p-2 shadow-2xl">
                    <div className="bg-white rounded-[2.5rem] overflow-hidden relative">
                      {/* Status Bar - REMOVED */}

                      {/* App Screenshot - Clean full screen */}
                      <img
                        src={featureContent[selectedFeature].image}
                        alt={`${selectedFeature} mobile app screenshot`}
                        className="w-72 h-[600px] object-cover"
                      />

                      {/* Home Indicator - REMOVED */}
                    </div>
                  </div>

                  {/* Screen Reflection Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-[3rem] pointer-events-none"></div>
                </div>
              </div>

              {/* Feature description */}
              <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/30">
                <h4 className="text-white text-xl font-bold mb-4">
                  What You Can Do:
                </h4>
                <div className="text-white/90 text-base leading-relaxed whitespace-pre-line">
                  {featureContent[selectedFeature].description}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                  Try Now
                </button>
                <button
                  onClick={closeModal}
                  className="flex-1 bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 border border-white/30"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Feature;
