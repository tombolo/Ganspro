'use client'
import React, { useState } from 'react';

interface Program {
  image: string;
  title: string;
  description: string;
  extraDescription: string;
}

interface ProgramCardProps {
  program: Program;
}

function ProgramCard({ program }: ProgramCardProps) {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fadeInUp">
      <img
        src={program.image}
        alt={program.title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-2xl font-bold mt-6">{program.title}</h3>
      <p className="text-gray-600 mt-4">{program.description}</p>
      {showDetails && (
        <p className="text-gray-600 mt-4">{program.extraDescription}</p>
      )}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </div>
  );
}

export default function ProgramsPage() {
  const programs: Program[] = [
    {
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
      title: 'Education for All',
      description:
        'Providing quality education to underprivileged children to break the cycle of poverty.',
      extraDescription:
        'This program focuses on delivering educational resources, training teachers, and creating community learning centers to ensure every child has access to a brighter future.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      title: 'Women Empowerment',
      description:
        'Empowering women with skills and resources to achieve financial independence.',
      extraDescription:
        'Our initiative provides vocational training, micro-financing, and mentorship programs to help women become leaders in their communities.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      title: 'Community Health',
      description:
        'Improving access to healthcare and promoting wellness in underserved communities.',
      extraDescription:
        'We collaborate with local clinics and health professionals to organize health camps, preventive care workshops, and nutrition programs to uplift community health standards.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      title: 'Environmental Sustainability',
      description:
        'Promoting eco-friendly practices and sustainable development.',
      extraDescription:
        'This program advocates for green practices, including waste management education, tree planting campaigns, and sustainable agriculture initiatives that protect our environment.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      title: 'Youth Development',
      description:
        'Equipping young people with skills and opportunities for a brighter future.',
      extraDescription:
        'Our projects focus on leadership training, career counseling, and extracurricular activities designed to inspire the next generation of innovators and leaders.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
      title: 'Disaster Relief',
      description:
        'Providing immediate aid and long-term support to communities affected by disasters.',
      extraDescription:
        'This program delivers emergency supplies, facilitates rehabilitation, and works on rebuilding communities to ensure resilience against future calamities.',
    },
  ];

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
            Our{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-teal-300">
              Programs
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200 animate-fadeInUp delay-200">
            Explore our transformative programs designed to empower individuals and communities.
          </p>
        </div>
      </section>

      {/* Programs Grid Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-black animate-fadeInUp">
          Featured Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} />
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fadeInUp">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl mb-8 animate-fadeInUp delay-200">
            Your support can change lives. Explore our programs and get involved today.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 hover:text-blue-700 transition-all transform hover:scale-105 animate-fadeInUp delay-400">
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
}

