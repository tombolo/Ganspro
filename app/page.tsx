import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 overflow-hidden mt-7">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white px-6">
        {/* Background Image */}
        <Image
          src="/images/Studentsbanner.jpeg"
          alt="Students Banner"
          fill
          className="object-cover transition-transform duration-1000 ease-in-out hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg animate-fadeInDown">
            Empowering Education with Ganspro
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl opacity-90 animate-fadeInUp delay-200">
            We sponsor children beyond primary education, ensuring access to secondary
            and university education.
          </p>
          <button className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-blue-700 animate-fadeInUp delay-400">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 animate-fadeInUp">
          Our Impact
        </h2>
        <p className="text-gray-600 mt-3 text-lg animate-fadeInUp delay-200">
          How Ganspro is changing lives through education.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Our Mission", "Get Involved", "Success Stories"].map((title, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-blue-600 animate-fadeInUp" style={{ animationDelay: `${index * 200}ms` }}>
              <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
              <p className="text-gray-600 mt-2">{title === "Our Mission" ? "Providing financial support to students in need for a brighter future." : title === "Get Involved" ? "Join us in making education accessible to all." : "See how Ganspro has transformed lives through education."}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Ganspro Model Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center px-6">
          <div className="w-full md:w-1/2 p-4 animate-fadeInLeft">
            <Image src="/images/EFAC.png" alt="EFAC Model" width={400} height={400} className="object-contain" />
          </div>
          <div className="w-full md:w-1/2 p-4 text-left animate-fadeInRight">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">The Ganspro Model</h2>
            <ul className="space-y-4 text-md text-gray-600">
              <li><strong>Academic Scholarship:</strong> Tuition, Books, Transportation</li>
              <li><strong>Personal Growth:</strong> Leadership & Financial Literacy</li>
              <li><strong>Mental Health:</strong> Counseling & Resilience Coaching</li>
              <li><strong>Career Planning:</strong> Mentorship & Job Placement</li>
            </ul>
            <div className="mt-6">
              <a href="#" className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:scale-105 hover:bg-blue-700">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fadeInUp">What People Are Saying</h2>
        <p className="text-lg text-gray-600 mb-12 animate-fadeInUp delay-200">Hear from those whose lives we have transformed</p>

        <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {["John Doe", "Jane Smith", "Alice Johnson"].map((name, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl group animate-fadeInUp" style={{ animationDelay: `${index * 200}ms` }}>
              <h3 className="text-xl font-bold text-gray-800">{name}</h3>
              <p className="text-gray-600 mt-2 italic">{name === "John Doe" ? "Ganspro changed my life!" : name === "Jane Smith" ? "A wonderful initiative." : "Proud to be part of this cause."}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}