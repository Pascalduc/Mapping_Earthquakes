// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([56.4, -102.2], 4);

//  Add a Pin marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

//  add a circle marker in meters
let circle = L.circle([34.0522, -118.2437], {
  radius: 300,
  color: 'lightyellow',
  fillColor: 'lightyellow'
  }).addTo(map);

// add a circleMarker alternative in pixel (resize with zoom)
  L.circleMarker([37.3541, -121.9552], {
  radius: 30,
  color: 'black',
  fillColor: '#ffffa1'
  }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
accessToken: API_KEY
});
// styles available here: https://docs.mapbox.com/api/maps/styles/

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


// mapbox://styles/mapbox/dark-v10