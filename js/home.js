$(document).ready(function(){
                
    var page = 0;
    var distance = $('.welcome').offset().top;
     $window = $(window);
     var cardsArray = [];
     var currentPage = 0;
     var tweetsArray = [];
     var gotTweets = false;

    

        // Get total debt and display
        $.getJSON('php/totaldebt.php', function(data) {
            $('.total').text('$'+data)
        });

         // Get tweets put them in an array
         $.getJSON('php/tweets.php', function(data) {
                for(i=0; i<data.statuses.length;i++){
                    var randomNum = Math.floor(Math.random() * (data.statuses.length - 1 + 1)) + 1;
                    var obj = {};
                    obj.username = data.statuses[randomNum-1].user.screen_name;
                    obj.tweet = data.statuses[randomNum-1].text;
                    tweetsArray.push(obj);
                    if(tweetsArray.length === data.statuses.length) {
                        populateTweets();
                        gotTweets = true;
                    }
                }
            });

        // Populate tweet boxes
        var populateTweets = function(){
            $('.tweet').each(function(){
                $(this).find('img').fadeOut(function(){
                    $(this).parent().prepend("<p><span class='bold'>@"+tweetsArray[tweetsArray.length-1].username+":</span> "+tweetsArray[tweetsArray.length-1].tweet+"</p>")
                    $(this).remove();
                    tweetsArray.pop();
                })
            })
        };


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

    // Get 5 random cards and display them, display a tweet
    showCards = function(){
        var randomNum = Math.floor(Math.random() * (currentPage - (currentPage+5) + 1)) + (currentPage+5);
        for (var i = currentPage; i < currentPage +5; i++) {
            if(i < cardsArray.length){
                if(cardsArray[i].debt.length > 5) {
                        $('.wall-cards').append("<div class='col-md-3 col-sm-4 item animate'><div class='card'><p class='name'>"+cardsArray[i].name+"</p><p class='debt large'>$"+cardsArray[i].debt+"</p><p class='school'>"+cardsArray[i].school+"</p></div></div>");
                }else{
                        $('.wall-cards').append("<div class='col-md-3 col-sm-4 item animate'><div class='card'><p class='name'>"+cardsArray[i].name+"</p><p class='debt'>$"+cardsArray[i].debt+"</p><p class='school'>"+cardsArray[i].school+"</p></div></div>");
                }
            }
            if(i == randomNum-1 && i < cardsArray.length) {
                if(gotTweets){
                    $('.wall-cards').append("<div class='col-md-3 col-sm-4 item animate'><div class='card tweet'><p><span class='bold'>@"+tweetsArray[tweetsArray.length-1].username+":</span> "+tweetsArray[tweetsArray.length-1].tweet+"</p><div class='bird'></div></div></div>");
                    tweetsArray.pop();
                }else{
                    $('.wall-cards').append("<div class='col-md-3 col-sm-4 item animate'><div class='card tweet'><img src='img/loading.gif' class='img-responsive logo' alt='Tweet Loading'><div class='bird'></div></div></div>");
                }
                
            }
        };

        if(currentPage < cardsArray.length){
            currentPage = currentPage+5;
        }
        
    }

    // Same as above less the last if statement
    showCardsTail = function(){

        var randomNum = Math.floor(Math.random() * (currentPage - (currentPage+5) + 1)) + (currentPage+5);
        for (var i = currentPage; i < currentPage +5; i++) {
            if(i < cardsArray.length){
                if(cardsArray[i].debt.length > 5) {
                        $('.wall-cards').append("<div class='col-md-3 col-sm-4 item animate'><div class='card'><p class='name'>"+cardsArray[i].name+"</p><p class='debt large'>$"+cardsArray[i].debt+"</p><p class='school'>"+cardsArray[i].school+"</p></div></div>");
                }else{
                        $('.wall-cards').append("<div class='col-md-3 col-sm-4 item animate'><div class='card'><p class='name'>"+cardsArray[i].name+"</p><p class='debt'>$"+cardsArray[i].debt+"</p><p class='school'>"+cardsArray[i].school+"</p></div></div>");
                }
            }
            if(i == randomNum-1 && i < cardsArray.length) {
                if(gotTweets){
                    $('.wall-cards').append("<div class='col-md-3 col-sm-4 item animate'><div class='card tweet'><p><span class='bold'>@"+tweetsArray[tweetsArray.length-1].username+":</span> "+tweetsArray[tweetsArray.length-1].tweet+"</p><div class='bird'></div></div></div>");
                    tweetsArray.pop();
                }else{
                    $('.wall-cards').append("<div class='col-md-3 col-sm-4 item animate'><div class='card tweet'><img src='img/loading.gif' class='img-responsive logo' alt='Tweet Loading'><div class='bird'></div></div></div>");
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