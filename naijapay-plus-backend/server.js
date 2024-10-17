const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Importing authentication routes

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('NaijaPay Plus API is running');
});

// Integrating authentication routes
app.use('/api', authRoutes);

// Endpoint for sending money
app.post('/api/send-money', (req, res) => {
  const { recipient, amount, bank } = req.body;
  // Here you would normally handle the transaction logic, e.g., update database
  res.status(200).json({ message: `Sent ${amount} to ${recipient} at ${bank}` });
});

// Endpoint for paying bills
app.post('/api/pay-bills', (req, res) => {
  const { biller, amount } = req.body;
  // Here you would normally handle the bill payment logic, e.g., update database
  res.status(200).json({ message: `Paid ${amount} to ${biller}` });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
