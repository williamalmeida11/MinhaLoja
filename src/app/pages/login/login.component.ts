import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  botaoDesabilitado: boolean = true;
  login: string = '';
  senha: string = '';

  validarFormulario() {
    if (this.login.trim() !== '' && this.senha.trim() !== '') {
      this.botaoDesabilitado = false;
    } else {
      this.botaoDesabilitado = true;
    }
  }

  fazerLogin() {
    if (this.login === "admin@email.com" && this.senha === "123") {
      localStorage.setItem('usuarioLogado', 'true');
      localStorage.setItem('isAdmin', 'true');
      localStorage.setItem('nomeUsuario', 'Admin');
      alert("Bem-vindo(a) admin!");

    } else if (
      this.login.trim().toLowerCase() === localStorage.getItem('clienteEmail') &&
      this.senha.trim() === localStorage.getItem('clienteSenha')
    ) {
      localStorage.setItem('usuarioLogado', 'true');
      localStorage.setItem('isAdmin', 'false');
      localStorage.setItem('nomeUsuario', localStorage.getItem('clienteNome') || '');
      alert(`Bem-vindo(a), ${localStorage.getItem('clienteNome')}!`);

    } else {
      alert("Credenciais inválidas!");
    }
  }

  onBotaoClicado() {
    alert("Confirmado!");
  }

  teclaSolta(evento: KeyboardEvent): void {
    alert(`o usuário digitou ${evento.key}`);
  }

}