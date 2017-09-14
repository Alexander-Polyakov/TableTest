$( document ).ready(function() {
	$.post( "ajax/test.html", function( data ) {
		$( "#demo" ).html( data );
	});
});