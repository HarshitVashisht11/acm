import React from "react";
import img1 from "../acm-assets-2/achieve1.jpeg";
import img2 from "../acm-assets-2/achieve2.jpg";
import img3 from "../acm-assets-2/achieve3.jpg";
import img4 from "../acm-assets-2/achieve4.jpeg";
import ImageCard from "../components/ImageCard";
import Button from "../components/Button";
import "../styles/achievements.css";


const achievements = [
  {
    id: 1,
    image: img1,
    title: "CCET ACM Student Chapter featured on ACM India Website",
    description: "CCET ACM Student Chapter was featured on the official website of ACM India as the “Chapter of the Month” for reporting the highest amount of activities in the month of December and was highlighted the best among the 195 student chapters all over India...",
  },
  {
    id: 2,
    image: img2,
    title: "Best paper award at International Conference on Smart Systems and Advanced Computing",
    description: "Sudhakar Kumar, Faculty Sponsor CCET ACM Student Chapter, won the BEST PAPER AWARD for his paper entitled Efficient Speculative Parallelization Architecture for Overcoming Speculation Overheads..."
  },
  {
    id: 3,
    image: img4,
    title: "Feature Editor for the ACM XRDS Magazine",
    description: "The CCET ACM Student Chapter is proud to announce that our Chairperson, Ms.Muskaan Chopra has been selected as the Feature Editor for the ACM XRDS magazine. XRDS is the flagship academic magazine for student members ..."
  },
];

const Achievements = () => {
  return (
    // <main className='container mt-5'>
    // <div>Achievements Page</div>
    // <ImageCard imgSrc={img1}>
    //   <h3 className='text-xl font-bold mb-2'>CCET ACM Student Chapter featured on ACM India Website</h3>
    //   <p>CCET ACM Student Chapter was featured on the official website of ACM India as the “Chapter of the Month” for reporting the highest amount of activities in the month of December....</p>
    // </ImageCard>

    // </main>

    // <main class="w-full min-h-screen flex justify-center items-center">
    //   <div className='w-80 p-2 border-2 border-gray rounded-xl'>
    //     <img src={img1} className='h-40 object-fit rounded-xl w-full'alt="" />
    //     <div className='p-2'>
    //       <h2 className='font-bold text-lg'>CCET ACM Student Chapter featured on ACM India Website</h2>
    //       <p className="text-sm text-white  ">CCET ACM Student Chapter was featured on the official website of ACM India as the “Chapter of the Month” for reporting the highest amount of activities in the month of December and was highlighted the best among the 195 student chapters all over India....</p>
    //     </div>
    //     <div className='m-2'>
    //       <Button white>Read More</Button>
    //     </div>
    //   </div>
    // </main>

  //   <main className="achieve-body">
  //     <div className="achieve-cards">
  //       <div className="achieve-card">
  //         <div className="achieve-container">
  //           <img src={img1} alt="Las Vegas" />
  //         </div>
  //         <div className="achieve-details">
  //           <h3>CCET ACM Student Chapter featured on ACM India Website</h3>
  //           <p>
  //             CCET ACM Student Chapter was featured on the official website of
  //             ACM India as the “Chapter of the Month” for reporting the highest
  //             amount of activities in the month of December and was highlighted
  //             the best among the 195 student chapters all over India.
  //           </p>
  //         </div>
  //       </div>

  //       <div className="achieve-card">
  //         <div className="achieve-container">
  //           <img src={img4} alt="New York" />
  //         </div>
  //         <div className="achieve-details">
  //           <h3>Feature Editor for the ACM XRDS Magazine</h3>
  //           <p>
  //             The CCET ACM Student Chapter is proud to announce that our
  //             Chairperson, Ms.Muskaan Chopra has been selected as the Feature
  //             Editor for the ACM XRDS magazine. XRDS is the flagship academic
  //             magazine for student members ...
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </main>
  // );

  <div className=" min-h-screen mt-11 flex flex-col items-center py-12 px-6">
  <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">Achievements</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
    {achievements.map((achievement) => (
      <div
        key={achievement.id}
        className="bg-[#1C1A26] text-white p-10 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 flex flex-col items-center"
      >
        <img
          src={achievement.image}
          alt={achievement.title}
          className="w-full h-80 object-cover rounded-lg mb-6 shadow-lg"
        />
        <h2 className="text-2xl font-semibold mb-4 text-left hover:text-[#ab70f3]">{achievement.title}</h2>
        <p className="text-base text-gray-400 text-left leading-relaxed">
          {achievement.description}
        </p>
        <div className="pt-8">
        <Button white>Read More</Button>
        </div>
      
      </div>
       
    ))}
  </div>
</div>
  )
};

export default Achievements;
