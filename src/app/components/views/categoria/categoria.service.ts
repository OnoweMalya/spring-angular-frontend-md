import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  loading = false;
  baseUrl: String = environment.baseUrl;

  url: string = `${this.baseUrl}categorias`;

  constructor(
    private http: HttpClient,
    private _snakBar: MatSnackBar,
    private router: Router
    ) {}

  findAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url);
  }

  findById(id: String): Observable<Categoria>{
    return this.http.get<Categoria>(this.url+`/${id}`);
  }

  mensagem(str: string):void{
    this._snakBar.open(`${str}`, 'OK',{
      horizontalPosition: 'end',
      verticalPosition:'top',
      duration: 3000
    })

  }

  create(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.url, categoria);
  }

  delete(id: String): Observable<void>{
    return this.http.delete<void>(this.url+`/${id}`);
  }

  update(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(this.url, categoria);
  }

  

}
