new WOW().init();
window.addEventListener('load', () => {
    const social = document.querySelector('.sidepanel__text > span')
    const divider = document.querySelector('.sidepanel__divider')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 270) {
            social.style.color = 'plum'
        } else {
            social.style.color = 'white'
        }
        if (window.scrollY > 425) {
            divider.style.backgroundColor = 'plum'
        } else {
            divider.style.backgroundColor = 'white'
        }
    })
})
$('#checkbox').click(function() {
    var s1 = $(this);
    s1.html(s1.text() == '9999 р.' ? '8888 р.' : '9999 р.');
    $('.psplus__price').not($(this)).each(function() {
      $(this).html(s1.text() == '9999 р.' ? '8888 р.' : '9999 р.');
    });
});


(function() {
    var slideContainer = $('.slide-container');
    slideContainer.slick({
        prevArrow: '<button type="button" class="slick-prev leftt"><img src="icons/arrow-prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next rightt"><img src="icons/arrow-next.svg"></button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 1,
            }
          }]
    });
    $('.clash-card__image img').hide();
    $('.slick-active').find('.clash-card img').fadeIn(200);
    // On before slide change
    slideContainer.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $('.slick-active').find('.clash-card img').fadeOut(1000);
    });
    // On after slide change
    slideContainer.on('afterChange', function(event, slick, currentSlide) {
      $('.slick-active').find('.clash-card img').fadeIn(200);
    });
  })();
  
  $('.psplus__wrapper').slick({
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          prevArrow: '<button type="button" class="psplus-prev leftt"><img src="icons/arrow-prev.svg"></button>',
          nextArrow: '<button type="button" class="psplus-next rightt"><img src="icons/arrow-next.svg"></button>'
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000
        }
      }
    ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tabs-num-active)', function() {
    $(this)
      .addClass('catalog__tabs-num-active').siblings().removeClass('catalog__tabs-num-active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content-active').eq($(this).index()).addClass('catalog__content-active');
  });

  $(window).scroll(function(){
    if ($(this).scrollTop()>1100){
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });
  $("a[href=#main]").click(function(){
    const _href = $(this).attr("href");
    $("html,body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.main__menuwrap'),
    // menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('main__menuwrap_active');
    });
})