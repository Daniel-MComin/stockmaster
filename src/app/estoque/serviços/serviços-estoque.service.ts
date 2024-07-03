import { Injectable } from '@angular/core';

import { Estoque } from '../models/estoque';
import { HttpClient } from '@angular/common/http';
import { take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiçosEstoqueService {

  private readonly API = '/assets/estoque.json';

  constructor(private httpClient: HttpClient) { }

  lista() {
    return this.httpClient.get<Estoque[]>(this.API)
    .pipe(
      take(1),
      tap(estoques => console.log(estoques))
    )
  }
   
}
