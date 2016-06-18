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

continuousRe_styling();