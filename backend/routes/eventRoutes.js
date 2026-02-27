const express = require('express');
const router = express.Router();
const upload = require('../middleware/multerS3Config');
const { getEvents, getEventById, createEvent, updateEvent, deleteEvent, deleteAll } = require('../controllers/eventController');
const auth = require('../middleware/auth');

router.get('/', getEvents);
router.get('/:id', getEventById);
router.post('/', auth, upload.fields([{ name: 'eventImage', maxCount: 1 }, { name: 'eventPDF', maxCount: 1 }]), createEvent);
router.put('/:id', auth, upload.fields([{ name: 'eventImage', maxCount: 1 }, { name: 'eventPDF', maxCount: 1 }]), updateEvent);
router.delete('/events', auth, deleteAll);
router.delete('/:id', auth, deleteEvent);

module.exports = router;