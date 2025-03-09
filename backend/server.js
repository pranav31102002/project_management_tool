const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config(); // Load environment variables from .env file

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)

.then(() => {
  console.log('MongoDB connected'); // Message displayed on successful connection
})
.catch(err => console.error('MongoDB connection error:', err));

const User = require('./models/User'); // Import User model
const Project = require('./models/Project'); // Import Project model

// Define routes
app.post('/api/register', async (req, res) => {
    const { email, password } = req.body;
    const user = new User({ email, password: password }); // Ensure password is stored correctly

    try {
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error registering user', error });
    }
});

app.post('/api/projects', async (req, res) => {
    const { name, description } = req.body;
    const project = new Project({ name: name, description: description }); // Ensure fields are stored correctly

    try {
        await project.save();
        res.status(201).json({ message: 'Project added', project });
    } catch (error) {
        res.status(400).json({ message: 'Error adding project', error });
    }
});


app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    // Logic to authenticate the user would go here
    res.status(200).json({ message: 'Login successful' });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
