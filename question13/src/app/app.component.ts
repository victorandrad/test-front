import { Component, OnInit } from '@angular/core';
import { MoviesService } from './services/movies.service';

interface ItemData {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Questão 13';
  movies: any;
  isVisible = false;
  titleModal: string = "";
  descriptionModal: string = "";
  posterModal: string = "";
  directorModal: string = "";
  genreModal: string = "";

  constructor(public service: MoviesService) { }

  ngOnInit() {
    this.service.index().then(response => {
      this.movies = response;
    });
  }

  showModal(item): void {
    this.isVisible = true;
    this.titleModal = `${item.name} (${item.year})`;
    this.descriptionModal = item.description;
    this.posterModal = item.poster;
    this.directorModal = item.director;
    this.genreModal = item.genre;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
