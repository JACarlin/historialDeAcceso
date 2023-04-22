import { Schema , model } from "mongoose";

const accesoColonoSchema = new Schema({
    idColono: Number,
    nombreColono: String,
    ingreso: Boolean,
    fechayHoraAcceso: String,
    direccion: String
});

const AccesoColono = model('accesocolono', accesoColonoSchema);

export default AccesoColono;