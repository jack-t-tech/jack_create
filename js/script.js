$(function() {

  // # results ==================================================
  new Swiper( '.swiper-container', {
    speed: 400,
    spaceBetween: 40,
    width: 400,
    loop: true,
    loopedSlides: 6,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      767: {
				spaceBetween: 24,
				width: 274,
      }
    }
  });

  // # drawer js =====================================================

  $('.drawer').drawer();

  // # wow js ======================================================

  new WOW().init();

  // # Q&Aアコーディオン ==============================================
  $('.qa_box_q').on('click', function() {
    $(this).next().slideToggle();
    $(this).children('.qa_box_icon').toggleClass('is-open');
  });

  // # to top ====================================================
  $(window).on('scroll', function() {
    if(100 < jQuery(this).scrollTop()) {
      jQuery('.to_top').addClass('is-show');
    } else {
      jQuery('.to_top').removeClass('is-show');
    }
  });

  // # ページ内リンク ==================================================

  jQuery('a[href^="#').on('click', function() {
    let header = jQuery('.header').innerHeight();
    let id = jQuery(this).attr('href');
    let position = 0;
  
    if(id != '#') {
      position = jQuery(id).offset().top - header;
    }
  
    jQuery('html, body').animate({
      scrollTop: position
    },
    300);
  });
});


