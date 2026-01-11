
import { ChevronRight, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import About from "../components/About";
import { div } from "framer-motion/client";
import WordCloudSection from "./WordCloudSection";
import IndiaMap from "./IndiaMap";
import FarmerStories from "./FarmerStories";

export default function Hero() {
  return (
    <div>

    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-14 md:pt-28"
    >
      {/* ✅ FertiBase Title Above Background */}
      <div className="relative z-20 text-center mb-8 pt-8">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-soil-base drop-shadow-lg"
        >
          FertiBase
        </motion.h1>
      </div>

      {/* ✅ Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1950&q=80')",
        }}
      ></div>

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

      {/* ✅ Content */}
      <div className="relative z-10 text-center px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-soil-base mb-6 leading-tight drop-shadow-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-300">
              The Foundation of Fertile Fields
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            "Bringing life back to the soil, one microbe at a time.
            <br />
            Because strong fields grow from a stronger foundation."
          </p>

          {/* ✅ Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#products"
              className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-soil-base px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all"
            >
              <Leaf className="mr-2 h-5 w-5" />
              Explore Products <ChevronRight className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* ✅ Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-20">
        <svg
          className="relative block w-full h-24 text-soil-light"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M985.66 83.86c-58.22 7.74-117.22 12.39-176.44 14.17C574.12 104.51 342.62 79.64 120 27.35 81.77 18.48 40.32 9.46 0 0v120h1200V0c-66.67 27.44-133.33 54.88-214.34 83.86z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

    </section>
      {/* ✅ Next Sections */}
      <div className="relative z-30 w-full bg-soil-light">
        <About />
        <IndiaMap />
        <WordCloudSection/>
        <FarmerStories />
      </div>

        </div>

  );
}
