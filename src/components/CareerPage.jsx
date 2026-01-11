
// CareerPage.jsx — Option C (Select Dropdown + Search + See More + Auto Scroll)

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowLeft, Loader2, Mail, ArrowRight, Leaf, TrendingUp, Users, Clock, BookOpen, Heart, FileText, CheckCircle, MessageCircle, Send } from "lucide-react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import careerService from "../api/careerService";
import jobsData from "../../data/jobsData";

export default function CareerPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCards, setVisibleCards] = useState({});
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3200,
    arrows: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        setLoading(true);
        const data = await careerService.getCareers();

        // Transform flat data to grouped structure
        if (Array.isArray(data) && data.length > 0) {
          const grouped = data.reduce((acc, job) => {
            const category = job.category || "Other";
            if (!acc[category]) {
              acc[category] = [];
            }
            acc[category].push(job);
            return acc;
          }, {});

          const formattedJobs = Object.keys(grouped).map(category => ({
            category,
            cards: grouped[category]
          }));

          setJobs(formattedJobs);
          setError(null);
        } else {
          // Use fallback data if API returns empty array
          console.log("API returned empty data, using fallback jobs data");
          setJobs(jobsData);
          setError(null);
        }
      } catch (err) {
        console.error("Failed to fetch careers:", err);
        // Use fallback data when API fails
        console.log("API failed, using fallback jobs data");
        setJobs(jobsData);
        setError(null); // Clear error since we have fallback data
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  const categories = ["All", ...jobs.map((g) => g.category)];

  const filteredJobs = jobs
    .filter((g) => (selectedCategory === "All" ? true : g.category === selectedCategory))
    .map((g) => ({
      ...g,
      cards: g.cards.filter((c) => c.title.toLowerCase().includes(search.toLowerCase())),
    }));

  const handleSeeMore = (cat) => {
    setVisibleCards((prev) => ({
      ...prev,
      [cat]: (prev[cat] || 3) + 3,
    }));
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [openIndex]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-soil-light">
        <Loader2 className="w-12 h-12 text-primary-600 animate-spin" />
      </div>
    );
  }

  // Only show error if we have no jobs and an error occurred
  if (error && jobs.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-soil-light text-center px-4">
        <h2 className="text-2xl font-bold text-primary-700 mb-2">Oops! Something went wrong.</h2>
        <p className="text-text-light mb-6">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-primary-600 text-soil-base rounded-lg hover:bg-primary-700 transition"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soil-light">
      {/* Page Title */}
      <div className="pt-20 pb-4 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-700 text-center">
            Career at FertiBase
          </h1>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col justify-center items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1950&q=80')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 lg:px-8 py-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* We're hiring badge */}
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-primary-600 text-soil-base rounded-full text-sm font-semibold">
                • We're hiring!
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-soil-base mb-6 leading-tight">
              Grow Your Career at{" "}
              <span className="text-primary-400">FertiBase</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join us in revolutionizing sustainable agriculture through innovative biological solutions.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contactus"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all border-2 border-primary-600"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact HR Department
              </motion.a>
              <motion.button
                onClick={() => {
                  const openingsSection = document.getElementById('openings');
                  if (openingsSection) {
                    openingsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center bg-primary-600 text-soil-base px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all"
              >
                View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Wave Divider */}
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-soil-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary-600 font-semibold text-lg mb-2">WHY CHOOSE US</p>
            <h2 className="text-4xl md:text-5xl font-bold text-text-base mb-4">
              Why Join FertiBase?
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Be part of a mission-driven team that's transforming agriculture while building meaningful careers
            </p>
          </motion.div>

          {/* Benefit Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sustainable Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-primary-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Leaf className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-text-base mb-3">Sustainable Mission</h3>
              <p className="text-text-light leading-relaxed">
                Make a real impact on sustainable agriculture and environmental conservation
              </p>
            </motion.div>

            {/* Career Growth */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-primary-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-text-base mb-3">Career Growth</h3>
              <p className="text-text-light leading-relaxed">
                Clear growth paths with regular promotions and skill development programs
              </p>
            </motion.div>

            {/* Collaborative Culture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-primary-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-text-base mb-3">Collaborative Culture</h3>
              <p className="text-text-light leading-relaxed">
                Work alongside passionate experts in agriculture and biotechnology
              </p>
            </motion.div>

            {/* Work-Life Balance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-primary-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-text-base mb-3">Work-Life Balance</h3>
              <p className="text-text-light leading-relaxed">
                Flexible hours, remote options, and generous leave policies
              </p>
            </motion.div>

            {/* Learning Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-primary-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-text-base mb-3">Learning Opportunities</h3>
              <p className="text-text-light leading-relaxed">
                Sponsored training, workshops, and global conference participation
              </p>
            </motion.div>

            {/* Comprehensive Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-primary-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-text-base mb-3">Comprehensive Benefits</h3>
              <p className="text-text-light leading-relaxed">
                Health insurance, retirement plans, bonuses, and wellness programs
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="py-12 px-4 bg-soil-light">
      <div className="max-w-7xl mx-auto">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-primary-700 font-semibold mb-6 hover:underline">
          <ArrowLeft size={22} /> Go Back
        </button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary-600 font-semibold text-lg mb-2">JOIN OUR TEAM</p>
            <h2 className="text-4xl md:text-5xl font-bold text-text-base mb-4">
              Current Job Openings
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Explore opportunities to contribute to sustainable agriculture
        </p>
          </motion.div>


        <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-10">
          <input
            type="text"
            placeholder="Search roles..."
            className="w-full md:w-96 px-5 py-3 rounded-xl border border-primary-300 shadow-sm focus:ring-2 focus:ring-primary-500 outline-none bg-white text-text-base"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-64 px-4 py-3 rounded-xl border border-primary-300 shadow-sm bg-white text-primary-700 focus:ring-2 focus:ring-primary-500 outline-none"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="space-y-6">
          {filteredJobs.map((group, i) => (
            <div
              ref={openIndex === i ? scrollRef : null}
              key={group.category}
              className="bg-white/80 rounded-2xl border border-primary-100 shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5"
              >
                <div>
                  <h2 className="text-2xl font-semibold text-primary-700">{group.category}</h2>
                  <p className="text-sm text-primary-600 mt-1 flex justify-start">{group.cards.length} roles available</p>
                </div>

                <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }}>
                  <ChevronDown size={26} className="text-primary-700" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && group.cards.length > 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="px-6 pb-6"
                  >
                    <Slider {...settings}>
                      {group.cards.slice(0, visibleCards[group.category] || 9).map((card) => (
                        // <div key={card.id} className="px-3">
                        //   <motion.div whileHover={{ y: -6, scale: 1.02 }} className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-lg cursor-pointer">
                        //     <h3 className="text-lg font-bold text-emerald-800">{card.title}</h3>
                        //     <p className="text-gray-600 mt-2">{card.preview}</p>
                        //     <div className="mt-4 text-sm text-emerald-700 font-medium">{card.positions} positions • {card.daysLeft} days left</div>

                        //     <div className="mt-5 flex gap-3">
                        //       {/* <button onClick={() => navigate(`/career/${card.id}`, { state: card })} className="flex-1 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">See Details</button> */}
                        //       <button onClick={() => navigate(`/career/${card.id}`, { state: card })} className="py-2 px-4 border border-emerald-600 text-emerald-700 rounded-lg hover:bg-emerald-50">See Details</button>
                        //     </div>
                        //   </motion.div>
                        // </div>
                        <div key={card.id} className="px-3">
                          <motion.div
                            onClick={() => navigate(`/Careers/${card.id}`, { state: card })}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 220, damping: 18 }}
                            className="
      bg-white/70 backdrop-blur-xl border border-primary-200 shadow-xl 
      rounded-3xl cursor-pointer p-6 h-[380px] flex flex-col justify-between m-3
      hover:shadow-2xl hover:border-primary-400 transition-all
    "
                          >
                            <div>
                              <h3 className="text-2xl font-bold text-primary-800 tracking-tight line-clamp-1">
                                {card.title}
                              </h3>

                              <p className="text-text-base mt-3 text-base line-clamp-4 leading-relaxed">
                                {card.preview}
                              </p>
                            </div>

                            <div>
                              <div className="text-sm text-primary-700 font-semibold mb-3">
                                {card.positions} positions • {card.daysLeft} days left
                              </div>

                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  navigate(`/Careers/${card.id}`, { state: card });
                                }}
                                className="
          w-full py-2.5 rounded-xl font-medium text-primary-800
          bg-primary-100 hover:bg-primary-200 transition
        "
                              >
                                See Details →
                              </button>
                            </div>
                          </motion.div>
                        </div>


                      ))}
                    </Slider>

                    {group.cards.length > (visibleCards[group.category] || 3) && (
                      <div className="text-center mt-6">
                        <button onClick={() => handleSeeMore(group.category)} className="px-6 py-2 bg-primary-600 text-soil-base rounded-full hover:bg-primary-700">See More Jobs</button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {openIndex === i && group.cards.length === 0 && (
                <p className="px-6 pb-6 text-center text-text-muted">No matching roles found.</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Application Process Section */}
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
              Our Application Process
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Simple steps to join the FertiBase team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Apply Online", desc: "Submit your application and resume through our portal" },
              { step: "02", title: "Initial Review", desc: "Our HR team reviews your application and qualifications" },
              { step: "03", title: "Interview", desc: "Meet with our team to discuss your role and fit" },
              { step: "04", title: "Welcome Aboard", desc: "Receive your offer and join the FertiBase family" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-text-base mb-2">{item.title}</h3>
                <p className="text-text-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-soil-base mb-4">
              Ready to Grow with FertiBase?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Don't see a role that fits? We're always looking for talented individuals passionate about sustainable agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contactus"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Get in Touch
              </motion.a>
              <motion.button
                onClick={() => {
                  const openingsSection = document.getElementById('openings');
                  if (openingsSection) {
                    openingsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center bg-primary-700 text-soil-base px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all border-2 border-white/20"
              >
                <FileText className="mr-2 h-5 w-5" />
                Browse All Positions
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* We're Hiring Banner */}
      <section className="py-16 bg-soil-light">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-12 shadow-xl border-2 border-primary-200"
          >
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-primary-600 text-soil-base rounded-full text-lg font-bold">
                WE'RE HIRING!
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-base mb-4">
              Join Our Mission to Transform Agriculture
            </h2>
            <p className="text-xl text-text-light mb-8 max-w-2xl mx-auto">
              Be part of a team that's making a real difference in sustainable farming and environmental conservation.
            </p>
            <motion.a
              href="/contactus"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center bg-primary-600 text-soil-base px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all text-lg"
            >
              <Send className="mr-2 h-5 w-5" />
              Start Your Application Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
