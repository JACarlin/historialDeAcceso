import { Request, Response } from 'express';
import AccesoVisita from '../Models/AccesoVisita';
import Controller from './Controller';

interface registrarAccesoVisita {
    idVisita: Number;
    fechaYHoraAcceso: String;
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
                idVisita,
                fechaYHoraAcceso,
            } = <registrarAccesoVisita>req.body;

            if (!idVisita || !fechaYHoraAcceso) {
                res.status(400).end('Falta algún atributo');
                return;
            }

            const accesoVisita = new AccesoVisita( {idVisita, fechaYHoraAcceso} );

            await accesoVisita.save();

            res.status(200).json();
        } catch(e) {
            console.error(e);
        }
    }
}