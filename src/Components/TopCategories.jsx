import React from "react";
import { motion } from "framer-motion";
import romanceImg from "../assets/romance.png";
import detectiveImg from "../assets/detective.png";
import mysteryImg from "../assets/mystery.png";
import cookingImg from "../assets/cooking.png";
import fantasyImg from "../assets/fantasy.png";
import educationImg from "../assets/education.png";

const categories = [
  { name: "Romance", img: romanceImg },
  { name: "Detective", img: detectiveImg },
  { name: "Mystery", img: mysteryImg },
  { name: "Cooking", img: cookingImg },
  { name: "Fantasy", img: fantasyImg },
  { name: "Education", img: educationImg },
  { name: "Romance", img: romanceImg },
  { name: "Detective", img: detectiveImg },
  { name: "Mystery", img: mysteryImg },
  { name: "Cooking", img: cookingImg },
  { name: "Fantasy", img: fantasyImg },
  { name: "Education", img: educationImg },
];

const TopCategories = () => {
  return (
    <div className="w-full bg-[#f3efe5] p-10 text-black">
      {/* Top Fixed Section */}
      <div className="max-w-5xl mx-auto mb-10">
        <p className="uppercase tracking-widest text-sm">Our Books</p>
        <h1 className="text-5xl font-serif mt-2 mb-4">Top categories</h1>
        <p className="text-gray-600 max-w-xl">
          Our collection is carefully crafted to bring readers a rich experience. Each category offers unique stories that open new worlds and inspire a deeper love for reading.
        </p>
      </div>

      {/* Marquee Section */}
      <div className="overflow-hidden whitespace-nowrap py-4">
        <motion.div
          className="flex gap-14"
          animate={{ x: [0, -1200] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {categories.map((cat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-white shadow-md flex items-center justify-center">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-30 h-30 object-contain rounded-full"
                />
              </div>
              <p className="mt-3 text-sm">{cat.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TopCategories;
