"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Define your navigation links here
  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutUs" },
    { name: "Contacts", href: "/contact" },
    { name: "Get Involved", href: "/getInvolved" },
    { name: "Programs", href: "/programs" },
    { name: "Success Stories", href: "/successStories" },
  ];

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Ganspro Logo" width={150} height={80} />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`transition duration-300 ${
                    isActive ? "text-yellow-600" : "hover:text-yellow-600"
                  }`}
                >
                  {link.name}
                </Link>
                {/* Underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            // Close icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950">
          <ul className="px-6 pb-4 space-y-4 text-lg font-medium">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`block transition duration-300 ${
                      isActive ? "text-yellow-600" : "hover:text-yellow-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                  <span
                    className={`block h-0.5 bg-yellow-600 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

