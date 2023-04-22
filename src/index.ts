import mongoose from 'mongoose';
import app from './app';

async function connectMongoose() {
    await mongoose.connect('mongodb://127.0.0.1:27017/controlhistorial');
  }

(async function () {
    try {
    await connectMongoose();
    console.log('Connected')
    } catch (e) {
        console.error(e);
    }
})();

const port = 3001;

app.listen(port, () => {
    console.log(`app listen on port ${port}`);
});