$(function() {

  let mastersSwiper = new Swiper('.masters-slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.masters-slider-button-next',
      prevEl: '.masters-slider-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      1400: {
        slidesPerView: 3,
        spaceBetween: 40,
      }
    },
  })

  let aboutSwiper = new Swiper('.about-slider', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.about-slider-button-next',
      prevEl: '.about-slider-button-prev',
    },
  });

  function checkScroll(){
    let scroll = $(window).scrollTop()
    if (scroll > 0) {
      $('.header-menu').addClass('scrolled')
    }
    else {
      $('.header-menu').removeClass('scrolled')
    }
  }
  function clearMenu(){
    if ($(window).width() <= 768) {
      $('.header-menu button').removeClass('active')
      $('.menu').slideUp(200)
    }
  }
  checkScroll()
  $(window).on('scroll', checkScroll)

  $('.menu a').on('click', function(e) {
    clearMenu()
    e.preventDefault()
    let el = $($(this).attr('href'))
    $('html, body').animate({
      scrollTop: el.offset().top
    }, 400)
  })

  $('.logo').on('click', function(e) {
    clearMenu()
    e.preventDefault()
    let el = $($(this).attr('href'))
    $('html, body').animate({
      scrollTop: el.offset().top
    }, 400)
  })

  $('.header-main button').on('click', function(e) {
    e.preventDefault()
    $('html, body').animate({
      scrollTop: $('#contacts').offset().top
    }, 400)
  })

  $('.portfolio-tabs a').on('click', function(e) {
    e.preventDefault()
    $('.portfolio-tabs a').removeClass('active')
    $(this).addClass('active')
    let container = $($(this).attr('href'))
    $('.portfolio-content').removeClass('active')
    container.addClass('active')
  })

  $('.contacts-form button').on('click', function() {
    let isCompleted = 0
    for (let i = 0; i < $('.contacts-form input').length; i++) {
      if ($('.contacts-form input').eq(i).val()){
        isCompleted++
      }
    }
    if (isCompleted == 2){
      document.querySelector('.contacts-form form').reset()
      alert('Спасибо! Скоро мы Вам позвоним.')
    }
  })

  $('.header-menu button').on('click', function() {
    $(this).toggleClass('active')
    $('.menu').slideToggle(200)
  })

})