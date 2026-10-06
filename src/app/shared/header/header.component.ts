import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  itensMenu = [
    { label: 'Produtos', link: 'produtos' },
    { label: 'Carrinho de compras', link: '/carrinho-compras' },
    { label: 'Ajuda', link: '/ajuda' }
  ]
}
