var ourButton = document.getElementById("our-button");
var ourHeadline = document.getElementById("our-headline");
var listItems = document.getElementById("our-list").getElementsByTagName("li");

for (i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", activateItem);
}

function activateItem() {
  ourHeadline.innerHTML = this.innerHTML;
}

ourButton.addEventListener("click", createNewItem);

function Form() {
  const [movie, setMovie] = React.useState({
    title: "",
    director: "",
    episode_id: "",
    release_date: ""
  });
  console.log(movie);
  return (
    <div class="form">
      <label>Title : </label>
      <input
        type="text"
        onChange={e => {
          console.log(e);
          setMovie({ ...movie, title: e.target.value });
        }}
      />
      <label>Release Date : </label>
      <input
        type="date"
        onChange={e => {
          console.log(e);
          setMovie({
            ...movie,
            release_date: e.target.value.toString("yyyy-mm-dd")
          });
        }}
      />
      <label>Director : </label>
      <input
        type="text"
        onChange={e => {
          console.log(e);
          setMovie({ ...movie, director: e.target.value });
        }}
      />
    </div>
  );
}
