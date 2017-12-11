$(document).ready(function () {
  var $Xms = $(".XmasCard"),
    $but = $(".but");

  $but.click(function (evt) {
    $Xms.css("display", "block")
  })

  var $li = $(" .XmasCard .day");
  var $flag = false;


  for (let i = 0; i < 24; i++) {
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
      } else {
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
  $li.eq(24).click(function (evt) {
    if ($flag == false) {
       $flag = true;
      $li.eq(24).animate({
        top: "35px",
        left: "150px",
        width: "500px",
        height: "300px",
      }, 0)
      $li.eq(24).css({
        "background": "#fff url('./images/gift/gift_25.png') 3px no-repeat",
      })
    }
    else{
       $flag = false;
          $li.eq(24).animate({
            top: "292px",
            left: "370px",
            width: "55px",
            height: "55px",
          }, 0)
          $li.eq(24).css({
            "background": "transparent",
          })
    }

  })
})