$( document ).ready(function() {
  
	$( ".join" ).click(function() {
  		$(".topaction").fadeOut(500, 0, function(){
  			$(".joinform").fadeIn();
  		});
	});

	$( ".joinbutton" ).click(function() {
  		$(".topaction").fadeOut(500, 0, function(){
  			$(".joinform").fadeIn();
  		});
	});


});