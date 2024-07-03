import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueRoutingModule } from './estoque-routing.module';
import { EstoqueComponent } from './estoque/estoque.component';

import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [
    EstoqueComponent,
  ],
  imports: [
    CommonModule,
    EstoqueRoutingModule,
    MaterialModule
  ]
})
export class EstoqueModule { }
