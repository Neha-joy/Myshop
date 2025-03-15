import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll"; // For smooth scrolling
import { Link as RouterLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isAboutPage, setIsAboutPage] = useState(false);

  // Detect route change and update state
  useEffect(() => {
    setIsAboutPage(location.pathname === "/about");
  }, [location]);

  return (
    <nav className="bg-red-300 text-white cursor-pointer text-xl p-4 flex justify-between items-center shadow-md transition-all duration-300">
      <h1 className="text-2xl font-bold">MyShop</h1>

      {/* Mobile Menu Button */}
      <div className="relative md:hidden">
        <button className="p-2 bg-red-300 text-white rounded" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute bg-red-300 top-12 right-0 w-56 shadow-lg rounded-md p-4 z-50">
            <ul className="space-y-3 text-left">
              <li>
                <RouterLink to="/" className="block hover:underline" onClick={() => setIsOpen(false)}>
                  Home
                </RouterLink>
              </li>

              {/* Only Show Contact on Pages Other Than About */}
              {!isAboutPage && (
                <li>
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="block hover:underline cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </ScrollLink>
                </li>
              )}

              <li>
                <RouterLink to="/about" className="block hover:underline" onClick={() => setIsOpen(false)}>
                  About
                </RouterLink>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <RouterLink to="/" className="hover:underline">
            Home
          </RouterLink>
        </li>

        {/* Only Show Contact on Pages Other Than About */}
        {!isAboutPage && (
          <li>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-70} className="hover:underline cursor-pointer">
              Contact
            </ScrollLink>
          </li>
        )}

        <li>
          <RouterLink to="/about" className="hover:underline">
            About
          </RouterLink>
        </li>
      </ul>
    </nav>
  );
}
