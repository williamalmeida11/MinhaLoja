import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  itensMenu = [
    { label: 'Produtos', link: 'produtos' },
    { label: 'Carrinho de compras', link: '/carrinho-compras' },
    { label: 'Ajuda', link: '/ajuda' }
  ]
}
