'use client'; 
import React, { useState } from 'react';

export default function AboutPage() {
  const [showMissionDetails, setShowMissionDetails] = useState(false);

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
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-teal-300">Us</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200 animate-fadeInUp delay-200">
            We are a passionate team dedicated to transforming lives through education and innovation.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeInLeft">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600">
              To empower underprivileged children with quality education, enabling them to break the cycle of poverty and achieve their dreams.
            </p>
            {showMissionDetails && (
              <p className="text-lg text-gray-600">
                We believe education is the key to unlocking human potential. Our initiatives not only provide academic support but also foster essential life skills. Through community programs, mentorship, and innovative learning methods, we create opportunities for a brighter future.
              </p>
            )}
            <button
              onClick={() => setShowMissionDetails(!showMissionDetails)}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              {showMissionDetails ? "Show Less" : "Show More"}
            </button>
          </div>
          <div className="animate-fadeInRight">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
              alt="Our Mission"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fadeInUp">
            Meet Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'John Doe', role: 'Founder & CEO', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
              { name: 'Jane Smith', role: 'Education Director', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
              { name: 'Alex Johnson', role: 'Community Manager', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fadeInUp"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-2xl font-semibold text-center">{member.name}</h3>
                <p className="text-gray-600 text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-20 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fadeInUp">
            By the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '500+', label: 'Children Educated' },
              { number: '20+', label: 'Communities Reached' },
              { number: '95%', label: 'Success Rate' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all animate-fadeInUp"
              >
                <h3 className="text-5xl font-bold mb-2">{stat.number}</h3>
                <p className="text-xl">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
