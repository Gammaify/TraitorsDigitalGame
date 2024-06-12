Howler.usingWebAudio = true;
var mainMenuSound = new Howl({
  src: ["/assets/sounds/main_menu.webm", "/assets/sounds/main_menu.mp3"],
  loop: true,
});

var wheelSpinSound = new Howl({
  src: ["/assets/sounds/Wheel_Spin_2.webm", "/assets/sounds/Wheel_Spin_2.mp3"],
  volume: 0.25,
});

var quietNightSound = new Howl({
  src: [
    "/assets/sounds/Quiet_Night_1.webm",
    "/assets/sounds/Quiet_Night_1.mp3",
  ],
  loop: true,
});

var backgroundSound = new Howl({
  src: [
    "/assets/sounds/Quiet_Night_2.webm",
    "/assets/sounds/Quiet_Night_2.mp3",
  ],
  loop: true,
});
var murderThunderSound = new Howl({
  src: [
    "/assets/sounds/Murder_Thunder.webm",
    "/assets/sounds/Murder_Thunder.mp3",
  ],
  loop: true,
});

var mainSound = new Howl({
  src: [
    "/assets/sounds/main_SoundTrack.webm",
    "/assets/sounds/main_SoundTrack.mp3",
  ],
  loop: true,
});

var banishmentSound = new Howl({
  src: [
    "/assets/sounds/Banishment_Fire_Crackling.webm",
    "/assets/sounds/Banishment_Fire_Crackling.mp3",
  ],
  loop: true,
});

var castVoteSound = new Howl({
  src: [
    "/assets/sounds/Cast_Vote_Button_Press.webm",
    "/assets/sounds/Cast_Vote_Button_Press.mp3",
  ],
  volume: 0.25,
});

var heartBeatSound = new Howl({
  src: ["/assets/sounds/Heartbeat_2.webm", "/assets/sounds/Heartbeat_2.mp3"],
  loop: true,
  volume: 1,
});

var murderRevealSmoke = new Howl({
  src: [
    "/assets/sounds/Murder_Reveal_Smoke.webm",
    "/assets/sounds/Murder_Reveal_Smoke.mp3",
  ],
});
