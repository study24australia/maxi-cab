import React from 'react';
import { Link } from 'react-router-dom';
import { Accessibility, Heart, Shield, ArrowLeft } from 'lucide-react';

const WheelchairTaxi = () => {
  const features = [
    'Fully wheelchair accessible vehicles',
    'Trained assistance from our drivers',
    'Secure wheelchair restraint systems',
    'Dignity and comfort guaranteed',
    'Medical appointment specialists',
    'Hospital transfer expertise'
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
              <h1 className="text-5xl font-bold mb-6">Wheelchair Accessible Taxi</h1>
              <p className="text-xl leading-relaxed mb-8">
                Dignified, safe, and comfortable transportation for passengers with mobility needs. We're committed to providing accessible transportation for everyone.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
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
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our wheelchair accessible vehicles are equipped with the latest technology and safety features to ensure a comfortable and secure journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Accessibility className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Full Accessibility</h3>
              <p className="text-gray-600">Purpose-built vehicles with ramps and adequate space for wheelchairs.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Systems</h3>
              <p className="text-gray-600">Advanced wheelchair restraint systems and safety protocols.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 text-pink-600 rounded-full mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassionate Care</h3>
              <p className="text-gray-600">Drivers trained in disability awareness and assistance.</p>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Accessible Transportation You Can Trust</h2>
          <p className="text-xl text-gray-300 mb-8">Professional, dignified service for all your mobility needs.</p>
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
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WheelchairTaxi;