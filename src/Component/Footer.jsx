import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import logoPng from "../assets/download.png";
import { Link } from "react-router";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 px-6">
          <div>
            <Link to={"/"}>
              <button className="flex items-center my-4 gap-2 text-xl font-bold bg-transparent p-0 hover:bg-transparent">
                <img
                  className="w-6 h-7 md:w-7 md:h-8 bg-[bg-gray-900]"
                  src={logoPng}
                  alt="Logo"
                />
                <span className="text-[#f76305]">killSwap</span>
              </button>
            </Link>
            <h4 className="text-sm font-semibold mb-3">Legal</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/security" className="hover:underline">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Follow us</h4>
           <div className="flex gap-6">
  <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
    <FaFacebook className="text-2xl hover:text-blue-600 transition" />
  </a>
  <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="text-2xl hover:text-pink-500 transition" />
  </a>
  <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
    <FaTwitter className="text-2xl hover:text-blue-400 transition" />
  </a>
  <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
    <FaYoutube className="text-2xl hover:text-red-600 transition" />
  </a>
</div>
          </div>
        </div>
        <div className=" text-sm text-gray-500 text-center">
          <p>Made with ♥ in Satkhira · © {currentYear} SkillSwap</p>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-xs text-gray-400 flex flex-col md:flex-row md:justify-between gap-3 px-6 pb-10">
          <div className="flex gap-4">
            <a className="hover:underline">Privacy Policy</a>
            <a className="hover:underline">Terms</a>
            <a className="hover:underline">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
