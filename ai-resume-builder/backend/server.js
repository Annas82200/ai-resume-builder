const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Simple test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Basic resume enhancement endpoint
app.post('/api/enhance-resume', async (req, res) => {
  try {
    const { resumeData } = req.body;
    
    // For now, just return enhanced data without AI
    const enhanced = {
      ...resumeData,
      summary: `Dynamic professional with expertise in delivering results. ${resumeData.summary}`,
      skills: `${resumeData.skills} • Leadership • Problem Solving • Communication`
    };
    
    res.json({ enhanced });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});