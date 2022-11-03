import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Cliente } from '../models/cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private listaClientes: any[];
  private url = 'http://localhost:3000';

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private httpClient: HttpClient) {
    this.listaClientes = [];
  }

  get clientes(): any[]{
    return this.listaClientes;
  }

  getAll(): Observable<Cliente[]>{
    let method = this.url + '/xml/export';
    return this.httpClient.get<Cliente[]>(method);
  }

  salvar(cliente: Cliente): Observable<Cliente>{
    let method = this.url + "/client";
    return this.httpClient.post<Cliente>(method, JSON.stringify(cliente), this.httpOptions);
  }

  pesquisaPorId(id: string){
    let method = this.url + "/find/id";
    let body = {id};
    return this.httpClient.post<Cliente[]>(method, body, this.httpOptions);
  }

  pesquisaPorGenero(genero: string){
    let method = this.url + "/find/gender";
    let body = {"gender": genero};
    return this.httpClient.post<Cliente[]>(method, body, this.httpOptions);
  }

  pesquisaPorNascimento(dataInicial: Date, dataFinal: Date){
    let method = this.url + "/find/birthday";
    let initDate = this.formataData(dataInicial);
    let finalDate = this.formataData(dataFinal);
    console.log(initDate);
    console.log(finalDate);
    let body = {initDate, finalDate};
    return this.httpClient.post<Cliente[]>(method, body, this.httpOptions);
  }

  pesquisaTotal(metodo: string){
    let method = this.url + "/find";
    let body = {"method": metodo};
    return this.httpClient.post<Cliente[]>(method, body, this.httpOptions);
  }

  formataData(data: Date): string{
    return data.toString().split('-').reverse().join('/');
  }
}

