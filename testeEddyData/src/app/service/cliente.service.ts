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
}

