var mapboxTiles = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidG9iaW5tY2ciLCJhIjoiY2lvYm5hNzk4MDRjaXZwa2oyemxxOW1wbSJ9.8DdOleAlRSYoMOX-7FVklg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, '
    + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, '
    + 'Imagery © <a href="http://mapbox.com">Mapbox</a>',
});

var map = L.map('map', {
    dragging: false,
    touchZoom: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    zoomControl: false,
    maxZoom: 6,
}).addLayer(mapboxTiles)
.addControl(new L.control.zoom({ position: "topright" }))
.setView([43.09381,-89.35434], 6);

var travelMarkerNodes = [];

$(window).ready(function() {
    for (var i = 0; i < registrants.length; i++) {

        var shortName = registrants[i].placeShort;

        // Setup containers to hold graphics...
        //If you don't include the "leaflet-zoom-hide" class when a user
        //zooms in or out you will still see the phantom original SVG 
        var svg = d3.select(map.getPanes().overlayPane).append("svg");
        var g = svg.append("g").attr("class", "leaflet-zoom-hide");

        if (registrants[i].transport == 'drive') {
            var json = buildJSONfromCoordString(drivingRouteCoordStrings[shortName]);
        } else if (registrants[i].transport == 'fly') {
            var json = buildJSONfromCoordString(flyingRouteCoordStrings[shortName]);
        } else {
            console.log('invalid transport value');
        }

        createAnimatedLine(json, svg, g);

    }

    // Remove and re-append all travelMarkers to the end
    //of the last <svg>, so they will always be on top
    var travelMarkers = d3.selectAll('.travelMarker');
    travelMarkers.remove();
    for (var i = 0; i < travelMarkerNodes.length; i++) {
        svg.append(function() {
            return travelMarkerNodes[i];
        });
    }

});

function buildJSONfromCoordString(string) {

    var json = {
        type: 'FeatureCollection',
        crs: {
            type: 'name',
            properties: {
                name: 'urn:ogc:def:crs:OGC:1.3:CRS84',
            },
        },
        features: [],
    };

    var coordinates = string.split("|");
    for (var i = 0; i < coordinates.length; i++) {

        var thisPoint = coordinates[i].split(",");
        json.features[i] = {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [thisPoint[0], thisPoint[1]],
            }
        };

    }

    return json;
}

var drivingRouteCoordStrings = [];
var flyingRouteCoordStrings = [];
var registrants = [
    {
        placeName: 'Des Moines',
        placeShort: 'desMoines',
        transport: 'drive',
        registrants: 12,
        instructors: [],
    },{
        placeName: 'Indianapolis',
        placeShort: 'indianapolis',
        transport: 'drive',
        registrants: 5,
        instructors: [],
    },{
        placeName: 'Chicago',
        placeShort: 'chicago',
        transport: 'drive',
        registrants: 30,
        instructors: ['Instructor3'],
    },{
        placeName: 'Iowa City',
        placeShort: 'iowaCity',
        transport: 'drive',
        registrants: 7,
        instructors: [],
    },{
        placeName: 'Milwaukee',
        placeShort: 'milwaukee',
        transport: 'drive',
        registrants: 15,
        instructors: [],
    },{
        placeName: 'St. Louis',
        placeShort: 'stLouis',
        transport: 'drive',
        registrants: 13,
        instructors: ['Instructor4','Instructor5'],
    },{
        placeName: 'Minneapolis/St. Paul',
        placeShort: 'twinCities',
        transport: 'drive',
        registrants: 22,
        instructors: ['Instructor1','Instructor2'],
    },{
        placeName: 'Denver',
        placeShort: 'denver',
        transport: 'fly',
        registrants: 4,
        instructors: ['Instructor6','Instructor7'],
    },/*{
        placeName: 'Washington, D.C.',
        placeShort: 'washingtonDC',
        transport: 'fly',
        registrants: 6,
        instructors: [],
    },*/{
        placeName: 'Madrid',
        placeShort: 'madrid',
        transport: 'fly',
        registrants: 3,
        instructors: [],
    },
];