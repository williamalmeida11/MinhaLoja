<<<<<<< HEAD
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto, produtos } from '../crud/crud.component';

@Component({
  selector: 'app-carrinho-compras',
  imports: [CommonModule],
=======
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Produto } from '../crud/crud.component';

@Component({
  selector: 'app-carrinho-compras',
  standalone: true,
  imports: [CommonModule, RouterLink],
>>>>>>> f948d758c36b9c14c8835579a65661e07c6e2e80
  templateUrl: './carrinho-compras.component.html',
  styleUrl: './carrinho-compras.component.css'
})
export class CarrinhoComprasComponent {
<<<<<<< HEAD

  produtos: Produto[] = produtos;
  quantidades: number[] = [];

  constructor() {
    for (let i = 0; i < this.produtos.length; i++) {
      this.quantidades.push(0);
    }
  }

  adicionar(indice: number) {
    this.quantidades[indice] = this.quantidades[indice] + 1;
  }

  diminuir(indice: number) {
    if (this.quantidades[indice] > 0) {
      this.quantidades[indice] = this.quantidades[indice] - 1;
    }
  }

  subtotal(indice: number) {
    return this.produtos[indice].preco * this.quantidades[indice];
  }

  total() {
    let soma = 0;
    for (let i = 0; i < this.produtos.length; i++) {
      soma = soma + this.subtotal(i);
    }
    return soma;
  }
}
=======
  produtos: Produto[] = [];
  quantidades: number[] = [];

  constructor() {
    this.carregarCarrinho();
  }

  carregarCarrinho(): void {
    const produtosSalvos = localStorage.getItem('carrinho');

    this.produtos = produtosSalvos
      ? JSON.parse(produtosSalvos)
      : [];

    this.quantidades = this.produtos.map(() => 1);
  }

  adicionar(indice: number): void {
    this.quantidades[indice]++;
  }

  diminuir(indice: number): void {
    if (this.quantidades[indice] > 1) {
      this.quantidades[indice]--;
    }
  }

  remover(indice: number): void {
    this.produtos.splice(indice, 1);
    this.quantidades.splice(indice, 1);

    this.salvarCarrinho();
  }

  subtotal(indice: number): number {
    return this.produtos[indice].preco * this.quantidades[indice];
  }

  total(): number {
    return this.produtos.reduce((soma, produto, indice) => {
      return soma + produto.preco * this.quantidades[indice];
    }, 0);
  }

  salvarCarrinho(): void {
    localStorage.setItem(
      'carrinho',
      JSON.stringify(this.produtos)
    );
  }
}
>>>>>>> f948d758c36b9c14c8835579a65661e07c6e2e80
