import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Package, Truck, Clock, ArrowLeft, Shield, MapPin } from 'lucide-react';
import BookingModal from '../../components/BookingModal';

const ParcelDelivery = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const features = [
    'Same-day delivery and express options available',
    'Secure handling for all package types',
    'Real-time tracking and delivery updates',
    'Proof of delivery confirmation provided',
    'Special handling for fragile or medical items',
    'Flexible pickup scheduling via book maxi taxi system',
    'Large taxi and maxi cab options for bulk deliveries'
  ];

  const whyChoose = [
    'Trusted maxi cab Melbourne provider with citywide coverage',
    'Fast, insured, and trackable parcel delivery services',
    'Flexible maxi taxi hire and wheelchair taxi options',
    'Professional drivers and 24/7 availability',
    'Affordable rates for individuals and businesses'
  ];

  const deliveryTypes = [
    {
      title: 'Documents and Papers',
      description: 'Fast delivery of contracts, files, and paperwork'
    },
    {
      title: 'Small Packages',
      description: 'Quick local deliveries within Melbourne'
    },
    {
      title: 'Fragile Items',
      description: 'Secure handling and careful transport'
    },
    {
      title: 'Medical Supplies',
      description: 'Safe, temperature-controlled delivery options'
    },
    {
      title: 'Business Deliveries',
      description: 'Reliable courier service for companies and offices'
    },
    {
      title: 'Personal Items',
      description: 'Gifts, essentials, and special requests handled with care'
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
              <h1 className="text-5xl font-bold mb-6">Parcel Delivery Service in Melbourne</h1>
              <p className="text-xl leading-relaxed mb-8">
                Get your packages delivered safely, quickly, and reliably with Wheelchair Ride's parcel delivery service. Whether it's urgent business documents, medical supplies, or fragile personal items, we offer fast and secure delivery solutions across Melbourne and surrounding areas.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Our fleet of maxi cabs Melbourne and large taxis ensures your parcels are handled with care and reach their destination on time. Choose our same-day delivery or scheduled drop-off options and enjoy peace of mind with real-time tracking updates.
              </p>
              <p className="text-lg font-semibold mb-8">
                Book Delivery Now — reliable, insured, and efficient parcel delivery at your doorstep.
              </p>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Book Delivery
              </button>
            </div>
            <div className="relative">
              <img 
                src="/parcel.png"
                alt="Parcel delivery service"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Reliable Delivery Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Whether you're a business sending important contracts or an individual delivering a gift, Wheelchair Ride guarantees timely, secure, and professional parcel delivery across Melbourne.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Our maxi taxi Melbourne fleet is equipped to carry everything from small envelopes to large parcels, offering the flexibility you need. You can even book a maxi taxi for special or fragile item deliveries with extra care and attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Package className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Handling</h3>
              <p className="text-gray-600">We treat your parcels as if they were our own. Every maxi cab Melbourne driver is trained in secure handling and transport procedures, ensuring that items — especially fragile or high-value goods — are packed, loaded, and delivered safely.</p>
              <p className="text-gray-600 mt-3">From medical supplies to business packages, our vehicles are clean, spacious, and equipped for professional parcel logistics.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Delivery</h3>
              <p className="text-gray-600">Need something delivered urgently? Our same-day delivery service guarantees quick turnarounds and real-time updates. With our maxi taxi booking Melbourne system, you can easily schedule pickups or request instant deliveries with just a few clicks.</p>
              <p className="text-gray-600 mt-3">Whether it's a maxi taxi near me delivery request or a large taxi for multiple items, we'll ensure it's handled promptly and efficiently.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Insured Service</h3>
              <p className="text-gray-600">For your complete peace of mind, Wheelchair Ride offers fully insured parcel delivery services. Your items are protected from pickup to drop-off, with transparent proof of delivery provided.</p>
              <p className="text-gray-600 mt-3">Our maxi taxi hire and wheelchair taxi Melbourne options also cater to accessible delivery needs — ensuring everyone can send and receive parcels safely.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Deliver</h3>
              <div className="space-y-4">
                {deliveryTypes.map((type, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-900 font-semibold">{type.title}</span>
                    </div>
                    <p className="text-gray-600 ml-6">{type.description}</p>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Wheelchair Ride for Parcel Delivery?</h3>
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
          <h2 className="text-4xl font-bold mb-4">Fast & Secure Delivery</h2>
          <p className="text-xl text-gray-300 mb-8">Trust us with your important deliveries across Melbourne and beyond.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Book Delivery
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

export default ParcelDelivery;