// A $( document ).ready() block.
     $( document ).ready(function() {
            console.log('loaded');
         
         $(".closeButton").click(function() {
          $(this).parent().slideToggle(function() {
            $(this).remove();
            if($.trim($(".cards").html())=='') {
              $(".cards").html("  <div class='card update' id='1'><p class='title'>No More Cards</p><p class='message'>There are no more cards to show at the moment</p></div>");
            }
          });
          
        });
        var mode = 0;
        $(".searchResults").slideToggle(0);
        $("#search").focus(function() {
          $(".header").animate({height:"80px"}, 500);
          $(".googleNow").animate({opacity:"0"}, 500);
          $(".cards").animate({opacity:"0"}, 500);
          $("button").animate({opacity:"0"}, 500);
          $(".loading").animate({opacity:"1"}, 500, function() {
            $(".cards").slideToggle();
            $(".searchResults").slideToggle(500);
            mode=1;
          }
              );
        });
        $("#search").blur(function() {
          $(".header").animate({height:"190px"}, 500);
          $(".googleNow").animate({opacity:"1"}, 500);
          $(".cards").animate({opacity:"1"}, 500);
          $(".loading").animate({opacity:"0"}, 500);
          $(".cards").slideToggle(0);
          $("button").animate({opacity:"1"}, 500);
          $(".searchResults").slideToggle(500);
          mode=0;
        });
        $(window).scroll(function() {
          if(mode==0) {
          if($(document).scrollTop()>10) {
            $(".header").animate({height:"80px"}, 100);
            $(".googleNow").animate({opacity:"0"}, 100);
            $("button").animate({opacity:"0"}, 100);
          }
          else {
            $(".header").animate({height:"190px"}, 100);
            $(".googleNow").animate({opacity:"1"}, 100);
            $("button").animate({opacity:"1"}, 100);
          }
          }
        });
         
     });