import { Categoria } from "../../categoria/shared/categoria.model";

export interface Livro {
    id?: String;
    titulo: String;
    nome_autor: String;
    texto: String;
    categoria?: Categoria;
}
