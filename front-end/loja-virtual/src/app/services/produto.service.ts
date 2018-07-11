import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Produto } from '../model/produto';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProdutoService {

  public URL = 'http://192.168.99.100:8080/api/produtos';

  constructor(private http: HttpClient) {

  }

  getProduto(id): Observable<Produto> {
    return this.http.get<Produto>(this.URL + '/' + id);
  }

  getListaProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.URL);
  }

  cadastrarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.URL, produto);
  }

  atualizarProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(this.URL + '/' + produto.id, produto);
  }

  removerProduto(produto): Observable<any> {
    return this.http.delete(this.URL + '/' + produto.id);
  }

}
