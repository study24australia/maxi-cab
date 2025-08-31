import React, { useState } from 'react';
import { User, Phone, MapPin, Calendar, Clock, Car, FileText } from 'lucide-react';

interface BookingFormProps {
  onSuccess?: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    serviceType: '',
    hasCard: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Booking submitted:', formData);
    alert('Booking request submitted! We will contact you shortly.');
    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Book Your Ride</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <User className="h-4 w-4" />
              <span>Name *</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <Phone className="h-4 w-4" />
              <span>Phone Number *</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="04XX XXX XXX"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <MapPin className="h-4 w-4" />
            <span>Pickup Location *</span>
          </label>
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            placeholder="Enter pickup address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <MapPin className="h-4 w-4" />
            <span>Drop-off Location *</span>
          </label>
          <input
            type="text"
            name="dropoffLocation"
            value={formData.dropoffLocation}
            onChange={handleChange}
            placeholder="Enter destination address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <Calendar className="h-4 w-4" />
              <span>Date *</span>
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <Clock className="h-4 w-4" />
              <span>Time *</span>
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <Car className="h-4 w-4" />
            <span>Service Type *</span>
          </label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
          >
            <option value="">Select service type</option>
            <option value="standard">Standard Taxi</option>
            <option value="maxi">Maxi Cab</option>
            <option value="luxury">Luxury Vehicle</option>
            <option value="wheelchair">Wheelchair Accessible</option>
            <option value="baby-seat">Baby Seat Required</option>
          </select>
        </div>

        {/* Card Information Section */}
        <div className="border-t border-gray-200 pt-4">
          <div className="text-center mb-3">
            <img 
              src="/taxi_copy.jpg" 
              alt="Taxi Card" 
              className="mx-auto h-20 w-auto object-contain rounded-lg shadow-sm"
            />
          </div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Do you have this card?
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="hasCard"
                value="yes"
                checked={formData.hasCard === 'yes'}
                onChange={handleChange}
                className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="hasCard"
                value="no"
                checked={formData.hasCard === 'no'}
                onChange={handleChange}
                className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>
        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <FileText className="h-4 w-4" />
            <span>Additional Notes</span>
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any special requirements or additional information"
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Book Your Ride
        </button>
      </form>
    </div>
  );
};

export default BookingForm;