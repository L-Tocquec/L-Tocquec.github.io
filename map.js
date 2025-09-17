const latitude = 48.6980;
const longitude = 2.1740;

const map = L.map('map').setView([latitude, longitude], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([latitude, longitude])
  .addTo(map)
  .bindPopup("Mon bureau 🏢<br>Venez me dire bonjour !")
  .openPopup();
