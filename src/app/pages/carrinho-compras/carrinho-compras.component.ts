import { Component } from '@angular/core';

@Component({
  selector: 'app-carrinho-compras',
  imports: [],
  templateUrl: './carrinho-compras.component.html',
  styleUrl: './carrinho-compras.component.css'
})
export class CarrinhoComprasComponent {

  quantidadeDipirona =0;

  adicionarDipirona(){
    this.quantidadeDipirona++;
  }
  diminuirDipirona(){
    if(this.quantidadeDipirona>0){
      this.quantidadeDipirona--;
    }
  }

  quantidadeLoratadina=0;
  adiconarLoratadina(){
    this.quantidadeLoratadina++;
  }
  diminuirLoratadina(){
    if(this.quantidadeLoratadina>0){
      this.quantidadeLoratadina--;
    }
  }

quantidadeDorflax=0;
adicionarDorflax(){
  this.quantidadeDorflax++;
}
diminuirDorflax(){
  if(this.quantidadeDorflax>0){
    this.quantidadeDorflax--;
  }
}


  totalDipirona(){
    return this.quantidadeDipirona*16.90;
  }
  totalLoratadina(){
    return this.quantidadeLoratadina*6.99;
  }
  totalDorflax(){
    return this.quantidadeDorflax*8.51
  }
}
