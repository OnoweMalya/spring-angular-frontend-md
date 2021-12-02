import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  }
  constructor(
    private service: CategoriaService, 
    private activeRouter: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoria.id = this.activeRouter.snapshot.paramMap.get('id')!;
    this.findById();
  }
  findById(): void {
    this.service.findById(this.categoria.id!).subscribe((resposta) => {
      this.categoria.nome = resposta.nome;
      this.categoria.descricao = resposta.descricao;

    })
  }

  update(): void {
    this.service.update(this.categoria).subscribe((resposta) => {
      this.router.navigate(['categorias/read']);
      this.service.mensagem("Categoria Atualizada com Sucesso!");
    }, err => {
      this.service.mensagem(err.error.error);
    });
  }


  cancel(): void {
    this.router.navigate(['categorias/read']);
  }
}
