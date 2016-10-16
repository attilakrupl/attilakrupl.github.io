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

//add tile layer to map
L.tileLayer('https://tile01.maptoolkit.net/terrain/{z}/{x}/{y}.png').addTo(mymap);

//define http request
function myRequest(method, url, data, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('content-type', 'text/plain');
  xhr.onload = () => {
    cb(xhr.responseText);
  };
  xhr.send(data);
}

//runs a request which returns with the cafe descriptions, binds them to the location markers and adds them to the map.
function feedDescriptionIntoLocationObject(parameters, location) {
  myRequest('GET', parameters, '', (description) => {
    location.bindPopup(description.features[0].properties.description).addTo(mymap);
  });
}

//displays amenities and calls feedDescriptionIntoLocationObject which adds description to markers
function showPredefinedAmenities(record) {
  JSON.parse(record).features.forEach((e) => {
    var location = L.geoJson(e);
    var parameterList = 'https://items.maptoolkit.net?apiKey=guest&ids=[' + e.properties.id + ']&thumbnail_size=200×156';
    feedDescriptionIntoLocationObject(parameterList, location);
  });
}

//get request to return amenities with the showPredefinedAmenities callback to display these
function getContent(parameters) {
  myRequest('GET', parameters, '', (cafes) => {
    showPredefinedAmenities(cafes);
  });
}

//shows Vienna as default location if location can't be found
function showDefaultLocation(e) {
  latLngZ = [48.2, 16.3, 10]
  mymap.setView([latLngZ[0], latLngZ[1]], latLngZ[2]);
  var parameters = 'https://index.maptoolkit.net/near?apiKey=' + apiKey + '&lat=' + latLngZ[0] + '&lng=' + latLngZ[1] + '&resources={"osm":{"kv":"amenity=cafe"}}';
  getContent(parameters);
  return latLngZ;
}

//shows browser location if location service is enabled on device/browser
function showMyLocation(e) {
  latLngZ = [e.latlng.lat, e.latlng.lng, 15]
  mymap.setView([latLngZ[0], latLngZ[1]], latLngZ[2]);
  var parameters = 'https://index.maptoolkit.net/near?apiKey=' + apiKey + '&lat=' + latLngZ[0] + '&lng=' + latLngZ[1] + '&resources={"osm":{"kv":"amenity=cafe"}}';
  getContent(parameters);
  return latLngZ;
}

//Event listeners and locating
mymap.on('locationerror', showDefaultLocation);
mymap.on('locationfound', showMyLocation);
mymap.on('click', showMyLocation);
mymap.locate();
