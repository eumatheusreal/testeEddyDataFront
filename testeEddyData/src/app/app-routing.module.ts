import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaComponent } from './component/busca/busca.component';
import { ClienteComponent } from './component/cliente/cliente.component';

const routes: Routes = [
  {path: '', redirectTo: 'cliente', pathMatch: 'full'},
  { path: 'cliente', component: ClienteComponent},
  { path: 'busca', component: BuscaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
