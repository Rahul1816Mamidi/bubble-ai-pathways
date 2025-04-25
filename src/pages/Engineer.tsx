
import React from 'react';
import { Book, Brain, BriefcaseIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Engineer = () => {
  const bubbles = [
    {
      title: "Handle AI",
      icon: <Brain className="w-12 h-12" />,
      link: "https://symphonious-ganache-9be697.netlify.app/",
      gradient: "from-purple-400 to-pink-300",
    },
    {
      title: "Learn AI Threat",
      icon: <Book className="w-12 h-12" />,
      link: "https://stellular-fudge-ebae05.netlify.app/",
      gradient: "from-blue-400 to-purple-300",
    },
    {
      title: "Career Tech",
      icon: <BriefcaseIcon className="w-12 h-12" />,
      link: "https://meek-granita-57466a.netlify.app/",
      gradient: "from-pink-400 to-purple-300",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4 md:p-8">
      <div className="text-center py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold mb-4">
        DESIGNED BY TEAM VIRAT
      </div>
      <Link to="/" className="text-purple-600 hover:text-purple-800 mb-8 inline-block">
        ← Back to Home
      </Link>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 md:mb-12 text-purple-800">Engineering Pathways</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {bubbles.map((bubble, index) => (
            <a
              key={index}
              href={bubble.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`transform hover:scale-105 transition-all duration-300 rounded-full aspect-square flex flex-col items-center justify-center p-8 bg-gradient-to-br ${bubble.gradient} bg-opacity-20 backdrop-blur-md shadow-xl hover:shadow-2xl border border-white border-opacity-20`}
            >
              <div className="text-white mb-4">
                {bubble.icon}
              </div>
              <h2 className="text-xl font-semibold text-white text-center">
                {bubble.title}
              </h2>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Engineer;
