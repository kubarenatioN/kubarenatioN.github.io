$(function () {
  $('.video__content').get(0).muted = true;

  $('.classes__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 3,
    prevArrow: '<div><img class="classes__slider-prev classes__slider-arrow" src="images/classes-prev-arrow.svg"></div>',
    nextArrow: '<div><img class="classes__slider-next classes__slider-arrow" src="images/classes-next-arrow.svg"></div>',
    infinite: false,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  if ($('html').width() > 992 || $('html').width()<600){
    $('.classes__item-container').on('click', function () {
      $(this).toggleClass('rotate-item');
    });
    $('.classes__content-btn').on('click', function (e) {
      if ($(this).closest('.classes__item-container').hasClass('rotate-item')) {
        e.stopPropagation();
        $.fancybox.open({
          src: '#modal1',
          type: 'inline',
          opts: {
            "src": "#modal1",
            "touch": false,
            "smallBtn": true
          }
        });
      }
    });
  }
  else {
    $('.classes__content-btn').on('click', function (e) {
      e.stopPropagation();
      $.fancybox.open({
        src: '#modal1',
        type: 'inline',
        opts: {
          "src": "#modal1",
          "touch": false,
          "smallBtn": true
        }
      });
    });
  }
  

  

  let deg = -180;
  
  $('.classes__item-container').on('click', function() {
    if ($('.classes__item-container').hasClass('rotate-item')) {
      $('.classes__slider-refresh').css({
        'opacity': '1',
        'cursor': 'pointer',
      });
    }
    else {
      $('.classes__slider-refresh').css({
        'opacity': '0.3',
        'cursor': 'default',
      });
    }
  });

  $('.classes__slider-refresh').on('click', function() {
    if ($('.classes__item-container').hasClass('rotate-item')){
      $('.classes__item-container').removeClass('rotate-item');
      if ($('html').width() < 600) {
        $(this).css({
          'transform': `translate(-20px, 10px) rotate(${deg}deg)`,
          'opacity': '0.3',
          'cursor': 'default',
        })
      }
      else {
        $(this).css({
          'transform': `translate(-30px, 10px) rotate(${deg}deg)`,
          'opacity': '0.3',
          'cursor': 'default',
        })
      }
      deg-=180;
    }
  });
  
  new WOW().init();
  
  function teacherLink(event) {
    let teacherId = $(this).data('scroll');
    event.preventDefault();
    location.assign('teachers.html#' + teacherId);
  }

  $('[data-scroll]').on('click', teacherLink);

  
  btnToTop = document.getElementById('btnTop');

  window.onscroll = function() {
    if (window.pageYOffset >= 1000) {
      btnToTop.style.display = 'flex';
    }
    else {
      btnToTop.style.display = 'none';
    }
  }

  $('#btnTop').on('click', function() {
    $('html, body').animate(
    {
      scrollTop: 0
    },
    500);
  });

  $('.hamburger').on('click', function() {
    $(this).toggleClass('is-active');
    $('.header__nav').slideToggle(300);
  });
  
  let offsets = $('[data-wow-offset]');
  if($('body').width() < 472) {
    for (let i=0;i<offsets.length;i++) {
      offsets[i].dataset.wowOffset = 0;
    }
  }

})
