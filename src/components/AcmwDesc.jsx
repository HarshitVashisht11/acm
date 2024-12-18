import Section from './Section';
import Button from './Button';
import earth from '../acm-assets/acmw-earth.png';
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";

const AcmwDesc = () => {
  return (
    <Section>
      <div className="container mt-[100px] mx-auto flex flex-col lg:flex-row items-center lg:space-x-10">
        {/* Image Section */}
        <div className="w-full lg:w-[50%] mt-[150px] flex justify-center lg:justify-start">
          <img 
            src={earth} 
            className="h-[300px] lg:h-[60%] transform transition-transform duration-300 hover:scale-105 rounded-md" 
            alt="ACMW Earth" 
          />
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left self-center">
          <h2 className="h2 mt-[150px]">ACM-W</h2>
          <p className="body-1 max-w-3xl mx-auto lg:mx-0 mb-6 text-n-2 lg:mb-8">
            ACM-W takes forward the torch of ACM but with a special focus on women and empowers them in a way that they lead the world in the field of technology and provides them a path and platform to showcase their talent and hard work, which also gets recognized at the global level.
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
      <BottomLine/>
    </Section>
  );
}

export default AcmwDesc;
