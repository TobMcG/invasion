$(window).on('resize', continuousRe_styling);

function regStatsWidth() {
	return parseInt($(window).width()-349);
}

function continuousRe_styling() {

	var windowWidth = parseInt($(window).width());

    $('ul#menu').css("width", windowWidth-20);
    $('#stats').css("width", regStatsWidth()-60);
    $('#regStats').css("width", 30);
    
}