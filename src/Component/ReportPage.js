import React from "react";
import { useLocation } from "react-router-dom";
import chart1 from "../Images/Bar-chart.png";
import chart2 from "../Images/pie-chart.png";
import chart3 from "../Images/histogram.png";
import chart4 from "../Images/heatmap.png";

const ReportPage = () => {
  const location = useLocation();
  const { jsonData } = location.state || {};

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-12">
        Generated Reports
      </h1>

      {/* Cards Container */}
      <div className="flex flex-col space-y-6">
        {/* Card 1 - Bar Chart */}
        <div className="transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="bg-white p-6 shadow-lg rounded-lg flex items-center border border-blue-400 hover:shadow-2xl">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-lg">
              <img
                src={chart1}
                alt="Pie Chart"
                className="w-60 h-60 rounded-lg"
              />
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Summary
              </h2>
              <p className="text-gray-600">Insights from the Pie Chart.</p>
            </div>
          </div>
        </div>

        {/* Card 2 - Line Chart */}
        <div className="transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="bg-white p-6 shadow-lg rounded-lg flex items-center border border-red-400 hover:shadow-2xl">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-lg">
              <img
                src={chart2}
                alt="Pie Chart"
                className="w-60 h-60 rounded-lg"
              />
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
               Summary
              </h2>
              <p className="text-gray-600">Insights from the Pie Chart.</p>
            </div>
          </div>
        </div>

        {/* Card 3 - Pie Chart */}
        <div className="transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="bg-white p-6 shadow-lg rounded-lg flex items-center border border-blue-400 hover:shadow-2xl">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-lg">
              <img
                src={chart3}
                alt="Pie Chart"
                className="w-60 h-60 rounded-lg"
              />
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Summary
              </h2>
              <p className="text-gray-600">Insights from the Pie Chart.</p>
            </div>
          </div>
        </div>

        {/* Card 4 - Area Chart */}
        <div className="transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="bg-white p-6 shadow-lg rounded-lg flex items-center border border-red-400 hover:shadow-2xl">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-lg">
              <img
                src={chart4}
                alt="Pie Chart"
                className="w-60 h-60 rounded-lg"
              />
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Summary
              </h2>
              <p className="text-gray-600">Insights from the Pie Chart.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
