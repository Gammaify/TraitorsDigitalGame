var canvas;
var context;
var revealVoteIndex = 0;


var VotesSavedarray = [];
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

$(document).on("click", "#BanishSave", function () {
  castVoteSound.play();
  var savedData = new Image();
  canvas = document.getElementById("canvas");
  savedData.src = canvas.toDataURL("image/png");

  VotesSavedarray.push(savedData);

  //Clear
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  revealVoteIndex = 0;
});

$(document).on("click", "#BanishReveal", function () {
  var savedData = new Image();

  savedData = VotesSavedarray[revealVoteIndex];
  revealVoteIndex = revealVoteIndex + 1;

  canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(savedData, 0, 0);

  if (revealVoteIndex == VotesSavedarray.length) {
    revealVoteIndex = 0;
  }
});

$(document).on("click", "#BanishReturn", function () {
  var finalBanishment = getCookie("finalBanishment");
  VotesSavedarray = [];
  if (finalBanishment == "true") {
    
    resetScreenAnimations();
    menuReturnSequence(7);
    // titleSequence(true, 7);
  } else {
    resetScreenAnimations();
    menuReturnSequence(7);
  }
  mainSound.fade(0.5, 0, 1000);
  setTimeout(function () {
    mainSound.stop();
  }, 1000);
});

$(document).on("click", "#BanishTied", function () {
  VotesSavedarray = [];
  let canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  var voteAgainTxt = document.createElement("h2");
  voteAgainTxt.innerHTML = voteAgainText;
  voteAgainTxt.className = "voteAgainText";
  $("#Screen7").append(voteAgainTxt);

  setTimeout(function () {
    $(".voteAgainText").remove();
  }, 2000);
});
