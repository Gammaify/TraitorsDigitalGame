$(document).on("click", "#event", function () {
  // mainMenuSound.fade(0.5, 0, 1000);
  // setTimeout(function () {
  //   mainMenuSound.stop();
  // }, 1000);
  setEvent(false);
});

$(document).on("click", "#return", function () {
  // mainMenuSound.fade(0.5, 0, 1000);
  // setTimeout(function () {
  //   mainMenuSound.stop();
  // }, 1000);
  titleSequence(true, 3);
});

$(document).on("click", "#banish", function () {
  // mainMenuSound.fade(0.5, 0, 1000);
  // setTimeout(function () {
  //   mainMenuSound.stop();
  // }, 1000);
  mainSound.play();
  mainSound.fade(0, 0.5, 3000);
  banishmentSequence(true);
});
