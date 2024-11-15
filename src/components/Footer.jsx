import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary text-white py-8 mt-12 font-notoSansJP">
      <div className="container mx-auto px-6 md:flex md:justify-between">
        
        {/* Quick Links */}
        <div className="flex flex-col mb-6 md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/courses" className="hover:underline">Courses</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col mb-6 md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-sm mb-2">Email: <a href="mailto:support@elearning.com" className="hover:underline">support@elearning.com</a></p>
          <p className="text-sm mb-2">Phone: <a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a></p>
          <p className="text-sm">Address: 123 E-Learning St, Knowledge City, Webworld</p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col mb-6 md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-white hover:text-blue-600"><FaFacebookF size={24} /></a>
            <a href="https://twitter.com" className="text-white hover:text-blue-400"><FaTwitter size={24} /></a>
            <a href="https://linkedin.com" className="text-white hover:text-blue-700"><FaLinkedinIn size={24} /></a>
            <a href="https://instagram.com" className="text-white hover:text-pink-500"><FaInstagram size={24} /></a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-8 border-t border-gray-600 pt-4">
        <p>&copy; {new Date().getFullYear()} E-Learning. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
