$(function () {

  let widthAfterAnim;
  let widthTwoCols;
  if ($('body').width() > 1192) {
    widthAfterAnim = '380px';
    widthTwoCols = '33%';
  }
  if ($('body').width() <= 1192) {
    widthAfterAnim = '30vw';
    widthTwoCols = '33%';
  }
  if ($('body').width() <= 872) {
    widthAfterAnim = '40vw';
    widthTwoCols = '44%';
  }

  let arrows = $('.teachers__descr-other');
  arrows.on('mouseenter', function () {
    $(this).find('.teachers__descr-arrow').addClass('bounce-left');
    setTimeout(() => {
      $(this).find('.teachers__descr-arrow').removeClass('bounce-left');
    }, 1000);
  });


  if ($('body').width() > 712) {


    let teacher = $('.teachers__teacher-wrapper');
    let backBtn = $('.teachers__descr-other');
    let offsetLeft = new Array;
    let offsetTop = new Array;
    let fakeBox = '<div class="teachers__teacher-fake"></div>';
    let f = new Array;
    for (let i = 0; i < teacher.length; i++) {
      f[i] = true;
    }
    for (let i = 0; i < teacher.length; i++) {
      offsetLeft[i] = null;
    }
    for (let i = 0; i < teacher.length; i++) {
      offsetTop[i] = null;
    }


    teacher.on('click', function () {
      let index = $(this).index('.teachers__teacher-wrapper');

      if (f[index]) {
        offsetLeft[index] = $(this).position().left;
        offsetTop[index] = $(this).position().top;
        $(this).before(fakeBox);
        f[index] = false;

        $(this).css({
          'position': 'absolute',
          'maxWidth': widthTwoCols,
          'width': '100%',
          'zIndex': '5',
          'left': `${offsetLeft[index]}px`,
          'top': `${offsetTop[index]}px`
        });
        if (teacher.length % 3 == 1 && index == teacher.length - 1) {
          $('.teachers__wrapper').addClass('active');
        }
        $(this).animate(
          {
            right: '0',
            left: '0',
            maxWidth: '100%'
          },
          400
        );
        setTimeout(() => {
          $(this).find('.teachers__descr-wrapper').addClass('active');
          $(this).find('.teachers__descr-wrapper').animate({
            opacity: '1'
          },
            200)
        }, 400);

        $(this).find('.teachers__teacher-image').addClass('active');
        $(this).find('.teachers__name').addClass('active');
      }


    });

    backBtn.on('click', function (event) {
      let index = $(this).closest('.teachers__teacher-wrapper').index('.teachers__teacher-wrapper');
      f[index] = true;
      event.stopPropagation();
      $(this).closest('.teachers__descr-wrapper.active').animate({
        opacity: '0'
      },
        100);
      setTimeout(() => {
        $(this).closest('.teachers__descr-wrapper.active').removeClass('active');

        $(this).closest('.teachers__teacher-wrapper').css({
          'top': `${offsetTop[index]}px`,
          'position': 'absolute'
        });

        $(this).closest('.teachers__teacher-wrapper').animate(
          {
            left: `${offsetLeft[index]}px`,
            maxWidth: widthTwoCols,
          },
          300,
          function () {
            $(this).closest('.teachers__teacher-wrapper').css({
              'maxWidth': widthAfterAnim,
              'top': '0',
              'left': '0',
              'position': 'relative',
              'zIndex': '1'
            });
            if (teacher.length % 3 == 1 && index == teacher.length - 1) {
              $('.teachers__wrapper').removeClass('active');
            }
            $(this).closest('.teachers__teacher-wrapper').prev('.teachers__teacher-fake').remove();
          }
        );
      }, 200);

      $(this).closest('.teachers__teacher-wrapper').find('.teachers__name').removeClass('active');
      $(this).closest('.teachers__teacher-wrapper').find('.teachers__teacher-image').removeClass('active');
    });

  }

  new WOW().init();

  let hash = location.hash; //получаем значение хеша
  location.hash = ''; //очищаем хеш
  if (hash[1] != undefined) { //проверяем, есть ли в хеше какое-то значение
    $('html, body').animate({ scrollTop: $(hash).offset().top - 100 },
      500,
      function () {
        $(hash).trigger('click');
      }); //скроллим за полсекунды
  };


  $('.teachers__descr-btn').on('click', function (e) {
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

}); 