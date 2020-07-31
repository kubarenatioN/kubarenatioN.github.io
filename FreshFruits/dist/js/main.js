$(function() {

  $('.best__slider').slick({
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0',
    initialSlide: 1,
    autoplay: true,
    swipe: false,
    nextArrow: '<button class="best__slider-arrow best__arrow-next"><div>Вперед</div><img src="images/arrow-next.svg" alt=""></button>',
    prevArrow: '<button class="best__slider-arrow best__arrow-prev"><div>Назад</div><img src="images/arrow-prev.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 2,
          swipe: true,
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          swipe: true,
        }
      },
    ]
  })

  $('.form-styler').styler();

  $('.blog__slider').slick({
    slidesToShow: 3,
    infinite: false,
    nextArrow: '<button class="blog__slider-arrow blog__arrow-next"></button>',
    prevArrow: '<button class="blog__slider-arrow blog__arrow-prev"></button>',
    dots: true,
    dotsClass: 'blog__slider-dots',
    responsive: [
      {
        breakpoint: 1401,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true,
        }
      },
    ]
  })

  $('.reviews__slider').slick({
    vertical: true,
    slidesToShow: 2,
    infinite: false,
    swipe: false,
    nextArrow: '<button class="reviews__slider-arrow reviews__arrow-next"></button>',
    prevArrow: '<button class="reviews__slider-arrow reviews__arrow-prev"></button>',
    dots: true,
    dotsClass: 'reviews__slider-dots',
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1,
          rows: 2,
          adaptiveHeight: true,
        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1,
          rows: 2,
          adaptiveHeight: true,
          swipe: true,
          verticalSwiping: true,
          dots: false,
          arrows: false,
        }
      },
    ]
  })

  $('.header__menu-btn').on('click', function() {
    $(this).toggleClass('is-active')
    $('.header__menu').toggleClass('is-active')
  })

  let productItemHeight
  function checkHeight() {
    productItemHeight = $('.production__item').outerHeight(true);
    console.log(productItemHeight)
  }
  $(window).resize(checkHeight)
  checkHeight()

  $('.production__catalog').readmore({
    speed: 0,
    heightMargin: 0,
    moreLink: '<div class="showmore-btn-wrapper"><a href="#" class="showmore-btn">Показать больше</a></div>',
    lessLink: '<div class="showmore-btn-wrapper"><a href="#" class="showmore-btn">Показать больше</a></div>',
    collapsedHeight: productItemHeight,
    beforeToggle: function (trigger, element, expanded) {
      if (expanded) { // The "Close" link was clicked 
        $('html, body').animate({
          scrollTop: element.offset().top 
        }, 300)
      } 
    }
  })

  $('.scrollTo').on('click', function(e) {
    e.preventDefault()
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500)
  })

})
