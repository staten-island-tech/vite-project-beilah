const songs = [
  // Howl's Moving Castle
  {
    name: "Merry-Go-Round of Life",
    artist: "Joe Hisaishi",
    album: "Howl's Moving Castle",
    length: "5:11",
    image: "src/1.jpg",
  },
  {
    name: "The Flower Garden",
    artist: "Joe Hisaishi",
    album: "Howl's Moving Castle",
    length: "2:58",
    image: "src/1.jpg",
  },
  {
    name: "Opening Song - Merry-Go-Round of Life",
    artist: "Joe Hisaishi",
    album: "Howl's Moving Castle Soundtrack",
    length: "2:33",
    image: "src/1.jpg",
  },

  // Kiki's Delivery Service
  {
    name: "A Town with an Ocean View",
    artist: "Joe Hisaishi",
    album: "Kiki's Delivery Service",
    length: "3:00",
    image: "src/2.jpg",
  },
  {
    name: "On a Clear Day",
    artist: "Joe Hisaishi",
    album: "Kiki's Delivery Service",
    length: "2:16",
    image: "src/2.jpg",
  },
  {
    name: "A Town with an Ocean View",
    artist: "Joe Hisaishi",
    album: "Kiki's Delivery Service",
    length: "3:58",
    image: "src/2.jpg",
  },

  // Laputa: Castle in the Sky
  {
    name: "The Girl Who Fell From the Sky",
    artist: "Joe Hisaishi",
    album: "Laputa: Castle in the Sky",
    length: "2:27",
    image: "src/3.jpg",
  },
  {
    name: "Castle in the Sky",
    artist: "Joe Hisaishi",
    album: "Laputa: Castle in the Sky",
    length: "4:37",
    image: "src/3.jpg",
  },

  // My Neighbor Totoro
  {
    name: "The Path of the Wind",
    artist: "Joe Hisaishi",
    album: "My Neighbor Totoro",
    length: "3:42",
    image: "src/4.jpg",
  },

  // Princess Mononoke
  {
    name: "The Legend of Ashitaka",
    artist: "Joe Hisaishi",
    album: "Princess Mononoke",
    length: "4:39",
    image: "src/5.jpg",
  },

  // Spirited Away
  {
    name: "One Summer Day",
    artist: "Joe Hisaishi",
    album: "Spirited Away",
    length: "3:09",
    image: "src/6.jpg",
  },

  // Nostalgia ~ Piano Stories II
  {
    name: "il porco rosso",
    artist: "Joe Hisaishi, Orchestra Città di Ferrara",
    album: "NOSTALGIA~PIANO STORIES II~",
    length: "4:52",
    image: "src/7.jpg",
  },
  {
    name: "Nostalgia",
    artist: "Joe Hisaishi, Orchestra Città di Ferrara",
    album: "NOSTALGIA~PIANO STORIES II~",
    length: "3:33",
    image: "src/7.jpg",
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
        </div>
        `;
  container.innerHTML += html;
});

console.log("hailey succs");
