
jQuery(function ($) {

  //ナビバートグル
  $('.js-hamburger').on('click', function () {
    if ($('.js-hamburger').hasClass('is-open')) {
      $('.js-drawer-menu').fadeOut();
      $(this).removeClass('is-open');
    } else {
      $('.js-drawer-menu').fadeIn();
      $(this).addClass('is-open');
    }
  });

  $('.js-drawer-menu a[href^="#"]').on('click', function () {
    if ($('.js-hamburger').hasClass('is-open')) {
      $('.js-drawer-menu').fadeOut();
      $('.js-hamburger').removeClass('is-open');
    } else {
      $('.js-drawer-menu').fadeIn();
      $('.js-hamburger').addClass('is-open');
    }
  });

});
