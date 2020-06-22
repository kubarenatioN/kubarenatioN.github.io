$(function () {
  new WOW().init();

  btnToTop = document.getElementById('btnTop');

  window.onscroll = function () {
    if (window.pageYOffset >= 1000) {
      btnToTop.style.display = 'flex';
    }
    else {
      btnToTop.style.display = 'none';
    }
  }

  $('#btnTop').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      500);
  });

  $('.hamburger').on('click', function () {
    $(this).toggleClass('is-active');
    $('.header__nav').slideToggle(300);
  });
  
  let offsets = $('[data-wow-offset]');
  if ($('body').width() < 472) {
    for (let i = 0; i < offsets.length; i++) {
      offsets[i].dataset.wowOffset = 0;
    }
  }

});