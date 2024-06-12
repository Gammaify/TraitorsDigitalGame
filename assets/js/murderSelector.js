$(document).on("click", "#MurderShow", function () {
  // mainSound.fade(0.5, 0, 1000);
  // setTimeout(function () {
  //   mainSound.stop();
  // }, 1000);
  wheelSpinSound.play();
  $(".CircleIcon").addClass("RotatePlayerCircleIcon");
  setTimeout(function () {
    $(".CircleIcon").removeClass("RotatePlayerCircleIcon");
  }, 800);
  $(".murderContainer").addClass("fadeOut");
  $(".murderRevealContainer").show();

  murderRevealSequence();
});

$(document).on("click", "#MurderReset", function () {
  mainSound.fade(0.5, 0, 1000);
  setTimeout(function () {
    mainSound.stop();
  }, 1000);
  // mainSound.fade(0.5, 0, 1000);
  // setTimeout(function () {
  //   mainSound.stop();
  // }, 1000);
  murderThunderSound.play();
  murderThunderSound.fade(0, 0.5, 1000);
  setEvent(true);
});
$(document).on("click", ".murderButton", function () {
  wheelSpinSound.play();
  $(".murderButton").removeClass("selected");
  $(this).addClass("selected");
  $(".murderDone").addClass("SlideUpDoneBtn");
  $(".murderDone").attr("data-player", $(this).data("player"));
  // var murderer = getCookie("MurdererSelected");
  // console.log(murderer);
  // if (murderer == "" ) {
  //   setCookie("MurdererSelected", murderPlayer);
  // }
  $(".CircleIcon").addClass("RotatePlayerCircleIcon");
  setTimeout(function () {
    $(".CircleIcon").removeClass("RotatePlayerCircleIcon");
  }, 800);
});

$(document).on("click", ".murderDone", function () {
  castVoteSound.play();
  var playerKilled = $(".selected").data("player");
  var murderer = getCookie("MurdererSelected");

  if (murderer == "" && playerKilled != "Faithful") {
    setCookie("MurdererSelected", playerKilled);
  }
  $(".murderDone").html(murderDoneGreenBtn);

  setTimeout(function () {
    $(".murderDone").addClass("SlideRightDoneBtn");
    $(".MurderButtons").addClass("SlideOutMurderBtns");
  }, 500);

  setTimeout(function () {
    moveItems(false);
    $(".MurderButtons").removeClass("SlideOutMurderBtns");
    $(".MurderButtons").addClass("SlideInMurderBtns");
  }, 1800);

  setTimeout(function () {
    $(".murderDone")
      .removeClass("SlideUpDoneBtn")
      .removeClass("SlideRightDoneBtn");
    $(".MurderButtons").removeClass("SlideInMurderBtns");
    $(".murderDone").html(murderDoneBtn);
  }, 1000);
});
