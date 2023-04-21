import Controller from './Controller';

export default class AccesoColonoController extends Controller {
    public constructor() {
        super('/AccesoColono');
    }

    protected initializeRouter(): void {
        this.router.post('/registro');
    }
}