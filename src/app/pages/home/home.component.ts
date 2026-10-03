
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  slideAtual: number = 0;

  intervalo: any;

  ngOnInit(): void {
    this.iniciarCarrossel();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

  iniciarCarrossel(): void {
    this.intervalo = setInterval(() => {
      this.proximo();
    }, 5000);
  }

  proximo(): void {
    if (this.slideAtual < 3) {
      this.slideAtual++;
    } else {
      this.slideAtual = 0;
    }
  }

  anterior(): void {
    if (this.slideAtual > 0) {
      this.slideAtual--;
    } else {
      this.slideAtual = 3;
    }
  }

  irParaSlide(numero: number): void {
    this.slideAtual = numero;
  }
}

