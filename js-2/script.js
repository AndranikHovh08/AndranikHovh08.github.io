'use strict';


$(function() {
    $(window).scroll(function() {
        $('section').each(function() {
            var x = $(window).scrollTop() + $(window).height();
            var y = $(this).offset().top + $(this).height() / 2;

            if (y <= x) {
                $(this).addClass('active')
            }
        })



     $(window).scroll('nav', function(){
           $('nav').css({
            backgroundColor : 'black',
             transition : '3s'
           })
     })
     $('.sec4').click('.im1', function(){
        $('.im1').toggleClass('active')
     });
     $('.sec4').click('.im2', function(){
        $('.im2').toggleClass('active')
     });



     $('.sec1').click('.img1', function(){
        $('.img1').toggleClass('active')
     });
     $('.sec1').click('.img2', function(){
        $('.img2').toggleClass('active')
     })




     $('.sec7').click('.d1', function(){
        $('.d1').toggleClass('active')
     });
     $('.sec7').click('.d2', function(){
        $('.d2').toggleClass('active')
     })
     $('.sec7').click('.d3', function(){
        $('.d3').toggleClass('active')
     });
     $('.sec7').click('.d4', function(){
        $('.d4').toggleClass('active')
     })
     $('.sec7').click('.d5', function(){
        $('.d5').toggleClass('active')
     });









    })
})