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
