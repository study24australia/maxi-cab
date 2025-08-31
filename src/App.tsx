import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import BookingModal from './components/BookingModal';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import EventTransfer from './pages/services/EventTransfer';
import BabySeatTransfer from './pages/services/BabySeatTransfer';
import WheelchairTaxi from './pages/services/WheelchairTaxi';
import VIPTransfer from './pages/services/VIPTransfer';
import MelbourneSightseeing from './pages/services/MelbourneSightseeing';
import GroupTransfer from './pages/services/GroupTransfer';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header onBookNow={openBookingModal} />
        <main>
          <Routes>
            <Route path="/" element={<Home onBookNow={openBookingModal} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/event-transfer" element={<EventTransfer />} />
            <Route path="/services/baby-seat-transfer" element={<BabySeatTransfer />} />
            <Route path="/services/wheelchair-taxi" element={<WheelchairTaxi />} />
            <Route path="/services/vip-transfer" element={<VIPTransfer />} />
            <Route path="/services/melbourne-sightseeing" element={<MelbourneSightseeing />} />
            <Route path="/services/group-transfer" element={<GroupTransfer />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer onBookNow={openBookingModal} />
        <FloatingButtons />
        <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
      </div>
    </Router>
  );
}

export default App;