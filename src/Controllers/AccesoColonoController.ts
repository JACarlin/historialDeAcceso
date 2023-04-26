import { Request, Response } from 'express';
import AccesoColono from '../Models/AccesoColono';
import Controller from './Controller';

interface registrarAccesoColono {
    idColono : Number,
    nombreColono : String,
    ingreso: Boolean,
    fechayHoraAcceso: String,
    direccion : String
}

export default class AccesoColonoController extends Controller {
    public constructor() {
        super('/AccesoColono');
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
                ingreso, 
                fechayHoraAcceso, 
                direccion 
            } = <registrarAccesoColono>req.body;

            console.log(typeof ingreso)

            if (!idColono || !nombreColono || typeof ingreso != 'boolean' || !fechayHoraAcceso || !direccion) {
                res.status(400).end('Falta algún atributo');
                return;
            }

            const accesoColono = new AccesoColono( {idColono, nombreColono, ingreso, fechayHoraAcceso, direccion} );

            console.log(idColono, nombreColono, ingreso, fechayHoraAcceso, direccion)

            await accesoColono.save();

            return res.status(200).json();
        } catch(e) {
            console.error(e);
        }
    }
}