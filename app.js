$(document).ready( function() {
	$('.img-node').on('click', function(){
		// console.log('works');
		$(this).toggleClass('open');
	});

//when button is clicked, original image zooms/fades out and new image fades in
	$('.button1').on('click', function(){
		$('.fadeOut').toggle('slow');
		$('.fadeIn').css('display', 'block')
	});

});