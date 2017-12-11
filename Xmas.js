$(document).ready(function () {
  var $Xms = $(".XmasCard"),
    $but = $(".but");

  $but.click(function (evt) {
    $Xms.css("display", "block")
  })

  var $li = $(" .XmasCard .day");
  var $flag = false;
  for (let i = 0; i < 25; i++) {
    $li.eq(i).click(function (evt) {
      if ($flag == false) {
        $flag = true;
        $li.eq(i).css({
          "color": "transparent",
          "border-color": "#565656",
          "-webkit-transform": "rotateY(180deg)",
          "-moz-transform": "rotateY(180deg)",
          "transform": "rotateY(180deg)",
          "background": "#565656 url('./images/gift/gift_" + (i + 1) + ".png') 3px no-repeat",
        })
      }
      else{
        $flag = false
          $li.eq(i).css({
            "color": "#ffffff",
            "border-color": "#ffffff",
            "-webkit-transform": "rotateY(0deg)",
            "-moz-transform": "rotateY(0deg)",
            "transform": "rotateY(0deg)",
            "background": "transparent",
          })
      }

    })


  }

})