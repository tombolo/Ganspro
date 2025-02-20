import React from 'react';

export default function SuccessStoriesPage() {
  const milestones = [
    {
      date: "2010",
      title: "Founded with a Vision",
      description:
        "Our organization began in 2010 with a simple yet powerful mission: to empower education and transform lives.",
    },
    {
      date: "2012",
      title: "First Scholarship Awarded",
      description:
        "By 2012, we awarded our first academic scholarship, setting the foundation for a legacy of support.",
    },
    {
      date: "2014",
      title: "100 Students Sponsored",
      description:
        "In 2014, we celebrated a major milestone by sponsoring 100 students, igniting hope for many families.",
    },
    {
      date: "2016",
      title: "Regional Expansion",
      description:
        "Our impact grew as we expanded regionally in 2016, reaching more communities and schools.",
    },
    {
      date: "2018",
      title: "Innovative Programs Launched",
      description:
        "In 2018, we introduced groundbreaking programs in digital literacy and leadership development.",
    },
    {
      date: "2020",
      title: "10,000+ Lives Transformed",
      description:
        "By 2020, our initiatives had positively impacted over 10,000 lives, reinforcing our commitment to change.",
    },
    {
      date: "2023",
      title: "Global Recognition",
      description:
        "In 2023, our work received global acclaim, marking a new era of international impact.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      {/* Hero Section */}
      <section className="relative text-center py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="relative container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">
            Our Journey of Impact
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200 animate-fadeInUp delay-200">
            Explore the milestones that have defined our legacy—from our humble beginnings to global recognition.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-10 top-0 bottom-0 w-1 bg-gray-300"></div>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center">
                {/* Timeline Marker */}
                <div className="relative">
                  <div className="w-8 h-8 bg-white border-2 border-indigo-600 rounded-full flex items-center justify-center absolute -left-5">
                    <span className="text-xs font-bold text-indigo-600">{milestone.date}</span>
                  </div>
                </div>
                {/* Milestone Content */}
                <div
                  className="ml-12 p-6 bg-white rounded-xl shadow-lg transform transition hover:scale-105 animate-fadeInUp"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h3 className="text-2xl font-bold text-gray-800">{milestone.title}</h3>
                  <p className="mt-2 text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative text-center py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="relative container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp">
            Join Our Mission
          </h2>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200 animate-fadeInUp delay-200">
            Become part of our ongoing journey to create lasting change in education and community empowerment.
          </p>
          <button className="mt-8 px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg transform transition hover:scale-105 animate-fadeInUp delay-400">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
}


