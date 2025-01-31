const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Configuration
const PORT = process.env.PORT || 3000;
const RESPONSE_DATA = {
  email: "snweke98@gmail.com",
  github_url: "https://github.com/Sammie05/hng-stage0-nodejs.git",
};

// API Endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    ...RESPONSE_DATA,
    current_datetime: new Date().toISOString(),
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});