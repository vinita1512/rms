import React from "react";
import img1 from "../assets/movie-night-by-pool-whole-family.jpg";
import img2 from "../assets/relax-area-resort.jpg";
import img3 from "../assets/silhouette-palm-tree-with-umbrella.jpg";

const galleryImages = [
  { id: 1, src: img1, alt: "Luxury Room View" },
  { id: 2, src: img2, alt: "Resort Pool" },
  { id: 3, src: img3, alt: "Fine Dining" },
  { id: 4, src: img1, alt: "Beachfront Sunset" },
  { id: 5, src: img2, alt: "Spa and Wellness" },
  { id: 6, src: img3, alt: "Resort Gardens" },
  // Add more images as needed
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-gray-800 mb-10 text-center">
          Gallery
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Take a virtual tour of Vini Resort and experience the luxury and
          tranquility that await. From stunning views to world-class amenities,
          our gallery captures the essence of our hospitality.
        </p>

        {/* Enhanced Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 hover:opacity-90 transition-opacity duration-300 flex items-end p-4 rounded-lg">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
