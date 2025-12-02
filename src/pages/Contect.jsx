import React, { useState } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto my-12">
        <h1 className="text-4xl font-bold text-[#f76305] mb-6 text-center">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 p-6 bg-white shadow rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#f76305]">
              Send a Message
            </h2>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f76305] transition duration-200"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f76305] transition duration-200"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f76305] transition duration-200"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-[#f76305] text-white rounded-lg hover:bg-orange-600 transition duration-200"
            >
              Send
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex-1 p-6 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#f76305]">
              Get in Touch
            </h2>
            <p className="mb-3 text-gray-700">
              <strong>Email:</strong> support@skillswap.com
            </p>
            <p className="mb-3 text-gray-700">
              <strong>Phone:</strong> +880123456789
            </p>
            <p className="mb-3 text-gray-700">
              <strong>Address:</strong> 1232 Dhaka, Dhaka, Bangladesh
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2 text-[#f76305]">
                Follow Us
              </h3>
              <div className="flex gap-4 text-gray-700">
                <a
                  href="https://www.facebook.com/SkillSwap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f76305]"
                >
                  Facebook
                </a>
                <a
                  href="https://twitter.com/SkillSwap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f76305]"
                >
                  Twitter
                </a>
                <a
                  href="https://www.linkedin.com/company/skillswap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f76305]"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/SkillSwap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f76305]"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Contact;
