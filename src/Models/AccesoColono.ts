import { Schema , model } from "mongoose";

const accesoColonoSchema = new Schema({
    idColono : Number,
    nombreColono : String,
    Ingreso: Boolean,
    fechayHoraAcceso: String,
    direccion : String
});

const AccesoColono = model('accesoColono', accesoColonoSchema);

export default AccesoColono;