const express = require('express');
const app = express();

app.use(express.static('public'));

const players = [
  {
    name: "Hemant Diwakar",
    birthDate: "8 May 2003",
    age: 22,
    city: "New Delhi",
    role: "batsman all-rounder",
    team: "Delhi U-19",
    height: "167.64 cm",
    parents: "Sushma Diwakar, Jagdish Diwakar"
  }
];

app.get('/api/player/:name', (req, res) => {
  const playerName = req.params.name.toLowerCase();
  const player = players.find(p => p.name.toLowerCase() === playerName);
  if (player) {
    res.json(player);
  } else {
    res.status(404).json({ error: "Player not found" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
