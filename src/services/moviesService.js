import { faHeart } from "@fortawesome/free-regular-svg-icons";
export const movies = [
  {
    _id: 1,
    name: "6 underground",
    stars: 6.7,
    clicked: faHeart,
    genre: { _id: 1, name: "Action" },
  },
  {
    _id: 2,
    name: "fity shades of gray",
    stars: 6.7,
    clicked: faHeart,
    genre: { _id: 2, name: "Thriller" },
  },
  {
    _id: 3,
    name: "day 365",
    stars: 6.7,
    clicked: faHeart,
    genre: { _id: 3, name: "Comedy" },
  },
  {
    _id: 4,
    name: "The joker",
    stars: 6.7,
    clicked: faHeart,
    genre: { _id: 2, name: "Thriller" },
  },
  {
    _id: 5,
    name: "The basterde",
    stars: 6.7,
    clicked: faHeart,
    genre: { _id: 3, name: "Comedy" },
  },
  {
    _id: 6,
    name: "The good",
    stars: 6.7,
    clicked: faHeart,
    genre: { _id: 1, name: "Action" },
  },
  {
    _id: 7,
    name: "The beau",
    stars: 6.7,
    clicked: faHeart,
    genre: { _id: 2, name: "Thriller" },
  },
  {
    _id: 8,
    name: "The fucker",
    stars: 6.7,
    clicked: faHeart,
    genre: { _id: 3, name: "Comedy" },
  },
];

export function getMovie(id) {
  return movies.find((c) => c._id === id);
}
