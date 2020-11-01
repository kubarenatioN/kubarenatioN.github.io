$(function () {

  const headerSwiper = new Swiper('.header__slider-container', {
    navigation: {
      nextEl: '.header__slider-button-next',
      prevEl: '.header__slider-button-prev',
    },
    resistanceRatio: 0.4,
  })

  const mainDirectionsSwiper = new Swiper('.main-directions__slider-container', {
    navigation: {
      nextEl: '.main-directions__slider-button-next',
      prevEl: '.main-directions__slider-button-prev',
    },
    resistanceRatio: 0.4,
    autoHeight: true,
  })

  const reviewsSwiper = new Swiper('.reviews__slider-container', {
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
      },
      // when window width is >= 480px
      831: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
      },
    },
    navigation: {
      nextEl: '.reviews__slider-button-next',
      prevEl: '.reviews__slider-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    resistanceRatio: 0.4,
  })

  var x, i, j, l, ll, selElmnt, a, b, c;
  /*look for any elements with the class "custom-select":*/
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < ll; j++) {
      /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }
  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
  then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);

  // if($(window).width() < 601){
  $('.header__menu-btn').on('click', function () {
    $(this).toggleClass('is-active')
    $('.header__mobile-bottom .header__nav').toggleClass('is-active')
    $('.header__mobile-bottom .header__nav').slideToggle(200)
  })
  // }

  $('.footer__office-title').on('click', function () {
    if (!$(this).hasClass('active')) {
      $('.footer__office-title').removeClass('active')
      $('.footer__minsk-title').removeClass('active')
      $('.footer__office-wrapper').removeClass('active')
      $(this).addClass('active')
      $('.footer__office-wrapper').slideUp(200)
      $('.footer__minsk-wrapper').removeClass('active')
      $('.footer__minsk-wrapper').slideUp(200)
      $(this).next('.footer__office-wrapper').addClass('active')
      $(this).next('.footer__office-wrapper').slideDown(200)
    }
  })
  $('.footer__minsk-title').on('click', function () {
    if (!$(this).hasClass('active')) {
      $('.footer__office-title').removeClass('active')
      $(this).addClass('active')
      $('.footer__office-wrapper').removeClass('active')
      $('.footer__office-wrapper').slideUp(200)
      $(this).next('.footer__minsk-wrapper').addClass('active')
      $(this).next('.footer__minsk-wrapper').slideDown(200)
    }
  })


})