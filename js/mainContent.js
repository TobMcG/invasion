/*$('#mainContent div').html(generateContentHTML([
    {
        heading: '',
        subheadings: [
            {
                subheading: '',
                paragraphs: [
                    '',
                    '',
                ],
            },
            {
                subheading: '',
                paragraphs: [
                    '',
                    '',
                ],
            },
        ],
    },
    {
        heading: '',
        subheadings: [
            {
                subheading: '',
                paragraphs: [
                    '',
                    '',
                ],
            },
        ],
    },
]));*/
function loadMainContent(image) {

    switch (image) {
    case 'saxophone-jazzBand':

        $('#mainContent div').html("");
        break;

    case 'tower-clock':

        $('#mainContent div').html(generateContentHTML([
            {
                subheadings: [
                    {
                        subheading: 'Friday the 3<sup>rd</sup>',
                        paragraphs: [
                            '7:30pm — Check-in opens (Tempo Dance Studio)',
                            '7:30–8:15pm — Beginning swing dance lesson',
                            '8:15–11:45pm — DJ\'d Dance',
                            '10:30pm — <span style="text-decoration: underline;">Jack and Jill</span> preliminary competition',
                        ],
                    },
                    {
                        subheading: 'Saturday the 4<sup>th</sup>',
                        paragraphs: [
                            '9:45am — Check-in (Overture Center)',
                            '10:00am–12:30pm — Morning class',
                            '12:30–2pm Lunch Break',
                            '2–4:30pm — Afternoon class',
                            '8:00–11:45pm — Dance — <span style="font-style: italic;">Please pick up the location flier for the late night dance before you leave</span>',
                            'First Band Break— <span style="text-decoration: underline;">Charleston</span> Competition',
                            'Second Band Break— <span style="text-decoration: underline;">Jack and Jill</span> Finals',
                            'Midnight–? — Late night dance',
                        ],
                    },
                    {
                        subheading: 'Sunday the 5<sup>th</sup>',
                        paragraphs: [
                            '10am–11:30 — Morning class (Overture Center)',
                            '1:00–2:30pm — Afternoon class (Overture Center)',
                        ],
                    },
                ],
            },
        ]));

        break;
    
    case 'cement-shoes':

        $('#mainContent div').html(generateContentHTML([
            {
                //subtitle: 'Venues',
                subheadings: [{
                    subheading: 'The Overture Center for the Arts',
                    paragraphs: [
                        '201 State Street',
                        'Madison, WI 53703',
                        '(608)-258-4141',
                    ],
                }],
            },
            {
                subheadings: [{
                    subheading: 'Tempo Ballroom & Latin Dance Studio',
                    paragraphs: [
                        '301 S Blount Street',
                        'Madison, WI 53703',
                        '(608)-833-3320',
                    ],
                }],
            },
            {
                subheadings: [{
                    subheading: 'Madison Circus Space',
                    paragraphs: [
                        '2100 Winnebago Street',
                        'Madison, WI 53704',
                    ],
                }],
            },
        ]));

        break;

    case 'well-dressed-feet':

        $('#mainContent div').html(generateContentHTML([
            {
                heading: 'Jenny Shirar & Christian Frommelt',
                subtitle: 'St. Louis, MO',
                subheadings: [{
                    subheading: '',
                    paragraphs: [
                        '<span style="font-weight: 900;">Jenny Shirar</span> is an active instructor, leader, and competitor in the midwest region and a up-and-comer on the national jazz dance scene. She strives to make her St. Louis roots known through her dancing, which she learned with guidance and inspiration from local St. Louis shaggers and jitterbuggers such as John Bedrosian. Jenny\'s following has a classic feel that originates from her commitment to working with a partner and dancing to the music.',
                        '<span style="font-weight: 900;">Christian Frommelt</span> is a dedicated instructor, performer, DJ, and scholar in the national swing dance scene. Born and raised in St. Louis, Missouri, Christian grew up savoring swingin\' jazz, old school blues, and thumpin\' New Orleans party music. It was only a matter of time before destiny introduced him to the wonders of jazz dance and since then he\'s never looked back.',
                    ],
                }],
            },
        ]));

        break;

    case 'black-vinyl-disk-player':

        $('#mainContent div').html(generateContentHTML([
            {
                heading: 'the Fat Babies',
                subtitle: 'Chicago, Il',
                subheadings: [],
            },
            {
                heading: 'Patty & the Buttons',
                subtitle: 'Minneapolis, MN',
                subheadings: [],
            },
            {
                heading: 'Milwaukee Hot Club',
                subtitle: 'Milwaukee, WI',
                subheadings: [],
            },
            {
                heading: 'Anthony Chen',
                subtitle: 'Twin Cities, MN',
                subheadings: [{
                    subheading: '',
                    paragraphs: [
                        '<span style="font-weight: 900;">Anthony Chen</span> is an amazing DJ and Lindy hopper, back for his second year of the Madison Invasion.',
                    ],
                }],
            },
        ]));

        break;

    case 'wood-pattern-ground-parquet-floor':

        $('#mainContent div').html(generateContentHTML([
            {
                heading: 'Registration Options',
                subheadings: [
                    {
                        subheading: '<a'
                            +' href="#"'
                            +' target="_blank"'
                            +' style="color: blue;"'
                            +' onmouseover="linkHover(this)"'
                            +' onmouseleave="linkUnhoverBlue(this)"'
                            +'>Register Here</a>',
                        paragraphs: [],
                    },
                    {
                        subheading: 'Admission Packages',
                        paragraphs: [
                            'Full Weekend Pass - $999',
                            'Workshops-Only Pass - $999',
                            'Dances-Only Pass - $999',
                            'Individual Dance - $99',
                        ],
                    },
                    {
                        subheading: 'Competitions & Extras',
                        paragraphs: [
                            'Jack & Jill - $99',
                            'Solo Jazz - $99',
                            'Strictly Lindy - $99',
                            'T-shirt! - $99',
                        ],
                    },
                    {
                        subheading: 'Frequently Asked Questions',
                        paragraphs: [
                            '<span style="font-weight: 900;">Will you offer housing?</span>',
                            'We will do the best that we can! Please reqeust housing on your registration form!',
                            '</br>',
                            'More Questions? E-mail us at <a'
                            +' href="mailto:info@jumptownswing.com"'
                            +' style="color: blue;"'
                            +' onmouseover="linkHover(this)"'
                            +' onmouseleave="linkUnhoverBlue(this)"'
                            +'>info@jumptownswing.com</a>',
                        ],
                    },
                ],
            },
        ]));

        break;
    
    case 'wood-pattern-ground-parquet-floor-2':

        $('#mainContent div').html(generateContentHTML([
            {
                subheadings: [{
                    subheading: 'Tracey Reinke',
                    paragraphs: [
                        '<span style="font-style: italic;">Event Director</span>',
                    ],
                }],
            },
            {
                subheadings: [{
                    subheading: 'Irene Ann Resenly',
                    paragraphs: [
                        '<span style="font-style: italic;">Event Director</span>',
                    ],
                }],
            },
            {
                subheadings: [{
                    subheading: '<a'
                        +' href="http://tobmcg.github.io/"'
                        +' target="_blank"'
                        +' style="text-decoration: none; color: black;"'
                        +' onmouseover="linkHover(this)"'
                        +' onmouseleave="linkUnhoverBlack(this)"'
                        +'>Tobin McGilligan</a>',
                    paragraphs: [
                        '<span style="font-style: italic;">Web Designer</span>',
                    ],
                }],
            },
        ]));
        
        break;

    default:
        console.log('invalid option');
        break;
    }

}

function linkHover(element) {
    $(element).css("color", "#C23627")
    .css("text-decoration", "underline");
}
function linkUnhoverBlack(element) {
    $(element).css("color", "black")
    .css("text-decoration", "none");
}
function linkUnhoverBlue(element) {
    $(element).css("color", "blue")
}