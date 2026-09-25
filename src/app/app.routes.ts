import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { CarrinhoComprasComponent } from './pages/carrinho-compras/carrinho-compras.component';
import { CadastroClientesComponent } from './pages/cadastro-clientes/cadastro-clientes.component';


export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'login', component:LoginComponent},
    {path: 'produtos', component:ProdutosComponent},
    {path: 'carrinho-compras', component:CarrinhoComprasComponent},
    {path: 'cadastro-clientes', component:CadastroClientesComponent}
];
