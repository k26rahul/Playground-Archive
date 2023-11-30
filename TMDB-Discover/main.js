window.log = console.log.bind(console);

import API_READ_ACCESS_TOKEN from './api-read-access-token.js';
import TMDBWrapper from './TMDBWrapper/TMDBWrapper.js';

const tmdb = new TMDBWrapper({ apiReadAccessToken: API_READ_ACCESS_TOKEN });
