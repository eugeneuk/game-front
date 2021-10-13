document.addEventListener("DOMContentLoaded", () => {

  const pmItem = document.querySelector(".pm-item");

  if (pmItem && document.documentElement.clientWidth <= 768) {
    let swiper = new Swiper(".pm-bar .swiper-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        520: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }

});