import { ClienteService } from 'src/app/service/cliente.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  @Output() aoSalvar = new EventEmitter<any>();

  nome: string = '';
  cpf: string = '';
  estadocivil: string = '';
  pai: string = '';
  mae: string = '';
  conjuge: string = '';
  rg: string = '';
  salario: number = 0;
  especie: string = '';
  titulodeeleitor: string = '';
  sexo: string = '';
  celular: string = '';
  cep: string = '';
  endereco: string = '';
  complemento: string = '';
  numero: string = '';
  bairro: string = '';
  email: string = '';
  cidade: string = '';
  datadenascimento: Date = new Date();

  constructor(private service: ClienteService) {}

  ngOnInit() {
    this.testar();
  }

  salvar() {
    let cliente: Cliente = {
      nome: this.nome,
      cpf: this.cpf,
      estadocivil: this.estadocivil,
      pai: this.pai,
      mae: this.mae,
      conjuge: this.conjuge,
      rg: this.rg,
      salario: this.salario,
      especie: this.especie,
      titulodeeleitor: this.titulodeeleitor,
      sexo: this.sexo,
      celular: this.celular,
      cep: this.cep,
      endereco: this.endereco,
      complemento: this.complemento,
      numero: this.numero,
      bairro: this.bairro,
      email: this.email,
      cidade: this.cidade,
      datadenascimento: this.datadenascimento,
    };

    this.service.salvar(cliente).subscribe((resultado) => {

      this.limpar();
    },
    error => console.log(error)
    );
  }

  testar() {
    this.nome = 'MILLENIAL';
    this.cpf = '21519277687';
    this.estadocivil = '2';
    this.pai = '';
    this.mae = '';
    this.conjuge = 'ESPOSA';
    this.rg = '419656';
    this.salario = 54190;
    this.especie = 'M';
    this.titulodeeleitor = '61138530230';
    this.sexo = 'F';
    this.celular = '';
    this.cep = '14802428';
    this.endereco = 'RUA HOLANDO LUPPO, 444';
    this.complemento = '';
    this.numero = '';
    this.bairro = 'VILA HARMONIA';
    this.email = '';
    this.cidade = 'PIUMHI';
    this.datadenascimento = new Date('1992-02-24');
  }

  limpar() {
    this.nome = '';
    this.cpf = '';
    this.estadocivil = '';
    this.pai = '';
    this.mae = '';
    this.conjuge = '';
    this.rg = '';
    this.salario = 0;
    this.especie = '';
    this.titulodeeleitor = '';
    this.sexo = '';
    this.celular = '';
    this.cep = '';
    this.endereco = '';
    this.complemento = '';
    this.numero = '';
    this.bairro = '';
    this.email = '';
    this.cidade = '';
    this.datadenascimento = new Date();
  }
}
