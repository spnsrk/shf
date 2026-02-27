const express = require('express');
const { createBooking, getAllBookings, deleteBooking } = require('../controllers/bookingController');

const router = express.Router();

// POST /api/bookings - Create a new booking
router.post('/', createBooking);

// GET /api/bookings - Get all bookings
router.get('/', getAllBookings);

// DELETE /api/bookings/:eventId - Delete an event and its bookings
router.delete('/:bookingId', deleteBooking);

module.exports = router;