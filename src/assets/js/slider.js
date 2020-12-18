$(function () {

  if($(".lookVideo").length){
    console.log("есть видео");

    let lookSliderOptions = {};

    if ($(".lookSlider-container .lookSlider-slide").length == 1){
      lookSliderOptions = {
        slidesPerView: 1,
        loop: false,
        spaceBetween: 0,
        speed: 600,
        autoplay: {
          delay: 70000,
          disableOnInteraction: true,
        },
        keyboard: false,
        
      };
      $(".lookSlider-container").addClass("lookSlider-container_1slide");
      $(".lookSlider-wrapper").addClass("disabled");
      $(".lookSlider__left").addClass("disabled");
      $(".lookSlider__right").addClass("disabled");
    }else{
      lookSliderOptions = {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        speed: 600,
        autoplay: {
          delay: 7000,
          disableOnInteraction: true,
        },
        navigation: {
          nextEl: ".lookSlider__right",
          prevEl: ".lookSlider__left",
        },
        pagination: {
          el: ".lookSlider-pagination",
          clickable: true,
        },
        keyboard: true,
        
      };
      
    }
    var swiper = new Swiper(".lookSlider-container", lookSliderOptions);

    $(".lookSlider").addClass("lookSlider_withPaddingRight");
    
  }
  else{
    let lookSliderOptions = {};

    if ($(".lookSlider-container .lookSlider-slide").length >= 4) {
      lookSliderOptions = {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        speed: 600,
        autoplay: {
          delay: 7000,
          disableOnInteraction: true,
        },
        navigation: {
          nextEl: ".lookSlider__right",
          prevEl: ".lookSlider__left",
        },
        pagination: {
          el: ".lookSlider-pagination",
          clickable: true,
        },
        keyboard: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          414: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 1,
          }
        },
      };
    } else if ($(".lookSlider-container .lookSlider-slide").length == 3){
      lookSliderOptions = {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        speed: 600,
        autoplay: {
          delay: 7000,
          disableOnInteraction: true,
        },
        navigation: {
          nextEl: ".lookSlider__right",
          prevEl: ".lookSlider__left",
        },
        pagination: {
          el: ".lookSlider-pagination",
          clickable: true,
        },
        keyboard: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          414: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
          }
        },
      };
    }
    else if ($(".lookSlider-container .lookSlider-slide").length == 2){
      lookSliderOptions = {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        speed: 600,
        autoplay: {
          delay: 7000,
          disableOnInteraction: true,
        },
        navigation: {
          nextEl: ".lookSlider__right",
          prevEl: ".lookSlider__left",
        },
        pagination: {
          el: ".lookSlider-pagination",
          clickable: true,
        },
        // mousewheel: true,
        keyboard: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          414: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
          }
        },
      };
      $(".lookSlider-container").addClass("lookSlider-container_2slide");
    }
    else if ($(".lookSlider-container .lookSlider-slide").length == 1){
      lookSliderOptions = {
        slidesPerView: 1,
        loop: false,
        spaceBetween: 0,
        speed: 600,
        autoplay: {
          delay: 7000,
          disableOnInteraction: true,
        },
        keyboard: false,
        
      };
      $(".lookSlider-container").addClass("lookSlider-container_1slide");
      $(".lookSlider-wrapper").addClass("disabled");
      $(".lookSlider__left").addClass("disabled");
      $(".lookSlider__right").addClass("disabled");
    }
    var swiper = new Swiper(".lookSlider-container", lookSliderOptions);
  }

  




  // var swiper = new Swiper(".lookSlider-container", {
  //   slidesPerView: 1,
  //   loop: true,
  //   spaceBetween: 0,
  //   speed: 600,
  //   autoplay: {
  //     delay: 70000,
  //     disableOnInteraction: true,
  //   },
  //   navigation: {
  //     nextEl: ".lookSlider__right",
  //     prevEl: ".lookSlider__left",
  //   },
  //   pagination: {
  //     el: ".lookSlider-pagination",
  //     clickable: true,
  //   },
  //   // mousewheel: true,
  //   keyboard: true,
  //   breakpoints: {
  //     0: {
  //       slidesPerView: 1,
  //       spaceBetween: 0,
  //     },
  //     375: {
  //       slidesPerView: 2,
  //       spaceBetween: 10,
  //     },
  //     600: {
  //       slidesPerView: 3,
  //       spaceBetween: 10,
  //     },
  //     768: {
  //       slidesPerView: 4,
  //       spaceBetween: 10,
  //     },
  //     1024: {
  //       slidesPerView: 1,
  //     }
  //   },
  // });

  var swiper = new Swiper(".s2-container", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    speed: 600,
    autoplay: {
      delay: 7000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".ss2__right",
      prevEl: ".ss2__left",
    },
    pagination: {
      el: ".s2-pagination",
      clickable: true,
    },
    // mousewheel: true,
    keyboard: true,
  });

  var swiper = new Swiper(".best2-container", {
    slidesPerView: 6,
    loop: true,
    spaceBetween: 0,
    speed: 600,
    autoplay: {
      delay: 177000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".best2__right",
      prevEl: ".best2__left",
    },
    keyboard: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1080: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
    },
  });

  var swiper = new Swiper(".bottomWide-container", {
    slidesPerView: 6,
    loop: true,
    spaceBetween: 0,
    speed: 600,
    autoplay: {
      delay: 177000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".bottomWide__right",
      prevEl: ".bottomWide__left",
    },
    keyboard: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      400: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 5,
      },
      1600: {
        slidesPerView: 6,
      },
    },
  });

  let options = {};

  if ($(".brands2slider-container .brands2slider-slide").length >= 3) {
    options = {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 20,
      speed: 600,
      autoplay: {
        delay: 337000,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: ".brands2slider__right",
        prevEl: ".brands2slider__left",
      },
      keyboard: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    };
  } else {
    options = {
      slidesPerView: 3,
      loop: false,
      autoplay: false,
    };
    $(".brands2slider-wrapper").addClass("disabled");
    $(".brands2slider__left").addClass("disabled");
    $(".brands2slider__right").addClass("disabled");
  }
  var swiper = new Swiper(".brands2slider-container", options);

  // var swiper = new Swiper(".brands2slider-container", options);

  // setTimeout(function () {

  // $(".brands2slider").removeClass("brands2slider_hide");
  // $(".cssload-loader").hide();
  // }, 1000);

  // $(".brands2slider-slide img[data-src]").each(function () {
  //   console.log($(elem).data("data-src"));
  //   $(this).attr("src", $(this).data("src"));
  //   $(this).onload = function () {
  //     $(this).removeAttr("data-src");
  //   };
  // });
  // setTimeout(function () {
  $(".brands2slider-slide img[data-src]").each(function () {
    $(this).attr("src", $(this).data("src"));
    $(this).removeAttr("data-src");
  });
  // }, 500);

  // var swiper = new Swiper(".brands2slider-container", {
  //   slidesPerView: 3,
  //   loop: true,
  //   spaceBetween: 20,
  //   speed: 600,
  //   autoplay: {
  //     delay: 7000,
  //     disableOnInteraction: true,
  //   },
  //   navigation: {
  //     nextEl: ".brands2slider__right",
  //     prevEl: ".brands2slider__left",
  //   },
  //   keyboard: true,
  //   breakpoints: {
  //     0: {
  //       slidesPerView: 1,
  //     },
  //     320: {
  //       slidesPerView: 2,
  //       spaceBetween: 10,
  //     },
  //     480: {
  //       slidesPerView: 3,
  //       spaceBetween: 10,
  //     },
  //     600: {
  //       slidesPerView: 4,
  //       spaceBetween: 10,
  //     },
  //     768: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     1024: {
  //       slidesPerView: 3,
  //       spaceBetween: 10,
  //     },
  //     1200: {
  //       slidesPerView: 3,
  //     },
  //   },
  // });
});
