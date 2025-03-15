import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-red-200 text-white mt-16 py-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* About Section */}
                    <div>
                        <h2 className="text-xl font-bold mb-3">About Us</h2>
                        <p className="text-white-400">
                            Bringing joy with candles, cakes, and hampers. Crafted with love to make every moment special.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-xl font-bold mb-3">Quick Links</h2>
                        <ul className="text-white space-y-2">
                            <li><a href="#" className="hover:text-red-400 transition">Home</a></li>
                            <li><a href="#" className="hover:text-red-400 transition">Gallery</a></li>
                            <li><a href="#" className="hover:text-red-400 transition">Shop</a></li>
                            <li><a href="#" className="hover:text-red-400 transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info & Social Media */}
                    <div>
                        <h2 className="text-xl font-bold mb-3">Contact</h2>
                        <p className="text-white">Email: support@example.com</p>
                        <p className="text-white">Phone: +123 456 7890</p>

                        {/* Social Media Icons */}
                        <div className="flex justify-center md:justify-start gap-4 mt-4">
                            <a href="#" className="text-white hover:text-blue-500 transition text-xl"><FaFacebook /></a>
                            <a href="#" className="text-white hover:text-pink-500 transition text-xl"><FaInstagram /></a>
                            <a href="#" className="text-white hover:text-blue-400 transition text-xl"><FaTwitter /></a>
                            <a href="#" className="text-white hover:text-red-500 transition text-xl"><FaEnvelope /></a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center text-white text-sm mt-10 border-t border-white pt-4">
                    &copy; {new Date().getFullYear()} Your Website. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
