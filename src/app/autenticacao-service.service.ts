import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoServiceService {

  constructor(private http: HttpClient) { }



  autentica(nome, senha) {

    let dados = {
      'user': nome,
      'senha': senha
    };

    return this.http.post('http://localhost:8080/login', dados)
      .subscribe(data => {
        // console.log(data);
        return data;
      }
  }
}
