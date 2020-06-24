$(function () {

  $('#catalog__tabs').smartTab({
    transition: {
      animation: 'fade',
      speed: 200,
    },
    keyboardSettings: {
      keyNavigation: false,
    },
    theme: 'noTheme',
    autoAdjustHeight: false,
  });

  // $('#catalog__tabs').smartTab("goToTab", 0);

  $('.header__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.header-slider__arrow-left'),
    nextArrow: $('.header-slider__arrow-right'),
    dots: true,
    appendDots: $('.header__content-slider'),
    rtl: true,
    asNavFor: '.header__subslider, .header__cakesnames-slider',
    autoplay: true,
    speed: 800,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          speed: 500
        }
      }
    ]
  });

  $('.header__cakesnames-slider').slick({
    draggable: false,
    swipe: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 800,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          speed: 500
        }
      },
      {
        breakpoint: 1000,
        settings: 'unslick'
      },
    ]
  });

  $('.header__subslider').slick({
    draggable: false,
    swipe: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    rtl: true,
    arrows: false,
    speed: 800,
    responsive: [
      {
        breakpoint: 1600,
        settings: 'unslick'
      }
    ]
  });

  $('.slider__wrapper').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '12%',
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.slider__arrow-left'),
    nextArrow: $('.slider__arrow-right'),
  });

  $('.catalog__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // prevArrow: $('.catalog__arrow-left'),
    // nextArrow: $('.catalog__arrow-right'),
    prevArrow: '<img src="images/icons/left-arrow.svg" alt="left-arrow" class= "catalog-arrow catalog__arrow-left">',
    nextArrow: '<img src="images/icons/right-arrow.svg" alt="right-arrow" class= "catalog-arrow catalog__arrow-right">',
    dots: true,
    dotsClass: 'catalog__dots',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });

  $('.hamburger').on('click', function() {
    $(this).toggleClass('is-active');
    $('.header__nav').slideToggle(200);
  })

  $('.nav-link').on('click', function () {
    // setTimeout(() => {
      // $($(this).attr('href')).find('.catalog__slider').slick('refresh');
      // $('.catalog__slider-tab').last().find('.catalog__slider').slick('refresh');
    //   $('.catalog__slider').slick('refresh');
    // }, 200);
    setTimeout(() => {
      $($(this).attr('href')).find('.catalog__slider').slick('refresh');
      $('.catalog__slider-tab').last().find('.catalog__slider').slick('refresh');
    }, 200);
  });

  $('#catalog-tab1').find('.catalog__slider').slick('refresh');
  $('.catalog__dots').eq(0).addClass('is-active');

  function checkTab() {
    setTimeout(() => {
      let tabIndex = $('.nav-link.catalog__nav-tab-inner.active').index('.nav-link.catalog__nav-tab-inner');
      $('.catalog__dots').removeClass('is-active');
      $('.catalog__dots').eq(tabIndex).addClass('is-active');
    }, 200);
  }

  $('.nav-link.catalog__nav-tab-inner').on('click', checkTab);
  $('.nav-link.catalog__nav-tab-inner').on('click', refreshPopup);


  // Define data for the popup
  var data1 = [
    {
      cakename: "Шоколадно-ягодная крепость", // Key "username" means that Magnific Popup will look for an element with class "mfp-username" in markup and will replace its inner HTML with the value.

      cakephoto_img: 'images/gallery-cakes-img1.jpg', // Prefix "_img" is special. With it Magnific Popup finds an  element "userAvatarUrl" and replaces it completely with image tag.
      cakedescr: 'Вкуснейший слоеный двухъярусный торт, политый шоколадом и украшенный ягодами.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
    {
      cakename: "Йогурт с ягодами", cakephoto_img: 'images/gallery-cakes-img2.jpg',
      cakedescr: 'Вкуснейший многослойный торт с кремовой прослойкой, политый йогуртом и украшенный ягодами.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
    {
      cakename: "Трио с воздушными шариками", cakephoto_img: 'images/gallery-cakes-img3.jpg', cakedescr: 'Трёхслойный торт-чизкейк сочетает в себе шоколадный и молочный вкус, а сверху выложен воздушными шоколадно-молочными шариками.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
    {
      cakename: "Невеста", cakephoto_img: 'images/gallery-cakes-img4.jpg', cakedescr: 'Свадебный трёхъярусный торт, "облаченный" в свадебное платье и украшен цветами.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
    {
      cakename: "Подарочек", cakephoto_img: 'images/gallery-cakes-img5.jpg', cakedescr: 'Идельно подойдет, чтобы сделать приятный подарок любимому человеку, двухъярусный молочный торт "Подарочек" украшен лентами и цветами.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
    {
      cakename: "Экзотик кейк", cakephoto_img: 'images/gallery-cakes-img6.jpg', cakedescr: 'Тропический многослойный торт политый шоколадом и декорированный экзотическими цветами.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
    {
      cakename: "Парижская вуаль", cakephoto_img: 'images/gallery-cakes-img7.jpg', cakedescr: 'Прекрасный трёхъярусный торт расписанный витражами и с нарисованной Эйфелевой башней.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    }
  ];
  var data2 = [
    {
      cakename: "Яблочная радость", cakephoto_img: 'images/gallery-cupcakes-img1.jpg', cakedescr: 'Набор красивых капкейков с яблочным вкусом, украшенных печеньем и шоколадом.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
    {
      cakename: "Шоколадные розы", cakephoto_img: 'images/gallery-cupcakes-img2.jpg', cakedescr: 'Вкусные капкейки из нескольких сортов шоколада, искусно сформированные в виде розы.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
    {
      cakename: "Молочный шоколад", cakephoto_img: 'images/gallery-cupcakes-img3.jpg', cakedescr: 'Капкейки из молочного шоколада с печеньем на верхушке.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
    {
      cakename: "Для Любимой", cakephoto_img: 'images/gallery-cupcakes-img4.jpg', cakedescr: 'Идельный набор вкуснейших капкейков, чтобы подарить любимым, будь то 8 Марта, 14 Февраля или День рождения.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
    {
      cakename: "Для Защитника", cakephoto_img: 'images/gallery-cupcakes-img5.jpg', cakedescr: 'Отличный подарочный набор на 23 Февраля, 9 Мая или День рождения будущему или уже Защитнику Отечества.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
    {
      cakename: "Chris Coyier", cakephoto_img: 'images/gallery-cupcakes-img6.jpg', cakedescr: 'Набор вкусных черничных капкейков с мягкими цветами для отдыха на природе.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
  ];

  var data3 = [
    {
      cakename: "Малиновое царство", cakephoto_img: 'images/gallery-cheesecakes-img1.jpg', cakedescr: 'Ягодный капкейк сверху выложенный малиной.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
    {
      cakename: "Ягодный лайм", cakephoto_img: 'images/gallery-cheesecakes-img2.jpg', cakedescr: 'Ягодное ассорти выложенное на лаймовом желе.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
    {
      cakename: "Черничный коктейль", cakephoto_img: 'images/gallery-cheesecakes-img3.jpg', cakedescr: 'Разложенные на черничном пудинге ягоды сделают ваш праздник незабываемым.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
    {
      cakename: "Абрикосовый джем", cakephoto_img: 'images/gallery-cheesecakes-img4.jpg', cakedescr: 'Чизкейк пролитый свежесваренным абрикосовым джемом.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
    {
      cakename: "Шоколадные ракушки", cakephoto_img: 'images/gallery-cheesecakes-img5.jpg', cakedescr: 'Оригинальное оформление шоколадными ракушками и печеньем "Орео" делают чизкейк особенно вкусным и красивым.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
  ];

  var data4 = [
    {
      cakename: "Классические куки", cakephoto_img: 'images/gallery-cookies-img1.jpg', cakedescr: 'Классическое печенье с кусочками молочного шоколада.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
    {
      cakename: "Снежинки", cakephoto_img: 'images/gallery-cookies-img2.jpg', cakedescr: 'Набор печенья "Снежинки" идеально дополнит зимнее настроение.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
    {
      cakename: "Для любимых", cakephoto_img: 'images/gallery-cookies-img3.jpg', cakedescr: 'Набор печенья "Для любимых" будет отличным подарком на 8 Марта, 14 Февраля или День рождения любимому человеку.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
    {
      cakename: "Новогодний набор", cakephoto_img: 'images/gallery-cookies-img4.jpg', cakedescr: 'Новогодний набор — это лучшее печенье на новый год, которое можно не только съесть, но которым также можно украсить ёлку или праздничный стол.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
    {
      cakename: "Именные", cakephoto_img: 'images/gallery-cookies-img5.jpg', cakedescr: 'Именной набор печенья станет отличным дополнением к подарку на День рождения.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
    {
      cakename: "На Хэллоуин", cakephoto_img: 'images/gallery-cookies-img6.jpg', cakedescr: 'Набор печенья "На Хэллоуин" будет отличным дополнением к праздничной атмосфере.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
  ];
  var data5 = [
    {
      cakename: "Макарони", cakephoto_img: 'images/gallery-other-img1.jpg', cakedescr: 'Набор макарон любого цвета будет идеальным дополнением к десерту на любом праздничном столе.', cakeorder: 'Заказать', cakecall: 'Позвонить'
    },
  ];
  // initalize popup
  function refreshPopup() {

    let imgIndx = 0;

    setTimeout(() => {

      $('.catalog__slider').each(function (index) {
        $(this).find('.catalog__item-image').on('click', function () {
          imgIndx = $(this).data('index');

          $.magnificPopup.open({
            key: 'my-popup',
            items: eval('data' + (index + 1)),
            type: 'inline',
            inline: {
              // Define markup. Class names should match key names.
              markup:
                `<div class="cake-popup">
              <div class="mfp-close"></div>
              <div class="mfp-cakephoto-wrapper">
                <div class="mfp-cakephoto"></div>
              </div>
              <div class="mfp-cakecontent">              
                <div class="mfp-cakename"></div>
                <div class="mfp-cakedescr"></div>
                <div class="mfp-buttons">
                  <a href="#modal" class="mfp-cakeorder btn popup-modal"></a>
                  <a href="tel:375298256042" class="mfp-cakecall btn"></a>
                </div>
              </div>
            </div>`
            },
            gallery: {
              enabled: true,
            },
            callbacks: {
              open: function () {
                $('.mfp-cakeorder').on('click', function (e) {
                  flag = true;
                  $.magnificPopup.close();
                });
              },
              afterClose: function () {
                if (flag) {
                  $('.popup-modal').magnificPopup('open');
                  flag = false;
                }
              }

            }
          }, imgIndx);
        });
      });
    }, 200);
  }

  refreshPopup();

  let discounts = [
    {
      disname: 'Два по цене одного', disphoto_img: 'images/discount-img1.jpg', disdescr: 'Успейте купить два чизкейка по цене одного.', disorder: 'Заказать', discall: 'Позвонить'
    },
    {
      disname: 'Каждый 6й бесплатно', disphoto_img: 'images/discount-img2.jpg', disdescr: 'При покупке от 2 наборов капкейков, каждый шестой в подарок.', disorder: 'Заказать', discall: 'Позвонить'
    },
    {
      disname: 'Вместе дешевле', disphoto_img: 'images/discount-img3.jpg', disdescr: 'Рассказывайте о нас друзьям и получайте скидки на десерты.', disorder: 'Заказать', discall: 'Позвонить'
    },
    {
      disname: 'Отметь нас в истории', disphoto_img: 'images/discount-img4.jpg', disdescr: 'Получи скидку на капкейки 15%. Отметь нашу кондитерскую в истории инстаграм и жди результатов конкурса.', disorder: 'Заказать', discall: 'Позвонить'
    },
    {
      disname: 'Приготовь лучший чизкейк', disphoto_img: 'images/discount-img5.jpg', disdescr: 'Участвуй в конкурсе на самый красивый чизкейк и получи шанс выиграть купон на бесплатный заказ любого нашего чизкейка.', disorder: 'Заказать', discall: 'Позвонить'
    },
    {
      disname: '2 кг подарочного печенья', disphoto_img: 'images/discount-img6.jpg', disdescr: 'Предложи свой вариант будущего печенья и выиграй 2 кг печенья.', disorder: 'Заказать', discall: 'Позвонить'
    },
    {
      disname: 'Десерт тебе и твоей половинке', disphoto_img: 'images/discount-img7.jpg', disdescr: 'Отправь нам совместное фото с твоей второй половинкой при заказе и получи десерт в подарок.', disorder: 'Заказать', discall: 'Позвонить'
    },
  ];
  flag = false;
  $('.discount__box').on('click', function (e) {
    e.preventDefault();

    disIndx = $(this).data('index');

    $.magnificPopup.open({
      key: 'my-popup-discounts',
      items: discounts,
      type: 'inline',
      inline: {
        // Define markup. Class names should match key names.
        markup:
          `<div class="discount-popup">
              <div class="mfp-close"></div>
              <div class="mfp-disphoto-wrapper">
                <div class="mfp-disphoto"></div>
              </div>
              <div class="mfp-discontent">              
                <div class="mfp-disname"></div>
                <div class="mfp-disdescr"></div>
                <div class="mfp-buttons">
                  <a href="#modal" class="mfp-disorder btn popup-modal" data-effect="mfp-move-from-top"></a>
                  <a href="tel:375298256042" class="mfp-discall btn"></a>
                </div>
              </div>
            </div>`
      },
      gallery: {
        enabled: false,
      },
      callbacks: {
        open: function () {
          $('.mfp-disorder').on('click', function (e) {
            flag = true
            $.magnificPopup.close();
          });
        },

        afterClose: function () {
          if (flag) {
            $('.popup-modal').magnificPopup('open');
            flag = false;
          }
        }

      }
    }, disIndx);
  });

  let readmoreH, readmoreM;
  $('.discount__readmore').on('click', function () {
    $(this).toggleClass('is-active');
    if ($(this).hasClass('is-active')) {
      $('.discount__inner').css({
        maxHeight: readmoreM
      });
    }
    else {
      $('.discount__inner').css({
        maxHeight: readmoreH + 20
      })
      $('html, body').animate({
        scrollTop: $('.discount__inner').offset().top - 120
      }, 400);
    }
  });
  
  function checkWindowWidth() {
    readmoreH = $('.discount__box').height();
    readmoreM = document.querySelector('.discount__inner').scrollHeight;
    console.log(readmoreM);
    $('.discount__inner').css({
      maxHeight: readmoreH + 20
    });
  }
  checkWindowWidth();
  
  $('body').resize(checkWindowWidth);

  $('.form__type').on('click', function () {
    $(this).toggleClass('is-active');
  });

  $('.header__link').on('click', function (e) {
    e.preventDefault();
    $('.header__link').removeClass('is-active');
    $(this).addClass('is-active');
    let id = $(this).data('id');
    $('html, body').animate({
      scrollTop: $('#' + id).offset().top - 100
    }, 400)
    $('.header__nav').slideUp(200);
    $('.header__hamburger-menu').children('.hamburger').removeClass('is-active');
  });

  $('.header__inner-btn, .about__descr-btn').on('click', function (e) {
    e.preventDefault();
    let id = $(this).data('id');
    $('html, body').animate({
      scrollTop: $('#' + id).offset().top - 100
    }, 400)
  });

  scrollDir();
  let scrolldir;
  let mainH = $('#main').innerHeight();
  let menu = $('.header__menu');
  let menuH = $('.header__menu').height();

  function checkScroll() {
    scrolldir = document.querySelector('html').getAttribute('data-scrolldir');
    let scroll = $(window).scrollTop();
    if (scroll > mainH + menu.innerHeight()) {
      $('.header__content').css({
        marginTop: menu.innerHeight()
      })
      menu.addClass('header__menu--fixed');
      menu.css({
        top: -menuH
      })
      if ($('.header__hamburger-menu').children('.hamburger').hasClass('is-active') && scrolldir == 'down') {
        $('.header__nav').slideUp(300);
        $('.header__hamburger-menu').children('.hamburger').removeClass('is-active');
      }
      if (scrolldir == 'up') {
        $('.header__menu--fixed').css({
          top: 0
        });
      }
    }
    else {
      if ($('.header__hamburger-menu').children('.hamburger').hasClass('is-active') && scrolldir == 'down') {
        $('.header__nav').slideUp(300);
        $('.header__hamburger-menu').children('.hamburger').removeClass('is-active');
      }
      $('.header__content').css({
        marginTop: 0
      });
      menu.css({
        top: -menuH
      })
      menu.removeClass('header__menu--fixed');
    }
  }

  function checkActiveSection() {
    let scroll = $(window).scrollTop();

    $('.header__link').each(function (index, element) {
      if (scroll + 250 >= $('#' + $(this).data('id')).offset().top) {
        $('.header__link').removeClass('is-active');
        $(this).addClass('is-active');
      }
    });
  }

  $(window).on('scroll', checkScroll);
  $(window).on('scroll', checkActiveSection);
  checkScroll();

  $('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    removalDelay: 500,
    focus: '#modal-name',
    key: 'modal',
    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function () {
        if ($(window).width() < 700) {
          this.st.focus = false;
        }
        else {
          this.st.focus = '#modal-name';
        }
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    }

  });

  function sendForm(event) {
    event.preventDefault();
    let i = 0;
    $('.modal__input').each(function () {
      if ($(this).val() != '') {
        i++
      }
    });
    if (i == 2) {
      $.magnificPopup.close();
      $('.modal__input').each(function () {
        $(this).val('');
      });
    }
    else {
      checkForm();
    }
  }
  function checkForm(event) {
    if ($('.modal__input').eq(0).val() == '') {
      $('.modal__input').eq(0).focus();
    }
    else if ($('.modal__input').eq(1).val() == '') {
      $('.modal__input').eq(1).focus();
    }
  }
  $('.modal__btn').on('click', sendForm);
  $('.modal__btn').on('mousedown', checkForm);

  function watchForHover() {
    // lastTouchTime is used for ignoring emulated mousemove events
    // that are fired after touchstart events. Since they're
    // indistinguishable from real events, we use the fact that they're
    // fired a few milliseconds after touchstart to filter them.
    let lastTouchTime = 0

    function enableHover() {
      if (new Date() - lastTouchTime < 500) return
      document.body.classList.add('hasHover')
    }

    function disableHover() {
      document.body.classList.remove('hasHover')
    }

    function updateLastTouchTime() {
      lastTouchTime = new Date()
    }

    document.addEventListener('touchstart', updateLastTouchTime, true)
    document.addEventListener('touchstart', disableHover, true)
    document.addEventListener('mousemove', enableHover, true)

    enableHover()
  }

  watchForHover()

  $('.form__btn').on('click', function(e) {
    e.preventDefault();
    if ($('.form__input').eq(0).val() != '' && $('.form__input').eq(1).val() != '') {
      $('.form__input').val('');
      $('.form__type').removeClass('is-active');
    }
    else if ($('.form__input').eq(0).val() == ''){
      $('.form__input').eq(0).focus();
    }
    else if ($('.form__input').eq(1).val() == ''){
      $('.form__input').eq(1).focus();
    }
  })

});