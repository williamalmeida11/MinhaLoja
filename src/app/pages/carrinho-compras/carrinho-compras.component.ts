import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto, produtoService } from '../crud/crud.component';

@Component({
  selector: 'app-carrinho-compras',
  imports: [CommonModule],
  templateUrl: './carrinho-compras.component.html',
  styleUrl: './carrinho-compras.component.css'
})
export class CarrinhoComprasComponent {

  produtos: Produto[] = produtoService.listar();
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