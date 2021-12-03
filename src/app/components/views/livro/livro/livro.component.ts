import { Livro } from './../shared/livro.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  livro: Livro = {
    titulo:'',
    nome_autor:'',
    texto:''
  }
  id_cat: String = ';'

  livros: Livro[] = [];
  //categorias: Categoria[] = [];

  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.id_cat = this.activeRouter.snapshot.paramMap.get('id_cat')!;
    console.log("LivroComponent says: " + this.id_cat);
    this.router.navigate([this.id_cat,'readall'], {relativeTo: this.activeRouter});    
    //this.router.navigate(['readall',this.id_cat], {relativeTo: this.activeRouter});    
    //console.log("LivroComponent says about the route: " + this.router.createUrlTree(['readall'], {relativeTo: this.activeRouter}));
    //console.log("LivroComponent says about the route: " + this.router.createUrlTree(['readall'], {relativeTo: this.activeRouter}));
    //this.router.navigateByUrl(this.router.createUrlTree(['readall'], {relativeTo: this.activeRouter}));
    //this.router.navigateByUrl(this.router.createUrlTree(["livros",`${this.id_cat}`,"readall"]));
    //this.router.navigate(["livros",this.id_cat,"readall"]);
    //console.log( " a navi é: "+this.router.getCurrentNavigation());

  }

}
