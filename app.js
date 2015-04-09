$(document).ready( function() {

	//when button is clicked, original image zooms/fades out and new image fades in
	$('.button1').on('click', function(){
		$('#slide-2').removeClass('hidden').addClass('zoom-in');
		$('#slide-1').addClass('hidden').removeClass('zoom-in');
	});

	//toggle back to slide 1
	$('.button4').on('click', function(){
		$('#slide-1').removeClass('hidden').addClass('zoom-in');
		$('#slide-2').addClass('hidden').removeClass('zoom-in');
	});

	$('.hide-button').on('click', function(){
		$(this).toggleClass('active');
	});

});