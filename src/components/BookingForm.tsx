import React, { useState } from "react";

interface BookingFormProps {
  onSuccess?: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSuccess }) => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          ✅ Booking Submitted
        </h3>
        <p className="text-gray-700">
          We will get in touch with you shortly.
        </p>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Don't prevent default - let Netlify handle the form submission
    // Just update the UI state
    setTimeout(() => {
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 100);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Book Your Ride
      </h3>

      <div className="space-y-4">
        {/* Hidden Netlify fields */}
        <input type="hidden" name="form-name" value="booking" />

        {/* Honeypot field for spam bots */}
        <div style={{ display: 'none' }}>
          <label>
            Don't fill this out if you're human:{" "}
            <input name="bot-field" />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Name *</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Phone Number *</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="04XX XXX XXX"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Pickup Location *</span>
          </label>
          <input
            type="text"
            name="pickupLocation"
            placeholder="Enter pickup address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Drop-off Location *</span>
          </label>
          <input
            type="text"
            name="dropoffLocation"
            placeholder="Enter destination address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 012 0v4m0 0V7a1 1 0 112 0v4m-6 0a4.99 4.99 0 004 2 4.99 4.99 0 004-2m-8 0V9a1 1 0 011-1h6a1 1 0 011 1v2" />
              </svg>
              <span>Date *</span>
            </label>
            <input
              type="date"
              name="date"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Time *</span>
            </label>
            <input
              type="time"
              name="time"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
            </svg>
            <span>Service Type *</span>
          </label>
          <select
            name="serviceType"
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

        <div className="border-t border-gray-200 pt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Do you have a wheel chair taxi card?
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="hasCard"
                value="yes"
                className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="hasCard"
                value="no"
                className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Additional Notes</span>
          </label>
          <textarea
            name="notes"
            placeholder="Any special requirements or additional information"
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
          />
        </div>

        <button
          onClick={() => setSubmitted(true)}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Book Your Ride
        </button>
      </div>
    </div>
  );
};

export default BookingForm;