import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { CarrinhoComprasComponent } from './pages/carrinho-compras/carrinho-compras.component';
import { AjudaComponent } from './pages/ajuda/ajuda.component';
import { HomeComponent } from './pages/home/home.component';
import { CrudComponent } from './pages/crud/crud.component';


export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'login', component:LoginComponent},
    {path: 'produtos', component:ProdutosComponent},
    {path: 'carrinho-compras', component:CarrinhoComprasComponent},
    {path: 'ajuda', component:AjudaComponent},
    {path: 'crud', component:CrudComponent},

];
