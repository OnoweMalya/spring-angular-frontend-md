import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivroRoutingModule } from './livro-routing.module';
import { LivroReadAllComponent } from './livro-read-all/livro-read-all.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { LivroComponent } from './livro/livro.component';
import { LivroCreateComponent } from './livro-create/livro-create.component';
import { LivroUpdateComponent } from './livro-update/livro-update.component';
import { LivroDeleteComponent } from './livro-delete/livro-delete.component';


@NgModule({
  declarations: [
    LivroReadAllComponent,
    LivroComponent,
    LivroCreateComponent,
    LivroUpdateComponent,
    LivroDeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LivroRoutingModule,
    AppMaterialModule
  ],
  providers:[],
  exports:[]
})
export class LivroModule { }
