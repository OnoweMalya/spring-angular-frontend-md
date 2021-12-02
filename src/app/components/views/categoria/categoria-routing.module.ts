import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaCreateComponent } from './categoria-create/categoria-create.component';
import { CategoriaReadComponent } from './categoria-read/categoria-read.component';
import { CategoriaDeleteComponent } from './categoria-delete/categoria-delete.component';
import { CategoriaComponent } from './categoria.component';

const categoria: Routes = [
  { path: "", component: CategoriaComponent, 
    children:[
      { path:"read", component:CategoriaReadComponent },
      { path:"create", component:CategoriaCreateComponent },
      { path:"delete/:id", component:CategoriaDeleteComponent }
    ]},  
];

@NgModule({
  imports: [RouterModule.forChild(categoria)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
