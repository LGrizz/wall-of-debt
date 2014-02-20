$(document).ready(function(){
                
    var page = 0;
    var distance = $('.welcome').offset().top;
     $window = $(window);

    // Get first page from database
    $.getJSON('php/wallposts.php?page='+page, function(data) {
        $.each( data, function( i, item ) {
                $('.wall-cards').append("<div class='col-md-3 col-sm-4 item animate'><div class='card'><p class='name'>"+item.name+"</p><p class='debt'>$"+item.debt+"</p><p class='school'>"+item.school+"</p></div></div>");
         });
    }).done(function(){
        jQuery(".debt").fitText(0.8, { minFontSize: '40px', maxFontSize: '52px' });
        page++;
    });
    
   
    // When window is scrolled....

    $window.scroll(function() {

        // Infinite Scroll

        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 350) {
            $.getJSON('php/wallposts.php?page='+page, function(data) {
                
                if(data.length !== 0){
                    $.each( data, function( i, item ) {
                        $('.wall-cards').append("<div class='col-md-3 col-sm-4 item animate'><div class='card'><p class='name'>"+item.name+"</p><p class='debt'>$"+item.debt+"</p><p class='school'>"+item.school+"</p></div></div>");
                     });
                    jQuery(".debt").fitText(0.6, { minFontSize: '40px', maxFontSize: '52px' });
                     page++;
                }
            });
           
        }

        // Fixed Nav + To Top Button


        if ( $window.scrollTop() >= distance ) {
            $('.navbar').show();
            $('.to-top').fadeIn();
        }else if( $window.scrollTop() <= distance ) {
             $('.navbar').hide();
             $('.to-top').hide();
        }


    });
});