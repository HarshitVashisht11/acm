import React, { useState } from "react";
import bookCover from '../acm-assets-2/book-cover.png';
import page1 from "../acm-assets-2/book-page1.jpg";
import page2 from "../acm-assets-2/book-page2.png";
import page3 from "../acm-assets-2/book-page3.png";
import page4 from "../acm-assets-2/book-page4.png";
import Section from "./Section";
import { BottomLine } from "./design/Hero";



const Flipbook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isViewerOpen, setViewerOpen] = useState(false);

  const pages = [
    bookCover,
    page1,
    page2,
    page3,
    page4,
  ];

  const openBookViewer = () => {
    setViewerOpen(true);
    showPage(0);
  };

  const closeBookViewer = () => {
    setViewerOpen(false);
  };

  const showPage = (index) => {
    setCurrentPage(index);
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <Section>
    <section className=" mt-[200px] flex flex-col items-center justify-center py-8">
    <h2 className="h2 mt-5">Digital Outlet</h2>

      <div
        className=" pt-8 flex bg-transparent items-center justify-center rounded-lg shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300"
        onClick={openBookViewer}
      >
        <img height={120}
          className="object-cover h-80 rounded-lg"
          src={bookCover}
          alt="Book Cover"
        />
      </div>

      {isViewerOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-90 z-50">
          <div className="relative w-4/5 max-w-lg bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            {pages.map((page, index) => (
              <div
                key={index}
                className={`${
                  currentPage === index ? "block" : "hidden"
                } w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out`}
              >
                <img className="w-full h-full object-contain" src={page} alt={`Page ${index + 1}`} />
              </div>
            ))}

            {/* Navigation Buttons */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-2xl bg-gray-700 text-gray-100 rounded-full p-3 shadow-md hover:bg-gray-600 transition-all duration-300"
              onClick={prevPage}
            >
              &#10094;
            </button>

            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl bg-gray-700 text-gray-100 rounded-full p-3 shadow-md hover:bg-gray-600 transition-all duration-300"
              onClick={nextPage}
            >
              &#10095;
            </button>

            <button
              className="absolute top-4 right-4 text-xl bg-gray-700 text-gray-100 rounded-full p-3 shadow-md hover:bg-gray-600 transition-all duration-300"
              onClick={closeBookViewer}
            >
              &#10006;
            </button>
          </div>
        </div>
      )}
    </section>
    <BottomLine/>
    </Section>
  );
};

export default Flipbook;
