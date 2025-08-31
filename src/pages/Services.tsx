import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Shield, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Event Transfer',
      description: 'Make your special events stress-free with our reliable and stylish transfers. Perfect for weddings, corporate events, and special occasions.',
      image: '/event_transfer.png',
      link: '/services/event-transfer',
      features: ['Professional drivers', 'Luxury vehicles', 'On-time guarantee']
    },
    {
      title: 'Baby Seat Transfer',
      description: 'Safe and secure transportation for your little ones with certified child seats. We prioritize your family\'s safety above all.',
      image: '/baby_seat.png',
      link: '/services/baby-seat-transfer',
      features: ['Certified child seats', 'Safety trained drivers', 'Family-friendly service']
    },
    {
      title: 'Wheelchair Taxi',
      description: 'Dignified, safe, and comfortable transportation for passengers with mobility needs. Fully accessible vehicles available.',
      image: '/wheelchair.png',
      link: '/services/wheelchair-taxi',
      features: ['Wheelchair accessible', 'Trained assistance', 'Dignity and comfort']
    },
    {
      title: 'VIP Transfer',
      description: 'Premium luxury transportation for your most important journeys. Executive vehicles with professional chauffeurs.',
      image: '/vip.png',
      link: '/services/vip-transfer',
      features: ['Luxury vehicles', 'Professional chauffeurs', 'Premium experience']
    },
    {
      title: 'Melbourne Sightseeing',
      description: 'Discover Melbourne\'s best attractions with our guided sightseeing tours. Let us show you the city like a local.',
      image: '/sight.png',
      link: '/services/melbourne-sightseeing',
      features: ['Local expertise', 'Flexible itineraries', 'Comfortable touring']
    },
    {
      title: 'Group Transfer',
      description: 'Comfortable transportation solutions for larger groups and families. Spacious vehicles for your group travel needs.',
      image: '/group.png',
      link: '/services/group-transfer',
      features: ['Large capacity vehicles', 'Group discounts', 'Coordinated service']
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: '24/7 Service',
      description: 'Available round the clock for all your transportation needs'
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Complete insurance coverage for your peace of mind'
    },
    {
      icon: Star,
      title: 'Top Rated',
      description: 'Consistently rated as Melbourne\'s premier taxi service'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Premium Services</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive transportation solutions tailored to meet all your travel needs across Melbourne and surrounding areas.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }}></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={service.link}
                    className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Have specific transportation requirements? Contact us for a personalized service plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link 
              to="/#booking"
              className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;