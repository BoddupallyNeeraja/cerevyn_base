import { motion } from "framer-motion";
import { useState } from "react";
import { Play } from "lucide-react";

export default function FarmerStories() {
  const [selectedState, setSelectedState] = useState("All");

  const states = ["All", "Telangana", "Andhra Pradesh", "Maharashtra", "Gujarat"];

  const farmerStories = [
    {
      id: 1,
      title: "Organic Farmer Success Story with FertiBase",
      location: "Andhra Pradesh",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
      videoUrl: "#"
    },
    {
      id: 2,
      title: "Sustainable Farming Practices Revolution",
      location: "Telangana",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop",
      videoUrl: "#"
    },
    {
      id: 3,
      title: "Maharashtra Farmer's Journey to Success",
      location: "Maharashtra",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213b3d7?w=800&h=600&fit=crop",
      videoUrl: "#"
    },
    {
      id: 4,
      title: "Gujarat Farmer Testimonial: Soil Health Improvement",
      location: "Gujarat",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop",
      videoUrl: "#"
    },
    {
      id: 5,
      title: "Success with FertiBase Products in Andhra Pradesh",
      location: "Andhra Pradesh",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
      videoUrl: "#"
    },
    {
      id: 6,
      title: "Transforming Agriculture in Telangana",
      location: "Telangana",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop",
      videoUrl: "#"
    }
  ];

  const filteredStories = selectedState === "All" 
    ? farmerStories 
    : farmerStories.filter(story => story.location === selectedState);

  return (
    <section className="py-20 bg-soil-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-primary-600 mb-2">
            Testimonials
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-text-base mb-4">
            Farmer Stories
          </h2>
          <p className="text-xl text-text-base max-w-2xl mx-auto font-medium">
            Real stories from farmers across India
          </p>
        </motion.div>

        {/* State Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {states.map((state) => (
            <button
              key={state}
              onClick={() => setSelectedState(state)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedState === state
                  ? "bg-primary-600 text-soil-base shadow-lg"
                  : "bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50"
              }`}
            >
              {state}
            </button>
          ))}
        </motion.div>

        {/* Video Cards (vertical, Instagram-style 9:16) */}
        <div className="flex flex-col items-center gap-8">
          {filteredStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-primary-100"
            >
              {/* Video Thumbnail - Instagram (9:16) */}
              <div
                className="relative overflow-hidden bg-soil-dark cursor-pointer group w-full"
                style={{ aspectRatio: '9 / 16' }}
                onClick={() => {
                  if (story.videoUrl && story.videoUrl !== "#") {
                    window.open(story.videoUrl, '_blank');
                  } else {
                    alert(`Video for "${story.title}" will be available soon!`);
                  }
                }}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary-600 rounded-full p-4 transform hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-soil-base" fill="currentColor" />
                  </div>
                </div>
                {/* Location Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-text-base">
                  {story.location}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-text-base mb-2 line-clamp-2">
                  {story.title}
                </h3>
                <p className="text-text-base mb-3 text-sm font-medium">{story.location}</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      if (story.videoUrl && story.videoUrl !== "#") {
                        window.open(story.videoUrl, '_blank');
                      } else {
                        alert(`Video for "${story.title}" will be available soon!`);
                      }
                    }}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-soil-base font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
                  >
                    <Play className="h-5 w-5 text-soil-base" />
                    Watch Video
                  </button>
                  <button
                    onClick={() => {
                      // Placeholder for share or save action
                      alert('Shared!');
                    }}
                    className="px-4 py-2 border border-primary-100 rounded-lg text-sm font-medium"
                  >
                    Share
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredStories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-base text-lg font-semibold">
              No stories available for {selectedState}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

