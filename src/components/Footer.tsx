import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Phone, Mail, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onBookNow: () => void;
}

const Footer: React.FC<FooterProps> = ({ onBookNow }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-orange-500 text-white p-2 rounded">
                <Car className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold text-lg">WHEELCHAIR</div>
                <div className="text-sm font-medium text-orange-500">RIDE</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Professional, reliable, and safe taxi services across Melbourne and nearby areas.
            </p>
            <div className="flex space-x-3">

              <a href="tel:0435223547" className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors cursor-pointer">
                <Phone className="h-4 w-4" />
              </a>
              <a href="mailto:whelchair.booking25@gmail.com" className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors cursor-pointer">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <button 
                  onClick={onBookNow}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Book Now
                </button>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/event-transfer" className="text-gray-300 hover:text-white transition-colors">
                  Event Transfer
                </Link>
              </li>
              <li>
                <Link to="/services/baby-seat-transfer" className="text-gray-300 hover:text-white transition-colors">
                  Baby Seat Transfer
                </Link>
              </li>
              <li>
                <Link to="/services/wheelchair-taxi" className="text-gray-300 hover:text-white transition-colors">
                  Wheelchair Taxi
                </Link>
              </li>
              <li>
                <Link to="/services/vip-transfer" className="text-gray-300 hover:text-white transition-colors">
                  VIP Transfer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">0435223547</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">info@melbourneelitetaxi.com.au</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">Melbourne, VIC Australia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">24/7 Service Available</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Wheelchair Ride. All rights reserved. | Professional taxi services across Melbourne.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;