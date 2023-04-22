import mongoose from "mongoose";
import AccesoColonoController from "./Controllers/AccesoColonoController";
import AppBuilder from "./AppBuilder";
import AccesoVisitaController from "./Controllers/AccesoVisitaController";

async function connectMongoose() {
    await mongoose.connect('mongodb://localhost:27017/ControlHistorial');
  }

connectMongoose();

const appBuilder = new AppBuilder();

const accesoColonoController = new AccesoColonoController();
const accesoVisitaController = new AccesoVisitaController();

appBuilder.registrarController(accesoColonoController);
appBuilder.registrarController(accesoVisitaController);

const app = appBuilder.getApp();

export default app;