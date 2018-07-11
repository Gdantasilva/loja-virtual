import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Produto } from '../model/produto';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProdutoService {

  public apiBaseUrl = '';
  public URL = environment.apiBaseUrl + '/produtos';

  constructor(private http: HttpClient) {
    // Get the hostname
    let hostname = location.host;
    if (hostname.indexOf(':') > 0) {
      hostname = hostname.substr(0, hostname.indexOf(':'));
    }
    // Add a port or a subdomain to get the API url:
    this.apiBaseUrl = 'http://' + hostname + ':8080';
    this.URL = this.apiBaseUrl + '/api/produtos';
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
