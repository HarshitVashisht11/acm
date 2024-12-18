import React, { useState } from 'react';
import { teamMembers } from '../data/teamMember';
import { Users, Github, Linkedin, BookMarked } from 'lucide-react';

const categories = ["ACM", "ACM W"];

export default function TeamPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const getAvailableYears = (category) => {
    return Object.keys(teamMembers).filter(year =>
      teamMembers[year].some(member => member.category === category)
    );
  };

  const [availableYears, setAvailableYears] = useState(getAvailableYears(activeCategory));
  const [activeYear, setActiveYear] = useState(availableYears[0]);

  const onYearChange = (year) => {
    setActiveYear(year);
  };

  const onCategoryChange = (category) => {
    setActiveCategory(category);
    const updatedYears = getAvailableYears(category);
    setAvailableYears(updatedYears);
    setActiveYear(updatedYears[0]);
  };

  return (
    <div className="min-h-screen  pb-12">
      {/* Hero Section */}
      <div className="relative ">
        <div className="absolute inset-0">
          <div className="absolute inset-0 /90"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white">Our Team</h1>
          </div>
        </div>
      </div>

      {/* Category Selector */}
      <div className="max-w-7xl mb-8 mx-auto px-4 py-4">
        <div className="flex justify-center mb-8">
          <div className="bg-gray-900/50 p-1 rounded-xl border border-gray-800">
            <div className="flex space-x-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Year Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {availableYears.map((year) => (
            <button
              key={year}
              onClick={() => onYearChange(year)}
              className={`px-4 py-1 rounded-lg transition-all duration-300 ${
                activeYear === year
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20' 
                  : 'bg-gray-900/50 text-gray-400 hover:text-white border border-gray-800'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Team Members */}
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers[activeYear]
            ?.filter((member) => member.category === activeCategory)
            .map((member) => (
              <div 
                key={member.name}
                className="w-full sm:w-[calc(40%-1rem)] lg:w-[calc(25%-1rem)] bg-gray-900/50 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 border border-gray-800 hover:border-gray-700"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-gray-400 mb-4">{member.role}</p>
                  
                  <div className="flex space-x-4">
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.orcid && (
                      <a
                        href={member.orcid}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 transition-colors"
                      >
                        <BookMarked className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
