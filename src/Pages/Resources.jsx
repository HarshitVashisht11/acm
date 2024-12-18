
import React from "react";
import Section from "../components/Section";
import res1 from "../acm-assets-2/resource1.jpg";
import res2 from "../acm-assets-2/resource2.png";
import res3 from "../acm-assets-2/resource3.png";

const topics = [
  "AI",
  "Web Development",
  "Deep Learning",
  "Machine Learning",
  "Data Science",
  "Cloud Computing",
  "Cybersecurity",
  "DevOps",
];

const resources = [
  {
    id: 1,
    image: res1,
    title: "Brain Computer Interaction (BCI): A Way to Interact with Brain Waves",
    description: " Sudhakar Kumar, Sunil K. Singh",
    buttonText: "Read More",
  },
  {
    id: 2,
    image: res2,
    title: "Distributed Ledger Technology",
    description: "Manraj Singh, Sudhakar Kumar",
    buttonText: "Read More",
  },
  {
    id: 3,
    image: res3,
    title: "Digital Twins",
    description: "Tarun Vats, Sudhakar Kumar",
    buttonText: "Read More",
  },
  // Add more resources here as needed
];

const Resources = () => {
  return (

    <div className="flex flex-col md:flex-row  min-h-screen mt-[95px] text-white">
      {/* Sidebar */}
      <div className="md:w-1/4 w-full bg-[#1C1A26] p-6">
        <h2 className="text-3xl font-bold mb-6">Topics</h2>
        <ul className="space-y-4">
          {topics.map((topic, index) => (
            <li
              key={index}
              className="text-lg font-medium hover:text-[#6C63FF] transition duration-300 cursor-pointer"
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>

      {/* Card Section */}
      <div className="md:w-3/4 w-full p-6">
        <h1 className="text-4xl font-bold mb-8">Resources</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
          <div
          key={resource.id}
          className="bg-[#1C1A26] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 flex flex-col justify-between"
        >
          <img
            src={resource.image}
            alt={resource.title}
            className="w-full h-52 object-cover rounded-lg mb-4"
          />
          <div className="flex-grow">
            <h2 className="text-2xl font-semibold mb-3">{resource.title}</h2>
            <p className="text-gray-400 mb-4">{resource.description}</p>
          </div>
          <button className="bg-[#AD6CFF] hover:bg-[#5348cc] text-white font-medium mt-auto py-2 px-4 rounded transition">
            {resource.buttonText}
          </button>
        </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Resources;
