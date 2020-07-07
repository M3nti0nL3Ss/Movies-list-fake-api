import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { getGenres } from "./genreService";
const movies = [
  {
    _id: "1",
    name: "6 underground",
    stars: 7.7,
    clicked: faHeart,
    genre: { _id: "1", name: "Action" },
  },
  {
    _id: "2",
    name: "Fity shades of gray",
    stars: 8.7,
    clicked: faHeart,
    genre: { _id: "2", name: "Thriller" },
  },
  {
    _id: "3",
    name: "Day 365",
    stars: 6.7,
    clicked: faHeart,
    genre: { _id: "3", name: "Comedy" },
  },
  {
    _id: "4",
    name: "The joker",
    stars: 5.7,
    clicked: faHeart,
    genre: { _id: "2", name: "Thriller" },
  },
  {
    _id: "5",
    name: "The women",
    stars: 1.7,
    clicked: faHeart,
    genre: { _id: "3", name: "Comedy" },
  },
  {
    _id: "6",
    name: "The good",
    stars: 5.6,
    clicked: faHeart,
    genre: { _id: "1", name: "Action" },
  },
  {
    _id: "7",
    name: "The beau",
    stars: 2.7,
    clicked: faHeart,
    genre: { _id: "2", name: "Thriller" },
  },
  {
    _id: "8",
    name: "The man",
    stars: 3.7,
    clicked: faHeart,
    genre: { _id: "3", name: "Comedy" },
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find((m) => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  const genresAPI = getGenres();
  movieInDb.genre = genresAPI.find((g) => g._id === movie.genreId);
  movieInDb.stars = movie.stars;
  movieInDb.clicked = faHeart;
  //movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function getMovieByName(name) {
  const moviesFound = [];
  moviesFound.push(movies.find((m) => m.name.includes(name)));
  return moviesFound;
}

export function deleteMovie(id) {
  let movieInDb = movies.find((m) => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
