

function fetchMovieData(movieTitle) {
  const apiUrl = `http://www.omdbapi.com/?apikey=adad0835&t=${encodeURIComponent(movieTitle)}`;
  return axios.get(apiUrl);
}

function displayMovieInfo(data) {
  const titleElement = document.getElementById('title');
  const releasedElement = document.getElementById('released');
  const directorElement = document.getElementById('director');

  titleElement.textContent = data.Title || 'N/A';
  releasedElement.textContent = data.Released || 'N/A';
  directorElement.textContent = data.Director || 'N/A';
}

function handleSearch() {
  const searchInput = document.getElementById('mySearch').value;
  if (searchInput) {
    fetchMovieData(searchInput)
      .then((response) => {
        displayMovieInfo(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert('Error fetching movie data. Please try again later.');
      });
  }
}

document.getElementById('searchForm').addEventListener('submit', (event) => {
  event.preventDefault();
  handleSearch();
});

document.getElementById('searchButton').addEventListener('click', () => {
  handleSearch();
});