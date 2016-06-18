function loadSplash() {

    d3.select('#backgroundImage')
    .transition().duration(2000)
    .style("opacity", 0).each("end", function() {
    	$('#backgroundImage').css("background-image", "url(assets/pics/saxophone-jazzBand.jpg)");
        $('#backgroundImage').css("background-position", "left bottom");
    })
    .transition().duration(2000)
    .style("opacity", 1);

}

function loadInstructors() {

    d3.select('#backgroundImage')
    .transition().duration(2000)
    .style("opacity", 0).each("end", function() {
    	$('#backgroundImage').css("background-image", "url(assets/pics/cement-shoes.jpg)");
        $('#backgroundImage').css("background-position", "left bottom");
    })
    .transition().duration(2000)
    .style("opacity", 1);

}

function loadMusic() {

    d3.select('#backgroundImage')
    .transition().duration(2000)
    .style("opacity", 0).each("end", function() {
    	$('#backgroundImage').css("background-image", "url(assets/pics/night-vintage-music-bokeh.jpg)");
        $('#backgroundImage').css("background-position", "center center");
    })
    .transition().duration(2000)
    .style("opacity", 1);

}