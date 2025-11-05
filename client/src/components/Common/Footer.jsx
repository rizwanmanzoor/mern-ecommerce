import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { FaInstagramSquare, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr_2fr] gap-8">
            {/* Newsletter-form */}
            <div className="md:max-w-[80%]">
              <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
              <p className="text-gray-500 mb-4">
                Be the first to know about new arrivals, exclusive offers, and
                more.
              </p>
              <p className="font-medium text-sm text-gray-600 mb-6">
                Sign up and get 10% off your first purchase!
              </p>

              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="p-3 w-full text-sm border-t border-l border-b  border-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                />

                <button
                  type="submit"
                  className="bg-brand-black text-brand-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Shop-links */}
            <div>
              <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link
                    to="#"
                    className="hover:text-gray-500 transition-colors capitalize"
                  >
                    Men's top wear
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-gray-500 transition-colors capitalize"
                  >
                    Women's top wear
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-gray-500 transition-colors capitalize"
                  >
                    Men's bottom wear
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-gray-500 transition-colors capitalize"
                  >
                    Women's bottom wear
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support-links */}
            <div>
              <h3 className="text-lg text-gray-800 mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link
                    to="#"
                    className="hover:text-gray-500 transition-colors capitalize"
                  >
                    contact us
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-gray-500 transition-colors capitalize"
                  >
                    about us
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-gray-500 transition-colors capitalize"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-gray-500 transition-colors capitalize"
                  >
                    features
                  </Link>
                </li>
              </ul>
            </div>

            {/* Foolow-us */}
            <div>
              <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
              <div className="flex items-center space-x-3 mb-6">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600"
                >
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600"
                >
                  <FaInstagramSquare className="h-5 w-5" />
                </a>
                <a
                  href="https://www.x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600"
                >
                  <FaSquareXTwitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.api.whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600"
                >
                  <FaSquareWhatsapp className="h-5 w-5" />
                </a>
              </div>
              <h3 className="text-lg text-gray-800 mb-2">Call Us</h3>
              <p>
                <FiPhoneCall className="inline-block mr-2 mb-4" />
                0123-456-7890
              </p>
            </div>
          </div>
        </div>

        {/* Copyright-text */}
        <div className="container mx-auto mt-12 px-4 border-t border-gray-200 pt-6">
          <p className="text-gray-500 text-sm tracking-tighter text-center">
            &copy; {new Date().getFullYear()} Rabitt. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
