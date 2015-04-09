$(document).ready( function() {
	$('.img-node').on('click', function(){
		// console.log('works');
		$(this).toggleClass('open');
	});
});

// Templating

$.getJSON( "/images.json", function( data ){
	var images = data
	var source   = $( '#media-template' ).html();
	var template = Handlebars.compile( source );
	$( '.container' ).html( template( images ) );

	console.log( data );
});


// function( data ) {
// 	var source   = $( '#media-template' ).html();
// 	var template = Handlebars.compile(source);
// 	var html     = $( '.container').html( template( data ) );
//
// 	console.log( "thing" );
// });
