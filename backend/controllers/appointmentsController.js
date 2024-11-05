// controllers/appointmentController.js
const db = require('../config/db'); // Ensure this is the correct path to your Knex instance

// Function to handle creating an appointment
const createAppointment = async (req, res) => {
  const { expert_id, user_id, session_date, session_type, time } = req.body;

  try {
    // Input validation
    if (!expert_id || !user_id || !session_date || !session_type || !time) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (!['Online', 'Onsite'].includes(session_type)) {
      return res.status(400).json({ error: 'Invalid session type' });
    }

    if (!['12:00', '14:00', '09:00'].includes(time)) {
      return res.status(400).json({ error: 'Invalid time slot selected' });
    }

    // Check if the time slot is already booked for the expert on the same date
    const existingAppointment = await db('Appointments')
      .where({ expert_id, session_date, time })
      .first();

    if (existingAppointment) {
      return res.status(400).json({
        error: 'This time slot is already booked. Please choose another time.',
      });
    }

    // Insert new appointment into the database
    const [newAppointment] = await db('Appointments')
      .insert({
        expert_id,
        user_id,
        session_date,
        session_type,
        time,
      })
      .returning('*');

    // Respond with the newly created appointment
    res.status(201).json(newAppointment);
  } catch (error) {
    if (error.code === '23503') {
      return res.status(400).json({
        error: 'Foreign key constraint failed. Make sure the expert_id and user_id exist in their respective tables.',
      });
    }

    console.error('Error creating appointment:', error);
    res.status(500).json({ error: 'An error occurred while creating the appointment' });
  }
};

  
// Function to handle fetching an appointment by ID
const getAppointmentById = async (req, res) => {
  const { id } = req.params;

  try {
    const appointment = await db('Appointments').where({ id }).first();
    
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    res.status(200).json(appointment);
  } catch (error) {
    console.error('Error fetching appointment:', error);
    res.status(500).json({ error: 'An error occurred while fetching the appointment' });
  }
};


// Function to handle fetching appointments by user ID
const getAppointmentsByUserId = async (req, res) => {
  const { user_id } = req.params; // Extract the user ID from the request parameters

  try {
    // Fetch appointments associated with the given user ID
    const appointments = await db('Appointments').where({ user_id });
console.log("user_id"+user_id)
    // Check if appointments were found
    if (appointments.length === 0) {
      return res.status(404).json({ error: 'No appointments found for this user' });
    }

    // Respond with the appointments found
    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ error: 'An error occurred while fetching appointments' });
  }
};





module.exports = {
  createAppointment,
  getAppointmentById,getAppointmentsByUserId
};

