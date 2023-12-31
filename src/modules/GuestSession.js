import { Component } from 'react';

export default class GuestSession extends Component {
  constructor() {
    super();
    this.state = {
      url: new URL('https://api.themoviedb.org'),
      apiKey: '1ad6b21850f623de3fc247a586277fc9',
    };
  }

  async guestSeId(dataReceiver) {
    const url = new URL('3/authentication/guest_session/new', this.state.url);
    url.searchParams.set('api_key', this.state.apiKey);
    try {
      const result = await fetch(url);
      if (!result.ok) throw new Error('Failed to Fetch');
      const resultJson = await result.json();
      dataReceiver(resultJson);
      return await resultJson.guest_session_id;
    } catch (e) {
      throw new Error('ошибка при получении идентификатора гостевой сессии');
    }
  }

  async getSession(guestSessionId, page, callback) {
    const url = new URL(`3/guest_session/${guestSessionId}/rated/movies`, this.state.url);
    url.searchParams.set('api_key', this.state.apiKey);
    url.searchParams.set('page', page);
    url.searchParams.set('sort_by', 'created_at.asc');
    try {
      const result = await fetch(url);
      if (!result.ok) throw new Error(`Failed to Fetch: ${url} Description: ${result.statusText}`);
      const sessionJson = await result.json();
      callback(sessionJson);
      return await sessionJson;
    } catch (e) {
      throw new Error('Ошибка при получении сохраненных фильмов');
    }
  }

  async postRateStars(token, movieId, countStars) {
    const sId = token;
    const url = new URL(`3/movie/${movieId}/rating`, this.state.url);
    url.searchParams.set('api_key', this.state.apiKey);
    url.searchParams.set('guest_session_id', sId);
    try {
      const result = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ value: countStars }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (!result.ok) throw new Error(`Failed to Fetch: ${url} Description: ${result.statusText}`);
      const x = await result;
      return x;
    } catch (e) {
      throw new Error('Ошибка отправки оценки');
    }
  }
}
