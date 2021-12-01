import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  
  fistAccess: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  navegarParaCategoriaCreate(){
    this.router.navigate(["categorias/create"]);
  }

  navegarParaCategoriaRead(){
    this.router.navigate(["categorias/read"]);
  }
  
}
