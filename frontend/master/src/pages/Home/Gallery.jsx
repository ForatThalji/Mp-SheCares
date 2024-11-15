import React from 'react';
import g1 from '../../assets/g1.jpg';
import g2 from '../../assets/g2.jpg';
import g4 from '../../assets/g4.jpg';
import g3 from '../../assets/g3.jpg';

function Gallery() {
  return (
    <div>
      <div>
        <section className="mx-auto text-gray-700 body-font bg-grayRoot p-4 sm:px-6 md:px-8 lg:px-44" id="gallery">
          <div className="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">
            Gallery
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="group relative">
              <img
                src={g1}
                alt="Image 1"
                className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>
            <div className="group relative">
              <img
                src={g2}
                alt="Image 2"
                className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>
            <div className="group relative">
              <img
                src={g4}
                alt="Image 3"
                className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>
            <div className="group relative">
              <img
                src={g3}
                alt="Image 4"
                className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Gallery;