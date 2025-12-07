import React from "react";
import { Link } from "react-router";
import { Facebook, Instagram, Mail } from "lucide-react";
import { PiXLogoBold } from "react-icons/pi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-8 px-4 mt-20 text-white">
      <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Brand */}
        <div>
          <Link
            to="/"
            className="text-2xl font-extrabold flex items-center gap-2"
          >
            <span className=" text-white px-2 py-1 rounded">BookCourier</span>
          </Link>

          <p className="text-gray-300 mt-3 text-sm">Library to home delivery</p>

          <ul className="space-y-2 mt-4 text-gray-200">
            <li>
              <Link to="/books" className="hover:text-yellow-300">
                All Books
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-yellow-300">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-yellow-300">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-100">Resources</h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <Link to="/help" className="hover:text-yellow-300">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className="hover:text-yellow-300">
                How It Works
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-yellow-300">
                Pricing Policy
              </Link>
            </li>
            <li>
              <Link to="/coverage" className="hover:text-yellow-300">
                Coverage Map
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links / Notice */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-100">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <Link to="/terms" className="hover:text-yellow-300">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-yellow-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="hover:text-yellow-300">
                My Wishlist
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-300">
                Report an Issue
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-100">Contact</h3>

          <a
            href="mailto:support@bookcourier.com"
            className="flex items-center text-gray-200 hover:text-yellow-300"
          >
            <Mail size={18} className="mr-2" /> support@bookcourier.com
          </a>

          <p className="text-sm text-gray-300 mt-3">Phone: +880 1X XXXXXXXX</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-200 hover:text-blue-700"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (formerly Twitter)"
              className="text-gray-200 hover:text-sky-400"
            >
              <PiXLogoBold size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-200 hover:text-pink-600"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-blue-300 mt-8 pt-4">
        <div className="w-full flex flex-col md:flex-row justify-center items-center text-center gap-3">
          <p className="text-sm text-gray-200">
            © {currentYear} BookCourier. All Rights Reserved.
          </p>

          <div className="hidden md:flex items-center text-sm text-gray-200">
            <Link to="/privacy" className="hover:text-yellow-300 mr-3">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-yellow-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
