import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <>
      {/* Phone button on the left */}
      <div className="fixed bottom-6 left-6 z-40">
        <a 
          href="tel:0436060000"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>
      
      {/* WhatsApp button on the right */}
      <div className="fixed bottom-6 right-6 z-40">
        <a 
          href="https://wa.me/61436060000"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;