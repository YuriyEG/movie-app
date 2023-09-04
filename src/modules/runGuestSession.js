async function runGuest(callback) {
  console.log('runguest');

  const url = 'https://api.themoviedb.org/3/authentication/guest_session/new';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWQ2YjIxODUwZjYyM2RlM2ZjMjQ3YTU4NjI3N2ZjOSIsInN1YiI6IjY0ZWU0ODdmY2FhNTA4MDE0YzhhOTU1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._68FhU65OQc3syJxfAuvCI02Iuc1OgCu75WBedJc6Zw',
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      callback(json.guest_session_id);
      // return json.guest_session_id;
    })
    .catch((err) => console.error(`error:${err}`));
}

export default runGuest;
