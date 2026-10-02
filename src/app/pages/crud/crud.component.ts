import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export class Produto {
  constructor(
    public id: number,
    public nome: string,
    public preco: number,
    public descricao: string,
    public imagem: string
  ) {}
}

class ProdutoService {

  produtos: Produto[] = [
    new Produto(1, 'Dipirona', 16.90, 'Medicamento para aliviar dores e febre.', 'imgCompras/dipirona.jpg'),
    new Produto(2, 'Loratadina', 6.99, 'Medicamento utilizado para sintomas de alergia.', 'imgCompras/loratadina.png'),
    new Produto(3, 'Dorflax', 8.51, 'Medicamento utilizado para aliviar dores.', 'imgCompras/dorflax.jpg'),
  ];

  proximoId: number = 4;

  listar() {
    return this.produtos;
  }

  adicionar(nome: string, preco: number, descricao: string, imagem: string) {
    const novoProduto = new Produto(this.proximoId, nome, preco, descricao, imagem);
    this.proximoId = this.proximoId + 1;
    this.produtos.push(novoProduto);
  }

  editar(id: number, nome: string, preco: number, descricao: string, imagem: string) {
    for (let i = 0; i < this.produtos.length; i++) {
      if (this.produtos[i].id === id) {
        this.produtos[i].nome = nome;
        this.produtos[i].preco = preco;
        this.produtos[i].descricao = descricao;
        this.produtos[i].imagem = imagem;
      }
    }
  }

  remover(id: number) {
    for (let i = 0; i < this.produtos.length; i++) {
      if (this.produtos[i].id === id) {
        this.produtos.splice(i, 1);
        break;
      }
    }
  }
}

export const produtoService = new ProdutoService();

@Component({
  selector: 'app-crud',
  imports: [CommonModule, FormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {

  produtos: Produto[] = produtoService.listar();
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
      produtoService.adicionar(this.nome, this.preco, this.descricao, this.imagem);
    } else {
      produtoService.editar(this.idEmEdicao, this.nome, this.preco, this.descricao, this.imagem);
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
    produtoService.remover(id);

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