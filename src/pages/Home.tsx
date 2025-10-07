import React from 'react';
import SEO from '../components/SEO';
import BookingForm from '../components/BookingForm';
import { Clock, Car, MapPin, Users, Shield, Star, Phone, MessageCircle } from 'lucide-react';

interface HomeProps {
  onBookNow: () => void;
}

const Home: React.FC<HomeProps> = ({ onBookNow }) => {
  const features = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock service to meet all your transportation needs, any time of day or night.'
    },
    {
      icon: Car,
      title: 'Modern Fleet',
      description: 'Clean, comfortable, and well-maintained vehicles with professional drivers.'
    },
    {
      icon: MapPin,
      title: 'Local Expertise',
      description: 'Experienced drivers with extensive knowledge of Melbourne and surrounding areas.'
    }
  ];

  const services = [
    {
      title: 'Event Transfer',
      description: 'Make your special events stress-free with our reliable and stylish transfers.',
      image: '/event_transfer.png',
      link: '/services/event-transfer'
    },
    {
      title: 'Baby Seat Transfer',
      description: 'Safe and secure transportation for your little ones with certified child seats.',
      image: '/baby_seat.png',
      link: '/services/baby-seat-transfer'
    },
    {
      title: 'Wheelchair Taxi',
      description: 'Dignified, safe, and comfortable transportation for passengers with mobility needs.',
      image: '/wheelchair.png',
      link: '/services/wheelchair-taxi'
    },
    {
      title: 'Melbourne Sightseeing',
      description: 'Discover Melbourne\'s best attractions with our guided sightseeing tours.',
      image: '/sight.png',
      link: '/services/melbourne-sightseeing'
    },
    {
      title: 'VIP Transfer',
      description: 'Premium luxury transportation for your most important journeys.',
      image: '/vip.png',
      link: '/services/vip-transfer'
    },
    {
      title: 'Group Transfer',
      description: 'Comfortable transportation solutions for larger groups and families.',
      image: '/group.png',
      link: '/services/group-transfer'
    },
    {
      title: 'NDIS Run',
      description: 'Specialized transportation services for NDIS participants with professional care.',
      image: '/wheelchair.png',
      link: '/services/ndis-run'
    },
    {
      title: 'School Run',
      description: 'Safe and reliable school transportation for children with trusted drivers.',
      image: '/baby_seat.png',
      link: '/services/school-run'
    },
    {
      title: 'Parcel Delivery',
      description: 'Fast and secure parcel delivery services across Melbourne and surrounding areas.',
      image: '/parcel.png',
      link: '/services/parcel-delivery'
    },
    {
      title: 'Furniture Moving',
      description: 'Professional furniture moving and transportation services with careful handling.',
      image: '/furniture.png',
      link: '/services/furniture-moving'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Wheelchair Ride - Wheelchair Accessible Taxi & Maxi Cab Services"
        description="Professional wheelchair accessible taxi and maxi cab services in Melbourne. 24/7 NDIS transport, baby seat transfers, VIP services. Book online or call 0435223547."
        keywords="wheelchair taxi Melbourne, accessible transport, NDIS taxi, maxi cab, baby seat taxi, Melbourne taxi service, disability transport, wheelchair accessible vehicle"
        url="https://wheelchairide.taxi/"
      />
      {/* Hero Section */}
      <section 
        id="booking"
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/taxi_logo.jpg")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Melbourne's Premier
                <span className="block" style={{ color: '#ff6f22' }}>Taxi Services</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Professional airport transfers, city rides, and specialized transportation services across Melbourne and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="tel:0435223547"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
                <a 
                  href="https://wa.me/61435223547"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Booking Form */}
            <div className="flex justify-center lg:justify-end">
              <BookingForm onSuccess={() => {}} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Wheelchair Ride?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a 
                    href={service.link}
                    className="text-orange-600 hover:text-orange-700 font-medium transition-colors inline-flex items-center space-x-1"
                  >
                    <span>Learn More</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Book Your Ride?</h2>
          <p className="text-xl text-gray-300 mb-8">Professional, reliable, and comfortable transportation at your service.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={onBookNow}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Book Now
            </button>
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              <a href="tel:0435223547" className="block">Call for Quote</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;