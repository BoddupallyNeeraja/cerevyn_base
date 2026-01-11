

import { Youtube, Instagram, Mail, Facebook, Linkedin, Phone, MapPin } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LOGOS } from "../config/images";

export default function Footer() {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/profile.php?id=61573758428179", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/fertibase_agri_solutions", label: "Instagram" },
    { icon: <Youtube className="h-5 w-5" />, href: "https://www.youtube.com/@FertiBase", label: "YouTube" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/fertibase/posts/?feedView=all", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:Info@fertibase.in", label: "Email" },
  ];

  return (
    <footer className="relative text-text-base pt-20 pb-10 overflow-hidden bg-soil-light">
      <div className="max-w-7xl mx-auto sm: relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Section with Image */}
          <div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center mb-4">
              <img src={LOGOS.main} alt="Fertibase Logo" className="w-2xl h-36 mr-44 object-contain bg-transparent" style={{ backgroundColor: 'transparent' }} />

            </motion.div>
            <p className="text-text-light leading-relaxed">
              Bringing life back to the soil, one microbe at a time.
              Because strong fields grow from a stronger foundation.
            </p>

            <div className="flex space-x-4 mt-5">
              {socialLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="p-2 bg-primary-100 shadow-sm rounded-full hover:bg-primary-200 transition"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-l-4 border-primary-500 pl-3 text-primary-600">
              Quick Links
            </h4>
            <ul className="space-y-2 text-text-base">
              <li>
                <Link to="/" className="hover:text-primary-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="hover:text-primary-600 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary-600 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-primary-600 transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-l-4 border-primary-500 pl-3 text-primary-600">
              Company
            </h4>
            <ul className="space-y-2 text-text-base">
              <li>
                <Link to="/contactus" className="hover:text-primary-600 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#home" className="hover:text-primary-600 transition">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#home" className="hover:text-primary-600 transition">
                  Our Vision
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-l-4 border-primary-500 pl-3 text-primary-600">
              Contact
            </h4>
            <ul className="space-y-3 text-text-base">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-600" />
                8185966666
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-600" />
                Info@fertibase.in
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary-600 mt-1" />
                <span>
                  SY NO. 81, Sultanpur
                  <br />
                  Hyderabad, India
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-primary-200 pt-6 text-center text-text-light text-sm">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold text-primary-600">Fertibase</span>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
