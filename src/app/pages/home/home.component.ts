import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
itenshome = [
  {label: 'Produtos', link:'produtos'},
  {label: 'Carrinho de compras', link:'/carrinho-compras'}, 
]
}
