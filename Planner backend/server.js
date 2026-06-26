const express = require('express');
const cors = require('cors');

// Import your custom route files
const tasksRouter = require('./routes/Tasks');
const financetrackerRouter = require('./routes/FinanceTracker');
const gratitudeRouter = require('./routes/Gratitude');

const app = express();
const PORT = 5000;

// Middleware Configuration
app.use(cors()); 
app.use(express.json()); // Parses incoming stringified JSON request data into JavaScript objects

// Register your modular endpoints
app.use('/api/Tasks', tasksRouter);
app.use('/api/FinanceTracker', financetrackerRouter);
app.use('/api/Gratitude', gratitudeRouter);

app.listen(PORT, () => {
  console.log(`Planner active on http://localhost:${PORT}`);
});