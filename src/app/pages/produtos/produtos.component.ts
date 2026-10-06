<<<<<<< HEAD
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
=======
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
>>>>>>> f948d758c36b9c14c8835579a65661e07c6e2e80
import { Produto, produtos } from '../crud/crud.component';

@Component({
  selector: 'app-produtos',
<<<<<<< HEAD
=======
  standalone: true,
>>>>>>> f948d758c36b9c14c8835579a65661e07c6e2e80
  imports: [CommonModule, RouterLink],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
<<<<<<< HEAD

  produtos: Produto[] = produtos;
}
=======
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
>>>>>>> f948d758c36b9c14c8835579a65661e07c6e2e80
