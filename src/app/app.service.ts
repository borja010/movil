import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable()
export class AppService{

    urlServidor = environment.urlServidor;

    constructor(private http: HttpClient) {}

    obtenerClientes(){
        return this.http.post(this.urlServidor + '/api/movil/obtenerClientes/', {}, { headers: { authorization: 'Bearer ' + localStorage.token } });
    }

    obtenerEmpleados(){
        return this.http.post(this.urlServidor + '/api/movil/obtenerEmpleados/', {}, { headers: { authorization: 'Bearer ' + localStorage.token } });
    }

    insertarEntradaSalida(parametros){
        return this.http.post(this.urlServidor + '/api/movil/insertarEntradaSalida/', parametros, { headers: { authorization: 'Bearer ' + localStorage.token } });
    }

    insertarCredito(parametros){
        return this.http.post(this.urlServidor + '/api/movil/insertarCredito/', parametros, { headers: { authorization: 'Bearer ' + localStorage.token } });
    }

    insertarDigital(parametros){
        return this.http.post(this.urlServidor + '/api/movil/insertarDigital/', parametros, { headers: { authorization: 'Bearer ' + localStorage.token } });
    }

    insertarAnaloga(parametros){
        return this.http.post(this.urlServidor + '/api/movil/insertarAnaloga/', parametros, { headers: { authorization: 'Bearer ' + localStorage.token } });
    }

    obtenerMangueras(){
        return this.http.post(this.urlServidor + '/api/frontend/obtenerMangueras/', {}, { headers: { authorization: 'Bearer ' + localStorage.token } });
    }

    login(parametros) {
        return this.http.post(this.urlServidor + "/login/", parametros);
    }

}