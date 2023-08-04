  var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type:"fraction"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });