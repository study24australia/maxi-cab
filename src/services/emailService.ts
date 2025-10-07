import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_r8iabck';
const EMAILJS_TEMPLATE_ID = 'template_p3irzrk'//'template_lda9ada' //'template_bc6khvq'; // Use your working template ID
const EMAILJS_PUBLIC_KEY = 'kSW1BdcJIAb9BrX58';

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
  passengerCount: string;
  hasCard?: string;
  notes?: string;
}

export const sendBookingEmail = async (bookingData: BookingData): Promise<boolean> => {
  // Prepare template parameters
  const templateParams = {
    to_email: 'aman42january@gmail.com', // Recipient email
    to_name: 'Melbourne Elite Taxi with Wheelchair Ride',
    from_name: bookingData.name,
    from_email: 'noreply@melbourneelitetaxi.com.au',
    reply_to: bookingData.phone,
    customer_name: bookingData.name,
    customer_phone: bookingData.phone,
    pickup_location: bookingData.pickupLocation,
    dropoff_location: bookingData.dropoffLocation,
    booking_date: bookingData.date,
    booking_time: bookingData.time,
    service_type: bookingData.serviceType,
    passenger_count: bookingData.passengerCount,
    number_of_passengers: bookingData.passengerCount,
    has_wheelchair_card: bookingData.hasCard || 'Not specified',
    additional_notes: bookingData.notes || 'None',
    booking_datetime: new Date().toLocaleString(),
    booking_reference: `MET-${Date.now()}`,
    company_phone: '0435223547',
    company_email: 'aman24january@gmail.com'
  };

  try {
    console.log('Attempting to send email with params:', templateParams);
    console.log('Using EmailJS config:', {
      serviceId: EMAILJS_SERVICE_ID,
      templateId: EMAILJS_TEMPLATE_ID,
      publicKey: EMAILJS_PUBLIC_KEY
    });

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
  
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    console.error('Template params were:', templateParams);
    
    // Log specific error details
    if (error && typeof error === 'object' && 'status' in error) {
      console.error('EmailJS Error Status:', error.status);
      console.error('EmailJS Error Text:', error.text);
    }
    
    return false;
  }
};
