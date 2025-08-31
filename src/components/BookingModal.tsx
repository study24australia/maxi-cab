import React from 'react';
import { X } from 'lucide-react';
import BookingForm from './BookingForm';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="relative max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-800 hover:bg-gray-900 text-white rounded-full p-2 shadow-lg z-10 transition-all duration-200 hover:scale-110"
        >
          <X className="h-5 w-5" />
        </button>
        <BookingForm onSuccess={onClose} />
      </div>
    </div>
  );
};

export default BookingModal;