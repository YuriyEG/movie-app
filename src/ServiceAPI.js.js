const name = 'porno';

const url = `https://api.themoviedb.org/3/search/movie?api_key=1ad6b21850f623de3fc247a586277fc9&query=${name}`;

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
  .then((json) => {})
  .catch((err) => console.error(`error:${err}`));
