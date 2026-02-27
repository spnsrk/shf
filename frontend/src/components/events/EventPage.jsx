import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../config';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Herosection from '../herosection/Herosection';

const EventPage = () => {
  const { eventId } = useParams(); // Extract the dynamic event ID from the URL
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`${API_URL}/events/${eventId}`);
        setEvent(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching event details:', err);
        setError('Failed to fetch event details. Please try again later.');
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleCheckAvailability = () => {
    window.location.href = `/event/${eventId}/booking`; // Navigate to the booking page for this event
  };

  const handleBookCoverClick = () => {
    window.location.href = `/pdf-flip-book/${eventId}`; // Navigate to the PDF flip book page
  };

  const handleEmailClick = () => {
    window.open('mailto:info@scottishhindufoundation.com', '_blank'); // Open email client
  };

  if (loading) {
    return (
      <div className="relative">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <p>Loading event details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-red-600">{error}</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative">
      <Header />
      <Herosection
        imageUrl={event.heroImageUrl || '/Images/Herosection/events.png'} // Default hero image
        heading="Event"
        description={`Home / Events / ${event.eventTitle}`}
      />

      <div className="container-body px-4 py-3 mt-10 sm:px-8 md:px-16 lg:px-32 md:py-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 font-playfair">{event.eventTitle}</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="md:w-2/3">
            <img
              src={event.eventImageUrl}
              alt={event.eventTitle}
              className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[700px] rounded-lg shadow-lg mb-8 object-cover"
            />
            <h2 className="text-2xl font-bold mb-4 font-nunito">Event Description</h2>
            <p className="mb-6 text-gray-600">{event.eventDescription}</p>
            <div className="mb-6 space-y-1">
              <p>
                <span className="font-bold w-20 inline-block">Date</span>
                <span>: {event.eventDate}</span>
              </p>
              <p>
                <span className="font-bold w-20 inline-block">Time</span>
                <span>: {event.eventTimeFrom} - {event.eventTimeTo}</span>
              </p>
              <p>
                <span className="font-bold w-20 inline-block">Location</span>
                <span>: {event.eventLocation}</span>
              </p>
              {/* <p>
                <span className="font-bold w-20 inline-block">Price</span>
                <span>: {event.eventPrice || 'Free'}</span>
              </p> */}
            </div>
            {/* <button
              onClick={handleCheckAvailability}
              className="bg-orange-400 text-white px-6 py-2 rounded-md hover:bg-orange-500 transition duration-300"
            >
              Check Availability
            </button> */}

            {/* <div className="mt-10">
              <h3 className="text-xl font-bold mb-4 font-nunito">Have A Glimpse</h3>
              <div className="bg-gray-800 p-6 rounded-lg">
                <img
                  src={event.bookCoverImageUrl || '/Images/events/bookcover.png'} // Default book cover image
                  alt={`${event.eventTitle} Book Cover`}
                  className="w-1/3 mx-auto cursor-pointer"
                  onClick={handleBookCoverClick}
                />
              </div>
            </div> */}
            {event.eventPDFUrl && (
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4 font-nunito">Have A Glimpse</h3>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <img
                    src={event.bookCoverImageUrl || '/Images/events/bookcover.png'} // Default book cover image
                    alt={`${event.eventTitle} Book Cover`}
                    className="w-2/3 sm:w-1/2 md:w-1/3 mx-auto cursor-pointer"
                    onClick={handleBookCoverClick}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="md:w-1/3">
            <div className="relative bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <img
                src="/Images/events/mail.png"
                alt="Contact Us"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  className="bg-white rounded-full p-2 cursor-pointer"
                  onClick={handleEmailClick}
                >
                  <img
                    src="/Images/events/email.png"
                    alt="Email"
                    className="w-6 h-6"
                  />
                </div>
                <p className="text-center mt-2 text-sm text-white font-semibold">
                  Contact us for the latest news and upcoming events
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventPage;