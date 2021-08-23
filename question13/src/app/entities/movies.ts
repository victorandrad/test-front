export class Movies {
    name: string;
    year: string;
    director: string;
    description: string;
    poster: string;
    genre: string;

    fill(response?: any) {
        if(typeof response != 'undefined') {
            this.name = response.nome;
            this.year = response.ano;
            this.director = response.diretor;
            this.description = response.descricao;
            this.poster = response.poster;
            this.genre = response.genero;
        }

        return this;
    }
}