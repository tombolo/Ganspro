import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div className="space-y-4 animate-fadeIn">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              Contact Us
            </h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300 hover:text-white transition-all">
                <svg
                  className="w-5 h-5 mr-2 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@ganspro.org
              </p>
              <p className="flex items-center text-gray-300 hover:text-white transition-all">
                <svg
                  className="w-5 h-5 mr-2 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +123 456 7890
              </p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4 animate-fadeIn delay-100">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-6">
              {[
                { name: 'Facebook', icon: 'facebook', color: 'text-blue-500' },
                { name: 'Twitter', icon: 'twitter', color: 'text-sky-400' },
                { name: 'Instagram', icon: 'instagram', color: 'text-pink-500' },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`${social.color} hover:scale-110 transform transition-all duration-300`}
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <use xlinkHref={`/icons.svg#${social.icon}`} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4 animate-fadeIn delay-200">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-400">
              Newsletter
            </h3>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Copyright Section */}
        <div className="text-center text-gray-400 animate-fadeIn delay-300">
          <p>
            &copy; {new Date().getFullYear()} Ganspro. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Made with <span className="text-red-500">❤️</span> for a better world
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;