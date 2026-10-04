import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export class Produto {
  id = 0;
  nome = '';
  preco = 0;
  descricao = '';
  imagem = '';

  constructor(id: number, nome: string, preco: number, descricao: string, imagem: string) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
    this.imagem = imagem;
  }
}

// Lista de produtos compartilhada entre os componentes (produtos, carrinho e crud).
export let produtos: Produto[] = [
  new Produto(1, 'Dipirona', 16.90, 'Medicamento para aliviar dores e febre.', 'imgCompras/dipirona.jpg'),
  new Produto(2, 'Loratadina', 6.99, 'Medicamento utilizado para sintomas de alergia.', 'imgCompras/loratadina.png'),
  new Produto(3, 'Dorflax', 8.51, 'Medicamento utilizado para aliviar dores.', 'imgCompras/dorflax.jpg'),
];

let proximoId = 4;

@Component({
  selector: 'app-crud',
  imports: [CommonModule, FormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {

  produtos: Produto[] = produtos;
  idEmEdicao: number = 0;

  nome: string = '';
  preco: number = 0;
  descricao: string = '';
  imagem: string = '';

  salvar() {
    if (this.nome.trim() === '' || this.preco <= 0) {
      alert('Preencha o nome e o preço do produto!');
      return;
    }

    if (this.idEmEdicao === 0) {
      const novoProduto = new Produto(proximoId, this.nome, this.preco, this.descricao, this.imagem);
      proximoId = proximoId + 1;
      produtos.push(novoProduto);
    } else {
      for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id === this.idEmEdicao) {
          produtos[i].nome = this.nome;
          produtos[i].preco = this.preco;
          produtos[i].descricao = this.descricao;
          produtos[i].imagem = this.imagem;
        }
      }
    }

    this.limparFormulario();
  }

  editar(produto: Produto) {
    this.idEmEdicao = produto.id;
    this.nome = produto.nome;
    this.preco = produto.preco;
    this.descricao = produto.descricao;
    this.imagem = produto.imagem;
  }

  remover(id: number) {
    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].id === id) {
        produtos.splice(i, 1);
        break;
      }
    }

    if (this.idEmEdicao === id) {
      this.limparFormulario();
    }
  }

  cancelarEdicao() {
    this.limparFormulario();
  }

  limparFormulario() {
    this.idEmEdicao = 0;
    this.nome = '';
    this.preco = 0;
    this.descricao = '';
    this.imagem = '';
  }
}
