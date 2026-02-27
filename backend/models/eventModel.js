// const mongoose = require('mongoose');

// const eventSchema = new mongoose.Schema({
//   eventTitle: {
//     type: String,
//     required: true
//   },
//   eventDescription: {
//     type: String,
//     required: true
//   },
//   eventImageUrl: {
//     type: String,
//     required: true
//   },
//   isPaid: {
//     type: Boolean,
//     default: false,
//     required: true
//   },
//   amount: {
//     type: Number,
//     required: function() { return this.isPaid; }
//   },
//   slots: {
//     type: Number,
//     required: true
//   },
//   eventLocation: {
//     type: String,
//     required: true
//   },
//   eventDate: {
//     type: String,
//     required: true
//   },
//   eventTime: {
//     type: String,
//     required: true
//   }
// });

// module.exports = mongoose.model('Event', eventSchema);


const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventTitle: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
    required: true,
  },
  eventImageUrl: {
    type: String,
    required: true,
  },
  eventPDFUrl: {
    type: String,
  },
  isPaid: {
    type: Boolean,
    default: false,
    required: true,
  },
  amount: {
    type: Number,
    required: function () {
      return this.isPaid;
    },
  },
  slots: {
    type: Number,
    required: true,
  },
  eventLocation: {
    type: String,
    required: true,
  },
  eventDate: {
    type: String,
    required: true,
  },
  eventTimeFrom: {
    type: String,
    required: true,
  },
  eventTimeTo: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  eventType: {
    type: String,
    required: true,
    enum: ['Fixed Event', 'Upcoming Event'], // Add options as defined in the form
  },
});

module.exports = mongoose.model('Event', eventSchema);