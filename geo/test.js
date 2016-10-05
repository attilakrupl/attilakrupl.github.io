'use strict';

//constant values of GET request which are needed to get all the cafes
const path = 'https://index.maptoolkit.net/near/';
const JSONresource = '{"osm":{"kv":"amenity=cafe"}}';
const apiKey = 'guest';

//create Leaflet map object
const mymap = L.map('mapid');

//define own variables, arrays
var latLngZ = [];
var listOfAmenities = [];

//define http request
function myRequest(method, url, data, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  // xhr.setRequestHeader('content-type', 'application/json; charset=utf-8');
  xhr.onload = () => {
    cb(xhr.responseText);
  };
  xhr.send(data);
}

//add tile layer to map
L.tileLayer('http://tile01.maptoolkit.net/terrain/{z}/{x}/{y}.png').addTo(mymap);


function showPredefinedAmenities(record) {
  JSON.parse(record).features.forEach((e) => {
    var location = L.geoJson(e);
    var parameterList = 'http://items.maptoolkit.net?apiKey=guest&ids=[' + e.properties.id + ']&thumbnail_size=200×156';
    feedDescriptionIntoLocationObject(parameterList, location);
  });
}

function getContent(parameters) {
  myRequest('GET', parameters, '', (cafes) => {
    showPredefinedAmenities(cafes);
  });
}

function feedDescriptionIntoLocationObject(parameters, location) {
  myRequest('GET', parameters, '', (description) => {
    location.bindPopup(description).addTo(mymap);
  });
}

function showDefaultLocation(e) {
  latLngZ = [48.2, 16.3, 10]
  mymap.setView([latLngZ[0], latLngZ[1]], latLngZ[2]);
  var parameters = 'https://index.maptoolkit.net/near?apiKey=' + apiKey + '&lat=' + latLngZ[0] + '&lng=' + latLngZ[1] + '&resources={"osm":{"kv":"amenity=cafe"}}';
  getContent(parameters);
  return latLngZ;
}

//
function showMyLocation(e) {
  latLngZ = [e.latlng.lat, e.latlng.lng, 15]
  mymap.setView([latLngZ[0], latLngZ[1]], latLngZ[2]);
  var parameters = 'https://index.maptoolkit.net/near?apiKey=' + apiKey + '&lat=' + latLngZ[0] + '&lng=' + latLngZ[1] + '&resources={"osm":{"kv":"amenity=cafe"}}';
  getContent(parameters);
  return latLngZ;
}

//Event listeners and locate event
mymap.on('locationerror', showDefaultLocation);
mymap.on('locationfound', showMyLocation);
mymap.on('click', showMyLocation);
mymap.locate();
