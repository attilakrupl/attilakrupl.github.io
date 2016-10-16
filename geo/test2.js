var newc = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "coordinates": [
          15.6768920999998,
          48.4737942000005
        ],
        "type": "Point"
      },
      "properties": {
        "resource": "osm",
        "data": {
          "addr:postcode": "3550",
          "addr:housenumber": "5",
          "addr:street": "Kornplatz",
          "name": "Caf� & Wein",
          "website": "http://www.ursinhaus.at/cafeweinbar.html",
          "amenity": "cafe"
        },
        "id": 103524394,
        "remoteid": "1829944769",
        "locale": null,
        "is_enabled": 1,
        "href": null,
        "language": null,
        "modify_time": "2016-08-19 23:38:24",
        "thumbnail": "http://staticmap.maptoolkit.net/?size=200×156&format=jpeg&marker=center:48.4737942000005,15.6768920999998&zoom=14&center=48.4737942000005,15.6768920999998",
        "description": "Caf� & Wein",
        "country": null,
        "create_time": "2014-05-26 08:40:39"
      }
    }
  ]
}

console.log(newc.features[0].properties.description);
