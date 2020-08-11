$(function () {
  var m2_headerHeight = $(".m2_header").outerHeight();
  $(".m2_headerFake").css({ height: m2_headerHeight });

  var m2_bottomMenuHeight = $(".m2_bottomMenu__area").outerHeight();
  $(".m2_bottomMenu__areaFake").css({ height: m2_bottomMenuHeight });

  // Главный слайдер при верстке - надо закомментировать если в студию добавлять
  setTimeout(function () {
    if ($(".julySlider__outer").length) {
      var galleryThumbs = new Swiper(".julySlider__tovars", {
        spaceBetween: 10,
        slidesPerView: 1,
        loop: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        speed: 600,
        nested: true,
        allowTouchMove: false,
      });

      var galleryTop = new Swiper(".julySlider", {
        preloadImages: true,
        updateOnImagesReady: true,
        speed: 600,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        loop: true,
        slideToClickedSlide: true,
        autoplay: {
          delay: 5500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".julySlider__pagination",
          type: "bullets",
          dynamicBullets: false,
          clickable: true,
        },
        navigation: {
          nextEl: ".julySlider__Next",
          prevEl: ".julySlider__Prev",
        },
        thumbs: {
          swiper: galleryThumbs,
        },
        on: {
          init: function () {
            console.log("initialized.");
          },
          imagesReady: function () {
            console.log("images ready.");
          },
        },
      });
      $(".swiper-container").mouseenter(function () {
        galleryTop.autoplay.stop();
      });
      $(".swiper-container").mouseleave(function () {
        galleryTop.autoplay.start();
      });
    }
  }, 500);

  // Главный слайдер в студии
  // function StartSwipers(haveThumbs) {
  //   if ($(".julySlider__outer").length) {
  //     if (haveThumbs) {
  //       var galleryThumbs = new Swiper(".julySlider__tovars", {
  //         spaceBetween: 10,
  //         slidesPerView: 1,
  //         loop: true,
  //         watchSlidesVisibility: true,
  //         watchSlidesProgress: true,
  //         speed: 600,
  //         nested: true,
  //         allowTouchMove: false,
  //       });
  //     }

  //     var MainSwiperParams = {
  //       preloadImages: true,
  //       updateOnImagesReady: true,
  //       speed: 600,
  //       slidesPerView: "auto",
  //       centeredSlides: true,
  //       spaceBetween: 10,
  //       loop: true,
  //       slideToClickedSlide: true,
  //       autoplay: {
  //         delay: 5500,
  //         disableOnInteraction: false,
  //       },
  //       pagination: {
  //         el: ".julySlider__pagination",
  //         type: "bullets",
  //         dynamicBullets: false,
  //         clickable: true,
  //       },
  //       navigation: {
  //         nextEl: ".julySlider__Next",
  //         prevEl: ".julySlider__Prev",
  //       },
  //       on: {
  //         init: function () {
  //           console.log("initialized.");
  //         },
  //         imagesReady: function () {
  //           console.log("images ready.");
  //         },
  //       },
  //     };
  //     if (haveThumbs) {
  //       MainSwiperParams.thumbs = {
  //         swiper: galleryThumbs,
  //       };
  //     }
  //     var galleryTop = new Swiper(".julySlider", MainSwiperParams);
  //     $(".swiper-container").mouseenter(function () {
  //       galleryTop.autoplay.stop();
  //     });
  //     $(".swiper-container").mouseleave(function () {
  //       galleryTop.autoplay.start();
  //     });
  //   }
  // }
  // setTimeout(function () {
  //   var $window = $(window);
  //   $.ajax("/ru/GetSwipers?w=" + $window.width() + "&h=" + $window.height(), {
  //     method: "GET",
  //     success: function (data) {
  //       $(".julySlider__outer").html(data.html);
  //       setTimeout(function () {
  //         StartSwipers(data.haveThumbs);
  //       }, 500);
  //     },
  //   });
  // }, 10);

  $("a[data-fancybox]").fancybox({
    closeBtn: false,
    arrows: true,
    keyboard: true,
    nextClick: true,
    infobar: true,
    protect: true,
    backFocus: false, // убирает рассинхрон с swiper
    nextEffect: "elastic",
    prevEffect: "elastic",
    padding: 0,
    loop: true,
    animationEffect: "zoom-in-out",
    transitionEffect: "slide",
    touch: {
      vertical: true, // Allow to drag content vertically
      momentum: true, // Continue movement after releasing mouse/touch when panning
    },
  });

  $(".toTop").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".toTop").fadeIn();
    } else {
      $(".toTop").fadeOut();
    }
  });
  $(".toTop").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 400);
    return false;
  });
});
