import { Injectable } from '@angular/core';
import { Movie } from './../models/movie.class';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public movies : Movie [] = [
    new Movie(1,'Lac troi','https://www.youtube.com/watch?v=ZBHjX','Son tung mtp'),
    new Movie(2,'Nhung bai hat hay cua khac viet','https://www.youtube.com/watch?v=ZBHjX','Khac viet')
  ];
  constructor() {
  }

  getAllMovies()
  {
    return this.movies;
  }

  addMovie(movie : Movie) : void
  {
    movie.id = this.getLastID(this.movies);
    this.movies.push(movie);
  }

  getLastID(movies)
  {
     let lastID = movies.length > 0 ?  movies.sort((a,b) =>
     {
      if(a.id > b.id) return -1;
      else if(a.id < b.id) return 1;
      else return 0;
    })[0].id + 1 : 1;
      return lastID;
  }
}
