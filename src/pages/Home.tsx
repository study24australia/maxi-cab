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
      description: 'Need a maxi taxi near me or an urgent wheelchair taxi in Melbourne? We operate round-the-clock to serve you anytime, anywhere.'
    },
    {
      icon: Car,
      title: 'Modern Fleet',
      description: 'From 12-seater maxi taxis to large taxis, every vehicle is clean, well-maintained, and equipped for your comfort. Choose from maxi taxi hire, wheelchair-accessible taxis, and group travel options across Melbourne.'
    },
    {
      icon: MapPin,
      title: 'Local Expertise',
      description: 'Our professional drivers know Melbourne like the back of their hand from the city to the airport, and everywhere in between. Book your maxi taxi Melbourne airport ride with confidence.'
    }
  ];

  const services = [
    {
      title: 'Airport Transfers',
      description: 'Reliable maxi taxi to airport and wheelchair taxi Melbourne airport transfers. On-time pickups, smooth drop-offs, and stress-free travel.',
      image: '/taxi.jpg',
      link: '/services/vip-transfer'
    },
    {
      title: 'Event Transfer',
      description: 'Book a maxi cab Melbourne or a 12-seater maxi taxi for weddings, parties, or corporate events, arrive in comfort and style.',
      image: '/event_transfer.png',
      link: '/services/event-transfer'
    },
    {
      title: 'Wheelchair Taxi',
      description: 'Dignified and safe transport for passengers with mobility needs. Our wheelchair-accessible taxis Melbourne are equipped with ramps and professional drivers trained for care and safety.',
      image: '/wheelchair.png',
      link: '/services/wheelchair-taxi'
    },
    {
      title: 'Baby Seat Transfer',
      description: 'Travel safely with your little ones in our large taxis equipped with baby and booster seats.',
      image: '/baby_seat.png',
      link: '/services/baby-seat-transfer'
    },
    {
      title: 'Group Transfer',
      description: 'Perfect for family outings, airport runs, or tours. Book a maxi taxi and enjoy spacious, comfortable travel with room for everyone.',
      image: '/group.png',
      link: '/services/group-transfer'
    },
    {
      title: 'NDIS Run',
      description: 'Trusted by NDIS participants for professional, compassionate, and timely transport services.',
      image: '/wheelchair.png',
      link: '/services/ndis-run'
    },
    {
      title: 'Melbourne Sightseeing',
      description: 'Explore the city\'s iconic attractions with a professional driver and a comfortable maxi taxi Melbourne ride.',
      image: '/sight.png',
      link: '/services/melbourne-sightseeing'
    },
    {
      title: 'School Run',
      description: 'Safe and reliable maxi taxi booking Melbourne services for school children and parents seeking peace of mind.',
      image: '/baby_seat.png',
      link: '/services/school-run'
    },
    {
      title: 'Parcel Delivery',
      description: 'Fast and secure deliveries across Melbourne from urgent documents to parcels.',
      image: '/parcel.png',
      link: '/services/parcel-delivery'
    },
    {
      title: 'Furniture Moving',
      description: 'Professional and careful furniture moving service using large taxis and maxi cabs to fit your needs.',
      image: '/furniture.png',
      link: '/services/furniture-moving'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Maxi Taxi Melbourne | Wheelchair Taxi | Airport Transfers | Book Now"
        description="Book maxi taxi Melbourne, wheelchair accessible taxis, and airport transfers. 12-seater maxi taxi hire, large taxis, and maxi cab services available 24/7. Call 0435223547."
        keywords="maxi taxi Melbourne, wheelchair taxi Melbourne, maxi cab Melbourne, maxi taxi near me, maxi taxi booking Melbourne, 12 seater maxi taxi, large taxi, wheelchair accessible taxi Melbourne, maxi taxi hire, maxi taxi Melbourne airport"
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
                <span className="block" style={{ color: '#ff6f22' }}>Maxi & Wheelchair Taxi Services</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Professional maxi cab Melbourne, wheelchair taxi, and airport transfer services for every need. Whether you're booking a maxi taxi in Melbourne for a group trip or need a wheelchair-accessible taxi, we provide reliable, safe, and comfortable transportation - 24/7.
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