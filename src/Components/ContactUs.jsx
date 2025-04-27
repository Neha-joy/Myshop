import React, { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";


export default function ContactUs() {

  const [isSticky, setIsSticky] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false)
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formsubmit.co/ajax/karunalazar5602@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "" }); 
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };


  return (
    <>
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

          {success && (
            <p className="text-green-600 text-center mt-2 font-semibold">
              ✅ Message sent successfully!
            </p>
          )}

          {/* Form */}
          <form className="space-y-4 mt-4" onSubmit={handleSubmit} >

            <div>
              <label className="block text-gray-700 text-sm md:text-base font-semibold">Full Name</label>

              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 md:p-3 border border-gray-300 rounded focus:border-black focus:outline-none bg-transparent text-sm md:text-base"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm md:text-base font-semibold">E-mail</label>

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 md:p-3 border border-gray-300 rounded focus:border-black focus:outline-none bg-transparent text-sm md:text-base"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-black text-white cursor-pointer py-2 md:py-3 rounded-md hover:bg-gray-900 transition text-sm md:text-base font-semibold"
            >
              Send
            </button>
          </form>

          {/* Contact Info */}
          {/* <div className="text-sm md:text-base text-center mt-4">
            <p className="text-gray-700 font-semibold">📩 Email: hi@fashion.com</p>
            <p className="text-gray-700 font-semibold mt-2">📍 Location: San Francisco</p>
          </div> */}

        </div>
      </div>
      {/* WhatsApp Icon */}
      <div className={`w-full flex justify-end col-span-4 z-10 ${isSticky ? 'fixed bottom-36' : ''}`}>
        <a
          href="https://wa.me/+919778020459"
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 bg-white rounded-full shadow-lg flex items-center justify-center mr-6 hover:scale-105 transition-transform"
        >
          <IoLogoWhatsapp className="text-green-500 text-4xl" />
        </a>
      </div>
    </>
  );
}
