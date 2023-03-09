// Menu Burger
$(document).ready(function () {
  $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
      console.log('red')
  });
});

// Modal Youtube Jquery
$(".js-video-button").modalVideo();

// $("#demo1").maskMoney({thousands:' ', decimal:',', allowZero: false, allowEmpty: true, suffix: ' ₸'});

var thankyouSwiper = new Swiper(".thankyouSwiper", {
  loop: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2,
    },
  }
});

var degreeSwiper = new Swiper(".degreeSwiper", {
  loop: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 3,
    },
    850: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2,
    },
  }
});

var reviewSwiper = new Swiper(".reviewSwiper", {
  loop: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2,
    },
  }
});

var phoneMask = IMask(
  document.getElementById('founder__modal_phone'), {
    mask: '+{7}(000)000-00-00',
  });
  document.getElementById("founder__modal_form").addEventListener('submit', function(e) {
  e.preventDefault()
  let phone =  document.getElementById('founder__modal_phone')
  if(phone.value.length < 16){
    phone.style.border = '1px solid red';
    return
  }
  this.submit()
})
