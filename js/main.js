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
		$("html, body").animate({ scrollTop: $('.welcome.contact-us').offset().top }, "slow");
	});

	$(".to-top").click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
	})


});