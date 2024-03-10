import express, { json } from 'express';
import { connect, model as _model } from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

connect('mongodb://localhost:27017/carDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Car = _model('Car', {
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
  console.log(`The server is running on the port ${PORT}`);
});
