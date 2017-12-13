$(document).ready(function () {
  var $Xms = $(".XmasCard_1"),
    $but = $(".but"),
    $img = $(".card_main").find("img"),
    _src = $img.attr("src");

  console.log(_src);
  if (_src == "./Images/card/sort04/functional_012.gif") {
    $img.css("display", "none");
    $Xms.css("display", "block")

  }


  var $li = $(" .XmasCard_1 .day"),
    $day_rotateY = "day_rotateY";

  $li.click(function (evt) {
    $(this).toggleClass($day_rotateY);
  });


})