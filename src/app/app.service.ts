import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable()
export class AppService{

    urlServidor = environment.urlServidor;

    constructor(private http: HttpClient) {}

    obtenerClientes(){
        return this.http.post(this.urlServidor + '/api/movil/obtenerClientes/', {});
    }

    obtenerEmpleados(){
        return this.http.post(this.urlServidor + '/api/movil/obtenerEmpleados/', {});
    }

    insertarEntradaSalida(parametros){
        return this.http.post(this.urlServidor + '/api/movil/insertarEntradaSalida/', parametros);
    }

    insertarCredito(parametros){
        return this.http.post(this.urlServidor + '/api/movil/insertarCredito/', parametros);
    }

    insertarDigital(parametros){
        return this.http.post(this.urlServidor + '/api/movil/insertarDigital/', parametros);
    }

    insertarAnaloga(parametros){
        return this.http.post(this.urlServidor + '/api/movil/insertarAnaloga/', parametros);
    }

    obtenerTipoCombustible(){
        return this.http.post(this.urlServidor + '/api/obtenerTipoCombustible/', {});
    }

    obtenerTotalBombaManguera(){
        return this.http.post(this.urlServidor + '/api/obtenerTotalBombaManguera/', {});
    }

}