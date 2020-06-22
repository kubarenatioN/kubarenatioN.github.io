$(function() {

  

  function scrollProgress() {
    function getCssValuePrefix() {
      var rtrnVal = '';//default to standard syntax
      var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];

      // Create a temporary DOM object for testing
      var dom = document.createElement('div');

      for (var i = 0; i < prefixes.length; i++) {
        // Attempt to set the style
        dom.style.background = prefixes[i] + 'linear-gradient(#000000, #ffffff)';

        // Detect if the style was successfully set
        if (dom.style.background) {
          rtrnVal = prefixes[i];
        }
      }

      dom = null;
      delete dom;

      return rtrnVal;
    }

    let periodProgressBar = $('.history__period-progress');
    let containerHeight = $('.history__inner').height();
    let headerHeight = $('.header').height();
    let periodsCollection = $('.history__period');
    let yearDigitsCollection = $('.history__period-digits');
    let maxScroll = 0;

    let periodsHeightArr = new Array;
    for (let i = 0; i < periodsCollection.length; i++) {
      periodsHeightArr[i] = periodsCollection[i].offsetHeight;
    }

    let digitsHeightArr = 500;

    let index = 0;
    let scrolled = (maxScroll - periodsCollection[index].offsetTop) / (periodsHeightArr[index] - 300) * 100;

    // scrollContent.onscroll = function () { increaseProgress() };
    window.onscroll = function () {
      increaseProgress();
      if (window.pageYOffset >= 1000) {
        btnToTop.style.display = 'flex';
      }
      else {
        btnToTop.style.display = 'none';
      }
    };
    let strokeArrayValue = 620;
    function increaseProgress() {
      let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

      let scrolled = (maxScroll - periodsCollection[index].offsetTop) / (periodsHeightArr[index] - 300) * 100;

      let digitsOffset = ((maxScroll + 470 - periodsCollection[index].offsetTop) / (digitsHeightArr - 50));
      let offsetValue = strokeArrayValue * (1 - digitsOffset);

      if (maxScroll < windowScroll) {
        maxScroll = windowScroll;

        if (maxScroll + 500 >= periodsCollection[index].offsetTop && offsetValue <= strokeArrayValue) {
          yearDigitsCollection[index].style.strokeDashoffset = offsetValue + '';
          if (offsetValue < 0) {
            yearDigitsCollection[index].style.strokeDashoffset = '0';
          }
        }
        if (index == periodsCollection.length - 1) {
          return 0;
        }
        if (maxScroll >= periodsCollection[index].offsetTop && scrolled > 0) {
          periodProgressBar[index].style.backgroundImage = getCssValuePrefix() + 'gradient(linear, left top, left bottom, from(#fff), color-stop(' + scrolled + '%, #fff), color-stop(' + scrolled + '%, rgba(255,255,255,0.2)), to(rgba(255,255,255,0.2)))';
          if (scrolled > 100) {
            periodProgressBar[index].style.backgroundImage = getCssValuePrefix() + 'gradient(linear, left top, left bottom, from(#fff), color-stop(' + 100 + '%, #fff), color-stop(' + 100 + '%, rgba(255,255,255,0.2)), to(rgba(255,255,255,0.2)))';
            index++;
            scrolled = 0;
          }
        }

      }

      console.log(windowScroll);
      console.log(scrolled);
      console.log(maxScroll);

    }
    increaseProgress();

  
    scrolled = (maxScroll - periodsCollection[index].offsetTop) / (periodsHeightArr[index] - 300) * 100;

    for (let i = 0, index = 0; i < periodsCollection.length;i++, index++) {
      scrolled = (maxScroll - periodsCollection[index].offsetTop) / (periodsHeightArr[index] - 300) * 100;
      let digitsOffset = ((maxScroll + 470 - periodsCollection[index].offsetTop) / (digitsHeightArr - 50));
      let offsetValue = strokeArrayValue * (1 - digitsOffset);

      if (maxScroll + 500 >= periodsCollection[index].offsetTop && offsetValue <= strokeArrayValue) {
        yearDigitsCollection[index].style.strokeDashoffset = offsetValue + '';
        if (offsetValue < 0) {
          yearDigitsCollection[index].style.strokeDashoffset = '0';
        }
      }

      if (maxScroll >= periodsCollection[index].offsetTop && scrolled > 0) {
          periodProgressBar[index].style.backgroundImage = getCssValuePrefix() + 'gradient(linear, left top, left bottom, from(#fff), color-stop(' + scrolled + '%, #fff), color-stop(' + scrolled + '%, rgba(255,255,255,0.2)), to(rgba(255,255,255,0.2)))';
          if (scrolled > 100) {
            periodProgressBar[index].style.backgroundImage = getCssValuePrefix() + 'gradient(linear, left top, left bottom, from(#fff), color-stop(' + 100 + '%, #fff), color-stop(' + 100 + '%, rgba(255,255,255,0.2)), to(rgba(255,255,255,0.2)))';
          }
        }
    }
  }
  
  scrollProgress();

  

  wow = new WOW(
    {
      mobile: false,
    }
  );
  wow.init();

  if ($('body').width() < 1192) {
    $('.period__image-wrapper').removeClass('animate__animated');
    $('.period__content').removeClass('animate__animated');
  }

  btnToTop = document.getElementById('btnTop');

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
})