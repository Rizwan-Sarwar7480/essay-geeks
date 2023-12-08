document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide( '.splide-team', {
      perPage: 4,
      perMove: 1,
      pagination : false,
      breakpoints: {
        1200: {
          perPage: 3,
        },
        1024: {
          perPage: 2,
        },
        568: {
          perPage: 1,
        },
      },
    });

    splide.mount();
    var SplideScrollLtr = new Splide('.splide__scroll__rtl', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 2,
        pagination: false,
        arrows: false,
        autoScroll: {
            speed: 1,
        },
        breakpoints: {
        1200: {
          perPage: 1,
        },
        1024: {
          perPage: 2,
        },
        568: {
          perPage: 1,
        },
      },
    });
    // SplideScrollLtr.mount();
    SplideScrollLtr.mount(window.splide.Extensions);
});