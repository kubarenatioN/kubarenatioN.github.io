$(function () {
  function checkModal() {
    if ($('.modal1__name').val() != '' && $('.modal1__phone').val() != '') {
      $('.modal1__btn').css({
        backgroundColor: 'rgba(0, 0, 0, .7)',
        color: '#fff',
        cursor: 'pointer',
        transition: '.5s'
      });
    }
    else {
      $('.modal1__btn').css({
        backgroundColor: 'rgba(0, 0, 0, .2)',
        color: '#ccc',
        cursor: 'default',
        transition: '.5s'
      });
    }
  }

  $('.modal1__name').on('input', checkModal);
  $('.modal1__phone').on('input', checkModal);

  $('.modal1__btn').on('click', function (e) {
    e.preventDefault();
    if ($('.modal1__name').val() != '' && $('.modal1__phone').val() != '') {
      $.fancybox.close();
      setTimeout(() => {
        $('.modal1__name').val('');
        $('.modal1__phone').val('');
        $(this).css({
          backgroundColor: 'rgba(0, 0, 0, .2)',
          color: '#ccc'
        });
      }, 200);
    }
  });

  let flag = true;
  function checkFooterInput() {
    if ($('.footer__form-input').val() != '') {
      $('.footer__form-btn').css({
        cursor: 'pointer',
      });
      if (flag) {
        $('.footer__form-btn').css({
          color: '#fff'
        });
        flag = false;
      }
      $('.footer__form-btn').hover(
        function () {
          $(this).css({
            backgroundColor: '#fff',
            color: '#000'
          });
        },
        function () {
          $(this).css({
            backgroundColor: 'transparent',
            color: '#fff'
          });
        }
      );
    }
    else {
      $('.footer__form-btn').css({
        backgroundColor: 'transparent',
        cursor: 'default',
        color: '#ccc'
      });
      $('.footer__form-btn').hover(
        function () {
          $(this).css({
            backgroundColor: 'transparent',
            color: '#ccc'
          });
        },
        function () {
          $(this).css({
            backgroundColor: 'transparent',
            color: '#ccc'
          });
        }
      );
      flag = true;
    }
  }
  checkFooterInput();
  $('.footer__form-input').on('input', checkFooterInput);

  $('.footer__form-btn').on('click', function (e) {
    e.preventDefault();
    $('.footer__form-input').val('');
    checkFooterInput();
  });


  function checkAuditionInput() {
    if ($('.audition-form__name').val() != '' && $('.audition-form__phone').val() != '') {
      $('.audition-form__btn').css({
        cursor: 'pointer',
        color: '#000'
      });
      $('.audition-form__btn').hover(
        function () {
          $(this).css({
            backgroundColor: 'transparent',
            color: '#fff'
          });
        },
        function () {
          $(this).css({
            backgroundColor: '#fff',
            color: '#000'
          });
        }
      );
    }
    else {
      $('.audition-form__btn').css({
        backgroundColor: '#fff',
        cursor: 'default',
        color: '#ccc'
      });
      $('.audition-form__btn').hover(
        function () {
          $(this).css({
            backgroundColor: '#fff',
            color: '#ccc'
          });
        },
        function () {
          $(this).css({
            backgroundColor: '#fff',
            color: '#ccc'
          });
        }
      );
    }
  }
  checkAuditionInput();
  $('.audition-form__name').on('input', checkAuditionInput);
  $('.audition-form__phone').on('input', checkAuditionInput);

  $('.audition-form__btn').on('click', function (e) {
    if ($('.audition-form__name').val() != '' && $('.audition-form__phone').val() != '') {
      e.preventDefault();
      $(this).css({
        backgroundColor: '#fff',
      });
      $('.audition-form__name').val('');
      $('.audition-form__phone').val('');
      checkAuditionInput();
    }
    
  });
})