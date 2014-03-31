$(function(){

	$("#share-pannel").hide();

	$("#fake-page").on("click", function(event){
		event.preventDefault;
		setTimeout(revealPrank,1000);
	});

	setTimeout(revealPrank,10000); // 7 sec timeout:P

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
    $("#share-pannel").show( "clip", {}, 500, callback2 );
  }, 1000 );
};

function callback2(){
	$("#share-pannel").show();
}