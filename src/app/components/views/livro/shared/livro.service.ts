import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livro } from './livro.model';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: String = environment.baseUrl;
  url: string = `${this.baseUrl}livros?categoria=`;

  constructor(
    private http: HttpClient,
    private _snakBar: MatSnackBar,
    private activatedRoute: ActivatedRoute) { }
  
  findAllByCategoria(id_cat: String): Observable<Livro[]>{
    const fullUrl = this.http.get<Livro[]>(this.url+`${id_cat}`);
    //console.log("LivroService says: " + fullUrl.subscribe);
    //console.log(id_cat);
    return fullUrl;
  }

  findById(id: String): Observable<Livro>{
    const urls = `${this.baseUrl}livros/${id}`;
    const fullUrl = this.http.get<Livro>(urls);
    //console.log("LivroService says: " + fullUrl);
    return fullUrl;
  }

  mensagem(str: string):void{
    this._snakBar.open(`${str}`, 'OK',{
      horizontalPosition: 'end',
      verticalPosition:'top',
      duration: 3000
    })

  }

  create(livro: Livro, id_cat: String): Observable<Livro[]> {
    return this.http.post<Livro[]>(this.url+`${id_cat}`, livro);
  }

  delete(id: String): Observable<void>{
    const urls = `${this.baseUrl}livros/${id}`;
    return this.http.delete<void>(urls);
  }

  update(livro: Livro): Observable<Livro> {
    const urls = `${this.baseUrl}livros/${livro.id}`;
    return this.http.put<Livro>(urls, livro);
  }

  



  goToLivro(id_cat: String){
    console.log(id_cat);
  }
}
