
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

  // ウィンドウの幅を検知してクラスを操作する関数
  function toggleDrawerMenu() {
    var drawerMenu = $(".js-drawer-menu");
    
    // ウィンドウの幅が一定以上の場合にクラスを追加・削除する
    // 上段では、画面幅768px以上でドロワーメニューを非表示にする、フェードアウトする
    // 下段では、どうでない時ハンバーガーメニューからis-openクラスを除く。
    if (window.innerWidth >= 768) {
      $('.js-drawer-menu').fadeOut();
    } else {
      $('.js-hamburger').removeClass('is-open')
    }
  }

  // ページ読み込み時とウィンドウリサイズ時に切り替え関数を実行
  $(document).ready(toggleDrawerMenu);
  $(window).resize(toggleDrawerMenu);

});
