import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black bg-footer">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          {/* Sección de Información */}
          <div className="w-full px-4 mb-8 md:w-1/4 md:mb-0">
            <h6 className="mb-4 text-lg font-semibold tracking-wider text-white uppercase footer-heading">
              Information
            </h6>
            <ul className="space-y-2 list-none footer-link">
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors duration-300 hover:text-green-500">
                  Pages
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors duration-300 hover:text-green-500">
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors duration-300 hover:text-green-500">
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors duration-300 hover:text-green-500">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Sección de Recursos */}
          <div className="w-full px-4 mb-8 md:w-1/4 md:mb-0">
            <h6 className="mb-4 text-lg font-semibold tracking-wider text-white uppercase footer-heading">
              Resources
            </h6>
            <ul className="space-y-2 list-none footer-link">
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors duration-300 hover:text-green-500">
                  Monitoring Grader
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors duration-300 hover:text-green-500">
                  Video Tutorial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors duration-300 hover:text-green-500">
                  Terms & Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors duration-300 hover:text-green-500">
                  Zeeko API
                </a>
              </li>
            </ul>
          </div>

          {/* Sección de Ayuda */}
          <div className="w-full px-4 mb-8 md:w-1/4 md:mb-0">
            <h6 className="mb-4 text-lg font-semibold tracking-wider text-white uppercase footer-heading">
              Help
            </h6>
            <ul className="space-y-2 list-none footer-link">
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors duration-300 hover:text-green-500">
                  Sign Up
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors duration-300 hover:text-green-500">
                  Login
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors duration-300 hover:text-green-500">
                  Terms of Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors duration-300 hover:text-green-500">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Sección de Contacto */}
          <div className="w-full px-4 md:w-1/4">
            <h6 className="mb-4 text-lg font-semibold tracking-wider text-white uppercase footer-heading">
              Contact Us
            </h6>
            <p className="mb-2 text-gray-400 contact-info">
              Contact us if you need help with anything
            </p>
            <p className="mb-4 text-gray-400 contact-info">+01 123-456-7890</p>
            <div></div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400 footer-alt">
          &copy; 2019 Anup, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
