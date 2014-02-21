$(document).ready(function () {

    var page = 0;
    var distance = $('.welcome').offset().top;
    $window = $(window);
    var cardsArray = [];
    var currentPage = 0;
    var tweetsArray = [];
    var gotTweets = false;
    var wait = false;

    // Shuffle array
    function Shuffle(o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }

    // Get total debt and display
    $.getJSON('php/totaldebt.php', function (data) {
        $('.total').text('$' + data);
        $('.total').fadeIn();
    });

    // Get tweets put them in an array
    $.getJSON('php/tweets.php', function (data) {
        $.each(data.statuses, function (i, item) {
            var obj = {};
            obj.username = item.user.screen_name;
            obj.tweet = item.text;
            tweetsArray.push(obj);
            if (tweetsArray.length === data.statuses.length) {
                Shuffle(tweetsArray);
                populateTweets();
                gotTweets = true;
            }
        });
    });

    // Populate tweet boxes
    var populateTweets = function () {
        $('.tweet').each(function () {
            $(this).find('img').fadeOut(function () {
                $(this).parent().prepend("<p><span class='bold'>@" + tweetsArray[tweetsArray.length - 1].username + ":</span> " + tweetsArray[tweetsArray.length - 1].tweet + "</p>");
                $(this).remove();
                tweetsArray.pop();
            });
        });
    };


    // Get first page from database
    $.getJSON('php/wallposts.php?page=' + page, function (data) {
        $.each(data, function (i, item) {
            var obj = {};
            obj.name = item.name;
            obj.school = item.school;
            obj.debt = item.debt;
            cardsArray.push(obj);
            if (cardsArray.length === data.length) {
                Shuffle(cardsArray);
                page++;
                showCards();
            }
        });
    });

    // Show 5 cards, tweet displayed and placed randomly in set
    showCards = function () {
        var randomNum = Math.floor(Math.random() * (currentPage - (currentPage + 5) + 1)) + (currentPage + 5);
        for (var i = 0; i < 5; i++) {
            if (cardsArray.length !== 0) {
                if (cardsArray[cardsArray.length - 1].debt.length > 5) {
                    $('.wall-cards').append("<div class='col-md-3 col-sm-4 item animate'><div class='card'><p class='name'>" + cardsArray[cardsArray.length - 1].name + "</p><p class='debt large'>$" + cardsArray[cardsArray.length - 1].debt + "</p><p class='school'>" + cardsArray[cardsArray.length - 1].school + "</p></div></div>");
                    cardsArray.pop();
                } else {
                    $('.wall-cards').append("<div class='col-md-3 col-sm-4 item animate'><div class='card'><p class='name'>" + cardsArray[cardsArray.length - 1].name + "</p><p class='debt'>$" + cardsArray[cardsArray.length - 1].debt + "</p><p class='school'>" + cardsArray[cardsArray.length - 1].school + "</p></div></div>");
                    cardsArray.pop();
                }

                if (i == randomNum - 1 && i < cardsArray.length) {
                    if (gotTweets) {
                        $('.wall-cards').append("<div class='col-md-3 col-sm-4 item animate'><div class='card tweet'><p><span class='bold'>@" + tweetsArray[tweetsArray.length - 1].username + ":</span> " + tweetsArray[tweetsArray.length - 1].tweet + "</p><div class='bird'></div></div></div>");
                        tweetsArray.pop();
                    } else {
                        $('.wall-cards').append("<div class='col-md-3 col-sm-4 item animate'><div class='card tweet'><img src='img/loading.gif' class='img-responsive logo' alt='Tweet Loading'><div class='bird'></div></div></div>");
                    }
                }
            }
        }

    };

    // When window is scrolled....

    $window.scroll(function () {

        // Infinite Scroll

        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 250) {

            if (cardsArray.length === 0 && !wait) {
                wait = true;
                $.getJSON('php/wallposts.php?page=' + page, function (data) {
                    $.each(data, function (i, item) {
                        var obj = {};
                        obj.name = item.name;
                        obj.school = item.school;
                        obj.debt = item.debt;
                        cardsArray.push(obj);
                        if (cardsArray.length === data.length) {
                            Shuffle(cardsArray);
                            page++;
                            wait = false;
                            showCards();
                        }
                    });
                });
            } else {
                showCards();
            }

        }

        // Fixed Nav + To Top Button


        if ($window.scrollTop() >= distance) {
            $('.navbar').show();
            $('.to-top').fadeIn();
        } else if ($window.scrollTop() <= distance) {
            $('.navbar').hide();
            $('.to-top').hide();
        }


    });
});