$(document).on("click", ".playerButton", function () {
  wheelSpinSound.play();
  setCookie("PlayerCount", $(this).data("player"));

  $(".CircleIcon").addClass("RotatePlayerCircleIcon");
  setTimeout(function () {
    backgroundSound.play();

    backgroundSound.fade(0, 0.05, 3000);
    playerSequence();
  }, 1000);
});
