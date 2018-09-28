import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'listaUsuarios', loadChildren: './lista-usuarios/lista-usuarios.module#ListaUsuariosPageModule' },
  { path: 'usuariosDetails', loadChildren: './usuarios-details/usuarios-details.module#UsuariosDetailsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
