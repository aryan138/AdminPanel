import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1fab89] text-white py-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Logo Section */}
        <div className="mb-4 md:mb-0 w-full md:w-auto">
          <h3 className="text-lg font-bold">LOGO</h3>
          <p className="text-sm mt-2">Everyone deserves a better way of living.</p>
        </div>

        {/* Link Sections */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          <nav aria-label="Quick Links">
            <h4 className="text-base font-bold mb-2">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Easy Diagnosis Gold/Plus
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Buy Medicine
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Video Consultation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  In-clinic Consultation
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <h4 className="text-base font-bold mb-2">Company</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Refund Policy
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Support">
            <h4 className="text-base font-bold mb-2">Support</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Customer Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  My Account
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Reach Us">
            <h4 className="text-base font-bold mb-2">Reach Us</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="tel:+917489237400" className="hover:underline">
                  Contact Us (+91 7489237400)
                </a>
              </li>
              <li>
                <a href="mailto:mail@easydiagnosis.com" className="hover:underline">
                  Mail Us: mail@easydiagnosis.com
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Divider */}
      <hr className="mt-8 border-gray-200" />

      {/* Footer Bottom */}
      <div className="container mx-auto mt-6 text-center text-sm">
        <p>&copy; 2024 Easy Diagnosis. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
