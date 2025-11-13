import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Users, Car, Shield, ArrowLeft } from 'lucide-react';
import BookingModal from '../../components/BookingModal';

const GroupTransfer = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const features = [
    'Large capacity vehicles (up to 12 passengers)',
    'Group booking coordination and management',
    'Competitive group pricing',
    'Multiple vehicle scheduling for large events',
    'Luggage capacity for all passengers',
    'Professional and courteous drivers',
    'Wheelchair-accessible maxi taxis Melbourne available'
  ];

  const whyChoose = [
    'Fleet of modern maxi cabs Melbourne and large taxis',
    'On-time service with easy maxi taxi booking Melbourne',
    'Wheelchair accessible taxis for inclusive group transfers',
    'Ideal for corporate, family, and event-based travel',
    'Available 24/7 across Melbourne and surrounding areas'
  ];

  const occasions = [
    {
      title: 'Airport group transfers',
      description: 'hassle-free maxi taxi Melbourne airport pickups and drop-offs for groups'
    },
    {
      title: 'Wedding parties',
      description: 'luxurious large taxis and maxi cabs for wedding guests'
    },
    {
      title: 'Corporate events',
      description: 'reliable maxi taxi booking Melbourne for team travel and conferences'
    },
    {
      title: 'Sports team transport',
      description: 'travel together with ample space for equipment'
    },
    {
      title: 'Family reunions',
      description: 'book our 12-seater maxi taxi for large family outings'
    },
    {
      title: 'Tourist groups',
      description: 'explore Melbourne with guided tours in our maxi taxi hire vehicles'
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
              <h1 className="text-5xl font-bold mb-6">Group Transfer Service in Melbourne</h1>
              <p className="text-xl leading-relaxed mb-8">
                Travel together in comfort with Wheelchair Ride's Group Transfer Service — your trusted partner for safe, reliable, and affordable maxi cab Melbourne and large taxi options. Whether you're heading to the airport, attending a wedding, or planning a group tour, we make transportation easy, coordinated, and stress-free.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Enjoy the convenience of traveling in a spacious 12-seater maxi taxi or a wheelchair-accessible maxi cab, designed to accommodate families, corporate groups, sports teams, and tourists alike.
              </p>
              <p className="text-lg font-semibold mb-8">
                Book Group Transfer Now — travel together, arrive together.
              </p>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Book Group Transfer
              </button>
            </div>
            <div className="relative">
              <img 
                src="/group.png"
                alt="Group transfer service"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Group Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Group Travel Benefits</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Group Coordination</h3>
              <p className="text-gray-600">We handle all logistics to ensure your group stays on schedule. Our experienced team can coordinate multiple maxi taxi Melbourne bookings for large events, guaranteeing seamless pickups and drop-offs across Melbourne.</p>
              <p className="text-gray-600 mt-3">From airport group transfers to corporate travel, we ensure everyone arrives safely and on time.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Car className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Large Vehicles</h3>
              <p className="text-gray-600">Our fleet of large taxis, 12-seater maxi taxis, and minibuses offers spacious seating, ample luggage space, and comfortable interiors — perfect for groups of any size.</p>
              <p className="text-gray-600 mt-3">Whether you're searching for a maxi taxi near me or want to book a maxi taxi Melbourne airport pickup for your entire team, Wheelchair Ride provides the right vehicle for every occasion.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliable Service</h3>
              <p className="text-gray-600">Dependability is at the core of what we do. With professional drivers and a modern fleet of maxi cabs Melbourne, your group can relax knowing every ride is safe, timely, and well-coordinated.</p>
              <p className="text-gray-600 mt-3">We also offer wheelchair taxi options, ensuring all group members, including those with mobility needs, can travel together comfortably.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfect For</h3>
              <div className="space-y-4">
                {occasions.map((occasion, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-900 font-semibold">{occasion.title}</span>
                    </div>
                    <p className="text-gray-600 ml-6">{occasion.description}</p>
                  </div>
                ))}
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

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Wheelchair Ride for Group Travel?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChoose.map((reason, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-600">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Book Your Group Transfer</h2>
          <p className="text-xl text-gray-300 mb-8">Reliable transportation for groups of any size with competitive rates.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Book Group Transfer
            </button>
            <Link 
              to="/contact"
              className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Group Quote
            </Link>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  );
};

export default GroupTransfer;