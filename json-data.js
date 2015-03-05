// Get some JSON text via Ajax, and write it to the p HTML page
// Get new text when clicking on "third"
//
$(document).ready(function() {
	$("#btn").click(function(){
		var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?tags=fuenlabrada&tagmode=any&format=json&jsoncallback=?";
		$.getJSON( flickerAPI, {
			tags: "fuenlabrada",
			tagmode: "any",
			format: "json"
		})
		.done(function( data ) {
			$.each( data.items, function( i, item ) {
				$( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
				if ( i === 3 ) {
					return false;
				}
			});
		});
	});
	//Another way
	/*$.ajax({
		type:"GET",
		dataType: "JSON",
		url: "json-data.json",
		cache: false,
		success: function(data){
			event(data);
		}
    });

	var event = function(data){
		$("#btn").click(function(){
			$('#header').html('<h1>' + data.hi + '</h1>');
		});
	};*/
});
