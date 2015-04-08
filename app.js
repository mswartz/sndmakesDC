$(document).ready( function() {
	// $('.img-node').on('click', function(){
	// 	// console.log('works');
	// 	$(this).toggleClass('open');
	// });

	//when button is clicked, original image zooms/fades out and new image fades in
	$('#button-1').on('click', function(){
		$('#slide-1').toggleClass('active');
		$('#slide-2').toggleClass('active');
	});

	$('#button-4').on('click', function(){
		$('#slide-2').toggleClass('active');
		$('#slide-1').toggleClass('active');
	});

});