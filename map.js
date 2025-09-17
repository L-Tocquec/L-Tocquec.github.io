const latitude = 48.70028;  
const longitude = 2.17847;  

const map = L.map('map').setView([latitude, longitude], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([latitude, longitude])
  .addTo(map)
  .bindPopup("My office in Orsay 🏢")
  .openPopup();
