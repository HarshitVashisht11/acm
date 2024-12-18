import React, { useState } from 'react';
import { Camera, Calendar, X } from 'lucide-react';
import { galleryData } from '../data/gallery';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

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
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white">Gallery</h1>
          </div>
        </div>
      </div>

      {/* Event Filter */}
      <div className="max-w-7xl mb-8 mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          <button
            onClick={() => setSelectedEvent(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 
              ${!selectedEvent 
                ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20' 
                : 'bg-gray-900/50 text-gray-400 hover:text-white border border-gray-800'}`}
          >
            All Events
          </button>
          {galleryData.map(event => (
            <button
              key={event.id}
              onClick={() => setSelectedEvent(event.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 
                ${selectedEvent === event.id 
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20' 
                  : 'bg-gray-900/50 text-gray-400 hover:text-white border border-gray-800'}`}
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {event.title}
              </div>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {selectedEvent ? (
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              {galleryData.find(event => event.id === selectedEvent)?.title} ({galleryData.find(event => event.id === selectedEvent)?.date})
            </h2>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
              {galleryData.find(event => event.id === selectedEvent)?.images.map((image, index) => (
                <div
                  key={index}
                  className="break-inside-avoid relative group cursor-pointer"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white text-sm">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          galleryData.map(event => (
            <div key={event.id} className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{event.title} ({event.date})</h2>
              <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {event.images.map((image, index) => (
                  <div
                    key={index}
                    className="break-inside-avoid relative group cursor-pointer"
                    onClick={() => setSelectedImage(image.url)}
                  >
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-white text-sm">{image.caption}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
}
