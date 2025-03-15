import React from "react";

export default function ContactUs() {
  return (
    <div id="contact" className="flex flex-col md:flex-row items-center justify-center p-6 md:p-16 rounded-lg max-w-5xl mx-auto gap-8">
      
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="contactus.jpg"
          alt="Contact Us"
          className="rounded-lg object-cover w-full max-h-[350px] md:max-h-[450px]"
        />
      </div>

      {/* Right Side - Contact Form */}
      <div className="w-full md:w-[420px] bg-white p-6 md:p-8 shadow-lg rounded-lg flex flex-col justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">Contact Us</h2>

        {/* Form */}
        <form className="space-y-4 mt-4">
          <div>
            <label className="block text-gray-700 text-sm md:text-base font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 md:p-3 border border-gray-300 rounded focus:border-black focus:outline-none bg-transparent text-sm md:text-base"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm md:text-base font-semibold">E-mail</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 md:p-3 border border-gray-300 rounded focus:border-black focus:outline-none bg-transparent text-sm md:text-base"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 md:py-3 rounded-md hover:bg-gray-900 transition text-sm md:text-base font-semibold"
          >
            Send
          </button>
        </form>

        {/* Contact Info */}
        <div className="text-sm md:text-base text-center mt-4">
          <p className="text-gray-700 font-semibold">📩 Email: hi@fashion.com</p>
          <p className="text-gray-700 font-semibold mt-2">📍 Location: San Francisco</p>
        </div>
      </div>
    </div>
  );
}
