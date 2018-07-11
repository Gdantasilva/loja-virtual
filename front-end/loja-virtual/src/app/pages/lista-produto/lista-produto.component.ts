import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../model/produto';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.scss']
})
export class ListaProdutoComponent implements OnInit {

  public produtos: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.produtoService.getListaProdutos().subscribe(
      json => {
        this.produtos = json;
      },
      erro => {
        // this.feedbackService.mostrarMensagem('Ocorreu um erro ao tentar carregar a lista de times.');
      }
    );
  }

  navegarParaCadastrarProduto() {
    this.router.navigate(['/novo-produto']);
  }

  editar(produto: Produto) {
    this.router.navigate(['/editar-produto'], { queryParams: { produto: produto.id } });
  }

}
