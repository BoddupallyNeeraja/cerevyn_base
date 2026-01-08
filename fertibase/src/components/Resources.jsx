import React from "react";

export default function Resources() {
  // Import all images from the posters folder
  const modules = import.meta.glob("../posters/*.{png,jpg,jpeg,gif}", { eager: true });
  const images = Object.keys(modules)
    .map((k) => {
      const fileName = k.split('/').pop();
      // Remove extension
      const nameWithoutExt = fileName.replace(/\.[^/.]+$/, "");
      // Remove bracketed parts like (ENGLISH), (EN), etc., and normalize spacing
      const cleaned = nameWithoutExt.replace(/\s*\([^)]*\)\s*/g, ' ').replace(/[_\-]+/g, ' ').replace(/\s+/g, ' ').trim();
      // Title case for nicer display
      const displayName = cleaned
        .split(' ')
        .map(w => w ? (w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()) : '')
        .join(' ');

      return {
        src: modules[k].default || modules[k],
        fileName,
        displayName,
      };
    })
    .sort((a, b) => a.displayName.localeCompare(b.displayName));

  return (
    <div className="min-h-screen bg-soil-light py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-text-base">Resources</h1>
          <p className="text-text-light mt-3">Download or view product posters and resources</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img) => (
            <div key={img.fileName} className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 flex flex-col items-center">
              <div className="w-full h-64 bg-gray-50 rounded-md flex items-center justify-center overflow-hidden mb-4">
                <img src={img.src} alt={img.fileName} className="w-full h-full object-contain" />
              </div>
              <div className="w-full flex items-center justify-between">
                <div className="text-sm text-text-base font-semibold truncate">{img.displayName}</div>
                <a href={img.src} download className="px-3 py-2 bg-primary-50 text-primary-700 rounded-md text-sm font-semibold hover:bg-primary-100">Download</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
