$(function () {
  $(window).on("load resize", function () {
    $(".fill-screen").css("width", window.innerWidth);

    // add Bootstrap's scrollspy
    $('body').scrollspy({
      target:'.navbar'
    });
  });

  // smooth scrolling
  $('nav a').bind('click', function () {
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 50 
    }, 1500, "easeInOutExpo");
    event.preventDefault();
  });

  // // parallax scrolling with stellar.js
  // $(window).stellar();
  new WOW().init();
});

// elements fade in
$(document).ready(function(){
  $(".fi-header").fadeIn(1000);
  $(".fi-name").fadeIn(1800);
  $(".fi-paragraph").fadeIn(2600);
});

// navbar collapse on clicking to navbar-collapse
$(document).on('click','.navbar-collapse',function(e) {
    $(this).collapse('hide');
});

// navbar collapse on clicking to navbar-brand
$(document).on('click','.navbar-brand',function(e) {
    $('.navbar-collapse').collapse('hide');
});
