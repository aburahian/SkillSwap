import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 px-6">
          <div>
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
              <FaFacebook />
              <FaInstagram />
              <FaTwitter></FaTwitter>
              <FaYoutube></FaYoutube>
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
