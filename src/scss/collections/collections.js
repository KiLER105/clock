$(document).ready(function(){

	const track = $('.slider-track');
	const viewportWidth = $('.slider').css('width');

	console.log(viewportWidth);

	$('.prev').click(function() {

		track.css({
			'transform': 'translate(0, 0)'
		});

	});	

	$('.next').click(function() {
		
		track.css({
			'transform': 'translate(-' + viewportWidth + ', 0)'
		});

	});

});