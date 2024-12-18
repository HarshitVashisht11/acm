import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {teamMembers} from '../data/teamMember';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import Section from './Section';
import Button from './Button';

const Team = () => {
  const currentTeam = teamMembers['2024-25'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === currentTeam.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentTeam.length]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === currentTeam.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? currentTeam.length - 1 : prevIndex - 1
    );
  };

  return (
    <Section>
      <section className="bg-transparent py-16 px-8 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h2 className="h2 mt-5">Our Team</h2>
            <p className="body-1 max-w-3xl mx-auto lg:mx-0 mb-6 text-n-2 lg:mb-8 mt-5">
              Meet the amazing team behind the success of our club. Each member brings unique skills and dedication
              to ensure that we grow and make an impact.
            </p>
           <Button href="/team">More About Us</Button>
          </div>

          <div className="relative w-full  flex items-center justify-center">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentTeam[currentIndex].id}
                className="flex flex-col items-center space-y-4 bg-transparent p-6 rounded-lg"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <motion.div
                  className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-accent-1"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={currentTeam[currentIndex].image}
                    alt={currentTeam[currentIndex].name}
                    className="w-full h-full object-cover transform scale-110"
                  />
                </motion.div>

                <div className="text-center mt-6">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {currentTeam[currentIndex].name}
                  </h3>
                  <p className="text-xl text-gray-400 mb-1">{currentTeam[currentIndex].role}</p>
                  <p className="text-lg text-accent-1">{currentTeam[currentIndex].category}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 flex justify-between items-center px-4">
              <button
                onClick={handlePrev}
                className="bg-gray-600/50 p-3 rounded-full text-white hover:bg-gray-800 transition duration-200"
              >
                <FaArrowLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="bg-gray-600/50 p-3 rounded-full text-white hover:bg-gray-800 transition duration-200"
              >
                <FaArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <BottomLine />
    </Section>
  );
};

export default Team;
