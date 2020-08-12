$(function () {
  var m2_headerHeight = $(".m2_header").outerHeight();
  $(".m2_headerFake").css({ height: m2_headerHeight });

  var m2_bottomMenuHeight = $(".m2_bottomMenu__area").outerHeight();
  $(".m2_bottomMenu__areaFake").css({ height: m2_bottomMenuHeight });

  // discount_btn
  if ($(".getDiscountBtn").length) {
    $(".getDiscountBtn").on("click", function () {
      // if ($(this).hasClass("callActionBtn_open")) {
      //   $(this).removeClass("callActionBtn_open");
      // } else {
      $(this).addClass("getDiscountBtn_active");
      // }
    });
  }

  if ($(".getDiscountBtn_mobile").length) {
    $(".getDiscountBtn_mobile").on("click", function () {
      // if ($(this).hasClass("callActionBtn_open")) {
      //   $(this).removeClass("callActionBtn_open");
      // } else {
      $(this).addClass("getDiscountBtn_mobile_active");
      setTimeout(function () {
        $(".getDiscountBtn__tooltipMobile").slideDown(500);
      }, 500);
    });
  }

  $(".backBtn").on("click", function (e) {
    window.history.back();
    console.log("Кнопка назад");
  });

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

  //Убирает лишний фансибокс у слайдера при дублировании блоков для loop true
  $(".swiper-slide-duplicate a[data-fancybox]").each(function (i, elem) {
    $(elem).removeAttr("data-fancybox");
  });

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

  ///////////////////////////////////////////////Фильтр на десктопе///////////////////////////////////////////
  //Раскрытие фильтра в каталоге по клику на его заголовке
  $(".catalogFilter1__itemTitle").on("click", function () {
    var fCont = $(this).closest(".catalogFilter1__item").find(".catalogFilter1__itemContent");
    var fAll = $(this).closest(".catalogFilter1");
    if ($(this).hasClass("open1")) {
      $(this).removeClass("open1");
      fAll.find(".catalogFilter1__itemContent").removeClass("visible");
      $(".catalogFilter1__overlay").hide();
    } else {
      fAll.find(".catalogFilter1__itemTitle").removeClass("open1");
      fAll.find(".catalogFilter1__itemContent").removeClass("visible");
      $(this).addClass("open1");
      fCont.addClass("visible");
      $(".catalogFilter1__overlay").show();
    }
  });

  //Применение выбранного фильтра - эффект изменения заголовка фильтра на темный при наличии выбраных пунктов внутри
  // $(".filterEnterBtn").on("click", function () {
  //   var filtrItemParent = $(this).closest(".filterBox");

  //   if (filtrItemParent.find("input").is(":checked")) {
  //     console.log("Выбрано");
  //     filtrItemParent.closest(".catalogFilter1__item").find(".catalogFilter1__itemTitle").addClass("active");
  //     $(".catalogFilter1__itemContent").removeClass("visible");
  //     $(".catalogFilter1__itemTitle").removeClass("open1");
  //   } else {
  //     console.log("не выбрано");
  //     filtrItemParent.closest(".catalogFilter1__item").find(".catalogFilter1__itemTitle").removeClass("active");
  //     $(".catalogFilter1__itemContent").removeClass("visible");
  //     $(".catalogFilter1__itemTitle").removeClass("open1");
  //   }
  // });
  // Работающий по старому - выше

  $(".catalogFilter1__overlay").on("click", function () {
    $(".catalogFilter1__overlay").hide();
    $(".catalogFilter1__itemContent").removeClass("visible");
    $(".catalogFilter1__itemTitle").removeClass("open1");
  });

  $(".filterEnterBtn").on("click", function () {
    var filtrItemParent = $(this).closest(".filterBox");

    if (filtrItemParent.find("input").is(":checked")) {
      console.log("Выбрано");
      filtrItemParent.closest(".catalogFilter1__item").find(".catalogFilter1__itemTitle").addClass("active");
      $(".catalogFilter1__itemContent").removeClass("visible");
      $(".catalogFilter1__itemTitle").removeClass("open1");
      $(".catalogFilter1__overlay").hide();
    } else {
      console.log("не выбрано");
      filtrItemParent.closest(".catalogFilter1__item").find(".catalogFilter1__itemTitle").removeClass("active");
      $(".catalogFilter1__itemContent").removeClass("visible");
      $(".catalogFilter1__itemTitle").removeClass("open1");
      $(".catalogFilter1__overlay").hide();
    }
  });

  //скрипт визуального добавления атрибута checked для чекбокса обычного
  if ($(".filterBox__checkbox").length) {
    //сам выбор
    // $(".xcheckbox").click(function (e) {
    //   e.preventDefault();
    //   if ($(this).hasClass("checked")) {
    //     $(this).removeClass("checked");
    //     $(this).children("input").removeAttr("checked");
    //   } else {
    //     $(this).addClass("checked");
    //     $(this).children("input").attr("checked", "checked");
    //   }
    // });
    //Кнопка сброса обычных чекбоксов (не цвета) внутри одного блока фильта *найти  checked  false
    $(".filter__checkboxReset").click(function () {
      console.log("сброс фильтров");
      $(this)
        .closest(".filterBox")
        .find("input[type=checkbox]")
        .each(function (i) {
          this.checked = false;
        });
      // $(this).closest(".filterBox").find(".xcheckbox").removeClass("checked");
    });
  }

  //Выбор чекбоксов с цветами - применение эффекта по клику на пункт
  if ($(".filter__checkboxColor").length) {
    //сам выбор
    $(".checkboxColor__item").click(function (e) {
      e.preventDefault();
      if ($(this).hasClass("checked")) {
        $(this).removeClass("checked");
        $(this).children(".checkboxColorBox").removeClass("checked");
        $(this).children(".checkboxColorTitle").removeClass("checkColor");
        $(this).children("input").removeAttr("checked");
      } else {
        $(this).addClass("checked");
        $(this).children(".checkboxColorBox").addClass("checked");
        $(this).children(".checkboxColorTitle").addClass("checkColor");
        $(this).children("input").attr("checked", "checked");
      }
    });
    //сброс выбора именно для чекбоксов с цветами
    $(".filter__checkboxColorReset").click(function (e) {
      console.log("сброс фильтров");
      e.preventDefault();
      $(this).closest(".filterBox").find("input[type=checkbox]").removeAttr("checked");
      $(this).closest(".filterBox").find(".checkboxColor__item").removeClass("checked");
      $(this).closest(".filterBox").find(".checkboxColorBox").removeClass("checked");
      $(this).closest(".filterBox").find(".checkboxColorTitle").removeClass("checkColor");
    });
  }

  //Скрипт блока сортировки в фильтах
  if ($(".filterBox__sort").length) {
    $(".filterSort__item").click(function (e) {
      e.preventDefault();
      $(this).closest(".filterBox__content").find(".filterSort__item").removeClass("filterSort__item_active");
      $(this).addClass("filterSort__item_active");
      var activeSortName = $(this).text();
      console.log(activeSortName);
      $(".catalogFilter1__itemTitle_sort span").html(activeSortName);
      $(this).closest(".catalogFilter1__item").find(".catalogFilter1__itemTitle").addClass("active");
      $(".catalogFilter1__itemContent").removeClass("visible");
      $(".catalogFilter1__itemTitle").removeClass("open1");
      $(".catalogFilter1__overlay").hide();
    });
  }

  //Кнопка очистки всех фильтров
  $(".resetAllFiltersBtn").click(function (e) {
    e.preventDefault();
    //сброс обычныч чекбоксов и закрытие раскрытых блоков
    $(this).closest(".catalogFilter1").find("input[type=checkbox]").removeAttr("checked");
    $(this).closest(".catalogFilter1").find(".xcheckbox").removeClass("checked");
    $(this).closest(".catalogFilter1").find(".catalogFilter1__itemTitle").removeClass("active");
    $(this).closest(".catalogFilter1").find(".catalogFilter1__itemContent").removeClass("visible");
    $(this).closest(".catalogFilter1").find(".catalogFilter1__itemTitle").removeClass("open1");
    //сброс чекбоксов с цветом
    $(this).closest(".catalogFilter1").find(".checkboxColorTitle").removeClass("checkColor");
    $(this).closest(".catalogFilter1").find(".checkboxColor__item").removeClass("checked");
    $(this).closest(".catalogFilter1").find(".checkboxColorBox").removeClass("checked");
    //сброс сортировки
    $(this).closest(".catalogFilter1").find(".filterSort__item").removeClass("filterSort__item_active");
    $(".catalogFilter1__itemTitle_sort span").html("Сортировка");
    $(".catalogFilter1__overlay").hide();
  });

  ///////////////////////////////////Адаптивные фильтры/////////////////////////////////////
  // Adaptive filters js
  // Открытие фильтров
  $(".adaptiveFilterOnBtn").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".overlay1").hide();
      $(".aFilters__wrapper").fadeOut(200);
    } else {
      $(this).addClass("open");
      $(".overlay1").show();
      $(".aFilters__wrapper").fadeIn(200);
    }
  });
  // Закрытие адаптивного меню по кнопке Close
  $(".aFilters__close").click(function () {
    $(".adaptiveFilterOnBtn").removeClass("open");
    $(".overlay1").hide();
    $(".aFilters__wrapper").fadeOut(200);
  });

  $(".aFilterBox__title").on("click", function () {
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".overlay2").hide();
      $(this).closest(".aFilterBox").children(".aFilterBox__inner").slideUp(200);
    } else {
      $(this).addClass("open");
      $(".overlay2").show();
      $(this).closest(".aFilterBox").children(".aFilterBox__inner").slideDown(200);
    }
  });

  $(".aFilterBox__innerClose").on("click", function () {
    $(this).closest(".aFilterBox").find(".aFilterBox__inner").slideUp(200);
    $(this).closest(".aFilterBox").find(".aFilterBox__title").removeClass("open");
    $(".overlay2").hide();
  });

  $(".aFilterBoxEnterBtn").on("click", function () {
    var filtrItemParent = $(this).closest(".aFilterBox__inner");

    if (filtrItemParent.find("input").is(":checked")) {
      console.log("Выбрано");
      filtrItemParent.closest(".aFilterBox").find(".aFilterBox__title").addClass("choose").removeClass("open");
      filtrItemParent.slideUp(200);
      $(".overlay2").hide();
    } else {
      console.log("не выбрано");
      filtrItemParent.closest(".aFilterBox").find(".aFilterBox__title").removeClass("choose").removeClass("open");
      filtrItemParent.slideUp(200);
      $(".overlay2").hide();
    }
  });
  $(".aFilterBox__Reset").click(function () {
    console.log("сброс фильтров");
    $(this)
      .closest(".aFilterBox__innerContent")
      .find("input[type=checkbox]")
      .each(function (i) {
        this.checked = false;
      });
    // $(this).closest(".filterBox").find(".xcheckbox").removeClass("checked");
  });

  $(".aFilter__footerReset").on("click", function () {
    $(this)
      .closest(".aFilters__area")
      .find("input[type=checkbox]")
      .each(function (i) {
        this.checked = false;
      });

    $(this).closest(".aFilters__area").find(".aFilterBox__title").removeClass("choose");
  });

  $(".aFilter__footerEnter").on("click", function () {
    // применить фильтры
  });

  /////////////////страница магазина///////////////////

  // слайдер на странице магазина
  if ($(".swiper-container_shop").length) {
    var mySwiper1 = new Swiper(".swiper-container_shop", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      // pagination: {
      //   el: ".swiper-pagination_shop",
      //   type: "bullets",
      //   dynamicBullets: false,
      //   clickable: true,
      // },
      navigation: {
        nextEl: ".swiper-button-nextShop",
        prevEl: ".swiper-button-prevShop",
      },
      on: {
        init: function () {
          console.log("swiper initialized");
          $(".swiper-slide_shop").children(".swiper__cadr_shop").removeClass("animationfadeIn").fadeOut(500);
          // setTimeout(function () {
          //   $(".swiper-slide-active")
          //     .children(".swiper__cadr_shop")
          //     .fadeIn(500)
          //     .addClass("animated")
          //     .addClass("animationfadeIn");
          // }, 500);
          $(".swiper-container").on("mouseenter", function () {
            mySwiper1.autoplay.stop();
            console.log("swiper autoplay stop");
          });
          $(".swiper-container").on("mouseleave", function () {
            mySwiper1.autoplay.start();
            console.log("swiper autoplay start again");
          });
        },
        slideChange: function () {
          $(".swiper-slide_shop").children(".swiper__cadr_shop").removeClass("animationfadeIn").fadeOut(500);
          // setTimeout(function () {
          //   $(".swiper-slide-active")
          //     .children(".swiper__cadr_shop")
          //     .fadeIn(500)
          //     .addClass("animated")
          //     .addClass("animationfadeIn");
          // }, 500);
        },
      },
    });
  }
  // карусель брендов-
  if ($(".brandsCarousel-container1").length) {
    var brandsCarousel = new Swiper(".brandsCarousel-container1", {
      slidesPerView: 3,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: false,
      loopFillGroupWithBlank: false,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: ".brandsCarousel__btnPrev",
        nextEl: ".brandsCarousel__btnNext",
      },
      breakpoints: {
        1141: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
        921: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        769: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        481: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
        401: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        321: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      },
    });
    $(".brandsCarousel").mouseenter(function () {
      brandsCarousel.autoplay.stop();
    });
    $(".brandsCarousel").mouseleave(function () {
      brandsCarousel.autoplay.start();
    });
  }
});
