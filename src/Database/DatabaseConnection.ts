import mongoose from 'mongoose';

export async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/ControlHistorial', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Database connected');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}