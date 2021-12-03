import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Livro } from '../shared/livro.model';
import { LivroService } from '../shared/livro.service';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

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
  }

  create(): void {
    this.livroService.create(this.livro, this.id_cat).subscribe((resposta) => {
      this.router.navigate(['../../readall', this.id_cat], { relativeTo: this.activatedRoute });
      this.livroService.mensagem("Categoria Criada com Sucesso!");
    }, err => {
      console.log(err.error.erros.length);
      for (let i = 0; i < err.error.erros.length; i++) {
        this.router.navigate(['../../readall', this.id_cat], { relativeTo: this.activatedRoute });
        this.livroService.mensagem(err.error.erros[i].message);
      }
    })
  }

  cancel(): void {
    //console.log(this.router.url);
    this.router.navigate(['../../readall', this.id_cat], { relativeTo: this.activatedRoute });
    //this.router.navigate(['create'],{relativeTo: this.activatedRoute });
  }

  getMessage() {

    if (this.titulo.invalid) {
      return "O campo TITULO deve conter entre 3 e 100";
    }

    if (this.nome_autor.invalid) {
      return "O campo NOME DO AUTOR deve conter entre 3 e 100";
    }

    if (this.texto.invalid) {
      return "O campo TEXTO deve conter entre 10 e 1000000";
    }

    return false;
  }
}
