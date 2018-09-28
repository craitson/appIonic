import { ServiceListaService } from '../service-lista.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-details',
  templateUrl: './usuarios-details.page.html',
  styleUrls: ['./usuarios-details.page.scss'],
})
export class UsuariosDetailsPage implements OnInit {


  usuario: any;

  constructor(private serviceLista: ServiceListaService) { }

  ngOnInit() {
    this.serviceLista.getUsuariosDetalhes(this.serviceLista.idUser)
      .subscribe(data => {
        this.usuario = data;
        console.log(data);
      });
  }

}
