// app.js (or server.js)
const express = require('express');
const app = express();
const appointmentsController = require('../controllers/appointmentsController'); // Adjust the path as needed
const router = express.Router();

app.use(express.json());
router.post('/book', appointmentsController.createAppointment);
router.get('/getbook/:id', appointmentsController.getAppointmentById);
router.get('/gett/:user_id',appointmentsController.getAppointmentsByUserId);
// Your other routes and middleware

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
module.exports = router;
