import React, { useEffect, useRef, useState } from 'react';
import Footer from './Footer';

export default function About() {
  const [counts, setCounts] = useState({
    cakesSold: 0,
    candlesMade: 0,
    hampersDelivered: 0,
    rating: 0,
  });

  const achievementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000; // Animation duration in milliseconds
          const interval = 30; // Speed of counting
          const steps = duration / interval;

          const targetCounts = {
            cakesSold: 5000,
            candlesMade: 2000,
            hampersDelivered: 1000,
            rating: 4.9,
          };

          const increments = {
            cakesSold: targetCounts.cakesSold / steps,
            candlesMade: targetCounts.candlesMade / steps,
            hampersDelivered: targetCounts.hampersDelivered / steps,
            rating: targetCounts.rating / steps,
          };

          const animateCount = () => {
            start += 1;
            setCounts((prev) => ({
              cakesSold: Math.min(prev.cakesSold + increments.cakesSold, targetCounts.cakesSold),
              candlesMade: Math.min(prev.candlesMade + increments.candlesMade, targetCounts.candlesMade),
              hampersDelivered: Math.min(prev.hampersDelivered + increments.hampersDelivered, targetCounts.hampersDelivered),
              rating: Math.min(prev.rating + increments.rating, targetCounts.rating),
            }));

            if (start < steps) {
              setTimeout(animateCount, interval);
            }
          };

          animateCount();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (achievementRef.current) {
      observer.observe(achievementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-full mx-auto p-6 space-y-12">

      {/* About Us Heading */}
      <h1 className="text-4xl font-bold text-gray-800 border-b-4 border-yellow-500 inline-block mx-auto block text-center">
        ABOUT US
      </h1>

      {/* Vision Section with Image on Left */}
      <div className="flex gap-4 flex-col md:flex-row items-center bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="about1.webp"
            alt="Vision"
            className="rounded-lg shadow-lg max-w-[300px] md:max-w-full"
          />
        </div>

        {/* Right Side - Vision Text */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">✨ Vision</h2>
          <p className="text-lg italic text-gray-600">
            "To be the go-to brand for handcrafted candles, exquisite cakes, and thoughtfully curated hampers, bringing warmth, joy, and unforgettable experiences to every celebration."
          </p>
        </div>
      </div>

      {/* Mission Section with Image on Right */}
      <div className="flex gap-3 flex-col md:flex-row-reverse items-center bg-white p-6 md:p-8 rounded-lg shadow-lg">
        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="about.jpg"
            alt="Mission"
            className="rounded-lg shadow-lg max-w-[300px] md:max-w-full"
          />
        </div>

        {/* Left Side - Mission Text */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">🎯 Mission</h2>
          <ul className="text-gray-600 text-lg space-y-3 text-left">
            <li className="flex items-center"><span className="text-yellow-500 text-2xl mr-2">🍰</span> <b>Craft Unique Experiences</b> – High-quality candles, cakes, and personalized hampers.</li>
            <li className="flex items-center"><span className="text-yellow-500 text-2xl mr-2">🎨</span> <b>Prioritize Quality & Creativity</b> – Finest ingredients & artistic designs.</li>
            <li className="flex items-center"><span className="text-yellow-500 text-2xl mr-2">🤝</span> <b>Customer-Centric Approach</b> – Personalized services & satisfaction.</li>
            <li className="flex items-center"><span className="text-yellow-500 text-2xl mr-2">🌍</span> <b>Sustainable & Ethical</b> – Eco-friendly packaging & materials.</li>
            <li className="flex items-center"><span className="text-yellow-500 text-2xl mr-2">💖</span> <b>Spread Happiness</b> – Create emotions, not just products.</li>
          </ul>
        </div>
      </div>

      {/* Achievements Section with Animation */}
      <div ref={achievementRef} className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center">🏆 Our Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-700 text-lg font-semibold">

          <div className="flex flex-col items-center">
            <span className="text-yellow-500 text-5xl">🎂</span>
            <p className="text-3xl font-bold mt-2">{Math.floor(counts.cakesSold)}+</p>
            <p>Cakes Sold</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-yellow-500 text-5xl">🕯️</span>
            <p className="text-3xl font-bold mt-2">{Math.floor(counts.candlesMade)}+</p>
            <p>Handmade Candles</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-yellow-500 text-5xl">🎁</span>
            <p className="text-3xl font-bold mt-2">{Math.floor(counts.hampersDelivered)}+</p>
            <p>Gift Hampers Delivered</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-yellow-500 text-5xl">⭐</span>
            <p className="text-3xl font-bold mt-2">{counts.rating.toFixed(1)}/5</p>
            <p>Customer Rating</p>
          </div>

        </div>

      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
