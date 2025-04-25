
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Users } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="text-center py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold">
        DESIGNED BY TEAM VIRAT
      </div>
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Engineer Section */}
        <Link 
          to="/engineer"
          className="flex-1 bg-gradient-to-br from-purple-500 to-pink-500 p-8 flex items-center justify-center group transition-all duration-500 hover:flex-[1.2]"
        >
          <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
            <div className="bg-white/10 p-6 rounded-full mb-6 backdrop-blur-sm">
              <Code className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Engineer</h2>
            <p className="text-white/80">learn prompting and gpt</p>
          </div>
        </Link>

        {/* Government Section */}
        <Link 
          to="/government"
          className="flex-1 bg-gradient-to-br from-blue-500 to-teal-500 p-8 flex items-center justify-center group transition-all duration-500 hover:flex-[1.2]"
        >
          <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
            <div className="bg-white/10 p-6 rounded-full mb-6 backdrop-blur-sm">
              <Users className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Government</h2>
            <p className="text-white/80">get visual help</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Index;
