import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Crown, Star, Sparkles, ArrowLeft } from 'lucide-react';
import BookingModal from '../../components/BookingModal';

const VIPTransfer = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const features = [
    'Luxury executive vehicles and large taxis',
    'Professional and courteous chauffeurs',
    'On-time pickups and flexible scheduling',
    'Premium comfort and privacy guaranteed',
    'Maxi taxi booking Melbourne for corporate and VIP clients',
    'Corporate account and recurring booking options'
  ];

  const perfectFor = [
    {
      title: 'Corporate Transfers & Events',
      description: 'Impress clients and partners with a maxi cab Melbourne or VIP maxi taxi ride.'
    },
    {
      title: 'Airport Transfers',
      description: 'Arrive on time and in style with our maxi taxi Melbourne airport VIP service.'
    },
    {
      title: 'Private Events',
      description: 'Travel elegantly to weddings, parties, and celebrations.'
    },
    {
      title: 'Hotel & Resort Transfers',
      description: 'Seamless, luxury rides for guests and executives.'
    }
  ];

  const vehicles = [
    'Mercedes-Benz S-Class',
    'BMW 7 Series',
    'Audi A8',
    'Luxury SUVs',
    'Executive Sedans',
    '12-seater maxi taxis for group VIP travel'
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
              <h1 className="text-5xl font-bold mb-6">VIP Transfer Service in Melbourne</h1>
              <p className="text-xl leading-relaxed mb-8">
                Travel like royalty with Wheelchair Ride's VIP Transfer Service — offering premium luxury transportation across Melbourne. Whether you're heading to a corporate event, hotel, or airport, our maxi cab Melbourne and executive chauffeur fleet provide the perfect combination of comfort, elegance, and reliability.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Enjoy a stress-free experience in one of our luxury maxi taxis Melbourne, where professionalism and privacy meet first-class style.
              </p>
              <p className="text-lg font-semibold mb-8">
                Book VIP Transfer Now — arrive in comfort, class, and confidence.
              </p>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Book VIP Transfer
              </button>
            </div>
            <div className="relative">
              <img 
                src="/vip.png"
                alt="VIP transfer service"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Experience</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our VIP transfer service is designed for business executives, VIP guests, and discerning travelers who demand more than just a ride. Whether you book a maxi taxi for an airport pickup or reserve a large taxi for a private event, every trip promises exceptional comfort and punctuality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Crown className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Executive Treatment</h3>
              <p className="text-gray-600">Experience white-glove service that goes beyond expectations. From maxi taxi hire for corporate transfers to luxury chauffeur rides, our drivers are professionally trained, discreet, and committed to ensuring your journey is seamless.</p>
              <p className="text-gray-600 mt-3">We offer personalized service, flexible scheduling, and meticulous attention to every detail — from pickup to destination.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Luxury Fleet</h3>
              <p className="text-gray-600">Our fleet includes executive sedans, luxury SUVs, and maxi cabs tailored for VIP comfort. Whether it's a maxi taxi Melbourne airport drop-off or a city-to-event transfer, each vehicle is maintained to the highest standards of luxury.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Amenities</h3>
              <p className="text-gray-600">Enjoy complimentary refreshments, WiFi, and climate-controlled seating to make every ride comfortable and productive. Our maxi cab Melbourne VIP rides are ideal for airport transfers, meetings, and high-profile events where timing and presentation matter most.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Luxury Fleet</h3>
              <p className="text-gray-600 mb-4">Our Premium Fleet Includes:</p>
              <div className="space-y-3">
                {vehicles.map((vehicle, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{vehicle}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6 pt-6 border-t border-gray-200">
                All vehicles are climate-controlled, feature plush interiors, and come with premium amenities to enhance your experience.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">VIP Service Features</h3>
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

      {/* Perfect For Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect For</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {perfectFor.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Experience Luxury Transportation</h2>
          <p className="text-xl text-gray-300 mb-8">Premium service for discerning clients who demand the best.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Book VIP Transfer
            </button>
            <Link 
              to="/contact"
              className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Premium Quote
            </Link>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  );
};

export default VIPTransfer;