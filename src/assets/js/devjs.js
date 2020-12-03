$(function () {
  // function leftMenuUlLi () {
  //   $(".collap").on("click", function () {
  //     var $this = $(this);
  //     var t = $this.children('i');
  //     if (t.hasClass('icon-up3')) {
  //         $this.children().removeClass("icon-up3").addClass("icon-down3");
  //         $this.closest("li").addClass("collapsed");
  //     } else {
  //         $this.children().removeClass("icon-down3").addClass("icon-up3");
  //         $this.closest("li").removeClass("collapsed");
  //     }
  // });
  // }
  // leftMenuUlLi ();
  if($('.lookLink__currentOuter').length){
    setTimeout(function(){
      var Outer = $('.lookLink__currentOuter');
      var position = Outer.position();
      var positionLeft = position.left;
      console.log("Смещение активного " + positionLeft);

      var targetBlockWidth = Outer.outerWidth();
      console.log("Ширина активного пункта " + targetBlockWidth);

      var targetLeft = positionLeft + targetBlockWidth;
      console.log("Смещение правого края " + targetLeft);

      var Parent=Outer.parent().parent();
      var scrollContainerWidth = Parent.outerWidth();
      console.log("Ширина области " + scrollContainerWidth);

      var allOffset = targetLeft - scrollContainerWidth;
      console.log("надо сместить на " + allOffset + "px");
      if(allOffset > 0) {
        // Parent.scrollLeft(allOffset);
        Parent.animate({ scrollLeft: allOffset }, 1000);
      }
    }, 500);
  }

  function leftMenuUlLi() {
    $(".collap").on("click", function () {
      var $this = $(this);
      var t = $this.children("i");
      if (t.hasClass("icon-up3")) {
        $this.children().removeClass("icon-up3").addClass("icon-down3");
        $this.closest("li").removeClass("expanded");
      } else {
        $this.children().removeClass("icon-down3").addClass("icon-up3");
        $this.closest("li").addClass("expanded");
      }
    });
  }
  leftMenuUlLi();

  //работает некорректно - только для верстки
  //скрипт визуального добавления атрибута checked для чекбокса обычного
  if ($(".filterBox__checkbox").length) {
    // сам выбор
    $(".xcheckbox").on("click", function (e) {
      e.preventDefault();
      if ($(this).hasClass("checked")) {
        $(this).removeClass("checked");
        $(this).children("input").removeAttr("checked");
      } else {
        $(this).addClass("checked");
        $(this).children("input").attr("checked", "checked");
      }
    });
    // Кнопка сброса обычных чекбоксов (не цвета) внутри одного блока фильта *найти  checked  false
    $(".filter__checkboxReset").on("click", function () {
      console.log("сброс фильтров");
      $(this)
        .closest(".filterBox")
        .find("input[type=checkbox]")
        .each(function (i) {
          this.checked = false;
        });
      $(this).closest(".filterBox").find(".xcheckbox").removeClass("checked");
    });
  }
});
