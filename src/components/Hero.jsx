import { curve, heroBackground } from "../jsm-assets";
import acmImage from '../acm-assets/acm-png.png';
import acmWImage from '../acm-assets/acmW-png.png';
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { useState, useRef } from "react";

const Hero = () => {
  const [isACM, setIsACM] = useState(true); // State to toggle between ACM and ACM-W
  const parallaxRef = useRef(null);

  const toggleDepartment = () => {
    setIsACM((prev) => !prev); // Toggle between ACM and ACM-W
  };

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          {/* Toggle the heading based on ACM or ACM-W */}
          <h1 className="h1 mb-6">
            {isACM ? "CCET ACM STUDENT CHAPTER" : ""} &nbsp;
            <span className="inline-block relative">
            {isACM ? "" : "ACM-W"}{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>

          {/* Toggle the description text based on ACM or ACM-W */}
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            {isACM
              ? "Computing is not about computers, its about living, living to solve the problems of society using computer science."
              : "ACM-W empowers women in computing for a diverse and inclusive tech world."}
          </p>

          <Button href="/about" white>
            Learn More
          </Button>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              {/* Responsive image with object-fit */}
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={isACM ? acmImage : acmWImage} // Toggle images
                  className="w-full h-full object-cover object-center"
                  alt={isACM ? "ACM" : "ACM-W"}
                />
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
          <div className="text-center mt-8">
            <Button
              onClick={toggleDepartment}
            >
              {isACM ? "ACM-W" : "ACM"}
            </Button>
          </div>
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
