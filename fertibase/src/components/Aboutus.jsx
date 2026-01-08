import { motion } from "framer-motion";
import { Leaf, Users, Map, Globe, Mail, Phone, Clock, Award, Target, Lightbulb, Handshake, Smartphone } from "lucide-react";

export default function Aboutus() {
  return (
    <div className="bg-soil-light text-text-base">
      {/* HERO SECTION - Redesigned with video background */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.6)' }}
          >
            <source src="https://cdn.pixabay.com/video/2022/11/07/137866-768947728_large.mp4" type="video/mp4" />
            {/* Fallback to animated background pattern if video fails */}
          </video>
          {/* Fallback animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
        </div>

        {/* Enhanced Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <Leaf className="w-16 h-16 mx-auto text-primary-300 mb-4" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-soil-base mb-6 leading-tight"
          >
            Empowering Farmers,
            <br />
            <span className="text-primary-200">Growing the Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto font-light"
          >
            Leading agricultural innovation through science, technology, and partnership
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* COMPANY INTRODUCTION - New Section */}
      <section className="py-20 bg-soil-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-base mb-6">
              About <span className="text-primary-600">Fertibase</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Award className="w-12 h-12" />,
                title: "Leading Innovation",
                description: "A leading agricultural innovation company dedicated to empowering farmers with high-quality crop nutrition solutions and advanced farming technologies."
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Sustainable Focus",
                description: "Strong commitment to sustainable agriculture, delivering scientifically formulated Biofertilizers, biological products, and soil-enhancing inputs."
              },
              {
                icon: <Lightbulb className="w-12 h-12" />,
                title: "Research-Based",
                description: "Transform farming practices through reliable, research-based, and result-oriented products with consistent performance and unmatched field support."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-primary-100"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl flex items-center justify-center text-soil-base mb-6 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-text-base mb-3 text-center">{item.title}</h3>
                <p className="text-text-light leading-relaxed text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP SECTION - New */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-soil-base relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Handshake className="w-16 h-16 mx-auto mb-6 text-primary-200" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Growth Through Partnership
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We believe that true growth lies in partnership. Through our strong network, we work closely with farmers to ensure better guidance, improved yield, and profitable farming.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Users className="w-8 h-8" />, title: "Dealer Network", desc: "Strong network of trusted dealers" },
              { icon: <Leaf className="w-8 h-8" />, title: "Field Teams", desc: "Dedicated field support teams" },
              { icon: <Award className="w-8 h-8" />, title: "Agronomists", desc: "Expert agricultural guidance" },
              { icon: <Smartphone className="w-8 h-8" />, title: "Farminsta App", desc: "Digital farming solutions" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all border border-white/20"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-200">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-primary-100 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-20 bg-soil-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-base mb-4">
              Our <span className="text-primary-600">Impact</span>
            </h2>
            <p className="text-xl text-text-light">
              Transforming agriculture across regions with measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Map className="w-12 h-12" />, num: "98", label: "Districts", desc: "Operating across multiple States" },
              { icon: <Users className="w-12 h-12" />, num: "100+", label: "Dealers", desc: "Strong distribution network" },
              { icon: <Globe className="w-12 h-12" />, num: "1L+", label: "Acres", desc: "Farmland transformed" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-soil-light to-primary-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all border border-primary-200 group-hover:scale-105 transform duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 text-soil-base group-hover:rotate-12 transition-transform">
                    {stat.icon}
                  </div>
                  <h3 className="text-5xl font-extrabold text-primary-600 mb-2">{stat.num}</h3>
                  <p className="text-xl font-bold text-text-base mb-2">{stat.label}</p>
                  <p className="text-text-light">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-soil-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-base mb-6">
              Our Core <span className="text-primary-600">Values</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🧪",
                title: "Quality Assurance",
                desc: "Premium products tested and proven in real-world farming conditions"
              },
              {
                icon: "🌿",
                title: "Farmer-First Approach",
                desc: "Prioritizing farmers needs with direct support and field training"
              },
              {
                icon: "✅",
                title: "Innovation & Research",
                desc: "Continuous development of advanced biological solutions"
              },
              {
                icon: "🤝",
                title: "Integrity & Trust",
                desc: "Transparent business processes and long-term relationships"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all text-center border border-primary-100 hover:border-primary-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-text-base mb-3">{value.title}</h3>
                <p className="text-text-light leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-full opacity-50"></div>
              <div className="relative bg-gradient-to-br from-primary-50 to-soil-light rounded-2xl p-10 shadow-lg border border-primary-200">
                <Target className="w-16 h-16 text-primary-600 mb-6" />
                <h2 className="text-3xl font-bold text-text-base mb-4">Our Vision</h2>
                <p className="text-lg text-text-light leading-relaxed">
                  To become the most trusted agricultural brand in India, enabling farmers to achieve higher yields, better income, and a prosperous future.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-50"></div>
              <div className="relative bg-gradient-to-br from-primary-50 to-soil-light rounded-2xl p-10 shadow-lg border border-primary-200">
                <Lightbulb className="w-16 h-16 text-primary-600 mb-6" />
                <h2 className="text-3xl font-bold text-text-base mb-4">Our Mission</h2>
                <p className="text-lg text-text-light leading-relaxed">
                  To strengthen farmers productivity and profitability by providing effective agricultural solutions that enhance crop health and ensure sustainable farming.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP - Redesigned Modern UI */}
      <section className="py-20 bg-soil-light relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary-100 to-primary-200 rounded-full blur-3xl opacity-30 -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-primary-600 to-primary-700 text-soil-base px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                Leadership Team
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-text-base mb-6">
              Meet Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-700">Leaders</span>
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
              Visionary leaders driving agricultural innovation and empowering farmers across the nation
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary-600 to-primary-500 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {[
              {
                name: "Krishnamurali Chowdary",
                title: "CEO",
                image: "/profiles/krishnamurali.jpg",
                bio: "Leading sales strategy and market expansion with expertise in agricultural distribution"
              },
              {
                name: "E Satyanarayana Reddy",
                title: "Director - Sales (South India)",
                image: "/profiles/satyanarayana.jpg",
                bio: "Driving business growth and farmer partnerships across South India"
              }
            ].map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-primary-100 hover:border-primary-300">
                  {/* Gradient accent bar */}
                  <div className="h-2 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700"></div>

                  <div className="p-8">
                    <div className="flex items-center gap-6 mb-6">
                      {/* Profile Image */}
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                        <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                          <img
                            src={person.image}
                            alt={person.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center text-soil-base text-4xl font-bold">${person.name.charAt(0)}</div>`; 
                            }}
                          />
                        </div>
                      </div>

                      {/* Name and Title */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-text-base mb-2 group-hover:text-primary-600 transition-colors">
                          {person.name}
                        </h3>
                        <p className="text-primary-600 font-semibold text-lg mb-1">
                          {person.title}
                        </p>
                        <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full"></div>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-text-light leading-relaxed text-base">
                      {person.bio}
                    </p>

                    {/* Decorative element */}
                    <div className="mt-6 flex items-center gap-2">
                      <div className="flex-1 h-px bg-gradient-to-r from-primary-200 to-transparent"></div>
                      <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                      <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                      <div className="w-2 h-2 rounded-full bg-primary-700"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



     
    </div>
  );
}
