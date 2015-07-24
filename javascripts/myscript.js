

$(document).ready(function(){
// navbar hide show functionality
  $(".menu-button").on('click', function(){
    $(".main-navbar-container").fadeToggle(100);
  });
// project link activation
  $(".project-1").on('click',function(){
    window.open('http://tendigi.com/');
    return false;
  });
  $(".project-2").on('click',function(){
    window.open('http://multiversestudios.nyc/clients/hd/index');
    return false;
  });

  $( ".home_navbar" ).click(function() {
    $( 'html, body' ).animate({
        scrollTop: $(".cover-container").offset().top
    }, 1000);
  });

  $( ".about_me_navbar" ).click(function() {
    $('html, body').animate({
        scrollTop: $(".about_section").offset().top
    }, 1000);
  });

  $( ".project_navbar" ).click(function() {
    $('html, body').animate({
        scrollTop: $(".project").offset().top
    }, 1000);
  });

  $( ".contact_navbar" ).click(function() {
    $('html, body').animate({
        scrollTop: $(".footer").offset().top
    }, 1000);
  });

});

$(document).ready(function(){
  $('.scrolldown-arrow').on("click",function(){
    if($('.scrolldown-arrow').scrollTop() < 1000){
      $('html, body').animate({
      scrollTop: $(".about_section").offset().top
    },1000);
    };
  });
});

 $(window).scroll(function(){
  if($(window).scrollTop()>300){
    $('.bktt').fadeIn(1000);
  }
  else{
    $('.bktt').fadeOut(1000);
  }
 });

 $(function(){
  $('#bkt').on("click",function(){
    $('html, body').animate({"scrollTop": 0},1000);
    return false;
 });
 
 });


