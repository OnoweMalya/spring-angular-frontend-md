import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Livro } from '../shared/livro.model';
import { LivroService } from '../shared/livro.service';

@Component({
  selector: 'app-livro-reader',
  templateUrl: './livro-reader.component.html',
  styleUrls: ['./livro-reader.component.css']
})
export class LivroReaderComponent implements OnInit {

  livro: Livro = {
    titulo: '',
    nome_autor: '',
    texto: ''
  }

  id_cat: String = '';

  titulo = new FormControl('', [Validators.minLength(3)]);
  nome_autor = new FormControl('', [Validators.minLength(3)]);
  texto = new FormControl('', [Validators.minLength(10)]);

  constructor(
    private livroService: LivroService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.id_cat = this.activatedRoute.snapshot.paramMap.get('id_cat')!;
    this.livro.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    //console.log("id_cat: " +this.id_cat+ " id_livro: " + this.livro.id)
    this.findById();
  }

  findById(): void {
    this.livroService.findById(this.livro.id!).subscribe((resposta) => {
      this.livro.titulo = resposta.titulo;
      this.livro.nome_autor = resposta.nome_autor;
      this.livro.texto = resposta.texto;

    })
  }

  update(): void {
    this.livroService.update(this.livro).subscribe((resposta) => {
      this.router.navigate(['../../readall'], { relativeTo: this.activatedRoute });
      this.livroService.mensagem("Livro Atualizado com Sucesso!");
    }, err => {
      console.log(err.error.erros.length);
      for (let i = 0; i < err.error.erros.length; i++) {
        this.router.navigate(['../../readall'], { relativeTo: this.activatedRoute });
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