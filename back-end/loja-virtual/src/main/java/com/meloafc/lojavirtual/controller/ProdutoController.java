package com.meloafc.lojavirtual.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.meloafc.lojavirtual.exception.ResourceNotFoundException;
import com.meloafc.lojavirtual.model.Produto;
import com.meloafc.lojavirtual.repository.ProdutoRepository;

@RestController
@RequestMapping("/api")
public class ProdutoController {
	
	@Autowired
    ProdutoRepository produtoRepository;

    @GetMapping("/produtos")
    public List<Produto> getTodosProdutos() {
        return produtoRepository.findAll();
    }

    @PostMapping("/produtos")
    public Produto criarProduto(@Valid @RequestBody Produto produto) {
        return produtoRepository.save(produto);
    }

    @GetMapping("/produtos/{id}")
    public Produto getProdutoPorId(@PathVariable(value = "id") Long produtoId) {
        return produtoRepository.findById(produtoId)
                .orElseThrow(() -> new ResourceNotFoundException("Produto", "id", produtoId));
    }

    @PutMapping("/produtos/{id}")
    public Produto atualizarProduto(@PathVariable(value = "id") Long produtoId,
                                           @Valid @RequestBody Produto novoProduto) {

    	Produto produto = produtoRepository.findById(produtoId)
                .orElseThrow(() -> new ResourceNotFoundException("Produto", "id", produtoId));

    	produto.setNome(novoProduto.getNome());
    	produto.setDescricao(novoProduto.getDescricao());
    	produto.setPreco(novoProduto.getPreco());

        return produtoRepository.save(produto);
    }

    @DeleteMapping("/produtos/{id}")
    public ResponseEntity<?> deletarProduto(@PathVariable(value = "id") Long produtoId) {
    	Produto produto = produtoRepository.findById(produtoId)
                .orElseThrow(() -> new ResourceNotFoundException("Produto", "id", produtoId));

        produtoRepository.delete(produto);

        return ResponseEntity.ok().build();
    }

}
