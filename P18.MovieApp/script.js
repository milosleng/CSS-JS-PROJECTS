const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f01b91c9f79e40d1972fbe64839a5cfd&page=1';

//DO NOT ADD THE SLASH after imagesize, it has already one in the data object!

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API =
  'https://api.themoviedb.org/3/discover/movie?api_key=f01b91c9f79e40d1972fbe64839a5cfd&query="';

//Get initial movies

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  Map.innerHTML = '';

  movies.forEach((movie) => {
    //getting data from the object we fetched by destructuring
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement('div');

    movieEl.classList.add('movie');

    movieEl.innerHTML = `
        <img
          src="${IMG_PATH + poster_path}"
          alt="${title}"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
      `;
    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

form.addEventListener('submit', () => {
  console.log('hello');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  console.log('hello');
  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);

    search.value = '';
  } else {
    window.location.reload();
  }
});
