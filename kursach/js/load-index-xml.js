$(function () {

  // console.log('xmlLoad script start');

  const rateyoOptions = {
    readOnly: true,
    halfStar: true,
    normalFill: '#999999',
    ratedFill: '#FFA046',
  }

  const scrollBarWidth = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth)
  productSwiper = new Object()

  function loadTopSaledGoods(dataFile, sectionId) {

    return new Promise(resolve => {
      let xhttp = new XMLHttpRequest()
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          topSaledGoodsXmlDataParse(this, sectionId, resolve)
        }
      };
      xhttp.open('GET', 'xml/' + dataFile + '.xml', true)//Формируем характер запроса
      xhttp.send()//Отправляем запрос
    })

  }
  function loadGeneralGoods(dataFile, sectionId) {

    return new Promise(resolve => {
      let xhttp = new XMLHttpRequest()
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          generalGoodsXmlDataParse(this, sectionId, resolve)
        }
      };
      xhttp.open('GET', 'xml/' + dataFile + '.xml', true)//Формируем характер запроса
      xhttp.send()//Отправляем запрос
    })

  }
  function loadMediumGoods(dataFile, sectionId) {

    return new Promise(resolve => {
      let xhttp = new XMLHttpRequest()
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          mediumGoodsXmlDataParse(this, sectionId, resolve)
        }
      };
      xhttp.open('GET', 'xml/' + dataFile + '.xml', true)//Формируем характер запроса
      xhttp.send()//Отправляем запрос
    })

  }
  function loadHugeGoods(dataFile, sectionId) {

    return new Promise(resolve => {
      let xhttp = new XMLHttpRequest()
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          hugeGoodsXmlDataParse(this, sectionId, resolve)
        }
      };
      xhttp.open('GET', 'xml/' + dataFile + '.xml', true)//Формируем характер запроса
      xhttp.send()//Отправляем запрос
    })

  }

  function generalGoodsXmlDataParse(xml, sectionId, resolve) {

    let xmlDOM = xml.responseXML//Создаем XML Dom
    let elements = xmlDOM.getElementsByTagName('PRODUCT')//Выбираем товары
    // console.log(xmlDOM);
    document.querySelector('#' + sectionId).querySelector('.swiper-wrapper').innerHTML = ''//Очищаем wrapper
    // console.log('data loading');
    for (let i = 0; i < elements.length; i++) {
      let category = elements[i].getElementsByTagName('CATEGORY')[0].childNodes[0].nodeValue
      let title = elements[i].getElementsByTagName('NAME')[0].childNodes[0].nodeValue
      let rating = elements[i].getElementsByTagName('RATING')[0].childNodes[0].nodeValue
      let reviews = elements[i].getElementsByTagName('REVIEWS')[0].childNodes[0].nodeValue
      let price = elements[i].getElementsByTagName('PRICE')[0].childNodes[0].nodeValue
      let oldprice = elements[i].getElementsByTagName('OLDPRICE')[0].childNodes[0].nodeValue
      let imgsrc = elements[i].getElementsByTagName('IMGSRC')[0].childNodes[0].nodeValue
      let isNew = elements[i].getAttribute('isNew')
      let isSale = elements[i].getAttribute('isSale')
      if (isNew && isSale) {
        isNew = ''
      }
      document.querySelector('#' + sectionId).querySelector('.swiper-wrapper').innerHTML +=
        `<div class="swiper-slide">
            <div class="product__item ${isNew ? 'product__item--new' : ''} ${isSale ? 'product__item--sale' : ''}">
              <a class="product__item-image" href="#">
                <picture>
                  <source type="image/webp" srcset="${imgsrc}">
                  <img class="product__img" src="${imgsrc}" alt="Product-image">
                </picture>
              </a>
              <a class="product__item-category" href="#">
                ${category}
              </a>
              <a class="product__item-title" href="#">
                ${title}
              </a>
              <div class="product__item-rating">
                <div class="product__rating" data-rateyo-rating="${rating}">${rating}</div>
                <div class="product__item-reviews"><span class="product__reviews-number">${reviews}</span> отзывов</div>
              </div>
              <div class="product__item-price">
                <div class="product__price-old">${oldprice} Br.</div>
                <div class="product__price-new">${price} Br.</div>
              </div>
              <button class="product__item-cart"></button>
              <button class="product__item-like"></button>
            </div>
          </div>`
    }
    if ($(window).width() + scrollBarWidth > 768) {
      productSwiper[sectionId] = new Swiper('#' + sectionId + ' .product__slider-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          769: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1001: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1201: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          1367: {
            slidesPerView: 5,
            spaceBetween: 15
          },
          1600: {
            slidesPerView: 5,
            spaceBetween: 30
          }
        },
      })
    }
    $('.product__rating').rateYo({
      ...rateyoOptions,
      starWidth: '12px',
      spacing: '2px',
    })
    resolve()

  }
  function hugeGoodsXmlDataParse(xml, sectionId, resolve) {


    let xmlDOM = xml.responseXML//Создаем XML Dom
    let elements = xmlDOM.getElementsByTagName('PRODUCT')//Выбираем товары
    // console.log(xmlDOM);
    document.querySelector('#' + sectionId).querySelector('.swiper-wrapper').innerHTML = ''//Очищаем wrapper
    // console.log('data loading');
    for (let i = 0; i < elements.length; i++) {
      let category = elements[i].getElementsByTagName('CATEGORY')[0].childNodes[0].nodeValue
      let title = elements[i].getElementsByTagName('NAME')[0].childNodes[0].nodeValue
      let rating = elements[i].getElementsByTagName('RATING')[0].childNodes[0].nodeValue
      let reviews = elements[i].getElementsByTagName('REVIEWS')[0].childNodes[0].nodeValue
      let price = elements[i].getElementsByTagName('PRICE')[0].childNodes[0].nodeValue
      let oldprice = elements[i].getElementsByTagName('OLDPRICE')[0].childNodes[0].nodeValue
      let imgsrc = elements[i].getElementsByTagName('IMGSRC')[0].childNodes[0].nodeValue
      let isNew = elements[i].getAttribute('isNew')
      let isSale = elements[i].getAttribute('isSale')
      if (isNew && isSale) {
        isNew = ''
      }
      document.querySelector('#' + sectionId).querySelector('.swiper-wrapper').innerHTML +=
        `<div class="swiper-slide">
            <div class="product__item product__item-huge ${isNew ? 'product__item--new' : ''} ${isSale ? 'product__item--sale' : ''}">
              <a class="product__item-image" href="#">
                <picture>
                  <source type="image/webp" srcset="${imgsrc}">
                  <img class="product__img" src="${imgsrc}" alt="">
                </picture>
              </a>
              <div class="product__item-descr">
                <a class="product__item-category" href="#">
                  ${category}
                </a>
                <a class="product__item-title" href="#">
                  ${title}
                </a>
                <div class="product__item-rating">
                  <div class="product__rating" data-rateyo-rating="${rating}"></div>
                  <div class="product__item-reviews"><span class="product__reviews-number">${reviews}</span> отзывов</div>
                </div>
                <div class="product__item-footer">
                  <div class="product__item-price">
                    <div class="product__price-old">${oldprice} Br.</div>
                    <div class="product__price-new">${price} Br.</div>
                  </div>
                  <a href="#" class="product__item-purchase">Купить</a>
                </div>
              </div>
              <button class="product__item-like"></button>
            </div>
          </div>`
    }
    const productSwiperHuge = new Swiper('.product__slider-huge-container', {
      slidesPerView: 'auto',
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
        // when window width is >= 320px
        320: {
          spaceBetween: 10,
          freeModeMomentumRatio: .6,
          freeModeMomentumVelocityRatio: .8,
        },
        376: {
          spaceBetween: 15,
        },
        769: {
          spaceBetween: 30,
          freeModeMomentumVelocityRatio: 1,
        },
      },
    })
    $('.product__rating').rateYo({
      ...rateyoOptions,
      starWidth: '12px',
      spacing: '2px',
    })

    resolve()

  }
  function mediumGoodsXmlDataParse(xml, sectionId, resolve) {


    let xmlDOM = xml.responseXML//Создаем XML Dom
    let elements = xmlDOM.getElementsByTagName('PRODUCT')//Выбираем товары
    // console.log(xmlDOM);
    document.querySelector('#' + sectionId).querySelector('.swiper-wrapper').innerHTML = ''//Очищаем wrapper
    // console.log('data loading');
    for (let i = 0; i < elements.length; i++) {
      let category = elements[i].getElementsByTagName('CATEGORY')[0].childNodes[0].nodeValue
      let title = elements[i].getElementsByTagName('NAME')[0].childNodes[0].nodeValue
      let price = elements[i].getElementsByTagName('PRICE')[0].childNodes[0].nodeValue
      let oldprice = elements[i].getElementsByTagName('OLDPRICE')[0].childNodes[0].nodeValue
      let imgsrc = elements[i].getElementsByTagName('IMGSRC')[0].childNodes[0].nodeValue
      let isNew = elements[i].getAttribute('isNew')
      let isSale = elements[i].getAttribute('isSale')
      if (isNew && isSale) {
        isNew = ''
      }
      document.querySelector('#' + sectionId).querySelector('.swiper-wrapper').innerHTML +=
        `<div class="swiper-slide">
            <div class="product__item product__item-medium ${isNew ? 'product__item--new' : ''} ${isSale ? 'product__item--sale' : ''}">
              <a class="product__item-image" href="#">
                <picture>
                  <source type="image/webp" srcset="${imgsrc}">
                  <img class="product__img" src="${imgsrc}" alt="">
                </picture>
              </a>
              <a class="product__item-category" href="#">
                ${category}
              </a>
              <a class="product__item-title" href="#">
                ${title}
              </a>
              <div class="product__item-footer">
                <div class="product__item-price">
                  <div class="product__price-old">${oldprice} Br.</div>
                  <div class="product__price-new">${price} Br.</div>
                </div>
                <a href="#" class="product__item-purchase">Купить</a>
              </div>
              <button class="product__item-like"></button>
            </div>
          </div>`
    }
    const productSwiperMedium = new Swiper('.product__slider-medium-container', {
      slidesPerView: 'auto',
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
        601: {
          spaceBetween: 20,
        },
        1381: {
          spaceBetween: 30,
        }
      }
    })
    $('.product__rating').rateYo({
      ...rateyoOptions,
      starWidth: '12px',
      spacing: '2px',
    })

    resolve()

  }
  function topSaledGoodsXmlDataParse(xml, sectionId, resolve) {
    
    let xmlDOM = xml.responseXML//Создаем XML Dom
    let elements = xmlDOM.getElementsByTagName('PRODUCT')//Выбираем товары
    // console.log(xmlDOM);
    document.querySelector('#' + sectionId).querySelector('.top-trade__wrapper').innerHTML = ''//Очищаем wrapper
    // console.log('data loading');
    for (let i = 0; i < elements.length; i++) {
      let category = elements[i].getElementsByTagName('CATEGORY')[0].childNodes[0].nodeValue
      let title = elements[i].getElementsByTagName('NAME')[0].childNodes[0].nodeValue
      let rating = elements[i].getElementsByTagName('RATING')[0].childNodes[0].nodeValue
      let reviews = elements[i].getElementsByTagName('REVIEWS')[0].childNodes[0].nodeValue
      let price = elements[i].getElementsByTagName('PRICE')[0].childNodes[0].nodeValue
      let oldprice = elements[i].getElementsByTagName('OLDPRICE')[0].childNodes[0].nodeValue
      let imgsrc = elements[i].getElementsByTagName('IMGSRC')[0].childNodes[0].nodeValue
      let isNew = elements[i].getAttribute('isNew')
      let isSale = elements[i].getAttribute('isSale')
      if (isNew && isSale) {
        isNew = ''
      }
      document.querySelector('#' + sectionId).querySelector('.top-trade__wrapper').innerHTML +=
        `<div class="product__item ${isNew ? 'product__item--new' : ''} ${isSale ? 'product__item--sale' : ''}">
          <a class="product__item-image" href="#">
            <picture>
              <source type="image/webp" srcset="${imgsrc}">
              <img class="product__img" src="${imgsrc}" alt="">
            </picture>
          </a>
          <a class="product__item-category" href="#">
            ${category}
          </a>
          <a class="product__item-title" href="#">
            ${title}
          </a>
          <div class="product__item-rating">
            <div class="product__rating" data-rateyo-rating="${rating}"></div>
            <div class="product__item-reviews"><span class="product__reviews-number">${reviews}</span> отзывов</div>
          </div>
          <div class="product__item-price">
            <div class="product__price-old">${oldprice} Br.</div>
            <div class="product__price-new">${price} Br.</div>
          </div>
          <button class="product__item-cart"></button>
          <button class="product__item-like"></button>
        </div>`
    }
    $('.product__rating').rateYo({
      ...rateyoOptions,
      starWidth: '12px',
      spacing: '2px',
    })
    resolve()
  }

  Promise.all([
    loadGeneralGoods('new-goods', 'new-goods'),
    loadHugeGoods('more-goods', 'more-goods'),
    loadGeneralGoods('often-wished-goods', 'often-wished-goods'),
    loadGeneralGoods('last-seen-goods', 'last-seen-goods'),
    loadMediumGoods('orange-only-goods', 'orange-only-goods'),
    loadTopSaledGoods('top-saled-goods', 'top-saled-goods'),
  ]).then(() => {
    console.log('all promises ended');
    $('.product__item .product__item-like').on('click', function () {
      $(this).toggleClass('product__item-like--active')
    })
  })

  // console.log('xmlLoad script end');

})