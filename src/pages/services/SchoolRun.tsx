import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GraduationCap, Shield, Clock, ArrowLeft, Users, Heart } from 'lucide-react';
import BookingModal from '../../components/BookingModal';

const SchoolRun = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const features = [
    'Background-checked drivers for every school route',
    'Child safety certified vehicles (including maxi cabs Melbourne)',
    'Wheelchair accessible taxis available for special needs students',
    'Punctual pickup and drop-off every time',
    'Emergency contact and parent communication updates',
    'Regular route familiarity for consistent and trusted service'
  ];

  const whyChoose = [
    'Trusted by Melbourne families for safe and reliable school transfers',
    'Fleet of maxi taxi Melbourne and wheelchair accessible taxis',
    'Professional drivers trained for child and disability care',
    'Easy maxi taxi booking Melbourne and flexible scheduling',
    'Affordable rates with top-rated safety standards'
  ];

  const schoolServices = [
    {
      title: 'Daily School Runs',
      description: 'Reliable maxi taxi Melbourne school transfers for daily commutes'
    },
    {
      title: 'After-School Activities',
      description: 'Safe rides for extracurricular and sports sessions'
    },
    {
      title: 'Excursion Transport',
      description: 'Spacious 12-seater maxi taxi and large taxi options for school trips'
    },
    {
      title: 'Emergency Pickup Service',
      description: 'Immediate response for unexpected travel needs'
    },
    {
      title: 'Holiday Program Transport',
      description: 'Hassle-free rides during school breaks'
    },
    {
      title: 'Special Needs Support',
      description: 'Accessible wheelchair taxis with trained assistance'
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
              <h1 className="text-5xl font-bold mb-6">School Run Service in Melbourne</h1>
              <p className="text-xl leading-relaxed mb-8">
                Ensure your child's safety, comfort, and punctuality with Wheelchair Ride's school run service — the most trusted choice for safe and reliable school transportation in Melbourne. We understand the responsibility parents place in us, and we go the extra mile to make every school journey secure, comfortable, and stress-free.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Our modern fleet of maxi cabs Melbourne and wheelchair accessible taxis ensures that every student, including those with special needs, reaches school on time — safely and comfortably.
              </p>
              <p className="text-lg font-semibold mb-8">
                Book School Transport Now — dependable school travel made easy for parents and kids.
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
            <p className="text-gray-600 max-w-3xl mx-auto">
              We know that transporting children requires the highest level of care. That's why our school run service is built around multiple safety layers, combining certified vehicles, trained drivers, and real-time communication.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              From maxi taxi Melbourne options for group school runs to wheelchair maxi taxi services for students with mobility needs, we ensure every ride meets our strict safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">School Specialists</h3>
              <p className="text-gray-600">Our drivers are experienced in school transportation and trained in child safety, first aid, and emergency response. Every maxi taxi driver undergoes thorough background checks and is familiar with school routes, ensuring reliability and peace of mind for parents.</p>
              <p className="text-gray-600 mt-3">We also provide maxi taxi booking Melbourne options for daily commutes, after-school activities, and special events.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Protocols</h3>
              <p className="text-gray-600">Safety is our top priority. Each maxi cab Melbourne and wheelchair accessible taxi Melbourne is equipped with child safety locks, seatbelts, and monitoring systems.</p>
              <p className="text-gray-600 mt-3">Our school run taxis follow a strict set of safety procedures — including verified driver IDs, emergency contact access, and secure pickup/drop-off protocols. Parents are always kept informed, ensuring confidence in every journey.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliable Timing</h3>
              <p className="text-gray-600">Our punctual school taxi service ensures that children are never late for school or home. Whether you need a maxi taxi near me for quick pickups or a scheduled maxi taxi hire for regular routes, our system ensures consistent, on-time service every day.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">School Transport Services</h3>
              <div className="space-y-4">
                {schoolServices.map((service, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-900 font-semibold">{service.title}</span>
                    </div>
                    <p className="text-gray-600 ml-6">{service.description}</p>
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

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Wheelchair Ride for School Transportation?</h3>
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