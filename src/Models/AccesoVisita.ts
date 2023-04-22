import { Schema, model} from 'mongoose';

const visitaSchema = new Schema({
    idColono:Number,
    nombreColono: String,
    nombreVisita: String,
    ingresa: Boolean,
    fechaYHoraAcceso: String,
    direccionColono: String
});

const Visita = model('visita', visitaSchema);

export default Visita;