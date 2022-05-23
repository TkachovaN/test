$(document).ready(function () {

   //slick-sliders
   $('.slider__bg').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      draggable: true
   });

   $('.reviews__inner').slick({
      prevArrow: '<button type="button" class="slick-prev slick-arrows"><img src="images/arrow__prev.svg" alt="Left"></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrows"><img src="images/arrow__next.svg" alt="Right"></button>',
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: false,
      arrows: true,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2
            }
         },
         {
            breakpoint: 800,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   });

   $('.range__inner').slick({
      prevArrow: '<button type="button" class="slick-prev slick-arrows"><img src="images/arrow__prev.svg" alt="Left"></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrows"><img src="images/arrow__next.svg" alt="Right"></button>',
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: false,
      arrows: true,
      speed: 1000,
      draggable: true,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3
            }
         },
         {
            breakpoint: 900,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   });

   //same block length
   $('.advantages__info').matchHeight();

   //news
   $('.news__link-block').hide();
   $(function () {
      $('.news__link-block').slice(0, 3).show();

      $('.lazyLoad__news').on('click', function () {
         $('.news__link-block:hidden').slice(0, 3).slideDown();

         if ($('.news__link-block:hidden').length == 0) {
            $('.lazyLoad__news').hide();
            $('.lazyLoad__news-up').show();
         }

      });

      $('.lazyLoad__news-up').on('click', function () {
         $('.news__link-block').hide().slice(0, 3).show();
         $('.lazyLoad__news').show();
         $(this).hide();
      });

   });

   //porular/work
   $('.work__gallery-link.button-all').show();
   $('.button__work').click(function () {
      $(this).addClass('activ__button-work');
      $('.button__work').not(this).removeClass('activ__button-work');

      const get_id = this.id;
      const get_current = $('.work__gallery .' + get_id);

      $('.work__gallery-link').not(get_current).slideUp(500);
      get_current.slideDown(500);
   });

});//end jQuery


//sticky__Header__Menu
(function () {
   window.onscroll = function () { menuWhenScrolling() };

   const headerNav = document.querySelector(".header__nav");
   const stickyHeaderMenu = headerNav.offsetTop;

   function menuWhenScrolling() {
      if (window.pageYOffset >= stickyHeaderMenu) {
         headerNav.classList.add("header__nav-fixed")
      } else {
         headerNav.classList.remove("header__nav-fixed");
      }
   };
})();


//media__menu
(function () {
   const byttonMediaMenu = document.querySelector('.btn__media-menu');
   const menuLinkAll = document.querySelectorAll('.menu__link');
   const menuIconItemAll = document.querySelectorAll('.menu__icon-item');
   const headerNav = document.querySelector('.header__nav');

   byttonMediaMenu.addEventListener('click', function () {
      for (let i = 0; i < menuIconItemAll.length; i++) {
         menuIconItemAll[i].classList.toggle('menu__icon-active');
      }
      headerNav.classList.toggle('active__menu-header');
      document.body.classList.toggle('no-scroll');
   });

   for (let i = 0; i < menuLinkAll.length; i++) {
      menuLinkAll[i].onclick = clickOnMenuLink;
   };

   function clickOnMenuLink() {
      headerNav.classList.remove('active__menu-header');
      document.body.classList.remove('no-scroll');
      for (let i = 0; i < menuIconItemAll.length; i++) {
         menuIconItemAll[i].classList.remove('menu__icon-active');
      }
   };
})();


//btn__top
(function () {
   const buttonScrollTop = document.querySelector('.btn__top');

   window.addEventListener('scroll', scrollPage);
   buttonScrollTop.addEventListener('click', backTop);

   function scrollPage() {
      const scrolled = window.pageYOffset;
      const page = document.documentElement.clientHeight;

      if (scrolled > page) {
         buttonScrollTop.style.display = "block";
      }
      else if (scrolled < page) {
         buttonScrollTop.style.display = "none";
      }
   };

   function backTop() {
      if (window.pageYOffset > 0) {
         window.scrollBy(0, -80);
         setTimeout(backTop, 20);
      }
   };
})();


//smooth__scroll
(function () {
   const anchorAll = document.querySelectorAll('a[href*="#"]');

   for (let item of anchorAll) {
      item.addEventListener('click', function (e) {
         e.preventDefault();

         const sectionSmoothScroll = item.getAttribute('href').substr(1);

         document.getElementById(sectionSmoothScroll).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      });
   };
})();


//time sale
(function () {
   const days = document.querySelector('.days');
   const hours = document.querySelector('.hours');
   const minutes = document.querySelector('.minutes');
   const seconds = document.querySelector('.seconds');

   const currentYear = new Date().getFullYear();
   const newYearTime = new Date(`December 31 ${currentYear} 00:00:00`);

   function updateCountdown() {
      const currentTime = new Date();
      const diff = newYearTime - currentTime;

      const d = Math.floor(diff / 1000 / 60 / 60 / 24);
      const h = Math.floor(diff / 1000 / 60 / 60) % 24;
      const m = Math.floor(diff / 1000 / 60) % 60;
      const s = Math.floor(diff / 1000) % 60;

      days.innerHTML = d;
      hours.innerHTML = h < 10 ? '0' + h : h;
      minutes.innerHTML = m < 10 ? '0' + m : m;
      seconds.innerHTML = s < 10 ? '0' + s : s;
   };

   setInterval(updateCountdown, 1000);
})();


//modal__advantages
(function () {
   const buttonAdvantagesCardAll = document.querySelectorAll('.advantages__card-btn');
   const buttonIconCloseAll = document.querySelectorAll('.icon__close');

   buttonAdvantagesCardAll.forEach(function (item) {
      item.addEventListener('click', function (e) {
         e.preventDefault();

         const modalId = this.getAttribute('data-modal');
         const modalElem = document.querySelector('.pop-up__advantages[data-modal="' + modalId + '"]');

         modalElem.classList.add('active-modal');
         document.body.classList.add('no-scroll');
      });
   });

   buttonIconCloseAll.forEach(function (item) {
      item.addEventListener('click', function (e) {
         const parentModal = this.closest('.pop-up__advantages');
         parentModal.classList.remove('active-modal');
         document.body.classList.remove('no-scroll');
      });
   });
})();


//accordion
(function () {
   const accordionTitleLeftAll = document.querySelectorAll('.accordion__title-left');
   const accordionTitleRightAll = document.querySelectorAll('.accordion__title-right');

   for (let i = 0; i < accordionTitleLeftAll.length; i++) {
      accordionTitleLeftAll[i].addEventListener('click', function () {
         if (!(this.classList.contains('active'))) {
            for (let i = 0; i < accordionTitleLeftAll.length; i++) {
               accordionTitleLeftAll[i].classList.remove('active');
            }
            this.classList.add('active');
         }
      });
   };

   for (let i = 0; i < accordionTitleRightAll.length; i++) {
      accordionTitleRightAll[i].addEventListener('click', function () {
         if (!(this.classList.contains('active'))) {
            for (let i = 0; i < accordionTitleRightAll.length; i++) {
               accordionTitleRightAll[i].classList.remove('active');
            }
            this.classList.add('active');
         }
      });
   };
})();


//calculate
(function () {
   const result = document.querySelector('.result__calculate');
   const form = document.querySelector('.orders__form');

   form.onchange = function formBlock() {

      //value form select
      const selectBuilding = document.querySelector('#building');
      const selectBuildingValue = +selectBuilding.options[selectBuilding.selectedIndex].value;

      const selectOptions = document.querySelector('#options');
      const selectOptionsValue = +selectOptions.options[selectOptions.selectedIndex].value;

      const selectStyle = document.querySelector('#style');
      const selectStyleValue = +selectStyle.options[selectStyle.selectedIndex].value;

      //value form input checkbox
      checkedValues = form.querySelectorAll('[name^="checkbox"]');
      const checkedValuesResult = [].reduce.call(checkedValues, function (sum, el) {
         const n = (+el.value || 0) * (el.checked || el.tagName == "SELECT" || el.type == "text");

         return sum + n;
      }, 0);

      //value  form input number
      const areaProjectValue = +document.querySelector('.area__number').value;

      if (areaProjectValue === 0) {
         priceArea = 0;
      }
      else if (areaProjectValue >= 10 && areaProjectValue <= 30) {
         priceArea = 500;
      }
      else if (areaProjectValue >= 40 && areaProjectValue <= 80) {
         priceArea = 800;
      }
      else if (areaProjectValue >= 90 && areaProjectValue <= 150) {
         priceArea = 1500;
      }

      result.innerHTML = (selectStyleValue + selectOptionsValue + selectBuildingValue + checkedValuesResult + priceArea);
   };

   const buttonInputMinus = document.querySelector('.btn-minus');
   const buttonInputPlus = document.querySelector('.btn-plus');
   const areaProject = document.querySelector('.area__number');

   buttonInputPlus.addEventListener('click', function x(e) {
      e.preventDefault();
      areaProject.value = parseInt(areaProject.value) + 10;
      if (areaProject.value >= 150) {
         areaProject.value = 150;
      }
   });
   buttonInputMinus.addEventListener('click', function c(e) {
      e.preventDefault();
      areaProject.value = parseInt(areaProject.value) - 10;
      if (areaProject.value < 1) {
         areaProject.value = 0;
      }
   });
})();