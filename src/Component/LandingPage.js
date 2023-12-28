import React, { useState } from "react";
import Modal from "./Modal"; // Assuming Modal.js is set up as previously described

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-blue-700 text-white text-center py-20">
        {/* Illustration */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://assets.justinmind.com/wp-content/uploads/2018/07/10-hero-image-website-ideas-to-inspire-you-header-3-768x492.png" // Replace with your chosen illustration URL
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Report Generation Tool</h1>
          <p className="text-xl mb-8">
            Effortlessly transform your data into insightful reports
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-white text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded shadow"
          >
            Generate Report
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">AI-Driven Insights</h3>
            <p>
              Utilize advanced AI algorithms to gain meaningful insights from
              your data.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">
              Customizable Templates
            </h3>
            <p>
              Create reports that match your brand and style with customizable
              templates.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">
              Real-Time Data Processing
            </h3>
            <p>
              Experience the power of real-time analytics for up-to-date report
              generation.
            </p>
          </div>
          {/* Additional feature blocks can be added here */}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>
          &copy; {new Date().getFullYear()} Report Generation Tool. All rights
          reserved.
        </p>
      </footer>

      {showModal && <Modal closeModal={() => setShowModal(false)} />}
    </div>
  );
};

export default LandingPage;
