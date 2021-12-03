import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Livro } from '../shared/livro.model';
import { LivroService } from '../shared/livro.service';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrls: ['./livro-delete.component.css']
})
export class LivroDeleteComponent implements OnInit {

  

  livro: Livro = {
    titulo: '',
    nome_autor: '',
    texto: ''
  }

  id_cat: String = '';

  constructor(
    private livroService: LivroService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.id_cat = this.activatedRoute.snapshot.paramMap.get('id_cat')!;
    this.livro.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log("id_cat: " +this.id_cat+ " id_livro: " + this.livro.id)
    this.findById();
  }

  findById(): void {
    this.livroService.findById(this.livro.id!).subscribe((resposta) => {
      this.livro.titulo = resposta.titulo;
      this.livro.nome_autor = resposta.nome_autor;
      this.livro.texto = resposta.texto;

    })
  }

  delete(): void {
    this.livroService.delete(this.livro.id!).subscribe((resposta) => {
      this.router.navigate(['../../readall'], { relativeTo: this.activatedRoute });
      this.livroService.mensagem("Livro Excluido com Sucesso!");
    }, err => {
      console.log(err.error.erros.length);
      for (let i = 0; i < err.error.erros.length; i++) {
        this.router.navigate(['../../readall', this.id_cat], { relativeTo: this.activatedRoute });
        this.livroService.mensagem(err.error.erros[i].message);
      }
    })
  }

  cancel(): void {
    console.log(this.router.url);
    this.router.navigate(['../../readall'], { relativeTo: this.activatedRoute });
    //this.router.navigate(['create'],{relativeTo: this.activatedRoute });
  }

}
