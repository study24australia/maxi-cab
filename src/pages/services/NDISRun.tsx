import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Heart, Shield, Users, ArrowLeft, Clock, CheckCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import BookingModal from '../../components/BookingModal';

const NDISRun = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const features = [
    'NDIS registered service provider',
    'Trained disability support drivers',
    'Wheelchair accessible and maxi taxis available',
    'Flexible scheduling for appointments and programs',
    'Direct billing to NDIS plans',
    'Compassionate, professional care',
    '24/7 availability for emergency and routine trips'
  ];

  const whyChoose = [
    'Fully registered NDIS service provider in Melbourne',
    'Modern fleet of maxi cabs Melbourne and wheelchair accessible taxis',
    'Easy maxi taxi booking Melbourne and reliable scheduling',
    'Personalized service for every participant',
    'Trained drivers focused on comfort, safety, and respect'
  ];

  const supportTypes = [
    {
      title: 'Medical Appointments',
      description: 'Safe and timely trips with wheelchair accessible taxis Melbourne'
    },
    {
      title: 'Therapy Sessions',
      description: 'Comfortable rides for ongoing health and rehabilitation visits'
    },
    {
      title: 'Social Activities',
      description: 'Stay active and connected within your community'
    },
    {
      title: 'Shopping Assistance',
      description: 'Dependable maxi taxi hire for errands and grocery trips'
    },
    {
      title: 'Community Participation',
      description: 'Reliable travel for group events and social programs'
    },
    {
      title: 'Day Program Transport',
      description: 'Punctual pickup and drop-off for daily NDIS activities'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="NDIS Transport Melbourne - Registered Disability Support Services"
        description="NDIS registered transport provider in Melbourne. Professional disability support drivers, wheelchair accessible vehicles, flexible scheduling for NDIS participants."
        keywords="NDIS transport Melbourne, NDIS taxi, disability support transport, NDIS registered provider, wheelchair accessible NDIS, community participation transport"
        url="https://wheelchairide.taxi/services/ndis-run"
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
              <h1 className="text-5xl font-bold mb-6">NDIS Transportation Services in Melbourne</h1>
              <p className="text-xl leading-relaxed mb-8">
                At Wheelchair Ride, we're proud to provide specialized NDIS transportation services that prioritize comfort, care, and independence. As a fully registered NDIS service provider, we offer safe and reliable transport for participants who need assistance reaching medical appointments, social activities, or community programs.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Our fleet includes wheelchair accessible taxis Melbourne, wheelchair maxi taxis, and maxi cabs Melbourne, ensuring every NDIS participant travels with dignity, safety, and confidence.
              </p>
              <p className="text-lg font-semibold mb-8">
                Book NDIS Transport Today — dependable rides that support your independence and community participation.
              </p>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                Book NDIS Transport
              </button>
            </div>
            <div className="relative">
              <img 
                src="/wheelchair.png"
                alt="NDIS transportation service"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NDIS Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">NDIS Support Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We understand the unique needs of NDIS participants and provide customized transportation solutions designed to promote mobility, inclusion, and independence. Whether you're attending therapy sessions, shopping trips, or social events, our wheelchair taxi Melbourne and maxi taxi hire services ensure you reach your destination comfortably and on time.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              We work closely with participants, families, and caregivers to create transport schedules that fit seamlessly into your daily routine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassionate Care</h3>
              <p className="text-gray-600">Our drivers are trained in disability awareness and assistance, offering respectful and dignified service. From wheelchair taxi Melbourne airport rides to NDIS day program transport, our team ensures that every trip is comfortable, safe, and stress-free.</p>
              <p className="text-gray-600 mt-3">You can also choose a wheelchair maxi taxi or 12-seater maxi taxi for family or support group travel — making it easier for everyone to stay connected and engaged.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">NDIS Registered Provider</h3>
              <p className="text-gray-600">Wheelchair Ride is a fully registered NDIS transport provider with direct billing capabilities. That means less paperwork and more convenience for participants and caregivers.</p>
              <p className="text-gray-600 mt-3">We provide wheelchair accessible taxis Melbourne, large taxis, and maxi cabs Melbourne for various transport needs, ensuring all trips are covered under your NDIS plan when applicable.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Focus</h3>
              <p className="text-gray-600">We believe transportation is more than just getting from one place to another — it's about empowering community participation. Our NDIS transport Melbourne service helps participants stay connected, attend events, and take part in activities that enhance independence and wellbeing.</p>
              <p className="text-gray-600 mt-3">Whether you need maxi taxi booking Melbourne for recurring appointments or a one-time trip, we're here 24/7 to support your mobility goals.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Transport Support For</h3>
              <div className="space-y-4">
                {supportTypes.map((type, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-900 font-semibold">{type.title}</span>
                    </div>
                    <p className="text-gray-600 ml-8">{type.description}</p>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Wheelchair Ride for NDIS Transport?</h3>
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
          <h2 className="text-4xl font-bold mb-4">Supporting Your Independence</h2>
          <p className="text-xl text-gray-300 mb-8">Professional NDIS transportation services that respect your dignity and support your goals.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Book NDIS Transport
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

export default NDISRun;