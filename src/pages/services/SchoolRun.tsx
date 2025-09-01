import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GraduationCap, Shield, Clock, ArrowLeft, Users, Heart } from 'lucide-react';
import BookingModal from '../../components/BookingModal';

const SchoolRun = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const features = [
    'Background-checked drivers',
    'Child safety certified vehicles',
    'Punctual pickup and drop-off',
    'Regular route familiarity',
    'Emergency contact protocols',
    'Parent communication updates'
  ];

  const schoolServices = [
    'Daily school runs',
    'After-school activities',
    'Excursion transport',
    'Emergency pickup service',
    'Holiday program transport',
    'Special needs support'
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Services</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">School Run Service</h1>
              <p className="text-xl leading-relaxed mb-8">
                Safe and reliable school transportation for children with trusted, background-checked drivers. Peace of mind for parents, comfort for kids.
              </p>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Book School Transport
              </button>
            </div>
            <div className="relative">
              <img 
                src="/baby_seat.png"
                alt="School run service"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Child Safety Priority</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We understand the responsibility of transporting children. Our school run service is designed with multiple safety layers and parent peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">School Specialists</h3>
              <p className="text-gray-600">Drivers experienced in school transportation with child safety training.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Protocols</h3>
              <p className="text-gray-600">Comprehensive safety measures and emergency procedures for child passengers.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliable Timing</h3>
              <p className="text-gray-600">Punctual service ensuring children arrive at school and home on time.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">School Transport Services</h3>
              <div className="space-y-3">
                {schoolServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Safety Features</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Trusted School Transportation</h2>
          <p className="text-xl text-gray-300 mb-8">Safe, reliable, and caring transport service for your children's daily school needs.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Book School Run
            </button>
            <Link 
              to="/contact"
              className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  );
};

export default SchoolRun;