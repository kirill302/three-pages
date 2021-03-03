const swiperIntro = new Swiper('.constest-slider', {
  slidesPerView: 1,

  navigation: {
    nextEl: '.intro-next',
    prevEl: '.intro-prev',
  },
});

const SwiperContestsCard1 = new Swiper('.contests__list-slider-one', {
  navigation: {
    nextEl: '.next-slide-one',
    prevEl: '.prev-slide-one',
  },
  spaceBetween: 43,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    700: {
      slidesPerView: 2,
    },
    850: {
      slidesPerView: 3,
      
    },
    1100: {
      slidesPerView: 4,
    }
  },
});

const SwiperContestsCard3 = new Swiper('.contests__list-slider-three', {
  slidesPerView: 4,
  spaceBetween: 43,
  navigation: {
    nextEl: '.next-slide-three',
    prevEl: '.prev-slide-three',
  },
  breakpoints: {
    320: {
      slidesPerView: 1.9,
      centerSlides: true,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 50,
      centerSlides: false,
    },
    850: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    }
  },
});


const scrollToTopBtn = document.querySelector('.btn-up');
const rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

scrollToTopBtn.addEventListener('click', scrollToTop);
