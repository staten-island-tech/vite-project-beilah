const songs = [
    // Howl's Moving Castle
    {
        name: "Merry-Go-Round of Life",
        artist: "Joe Hisaishi",
        album: "Howl's Moving Castle",
        length: "5:11",
        image: "",
    },
    {
        name: "The Flower Garden",
        artist: "Joe Hisaishi",
        album: "Howl's Moving Castle",
        length: "2:58",
        image: "",
    },
    {
        name: "Opening Song - Merry-Go-Round of Life",
        artist: "Joe Hisaishi",
        album: "Howl's Moving Castle Soundtrack",
        length: "2:33",
        image: "",
    },

    // Kiki's Delivery Service
    {
        name: "A Town with an Ocean View",
        artist: "Joe Hisaishi",
        album: "Kiki's Delivery Service",
        length: "3:00",
        image: "",
    },
    {
        name: "On a Clear Day",
        artist: "Joe Hisaishi",
        album: "Kiki's Delivery Service",
        length: "2:16",
        image: "",
    },
    {
        name: "A Town with an Ocean View",
        artist: "Joe Hisaishi",
        album: "Kiki's Delivery Service",
        length: "3:58",
        image: "",
    },

    // Laputa: Castle in the Sky
    {
        name: "The Girl Who Fell From the Sky",
        artist: "Joe Hisaishi",
        album: "Laputa: Castle in the Sky",
        length: "2:27",
        image: "",
    },
    {
        name: "Castle in the Sky",
        artist: "Joe Hisaishi",
        album: "Laputa: Castle in the Sky",
        length: "4:37",
        image: "",
    },

    // My Neighbor Totoro
    {
        name: "The Path of the Wind",
        artist: "Joe Hisaishi",
        album: "My Neighbor Totoro",
        length: "3:42",
        image: "",
    },

    // Princess Mononoke
    {
        name: "The Legend of Ashitaka",
        artist: "Joe Hisaishi",
        album: "Princess Mononoke",
        length: "4:39",
        image: "",
    },

    // Spirited Away
    {
        name: "One Summer Day",
        artist: "Joe Hisaishi",
        album: "Spirited Away",
        length: "3:09",
        image: "",
    },

    // Nostalgia ~ Piano Stories II
    {
        name: "il porco rosso",
        artist: "Joe Hisaishi, Orchestra Città di Ferrara",
        album: "NOSTALGIA~PIANO STORIES II~",
        length: "4:52",
        image: "",
    },
    {
        name: "Nostalgia", 
        artist: "Joe Hisaishi, Orchestra Città di Ferrara",
        album: "NOSTALGIA~PIANO STORIES II~",
        length: "3:33",
        image: "",
    },
];

const container = document.querySelector(".container");

songs.forEach((song) => {
  const html = `
        <div class="card" data-name='${song.name}' >
          <h2 class="cardHeader">${song.name}</h2>
          <img class="img" src=${song.image}/>
        </div>
        `;
  container.innerHTML += html;
});

console.log('hailey succs')