const TMDB_API_KEY = "9b7c3ede447b14c5e0e9d33a137ddac9";
const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`;

let a = 10;
let b = "abc";
console.log(`Biến a là ${a}, biến b là ${b}`);

async function getMovie() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results);
}

getMovie();
