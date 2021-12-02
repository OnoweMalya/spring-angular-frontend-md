
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaComponent } from './categoria.component';
import { CategoriaReadComponent } from './categoria-read/categoria-read.component';
import { CategoriaCreateComponent } from './categoria-create/categoria-create.component';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { CategoriaDeleteComponent } from './categoria-delete/categoria-delete.component';




@NgModule({
  declarations: [
    CategoriaComponent,
    CategoriaReadComponent,
    CategoriaCreateComponent,
    CategoriaDeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CategoriaRoutingModule,
    AppMaterialModule
  ],
  providers:[],
  exports:[]
})
export class CategoriaModule { }
