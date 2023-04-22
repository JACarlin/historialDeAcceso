import { Request, Response } from 'express';
import AccesoVisita from '../Models/AccesoVisita';
import Controller from './Controller';

interface registrarAccesoVisita {
    idColono: Number;
    nombreColono: String;
    nombreVisita: String;
    ingreso: Boolean;
    fechayHoraAcceso: String;
    direccionColono: String;
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

            console.log(typeof ingreso)

            console.log(idColono, 
                nombreColono,
                nombreVisita,
                ingreso, 
                fechayHoraAcceso, 
                direccionColono)

            if (!idColono || !nombreColono || !nombreVisita || typeof ingreso != 'boolean' || !fechayHoraAcceso || !direccionColono) {
                res.status(400).end('Falta algún atributo');
                return;
            }

            const accesoVisita = new AccesoVisita( {idColono, nombreColono, nombreVisita, ingreso, fechayHoraAcceso, direccionColono} );

            await accesoVisita.save();
        } catch(e) {
            console.error(e);
        }
    }
}