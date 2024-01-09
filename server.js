const express = require('express');
const app = express();
const port = 3001;

const jobs = require('./db.json').jobs;

app.use(express.json());

app.get('/jobs', (req, res) => {
  res.json(jobs);
});

app.get('/jobs/:id', (req, res) => {
  const jobId = parseInt(req.params.id);
  const job = jobs.find(job => job.id === jobId);

  if (job) {
    res.json(job);
  } else {
    res.status(404).json({ error: 'Job not found' });
  }
});

app.post('/job-applications', (req, res) => {
  res.json({ message: 'Job application submitted successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
