const Event = require('../models/eventModel');
const Booking = require('../models/bookingModel');

exports.createBooking = async (req, res) => {
  const { eventId, bookingDetails } = req.body;

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    if (event.slots < bookingDetails.people) {
      return res.status(400).json({ message: 'Not enough slots available' });
    }

    // Reduce the slots in the event
    event.slots -= bookingDetails.people;
    await event.save();

    // Create a new booking
    const booking = new Booking({
      eventId,
      ...bookingDetails,
    });
    await booking.save();

    res.status(201).json({
      message: 'Booking successful',
      booking,
      updatedEvent: event,
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Server error during booking' });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    // Fetch all bookings and populate event details (name, date, slots, price)
    const bookings = await Booking.find().populate('eventId', 'name date slots price');
    res.status(200).json({ bookings });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Server error while fetching bookings' });
  }
};

exports.deleteBooking = async (req, res) => {
  const { bookingId } = req.params;

  try {
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    const event = await Event.findById(booking.eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    event.slots += booking.people;
    await event.save();

    await Booking.deleteOne({ _id: bookingId });

    res.status(200).json({
      message: 'Booking deleted successfully',
      updatedEvent: event,
    });
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({ error: 'Server error during booking deletion' });
  }
};
