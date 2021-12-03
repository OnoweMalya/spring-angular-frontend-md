import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { Categoria } from '../../categoria/shared/categoria.model';
import { Livro } from '../shared/livro.model';
import { LivroService } from '../shared/livro.service';

@Component({
  selector: 'app-livro-read-all',
  templateUrl: './livro-read-all.component.html',
  styleUrls: ['./livro-read-all.component.css']
})
export class LivroReadAllComponent implements OnInit {

  livro: Livro = {
    titulo:'',
    nome_autor:'',
    texto:''
  }

  livros: Livro[] = [];
  categorias: Categoria[] = [];
  id_cat: String = '';
  displayedColumns: string[] = ['id', 'titulo', 'livros' ,'acoes'];

  constructor(private service: LivroService, 
    private activeRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id_cat = this.activeRouter.snapshot.paramMap.get('id_cat')!;
    console.log('ReadAll says: '+ this.id_cat);    
     //this.findById();
     this.findAll();

/*    this.router.events
  .subscribe(
    (event: NavigationEvent) => {
      if(event instanceof NavigationStart) {
        //console.log("O Evento é: "+event);
      }
    }); */


  }

  findAll():void{
    this.service.findAllByCategoria(this.id_cat).subscribe((resposta) => {
      
      this.livros = resposta;
      //console.log(this.livros);
    })
  }
    
  findById(): void {
    this.service.findById(this.livro.id!).subscribe((resposta) => {
      this.livro.titulo = resposta.titulo;
      this.livro.nome_autor = resposta.nome_autor;
      this.livro = resposta;
      //console.log(this.livro);
    })
  }

  gotToCreateLivro():void{
    //console.log("create works!");
    this.router.navigate(['../../create',this.id_cat], {relativeTo: this.activeRouter});  
  }

}
