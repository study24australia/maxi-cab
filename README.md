# Melbourne Elite Taxi - Multi-page Booking Application

A professional taxi booking website built with React, TypeScript, and Tailwind CSS.

## Features

- **Multi-page Application**: Home, About, Services, Contact pages
- **Service Pages**: Individual pages for each service type
- **Booking System**: Interactive booking form with email notifications
- **Responsive Design**: Mobile-first design that works on all devices
- **Professional UI**: Clean, modern interface with smooth animations

## Email Service Setup

This application uses EmailJS to send booking notifications. To set up email functionality:

### 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Create a free account
3. Create a new service (Gmail, Outlook, etc.)

### 2. Create Email Templates
Create two templates in your EmailJS dashboard:

#### Booking Notification Template (for business)
```
Subject: 🚖 New Booking Request - {{customer_name}} [{{booking_reference}}]
To: {{to_email}}
From: {{from_name}}
Reply-To: {{reply_to}}

═══════════════════════════════════════════════════════════════
🚖 MELBOURNE ELITE TAXI - NEW BOOKING REQUEST
═══════════════════════════════════════════════════════════════

👤 CUSTOMER DETAILS:
═══════════════════════════════════════════════════════════════
- Name: {{customer_name}}
- Phone: {{customer_phone}}
- Booking Reference: {{booking_reference}}

🚗 TRIP DETAILS:
═══════════════════════════════════════════════════════════════
- Pickup: {{pickup_location}}
- Drop-off: {{dropoff_location}}
- Date: {{booking_date}}
- Time: {{booking_time}}
- Service Type: {{service_type}}

ℹ️ ADDITIONAL INFORMATION:
═══════════════════════════════════════════════════════════════
- Wheelchair Card: {{has_wheelchair_card}}
- Notes: {{additional_notes}}

📅 BOOKING DETAILS:
═══════════════════════════════════════════════════════════════
- Submitted: {{booking_datetime}}
- Reference: {{booking_reference}}
- Company Phone: {{company_phone}}
- Company Email: {{company_email}}

🔔 ACTION REQUIRED:
═══════════════════════════════════════════════════════════════
Please contact {{customer_name}} at {{customer_phone}} to confirm this booking.

Best regards,
Melbourne Elite Taxi Booking System
```

#### Customer Confirmation Template
```
Subject: Booking Confirmation - Melbourne Elite Taxi

Dear {{customer_name}},

Thank you for choosing Melbourne Elite Taxi!

Your booking details:
- Pickup: {{pickup_location}}
- Drop-off: {{dropoff_location}}
- Date: {{booking_date}}
- Time: {{booking_time}}
- Service: {{service_type}}
- Reference: {{booking_reference}}

We will contact you shortly to confirm your booking.

For any questions, please call us at {{company_phone}}.

Best regards,
Melbourne Elite Taxi Team
```

### 3. Update Configuration
Update the EmailJS configuration in `src/services/emailService.ts`:

```typescript
const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
```

### 4. Get Your Keys
1. **Service ID**: From your EmailJS service settings
2. **Template ID**: From your template settings
3. **Public Key**: From your EmailJS account settings

## Services Offered

- Event Transfer
- Baby Seat Transfer
- Wheelchair Taxi
- VIP Transfer
- Melbourne Sightseeing
- Group Transfer
- NDIS Run
- School Run
- Parcel Delivery
- Furniture Moving

## Technologies Used

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Lucide React** for icons
- **EmailJS** for email notifications
- **Vite** for build tooling

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Contact Information

- **Phone**: 0435223547
- **Email**: info@melbourneelitetaxi.com.au
- **Service Area**: Melbourne, VIC Australia
- **Hours**: 24/7 Service Available

## License

© 2025 Melbourne Elite Taxi. All rights reserved.