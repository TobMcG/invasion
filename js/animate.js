function setupHoverEvents() {

    $('ul#menu li').hover(function() {
        animateMenuItem(this);
    }, function() {
        deanimateMenuItem(this);
    });

}

function animateMenuItem(menuItem) {

    if ($(menuItem).find("a:first-child").css("color") != "rgb(255, 255, 255)") {
        $(menuItem).find("a:first-child").css("color", "#C23627");
    }

    $(menuItem).css("border-bottom-color", "#C23627")
    .find("a:first-child").animate({
        right: $(menuItem).width() //width of the content area of <li>
            +0.8*parseFloat($(menuItem).css("font-size")) //the <li> margin is 0.8em
            -$(menuItem).find("a:first-child").width(), //the width of the text itself
    }, { duration: 1000, queue: false, });

}

function deanimateMenuItem(menuItem) {

    $(menuItem).css("border-bottom-color", "").css("background-color", "")
    .find("a:first-child").css("color", "").animate({
        right: 0.8*parseFloat($(menuItem).css("font-size")),
    }, { duration: 1000, queue: false, });

}