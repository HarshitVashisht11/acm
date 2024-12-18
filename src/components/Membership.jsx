import Section from './Section';
import Button from './Button';
import acmMembership from '../acm-assets/acm-membership.png'
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";

const Membership = () => {
  return (
    <Section>
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-10">

        {/* Text Section */}
        <div className="text-center lg:text-left self-center">
          <h2 className="h2 mt-5">ACM Membership Benefits</h2>
          <p className=" body-1 max-w-3xl text-justify mx-auto lg:mx-0 mb-6 text-n-2 lg:mb-8">
          A vast network of nearly 100,000 highly dedicated student and professional peers. A full year subscription to ACM magazines and news letters.(Communications of the ACM, XRDS: Crossroads, MemberNet etc.). The option to subscribe to the full ACM Digital Library, which includes over 2 million pages of text. Become a member of computing community through one of hundreds of Professional and Student Chapters worldwide.
          </p>
          <Button>Learn More</Button>
          <Button className="mx-6">Form Link</Button>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[30%] flex justify-center lg:justify-start">
          <img 
            src={acmMembership} 
            className="h-[300px] lg:h-[60%] transform transition-transform duration-300 hover:scale-105 rounded-md" 
            alt="ACMW Earth" 
          />
        </div>
      </div>
      <BottomLine/>
    </Section>
  );
}

export default Membership