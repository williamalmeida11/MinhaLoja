import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  get usuarioLogado() {
    return localStorage.getItem('usuarioLogado') === 'true';
  }

  get nomeUsuario() {
    return localStorage.getItem('nomeUsuario') || '';
  }

  get isAdmin() {
    return localStorage.getItem('isAdmin') === 'true';
  }

  sair() {
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('nomeUsuario');
  }

  itensMenu = [
    { label: 'Produtos', link: 'produtos' },
    { label: 'Carrinho de compras', link: '/carrinho-compras' },
    { label: 'Ajuda', link: '/ajuda' }
  ]
}