// Templating

$.getJSON( '/images.json', function( data ){
	var images = data
	var source   = $( '#media-template' ).html();
	var template = Handlebars.compile( source );
	$( '.container' ).html( template( images ) );

	console.log( data );
});


$( '.container' ).on( 'click', '.media-button', function() {
	var _this = this;
	var oldID = $( _this ).closest( '.media-container' ).data( 'id' );
	var newID = $( _this ).data( 'relation' );
	var oldImage = $( '.media-container[data-id="' + oldID + '"]' );
	var newImage = $( '.media-container[data-id="' + newID + '"]' );

	$( oldImage ).addClass('hidden').removeClass('zoom-in');
	$( newImage ).removeClass('hidden').addClass('zoom-in');
});


// Toggle buttons

$('.hide-button').on('click', function(){
	$(this).toggleClass('active');
	$('body').toggleClass('hideButtons');
});

$('.node-button').on('click', function(){
	$(this).toggleClass('active');
	$('body').toggleClass('nodes-container');
	$('body').toggleClass('hideButtons');
});

$('.logo-trigger').on('click', function(){
	$('body').removeClass('nodes-container');
});
