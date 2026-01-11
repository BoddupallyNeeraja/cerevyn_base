/* eslint-disable no-unused-vars */

import { Leaf, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { HERO_IMAGES } from "../config/images";

export default function About() {
  const features = [
    "Scientifically driven microbial formulations that enhance soil health naturally",
    "Proven products that boost nutrient availability and improve crop performance",
    "Sustainable, residue-free solutions that support long-term soil fertility",
    "Farmer-focused innovations designed for all AGRO-CLIMATIC conditions",
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-soil-light overflow-hidden"
    >
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-20 text-soil-light"
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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={HERO_IMAGES.about}
              alt="Organic Farming"
              className="w-full h-96 object-cover transform hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
          </div>

          {/* <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-2xl px-6 py-4 flex items-center gap-3">
            <Leaf className="h-8 w-8 text-primary-500" />
            <div>
              <p className="text-sm text-text-muted">Serving Farmers for</p>
              <p className="text-xl font-bold text-primary-700">15+ Years</p>
            </div>
          </div> */}
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold text-text-base mb-6 leading-tight">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">
              Fertibase?
            </span>
          </h2>

          <p className="text-lg text-text-light mb-8 leading-relaxed">
            Fertibase provides biofertilizers that boost soil health and strengthen crop growth.
            Our innovative solutions are designed to bring life back to the soil, one microbe at a time,
            ensuring strong fields grow from a stronger foundation.
          </p>

          <ul className="space-y-5">
            {features.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-white/70 backdrop-blur-sm p-3 rounded-xl shadow-sm hover:shadow-md transition border border-primary-100"
              >
                <CheckCircle2 className="h-6 w-6 text-primary-600 flex-shrink-0" />
                <span className="text-text-base font-medium">{item}</span>
              </motion.li>
            ))}
          </ul>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#aboutus"
            className="inline-block mt-10 px-8 py-4 bg-primary-600 text-soil-base font-semibold rounded-full shadow-lg hover:bg-primary-700 transition"
          >
            Learn More About Us
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20 text-soil-light"
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
  );
}
