function searchPlayer() {
  const playerName = document.getElementById('player-search').value.trim();
  if (!playerName) return alert("Please enter a player name");

  fetch(`/api/player/${encodeURIComponent(playerName)}`)
    .then(response => {
      if (!response.ok) throw new Error('Player not found');
      return response.json();
    })
    .then(data => {
      document.getElementById('about-section').innerHTML = `
        <h2>About</h2>
        <p>${data.name} is an Indian cricketer known for his role as a ${data.role}.
        Born on ${data.birthDate} in ${data.city}, ${data.name} gained early recognition playing for ${data.team}.
        With a height of ${data.height}, he has built a reputation for his versatile skills on the field.
        Off the field, ${data.name} comes from a supportive family, with parents ${data.parents} backing his cricketing journey.</p>
      `;
    })
    .catch(error => {
      document.getElementById('about-section').innerHTML = `
        <h2>About</h2>
        <p>Player not found. Please try another name.</p>
      `;
    });
}
