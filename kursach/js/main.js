$(function () {
  // console.log('main script start')

  //REAL ONE!!!
  //DO NOT DELETE
  const scrollBarWidth = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth)

  let numOfHeaderSlides = $('.header__slider-item').length - 1
  let headerSwiper
  if ($(window).width() + scrollBarWidth > 1080) {
    headerSwiper = new Swiper('.header__slider-container', {
      pagination: {
        el: '.swiper-pagination',
        // clickable: true,
      },
      // initialSlide: numOfHeaderSlides,
      loop: true,
      speed: 800,
      direction: 'vertical',
      allowTouchMove: false,
      autoplay: {
        delay: 6000,
        reverseDirection: true,
      },
    })
  }
  else {
    let markerSlide = $('.header__slider-item').eq(1)
    for (let i = 0; i < numOfHeaderSlides; i++) {
      markerSlide.before($('.header__slider-item:last'))
    }
    headerSwiper = new Swiper('.header__slider-container', {
      pagination: {
        el: '.swiper-pagination',
        // clickable: true,
      },
      loop: true,
      speed: 300,
      // autoplay: {
      //   delay: 4000,
      //   disableOnInteraction: false,
      // },
    })
    $('.header__slider').find('br').remove()
  }

  //COPYED TO LOADXML.JS, TRYING TO CREATE ASYNC REQUST + SWIPER
  //REAL ONE!!!
  // let productSwiper
  // if ($(window).width() + scrollBarWidth > 768) {

  //   productSwiper = new Swiper('.product__slider-container', {
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //     breakpoints: {
  //       769: {
  //         slidesPerView: 3,
  //         spaceBetween: 20
  //       },
  //       1001: {
  //         slidesPerView: 4,
  //         spaceBetween: 10
  //       },
  //       1201: {
  //         slidesPerView: 4,
  //         spaceBetween: 30
  //       },
  //       1367: {
  //         slidesPerView: 5,
  //         spaceBetween: 15
  //       },
  //       1600: {
  //         slidesPerView: 5,
  //         spaceBetween: 30
  //       }
  //     },
  //   })
  // }

  //REAL ONE!!!
  //DO NOT DELETE
  // const productSwiperHuge = new Swiper('.product__slider-huge-container', {
  //   slidesPerView: 'auto',
  //   freeMode: true,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   breakpoints: {
  //     // when window width is >= 320px
  //     320: {
  //       spaceBetween: 10,
  //       freeModeMomentumRatio: .6,
  //       freeModeMomentumVelocityRatio: .8,
  //     },
  //     376: {
  //       spaceBetween: 15,
  //     },
  //     769: {
  //       spaceBetween: 30,
  //       freeModeMomentumVelocityRatio: 1,
  //     },
  //   },
  // })

  //REAL ONE!!!
  //DO NOT DELETE
  // const productSwiperMedium = new Swiper('.product__slider-medium-container', {
  //   slidesPerView: 'auto',
  //   freeMode: true,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   breakpoints: {
  //     320: {
  //       spaceBetween: 10,
  //     },
  //     601: {
  //       spaceBetween: 20,
  //     },
  //     1381: {
  //       spaceBetween: 30,
  //     }
  //   }
  // })

  const videoSwiper = new Swiper('.video__slider-container', {
    slidesPerView: 'auto',
    noSwipingSelector: '.vjs-control-bar',
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        spaceBetween: 10,
      },
      376: {
        spaceBetween: 20,
      },
      911: {
        spaceBetween: 30,
      }
    }
  })

  const rateyoOptions = {
    readOnly: true,
    halfStar: true,
    normalFill: '#999999',
    ratedFill: '#FFA046',
  }
  $('.product__rating').rateYo({
    ...rateyoOptions,
    starWidth: '12px',
    spacing: '2px',
  })
  $('.product-page__review-rating').rateYo({
    ...rateyoOptions,
    starWidth: '14px',
    spacing: '2px',
  })
  $('.product-tabs__content-rating').rateYo({
    ...rateyoOptions,
    starWidth: '16px',
    spacing: '2px',
  })

  // $('.product__item-like').on('click', function () {
  //   $(this).toggleClass('product__item-like--active')
  // })

  const players = document.querySelectorAll('.swiper-slide .video-js')
  // const players = []
  for (let i = 0; i < players.length; i++) {
    players[i] = videojs(players[i])
  }
  $('.swiper-slide .video-js').on('click', function () {
    const index = $(this).closest('.swiper-slide').index()
    if ($(this).hasClass('vjs-paused')) {
      players[index].play()
    }
    if ($(this).hasClass('vjs-playing')) {
      players[index].pause()
    }
  })
  $('.swiper-slide .video-js').on('dblclick', function () {
    const index = $(this).closest('.swiper-slide').index()
    if ($(this).hasClass('vjs-fullscreen')) {
      players[index].exitFullscreen();
    }
    else {
      players[index].requestFullscreen();
    }
  })

  if (document.querySelector('.product-tabs__overviews .video-js')) {
    let productPagePlayer = videojs(document.querySelector('.product-tabs__overviews .video-js'))
    productPagePlayer.on('click', function () {
      if (productPagePlayer.hasClass('vjs-paused')) {
        productPagePlayer.play()
      }
      if (this.hasClass('vjs-playing')) {
        productPagePlayer.pause()
      }
    })
    productPagePlayer.on('dblclick', function () {
      if (productPagePlayer.hasClass('vjs-fullscreen')) {
        productPagePlayer.exitFullscreen();
      }
      else {
        productPagePlayer.requestFullscreen();
      }
    })
  }
  $('.vjs-control-bar').on('click', function (e) {
    e.stopPropagation()
  })
  $('.vjs-control-bar').on('dblclick', function (e) {
    e.stopPropagation()
  })


  $('.lang-btn').on('click', function () {
    $(this).hasClass('lang-ru') ?
      ($(this).removeClass('lang-ru'),
        $(this).addClass('lang-ua'),
        $(this).html('ua')) :
      ($(this).addClass('lang-ru'),
        $(this).removeClass('lang-ua'),
        $(this).html('ru'))
  })

  let headerCatalogScroll
  let headerTopMenu
  let mobilePrefix = ($(window).width() < 480) ? ('.header__nav.header__nav--mobile') : ('')

  $('.catalog__btn--close').on('click', function () {
    $('.header__catalog-wrapper').removeClass('active')
    $('.header__catalog-wrapper').slideUp(200, function () {
      $(`${mobilePrefix} .catalog__btn--close`).hide()
      $(`${mobilePrefix} .catalog__btn--open`).show()
    })
    $('body').removeClass('body-overflow-off')
    $('body').css({
      paddingRight: 0
    })
    $('.header__catalog-wrapper').css({
      'right': 0,
    })
  })
  $('.catalog__btn--open').on('click', function () {
    let headerTopMenu
    let headerCatalogScroll
    if (($(window).width() + scrollBarWidth > 480)) {
      headerTopMenu = $('.header__top').height()
      headerCatalogScroll = $(window).scrollTop()
    }
    else{
      headerTopMenu = 0
      headerCatalogScroll = 0
    }
    $('.header__catalog-wrapper').css({
      'top': headerTopMenu - headerCatalogScroll + 'px',
      'right': scrollBarWidth + 'px',
    })
    $('body').addClass('body-overflow-off')
    $('body').css({
      paddingRight: scrollBarWidth + 'px'
    })
    $('.header__catalog-wrapper').addClass('active')
    $('.header__catalog-wrapper').slideDown(300, function () {
      $(`${mobilePrefix} .catalog__btn--open`).hide()
      $(`${mobilePrefix} .catalog__btn--close`).css('display', 'flex')
    })
  })

  if (($(window).width() + scrollBarWidth > 910)){
    $('.header__catalog-link').on('mouseenter', function () {
      $('.header__catalog-link').removeClass('active')
      $(this).addClass('active')
      $('.header__subcategories-wrapper').removeClass('active')
      $('#' + $(this).data('subcategories')).addClass('active')
    })
  }
  else{
    $('.header__subcategories-wrapper').removeClass('active')
    $('.header__catalog-link').on('click', function (e) {
      e.preventDefault()
      $('.header__catalog-link').removeClass('active')
      $(this).addClass('active')
      $('.header__subcategories-wrapper').removeClass('active')
      $('#' + $(this).data('subcategories')).addClass('active')
    })
    $('.catalog__btn--close').on('click', function() {
      $('.header__catalog-link').removeClass('active')
      $('.header__subcategories-wrapper').removeClass('active')
    })
    $('.header__categories-close-btn').on('click', function() {
      $('.header__catalog-link').removeClass('active')
      $('.header__subcategories-wrapper').removeClass('active')
    })
  }
  

  $('.header__search-input').focusout(function () {
    $(this).val('')
  })

  const productPageSwiper = new Swiper('.product-page__slider-container', {
    resistanceRatio: 0.5,
    pagination: {
      el: '.swiper-pagination',
    },
  })

  $('.form-styler').styler()

  function hideDeliveryForm() {
    $('.product-page__form-delivery').addClass('product-page__form--hidden')
    $('body').removeClass('body-delivery-overflow-off')
    $('body').css({
      paddingRight: 0
    })
  }
  function showDeliveryForm() {
    $('.product-page__form-delivery').removeClass('product-page__form--hidden')
    $('body').addClass('body-delivery-overflow-off')
    $('body').css({
      paddingRight: scrollBarWidth + 'px'
    })
  }
  $('.product-page__form-delivery-close-btn').on('click', hideDeliveryForm)
  $('.product-page__form-delivery-body-overlay').on('click', hideDeliveryForm)

  $('.product-page__show-btn').on('click', function (e) {
    e.preventDefault()
    showDeliveryForm()
  })

  $('.product-tabs__tab').on('click', function (e) {
    e.preventDefault()
    $('.product-tabs__tab').removeClass('product-tabs__tab--active')
    $(this).addClass('product-tabs__tab--active')
    $('.product-tabs__content').removeClass('product-tabs__content--active')
    $($(this).attr('href')).addClass('product-tabs__content--active')
  })

  $('.product-page__review-like').on('click', function () {
    $(this).toggleClass('active')
    $(this).siblings('.product-page__review-like-number').toggleClass('active')
    $(this).siblings('.product-page__review-dislike').removeClass('active')
    $(this).siblings('.product-page__review-dislike-number').removeClass('active')
  })
  $('.product-page__review-dislike').on('click', function () {
    $(this).toggleClass('active')
    $(this).siblings('.product-page__review-dislike-number').toggleClass('active')
    $(this).siblings('.product-page__review-like').removeClass('active')
    $(this).siblings('.product-page__review-like-number').removeClass('active')
  })

  $('.product-tabs__tab-reviews').on('click', function () {
    $('.product-page__review-text').readmore({
      lessLink: '<a class="product-page__review-showmore" href="#">Свернуть</a>',
      moreLink: '<a class="product-page__review-showmore" href="#">Показать все</a>',
    })
  })

  let viewPoint
  if ($(window).width() + scrollBarWidth > 768) {
    viewPoint = 'f-'
    $('.catalog .product__item').hover(//меняет картинку, цвет тот же
      function () {
        let strParts = BuildSrc($(this))
        let hoveredSrc = strParts.hoveredSrc + 'f-' + strParts.colorPostfix + strParts.srcExtension
        let hoveredSourceSrc = strParts.hoveredSourceSrc + 'f-' + strParts.colorPostfix + strParts.sourceSrcExtension
        strParts.img.attr('src', hoveredSrc)
        strParts.sourceTag.attr('srcset', hoveredSourceSrc)
      },
      function () {
        let strParts = BuildSrc($(this))
        let normalSrc = strParts.hoveredSrc + 's-' + strParts.colorPostfix + strParts.srcExtension
        let normalSourceSrc = strParts.hoveredSourceSrc + 's-' + strParts.colorPostfix + strParts.sourceSrcExtension
        strParts.img.attr('src', normalSrc)
        strParts.sourceTag.attr('srcset', normalSourceSrc)
      }
    )
  }
  else{
    viewPoint = 's-'
  }

  $('.catalog__product-color').on('click', function () {//меняет цвет
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
    let colorPostfix = $(this).data('color')
    let img = $(this).closest('.product__item').find('.catalog__product-img')
    let sourceTag = img.siblings('source')
    let src = img.attr('src')
    let indexOfDot = src.indexOf('.')//getting index of .
    let srcExtension = src.slice(indexOfDot)//getting extension
    src = src.slice(0, indexOfDot)
    let newSrc = src.slice(0, src.length - 5)
    newSrc = newSrc + viewPoint + colorPostfix + srcExtension
    img.attr('src', newSrc)
    sourceTag.attr('srcset', newSrc)
  })

  function BuildSrc($img) {//формирует части строки пути
    let img = $img.find('.catalog__product-img')//getting an image object
    let sourceTag = img.siblings('source')

    let src = img.attr('src')//getting a source string
    let sourceSrc = sourceTag.attr('srcset')

    let indexOfDot = src.indexOf('.')//getting index of .
    let indexOfSourceDot = sourceSrc.indexOf('.')

    let srcExtension = src.slice(indexOfDot)//getting extension
    let sourceSrcExtension = sourceSrc.slice(indexOfSourceDot)
    // console.log(srcExtension);
    src = src.slice(0, indexOfDot)
    sourceSrc = sourceSrc.slice(0, indexOfSourceDot)
    // console.log(src)
    let colorPostfix = src.slice(-3)//getting color numbers 000 format
    // console.log(colorPostfix);
    let hoveredSrc = src.slice(0, src.length - 5)
    let hoveredSourceSrc = sourceSrc.slice(0, sourceSrc.length - 5)

    let strParts = {
      hoveredSrc,
      hoveredSourceSrc,
      srcExtension,
      sourceSrcExtension,
      colorPostfix,
      img,
      sourceTag,
    }
    return strParts
  }
  

  $('.aside-filter-item__heading').on('click', function () {
    $(this).parent().toggleClass('closed')
  })

  if ($(window).width() + scrollBarWidth > 375) {
    $('.aside-filter__label-wrapper').mCustomScrollbar()
  }

  var $range = $('.aside-filter-item__range-slider')
  var $inputFrom = $('.aside-filter-item__range-input--from');
  var $inputTo = $('.aside-filter-item__range-input--to');
  var instance;
  var min = $range.data('min')
  var max = $range.data('max')
  var from;
  var to;
  $range.ionRangeSlider({
    type: "double",
    hide_min_max: true,
    hide_from_to: true,
    step: 10,
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
  })
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
  })

  $('.aside-filter__label--size').on('click', function () {
    $(this).toggleClass('checked')
  })

  $('.aside-filter__label--size').each((index, element) => {
    if ($(element).find('.jq-checkbox.aside-filter__checkbox').hasClass('checked')) {
      $(element).addClass('checked')
    }
  })

  $('.catalog__top-view-type--tiles').on('click', function () {
    $('.catalog__top-view-type--rows').removeClass('active')
    $(this).addClass('active')
    $(this).closest('.catalog__inner').removeClass('view-type--rows')
    $('.product__rating').rateYo('option', 'starWidth', '12px')
  })
  let catalogStarWidth
  if ($(window).width() + scrollBarWidth > 1080) {
    catalogStarWidth = 20
  }
  else{
    catalogStarWidth = 14
  }
  $('.catalog__top-view-type--rows').on('click', function () {
    $('.catalog__top-view-type--tiles').removeClass('active')
    $(this).addClass('active')
    $(this).closest('.catalog__inner').addClass('view-type--rows')
    $('.product__rating').rateYo('option', 'starWidth', `${catalogStarWidth}px`)
  })

  if ($(window).width() + scrollBarWidth < 480) {
    $('.section__link').html('Все')
  }

  $('.footer__item-title').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $(this).next().slideUp(200)
    }
    else {
      $('.footer__item-title').removeClass('active')
      $(this).addClass('active')
      $('.footer__item-title').next().slideUp(200)
      $(this).next().slideDown(200)
    }
  })

  scrollDir({
    dir: "up",
  })

  for (let i = 0; i < $('.product-page__color-radio').length; i++) {
    $($('.product-page__color-radio')[i]).parent().css({
      backgroundColor: $($('.product-page__color-radio')[i]).css('backgroundColor')
    })
  }

  // function ChangeProductColor() {

  // }

  $('input.product-page__color-radio').on('click', function () {
    let colorId = $(this).data('product-color')
    let img = $('.product-page__slider-image')
    let source = img.siblings('source')
    let src = img.attr('src')
    let indexOfDot = src.indexOf('.')//getting index of .
    let srcExtension = src.slice(indexOfDot)//getting extension
    let sourceSrcExtension = source.attr('srcset').slice(indexOfDot)//getting extension
    src = src.slice(0, indexOfDot)
    let baseSrc = src.slice(0, src.length - 5)
    $('.product-page__slider-item').each((index, el) => {//меняем ракурс фото с помощью добавления нумерации через each в строку пути картинки
      let img = $(el).find('.product-page__slider-image')
      newSrc = baseSrc + (index + 1) + '-' + colorId + srcExtension
      img.attr('src', newSrc)
      let source = $(el).find('source')
      newSourceSrc = baseSrc + (index + 1) + '-' + colorId + sourceSrcExtension
      source.attr('srcset', newSourceSrc)
    })
    // newSrc = baseSrc + colorId + srcExtension
    // newSourceSrc = baseSrc + colorId + sourceSrcExtension
    // img.attr('src', newSrc)
    // source.attr('srcset', newSourceSrc)
  })

  $('.catalog__top-form-open-filters-btn').on('click', function(e) {
    e.preventDefault()
    $('.catalog__aside-filters').addClass('is-active')
    if ($(window).width() + scrollBarWidth < 376) {
      $('body').addClass('body-delivery-overflow-off')
    }
  })
  $('.catalog__aside-filter-close-btn').on('click', function(e) {
    e.preventDefault()
    $('.catalog__aside-filters').removeClass('is-active')
    $('body').removeClass('body-delivery-overflow-off')
  })

  // console.log('main script end')

})
