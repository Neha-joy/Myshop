import React, { useState } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    review: "Absolutely love the candles! The fragrance is long-lasting and calming.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Smith",
    review: "The cakes are delicious and beautifully designed! Will order again.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Emily Davis",
    review: "Received my hamper today, and it was so beautifully packed. Loved it!",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    id: 4,
    name: "David White",
    review: "Great service and the best quality gifts. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    id: 5,
    name: "Sophia Williams",
    review: "The best online store! Great quality and amazing customer service.",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
  },
];

export default function CustomerReviews() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-gray-100 py-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Customer Reviews
        </h2>

        <motion.div
          className="flex space-x-6 w-max"
          animate={{ x: isHovered ? 0 : "-100%" }} // Stops when hovered
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center w-72 mx-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full mb-4 border-2 border-red-400"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {review.name}
              </h3>
              <p className="text-gray-600 mt-2">{review.review}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
