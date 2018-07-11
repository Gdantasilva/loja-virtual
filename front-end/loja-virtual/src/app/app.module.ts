import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProdutoService } from './services/produto.service';
import { ListaProdutoComponent } from './pages/lista-produto/lista-produto.component';
import { EditarProdutoComponent } from './pages/editar-produto/editar-produto.component';
import { routing } from './app.routes';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListaProdutoComponent,
    EditarProdutoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
