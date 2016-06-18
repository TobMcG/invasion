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

    continuousRe_styling();

});

$('ul#menu li').hover(function() {
    $(this).find("a").css("color", "#C23627");
}, function() {
    $(this).find("a").css("color", "");
});

$('#regStats').hover(function() {
    $(this).stop().animate({ width: regStatsWidth(), }, 3000);
}, function() {
    $(this).stop().animate({ width: 30, }, 3000);
});
