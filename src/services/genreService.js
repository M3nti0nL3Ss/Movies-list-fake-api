export const genres = [
  { _id: 1, name: "Action" },
  { _id: 2, name: "Thriller" },
  { _id: 3, name: "Comedy" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
