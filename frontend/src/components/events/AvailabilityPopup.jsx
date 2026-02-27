import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import CardPaymentPopup from './CardPaymentPopup';
import PayPalPaymentPopup from './PayPalPaymentPopup';
import EChequePopup from './EChequePopup';
import SuccessPopup from './SuccessPopup';

const AvailabilityPopup = ({ event, onClose, onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showCardPayment, setShowCardPayment] = useState(false);
  const [showPayPalPayment, setShowPayPalPayment] = useState(false);
  const [showEChequePayment, setShowEChequePayment] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!event) return;

    setIsSubmitting(true);
    setErrorMessage(''); // Clear any previous error messages

    const bookingDetails = {
      name,
      phone,
      email,
      people: parseInt(people),
      paymentMethod,
      currency,
    };

    try {
      const response = await axios.post(`${API_URL}/bookings`, {
        eventId: event._id,
        bookingDetails,
      });

      if (response.status === 201) {
        console.log('Booking successful:', response.data);
        setShowSuccessPopup(true);
        onConfirm(response.data.booking);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorText = error.response.data.message || 'Failed to submit booking.';
        setErrorMessage(errorText);
      } else {
        console.error('Error submitting booking:', error);
        setErrorMessage('Failed to submit booking. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePaymentMethodClick = (method) => {
    setPaymentMethod(method);
    setShowCardPayment(method === 'Visa');
    setShowPayPalPayment(method === 'PayPal');
    setShowEChequePayment(method === 'E-cheque');
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 p-4"
        onClick={onClose}
      >
        <div
          className="bg-white p-6 sm:p-8 rounded-lg w-full max-w-3xl h-full sm:h-auto max-h-[80vh] relative z-10 overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl sm:text-2xl font-bold font-serif mb-6 text-center">
            {event?.isPaid ? 'Payment Details' : 'Booking Details'}
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <h1 className="text-orange-400 font-bold mb-4 text-lg">Personal Info</h1>
            <input
              type="text"
              placeholder="Enter Your Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 mb-3 bg-gray-100 rounded text-sm sm:text-base"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 mb-3 bg-gray-100 rounded text-sm sm:text-base"
              required
            />
            <input
              type="email"
              placeholder="Email Address*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-3 bg-gray-100 rounded text-sm sm:text-base"
              required
            />
            <input
              type="number"
              placeholder="Number of People"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="w-full p-3 mb-3 bg-gray-100 rounded text-sm sm:text-base"
              min={1}
              required
            />

            {errorMessage && (
              <p className="text-red-500 text-sm mb-3">{errorMessage}</p>
            )}

            {event?.isPaid && (
              <div className="mt-4">
                <h2 className="text-orange-400 font-bold text-lg sm:text-2xl mb-2">Payment Method</h2>
                <p className="mb-4 font-bold">Choose Your Payment Method</p>
                <div className="space-y-4 mb-6">
                  {['Visa', 'PayPal', 'E-cheque'].map((method) => (
                    <div
                      key={method}
                      className={`border p-4 rounded-md flex items-center justify-center cursor-pointer ${
                        paymentMethod === method ? 'border-orange-500' : 'border-gray-300 hover:border-orange-500'
                      }`}
                      onClick={() => handlePaymentMethodClick(method)}
                    >
                      {method === 'Visa' && <img src="/Images/Visalogo.png" alt="Visa" className="h-6 mr-2" />}
                      {method === 'PayPal' && <img src="/Images/Paypallogo.png" alt="PayPal" className="h-6 mr-2" />}
                      {method === 'E-cheque' && <span className="font-bold text-gray-700">E-cheque</span>}
                    </div>
                  ))}
                </div>
                <div className="flex items-center border border-orange-400 rounded">
                  <div className="bg-orange-400 text-white p-2 rounded-l-md flex items-center">
                    <span className="font-bold">Payment Total</span>
                  </div>
                  <div className="bg-white text-gray-700 flex-grow flex justify-between items-center">
                    <span className="font-bold text-lg">${event?.price?.toFixed(2) || '0.00'}</span>
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="p-2 bg-orange-400 text-white rounded border-none"
                    >
                      <option value="USD">$</option>
                      <option value="EUR">€</option>
                      <option value="GBP">£</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-orange-400 text-white p-3 rounded font-semibold mt-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : event?.isPaid ? 'Confirm and Pay' : 'Submit'}
            </button>
          </form>
        </div>
      </div>

      {showCardPayment && <CardPaymentPopup onClose={() => setShowCardPayment(false)} onSubmit={() => setShowSuccessPopup(true)} />}
      {showPayPalPayment && <PayPalPaymentPopup onClose={() => setShowPayPalPayment(false)} onSubmit={() => setShowSuccessPopup(true)} />}
      {showEChequePayment && <EChequePopup onClose={() => setShowEChequePayment(false)} onSubmit={() => setShowSuccessPopup(true)} />}
      {showSuccessPopup && <SuccessPopup onClose={() => { setShowSuccessPopup(false); onClose(); }} />}
    </>
  );
};

export default AvailabilityPopup;