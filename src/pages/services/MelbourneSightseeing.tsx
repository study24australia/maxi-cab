import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Camera, MapPin, Clock, ArrowLeft } from 'lucide-react';
import BookingModal from '../../components/BookingModal';

const MelbourneSightseeing = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const attractions = [
    'Federation Square',
    'Royal Botanic Gardens',
    'Queen Victoria Market',
    'St. Paul\'s Cathedral',
    'Melbourne Cricket Ground (MCG)',
    'Royal Exhibition Building',
    'Eureka Skydeck',
    'Brighton Beach Boxes'
  ];

  const tourFeatures = [
    'Experienced local guides',
    'Flexible itineraries',
    'Comfortable touring vehicles',
    'Photography stops included',
    'Insider local knowledge',
    'Group and private tours'
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
              <h1 className="text-5xl font-bold mb-6">Melbourne Sightseeing Tours</h1>
              <p className="text-xl leading-relaxed mb-8">
                Discover Melbourne's best attractions with our guided sightseeing tours. Let us show you the city like a local with insider knowledge and comfort.
              </p>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Book Sightseeing Tour
              </button>
            </div>
            <div className="relative">
              <img 
                src="/sight.png"
                alt="Melbourne sightseeing tour"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Attractions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Melbourne Attractions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore Melbourne's most iconic landmarks and hidden gems with our knowledgeable local drivers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {attractions.map((attraction, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                <span className="font-medium text-gray-800">{attraction}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Camera className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Photo Opportunities</h3>
              <p className="text-gray-600">Perfect stops for capturing memories at Melbourne's most photogenic locations.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">Our drivers know Melbourne inside out and share fascinating local stories.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Timing</h3>
              <p className="text-gray-600">Tours can be customized to your schedule and preferred pace of exploration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tour Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tourFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Explore Melbourne in Style</h2>
          <p className="text-xl text-gray-300 mb-8">Create unforgettable memories with our personalized sightseeing tours.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Book Tour
            </button>
            <Link 
              to="/contact"
              className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Custom Itinerary
            </Link>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  );
};

export default MelbourneSightseeing;