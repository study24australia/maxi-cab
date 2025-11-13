import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Calendar, Users, Star, Clock, Shield, ArrowLeft } from 'lucide-react';
import BookingModal from '../../components/BookingModal';

const EventTransfer = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const features = [
    {
      title: 'Professional and Punctual Service',
      description: 'Whether it\'s a maxi taxi hire or a wheelchair-accessible taxi Melbourne, our drivers are known for their reliability and timeliness.'
    },
    {
      title: 'Luxury and Standard Vehicle Options',
      description: 'Choose from our large taxi fleet or a maxi taxi Melbourne, perfect for both premium and budget-friendly transfers.'
    },
    {
      title: 'Experienced Chauffeurs',
      description: 'Courteous, experienced, and knowledgeable about Melbourne\'s event venues.'
    },
    {
      title: 'Competitive Pricing',
      description: 'Transparent rates with group booking discounts and flexible packages.'
    },
    {
      title: 'Special Event Coordination',
      description: 'Ideal for large gatherings with multiple pickups or drop-offs.'
    }
  ];

  const eventTypes = [
    {
      title: 'Weddings',
      description: 'Arrive in style with our book maxi taxi service or wheelchair taxi Melbourne for guests with special mobility needs.'
    },
    {
      title: 'Corporate Events & Conferences',
      description: 'Impress your clients and colleagues with seamless maxi cab Melbourne transfers.'
    },
    {
      title: 'Parties & Celebrations',
      description: 'Travel together in a 12-seater maxi taxi or large maxi taxi for convenient group transfers.'
    },
    {
      title: 'Theatre & Shows',
      description: 'Enjoy a comfortable ride in our maxi taxi near me for evening entertainment.'
    },
    {
      title: 'Sporting Events',
      description: 'Group transfers made easy with maxi taxi booking Melbourne and wheelchair maxi taxi options.'
    }
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
              <h1 className="text-5xl font-bold mb-6">Event Transfer Services in Melbourne</h1>
              <p className="text-xl leading-relaxed mb-8">
                Make your special events completely stress-free with our maxi cab Melbourne and wheelchair taxi services. Whether you're heading to a wedding, conference, or party, we ensure you arrive in comfort and style.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                At Wheelchair Ride, we specialize in event transfer services for individuals, families, and large groups across Melbourne. From maxi taxi Melbourne airport pickups to luxury 12-seater maxi taxi options, our vehicles are spacious, reliable, and professionally maintained to meet your every need.
              </p>
              <p className="text-lg font-semibold mb-8">
                Book Your Event Transfer Today — travel safely, comfortably, and on time.
              </p>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
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
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="font-semibold text-gray-900">{feature.title}</span>
                    </div>
                    <p className="text-gray-600 ml-5">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfect For</h3>
              <div className="space-y-4">
                {eventTypes.map((type, index) => (
                  <div key={index} className="bg-gray-50 p-5 rounded-lg hover:bg-orange-50 transition-colors duration-200">
                    <h4 className="font-semibold text-gray-900 mb-2">{type.title}</h4>
                    <p className="text-gray-600 text-sm">{type.description}</p>
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
              <p className="text-gray-600">Plan ahead and book a maxi taxi or wheelchair taxi Melbourne airport transfer in advance to ensure availability and peace of mind.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Group Coordination</h3>
              <p className="text-gray-600">We manage multiple vehicles, including 12-seater maxi taxis and large taxis, ensuring your entire group travels together safely and comfortably.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Experience</h3>
              <p className="text-gray-600">Experience a professional service that matches the importance of your special occasion. Our maxi taxi Melbourne airport and wheelchair-accessible taxi Melbourne fleet provides convenience, reliability, and class.</p>
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
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  );
};

export default EventTransfer;