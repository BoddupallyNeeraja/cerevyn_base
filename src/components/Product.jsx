import React from "react";
import { Link } from "react-router-dom";

export default function Product() {
  // Load assets like the previous Solution page
  const modules = import.meta.glob("../assets/*", { eager: true });

  const excludeNames = [
    "wordcloud",
    "scroll",
    "react",
    "logo",
    "imagee",
    "indiamap",
    "fertibase",
    "cloud",
    "base",
    "b",
    "cloudd",
  ];

  const images = Object.keys(modules)
    .map((key) => {
      const fileName = key.split("/").pop();
      const src = modules[key].default || modules[key];
      const nameWithoutExt = fileName.replace(/\.[^/.]+$/, "");
      const normalized = nameWithoutExt.replace(/[\s\-_.]/g, "").toLowerCase();
      const displayName = nameWithoutExt
        .replace(/[_\-.]/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : ""))
        .join(" ");
      return { src, fileName, nameWithoutExt, normalized, displayName };
    })
    .filter((img) => !excludeNames.some((ex) => img.normalized.includes(ex)))
    .sort((a, b) => a.fileName.localeCompare(b.fileName));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
        {images.map((img) => {
          const slug = img.nameWithoutExt.replace(/[^a-zA-Z0-9]+/g, "-").replace(/(^-|-$)/g, "").toLowerCase();
          return (
            <Link key={img.fileName} to={`/product/${slug}`} state={{ image: img.src, displayName: img.displayName }} className="group">
              <div
                className="bg-white p-4 lg:p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                <div className="h-48 lg:h-64 w-full bg-gray-50 flex items-center justify-center overflow-hidden rounded-md">
                  {img.src ? (
                    <img src={img.src} alt={img.displayName} className="max-h-full max-w-full object-contain" />
                  ) : (
                    <div className="text-xs text-gray-400">No preview</div>
                  )}
                </div>

                <div className="mt-4 text-sm lg:text-base text-center text-gray-800 font-semibold truncate" title={img.displayName}>{img.displayName}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
