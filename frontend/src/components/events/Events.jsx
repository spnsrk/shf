import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import EventCard from './EventCard';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Herosection from '../herosection/Herosection';
import PopupEvent from './PopupEvent';
import AvailabilityPopup from './AvailabilityPopup';
import SuccessPopup from './SuccessPopup';
import SlotsFullPopup from './SlotsFullPopup';
import { API_URL } from "../../config";

const Events = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showPopupEvent, setShowPopupEvent] = useState(false);
  const [showAvailability, setShowAvailability] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSlotsFullPopup, setShowSlotsFullPopup] = useState(false); // New state
  const apiBaseUrl = API_URL;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/events`);
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [apiBaseUrl]);

  const handleEventClick = (event) => {
    navigate(`/event/${event._id}`);
  };

  const handleBookNow = (e, event) => {
    e.stopPropagation();
    setSelectedEvent(event);
    setShowPopupEvent(true);
  };

  const handleCheckAvailability = () => {
    if (selectedEvent.slots > 0) {
      setShowPopupEvent(false);
      setShowAvailability(true);
    } else {
      setShowPopupEvent(false);
      setShowSlotsFullPopup(true); // Show slots full popup
    }
  };

  const handleConfirmBooking = (bookingDetails) => {
    console.log('Booking confirmed:', bookingDetails);
    setShowAvailability(false);
    setShowSuccess(true);
  };

  return (
    <div className="relative">
      <Header />
      <Herosection
        imageUrl="/Images/Herosection/events.png"
        heading="Events"
        description="Home / Events"
      />
      <div className="container-body mt-12 md:mt-20 px-4 sm:px-8 lg:px-32 mb-20 md:mb-48">
        <div className="textpart my-8 md:my-16 xl:mx-44 mb-8 md:mb-12">
          <div className="inline-flex gap-2 justify-center items-center">
            <p className="text-gray-700 text-sm font-semibold text-nowrap font-montserrat mb-4 text-base md:text-lg">Enroll yourself into</p>
            <hr className="w-[60px] border-t-1 border-gray-400 mx-auto text-nowrap" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair">Our Major Events</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard
              key={index}
              image={event.eventImageUrl}
              title={event.eventTitle}
              description={event.eventDescription}
              date={event.eventDate}
              time={event.eventTime}
              location={event.eventLocation}
              onClick={() => handleEventClick(event)}
              handleBookNow={(e) => handleBookNow(e, event)}
            />
          ))}
        </div>
      </div>

      {/* PopupEvent for detailed event info */}
      {showPopupEvent && selectedEvent && (
        <PopupEvent
          event={selectedEvent}
          onClose={() => setShowPopupEvent(false)}
          onCheckAvailability={handleCheckAvailability}
        />
      )}

      {/* AvailabilityPopup for booking */}
      {showAvailability && selectedEvent && (
        <AvailabilityPopup
          event={selectedEvent}
          onClose={() => setShowAvailability(false)}
          onConfirm={handleConfirmBooking}
        />
      )}

      {/* SuccessPopup for confirmation */}
      {showSuccess && (
        <SuccessPopup
          onClose={() => {
            setShowSuccess(false);
            setSelectedEvent(null);
          }}
        />
      )}

      {/* Slots Full Popup */}
      {showSlotsFullPopup && (
        <SlotsFullPopup onClose={() => setShowSlotsFullPopup(false)} />
      )}

      {/* <UpcomingEvents /> */}
      <Footer />
    </div>
  );
};

export default Events;