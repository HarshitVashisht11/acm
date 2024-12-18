import React, { useState } from 'react';
import { events, competitions } from '../data/events';
import { Calendar, Sparkles } from 'lucide-react';

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState('events');
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const getActiveData = () => {
    return activeTab === 'events' ? events : competitions;
  };

  const onToggle = (tab) => {
    setActiveTab(tab);
  };

  const toggleDescription = (id) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen  pb-12"> 
      {/* Hero Section */}
      <div className="relative ">
        <div className="absolute inset-0">
          <div className="absolute inset-0"></div>
          <div className="absolute inset-0 /90"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white">Events</h1>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-900/50 p-1 rounded-xl border border-gray-800">
          <div className="flex space-x-1">
            <button
              onClick={() => onToggle('events')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'events'
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Events
            </button>
            <button
              onClick={() => onToggle('competitions')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'competitions'
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Competitions
            </button>
          </div>
        </div>
      </div>

      {/* Event Cards */}
      <div className="mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-6">
          {getActiveData().map(item => {
            const { id, image, title, category, date, description, speaker } = item;
            return (
              <div 
                key={id} 
                className="relative bg-gray-900/50 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] border border-gray-800 hover:border-gray-700 w-full sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)] m-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />
                </div>
                

                <div className="p-6 relative z-10">
                  <div className="flex items-center space-x-2 text-gray-400 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 hover:text-purple-400 transition-colors">
                    {title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {expandedDescriptions[id] ? description : `${description.substring(0, 100)}... `}
                    {description.length > 100 && (
                      <button onClick={() => toggleDescription(id)} className="text-purple-400">
                        {expandedDescriptions[id] ? ' Read less' : ' Read more'}
                      </button>
                    )}
                  </p>

                  {speaker && (
                    <div className="flex items-center text-gray-400 text-sm">
                      <span className="font-medium text-purple-400">Speaker:</span>
                      <span className="ml-2">{speaker}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
