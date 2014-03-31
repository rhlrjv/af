$(function(){
	$("#fake-page").on("click", function(event){
		event.preventDefault;
		revealPrank();
	});

	setTimeout(revealPrank,5000); //timeout:P

});

function revealPrank(){
	 $( "#fake-page" ).hide( "pulsate", {}, 1000, callback );
};

function callback() {
  setTimeout(function() {
    $( "#fake-page" ).removeAttr( "style" ).hide();
  }, 1000 );
};