// Mock database for demonstration purposes
let choices = [];

exports.submitChoice = (req, res) => {
  const { choice } = req.body;
  
  // Validate input
  if (!choice) {
    return res.status(400).json({ message: 'Choice is required' });
  }

  // Save the choice (in a real app, save to a database)
  choices.push(choice);

  res.status(201).json({ message: 'Choice submitted successfully!' });
};

// Optional: Add a route to get all choices if needed
exports.getChoices = (req, res) => {
  res.status(200).json(choices);
};
