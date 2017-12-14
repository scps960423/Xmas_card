$(document).ready(function () {

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

  var $Xms_1 = $(".XmasCard_1"),
    $img = $(".card_main").find("img");



    $img.each(function(i, n){
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
    
  var $li = $(" .XmasCard_1 .day"),
    $day_rotateY = "day_rotateY";
  $li.click(function (evt) {
    $(this).toggleClass($day_rotateY);
  });



  var $Xms_1 = $(".XmasCard_1"),
    $img = $(".card_main").find("img"),
    _src = $img.attr("src");


  var $sled = $(".XmasCard_2 .sled"),
      $Xmas2_text = $(".Xmas2_text"),
      $sled_run = "sled_run";
$Xmas2_text.click(function () {
    $sled.toggleClass("sled_run");
  })
    

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
  })
  $gift_2.click(function () {
    if (flag2 == false) {
      $cover_2.addClass($gift_cover_open).removeClass($gift_cover_close + " " + $cover_st);
      $bowknot_2.addClass($gift_bowknot_open).removeClass($gift_bowknot_close + " " + $bowknot_st);
      $tsmc.addClass($tsmc_open).removeClass($tsmc_close + " " + $tsmc_st );
      flag2 = true;
    } else {
      $cover_2.addClass($gift_cover_close + " " + $cover_st).removeClass($gift_cover_open);
      $bowknot_2.addClass($gift_bowknot_close + " " + $bowknot_st).removeClass($gift_bowknot_open);
      $tsmc.addClass($tsmc_close + " " + $tsmc_st).removeClass($tsmc_open);
      flag2 = false;
    }

  })


})