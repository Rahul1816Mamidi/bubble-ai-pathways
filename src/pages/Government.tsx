
import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Government = () => {
  const bubble = {
    title: "Map Mentor",
    icon: <MapPin className="w-12 h-12" />,
    link: "https://lustrous-banoffee-219b69.netlify.app/",
    gradient: "from-blue-400 to-teal-300",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 p-8">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
        ← Back to Home
      </Link>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">Government Sector</h1>
        <div className="flex justify-center">
          <a
            href={bubble.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`transform hover:scale-105 transition-all duration-300 rounded-full w-64 h-64 flex flex-col items-center justify-center p-8 bg-gradient-to-br ${bubble.gradient} bg-opacity-20 backdrop-blur-md shadow-xl hover:shadow-2xl border border-white border-opacity-20`}
          >
            <div className="text-white mb-4">
              {bubble.icon}
            </div>
            <h2 className="text-xl font-semibold text-white text-center">
              {bubble.title}
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Government;
