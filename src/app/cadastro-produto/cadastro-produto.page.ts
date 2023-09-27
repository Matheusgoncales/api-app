import { Component, OnInit } from '@angular/core';
import { Produto } from '../Models/Produto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
})
export class CadastroProdutoPage implements OnInit {

  produto: Produto = {
    nome: '',
    id: 0,
    preco: 0,
    descricao: '',
    validade: ''
  };
  confirmaProduto = '';

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
  }

  salvarProduto() {
    debugger
    if (this.produto.nome.trim()) {
      if (this.produto.nome != "" ) {
        this.produtoService.salvar(this.produto).subscribe(retorno =>{
          this.produto = retorno;
          alert("Sucesso! Produto: " + this.produto.nome + " foi salvo");
        });
      }
    }
    else {
      alert("Os campos de senha devem ser preenchidos!")
    }
  }
}
