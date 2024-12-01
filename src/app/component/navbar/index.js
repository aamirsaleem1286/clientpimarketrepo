"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [dropdown, setDropdown] = useState({ blockchain: false, developers: false, community: false });
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-6 py-4 flex items-center justify-around shadow-md ${
        scrolled ? "bg-[#8a348e] text-white" : " text-white"
      } transition-colors duration-300 z-50`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Image src="/logo.png" alt="Next.js Logo" width={200} height={120} />
      </div>

      {/* Links */}
      <div className="flex items-center space-x-6">
        {/* Pi Blockchain Dropdown */}
        <div className="relative">
          <button
            className="flex items-center hover:text-white hover:underline hover:underline-offset-4 px-4 py-2 rounded"
            onClick={() =>
              setDropdown((prev) => ({ ...prev, blockchain: !prev.blockchain }))
            }
          >
            Pi Blockchain <FaChevronDown className="ml-2" />
          </button>
          {dropdown.blockchain && (
            <div className="absolute top-full left-0 bg-white text-black rounded shadow-lg mt-2 w-40">
              <a href="#" className="block px-4 py-2 text-[#8a348e]  hover:underline hover:underline-offset-4">
                Overview
              </a>
              <a href="#" className="block px-4 py-2 text-[#8a348e]  hover:underline hover:underline-offset-4">
                Whitepaper
              </a>
              <a href="#" className="block px-4 py-2 text-[#8a348e]  hover:underline hover:underline-offset-4">
                Resources
              </a>
            </div>
          )}
        </div>

        {/* Developers Dropdown */}
        <div className="relative">
          <button
            className="flex items-center hover:text-white hover:underline hover:underline-offset-4 px-4 py-2 rounded"
            onClick={() =>
              setDropdown((prev) => ({ ...prev, developers: !prev.developers }))
            }
          >
            Developers <FaChevronDown className="ml-2" />
          </button>
          {dropdown.developers && (
            <div className="absolute top-full left-0 bg-white text-black rounded shadow-lg mt-2 w-40">
              <a href="#" className="block px-4 py-2 text-[#8a348e]  hover:underline hover:underline-offset-4">
              Docs
              </a>
              <a href="#" className="block px-4 py-2 text-[#8a348e]  hover:underline hover:underline-offset-4">
                API
              </a>
              <a href="#" className="block px-4 py-2 text-[#8a348e]  hover:underline hover:underline-offset-4">
                Community Projects
              </a>
            </div>
          )}
        </div>

        {/* Community Dropdown */}
        <div className="relative">
          <button
            className="flex items-center hover:text-white hover:underline hover:underline-offset-4 px-4 py-2 rounded"
            onClick={() =>
              setDropdown((prev) => ({ ...prev, community: !prev.community }))
            }
          >
            Community <FaChevronDown className="ml-2" />
          </button>
          {dropdown.community && (
            <div className="absolute top-full left-0 bg-white text-black rounded shadow-lg mt-2 w-40">
              <a href="#" className="block px-4 py-2 text-[#8a348e]  hover:underline hover:underline-offset-4">
              Forums
              </a>
              <a href="#" className="block px-4 py-2 text-[#8a348e]  hover:underline hover:underline-offset-4">
                Events
              </a>
              <a href="#" className="block px-4 py-2 text-[#8a348e]  hover:underline hover:underline-offset-4">
                Social Media
              </a>
            </div>
          )}
        </div>

        {/* Other Links */}
        <a href="#" className="hover:text-white hover:underline hover:underline-offset-4 px-4 py-2 rounded">
          About Us
        </a>
        <a href="#" className="hover:text-white hover:underline hover:underline-offset-4 px-4 py-2 rounded">
          Support
        </a>
        <a href="#" className="hover:text-white hover:underline hover:underline-offset-4 px-4 py-2 rounded">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
