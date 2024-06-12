//stops videos going full screen
var video = document.querySelector("video");

video.addEventListener("webkitfullscreenchange", function (event) {
  if (document.webkitFullscreenElement === video || event.target === video) {
    event.preventDefault();
  }
});
