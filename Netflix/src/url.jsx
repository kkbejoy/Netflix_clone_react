
import {API_KEY} from './Constants/constants';

export const originals=`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`;
export const actions=`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const documentaries= `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`;
export const romance=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const horror= `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const comedy=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const trending= `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`;