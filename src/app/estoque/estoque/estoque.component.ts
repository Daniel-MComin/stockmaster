import { Component } from '@angular/core';

import { Estoque } from '../models/estoque';

import { ServiçosEstoqueService } from '../serviços/serviços-estoque.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.css'
})

export class EstoqueComponent{
  estoque: Observable <Estoque[]>;

  displayedColumns = ['_id','name', 'category'];

  constructor(private estoqueServices: ServiçosEstoqueService){
   
    this.estoque = this.estoqueServices.lista(); 
  }
}
