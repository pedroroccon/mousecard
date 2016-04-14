$(function($) {

	var viewport = { x: $('body').width(), y: $('body').height() }
	var range = { x: 0, y: 0 };
	var percent = { x: 0, y: 0 };
	var sensitivity = {x: 0.085, y: 0.225};

	$(document).mousemove(function (event) {

		percent.x = viewport.x / 2;
		percent.y = viewport.y / 2;

		range.x = (((event.pageX - percent.x) * 100) / viewport.x) * sensitivity.x;
		range.y = (((event.pageY - percent.y) * 100) / viewport.y) * sensitivity.y;

		$('.mousecard').css('transform', 'rotateX(' + range.y + 'deg) rotateY(' + range.x + 'deg)');
	});

}, (jQuery));