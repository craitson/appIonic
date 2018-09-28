import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceListaService {

  idUser: any;

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get('http://localhost:8080/listaUsuarios');
  }

  getUsuariosDetalhes(id) {
    return this.http.get('http://localhost:8080/getIdUser?id=' + id.id);
  }
}
