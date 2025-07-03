const express = require('express');
const app = express();
const port = 3000;

const authRoutes = require('../routes/auth');
// const pool = require('../src/db'); // adjust if needed

app.use(express.json());
app.use('/api', authRoutes);

app.listen(port, () => {
  console.log(`PickUpPal listening on port ${port}`);
});
