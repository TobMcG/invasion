// This code inspired by Chris Wong <http://chriswhong.com/data-visualization/taxitechblog1/>
// as explained by Zev Ross <http://zevross.com/blog/2014/09/30/use-the-amazing-d3-library-to-animate-a-path-on-a-leaflet-map/>
function createAnimatedLine(collection, svg , g) {

    // Optionally, you may filter the incoming data here.
    //"features" should take the form of an array of GeoJSON objects
    var featuresdata = collection.features.filter(function(d) {
        return d; // #noFilter
    })

    // This function extracts coordinate information from a
    //GeoJSON point and returns the layer point for the map
    function getLayerPoint(d) {
        var y = d.geometry.coordinates[1]
        var x = d.geometry.coordinates[0]
        return map.latLngToLayerPoint(new L.LatLng(y, x));
    }

    // "Stream" transform. This code takes geometries and
    //and transforms them following a geometry-type-specific
    //function (here, we specify point geometry transformation).
    //This function(s) output the geometries in the format needed
    //for the rest of the GeoJSON --> SVG translation process
    var transform = d3.geo.transform({
        point: function(x, y) {
            //create a Leaflet layer point using the given coordinates
            var point = map.latLngToLayerPoint(new L.LatLng(y, x));
            //"stream" that point to the d3 transformation class 
            this.stream.point(point.x, point.y);
        }
    });

    // d3.geo.path translates GeoJSON to SVG path codes.
    //By passing our "transform" class in this way, we
    //alter the way in which that translation happens.
    //The function(s) in our "transform" class are called
    //before d3 completes the rest of the translation process
    var pathGenerator = d3.geo.path().projection(transform);

    // This function generates a line from input points.
    //The data passed to this function will come from the
    //object that calls it. (i.e. ".data(<myData>).enter()"")
    var lineGenerator = d3.svg.line().interpolate("linear")
        .x(function(d) { return getLayerPoint(d).x; })
        .y(function(d) { return getLayerPoint(d).y; });

    // These are the points that make up the path
    var waypoints = g.selectAll(".waypoints")
        .data(featuresdata).enter()
        .append("circle")
        .attr("class", "waypoints")
        .attr("r", 3);

    // This is the path itself. Note that we surround
    //the "featuresdata" with [] to tell d3 to treat
    //all the points as a single line
    var linePath = g.selectAll(".linePath")
        .data([featuresdata]).enter()
        .append("path")
        .attr("class", "linePath");

    // Separate out the start and end points, for easy styling
    var origin = [featuresdata[0]];
    var originANDdestination = [featuresdata[0], featuresdata[featuresdata.length-1]]

    // This circle traces along the "linePath"
    var travelMarker = g.selectAll(".travelMarker")
        .data(origin).enter()
        .append("circle")
        .attr("class", "travelMarker")
        .attr("r", 10);

    travelMarkerNodes.push(travelMarker.node());

    var begin = g.selectAll(".begin")
        .data(origin).enter()
        .append("circle")
        .attr("class", "begin")
        .attr("r", 6);

    /*var text = g.selectAll("text")
        .data(originANDdestination).enter()
        .append("text")
        .text(function(d) {
            // Text comes from the feature's properties
            return d.properties.placeName;
        })
        .attr("class", "locationNames")
        .attr("y", function(d) {
            // This change in position is in addition to
            //the "translate()" in the text's style atrribute
            return -10;
        });*/

    // Reset the view when the zoom changes
    map.on("viewreset", reset);

    // Initialize lines on map...
    reset();

    // Reposition the SVG to cover the features
    function reset() {

        // Get bounds of whole line
        /*var bounds = pathGenerator.bounds(collection),
            topLeft = bounds[0],
            bottomRight = bounds[1];*/

        // Set the size and location of the overall
        // SVG container to encompass the whole line
        svg.attr("width", $('#map').width())
            .attr("height", $('#map').height())
            // Specifying "left" and "top" values
            //gives the graphic breathing room
            .style("left", /*topLeft[0] - 50*/0 + "px")
            // Otherwise, we might only see the southeast
            //quadrant of a circle marker (the rest would be cut-off)
            .style("top", /*topLeft[1] - 50*/0 + "px");

        // Translate the <g> element within <svg> accordingly,
        //from the upper-left corner of the <svg> element
        g.attr("transform", "translate(" + (/*-topLeft[0] + 5*/0) + "," + (/*-topLeft[1] + 5*/0) + ")");

        // Translate other elements accordingly,
        //from the upper-left corner of the <g> element,
        //using our "getLayerPoint" function to convert
        //from Lat/Lng to Map Layer Units
        waypoints.attr("transform", translateLayerPoint);
        begin.attr("transform", translateLayerPoint);
        travelMarker.attr("transform", translateLayerPoint);
        //text.attr("transform", translateLayerPoint);
        function translateLayerPoint(d) {
            return "translate(" +
                getLayerPoint(d).x + "," +
                getLayerPoint(d).y + ")";
        }

        // Finally, generate the path
        //for the line through the waypoints
        linePath.attr("d", lineGenerator);
        animate();

    }

    // This function animates the line and travelMarker.
    //"stroke-dasharray" expects a value like "500,30", where
    //500 is the length of the dash and 30 is the length of
    //the gap. For example...
    //  With a 500-long line and a value of "500,0", you would
    //have a 500-long dash and a 0-long gap. Essentially a solid line.
    //  With a value of "500,500", you would have a 500px line
    //followed by a 500px gap.
    //  Below, the "attrTween" operator is fed values starting with
    //"0,500" (a complete gap), and increasing through "500,500"
    //(a complete line). "500" is replaced with the total length of the line
    function animate() {

        linePath.transition().ease("linear")
            .duration(linePath.node().getTotalLength()*15)
            .attrTween("stroke-dasharray", function() {
                return function(t) { //"t" is the fraction of time 0-1 since transition began

                    //total length of path
                    var l = linePath.node().getTotalLength();

                    // "p" is the point on the line (coordinates) at a given length
                    //along the line. For example, if l=50 and we're midway through
                    //(t = 0.5) then the length would be 25. This code returns the
                    //point at that length along the line
                    var p = linePath.node().getPointAtLength(t * l);

                    //Move the travelMarker to that point "p"
                    travelMarker.attr("transform", "translate(" + p.x + "," + p.y + ")");

                    // This function, "interpolate", will take a single value between
                    //0 and 1 as an input, and interpolates between the numbers
                    //embedded in the strings passed to its constructor. For exmaple...
                    //  interpolateString("0,500", "500,500") creates a function that
                    //interpolates between 0-500 for the first number and 500-500
                    //for the second number. interpolate(0.5) would return "250,500"
                    //interpolate = d3.interpolateString("0," + l, l + "," + l);
                    
                    //return interpolate(t);
                    return l+",0"; 

                };
            }).each("end", function() {
                // At the end of the animation, call
                //the transition function again...
                d3.select(this).call(animate); //infinite loop
            });

    }

};