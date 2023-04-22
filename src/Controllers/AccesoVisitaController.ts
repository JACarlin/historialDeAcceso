import { Request, Response } from 'express';
import AccesoVisita from '../Models/AccesoVisita';
import Controller from './Controller';

interface registrarAccesoVisita {
    idColono: Number,
    nombreColono: String,
    nombreVisita: string,
    ingreso: Boolean,
    fechayHoraAcceso: String,
    direccionColono: String
}

export default class AccesoVisitaController extends Controller {
    public constructor() {
        super('/AccesoVisita');
    }

    protected initializeRouter(): void {
        this.router.post('/registrar', this.registrar);
    }

    private async registrar(req: Request, res: Response) {
        try 
        {
            const { 
                idColono, 
                nombreColono,
                nombreVisita,
                ingreso, 
                fechayHoraAcceso, 
                direccionColono
            } = <registrarAccesoVisita>req.body;

            if (!idColono || !nombreColono || !nombreVisita || !ingreso || !fechayHoraAcceso || !direccionColono) {
                res.status(400).end('Falta algún atributo');
                return;
            }

            const accesoColono = new AccesoVisita( {idColono, nombreColono, nombreVisita, ingreso, fechayHoraAcceso, direccionColono} );

            accesoColono.save();
        } catch(e) {
            console.error(e);
        }
    }
}