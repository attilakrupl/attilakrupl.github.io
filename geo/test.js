'use strict';

var mymap = L.map('mapid');
L.tileLayer('http://tile01.maptoolkit.net/terrain/{z}/{x}/{y}.png').addTo(mymap);

function showDefaultLocation(e) {
    mymap.setView([48.2, 16.3], 10);
}

function showMyLocation(e) {
  console.log(e);
  mymap.setView([e.latlng.lat, e.latlng.lng], 15);
}

mymap.on('locationerror', showDefaultLocation);
mymap.on('locationfound', showMyLocation);
mymap.locate();

mymap.on('click', showMyLocation);
