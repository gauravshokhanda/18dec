import React from 'react';
import type { Photo } from '../data/photos';

interface PhotoGalleryProps {
  photos: Photo[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative group overflow-hidden rounded-lg transform transition-all duration-500 hover:scale-105 hover:z-10"
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="absolute bottom-4 left-4 right-4 text-white text-center text-sm font-medium">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;