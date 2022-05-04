$('.mright').on('click', function () {
	$('.menudis').toggleClass('menudiss');
});


$('.onoff').on('click',function() {
    $('.apagado').toggleClass('apagadoa' , 'apagado');
    $('.onoff').toggleClass('onoffe' , 'onoff');
        $('#content').load("html/home.html");
  
        
});

$('.onoff').on('click',function() {
    $('.menudis').removeClass('menudiss');
    $('.mright').removeClass('botone');
    $('.hand').css('display' , 'none');
    $('.handown').toggleClass('handowne','handown');
    $('.nav').css('top' , '-100%');
 });

 
