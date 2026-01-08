import { motion } from "framer-motion";
import indiaMapImage from "../assets/indiamap2.png";

export default function IndiaMap() {
  // Using local India map image with highlighted states
  const mapImageSrc = indiaMapImage;

  return (
    <section className="py-20 bg-soil-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-base mb-4">
            Our <span className="text-primary-600">Presence</span>
          </h2>
          <p className="text-xl text-text-light max-w-2xl mx-auto">
            Serving farmers across India with a strong presence in key agricultural regions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl px-4 md:px-6 py-6 md:py-8 overflow-visible"
        >
          <div className="relative w-full max-w-full mx-auto">
            {/* India Map Container - expand to available space and ensure full image visible */}
            <div className="relative w-full flex justify-center items-center">
              <img
                src={mapImageSrc}
                alt="India Map showing our presence in Gujarat, Maharashtra, Telangana, and Andhra Pradesh"
                className="w-full h-[75vh] object-contain mx-auto block"
                style={{ maxWidth: '1200px' }}
                onError={(e) => {
                  console.error("Failed to load map image");
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}     



