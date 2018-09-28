import { ServiceListaService } from '../service-lista.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.page.html',
  styleUrls: ['./lista-usuarios.page.scss'],
})
export class ListaUsuariosPage implements OnInit {

  data: any;

  constructor(private serviceLista: ServiceListaService, private router: Router) { }

  ngOnInit() {
    this.serviceLista.getUsuarios()
      .subscribe(data => {
        this.data = data;
      });
  }

  showDetails(id) {
    this.serviceLista.idUser = id;
    this.router.navigate(['/usuariosDetails']);
  }
}
