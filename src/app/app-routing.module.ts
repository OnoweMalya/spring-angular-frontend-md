import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';

import { LivroComponent } from './components/views/livro/livro/livro.component';
import { LivroReadAllComponent } from './components/views/livro/livro-read-all/livro-read-all.component';
import { LivroCreateComponent } from './components/views/livro/livro-create/livro-create.component';
import { LivroUpdateComponent } from './components/views/livro/livro-update/livro-update.component';
import { LivroDeleteComponent } from './components/views/livro/livro-delete/livro-delete.component';

import { CategoriaComponent } from './components/views/categoria/categoria/categoria.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  { path: "categorias", 
    component: CategoriaComponent, 
    children:[
      { path:"read", component:CategoriaReadComponent },
      { path:"create", component:CategoriaCreateComponent },
      { path:"delete/:id", component:CategoriaDeleteComponent },
      { path:"update/:id", component:CategoriaUpdateComponent }
    ]
  
    //loadChildren: () => import('./components/views/categoria/categoria.module').then(m => m.CategoriaModule) 
  },
  { path: "livros/:id_cat", 
    component: LivroComponent,
    children:[
      { path:":id_cat/readall", component:LivroReadAllComponent },
      { path:":id_cat/create", component:LivroCreateComponent },
      { path:":id_cat/update/:id", component:LivroUpdateComponent },
      { path:":id_cat/delete/:id", component:LivroDeleteComponent },
    ]
  
    //loadChildren: () => import('./components/views/livro/livro.module').then(m => m.LivroModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
