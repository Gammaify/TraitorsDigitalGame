$(window).on("load", function () {
  $(".loading").hide();
  titleSequence(false, 0);
});

var InSeqElementsArray;

const pageAccessedByReload =
  (window.performance.navigation && window.performance.navigation.type === 1) ||
  window.performance
    .getEntriesByType("navigation")
    .map((nav) => nav.type)
    .includes("reload");

if (pageAccessedByReload == true) {
  ResetAll();
}
//Resets the game when a reload/refresh of the page.
// if (
//   String(window.performance.getEntriesByType("navigation")[0].type) === "reload"
// ) {
//   ResetAll();
// }

//Set cookies
function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";" + ";path=/";
}

//Removes cookies
function eraseCookie(name) {
  document.cookie = name + "=; Max-Age=0";
}

//gets cookies
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

//Reset Sounds
function ResetAllSounds() {
  mainMenuSound.stop();
  wheelSpinSound.stop();
  quietNightSound.stop();
  murderThunderSound.stop();
  mainSound.stop();
  banishmentSound.stop();
  castVoteSound.stop();
  heartBeatSound.stop();
  murderRevealSmoke.stop();
  backgroundSound.stop();
}
//Resets the animations for each screen to stop issues with animations not loading.
function resetScreenAnimations() {
  $(
    "#Screen1, #Screen2, #Screen3, #Screen4, #Screen5, #Screen6, #Screen7"
  ).removeClass("LeftOffScreen");
  $(
    "#Screen1, #Screen2, #Screen3, #Screen4, #Screen5, #Screen6, #Screen7"
  ).removeClass("RightInScreen");
  $(
    "#Screen1, #Screen2, #Screen3, #Screen4, #Screen5, #Screen6, #Screen7"
  ).removeClass("LeftInScreen");
  $(
    "#Screen1, #Screen2, #Screen3, #Screen4, #Screen5, #Screen6, #Screen7"
  ).removeClass("RightOffScreen");
  $(
    "#Screen1, #Screen2, #Screen3, #Screen4, #Screen5, #Screen6, #Screen7"
  ).removeClass("BottomInScreen ");
  $(
    "#Screen1, #Screen2, #Screen3, #Screen4, #Screen5, #Screen6, #Screen7"
  ).removeClass("TopOffScreen");
  $(
    "#Screen1, #Screen2, #Screen3, #Screen4, #Screen5, #Screen6, #Screen7"
  ).attr("style", "");
  $(".logo").removeClass("logoSlide");
  $(".logoText").removeClass("logoTextSlide");
  $(".CircleIcon").removeClass("RotatePlayerCircleIcon");
  $(".murderDone").removeClass("SlideUpDoneBtn");

  setTimeout(function () {
    $(".murderRevealText").removeClass("scaleIn");
    $(".murderContainer").removeClass("fadeOut");
    $(".murderReturnBtn").removeClass("fadeIn");
    $(".murderRevealContainer").hide();
  }, 500);
}

//Resets all the game data.
function ResetAll() {
  resetScreenAnimations();
  setCookie("EventSeq", "0");
  eraseCookie("PlayerCount");
  eraseCookie("EventSeqValue");
  eraseCookie("MurdererSelected");
  eraseCookie("finalBanishment");
  ResetAllSounds();
}

//Rearrange the murder player icons on the Murder Selector page.
function moveItems(reset) {
  // Get the elements in the div
  var div = document.getElementById("MurderButtons");
  var elements = div.children;
  // Convert the HTMLCollection to an array
  var elementsArray = Array.prototype.slice.call(elements);

  //Store the orginial position of elements
  if (InSeqElementsArray == null) {
    InSeqElementsArray = Array.prototype.slice.call(elements);
  }
  if (reset == false) {
    // Shuffle the array
    elementsArray.sort(() => Math.random() - 0.5);
  } else {
    elementsArray = InSeqElementsArray;
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
    return;
  }

  // Remove all elements from the div
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  // Add the elements back to the div in the shuffled order
  for (var i = 0; i < elementsArray.length; i++) {
    div.appendChild(elementsArray[i]);
  }
}

//Loads the title Sequence
function titleSequence(reset, screen) {
  ResetAll();
  resetScreenAnimations();

  if (reset == true) {
    $("#Screen1").css("transform", "translateX(-100%)");
    if (screen == 7) {
      $("#Screen7").addClass("RightOffScreen");
    }
    if (screen == 3) {
      $("#Screen3").addClass("RightOffScreen");
    }

    $("#Screen1").addClass("LeftInScreen");
  }
  $(".logo").addClass("logoSlide");
  $(".logoText").addClass("logoTextSlide");

  // setTimeout(function () {
  //   $("#Screen2").addClass("RightInScreen");
  // }, 2000);
}

$(".startGameBtn").on("click", function () {
  resetScreenAnimations();
  $("#Screen1").addClass("LeftOffScreen");
  $("#Screen2").addClass("RightInScreen");
  backgroundSound.play();
  backgroundSound.fade(0, 0.05, 2000);
});
//Initial load of the game on first page load.
// titleSequence(false, 0);

//Loads the player Sequence
function playerSequence() {
  resetScreenAnimations();

  $("#Screen2").addClass("LeftOffScreen");

  $("#Screen3").addClass("RightInScreen");
}

//Loads the murder selector sequence
function murderSequence() {
  resetScreenAnimations();
  $(".MurderButtonsContainer").html("");

  $("#Screen4").addClass("LeftOffScreen");

  $("#Screen5").addClass("RightInScreen");

  var playerCountCookie = parseInt(getCookie("PlayerCount"));
  MurderButtonsContainer = document.getElementById("MurderButtonsContainer");
  var murderButtons = document.createElement("div");
  murderButtons.classList = "MurderButtons MurderButtons" + playerCountCookie;
  murderButtons.id = "MurderButtons";

  for (var i = 0; i < playerCountCookie; i++) {
    var murderButton = document.createElement("div");
    murderButton.className = "murderButton";
    murderButton.id = "MurderPlay" + (i + 1);
    murderButton.innerHTML =
      "<object data='/assets/images/Buttons/" + (i + 1) + ".svg'></object>";
    murderButton.setAttribute("data-player", i + 1);
    murderButtons.appendChild(murderButton);
  }

  var faithfulButton = document.createElement("div");
  faithfulButton.className = "murderButton";
  faithfulButton.id = "MurderFaithful";
  faithfulButton.innerHTML =
    "<object data='/assets/images/Buttons/FAITHFUL.svg'></object>";
  faithfulButton.setAttribute("data-player", "Faithful");

  murderButtons.appendChild(faithfulButton);
  MurderButtonsContainer.appendChild(murderButtons);
  moveItems(false);
}

//Returns to Menu
function menuReturnSequence(screen) {
  backgroundSound.stop();
  backgroundSound.play();
  backgroundSound.fade(0, 0.05, 1000);
  // mainMenuSound.play();
  // mainMenuSound.fade(0, 0.5, 3000);
  resetScreenAnimations();
  if (screen == 4) {
    $("#Screen4").addClass("RightOffScreen");
  }
  if (screen == 5) {
    eraseCookie("MurdererSelected");
    $("#Screen5").addClass("RightOffScreen");
  }
  if (screen == 7) {
    $("#Screen7").addClass("RightOffScreen");
  }

  $("#Screen3").addClass("LeftInScreen");
}

//Loads the event sequence
function eventSequence(event, reset) {
  $("#eventJS").remove();
  resetScreenAnimations();
  $(".eventContainer").html("");

  if (reset == false) {
    $("#Screen3").addClass("LeftOffScreen");
  } else {
    $("#Screen5").addClass("RightOffScreen");
  }

  if (reset == false) {
    $("#Screen4").addClass("RightInScreen");
  } else {
    $("#Screen4").addClass("LeftInScreen");
  }

  const eventContainer = document.querySelector(".eventContainer");
  const eventText = document.createElement("h1");
  eventText.className = "eventTitle";
  const eventButton = document.createElement("div");
  const soundSwitch = document.createElement("button");
  soundSwitch.id = "soundSwitch";
  soundSwitch.innerText = "Switch Sound";
  eventButton.className = "eventButton";
  const eventBackground = document.createElement("video");
  eventBackground.setAttribute("autoplay", "");
  eventBackground.setAttribute("muted", "");
  eventBackground.setAttribute("loop", "");
  eventBackground.setAttribute("playsinline", "");
  eventBackground.setAttribute("webkit-playsinline", "");
  eventBackground.className = "eventBackground";

  const eventVideoSrc = document.createElement("source");

  switch (event) {
    case "1":
      murderThunderSound.play();
      murderThunderSound.fade(0, 0.5, 1000);
      eventText.innerText = murderText;
      eventButton.innerHTML =
        "<object data='/assets/images/Buttons/Button_Next.svg'></object>";
      $(".eventContainer").addClass("murderBackground");
      eventButton.addEventListener("click", function () {
        murderThunderSound.fade(0.5, 0, 1000);
        setTimeout(function () {
          murderThunderSound.stop();
        }, 1000);
        mainSound.play();
        mainSound.fade(0, 0.5, 3000);

        murderSequence();
      });
      eventVideoSrc.setAttribute("src", "/assets/videos/MURDER.mp4");

      break;
    case "2":
      banishmentSound.play();
      banishmentSound.fade(0, 0.5, 3000);
      $(".eventContainer").addClass("banishmentBackground");
      eventText.innerText = banishmentText;
      eventButton.innerHTML =
        "<object data='/assets/images/Buttons/Button_Next.svg'></object>";

      eventButton.addEventListener("click", function () {
        banishmentSound.fade(0.5, 0, 1000);
        setTimeout(function () {
          banishmentSound.stop();
        }, 1000);
        mainSound.play();
        mainSound.fade(0, 0.5, 3000);
        banishmentSequence(false);
      });
      eventVideoSrc.setAttribute("src", "/assets/videos/BANISHMENT.mp4");

      break;
    case "3":
      quietNightSound.play();
      quietNightSound.fade(0, 0.5, 3000);
      $(".eventContainer").addClass("quietNightBackground");
      eventText.innerText = quietNightText;
      eventButton.innerHTML =
        "<object data='/assets/images/Buttons/Button_Return.svg'></object>";
      eventButton.addEventListener("click", function () {
        quietNightSound.fade(0.5, 0, 1000);
        setTimeout(function () {
          quietNightSound.stop();
        }, 1000);
        // mainMenuSound.play();
        // mainMenuSound.fade(0, 0.5, 3000);
        menuReturnSequence(4);
      });

      eventVideoSrc.setAttribute("src", "/assets/videos/QUIETNIGHT.mp4");

      // var soundSwap = false;
      // soundSwitch.addEventListener("click", function () {
      //   if (soundSwap == false) {
      //     resetSound("#quietNight1");
      //     playSound("#quietNight2");
      //     soundSwap = true;
      //   } else {
      //     soundSwap = false;
      //     resetSound("#quietNight2");
      //     playSound("#quietNight1");
      //   }
      // });
      // eventContainer.appendChild(soundSwitch);
      break;
  }
  eventBackground.appendChild(eventVideoSrc);
  eventContainer.appendChild(eventBackground);
  eventContainer.appendChild(eventText);
  eventContainer.appendChild(eventButton);
  var script = document.createElement("script");
  script.id = "eventJS";
  script.type = "text/javascript";
  script.src = "./assets/js/event.js?v=1";
  document.head.appendChild(script);
}

//Loads the banishment page and if given true parameter will load final banishment.
function banishmentSequence(final) {
  resetScreenAnimations();

  if (final == true) {
    mainSound.play();
    mainSound.fade(0, 0.5, 3000);
    setCookie("finalBanishment", "true");
    VotesSavedarray = [];
    $("#Screen3").addClass("LeftOffScreen");
  } else {
    $("#Screen4").addClass("LeftOffScreen");
  }

  if (final == true) {
    $("#Screen7").addClass("RightInScreen");
  } else {
    $("#Screen7").addClass("RightInScreen");
  }
  start();
}

//1 is murder
//2 is banish
//3 is QUIET NIGHT

//Sets the event via the specific sequence for a certain player count.
function setEvent(reset) {
  var playerCountCookie = getCookie("PlayerCount");
  var seq = [];
  var currentEventSeq = parseInt(getCookie("EventSeq"));
  var currentEventSeqValue = 0;
  switch (playerCountCookie) {
    case "4":
      seq = [3, 1, 3, 1, 2, 1, 2, 3];
      //seq = [1, 1, 1, 1, 1, 1, 1, 1];
      break;
    case "5":
      seq = [3, 1, 3, 1, 2, 1, 2, 3];
      break;
    case "6":
      seq = [3, 1, 3, 1, 2, 1, 2, 3];
      break;
    case "7":
      seq = [1, 3, 1, 2, 3, 1, 2, 3];
      break;
    case "8":
      seq = [1, 3, 1, 2, 3, 1, 2, 3];
      break;
  }

  if (reset == true) {
    eraseCookie("MurdererSelected");
    currentEventSeq = currentEventSeq - 1;
    currentEventSeqValue = seq[currentEventSeq].toString();
    setCookie("EventSeqValue", currentEventSeqValue);
    currentEventSeq = currentEventSeq + 1;
    if (currentEventSeq >= 8) {
      currentEventSeq = 0;
    }
    setCookie("EventSeq", currentEventSeq);
  } else {
    currentEventSeqValue = seq[currentEventSeq].toString();
    setCookie("EventSeqValue", currentEventSeqValue);
    currentEventSeq = currentEventSeq + 1;
    if (currentEventSeq >= 8) {
      currentEventSeq = 0;
    }
    setCookie("EventSeq", currentEventSeq);
  }
  eventSequence(currentEventSeqValue, reset);
}

//Loads the murder reveal sequence.
function murderRevealSequence() {
  mainSound.fade(0.5, 0, 1000);
  setTimeout(function () {
    mainSound.stop();
  }, 3000);

  heartBeatSound.play();
  backgroundSound.stop();
  // resetScreenAnimations();
  $(".murderRevealContainer").html("");

  // setTimeout(function () {
  //
  // }, 1000);

  // $("#Screen5").addClass("TopOffScreen");

  var murderer = getCookie("MurdererSelected");
  var murderRevealContainer = document.querySelector(".murderRevealContainer");
  var murderNumber = document.createElement("p");

  if (murderer == "") {
    // noMurderTonightSound.play();
    // noMurderTonightSound.fade(0, 0.5, 3000);
    murderNumber.innerText = NoMurderTonightText;
    murderNumber.className = "murderRevealText";
  } else {
    murderNumber.className = "murderRevealNumber";
    murderNumber.innerText = murderer;
  }

  var murderReturn = document.createElement("div");
  murderReturn.className = "murderReturnBtn";
  murderReturn.innerHTML =
    "<object data='/assets/images/Buttons/Button_Return.svg'></object>";

  murderReturn.addEventListener("click", function () {
    // noMurderTonightSound.fade(0.5, 0, 1000);
    // setTimeout(function () {
    //   noMurderTonightSound.stop();
    // }, 1000);
    menuReturnSequence(5);
  });

  var smoke = document.createElement("img");
  smoke.src = "/assets/images/Smoke.png";
  smoke.className = "smokeEffect";

  murderRevealContainer.appendChild(murderReturn);

  $(".murderReturnBtn").addClass("fadeIn");

  setTimeout(function () {
    heartBeatSound.stop();
    backgroundSound.play();
    backgroundSound.fade(0, 0.05, 3000);
    murderRevealSmoke.play();
    murderRevealContainer.appendChild(smoke);
    murderRevealContainer.appendChild(murderNumber);

    $(".smokeEffect").addClass("smokeUp");
    $(".murderRevealText").addClass("scaleIn");
    $(".murderRevealNumber").addClass("scaleIn");
  }, 5000);
}
