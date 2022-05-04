$('#home').on('click', function() {
   
    $('.menudis').removeClass('menudiss');
    $('.mright').removeClass('botone');
    
});



$('li').on('click',function() {
    $('.menudis').removeClass('menudiss');
    $('.mright').removeClass('botone');
    $('.nav').css('display','none');
   
});

$( ".navhover" ).on('click',function() {
  $('.nav').css('top','0');
  $('.nav').css('display','block');
  $('.handown').css('display','none');
  $('.navhover').css('border','0px');    
    
});

$( ".screenbajo" ).on('click',function() {
  $('.nav').css('top','-100%');
   $('.menudis').removeClass('menudiss');
    $('.mright').removeClass('botone');  
});





