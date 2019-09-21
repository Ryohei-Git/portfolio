$(function(){
	  $('.overlayMenuBtn').on('click', function(){

    var $overlay = $('.overlayMenu');
    var openClass = 'open';

    if( !$overlay.hasClass(openClass) ){

      $('.overlayMenuBtn span:nth-child(1)').css({'transform':'rotate(-45deg)', 'top':'10px'});
      $('.overlayMenuBtn span:nth-child(2)').css({'opacity':'0'});
      $('.overlayMenuBtn span:nth-child(3)').css({'transform':'rotate(45deg)', 'top':'8px', 'border': '1px solid #C3A572'});

      $overlay.addClass(openClass);
      $overlay.fadeIn();

    } else {

      $('.overlayMenuBtn span:nth-child(1)').css({'transform':'rotate(0)', 'top':'0px'});
      $('.overlayMenuBtn span:nth-child(2)').css({'opacity':'1'});
      $('.overlayMenuBtn span:nth-child(3)').css({'transform':'rotate(0)', 'top':'20px', 'border': '1px solid #ffffff'});

      $overlay.removeClass(openClass);
      $overlay.fadeOut();
    }

  });
});
