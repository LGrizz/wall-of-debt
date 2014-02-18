$( document ).ready(function() {
  
	$( ".join" ).click(function() {
  		$(".topaction").fadeOut(500, 0, function(){
  			$(".joinform").fadeIn();
  		});

  		$("html, body").animate({ scrollTop: 0 }, "slow");
	});

	$( ".joinbutton" ).click(function() {
  		$(".topaction").fadeOut(500, 0, function(){
  			$(".joinform").fadeIn();
  		});
	});

	$(".contactus").click(function(){
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
	});


	
	
	/*====
	Homepage fixed navbar magic trick
	=====*/
	
	var distance = $('.welcome').offset().top,
	$window = $(window);
	$window.scroll(function() {
		if ( $window.scrollTop() >= distance ) {
			$('.navbar').show();
		}else if( $window.scrollTop() <= distance ) {
			 $('.navbar').hide();
		}
	});

	/*====
	Tada!
	=====*/

});