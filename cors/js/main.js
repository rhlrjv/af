$(function(){
	$("#fake-page").on("click", function(event){
		event.preventDefault;
		revealPrank();
	});

	setTimeout(revealPrank,7000); // 7 sec timeout:P

	$( ".imp" ).hover(
	  function() {
	    $( "#blur-layer" ).css("opacity", "0.7");
	  }, function() {
	    $( "#blur-layer" ).css("opacity", "0.1");
	  }
	);
});

function revealPrank(){
	 $( "#fake-page" ).hide( "pulsate", {}, 1000, callback );
};

function callback() {
  setTimeout(function() {
    $( "#fake-page" ).removeAttr( "style" ).hide();
  }, 1000 );
};