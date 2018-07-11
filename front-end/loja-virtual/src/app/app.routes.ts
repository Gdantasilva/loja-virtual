import { Routes, RouterModule } from '@angular/router';
import { ListaProdutoComponent } from './pages/lista-produto/lista-produto.component';
import { EditarProdutoComponent } from './pages/editar-produto/editar-produto.component';

export const routes: Routes = [
    { path: '', component: ListaProdutoComponent },
    { path: 'lista-produtos', component: ListaProdutoComponent },
    { path: 'novo-produto', component: EditarProdutoComponent },
    { path: 'editar-produto', component: EditarProdutoComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
