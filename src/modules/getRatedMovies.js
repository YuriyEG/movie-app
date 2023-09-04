async function getRated(guestSesId, callback) {
  // const fetch = require('node-fetch');

  const url = `https://api.themoviedb.org/3/guest_session/${guestSesId}/rated/movies?language=en-US&page=1`;
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
      console.log(json, 'iz modulya getRated');
      callback(json);
    })
    .catch((err) => console.error(`error:${err}`));
}

export default getRated;
