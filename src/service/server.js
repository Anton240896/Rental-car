const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/carDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Car = mongoose.model('Car', {
  make: String,
  model: String,
  photoLink: String,
  description: String,
  rentalPrice: Number,
  address: String,
});

app.get('/cars', async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    console.error('Error', error);
    res.status(500).send('Error');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порте ${PORT}`);
});
