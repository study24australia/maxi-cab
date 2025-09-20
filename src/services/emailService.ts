import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_r8iabck'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_ecrgivd'; // Replace with your EmailJS template ID  template_d3z3lgt
const EMAILJS_PUBLIC_KEY = 'kSW1BdcJIAb9BrX58'; // Replace with your EmailJS public key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface BookingData {
  name: string;
  phone: string;
  pickupLocation: string;
  dropoffLocation: string;
  date: string;
  time: string;
  serviceType: string;
  hasCard?: string;
  notes?: string;
}

export const sendBookingEmail = async (bookingData: BookingData): Promise<boolean> => {
  // Prepare template parameters
    const templateParams = {
      to_email: 'aman42january@gmail.com', // Recipient email
      to_name: 'Melbourne Elite Taxi',
      from_name: bookingData.name,
      from_email: 'aman24january@gmail.com',
      reply_to: bookingData.phone, // Add reply-to for easy callback
      customer_name: bookingData.name,
      customer_phone: bookingData.phone,
      pickup_location: bookingData.pickupLocation,
      dropoff_location: bookingData.dropoffLocation,
      booking_date: bookingData.date,
      booking_time: bookingData.time,
      service_type: bookingData.serviceType,
      has_wheelchair_card: bookingData.hasCard || 'Not specified',
      additional_notes: bookingData.notes || 'None',
      booking_datetime: new Date().toLocaleString(),
      booking_reference: `MET-${Date.now()}`,
      company_phone: '0435223547',
      company_email: 'info@melbourneelitetaxi.com.au'
    };
  try {
    

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', templateParams);
  
    return true;
  } catch (error) {
    console.error('Failed to send email:', templateParams);
    return false;
  }
};
