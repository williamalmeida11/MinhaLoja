import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-clientes',
  imports: [RouterLink, FormsModule],
  templateUrl: './cadastro-clientes.component.html',
  styleUrl: './cadastro-clientes.component.css'
})
export class CadastroClientesComponent {

  nome: string = '';
  email: string = '';
  senha: string = '';

  cadastrar() {
    localStorage.setItem('clienteNome', this.nome.trim());
    localStorage.setItem('clienteEmail', this.email.trim().toLowerCase());
    localStorage.setItem('clienteSenha', this.senha.trim());

    alert(`Cadastro realizado com sucesso, ${this.nome}!`);
  }
}