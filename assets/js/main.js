$(document).ready(function(){
  $("#menu > li#services").hover(function (e) {
    e.preventDefault();
    $(this).find('> div').addClass('active');
  }, function(e){
    e.preventDefault();
    $(this).find('> div').removeClass('active');
  });

/*
  $("#menu > li#services").bind('touchstart touchend', function(e) {
    e.preventDefault();
    $(this).find('> div').toggleClass('active');
  });
*/  
});
  
