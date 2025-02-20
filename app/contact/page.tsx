"use client"; 
import React from 'react';
import { useState } from 'react';

 

export default function ContactPage() {


  const [message, setMessage] = useState<string>("");
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      {/* Hero Section */}
      <section className="relative text-center py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute w-64 h-64 bg-white/10 rounded-full -top-32 -left-32 animate-float"></div>
          <div className="absolute w-48 h-48 bg-white/10 rounded-full top-1/2 -right-24 animate-float delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">
            Contact <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-teal-300">Us</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200 animate-fadeInUp delay-200">
            We’d love to hear from you! Reach out to us for any inquiries, collaborations, or feedback.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-2xl animate-fadeInLeft">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Email</label>
                <input
                  type="email"
                  placeholder="johndoe@example.com"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Message</label>
                <textarea
                  placeholder="Write your message here..."
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fadeInRight">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-blue-100 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-600"
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
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">Email Us</p>
                  <p className="text-gray-600">info@ganspro.org</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-blue-100 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-600"
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
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">Call Us</p>
                  <p className="text-gray-600">+123 456 7890</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-blue-100 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">Visit Us</p>
                  <p className="text-gray-600">123 Main St, City, Country</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="rounded-xl overflow-hidden shadow-2xl animate-fadeInUp">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6a32f7f1f8e!2sFlinders%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1625070000000!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
