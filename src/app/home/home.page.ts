import { AutenticacaoServiceService } from './../autenticacao-service.service';
import { AuthGuard } from './../auth.guard';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  const loged = false;

  constructor(private auth: AutenticacaoServiceService, private authguard: AuthGuard) { }


  login() {
    this.loged = this.auth.autentica(this.nome, this.senha);

    if (this.loged = true){
      
    }

  }

}
