const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const data = require("./zadatak.json");

let songs = [];
var song = {};

function compareStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  return a < b ? -1 : a > b ? 1 : 0;
}

for (let i = 0; i < data.tracks.data.length; i++) {
  song.id = data.tracks.data[i].id;
  song.artist = data.tracks.data[i].artist.name;
  song.title = data.tracks.data[i].title;
  songs.push({ ...song });
}

app.get("/tracks", (req, res) => {
  res.send(songs);
});

app.get("/tracks/:id", (req, res) => {
  let oneSong = data.tracks.data.filter(function (item) {
    return item.id == req.params.id;
  });
  res.send(
    oneSong[0].id + ". " + oneSong[0].artist.name + " - " + oneSong[0].title
  );
});

app.get("/sorted?:sortBy", function (req, res) {
  const query = req.query;
  let sortedData;

  if (query["sortBy"] == "name") {
    sortedData = data.tracks.data.sort(function (a, b) {
      return compareStrings(a.artist.name, b.artist.name);
    });
  } else if (query["sortBy"] == "duration") {
    sortedData = data.tracks.data.sort(
      (a, b) => parseFloat(a.duration) - parseFloat(b.duration)
    );
  }
  res.send(sortedData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
