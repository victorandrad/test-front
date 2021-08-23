import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Movies } from "../entities/movies";

@Injectable()
export class MoviesService {

    movies: Movies[] = [];

    constructor(private http: HttpClient) { }

    index() {
        return new Promise((resolve, reject) => {
            this.movies = [];

            this.http.get("./assets/json/filmes.json").subscribe((response: any) => {
                for (let mv of response) {
                    let movie = new Movies().fill(mv);

                    this.movies.push(movie);
                }

                resolve(this.movies);
            });
        })
    }
}