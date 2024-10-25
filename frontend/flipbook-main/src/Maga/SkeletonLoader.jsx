// src/components/SkeletonLoader.jsx
import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-300 animate-pulse rounded-lg shadow-lg">
      <div className="h-4 w-3/4 mb-4 bg-gray-400 rounded"></div>
      <div className="h-48 w-full bg-gray-400 rounded mb-4"></div>
      <div className="h-4 w-1/2 bg-gray-400 rounded"></div>
    </div>
  );
};

export default SkeletonLoader;
