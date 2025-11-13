import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Baby, Shield, Heart, ArrowLeft } from 'lucide-react';
import BookingModal from '../../components/BookingModal';

const BabySeatTransfer = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const features = [
    'Certified and regularly inspected child seats',
    'Safety-trained professional drivers',
    'Multiple age-appropriate seat options',
    'Hospital transfer and emergency support',
    'Spacious large taxis and maxi cabs Melbourne for family travel',
    'Family-friendly service with extra care and attention'
  ];

  const seatTypes = [
    'Infant seats (0–12 months)',
    'Convertible seats (0–4 years)',
    'Booster seats (4–8 years)',
    'High-back boosters (4–12 years)'
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
              <h1 className="text-5xl font-bold mb-6">Baby Seat Transfer in Melbourne</h1>
              <p className="text-xl leading-relaxed mb-8">
                Travel with peace of mind knowing your little ones are safe and comfortable. Our baby seat transfer service offers safe and secure transportation in clean, spacious maxi taxis Melbourne equipped with certified child seats. Whether you're heading to the airport, hospital, or a family event, your family's safety is always our top priority.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Choose Wheelchair Ride for reliable maxi cab Melbourne and large taxi options that cater to families of all sizes — ensuring every ride is smooth, secure, and stress-free.
              </p>
              <p className="text-lg font-semibold mb-8">
                Book Family Transfer Now — comfort, safety, and convenience in every trip.
              </p>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Book Family Transfer
              </button>
            </div>
            <div className="relative">
              <img 
                src="/baby_seat.png"
                alt="Baby seat transfer service"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Safety First Approach</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We understand how precious your little passengers are. That's why our maxi taxi Melbourne baby seat transfer service is designed to deliver a safe, smooth, and comfortable ride every time. From maxi taxi near me requests to pre-scheduled maxi taxi bookings, our vehicles are equipped with age-appropriate safety seats and driven by professionals trained in child care and road safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Baby className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Certified Equipment</h3>
              <p className="text-gray-600">All our child seats meet Australian Safety Standards and are inspected regularly. Whether you book a wheelchair maxi taxi or a 12-seater maxi taxi for family travel, every vehicle comes equipped with properly installed and certified baby seats.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Training</h3>
              <p className="text-gray-600">Our experienced drivers receive specialized training in child passenger safety, ensuring each journey is handled with the utmost care — whether it's a hospital transfer, airport pickup, or family outing.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 text-pink-600 rounded-full mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Extra Care</h3>
              <p className="text-gray-600">We pride ourselves on offering gentle, smooth rides with extra attention to your child's comfort. From maxi taxi hire for long-distance trips to wheelchair-accessible taxis Melbourne for inclusive family travel — we cover it all.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seat Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Child Seats</h2>
              <div className="space-y-4">
                {seatTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{type}</span>
                  </div>
                ))}
                <p className="text-gray-600 mt-6 pt-6 border-t border-gray-200">
                  All seat types are professionally installed and available upon request when you book your maxi taxi.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Features</h3>
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
          <h2 className="text-4xl font-bold mb-4">Book Your Family Transfer</h2>
          <p className="text-xl text-gray-300 mb-8">Safe, reliable transportation for your most precious passengers.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Book Now
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

export default BabySeatTransfer;