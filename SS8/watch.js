const movieId = new URLSearchParams(location.search).get("id");

console.log(movieId);

const watchMovie = document.getElementById("watchMovie");

watchMovie.innerHTML = `
    <iframe src="https://www.2embed.cc/embed/${movieId}" width="100%" height="100%" frameborder="0" scrolling="no" allowfullscreen></iframe>
`;
