import { Schema, model} from 'mongoose';

const accesoVisitaSchema = new Schema({
    idColono: Number,
    nombreColono: String,
    nombreVisita: String,
    ingreso: Boolean,
    fechaYHoraAcceso: String,
    direccionColono: String
});

const AccesoVisita = model('accesovisita', accesoVisitaSchema);

export default AccesoVisita;