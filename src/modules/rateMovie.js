async function rateMovie(guestSessionId, movieId, stars) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/rating?guest_session_id=${guestSessionId}`;
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWQ2YjIxODUwZjYyM2RlM2ZjMjQ3YTU4NjI3N2ZjOSIsInN1YiI6IjY0ZWU0ODdmY2FhNTA4MDE0YzhhOTU1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._68FhU65OQc3syJxfAuvCI02Iuc1OgCu75WBedJc6Zw',
    },
    body: JSON.stringify({ value: stars }),
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(`error:${err}`));
}

export default rateMovie;
