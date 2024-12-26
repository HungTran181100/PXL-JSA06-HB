const TMDB_API_KEY = "9b7c3ede447b14c5e0e9d33a137ddac9";
const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`;

let a = 10;
let b = "abc";
console.log(`Biến a là ${a}, biến b là ${b}`);

async function getMovie() {
  const response = await fetch(url);
  const data = await response.json();
  showMovie(data.results);
}

function showMovie(movies) {
  const showMovie = document.getElementById("showMovie");
  console.log(movies);

  for (let i = 0; i < movies.length; i++) {
    showMovie.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="https://image.tmdb.org/t/p/w500${movies[i].poster_path}" alt="">
        <div class="card-body">
             <h5 class="card-title">${movies[i].title}</h5>
            <p class="card-text">${movies[i].overview}</p>
            <a href="./watch.html?id=${movies[i].id}" class="btn btn-primary">Watch Movie</a>
        </div>
    </div>
    `;
  }
}

getMovie();
