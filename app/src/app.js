let allPlaylists = [];

let songs = [
  // Howl's Moving Castle
  {
    name: "Merry-Go-Round of Life",
    artist: "Joe Hisaishi",
    album: "Howl's Moving Castle",
    length: "5:11",
    image: "./1.jpg",
  },
  {
    name: "The Flower Garden",
    artist: "Joe Hisaishi",
    album: "Howl's Moving Castle",
    length: "2:58",
    image: "./1.jpg",
  },
  {
    name: "Opening Song - Merry-Go-Round of Life",
    artist: "Joe Hisaishi",
    album: "Howl's Moving Castle Soundtrack",
    length: "2:33",
    image: "./1.jpg",
  },

  // Kiki's Delivery Service
  {
    name: "A Town with an Ocean View",
    artist: "Joe Hisaishi",
    album: "Kiki's Delivery Service",
    length: "3:00",
    image: "./2.jpg",
  },
  {
    name: "On a Clear Day",
    artist: "Joe Hisaishi",
    album: "Kiki's Delivery Service",
    length: "2:16",
    image: "./2.jpg",
  },
  {
    name: "A Town with an Ocean View",
    artist: "Joe Hisaishi",
    album: "Kiki's Delivery Service",
    length: "3:58",
    image: "./2.jpg",
  },

  // Laputa: Castle in the Sky
  {
    name: "The Girl Who Fell From the Sky",
    artist: "Joe Hisaishi",
    album: "Laputa: Castle in the Sky",
    length: "2:27",
    image: "./3.jpg",
  },
  {
    name: "Castle in the Sky",
    artist: "Joe Hisaishi",
    album: "Laputa: Castle in the Sky",
    length: "4:37",
    image: "./3.jpg",
  },

  // My Neighbor Totoro
  {
    name: "The Path of the Wind",
    artist: "Joe Hisaishi",
    album: "My Neighbor Totoro",
    length: "3:42",
    image: "./4.jpg",
  },

  // Princess Mononoke
  {
    name: "The Legend of Ashitaka",
    artist: "Joe Hisaishi",
    album: "Princess Mononoke",
    length: "4:39",
    image: "./5.jpg",
  },

  // Spirited Away
  {
    name: "One Summer Day",
    artist: "Joe Hisaishi",
    album: "Spirited Away",
    length: "3:09",
    image: "./6.jpg",
  },

  // Nostalgia ~ Piano Stories II
  {
    name: "il porco rosso",
    artist: "Joe Hisaishi, Orchestra Città di Ferrara",
    album: "NOSTALGIA~PIANO STORIES II~",
    length: "4:52",
    image: "./7.jpg",
  },
  {
    name: "Nostalgia",
    artist: "Joe Hisaishi, Orchestra Città di Ferrara",
    album: "NOSTALGIA~PIANO STORIES II~",
    length: "3:33",
    image: "./7.jpg",
  },
];

const container = document.querySelector(".container");

songs.forEach((song) => {
  const html = `
        <div class="card" data-name='${song.name}' >
            <h2 class="cardHeader">${song.name}</h2>\
            <h4 class="album">${song.album}</h4>
            <img src="${song.image}" class="img"/>
            <h3 class="artist">${song.artist}</h3>
            <h5 class="length">${song.length}</h5>

            <select class="playlistSelect">
              <option disabled selected>Add To Playlist</option>
              <option disabled selected>Create a playlist to get started</option>
            </select>

        </div>
        `;
  container.innerHTML += html;
});

const createPlaylist = document.querySelector("#createPlaylist");
createPlaylist.addEventListener("click", function () {
  container.innerHTML = "";
  const form = document.querySelector(".form");
  form.classList.remove("hidden");
  const submitBtn = document.querySelector(".submitBtn");
  submitBtn.classList.remove("hidden");
  document.querySelector(".addSong").classList.add("hidden");
});

const songSubmit = document.querySelector(".songSubmit");
songSubmit.addEventListener("click", function () {
  const songNameInput = document.querySelector("#songName");
  const albumInput = document.querySelector("#songAlbum");
  const imageInput = document.querySelector("#songImage");
  const artistInput = document.querySelector("#songArtist");
  const lengthInput = document.querySelector("#songLength");

  const songName = songNameInput.value;
  const songAlbum = albumInput.value;
  const songArtist = artistInput.value;
  const songLength = lengthInput.value;

  const file = imageInput.files[0];
  const imageURL = URL.createObjectURL(file);

  const song = {
    name: songName,
    album: songAlbum,
    image: imageURL,
    artist: songArtist,
    length: songLength,
  };

  songs.unshift(song);

  console.log("Song Name:", songName);
  console.log("Song Album:", songAlbum);
  console.log("Song Artist:", songArtist);
  console.log("Song Length:", songLength);

  console.log("Created Song:", song);

  songNameInput.value = "";
  albumInput.value = "";
  artistInput.value = "";
  lengthInput.value = "";
  imageInput.value = "";

  document.querySelector(".songName").classList.add("hidden");
  document.querySelector(".songAlbum").classList.add("hidden");
  document.querySelector(".songImage").classList.add("hidden");
  document.querySelector(".songArtist").classList.add("hidden");
  document.querySelector(".songLength").classList.add("hidden");
});

const submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", function () {
  const nameInput = document.querySelector("#playlistName");
  const descInput = document.querySelector("#playlistDesc");

  const playlistName = nameInput.value;
  const playlistDesc = descInput.value;

  // Create empty playlist object
  const playlist = {
    name: playlistName,
    description: playlistDesc,
    songs: [], // empty playl ist for now
  };

  allPlaylists.push(playlist);

  // Log the info
  console.log("Playlist Name:", playlistName);
  console.log("Playlist Description:", playlistDesc);

  console.log("Created Playlist:", playlist);

  const btnDiv = document.querySelector(".btns");

  btnDiv.insertAdjacentHTML(
    "beforeend",
    `<button class="playlist">${nameInput.value}</button>`
  );

  const playlistBtn = btnDiv.querySelector(".playlist:last-child");

playlistBtn.addEventListener("click", function () {
  container.innerHTML = "";

  // Hide forms
  document.querySelector(".form").classList.add("hidden");
  document.querySelector(".submitBtn").classList.add("hidden");

  // ⭐ Display playlist name & description
  container.innerHTML = `
    <div class="playlistHeader">
      <h1>${playlist.name}</h1>
      <p>${playlist.description}</p>
    </div>
  `;

  // If no songs yet
  if (playlist.songs.length === 0) {
    container.innerHTML += `
      <div class="emptyMsg">
        <h2>Your playlist is empty</h2>
        <p>Add songs to get started!</p>
      </div>
    `;
    return;
  }

  // ⭐ Display songs in the playlist
  playlist.songs.forEach((song) => {
    const html = `
      <div class="card" data-name='${song.name}' >
          <h2 class="cardHeader">${song.name}</h2>
          <h4 class="album">${song.album}</h4>
          <img src="${song.image}" class="img"/>
          <h3 class="artist">${song.artist}</h3>
          <h5 class="length">${song.length}</h5>
      </div>
    `;
    container.innerHTML += html;
  });
});


  nameInput.value = "";
  descInput.value = "";
});

function activatePlaylistSelects() {
  const selects = document.querySelectorAll(".playlistSelect");

  selects.forEach((select) => {
    select.addEventListener("change", function () {
      const playlistName = select.value;
      const playlist = allPlaylists.find((p) => p.name === playlistName);

      const card = select.closest(".card");
      const songName = card.dataset.name;

      const song = songs.find((s) => s.name === songName);

      console.log(select.value);
      allPlaylists.forEach((playlist) => {
        if (select.value === playlist.name) {
          playlist.songs.push(song);
          console.log("pushed song");
        }
      });
    });
  });
}

const all = document.querySelector("#viewBtn");
all.addEventListener("click", function () {
  container.innerHTML = "";

  songs.forEach((song) => {
    const html = `
          <div class="card" data-name='${song.name}' >
              <h2 class="cardHeader">${song.name}</h2>\
              <h4 class="album">${song.album}</h4>
              <img src="${song.image}" class="img"/>
              <h3 class="artist">${song.artist}</h3>
              <h5 class="length">${song.length}</h5>

              <select class="playlistSelect">
                <option disabled selected>Add To Playlist</option>
                ${
                  allPlaylists.length === 0
                    ? `<option disabled selected>Create a playlist to get started</option>`
                    : allPlaylists
                        .map((p) => `<option>${p.name}</option>`)
                        .join("")
                }

          </div>
          `;
    container.innerHTML += html;
    document.querySelector(".form").classList.add("hidden");
    document.querySelector(".submitBtn").classList.add("hidden");
    document.querySelector(".addSong").classList.add("hidden");
  });

  activatePlaylistSelects();
});

const addSong = document.querySelector("#addSong");
addSong.addEventListener("click", function () {
  container.innerHTML = "";
  const songForm = document.querySelector(".addSong");
  songForm.classList.remove("hidden");

  document.querySelector(".form").classList.add("hidden");
  document.querySelector(".submitBtn").classList.add("hidden");
});
