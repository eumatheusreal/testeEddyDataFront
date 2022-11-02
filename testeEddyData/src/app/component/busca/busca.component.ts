import { Cliente } from './../../models/cliente.model';
import { Component, Input, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  @Input() clientes: any[];

  constructor(private service: ClienteService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((clientes: Cliente[]) => {
      console.table(clientes);
      this.clientes = clientes;

    });
  }

}
