import { Categoria } from '../shared/categoria.model';
import { CategoriaService } from '../shared/categoria.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = {
    id:'',
    nome:'',
    descricao:''
  }
  constructor(private service: CategoriaService, private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.categoria.id = this.activeRouter.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById():void{
  this.service.findById(this.categoria.id!).subscribe((resposta) => {
        this.categoria.nome = resposta.nome;
    this.categoria.descricao = resposta.descricao;
    
  })
  }

  delete():void {
    this.service.delete(this.categoria.id!).subscribe((resposta) => {
      this.router.navigate(['categorias/read']);
      this.service.mensagem("Categoria Deletada com Sucesso!");
    }, err => {
      this.service.mensagem(err.error.error);
    });
  }


  cancel():void{
    this.router.navigate(['categorias/read']);
  }

}
