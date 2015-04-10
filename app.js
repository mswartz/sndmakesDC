// Templating

$.getJSON( './images.json', function( data ){
	var images = data
	var source   = $( '#media-template' ).html();
	var template = Handlebars.compile( source );
	$( '.container' ).html( template( images ) );

	if( window.location.hash ) {
		var hash = window.location.hash.substring(1);

		$( '.container .media-container[data-id="1"]').addClass('hidden').removeClass('zoom-in')
		$( '.container .media-container[data-id="' + hash + '"]').removeClass('hidden').addClass('zoom-in');
	} else {
		console.log( "no hash!" );
	}
});

// Switch images

$( '.container' ).on( 'click', '.media-button', function() {
	var _this = this;
	var oldID = $( _this ).closest( '.media-container' ).data( 'id' );
	var newID = $( _this ).data( 'relation' );
	var oldImage = $( '.media-container[data-id="' + oldID + '"]' );
	var newImage = $( '.media-container[data-id="' + newID + '"]' );

	window.location.hash = '#' + newID;

	$( oldImage ).addClass('hidden').removeClass('zoom-in');
	$( newImage ).removeClass('hidden').addClass('zoom-in');
});

// Back to the beginning

$( '.logo-trigger' ).on( 'click', function() {
	$( '.container .media-container.zoom-in').addClass('hidden').removeClass('zoom-in');
	$( '.container .media-container[data-id="1"]').removeClass('hidden').addClass('zoom-in')
});


// Toggle buttons

$('.hide-button').on('click', function(){
	if( $( 'body' ).hasClass( 'nodes-container' ) ) {
		return false;
	}

	$(this).toggleClass('active');
	$('.media-caption').toggleClass('hideCaption');
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
