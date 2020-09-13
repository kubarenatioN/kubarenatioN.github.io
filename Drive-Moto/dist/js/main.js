$(function() {
  
  $('.header-banner__slider').slick({
    dots: true,
    nextArrow: '<button class="header-slider__arrow header-slider__arrow-next"><img src="images/arrow-next.svg" alt="next"></button>',
    prevArrow: '<button class="header-slider__arrow header-slider__arrow-prev"><img src="images/arrow-prev.svg" alt="prev"></button>',
    dotsClass: 'header-slider__dots',
    rows: 0,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false
        }
      },
    ]
  })

  $('.tab').on('click', function(e) {
    e.preventDefault()
    $(this).siblings().removeClass('tab--active')
    $(this).parent().parent().next().find('div').removeClass('tabs-content--active')
    $(this).addClass('tab--active')
    $($(this).attr('href')).addClass('tabs-content--active')

    $($(this).attr('href')).find('.slick-slider').slick('setPosition')
  })

  $('.catalog .tab, .product-card__inner .tab').on('click', function(e) {
    e.preventDefault()
    $(this).siblings().removeClass('tab--active')
    $(this).parent().next().find('div').removeClass('tabs-content--active')
    $(this).addClass('tab--active')
    $($(this).attr('href')).addClass('tabs-content--active')
  })

  $('.popular__content-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<button class="popular-slider__arrow popular-slider__arrow-next"><img src="images/arrow-black-next.svg" alt="next"></button>',
    prevArrow: '<button class="popular-slider__arrow popular-slider__arrow-prev"><img src="images/arrow-black-prev.svg" alt="prev"></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true,
          dotsClass: 'product-slider-dots',
        }
      },
      {
        breakpoint: 1201,
        settings: {
          arrows: false,
          dots: true,
          dotsClass: 'product-slider-dots',
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          dots: true,
          dotsClass: 'product-slider-dots',
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 481,
        settings: {
          arrows: false,
          dots: true,
          dotsClass: 'product-slider-dots',
          slidesToShow: 1,
        }
      },
    ]
  })

  $('.product-item__like').on('click', function () {
    $(this).toggleClass('product-item__like--active')
  })

  $('.filter-style').styler()

  $('.aside-filter__item-title').on('click', function() {
    $(this).parent().toggleClass('aside-filter__item-drop--active')
    $(this).next().slideToggle(200)
  })
  $('.aside-filter__extra-title').on('click', function() {
    $(this).toggleClass('active')
    $(this).next().slideToggle(200)
  })

  let $range = $('#range-slider-1');
  let $inputFrom = $('#aside__range-input-1')
  let $inputTo = $('#aside__range-input-2')
  let instance;
  let min = $('#range-slider-1').data('min')
  let max = $('#range-slider-1').data('max')

  $range.ionRangeSlider({
    type: 'double',
    grid: false,
    step: 5,
    hide_min_max: true,
    hide_from_to: true,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs
  })
  instance = $range.data("ionRangeSlider")

  function updateInputs(data) {
    from = data.from;
    to = data.to;
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("change", function () {
    var val = $(this).prop("value");
    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }
    instance.update({
      from: val
    });
    $(this).prop("value", val);
  });

  $inputTo.on("change", function () {
    var val = $(this).prop("value");
    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }
    instance.update({
      to: val
    });
    $(this).prop("value", val);
  });

  $('.catalog__filter-grid').on('click', function() {
    $('.catalog__filter-row').removeClass('catalog__filter-btn--active')
    $(this).addClass('catalog__filter-btn--active')
    $('.product-item__wrapper').removeClass('product-item__wrapper--row')
  })
  $('.catalog__filter-row').on('click', function() {
    $('.catalog__filter-grid').removeClass('catalog__filter-btn--active')
    $(this).addClass('catalog__filter-btn--active')
    $('.product-item__wrapper').addClass('product-item__wrapper--row')
  })

  $('.product-card__info-like').on('click', function() {
    $(this).toggleClass('product-card__info-like--active')
  })
  
  $('.rate').rateYo({
    
  });

  $('.menu__btn').on('click', function() {
    $(this).toggleClass('is-active')
    $('.menu-mobile').toggleClass('menu-mobile--active')
  })

  $('.menu-mobile__row-wrapper, .section-page').on('click', function() {
    $('.menu__btn').removeClass('is-active')
    $('.menu-mobile').removeClass('menu-mobile--active')
  })

  $('.footer__links-title').on('click', function() {
    $(this).next().slideToggle(200)
    $(this).toggleClass('footer__links-title--active')
  })

  $('.catalog__aside-btn').on('click', function() {
    $('.catalog__aside').toggleClass('catalog__aside--active')
  })

});