$(function () {
  var size = $(".item").length;
  $(".item").css({
    transform: "translate3d(0,0,-300px)",
    "box-shadow": "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
    "z-index": "7",
  });

  $(".item").eq(0).css({
    transform: "translate3d(0,0,0)",
    "box-shadow": "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
    "z-index": "10",
  });

  $(".item").eq(1).css({
    transform: "translate3d(65%,0,-150px)",
    "box-shadow": "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
    "z-index": "9",
  });
  $(".item").eq(2).css({
    transform: "translate3d(150%,0,-400px)",
    "box-shadow": "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
    "z-index": "8",
  });
  $(".item").eq(3).css({
    transform: "translate3d(220%,0,-600px)",
    "box-shadow": "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
    "z-index": "7",
  });
  $(".item")
    .eq(size - 1)
    .css({
      transform: "translate3d(-65%,0,-150px)",
      "box-shadow":
        "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
      "z-index": "9",
    });

  $(".item")
    .eq(size - 2)
    .css({
      transform: "translate3d(-150%,0,-400px)",
      "box-shadow":
        "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
      "z-index": "8",
    });
  $(".item")
    .eq(size - 3)
    .css({
      transform: "translate3d(-220%,0,-600px)",
      "box-shadow":
        "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
      "z-index": "7",
    });

  $(".item").click(function (e) {
    var no = $(this).data("no");
    slide(no);
  });
  $(".slider__btn > a.prev").click(function (e) {
    e.preventDefault();
    var size = $(".item").length;
    var no = $(".item.on").data("no");
    if (no - 1 >= 0) {
      slide(no - 1);
    } else {
      slide(size - no - 1);
    }
  });
  $(".slider__btn > a.next").click(function (e) {
    e.preventDefault();
    var size = $(".item").length;
    var no = $(".item.on").data("no");
    if (no + 1 < size) {
      slide(no + 1);
    } else {
      slide(size - no - 1);
    }
  });
});

function slide(no) {
  var size = $(".item").length;
  var curr = $(".item[data-no='" + no + "']");
  var items = $(".item");
  var prev = no - 1 >= 0 ? no - 1 : size - no - 1;
  var prev2 = prev - 1 >= 0 ? prev - 1 : size - prev - 1;
  var prev3 = prev2 - 1 >= 0 ? prev2 - 1 : size - prev2 - 1;
  var next = no + 1 < size ? no + 1 : size - no - 1;
  var next2 = next + 1 < size ? next + 1 : size - no - 2;
  var next3 = next2 + 1 < size ? next2 + 1 : size - no - 2;
  console.log(
    "no : " +
      no +
      " prev : " +
      prev +
      " prev2 : " +
      prev2 +
      " next : " +
      next +
      " next2 : " +
      next2
  );
  items.removeClass("on");
  curr.addClass("on");

  $(".item").each(function () {
    var tg = $(this);
    switch (tg.data("no")) {
      case no:
        tg.css({
          transform: "translate3d(0,0,0)",
          "box-shadow":
            "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
          "z-index": "10",
          opacity: "1",
        });
        break;
      case prev:
        tg.css({
          transform: "translate3d(-65%,0,-150px)",
          "box-shadow":
            "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
          "z-index": "9",
          opacity: "1",
        });
        break;
      case prev2:
        tg.css({
          transform: "translate3d(-150%,0,-400px)",
          "box-shadow":
            "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
          "z-index": "8",
          opacity: "1",
        });
        break;
      case prev3:
        tg.css({
          transform: "translate3d(-220%,0,-600px)",
          "box-shadow":
            "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
          "z-index": "7",
          opacity: "1",
        });
        break;
      case next:
        tg.css({
          transform: "translate3d(65%,0,-150px)",
          "box-shadow":
            "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
          "z-index": "9",
          opacity: "1",
        });
        break;
      case next2:
        tg.css({
          transform: "translate3d(150%,0,-400px)",
          "box-shadow":
            "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
          "z-index": "8",
          opacity: "1",
        });
        break;
      case next3:
        tg.css({
          transform: "translate3d(220%,0,-600px)",
          "box-shadow":
            "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
          "z-index": "7",
          opacity: "1",
        });
        break;
    }
  });
}
