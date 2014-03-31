$(function(){
	$("#fake-page").on("click", function(event){
		event.preventDefault;
		setTimeout(revealPrank,2000);
	});

	setTimeout(revealPrank,5000); //timeout:P

	$( ".imp" ).hover(
	  function() {
	    $( "#blur-layer" ).css("opacity", "0.7");
	  }, function() {
	    $( "#blur-layer" ).css("opacity", "0.1");
	  }
	);
});

function revealPrank(){
	 $( "#fake-page" ).hide( "shake", {}, 1000, callback );
};

function callback() {
  setTimeout(function() {
    $( "#fake-page" ).removeAttr( "style" ).hide();
  }, 1000 );
};