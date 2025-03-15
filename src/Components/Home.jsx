import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './Footer';
import Review from './Review';
import ContactUs from './ContactUs';

export default function Home() {
    const images = ["/Candle1.jpg", "/Cake.avif", "/Hamber2.webp"];
    const galleryImages = [
        { src: "/gallery.webp", size: "md:row-span-2" }, // Tall image
        { src: "/gallery2.jpg", size: "md:col-span-2" }, // Wide image
        { src: "/gallery3.webp", size: "" }, // Regular
        { src: "/gallery4.jpg", size: "md:row-span-2" }, // Tall image
        { src: "/gallery5.webp", size: "md:col-span-2" }, // Wide image
        { src: "/gallery6.webp", size: "" }, // Regular
    ];
    
    const [selectedImage, setSelectedImage] = useState(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full">

            {/* Background Section */}
            <div className="relative h-[300px] md:h-[400px] flex flex-col items-center justify-center text-white overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={images[index]}
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${images[index]})` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    />
                </AnimatePresence>

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-2xl md:text-4xl font-bold drop-shadow-lg">Welcome to Our Website</h1>
                    <p className="text-sm md:text-lg mt-2 md:mt-4 drop-shadow-lg">Your journey starts here.</p>
                    <button className="mt-4 md:mt-6 px-4 md:px-6 py-2 md:py-3 bg-red-300 text-white rounded-lg hover:bg-red-400 transition">
                        Get Started
                    </button>
                </div>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-4 md:px-6">
                {[
                    { title: "Candles", img: "/Candles2.jpg", desc: "Relax, Unwind, and Glow! Long-lasting, eco-friendly candles to set the perfect mood." },
                    { title: "Hampers", img: "/Hamber.jpg", desc: "Unbox Happiness! Thoughtfully curated gift boxes for every occasion." },
                    { title: "Cakes", img: "/Cake.webp", desc: "Sweeten Every Moment! Fresh, delicious, and beautifully crafted cakes for all occasions." }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        className="relative bg-white shadow-lg rounded-lg p-4 md:p-6 text-center hover:scale-105 transition overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                    >
                        <h2 className="text-lg md:text-xl font-semibold text-gray-800">{item.title}</h2>
                        <div className="relative group">
                            <img src={item.img} alt={item.title} className="w-full h-auto object-cover rounded-md transition-opacity duration-300 group-hover:opacity-50" />
                            <motion.button
                                className="absolute inset-0 flex items-center justify-center text-red-500 text-sm md:text-xl font-bold opacity-0 group-hover:opacity-80 transition duration-300"
                                whileHover={{ scale: 1.1 }}
                            >
                                View Details
                            </motion.button>
                        </div>
                        <p className="text-gray-600 mt-2 text-sm md:text-base">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Gallery Section */}
            <div className="mt-12 md:mt-16 px-4 md:px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6 md:mb-10">Our Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer ${image.size}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedImage(image.src)}
                        >
                            <img
                                src={image.src}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox for Fullscreen View */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                        >
                            <motion.img
                                src={selectedImage}
                                alt="Fullscreen Image"
                                className="max-w-full md:max-w-[90%] max-h-[80vh] rounded-lg"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Other Sections */}
            <div className="mt-10 md:mt-16">
                <Review />
            </div>
            <div>
                <ContactUs />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
