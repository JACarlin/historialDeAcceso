import mongoose from 'mongoose';
import app from './app';

async function connectMongoose() {
    await mongoose.connect('mongodb://localhost:27017/ControlHistorial');
  }

connectMongoose();

const port = 3001;

app.listen(port, () => {
    console.log(`app listen on port ${port}`);
});