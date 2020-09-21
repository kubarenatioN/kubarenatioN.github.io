$(function () {

  const headerSwiper = new Swiper('.header__slider-container', {
    direction: 'vertical',
    speed: 800,
    pagination: {
      el: '.swiper-pagination',
      // clickable: true,
    },
    allowTouchMove: false,
    loop: true,
    autoplay: {
      delay: 6000,
      reverseDirection: true,
    },
  })

  const productSwiper = new Swiper('.product__slider-container', {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  const productSwiperHuge = new Swiper('.product__slider-huge-container', {
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  const productSwiperMedium = new Swiper('.product__slider-medium-container', {
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  const videoSwiper = new Swiper('.video__slider-container', {
    slidesPerView: 'auto',
    noSwipingSelector: '.vjs-control-bar',
    freeMode: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  const rateyoOptions = {
    readOnly: true,
    halfStar: true,
    normalFill: '#999999',
    ratedFill: '#00a046',
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

  $('.product__item-like').on('click', function () {
    $(this).toggleClass('product__item-like--active')
  })

  const videos = document.querySelectorAll('.video-js')
  const players = []
  
  for (let i = 0; i < videos.length; i++) {
    players[i] = videojs(videos[i])
  }

  $('.video-js').on('click', function () {
    const index = $(this).closest('.swiper-slide').index()
    if ($(this).hasClass('vjs-paused')) {
      players[index].play()
    }
    if ($(this).hasClass('vjs-playing')) {
      players[index].pause()
    }
  })
  $('.video-js').on('dblclick', function () {
    const index = $(this).closest('.swiper-slide').index()
    if ($(this).hasClass('vjs-fullscreen')){
      players[index].exitFullscreen();
    }
    else{
      players[index].requestFullscreen();
    }
  })
  $('.vjs-control-bar').on('click', function (e) {
    e.stopPropagation()
  })
  $('.vjs-control-bar').on('dblclick', function (e) {
    e.stopPropagation()
  })

  $('.lang-btn').on('click', function() {
    $(this).hasClass('lang-ru') ? 
    ($(this).removeClass('lang-ru'), 
    $(this).addClass('lang-ua'), 
    $(this).html('ua')) :
    ($(this).addClass('lang-ru'),
    $(this).removeClass('lang-ua'),
    $(this).html('ru'))
  })

  const productPageSwiper = new Swiper('.product-page__slider-container', {
    resistanceRatio: 0.5,
    pagination: {
      el: '.swiper-pagination',
    },
  })

  $('.form-styler').styler()

  const scrollBarWidth = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth)

  function hideDeliveryForm() {
    $('.product-page__form-delivery').addClass('product-page__form--hidden')
    $('body').removeClass('body-overflow-off')
    $('body').css({
      paddingRight: 0
    })
  }
  function showDeliveryForm() {
    $('.product-page__form-delivery').removeClass('product-page__form--hidden')
    $('body').addClass('body-overflow-off')
    $('body').css({
      paddingRight: scrollBarWidth + 'px'
    })
  }
  $('.product-page__form-delivery-close-btn').on('click', hideDeliveryForm)
  $('.product-page__form-delivery-body-overlay').on('click', hideDeliveryForm)

  $('.product-page__show-btn').on('click', function(e) {
    e.preventDefault()
    showDeliveryForm()
  })  

  $('.product-tabs__tab').on('click', function(e) {
    e.preventDefault()
    $('.product-tabs__tab').removeClass('product-tabs__tab--active')
    $(this).addClass('product-tabs__tab--active')
    $('.product-tabs__content').removeClass('product-tabs__content--active')
    $($(this).attr('href')).addClass('product-tabs__content--active')
  })  

  $('.product-page__review-like').on('click', function() {
    $(this).toggleClass('active')
    $(this).siblings('.product-page__review-like-number').toggleClass('active')
    $(this).siblings('.product-page__review-dislike').removeClass('active')
    $(this).siblings('.product-page__review-dislike-number').removeClass('active')
  })
  $('.product-page__review-dislike').on('click', function() {
    $(this).toggleClass('active')
    $(this).siblings('.product-page__review-dislike-number').toggleClass('active')
    $(this).siblings('.product-page__review-like').removeClass('active')
    $(this).siblings('.product-page__review-like-number').removeClass('active')
  })

  $('.product-tabs__tab-reviews').on('click', function() {
    $('.product-page__review-text').readmore({
      lessLink: '<a class="product-page__review-showmore" href="#">Свернуть</a>',
      moreLink: '<a class="product-page__review-showmore" href="#">Показать все</a>',
    })
  })

  $('.catalog__product-color').on('click', function() {
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
    newSrc = newSrc + 'f-' + colorPostfix + srcExtension
    img.attr('src', newSrc)
    sourceTag.attr('srcset', newSrc)
  })

  function BuildSrc($img) {
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

  $('.catalog .product__item').hover(
    function() {
      let strParts = BuildSrc($(this))
      let hoveredSrc = strParts.hoveredSrc + 'f-' + strParts.colorPostfix + strParts.srcExtension
      let hoveredSourceSrc = strParts.hoveredSourceSrc + 'f-' + strParts.colorPostfix + strParts.sourceSrcExtension
      strParts.img.attr('src', hoveredSrc)
      strParts.sourceTag.attr('srcset', hoveredSourceSrc)
    },
    function() {
      let strParts = BuildSrc($(this))
      let normalSrc = strParts.hoveredSrc + 's-' + strParts.colorPostfix + strParts.srcExtension
      let normalSourceSrc = strParts.hoveredSourceSrc + 's-' + strParts.colorPostfix + strParts.sourceSrcExtension
      strParts.img.attr('src', normalSrc)
      strParts.sourceTag.attr('srcset', normalSourceSrc)
    }
  )

  $('.aside-filter-item__heading').on('click', function() {
    $(this).parent().toggleClass('closed')
  })

  $('.aside-filter__label-wrapper').mCustomScrollbar({
    scrollInertia: 500,
    // mouseWheel: {
    //   preventDefault: true
    // }
  })

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

  $('.aside-filter__label--size').on('click', function() {
    $(this).toggleClass('checked')
  })
  
  $('.aside-filter__label--size').each((index, element) => {
    if ($(element).find('.jq-checkbox.aside-filter__checkbox').hasClass('checked')){
      $(element).addClass('checked')
    }
  })

  $('.catalog__top-view-type--tiles').on('click', function() {
    $('.catalog__top-view-type--rows').removeClass('active')
    $(this).addClass('active')
    $(this).closest('.catalog__inner').removeClass('view-type--rows')
    $('.product__rating').rateYo('option', 'starWidth', '12px')
  })
  $('.catalog__top-view-type--rows').on('click', function() {
    $('.catalog__top-view-type--tiles').removeClass('active')
    $(this).addClass('active')
    $(this).closest('.catalog__inner').addClass('view-type--rows')
    $('.product__rating').rateYo('option', 'starWidth', '20px')
  })

})
