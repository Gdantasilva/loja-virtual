import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Produto } from '../../model/produto';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.scss']
})
export class EditarProdutoComponent implements OnInit {

  public isAtualizarProduto = false;
  public produtoSalvo: Produto;

  public titulo = 'Cadastrar novo produto';

  public produto = '';
  public descricao = '';
  public preco : number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['produto']) {
        this.titulo = 'Alterar produto';
        this.isAtualizarProduto = true;
        this.carregarProduto(params['produto']);
      }
    });
  }

  carregarProduto(id) {
    this.produtoService.getProduto(id).subscribe(
      json => {
        this.produtoSalvo = json;
        this.produto = json.nome;
        this.descricao = json.descricao;
        this.preco =  json.preco;
      },
      erro => {
        alert('Ocorreu um erro ao tentar carregar produto.');
      }
    );
  }

  salvarProduto() {
    if (this.produto === '') {
      alert('Produto não pode estar em branco.');
      return;
    }

    if (this.isAtualizarProduto) {
      this.alterarProduto();
      return;
    }

    const novoProduto = new Produto();
    novoProduto.nome = this.produto;
    novoProduto.descricao = this.descricao;
    novoProduto.preco = this.preco;

    this.produtoService.cadastrarProduto(novoProduto).subscribe(
      json => {
        this.navegarParaListaProdutos();
      },
      erro => {
        alert('Ocorreu um erro ao tentar salvar produto novo.');
      }
    );
  }

  alterarProduto() {
    this.produtoSalvo.nome = this.produto;
    this.produtoSalvo.descricao = this.descricao;
    this.produtoSalvo.preco = this.preco;

    this.produtoService.atualizarProduto(this.produtoSalvo).subscribe(
      json => {
        this.navegarParaListaProdutos();
      },
      erro => {
        alert('Ocorreu um erro ao tentar alterar produto.');
      }
    );
  }

  excluirProduto() {
    this.produtoService.removerProduto(this.produtoSalvo).subscribe(
      json => {
        this.navegarParaListaProdutos();
      },
      erro => {
        alert('Ocorreu um erro ao tentar excluir produto.');
      }
    );
  }

  navegarParaListaProdutos() {
    this.router.navigate(['/lista-produtos']);
  }

}
