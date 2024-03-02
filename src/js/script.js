
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
});

// topへ戻るボタン
jQuery(window).on("scroll",function() {
    if(100 < jQuery(window).scrollTop()){
        jQuery("#js-totop").addClass("is-show");
    }
    else {
        jQuery("#js-totop").removeClass("is-show");
    }
})

// スムーススクロール
jQuery('a[href^="#"]').on("click", function(e){
    const speed = 300;
    const id = jQuery(this).attr("href");  //クリックされた要素のhrefの部分をidとして取得
    const target = jQuery("#" == id ? "html" : id ); //idが#の場合（＝totop）は一番上のエレメントとなり、それ以外の場合にはidの要素を指定する
    const position = jQuery(target).offset().top - $( '#js-header' ).outerHeight();
    jQuery("html, body").animate(
        {
            scrollTop: position,
        },
        speed,
        "swing"
    )
});


// 下へスクロールした時に、背景色を変更する
jQuery(window).on("scroll",function() {
    if(100 < jQuery(window).scrollTop()){
        jQuery("header").addClass("is-scroll");
    }
    else {
        jQuery("header").removeClass("is-scroll");
    }
})

// inview.js
$('.inview').css({ 'opacity':'0' , 'margin-top':'50px' });
$('.inview').on('inview', function() {
  $(this).animate({'opacity':'1' , 'margin-top':'0px' },2000);
});


//背景色の後に画像やテキストが表示されるエフェクト
//要素の取得とスピードの設定
var box = $('.colorbox'),
    speed = 700;  
 
//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;
 
    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
　　　　　$(this).delay(200).animate({'width':'100%'},speed,function(){
                   image.css('opacity','1');
                   $(this).css({'left':'0' , 'right':'auto'});
                   $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
     });
});

// swiper topセクション
const mv_swiper = new Swiper(".js-top-swiper", {
    loop: true,
    speed: 2000,
    effect: "fade",
    fadeEffect: {
    crossFade: true,
    },
    autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    },
});

// swiper campaignセクション
const mySwiper = new Swiper('.swiper-campaign-js', { //名前を変える
    loop: true, //最後→最初に戻るループ再生を有効に
    autoplay: { 
        delay: 2000, //何秒ごとにスライドを動かすか
        stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
        disableOnInteraction: true, //ユーザーの操作時に止める
        reverseDirection: false, //自動再生を逆向きにする
    },
    speed: 1000, //表示切り替えのスピード
    effect: "slide", //切り替えのmotion (※1)
    centeredSlides: false, //中央寄せ
    pagination: {
        el: ".swiper-pagination", //paginationのclass
        clickable: true, //クリックでの切り替えを有効に
        // type: "progressbar" //paginationのタイプ (※2)
    },
    navigation: {
        prevEl: ".swiper-button-prev", //戻るボタンのclass
        nextEl: ".swiper-button-next" //進むボタンのclass
    },
    scrollbar: { //スクロールバーを表示したいとき
        el: ".swiper-scrollbar", //スクロールバーのclass
        hide: true, //操作時のときのみ表示
        draggable: true //スクロールバーを直接表示できるようにする
    },
    allowTouchMove: false, // スワイプで表示の切り替えを無効に
    slidesPerView: 'auto', // 一度に表示する枚数。autoにして常にスライドが見えるようになっている
    // breakpoints: { //画面幅による表示枚数と余白の指定
    //     768: {
    //         slidesPerView: 4,
    //       }
    // },
});

/* =================================================== 
※1 effectについて
slide：左から次のスライドが流れてくる
fade：次のスライドがふわっと表示
■ fadeの場合は下記を記述
    fadeEffect: {
        crossFade: true
    },
cube：スライドが立方体になり、3D回転を繰り返す
coverflow：写真やアルバムジャケットをめくるようなアニメーション
flip：平面が回転するようなアニメーション
cards：カードを順番にみていくようなアニメーション
creative：カスタマイズしたアニメーションを使うときに使用します

=======================================================
※2 paginationのタイプ
bullet：スライド枚数と同じ数のドットが表示
fraction：分数で表示（例：1 / 3）
progressbar：スライドの進捗に応じてプログレスバーが伸びる
custom：自由にカスタマイズ

=====================================================*/