import React from "react";
import { Star, Download } from "lucide-react";
import phone from "../assets/phone.png";
import logo from "../assets/image 43.png";
import character from "../assets/ff.png";
import background from "../assets/image 4.png";

function Banner() {
  return (
    <div className="relative min-h-screen overflow-hidden -mt-20 -mb-20 ">
      {/* Background with vibrant gradient */}
      <div className="absolute mb-20 inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-purple-600"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" grid lg:grid-cols-2 gap-8 lg:gap-60 items-center min-h-screen py-12">
          {/* Left Content */}
          <img
            src={background}
            alt="Background decoration"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-96 h-96 scale-125 object-cover opacity-40 pointer-events-none"
          />

          <div className="hidden lg:block text-white space-y-8 relative z-20">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block">PLAY GAMES</span>
                <span className="block text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text">
                  WIN REDEEM CODE
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-lg">
                Experience the thrill of gaming with real money rewards. Join
                millions of players worldwide!
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-300">
                  30 CR
                </div>
                <div className="text-xs sm:text-sm text-white/80">WINNINGS</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center text-2xl sm:text-3xl font-bold text-yellow-300">
                  4.7{" "}
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-1" />
                </div>
                <div className="text-xs sm:text-sm text-white/80">RATED</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-300">
                  25 CR+
                </div>
                <div className="text-xs sm:text-sm text-white/80">PLAYERS</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center">
                <Download className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                Download Now
              </button>
            </div>
          </div>

          {/* Right Content - Game Showcase */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative max-w-sm mx-auto">
              {/* Phone Container */}
              <div className="relative">
                <div className="perspective-800">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-8 bg-black/50 rounded-full blur-lg scale-75 z-0"></div>
                  <div className="perspective-800">
                    <img
                      src={phone}
                      alt="Mobile phone showing app"
                      className="w-full h-auto relative lg:scale-125 rotate-y-20 rotate-x-3 z-10 right-15 sm:right-0"
                    />
                  </div>
                </div>

                {/* Text Overlay positioned inside phone screen */}
                <div className="absolute top-[11%] lg:top-[2%] lg:left-[12%] right-[36%] lg:right-[12%] lg:bottom-[2%] bottom-[12%] flex items-center justify-center left-4">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-3 sm:p-6 text-center w-full h-full flex flex-col items-center justify-center backdrop-blur-sm shadow-2xl">
                    <img
                      src={logo}
                      alt="App logo"
                      className=" mb-2 sm:mb-4 object-contain"
                    />
                    <h2 className="text-white text-sm sm:text-xl font-bold mb-2 sm:mb-4">
                      Scan QR Code
                    </h2>

                    {/* QR Code */}
                    <div className="bg-white p-2 sm:p-4 rounded-lg sm:rounded-2xl mb-2 sm:mb-4 shadow-lg">
                      <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-lg flex items-center justify-center relative border border-gray-300">
                        <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white relative">
                          {/* Simplified QR Code Pattern */}
                          <div className="grid grid-cols-7 gap-px w-full h-full">
                            {/* QR Code pattern array - simplified for better performance */}
                            {[
                              1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1,
                              1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0,
                              1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
                            ].map((pixel, i) => (
                              <div
                                key={i}
                                className={`w-full h-full ${
                                  pixel ? "bg-black" : "bg-white"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-white text-xs sm:text-sm font-medium">
                      Download the app now!
                    </p>

                    {/* Bonus Badge */}
                    <div className="bg-yellow-400 text-black px-2 sm:px-3 py-1 rounded-full text-xs font-bold mt-1 sm:mt-2 animate-pulse">
                      First Free Spin Bonus
                    </div>
                  </div>
                </div>

                {/* Character Image */}
                <img
                  src={character}
                  alt="Game character"
                  className="absolute bottom-20 lg:bottom-7 -right-40 lg:-right-95 sm:right-30 rotate-y-15 rotate-x-10 w-72 sm:w-48 lg:w-full scale-150 h-auto object-contain z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
