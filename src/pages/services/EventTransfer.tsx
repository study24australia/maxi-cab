import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Star, Clock, Shield, ArrowLeft } from 'lucide-react';

const EventTransfer = () => {
  const features = [
    'Professional and punctual service',
    'Luxury and standard vehicle options',
    'Experienced chauffeurs',
    'Competitive pricing',
    'Group booking discounts',
    'Special event coordination'
  ];

  const eventTypes = [
    'Weddings',
    'Corporate Events',
    'Conferences',
    'Parties & Celebrations',
    'Theatre & Shows',
    'Sporting Events'
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
              <h1 className="text-5xl font-bold mb-6">Event Transfer Services</h1>
              <p className="text-xl leading-relaxed mb-8">
                Make your special events stress-free with our reliable and stylish transfers. We ensure you arrive in comfort and style.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                Book Event Transfer
              </button>
            </div>
            <div className="relative">
              <img 
                src="/event_transfer.png"
                alt="Event transfer service"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Event Transfer?</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfect For</h3>
              <div className="grid grid-cols-2 gap-4">
                {eventTypes.map((type, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                    <span className="font-medium text-gray-800">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Benefits</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advance Booking</h3>
              <p className="text-gray-600">Schedule your event transfers in advance to ensure availability and peace of mind.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Group Coordination</h3>
              <p className="text-gray-600">We coordinate multiple vehicles for large groups to ensure everyone arrives together.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Experience</h3>
              <p className="text-gray-600">Professional service that matches the importance of your special occasion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Book Your Event Transfer?</h2>
          <p className="text-xl text-gray-300 mb-8">Contact us today for a personalized quote and service plan.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/#booking"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Book Now
            </Link>
            <Link 
              to="/contact"
              className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventTransfer;