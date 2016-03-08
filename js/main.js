var $header = $('header');
var $h1 = $('h1');
var $main = $('main');
var $h2 = $('h2');
var $img = $('img');
var $dl = $('dl');
var $dt = $('dt');

$header.addClass('masthead');

$('.big-heading').removeClass();
$h1.addClass('logo');

$main.addClass('wrapper');

$('main p:first-child').addClass('intro');

$h2.addClass('slug-head');

$('main ul').addClass('slug-list');

$img.addClass('slug-img');

$('ul li:first-child').addClass('slug-list-first');
$('ul li:last-child').addClass('slug-list-last');

$dl.addClass('classification');
$('.big-label').removeClass();

$('ul li:last-child').show('slug-list-last');
