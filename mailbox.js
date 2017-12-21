var close_stickers = function () {
  var $stickers = $(".stickers"), //貼圖區塊
    $li = $(".tabs li"), //貼圖類別的li
    $stickers_but = $(".stickers-but"),
    $section = $li.find('.section');


  //預設關閉除了第一個貼圖以外的另外其他的類別
  //將section全部關閉後顯示第一個section                
  $section.hide().eq(0).show();

  var $stickers_flag = false;
  // 點擊貼圖按鈕則展開貼圖區塊並阻檔冒泡
  $stickers_but.click(function (evt) {
    evt.stopPropagation();
    if ($stickers_flag === false) {
      $stickers.slideDown("slow");
      $stickers_flag = true;
    } else {
      $stickers.slideUp();
      $stickers_flag = false;
    }

  });
  //選擇貼圖的時候阻擋冒泡
  $stickers.click(function (evt) {
    evt.stopPropagation();
  });
  //點擊貼圖區塊以外的地方的時候將貼圖區塊收起來
  $("body").click(function () {
    $stickers.slideUp();
  });

  $li.on('click', function () {
    // 存取我所點擊的li ---> this
    var $this_section = $(this).find('.section');
    //將全部的 section 關閉
    $section.hide();
    //顯示我點擊的li的section
    $this_section.show();
  });
}

var close_notice = function () {
  var $stickers = $(".notice-img"), //通知按鈕
    $notice_frame = $(".mwt_border"),
    $notice = $(".notice"); //通知框

  $notice.click(function (evt) {
    // 點擊$notice時阻斷冒泡到body
    evt.stopPropagation();
    //讓通知框展開或是收起來
    $notice_frame.fadeToggle();
  });

  //需求：讓通知點擊以後刷新頁面也會是展開，再通知內還會有一個更多的按鈕
  //作法：判斷通知框是否有被點擊到，如果有flag則會是true
  var flag = false;
  $notice_frame.click(function () {
    flag = true;
  });
  //當body被點擊到，假設false不是fales的話則表示通知框內的按鈕是被點擊的，則關閉body觸發事件事件，並將flag初始化
  $("body").click(function () {
    if (flag != false) {
      //close();
      $("body").off("click");
      flag = false;
    }
    //否則點擊通知框以外的地方則將通知框關閉 
    else {
      $notice_frame.fadeOut();
    }
  });
}

var Xmas = function () {
  var $Xms_2 = $(".XmasCard_2"),
    $gift_1 = $(".gift_1"),
    $cover_1 = $(".gift_1 .cover"),
    $bowknot_1 = $(".gift_1 .bowknot"),
    $gift_2 = $(".gift_3"),
    $cover_2 = $(".gift_3 .cover"),
    $bowknot_2 = $(".gift_3 .bowknot"),
    $ball = $(".gift_1 .ball"),
    $doll = $(".gift_1 .doll"),
    $tsmc = $(".gift_3 .tsmc_bor");

  var $gift_cover_open = "cover_open",
    $gift_bowknot_open = "bowknot_open",
    $gift_cover_close = "cover_close",
    $gift_bowknot_close = "bowknot_close",
    $cover_st = "cover_st",
    $bowknot_st = "bowknot_st",
    $ball_open = "ball_open",
    $ball_close = "ball_close",
    $doll_open = "doll_open",
    $doll_close = "doll_close",
    $doll_st = "doll_st",
    $tsmc_open = "tsmc_bor_open ",
    $tsmc_close = "tsmc_bor_close"
  $tsmc_st = "tsmc_bor_st";

  var $Xms_1 = $(".XmasCard_1");
  var $img = $(".card_main").find("img");


  $img.each(function (i, n) {
    var $this = $(this),
      _src = $this.attr("src");

    if (_src.match('functional_012.jpg')) {
      $this.css("display", "none");
      $Xms_1.css("display", "block")
    }

    if (_src.match('functional_013.jpg')) {
      $this.css("display", "none");
      $Xms_2.css("display", "block")
    }
  });



  var $sled = $(".XmasCard_2 .sled"),
    $Xmas2_text = $(".Xmas2_text"),
    $sled_run = "sled_run";

  var sled_flag = false;

  $Xmas2_text.click(function () {
    if (sled_flag === false) {
      $sled.addClass("sled_run");
      sled_flag = true;
    } else {
      $sled.removeClass("sled_run");
      sled_flag = false;
    }

    // console.log("雪橇跑了");
  });
  var $li = $(" .XmasCard_1 .day"),
      
    $day_rotateY = "day_rotateY";
  for (var i = 0; i < 25; i++) {
    $li.eq(i).click(function (evt) {
      evt.stopPropagation();
      if ($(this).attr('class') === "day") {
        $(this).attr('class', "day "+$day_rotateY);
      }
      else {
        $(this).attr('class',"day");
      }
    });
  }
  $("body").click(function () {
    console.log("O");
    if ($li.eq(24).attr('class') === "day day_rotateY")
      $li.eq(24).attr('class', "day");

  });
 


  var flag1 = false,
    flag2 = false;
  $gift_1.click(function () {
    if (flag1 == false) {
      $cover_1.addClass($gift_cover_open).removeClass($gift_cover_close + " " + $cover_st);
      $bowknot_1.addClass($gift_bowknot_open).removeClass($gift_bowknot_close + " " + $bowknot_st);
      $ball.addClass($ball_open).removeClass($ball_close);
      $doll.addClass($doll_open).removeClass($doll_close + " " + $doll_st);
      flag1 = true;
    } else {
      $cover_1.addClass($gift_cover_close + " " + $cover_st).removeClass($gift_cover_open);
      $bowknot_1.addClass($gift_bowknot_close + " " + $bowknot_st).removeClass($gift_bowknot_open);
      $ball.addClass($ball_close).removeClass($ball_open);
      $doll.addClass($doll_close + " " + $doll_st).removeClass($doll_open);

      flag1 = false;
    }
  });
  $gift_2.click(function () {
    if (flag2 == false) {
      $cover_2.addClass($gift_cover_open).removeClass($gift_cover_close + " " + $cover_st);
      $bowknot_2.addClass($gift_bowknot_open).removeClass($gift_bowknot_close + " " + $bowknot_st);
      $tsmc.addClass($tsmc_open).removeClass($tsmc_close + " " + $tsmc_st);
      flag2 = true;
    } else {
      $cover_2.addClass($gift_cover_close + " " + $cover_st).removeClass($gift_cover_open);
      $bowknot_2.addClass($gift_bowknot_close + " " + $bowknot_st).removeClass($gift_bowknot_open);
      $tsmc.addClass($tsmc_close + " " + $tsmc_st).removeClass($tsmc_open);
      flag2 = false;
    }

  });

}

var run = function () {
  close_stickers();
  close_notice();
  Xmas();
}

$(function () {
  run();
});