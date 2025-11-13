import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Menu, X, ChevronDown, ArrowRight, Phone } from 'lucide-react';

interface HeaderProps {
  onBookNow: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookNow }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NCT7VVJP');
    `;
    document.head.appendChild(script);

    const noscript = document.createElement('noscript');
    noscript.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NCT7VVJP" height="0" width="0" style="display:none;visibility:hidden"></iframe>';
    document.body.insertBefore(noscript, document.body.firstChild);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (noscript.parentNode) {
        noscript.parentNode.removeChild(noscript);
      }
    };
  }, []);

  const services = [
    { name: 'Event Transfer', path: '/services/event-transfer' },
    { name: 'Baby Seat Transfer', path: '/services/baby-seat-transfer' },
    { name: 'Wheelchair Taxi', path: '/services/wheelchair-taxi' },
    { name: 'VIP Transfer', path: '/services/vip-transfer' },
    { name: 'Melbourne Sightseeing', path: '/services/melbourne-sightseeing' },
    { name: 'Group Transfer', path: '/services/group-transfer' },
    { name: 'NDIS Run', path: '/services/ndis-run' },
    { name: 'School Run', path: '/services/school-run' },
    { name: 'Parcel Delivery', path: '/services/parcel-delivery' },
    { name: 'Furniture Moving', path: '/services/furniture-moving' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleServiceClick = () => {
    setIsServicesOpen(false);
  };
  return (
    <>
      {/* Top Phone Bar */}
      <div className="bg-black text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-medium">Call Now:</span>
              <a
                href="tel:0435223547"
                className="text-orange-500 hover:text-orange-400 font-bold text-sm transition-colors"
              >
                0435223547
              </a>
              <span className="text-gray-400 text-sm hidden sm:inline">- Available 24/7</span>
            </div>
            <button
              onClick={onBookNow}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-lg font-medium text-sm transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

    <header className="bg-orange-500 shadow-lg relative z-50" style={{ backgroundColor: '#ff6f22' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-black text-white p-2 rounded">
              <Car className="h-6 w-6" />
            </div>
            <div className="text-black">
              <div className="font-bold text-lg">WHEELCHAIR</div>
              <div className="text-sm font-medium">RIDE</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-black' : 'text-gray-800 hover:text-black'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-black' : 'text-gray-800 hover:text-black'
              }`}
            >
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
            >
              <button 
                className={`flex items-center space-x-1 font-medium transition-colors ${
                  location.pathname.startsWith('/services') ? 'text-black' : 'text-gray-800 hover:text-black'
                }`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                <span>Our Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link 
                    to="/services" 
                    className="flex items-center justify-between px-4 py-3 text-gray-800 hover:text-black hover:bg-orange-50 transition-colors font-medium border-b border-gray-100"
                    onClick={handleServiceClick}
                  >
                    <span>All Services</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-black hover:bg-orange-50 transition-colors group"
                      onClick={handleServiceClick}
                    >
                      <span>{service.name}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-black' : 'text-gray-800 hover:text-black'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 hover:text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-in slide-in-from-top duration-200" style={{ borderTopColor: '#d72700' }}>
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-800 hover:text-black font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-800 hover:text-black font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button 
                  className="flex items-center justify-between w-full text-left text-gray-800 hover:text-black font-medium transition-colors"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>Our Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link 
                      to="/services" 
                      className="block text-gray-700 hover:text-black transition-colors py-1"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesOpen(false);
                      }}
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block text-gray-700 hover:text-black transition-colors py-1"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link 
                to="/contact" 
                className="text-gray-800 hover:text-black font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onBookNow();
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors text-center"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
};

export default Header;