import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProdutoResponse } from '../model/response/produto.model.response';
import { ProdutoCosifResponse } from '../model/response/produtocosif.model.response';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  apiUrl = 'http://localhost:8088/api/';

  constructor(
    private httpClient: HttpClient
) {}
  public getAllProdutos(): Observable<ProdutoResponse[]> {
    return this.httpClient.get<ProdutoResponse[]>(this.apiUrl + 'produto');
  }

  public getProdutosCosifPorCod(cod: string): Observable<ProdutoCosifResponse[]> {
    return this.httpClient.get<ProdutoCosifResponse[]>(this.apiUrl + 'produtocosif'+'/'+cod);
  }
}
