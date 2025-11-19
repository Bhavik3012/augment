import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
        <div className="text-2xl font-light">
          Augment<span className="text-sm align-super">.org</span>
        </div>
        <button className="bg-[#d4ff3c] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#c5f02d] transition-colors flex items-center gap-2">
          Enroll Now
          <ArrowRight />
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-8 pt-20 pb-16">
        {/* Title Section */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-gray-400 mb-6">
            THE AUGMENT MBA
          </p>
          <h1 className="text-6xl font-light leading-tight mb-8">
            Learn From the Best
            <br />
            Entrepreneurs in the World
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Join the best alternative to traditional MBAs taught by
            <br />
            the founders of Wikipedia, Youtube, Shazam, and more.
          </p>

          {/* Reviews */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-black"></div>
              <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-black"></div>
              <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-black"></div>
              <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-black"></div>
              <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-black"></div>
            </div>
            <div className="text-left">
              <div className="flex gap-1 text-yellow-400 text-sm">★★★★★</div>
              <p className="text-sm text-gray-400">From 5,000+ Entrepreneurs</p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative rounded-2xl overflow-hidden mb-8 max-w-3xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative">
            {/* Video Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-opacity-30 transition-all">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>

            {/* Mute Button */}
            <button className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all">
              <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
              </svg>
            </button>

            {/* Subtitle */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-2xl font-light">of Wikipedia.</p>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <div className="flex items-center gap-4">
                <button className="w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded transition-all">
                  <div className="w-0 h-0 border-t-6 border-t-transparent border-l-10 border-l-white border-b-6 border-b-transparent"></div>
                </button>
                <span className="text-sm">0:46</span>
                <div className="flex-1 h-1 bg-gray-600 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-white rounded-full"></div>
                </div>
                <button className="w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded transition-all">
                  <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                  </svg>
                </button>
                <button className="w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded transition-all">
                  <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </button>
                <button className="w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded transition-all">
                  <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-20">
          <button className="bg-[#d4ff3c] text-black px-8 py-4 rounded-lg font-medium hover:bg-[#c5f02d] transition-colors text-lg flex items-center gap-2 mx-auto">
            Enroll Now & Get 50% Off
            <span>→</span>
          </button>
        </div>

        {/* Featured In Section */}
        <div className="text-center">
          <p className="text-sm tracking-widest text-gray-500 mb-8">SEEN IN</p>
          <div className="flex items-center justify-center gap-12 flex-wrap opacity-60">
            <div className="text-2xl font-light">Bloomberg</div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">TC</span>
              <span className="text-xl font-medium">TechCrunch</span>
            </div>
            <div className="text-2xl font-serif">Forbes</div>
            <div className="text-2xl font-bold">inc.</div>
          </div>
        </div>
      </main>
    </div>
  );
}
