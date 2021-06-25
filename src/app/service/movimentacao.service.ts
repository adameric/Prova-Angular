import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MovimentacaoResponse } from '../model/response/movimentacao.model.response';
import { MovimentacaoRequest } from '../model/request/movimentacao.model.request';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  apiUrl = 'http://localhost:8088/api/movimentacao';
  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

  constructor(
      private httpClient: HttpClient
  ) {}

  public createMovimentacao(mvt: any): Observable<MovimentacaoRequest> {
    return this.httpClient.post<any>(this.apiUrl, mvt, this.httpOptions);
  }

  public getAllMovimentacao(): Observable<MovimentacaoResponse[]> {
    return this.httpClient.get<MovimentacaoResponse[]>(this.apiUrl);
  }
  
}
