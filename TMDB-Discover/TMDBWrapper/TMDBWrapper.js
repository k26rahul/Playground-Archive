const API_BASE_URL = 'https://api.themoviedb.org/3/';

function discoverMovie() {
  const url =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDM1MzA1ZDljMjFmOGMzZDg5ZjNkZmZlMDVhZjBjYSIsInN1YiI6IjY1NWNhYjhmM2Q3NDU0MDBlMzkzNjJkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qr2iw1NVp4EsehJC_0OTlP_8LuGD71EQkAeW4rabdVM',
    },
  };

  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
}

export default class TMDBWrapper {
  constructor({ apiReadAccessToken }) {
    this.apiReadAccessToken = apiReadAccessToken;
  }
}

TMDBWrapper.prototype.discoverMovie = discoverMovie;
