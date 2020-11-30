// $(function () {
// document.addEventListener('DOMContentLoaded', function (){

console.log('xmlLoad script start');
function loadMoreGoods(sectionId) {
  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      moreGoodsXmlDataParse(this, sectionId)
    }
  };
  xhttp.open('GET', 'more-goods.xml', true)//Формируем характер запроса
  xhttp.send()//Отправляем запрос
}
function loadNewGoods(sectionId) {
  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      newGoodsXmlDataParse(this, sectionId)
    }
  };
  xhttp.open('GET', 'new-goods.xml', true)//Формируем характер запроса
  xhttp.send()//Отправляем запрос
}
function newGoodsXmlDataParse(xml, sectionId) {
  let xmlDOM = xml.responseXML//Создаем XML Dom
  let elements = xmlDOM.getElementsByTagName('PRODUCT')//Выбираем товары
  // console.log(xmlDOM);
  document.querySelector('#' + sectionId).querySelector('.swiper-wrapper').innerHTML = ''//Очищаем wrapper
  // console.log('data loading');
  for (let i = 0; i < elements.length; i++) {
    let category = elements[i].getElementsByTagName('CATEGORY')[0].childNodes[0].nodeValue
    let title = elements[i].getElementsByTagName('NAME')[0].childNodes[0].nodeValue
    let rating = elements[i].getElementsByTagName('RATING')[0].childNodes[0].nodeValue
    let price = elements[i].getElementsByTagName('PRICE')[0].childNodes[0].nodeValue
    let imgsrc = elements[i].getElementsByTagName('IMGSRC')[0].childNodes[0].nodeValue
    document.querySelector('#' + sectionId).querySelector('.swiper-wrapper').innerHTML +=
      `<div class="swiper-slide">
            <div class="product__item product__item--new">
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
                <div class="product__item-reviews"><span class="product__reviews-number">17</span> отзывов</div>
              </div>
              <div class="product__item-price">
                <div class="product__price-old">2 100 Br.</div>
                <div class="product__price-new">${price} Br.</div>
              </div>
              <button class="product__item-cart"></button>
              <button class="product__item-like"></button>
            </div>
          </div>`
  }
}
function moreGoodsXmlDataParse(xml, sectionId) {
  let xmlDOM = xml.responseXML//Создаем XML Dom
  let elements = xmlDOM.getElementsByTagName('PRODUCT')//Выбираем товары
  // console.log(xmlDOM);
  document.querySelector('#' + sectionId).querySelector('.swiper-wrapper').innerHTML = ''//Очищаем wrapper
  // console.log('data loading');
  for (let i = 0; i < elements.length; i++) {
    let category = elements[i].getElementsByTagName('CATEGORY')[0].childNodes[0].nodeValue
    let title = elements[i].getElementsByTagName('NAME')[0].childNodes[0].nodeValue
    let rating = elements[i].getElementsByTagName('RATING')[0].childNodes[0].nodeValue
    let price = elements[i].getElementsByTagName('PRICE')[0].childNodes[0].nodeValue
    let imgsrc = elements[i].getElementsByTagName('IMGSRC')[0].childNodes[0].nodeValue
    document.querySelector('#' + sectionId).querySelector('.swiper-wrapper').innerHTML +=
      `<div class="swiper-slide">
            <div class="product__item product__item-huge product__item--sale">
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
                  <div class="product__item-reviews"><span class="product__reviews-number">17</span> отзывов</div>
                </div>
                <div class="product__item-footer">
                  <div class="product__item-price">
                    <div class="product__price-old">2 100 Br.</div>
                    <div class="product__price-new">${price} Br.</div>
                  </div>
                  <a href="#" class="product__item-purchase">Купить</a>
                </div>
              </div>
              <button class="product__item-like"></button>
            </div>
          </div>`
  }
}

loadNewGoods('new-goods1')
loadMoreGoods('more-goods1')

console.log('xmlLoad script end');

// })