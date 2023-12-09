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
    SplideScrollLtr.mount(window.splide.Extensions);
});

// initialise international input plugin
window.intlTelInput(document.querySelector("#phone"), {
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.3.3/js/utils.min.js"
});

// tawk to plugin
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
  (function() {
      var s1 = document.createElement("script")
        , s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/5b8f86a1f31d0f771d847430/default';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
  }
)();