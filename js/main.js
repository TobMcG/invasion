function loadBackgroundPic(element, image, position) {

    var grayscale = '0.6';
    $('#mainContent').animate({ opacity: 0, }, { duration: 1000, });
    deanimateMenuItem($('.active'));
    setupHoverEvents();

    if ( !$(element).is($('.active')) ) {

        $('.active').removeClass('active');
        $('#mainContent').animate({ opacity: 1, }, { duration: 1000, });

        $(element).addClass('active')
        .off("mouseenter mouseleave")
        .css("background-color", "#C23627")
        .css("border-bottom-color", "#C23627")
        .find("a:first-child").css("color", "white")
        .animate({
            right: $(element).width() //width of the content area of <li>
                +0.4*parseFloat($(element).css("font-size")) //the <li> margin is 0.8em
                -$(element).find("a:first-child").width(), //the width of the text itself
        }, { duration: 1000, queue: false, });

    } else {
        $('.active').removeClass('active');
        image = 'saxophone-jazzBand';
        position = 'left bottom';
        grayscale = '0';
    }

    d3.select('#backgroundImage').transition().duration(1000)
    .style("opacity", 0).each("end", function() {

        $('#backgroundImage').css("background-position", position)
        .css("background-image", "url(assets/pics/"+image+".jpg)")
        .css("filter", "grayscale(1)").css("-webkit-filter", "grayscale("+grayscale+")");
        loadMainContent(image);

    }).transition().duration(1500)
    .style("opacity", 1);

}

function generateContentHTML(htmlArray) {

    var html = '';

    for (var i = 0; i < htmlArray.length; i++) {
        if (htmlArray[i].heading || htmlArray[i].subtitle) {
            html += '<h2>';
            if (htmlArray[i].heading) { html += htmlArray[i].heading; }
            if (htmlArray[i].subtitle) { html += ' <span>'+htmlArray[i].subtitle+'</span>'; }
            html += '</h2>';
        }
        for (var j = 0; j < htmlArray[i].subheadings.length; j++) {
            html += '<h3>'+htmlArray[i].subheadings[j].subheading+'</h3>';
            for (var k = 0; k < htmlArray[i].subheadings[j].paragraphs.length; k++) {
                html += '<p>'+htmlArray[i].subheadings[j].paragraphs[k]+'</p>';
            }
        }
    }

    return html;

}

// KICKOFF!
$('#mainContent').css("opacity", 0);
$('#mobileMenu').on('click', function() {

    $('ul#menu li').off('click');

    $('#mobileMenu').css("opacity", 0);
    $('ul#menu li').css("display", "block");
    $('ul#menu').css("height", "100%");

    $('ul#menu li').on('click', function() {

        $('#mobileMenu').css("opacity", "");
        $('ul#menu li').css("display", "");
        $('ul#menu').css("height", "");

    });

});
setupHoverEvents();