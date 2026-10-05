import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Produto, produtos } from '../crud/crud.component';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  produtos: Produto[] = produtos;

  constructor(private router: Router) {}

  adicionarAoCarrinho(produto: Produto): void {
    const carrinhoAtual: Produto[] = JSON.parse(
      localStorage.getItem('carrinho') || '[]'
    );

    carrinhoAtual.push(produto);

    localStorage.setItem(
      'carrinho',
      JSON.stringify(carrinhoAtual)
    );

    this.router.navigate(['/carrinho-compras']);
  }
}
