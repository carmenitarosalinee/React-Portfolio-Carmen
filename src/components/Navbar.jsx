import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // pastikan kamu install lucide-react

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md text-gray-900"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1
          className={`text-2xl font-bold tracking-wide ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
        >
          Carmenita Lamba
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-medium">
          <li>
            <a href="#Home" className="hover:text-violet-500 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="hover:text-violet-500 transition">
              About
            </a>
          </li>
          <li>
            <a href="#Skills" className="hover:text-violet-500 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#Experience" className="hover:text-violet-500 transition">
              Experience
            </a>
          </li>
          <li>
            <a href="#Projects" className="hover:text-violet-500 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#Contact" className="hover:text-violet-500 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X
              size={28}
              className={isScrolled ? "text-gray-900" : "text-white"}
            />
          ) : (
            <Menu
              size={28}
              className={isScrolled ? "text-gray-900" : "text-white"}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-md text-gray-900 font-medium transition-all duration-300`}
        >
          <a
            href="#Home"
            className="hover:text-violet-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#About"
            className="hover:text-violet-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#Skills"
            className="hover:text-violet-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#Experience"
            className="hover:text-violet-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#Projects"
            className="hover:text-violet-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="hover:text-violet-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
