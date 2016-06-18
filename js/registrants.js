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