$(document).ready(function () {
  var $Xms_1 = $(".XmasCard_1"),
    $img = $(".card_main").find("img"),
    _src = $img.attr("src");

  console.log(_src);
  if (_src == "./Images/card/sort04/functional_012.gif") {
    $img.css("display", "none");
    $Xms_1.css("display", "block")

  }
  var $li = $(" .XmasCard_1 .day"),
    $day_rotateY = "day_rotateY";
  $li.click(function (evt) {
    $(this).toggleClass($day_rotateY);
  });

  var $Xms_2 = $(".XmasCard_2"),
    $gift_1 = $(".gift_1"),
    $cover_1 = $(".gift_1 .cover"),
    $bowknot_1 = $(".gift_1 .bowknot"),
    $gift_2 = $(".gift_3"),
    $cover_2 = $(".gift_3 .cover"),
    $bowknot_2 = $(".gift_3 .bowknot");

  var $gift_cover_open = "cover_open",
    $gift_bowknot_open = "bowknot_open",
    $gift_cover_close = "cover_close",
    $gift_bowknot_close = "bowknot_close",
    $cover_st = "cover_st",
    $bowknot_st = "bowknot_st";

  var flag1 = false,
    flag2 = false;
  $gift_1.click(function () {
    if (flag1 == false) {
      $cover_1.addClass($gift_cover_open).removeClass($gift_cover_close);
      $bowknot_1.addClass($gift_bowknot_open).removeClass($gift_bowknot_close);
      flag1 = true;
    } else {
      $cover_1.addClass($gift_cover_close).removeClass($gift_cover_open);
      $bowknot_1.addClass($gift_bowknot_close).removeClass($gift_bowknot_open);
      flag1 = false;
    }

  })
  $gift_2.click(function () {
    if (flag2 == false) {
      $cover_2.addClass($gift_cover_open).removeClass($gift_cover_close);
      $bowknot_2.addClass($gift_bowknot_open).removeClass($gift_bowknot_close);
      flag2 = true;
    } else {
      $cover_2.addClass($gift_cover_close).removeClass($gift_cover_open);
      $bowknot_2.addClass($gift_bowknot_close).removeClass($gift_bowknot_open);
      flag2 = false;
    }

  })

})