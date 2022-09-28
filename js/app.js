const formTab = document.querySelector('.form-tab');
const login = document.querySelector('#login');
const register = document.querySelector('#register');
const formLogin = document.querySelector('#form-login');
const formRegister = document.querySelector('#form-register');


formTab.addEventListener('click', (event) => {
    let { target } = event;
    let isLogin = target.id === 'login';

    if(isLogin){
        login.classList.add('active');
        register.classList.remove('active');

        formLogin.classList.remove('hidden');
        formRegister.classList.add('hidden');
    }else{
        register.classList.add('active');
        login.classList.remove('active');

        formRegister.classList.remove('hidden');
        formLogin.classList.add('hidden');
    }
});




var swiper = new Swiper('.mySwiper', {

    autoplay:true,
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        620: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
  });