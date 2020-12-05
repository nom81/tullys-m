$(function() {

//ドロップダウンメニュー
  $('#menu li').hover(function() {
    //カーソルが重なった時
    $(this).find('.sub-menu').stop().slideDown();
  }, function() {
    //カーソルが離れた時
    $(this).find('.sub-menu').stop().slideUp();
  });

  $('#footer .footerNavLink').click(function() {
    $(this).eq().fadeOut();
  });

});