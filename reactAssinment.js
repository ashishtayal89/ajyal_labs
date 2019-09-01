/*
The resulting app should:
- use https://swapi.co/api/films/ to fetch initial movies data (episode_id, title, release_date, director)
- display the data in a simple table with headings (excluding episode_id)
- sort the table by any column ascending or descending order by clicking a column heading (default order ASC by episode_id)
- allow deletion of table rows
- allow adding new items via the form with given fields (title, release_date, director)
*/
/*
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
<div id="react-content"></div> 
*/
/*
.moviesTable{
  display: flex;
  flex-wrap: wrap;
}
.moviesTable > div{
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 20%;
  height: 50px;
  background: yellow;
  border: 1pt solid black;
}

.moviesTable > div.tableheader{
  background: orange;
  font-weight: bold;
}

.moviesTable > div.tableheader:hover{
  cursor: pointer;
}

.moviesTable > div.delete i:hover{
  cursor: pointer;
}


body{
  display: flex;
  justify-content: center;
}

div.form{
  display:flex;
  justify-content: space-around;
  border: 1px solid black;
  padding:10px;
  margin-bottom: 20px;
} 
*/

const utils = (() => {
  return {
    sort: function(movies, sortField, sortType) {
      return movies.sort((movie1, movie2) => {
        const value1 =
          sortField !== "release_date"
            ? movie1[sortField]
            : new Date(movie1[sortField]);
        const value2 =
          sortField !== "release_date"
            ? movie2[sortField]
            : new Date(movie2[sortField]);
        if (value1 < value2) {
          return sortType ? -1 : 1;
        }
        if (value1 > value2) {
          return sortType ? 1 : -1;
        }
        return 0;
      });
    }
  };
})();

function Form({ addMovie }) {
  const [movie, setMovie] = React.useState({
    title: "",
    director: "",
    release_date: ""
  });
  return (
    <div class="form">
      <div>
        <label>Title : </label>
        <input
          type="text"
          onChange={e => {
            setMovie({ ...movie, title: e.target.value });
          }}
          placeHolder="Please enter the Title"
        />
      </div>
      <div>
        <label>Director : </label>
        <input
          type="text"
          onChange={e => {
            setMovie({ ...movie, director: e.target.value });
          }}
          placeHolder="Director Name"
        />
      </div>
      <div>
        <label>Release Date : </label>
        <input
          type="date"
          onChange={e => {
            setMovie({
              ...movie,
              release_date: e.target.value.toString("yyyy-mm-dd")
            });
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            addMovie(movie);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

function TableHeader({ updateSortField }) {
  return (
    <React.Fragment>
      <div class="tableheader" onClick={() => updateSortField("title")}>
        Title
      </div>
      <div class="tableheader" onClick={() => updateSortField("director")}>
        Director
      </div>
      <div class="tableheader" onClick={() => updateSortField("release_date")}>
        Release Date
      </div>
      <div class="tableheader">Remove</div>
    </React.Fragment>
  );
}

function TableRow({ movie, index, deleteMovie }) {
  return (
    <React.Fragment>
      <div>{movie.title}</div>
      <div>{movie.director}</div>
      <div>{movie.release_date}</div>
      <div
        class="delete"
        onClick={() => {
          deleteMovie(index);
        }}
      >
        <i class="fas fa-trash-alt" />
      </div>
    </React.Fragment>
  );
}

function Table({ movies, deleteMovie }) {
  const [sortField, setSortField] = React.useState("episode_id");
  const [sortType, setSortType] = React.useState(true);
  const updateSortField = sortField => {
    setSortField(sortField);
    setSortType(!sortType);
  };
  let sortedMovies = utils.sort(movies, sortField, sortType);
  return (
    <div class="moviesTable">
      <TableHeader updateSortField={updateSortField} />
      {sortedMovies.map((movie, index) => (
        <TableRow
          key={movie.episode_id}
          movie={movie}
          index={index}
          deleteMovie={deleteMovie}
        />
      ))}
    </div>
  );
}

function Main() {
  const [movies, setMovies] = React.useState([]);
  const addMovie = movie => {
    let lastEpisodeId = movies.reduce((movie1, movie2) => {
      if (movie1.episode_id > movie2.episode_id) {
        return movie1;
      }
      return movie2;
    }).episode_id;
    let newMovie = { ...movie, episode_id: lastEpisodeId + 1 };
    let updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
  };
  const deleteMovie = index => {
    let updatedMovies = [...movies];
    updatedMovies.splice(index, 1);
    setMovies(updatedMovies);
  };
  if (!movies.length) {
    fetch("https://swapi.co/api/films/")
      .then(response => response.json())
      .then(json => setMovies(json.results));
  }
  return movies.length ? (
    <React.Fragment>
      <Form addMovie={addMovie} />
      <Table movies={movies} deleteMovie={deleteMovie} />
    </React.Fragment>
  ) : (
    <img src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=790b76115d281ecd5a49364863a750dc&rid=giphy.gif" />
  );
}

ReactDOM.render(<Main />, document.getElementById("react-content"));
