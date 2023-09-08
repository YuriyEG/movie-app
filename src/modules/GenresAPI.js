import { Component } from 'react';

export default class GenresAPI extends Component {
  constructor() {
    super();
    this.state = {
      url: new URL('https://api.themoviedb.org'),
      mainURL: 'https://api.themoviedb.org/3',
      apiKey: '3ba8ed94a5e6700ab22695e77491f859',
    };
  }

  async getGenres(callback) {
    const url = new URL('3/genre/movie/list', this.state.url);
    url.searchParams.set('api_key', this.state.apiKey);
    try {
      const result = await fetch(url);
      const x = await result.json();
      callback(x);
      return x;
    } catch (e) {
      return false;
    }
  }
}
