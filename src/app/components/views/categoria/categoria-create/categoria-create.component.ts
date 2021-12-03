import { Categoria } from '../shared/categoria.model';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../shared/categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = {
    nome: "",
    descricao: ""
  };

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.categoria).subscribe((resposta) => {
      this.router.navigate(['categorias/read']);
      this.service.mensagem("Categoria Criada com Sucesso!");
    }, err => {
      console.log(err.error.erros.length );
      for (let i = 0; i < err.error.erros.length; i++) {
        this.service.mensagem(err.error.erros[i].message);
      }
    })
  }

  cancel():void{
    this.router.navigate(['categorias/read']);
  }
}
