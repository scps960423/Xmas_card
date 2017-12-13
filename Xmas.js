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
    $cover = $(".gift_1 .cover"),
    $bowknot = $(".gift_1 .bowknot");

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
      $cover.addClass($gift_cover_open).removeClass($gift_cover_close);
      $bowknot.addClass($gift_bowknot_open).removeClass($gift_bowknot_close);
      flag1 = true;
    }else{
       $cover.addClass($gift_cover_close).removeClass($gift_cover_open);
       $bowknot.addClass($gift_bowknot_close).removeClass($gift_bowknot_open);
      flag1 = false;
    }
    
  })


})