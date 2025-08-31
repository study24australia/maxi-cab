import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Heart, Users, Award, MapPin } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Your safety is our top priority. All our drivers are licensed, background-checked, and trained in defensive driving techniques.'
    },
    {
      icon: Clock,
      title: 'Punctuality',
      description: 'We value your time. Our drivers arrive promptly and take the most efficient routes to get you to your destination on time.'
    },
    {
      icon: Heart,
      title: 'Customer Care',
      description: 'Exceptional customer service is at the heart of everything we do. We\'re here to make your journey comfortable and stress-free.'
    },
    {
      icon: Users,
      title: 'Professional Team',
      description: 'Our experienced drivers are courteous, professional, and committed to providing the highest level of service.'
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: 'We maintain the highest standards in vehicle maintenance, cleanliness, and customer service excellence.'
    },
    {
      icon: MapPin,
      title: 'Local Knowledge',
      description: 'Deep understanding of Melbourne\'s roads, traffic patterns, and best routes to ensure efficient transportation.'
    }
  ];

  const coverageAreas = [
    'Melbourne CBD',
    'South Yarra',
    'Richmond',
    'St Kilda',
    'Fitzroy',
    'Carlton',
    'Airport Transfers',
    'Docklands'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Melbourne Elite Taxi</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Your trusted transportation partner in Melbourne, committed to excellence, safety, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Our Work Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Trusted by leading businesses and organizations across Melbourne. Here are some of our valued clients who rely on our professional transportation services.
      </p>
    </div>

    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-4">
        {[
          { src: "/ow1.jpg", alt: "Client 1" },
          { src: "/ow2.jpg", alt: "Client 2" },
          { src: "/ow3.jpg", alt: "Client 3" },
          { src: "/ow4.jpg", alt: "Client 4" },
          { src: "/ow5.jpg", alt: "Client 5" },
          { src: "/ow6.jpg", alt: "Client 6" },
          { src: "/ow7.jpg", alt: "Client 7" },
        ].map((img, idx) => (
          <div key={idx} className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/3 px-4 mb-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
              <img 
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover rounded-lg mx-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Coverage Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Coverage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive taxi services across Melbourne and surrounding areas, ensuring you can rely on us wherever your journey takes you.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {coverageAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 text-center py-4 px-6 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Experience the Difference</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers who trust Melbourne Elite Taxi.</p>
          <Link 
            to="/#booking"
            className="inline-block bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
          >
            Book Your Ride Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
