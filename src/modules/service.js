import { Component } from 'react';

export default class Service extends Component {
  constructor() {
    super();
    this.state = {
      url: new URL('https://api.themoviedb.org'),
      apiKey: '1ad6b21850f623de3fc247a586277fc9',
    };
  }

  async getPageMovies(movieName, page, callback) {
    const url = new URL('3/search/movie', this.state.url);
    url.searchParams.set('api_key', this.state.apiKey);
    url.searchParams.set('query', movieName);
    url.searchParams.set('page', page);
    try {
      const result = await fetch(url);

      if (!result.ok) {
        if (result.status === 404 && movieName !== '') {
          callback();
        }

        return 'not found';
      }

      return await result.json();
    } catch (e) {
      return 'disconnected';
    }
  }
}
