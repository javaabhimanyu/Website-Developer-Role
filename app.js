
const express = require('express');
const app = express();
const port = 3000;

// Sample in-memory data
const upcomingEvents = [
  {
    title: 'Abhi',
    date: '2023-12-26',
    location: 'Bihar',
    description: 'All details is here only',
  },
  {
    title: 'Radha',
    date: '2023-12-27',
    location: 'Patna',
    description: 'All details is here only',
  },
  // Add more events as needed
];

// API endpoint to fetch upcoming events
app.get('/api/events', (req, res) => {
  res.json(upcomingEvents);
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
