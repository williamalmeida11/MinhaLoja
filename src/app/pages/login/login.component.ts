import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD

@Component({
  selector: 'app-login',
  imports: [FormsModule],
=======
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
>>>>>>> f948d758c36b9c14c8835579a65661e07c6e2e80
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

<<<<<<< HEAD
  botaoDesabilitado:boolean = true;
  login:string = '';
  senha:string = '';

  validarFormulario(){
    if(this.login.trim() !=='' && this.senha.trim() !==''){
      this.botaoDesabilitado = false;
    }else{
=======
  botaoDesabilitado: boolean = true;
  login: string = '';
  senha: string = '';

  validarFormulario() {
    if (this.login.trim() !== '' && this.senha.trim() !== '') {
      this.botaoDesabilitado = false;
    } else {
>>>>>>> f948d758c36b9c14c8835579a65661e07c6e2e80
      this.botaoDesabilitado = true;
    }
  }

<<<<<<< HEAD
  fazerLogin(){
    if(this.login === "admin@email.com" && this.senha==="123"){
      alert("Bem-vindo(a) admin!");
    }else{
=======
  fazerLogin() {
    if (this.login === "admin@email.com" && this.senha === "123") {
      alert("Bem-vindo(a) admin!");
    } else {
>>>>>>> f948d758c36b9c14c8835579a65661e07c6e2e80
      alert("Credenciais inválidas!");
    }
  }

<<<<<<< HEAD
  onBotaoClicado(){
    alert("Confirmado!");
  }

  teclaSolta(evento:KeyboardEvent):void{
    alert(`o usuário digitou ${evento.key}`);
  }


}
=======
  onBotaoClicado() {
    alert("Confirmado!");
  }

  teclaSolta(evento: KeyboardEvent): void {
    alert(`o usuário digitou ${evento.key}`);
  }

}
>>>>>>> f948d758c36b9c14c8835579a65661e07c6e2e80
