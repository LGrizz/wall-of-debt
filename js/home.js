$(document).ready(function(){
                
    var page = 0;
    var distance = $('.welcome').offset().top;
     $window = $(window);
     var cardsArray = [];
     var currentPage = 0;

     // Get total debt
     $.getJSON('php/totaldebt.php', function(data) {
            $('.total').text('$'+data)
        });


    // Get first page from database
    $.getJSON('php/wallposts.php?page='+page, function(data) {
        $.each( data, function( i, item ) {
                var obj = {};
                obj.name = item.name;
                obj.school = item.school;
                obj.debt = item.debt;
                cardsArray.push(obj);
         });
    }).done(function(){
        //jQuery(".debt").fitText(0.8, { minFontSize: '40px', maxFontSize: '52px' });
        page++;
        showCards();
    });

    showCards = function(){
        var randomNum = Math.floor((Math.random()*5)+currentPage);
        for (var i = currentPage; i < currentPage +5; i++) {
            if(i < cardsArray.length){
                if(cardsArray[i].debt.length > 5) {
                        $('.wall-cards').append("<div class='col-md-3 col-sm-4 item animate'><div class='card'><p class='name'>"+cardsArray[i].name+"</p><p class='debt large'>$"+cardsArray[i].debt+"</p><p class='school'>"+cardsArray[i].school+"</p></div></div>");
                }else{
                        $('.wall-cards').append("<div class='col-md-3 col-sm-4 item animate'><div class='card'><p class='name'>"+cardsArray[i].name+"</p><p class='debt'>$"+cardsArray[i].debt+"</p><p class='school'>"+cardsArray[i].school+"</p></div></div>");
                }
            }
            if(i == randomNum-1 && i < cardsArray.length) {
                $('.wall-cards').append("<div class='col-md-3 col-sm-4 item animate'><div class='card tweet'><p><span class='bold'>@usrtwitr:</span> Sed commodo fringilla. Cras nisl diam, ultricies eget ornare at, eleifend vel felis <br><span class='bold'>#wallofdebt</span></p><div class='bird'></div></div></div>");
            }
        };

        if(currentPage < cardsArray.length){
            currentPage = currentPage+5;
        }
        
    }

    showCardsTail = function(){

        for (var i = currentPage; i < currentPage +5; i++) {
            if(i < cardsArray.length){
                 if(cardsArray[i].debt.length > 5) {
                    $('.wall-cards').append("<div class='col-md-3 col-sm-4 item animate'><div class='card'><p class='name'>"+cardsArray[i].name+"</p><p class='debt large'>$"+cardsArray[i].debt+"</p><p class='school'>"+cardsArray[i].school+"</p></div></div>");

                }else{
                    $('.wall-cards').append("<div class='col-md-3 col-sm-4 item animate'><div class='card'><p class='name'>"+cardsArray[i].name+"</p><p class='debt'>$"+cardsArray[i].debt+"</p><p class='school'>"+cardsArray[i].school+"</p></div></div>");
                }
            }
        };

            currentPage = currentPage+5;
        
    }
    
   
    // When window is scrolled....

    $window.scroll(function() {

        // Infinite Scroll

        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 250) {

           if(currentPage == cardsArray.length){
                showCardsTail();
                $.getJSON('php/wallposts.php?page='+page, function(data) {
                    $.each( data, function( i, item ) {
                            var obj = {}
                            obj.name = item.name;
                            obj.school = item.school;
                            obj.debt = item.debt;
                            cardsArray.push(obj)
                     });
                }).done(function(){
                    //jQuery(".debt").fitText(0.8, { minFontSize: '40px', maxFontSize: '52px' });
                    page++;
                });
           }else{
            showCards();
           }
           
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