import { Schema, model} from 'mongoose';

const accesoVisitaSchema = new Schema({
    idVisita: Number,
    fechaYHoraAcceso: String
});

const AccesoVisita = model('accesovisita', accesoVisitaSchema);

export default AccesoVisita;