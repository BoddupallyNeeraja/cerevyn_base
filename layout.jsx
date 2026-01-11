import { Outlet } from "react-router-dom";
import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ Navbar always visible - Fixed at top */}
      <Navbar />

      {/* ✅ Page content changes here - Padding for fixed navbar */}
      <main className="flex-grow pt-14 md:pt-28">
        <Outlet />
      </main>

      {/* ✅ Footer always visible */}
      <Footer />
    </div>
  );
}
