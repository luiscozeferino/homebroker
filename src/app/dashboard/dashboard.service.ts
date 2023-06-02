import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  readonly baseUrl = "http://localhost:8080/bootcamp";
  constructor(private http: HttpClient) { }

  async getStock(): Promise<Stock[]> {
    //var é uma variavel que fica global dependendo não é indicado pra utilizar nesse service
    //const é uma variavel de scopo imutável
    //let é uma variavel de scopo
    //const url = "http://localhost/bootcamp/stock";
    //utilizar isso `${this.baseUrl}/stock` é igual utilizar this.BaseURL + '/stock' se chama interpolção
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }
}
