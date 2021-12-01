import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  loading = false;
  baseUrl: String = environment.baseUrl;

  url: string = `${this.baseUrl}categorias`;

  constructor(
    private http: HttpClient,
    private _snakBar: MatSnackBar
    ) {}

  findAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url);
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

  update(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(this.url, categoria);
  }


}
