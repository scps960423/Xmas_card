$(document).ready(function () {
  var $Xms = $(".XmasCard"),
      $but = $(".but"),
      $img = $(".card_main").find("img"),
      _src = $img.attr("src");

console.log(_src);
  if (_src =="./Images/card/sort04/functional_012.gif")
  {
    $img.css("display", "none");
    $Xms.css("display", "block")

  }
  

  var $li = $(" .XmasCard .day"),
      $day_rotateY = "day_rotateY";
  // var $flag = false;
  $li.click(function (evt) {
    $(this).toggleClass($day_rotateY);
  });

  // $li.eq(24).click(function (evt) {
  //    $(this).toggleClass($day_rotateY);

  //   if ($flag == false) {
  //      $flag = true;
  //     $li.eq(24).animate({
  //       top: "35px",
  //       left: "150px",
  //       width: "500px",
  //       height: "300px",
  //     }, 0)
  //     $li.eq(24).css({
  //       "background": "#fff url('./images/gift/gift_25.png') 3px no-repeat",
  //     })
  //   }
  //   else{
  //      $flag = false;
  //         $li.eq(24).animate({
  //           top: "292px",
  //           left: "370px",
  //           width: "55px",
  //           height: "55px",
  //         }, 0)
  //         $li.eq(24).css({
  //           "background": "transparent",
  //         })
  //   }

  // })
})