function loadBackgroundPic(element, image, position) {

    if ( !$(element).is($('.active')) ) {

        d3.select('#backgroundImage')
        .transition().duration(1000)
        .style("opacity", 0).each("end", function() {
            $('#backgroundImage').css("background-image", "url(assets/pics/"+image+".jpg)");
            $('#backgroundImage').css("background-position", position);
        })
        .transition().duration(1000)
        .style("opacity", 1);

        deanimateMenuItem($('.active'));
        $('.active').removeClass('active');
        setupHoverEvents();

        $(element).addClass('active');
        $(element).off("mouseenter mouseleave");
        $(element).css("background-color", "#C23627");
        $(element).css("bottom-border-color", "#C23627");
        $(element).find("a:first-child").css("color", "white");
        $(element).find("a:first-child").animate({
            right: $(element).width() //width of the content area of <li>
                -$(element).find("a:first-child").width(), //the width of the text itself
        }, {
            duration: 1000,
            queue: false,
        });

    }

}

function animateMenuItem(menuItem) {

    if ($(menuItem).find("a:first-child").css("color") != "rgb(255, 255, 255)") {
        $(menuItem).find("a:first-child").css("color", "#C23627");
    }

    $(menuItem).css("border-bottom-color", "#C23627");
    $(menuItem).find("a:first-child").animate({
        right: $(menuItem).width() //width of the content area of <li>
            +0.8*parseFloat($(menuItem).css("font-size")) //the <li> margin is 0.8em
            -$(menuItem).find("a:first-child").width(), //the width of the text itself
    }, {
        duration: 1000,
        queue: false,
    });

}

function deanimateMenuItem(menuItem) {

    $(menuItem).find("a:first-child").css("color", "");
    $(menuItem).css("border-bottom-color", "").css("background-color", "");
    $(menuItem).find("a:first-child").animate({
        right: 0.8*parseFloat($(menuItem).css("font-size")),
    }, {
        duration: 1000,
        queue: false,
    });

}

function register() {
    console.log('register');
}

function setupHoverEvents() {

    $('ul#menu li').hover(function() {
        animateMenuItem(this);
    }, function() {
        deanimateMenuItem(this);
    });

}

// KICKOFF!
setupHoverEvents();