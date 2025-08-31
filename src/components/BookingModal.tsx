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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-md w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white text-gray-600 hover:text-gray-800 rounded-full p-2 shadow-lg z-10 transition-colors duration-200"
        >
          <X className="h-5 w-5" />
        </button>
        <BookingForm onSuccess={onClose} />
      </div>
    </div>
  );
};

export default BookingModal;