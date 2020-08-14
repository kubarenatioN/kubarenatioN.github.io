$(function () {

  $('.product-item__number').styler()

  let scrollOptions = {
    damping: 0.05,
    plugins: {
      overscroll: {
        effect: 'bounce',
        damping: 0.15,
        maxOverscroll: 80
      }
    },
  }

  $('.tab').on('click', function(e) {
    e.preventDefault()

    $(this).siblings().removeClass('tab--active')
    // Scrollbar.destroy(document.querySelector('.tabs__content--active'))
    $(this).parent().next().children().removeClass('tabs__content--active')
    // $(this).parent().next().children().removeAttr('data-scrollbar')
    $(this).addClass('tab--active')
    $($(this).attr('href')).addClass('tabs__content--active')
    // Scrollbar.init(document.querySelector('.tabs__content--active'), scrollOptions)

  })

  let Scrollbar = window.Scrollbar
  Scrollbar.use(window.OverscrollPlugin)

  $('#fullpage').fullpage({
    autoScrolling: true,
    sectionSelector: '.section-page',
    anchors: ['main', 'about', 'catalog', 'discount', 'delivery', 'contacts'],
    menu: '.menu__list',
    normalScrollElements: '.catalog__tabs-wrapper, .discount__inner',
    fixedElements: '.aside, .cart, .menu__list, .hamburger',
    // responsiveWidth: 1201,
  })
  if($(window).width() < 1201) {
    fullpage_api.destroy()
    $('main').on('click', function() {
      $('.hamburger').removeClass('is-active')
      $('.menu__list').removeClass('menu__list--active')
    })
    $('main').css({
      height: '100vh'
    })
    scrollOptions = {
      damping: 0.05,
      continuousScrolling: true,
      plugins: {
        overscroll: false,
      },
    }
    for (let i = 0; i < $('.menu__link').length; i++){
      let sectionName = $('.menu__link').eq(i).attr('href')
      $('.section-page').eq(i).attr('id', sectionName.slice(1))
    }
  }

  let catalogScrollBars = []
  for (let i = 0; i < document.querySelectorAll('.tabs__content-inner').length; i++) {
    catalogScrollBars[i] = Scrollbar.init(document.querySelectorAll('.tabs__content-inner')[i], scrollOptions)
  }
  Scrollbar.init(document.querySelector('.discount__content'), scrollOptions)

  $('input.product-item__number').on('input', function() {
    let price = $(this).val() * 15
    $(this).closest('.product-item__order-amount').prev().find('.product-item__price--calculator').html(price)
  })

  $('.hamburger').on('click', function() {
    $(this).toggleClass('is-active')
    $('.menu__list').toggleClass('menu__list--active')
    if ($(this).hasClass('is-active')) {
      $(this).css({
        position: 'fixed',
        transform: 'translateY(0px)'
      })
    }
  })

  let headerHeight = $('.header__wrapper').outerHeight()
  let asideHeight = $('.aside').outerHeight()
  console.log(asideHeight)
  scrollDir({
    dir: "up"
  })
  $(window).on('scroll', function() {
    
    // console.log(headerHeight)

    let scrollDirection = document.getElementsByTagName('html')[0].dataset.scrolldir
    if ($(window).scrollTop() > headerHeight - asideHeight) {
      $('.aside, .cart').addClass('fixed')
    }
    if ($(window).scrollTop() > headerHeight) {
      $('.aside, .cart').addClass('transitioned')
      if (scrollDirection == 'up') {
        $('.aside, .cart').addClass('expanded')
      }
      else{
        $('.aside, .cart').removeClass('expanded')
      }
    }
    else {
      $('.aside, .cart').removeClass('fixed')
      $('.aside, .cart').removeClass('transitioned')
      $('.aside, .cart').removeClass('expanded')
    }
  })
  
  $('.menu__item').on('click', function() {
    $('.menu__item').removeClass('active')
    $(this).addClass('active')
  })
  
  $('.catalog__tabs').slideUp(300)
  $('.catalog__tabs-show').on('click', function() {
    $(this).toggleClass('active')
    $('.catalog__tabs').slideToggle(300)
  })

})

