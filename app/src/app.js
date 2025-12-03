let allPlaylists = [];

// Create empty playlist object
const playlist = {
  name: playlistName,
  description: playlistDesc,
  songs: [], // empty playl ist for now
};

allPlaylists.push(playlist);

const songs = [
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
              <option disabled selected>${playlist.name}}</option>
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
});

/* const addToPlaylist = document.querySelector(".addToPlaylist");
addToPlaylist.addEventListener("click", function () {}); */

const submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", function () {
  const nameInput = document.querySelector("#playlistName");
  const descInput = document.querySelector("#playlistDesc");

  const playlistName = nameInput.value;
  const playlistDesc = descInput.value;

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
    console.log("Playlist clicked:", playlist.name);
    document.querySelector(".form").classList.add("hidden");
    document.querySelector(".submitBtn").classList.add("hidden");
    if (playlist.songs.length === 0) {
      container.innerHTML = `
      <div class="emptyMsg">
        <h2>Your playlist is empty</h2>
        <p>Add songs to get started!</p>
      </div>
    `;
      return;
    }
  });

  nameInput.value = "";
  descInput.value = "";
});

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
              <option disabled selected>${playlist.name}}</option>
            </select>
          </div>
          `;
    container.innerHTML += html;
    document.querySelector(".form").classList.add("hidden");
    document.querySelector(".submitBtn").classList.add("hidden");
  });
});

const addSong = document.querySelector("#addSong");

addSong.addEventListener("click", function () {
  container.innerHTML = "";

  const html = `
            <h1>under constuction</h1>
          `;
  container.innerHTML += html;
  document.querySelector(".form").classList.add("hidden");
  document.querySelector(".submitBtn").classList.add("hidden");
});
