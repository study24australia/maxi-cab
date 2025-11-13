import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Home, Truck, Shield, ArrowLeft, Users, Package } from 'lucide-react';
import BookingModal from '../../components/BookingModal';

const FurnitureMoving = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const features = [
    'Professional furniture handling by trained movers',
    'Protective wrapping and padding for every item',
    'Experienced moving team with reliable equipment',
    'Flexible scheduling to suit your timeline',
    'Competitive pricing with transparent quotes',
    'Damage protection coverage for every move',
    'Book maxi taxi for moving furniture anywhere in Melbourne'
  ];

  const whyChoose = [
    'Fleet of large taxis and maxi cabs Melbourne designed for moving',
    'Reliable maxi taxi booking Melbourne and easy scheduling',
    'Fully insured and professionally handled moves',
    'Friendly, experienced drivers for smooth relocations',
    'Flexible and affordable maxi taxi hire options',
    '24/7 availability across Melbourne and surrounding areas'
  ];

  const movingServices = [
    {
      title: 'Single Item Transport',
      description: 'Quick and careful moves for one or two pieces'
    },
    {
      title: 'Small Furniture Moves',
      description: 'Perfect for apartments and small offices'
    },
    {
      title: 'Office Relocations',
      description: 'Dependable, on-time business transfers'
    },
    {
      title: 'Antique and Delicate Items',
      description: 'Expert handling for fragile valuables'
    },
    {
      title: 'Emergency Furniture Moving',
      description: 'Fast response and safe transport'
    },
    {
      title: 'Storage Facility Transport',
      description: 'Pickup and delivery from storage units'
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
              <h1 className="text-5xl font-bold mb-6">Furniture Moving Service in Melbourne</h1>
              <p className="text-xl leading-relaxed mb-8">
                Need to move furniture safely and efficiently? Wheelchair Ride offers professional furniture moving services across Melbourne and nearby areas — ensuring your belongings are transported with utmost care. Whether it's a single piece, delicate antique, or small relocation, our maxi cab Melbourne and large taxi fleet is equipped to handle it all.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                From household furniture to office equipment, we make your moving experience smooth, secure, and stress-free.
              </p>
              <p className="text-lg font-semibold mb-8">
                Book Moving Service Now — trusted movers for quick and reliable transport.
              </p>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Book Moving Service
              </button>
            </div>
            <div className="relative">
              <img 
                src="/furniture.png"
                alt="Furniture moving service"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Moving Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Moving Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Moving doesn't have to be a hassle. Our experienced team and spacious maxi taxi Melbourne fleet are ready to help you with furniture transport for homes, offices, and businesses.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Whether you're relocating within the city or need a maxi taxi near me for an emergency move, Wheelchair Ride ensures a seamless, professional service every time.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              We offer maxi taxi hire for flexible moving schedules, so you can book on-demand or in advance based on your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Home className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Careful Handling</h3>
              <p className="text-gray-600">Your furniture deserves expert handling. Our drivers and movers use protective wrapping materials, padding, and secure loading techniques to prevent scratches or damage.</p>
              <p className="text-gray-600 mt-3">We treat every move — from a single sofa delivery to complete furniture relocation — with the same level of care. Choose our large taxi or 12-seater maxi taxi options for bigger loads or bulky items.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proper Equipment</h3>
              <p className="text-gray-600">We use professional-grade moving equipment, including trolleys, straps, and ramps, to ensure efficient and safe transport. Our maxi cab Melbourne and wheelchair taxi Melbourne vehicles are equipped with ample space and smooth suspension for a damage-free ride.</p>
              <p className="text-gray-600 mt-3">Whether it's a small furniture move or an office relocation, our vehicles are ready for any task.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Protected Service</h3>
              <p className="text-gray-600">For complete peace of mind, all our furniture moving services are fully insured. We offer damage protection coverage and real-time support so you can relax while we handle everything.</p>
              <p className="text-gray-600 mt-3">From antique furniture transport to emergency moving services, Wheelchair Ride keeps your valuables safe from start to finish.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Moving Services</h3>
              <div className="space-y-4">
                {movingServices.map((service, index) => (
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Wheelchair Ride for Furniture Moving?</h3>
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
          <h2 className="text-4xl font-bold mb-4">Professional Furniture Moving</h2>
          <p className="text-xl text-gray-300 mb-8">Trust your valuable furniture to our experienced moving professionals.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Book Moving Service
            </button>
            <Link 
              to="/contact"
              className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Moving Quote
            </Link>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  );
};

export default FurnitureMoving;