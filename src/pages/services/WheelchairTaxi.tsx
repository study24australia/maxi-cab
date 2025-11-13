import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Accessibility, Heart, Shield, ArrowLeft } from 'lucide-react';
import SEO from '../../components/SEO';
import BookingModal from '../../components/BookingModal';

const WheelchairTaxi = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const features = [
    'Fully wheelchair accessible taxis Melbourne',
    'Secure wheelchair restraint systems',
    'Trained, compassionate drivers',
    'Wheelchair maxi taxi and maxi cab Melbourne options',
    'Expertise in medical and hospital transfers',
    'Comfortable maxi taxi Melbourne airport rides',
    '24/7 availability with easy maxi taxi booking Melbourne',
    'Affordable pricing and wheel chair hire Melbourne solutions'
  ];

  const benefits = [
    'Dignity, safety, and comfort guaranteed',
    'Suitable for NDIS participants and senior citizens',
    'Group-friendly large taxi and 12-seater maxi taxi options',
    'Flexible schedules for medical, social, or personal trips'
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Wheelchair Accessible Taxi Melbourne - Dignified Disability Transport"
        description="Professional wheelchair accessible taxi service in Melbourne. Fully equipped vehicles with ramps, safety restraints, and trained drivers. NDIS approved transport service."
        keywords="wheelchair accessible taxi Melbourne, disability transport, wheelchair taxi, accessible vehicle, NDIS transport, mobility taxi, wheelchair cab Melbourne"
        url="https://wheelchairide.taxi/services/wheelchair-taxi"
        image="https://wheelchairide.taxi/wheelchair.png"
      />
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
              <h1 className="text-5xl font-bold mb-6">Wheelchair Accessible Taxi in Melbourne</h1>
              <p className="text-xl leading-relaxed mb-8">
                Experience dignified, safe, and comfortable transportation with our premium wheelchair accessible taxi Melbourne service. At Wheelchair Ride, we're dedicated to providing inclusive and reliable transport for passengers with mobility needs — ensuring every ride is smooth, secure, and stress-free.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Whether it's a hospital transfer, medical appointment, or airport ride, our fleet of wheelchair taxis and maxi cabs Melbourne guarantees comfort and care at every step.
              </p>
              <p className="text-lg font-semibold mb-8">
                Book Accessible Taxi Now — travel with independence, safety, and comfort.
              </p>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Book Accessible Taxi
              </button>
            </div>
            <div className="relative">
              <img 
                src="/wheelchair.png"
                alt="Wheelchair accessible taxi service"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Accessibility Features</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our wheelchair accessible maxi taxis are purpose-built with advanced safety technology and easy access ramps. Each vehicle offers plenty of space to accommodate all types of wheelchairs — electric or manual — and ensures smooth entry and exit.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              From maxi taxi Melbourne airport transfers to wheel chair hire Melbourne options, we provide flexible and affordable solutions to suit your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Accessibility className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Full Accessibility</h3>
              <p className="text-gray-600">Our fleet includes purpose-built vehicles with hydraulic ramps, ample interior space, and professional drivers trained to provide friendly, respectful assistance. Whether you need a wheelchair taxi near me or a maxi taxi hire for longer trips, we've got you covered.</p>
              <p className="text-gray-600 mt-3">We also offer 12-seater maxi taxis and large taxis for families or caregivers traveling together — ensuring everyone arrives comfortably.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Systems</h3>
              <p className="text-gray-600">We prioritize passenger safety with advanced wheelchair restraint systems, smooth ramps, and secure locking mechanisms. Our wheelchair maxi taxi and wheelchair taxi Melbourne airport vehicles are regularly inspected and maintained to the highest standards for safety and hygiene.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 text-pink-600 rounded-full mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassionate Care</h3>
              <p className="text-gray-600">Every driver at Wheelchair Ride is professionally trained in disability awareness and assistance, ensuring a courteous and supportive experience. From book maxi taxi to specialized NDIS transport, we focus on making every trip a positive one.</p>
              <p className="text-gray-600 mt-3">We understand the importance of reliable transport — whether it's for daily commutes, hospital transfers, or events.</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Provide</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Accessible Transportation You Can Trust</h2>
          <p className="text-xl text-gray-300 mb-8">Professional, dignified service for all your mobility needs.</p>
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
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  );
};

export default WheelchairTaxi;