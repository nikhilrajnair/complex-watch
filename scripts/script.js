// DIAL PAD


var dialLines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('clock')[0];

for (var i = 1; i < 60; i++) {
    clockEl.innerHTML += "<div class='diallines'></div>";
    dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}






// CLOCK 




$(document).ready(function() {

    updateClock();
    setInterval('updateClock()', 250);

});

function updateClock() {

    var cur_time = new Date();
    var cur_s = cur_time.getSeconds();
    var cur_m = cur_time.getMinutes();
    var cur_h = cur_time.getHours();
    var cur_d = cur_time.getYear();
    var s_deg = 6 * cur_s;
    var m_deg = 6 * cur_m;
    var h_deg = (cur_m / 60 + cur_h) * 30;
    var weeknumber = moment(cur_time).week() * 25;
     // var weeknumber = 5 * 25;

    $('.day span').html(moment().format('D MMM'));
    $('.second').css({ 'transform': 'rotate(' + s_deg + 'deg)' });
    $('.minute').css({ 'transform': 'rotate(' + m_deg + 'deg)' });
    $('.hour').css({ 'transform': 'rotate(' + h_deg + 'deg)' });
    $('.second-1').css({ 'transform': 'rotate(' + h_deg + 'deg)' });
    $('.days').css({ 'transform': 'rotate(' + weeknumber + 'deg)' });
}

function checkTime(i) {
    // add zero in front of numbers < 10
    if (i < 10) {
        i = "0" + i;
    }

    return i;
}




// WEATHER API



// Docs at http://simpleweatherjs.com

/* Does your browser support geolocation? */
if ("geolocation" in navigator) {
    $('.js-geolocation').show();
} else {
    $('.js-geolocation').hide();
}

/* Where in the world are you? */
$('.js-geolocation').on('click', function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        loadWeather(position.coords.latitude + ',' + position.coords.longitude); //load weather using your lat/lng coordinates
    });
});

/* 
 * Test Locations
 * Austin lat/long: 30.2676,-97.74298
 * Austin WOEID: 2357536
 */
$(document).ready(function() {
    loadWeather('Seattle', ''); //@params location, woeid
});

function loadWeather(location, woeid) {
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'f',
        success: function(weather) {
            html = '<h2><i class="icon-' + weather.code + '"></i> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            // html += '<ul><li>' + weather.city + ', ' + weather.region + '</li>';
            // html += '<li class="currently">' + weather.currently + '</li>';
            // html += '<li>' + weather.alt.temp + '&deg;C</li></ul>';

            $("#weather").html(html);
        },
        error: function(error) {
            $("#weather").html('<p>' + error + '</p>');
        }
    });
}







// ICONS BASED ON HOURS


function showRandomImage() {
    var theImage = document.getElementById('myimage');
    var thePath = 'images/';

    var thePictures = new Array();
    thePictures[0] = '1.png';
    thePictures[1] = '2.png';
    thePictures[2] = '3.png';
    thePictures[3] = '1.png';
    thePictures[4] = '2.png ';
    thePictures[5] = '3.png';
    thePictures[6] = '1.png';
    thePictures[7] = '2.png';
    thePictures[8] = '5.png';
    thePictures[9] = '5.png';
    thePictures[10] = '5.png';
    thePictures[11] = '6.png';
    thePictures[12] = '6.png';
    thePictures[13] = '6.png';
    thePictures[14] = '7.png';
    thePictures[15] = '7.png';
    thePictures[16] = '7.png';
    thePictures[17] = '8.png';
    thePictures[18] = '9.png';
    thePictures[19] = '10.png';
    thePictures[20] = '12.png';
    thePictures[21] = '12.png';
    thePictures[22] = '12.png';
    thePictures[23] = '12.png';


    var theTime = new Date();
    var theHour = theTime.getHours();
    var imagePath = thePath + thePictures[theHour];


    theImage.src = imagePath;
    theImage.alt = thePictures[theHour];
    theImage.title = thePictures[theHour];
}