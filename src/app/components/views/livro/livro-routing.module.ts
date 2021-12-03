import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroCreateComponent } from './livro-create/livro-create.component';
import { LivroDeleteComponent } from './livro-delete/livro-delete.component';
import { LivroReadAllComponent } from './livro-read-all/livro-read-all.component';
import { LivroUpdateComponent } from './livro-update/livro-update.component';
import { LivroComponent } from './livro/livro.component';

const livro: Routes = [
  { path: "", component: LivroComponent,
  children:[
    { path:"readall", component:LivroReadAllComponent },
    { path:"create/:id_cat", component:LivroCreateComponent },
    { path:"update/:id", component:LivroUpdateComponent },
    { path:"delete/:id", component:LivroDeleteComponent },
    { path:"", redirectTo: "livros/:idc_cat/readall", pathMatch: "full"}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(livro)],
  exports: [RouterModule]
})
export class LivroRoutingModule { }
