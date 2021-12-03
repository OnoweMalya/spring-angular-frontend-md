import { LivroService } from './../../livro/shared/livro.service';
import { Categoria } from '../shared/categoria.model';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../shared/categoria.service';
import { Router, RouterModule, ActivatedRoute, Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  categorias: Categoria[] = [];
  
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros','acoes'];

  constructor(
    private service: CategoriaService, 
    private router:Router, 
    private activatedRoute: ActivatedRoute,
    private livroService: LivroService) {   }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {   
      //console.log(resposta);
      this.categorias = resposta;
    });
    }  

    goToBook(id: string):void{
      //console.log("the ID is: " + id +" and the Router is: " +  this.router.createUrlTree(["livros/",id]) );

      //this.router.navigate(["livros/",id]);
      //this.router.navigateByUrl(this.router.createUrlTree(["livros/",id]));

      this.livroService.goToLivro(id);
    }

    gotToCreateCategoria():void{
      //console.log("create works!");
    this.router.navigate(['../create'], {relativeTo: this.activatedRoute}); 
    }

}


/**
 * para fazzzer o carregamento do spinner
 * D:\WorkSpace\Learning_Angular\Projects\crud-angular-spring\crud-angular\src\app\courses\courses
 * 
 * 
 * relativeTo: this.activatedRoute
 */
