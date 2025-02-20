import React from 'react';

export default function GetInvolvedPage() {
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
            Get <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-teal-300">Involved</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200 animate-fadeInUp delay-200">
            Join us in making a difference. Whether you volunteer, donate, or spread the word, your support matters.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fadeInUp text-black">
          How You Can Help
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Volunteer Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fadeInUp">
            <div className="text-center">
              <div className="p-4 bg-blue-100 rounded-full inline-block">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mt-6">Volunteer</h3>
              <p className="text-gray-600 mt-4">
                Join our team of dedicated volunteers and make a direct impact in your community.
              </p>
              <button className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          {/* Donate Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fadeInUp delay-100">
            <div className="text-center">
              <div className="p-4 bg-blue-100 rounded-full inline-block">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mt-6">Donate</h3>
              <p className="text-gray-600 mt-4">
                Your financial support helps us continue our mission and reach more lives.
              </p>
              <button className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                Donate Now
              </button>
            </div>
          </div>

          {/* Advocate Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fadeInUp delay-200">
            <div className="text-center">
              <div className="p-4 bg-blue-100 rounded-full inline-block">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mt-6">Advocate</h3>
              <p className="text-gray-600 mt-4">
                Spread the word about our cause and help us grow our community of supporters.
              </p>
              <button className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                Share Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-20 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fadeInUp">
            Our Impact in Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
                title: "500+ Children Educated",
                description: "Thanks to your support, we’ve provided quality education to over 500 children in underserved communities.",
              },
              {
                image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                title: "20+ Communities Transformed",
                description: "We’ve reached over 20 communities, empowering them with resources and opportunities.",
              },
              {
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                title: "95% Success Rate",
                description: "Our programs have a 95% success rate in improving the lives of those we serve.",
              },
            ].map((story, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all transform hover:-translate-y-2 animate-fadeInUp"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-2xl font-bold mt-6">{story.title}</h3>
                <p className="text-gray-200 mt-4">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6 animate-fadeInUp">
          Ready to Make a Difference?
        </h2>
        <p className="text-xl text-gray-600 mb-8 animate-fadeInUp delay-200">
          Join us today and be a part of something bigger than yourself.
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 animate-fadeInUp delay-400">
          Get Started Now
        </button>
      </section>
    </div>
  );
}
