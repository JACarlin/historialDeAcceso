import mongoose from "mongoose";

async function connectMongoose() {
    await mongoose.connect('mongodb://localhost:27017/ControlHistorial');
  }

connectMongoose();


