import { Categoria } from './components/views/categoria/categoria.model';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { CategoriaComponent } from './components/views/categoria/categoria.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  { path: "categorias",
  loadChildren: () => import('./components/views/categoria/categoria.module').then(m => m.CategoriaModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
