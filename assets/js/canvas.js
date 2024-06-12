function start() {
  var canvas = document.getElementById("canvas");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  g = canvas.getContext("2d");
  g.strokeStyle = "#eef0f5";
  g.lineJoin = "round";
  g.lineWidth = 6;
  g.filter = "blur(1px)";

  const relPos = (pt) => [
      pt.pageX - canvas.offsetLeft,
      pt.pageY - canvas.offsetTop,
    ],
    drawStart = (pt) => {
      with (g) {
        moveTo.apply(g, pt);
        beginPath();
        stroke();
      }
    },
    drawMove = (pt) => {
      with (g) {
        lineTo.apply(g, pt);
        stroke();
      }
    },
    pointerDown = (e) => drawStart(relPos(e.touches ? e.touches[0] : e)),
    pointerMove = (e) => drawMove(relPos(e.touches ? e.touches[0] : e)),
    draw = (method, move, stop) => (e) => {
      if (method == "add") pointerDown(e);
      canvas[method + "EventListener"](move, pointerMove);
      canvas[method + "EventListener"](stop, g.closePath);
    };

  // Prevent scrolling when touching the canvas
  document.body.addEventListener(
    "touchstart",
    function (e) {
      if (e.target == canvas) {
        e.preventDefault();
      }
    },
    { passive: false }
  );

  document.body.addEventListener(
    "touchend",
    function (e) {
      if (e.target == canvas) {
        e.preventDefault();
      }
    },
    { passive: false }
  );
  document.body.addEventListener(
    "touchmove",
    function (e) {
      if (e.target == canvas) {
        e.preventDefault();
      }
    },
    { passive: false }
  );

  canvas.addEventListener("mousedown", draw("add", "mousemove", "mouseup"));
  canvas.addEventListener("touchstart", draw("add", "touchmove", "touchend"));
  canvas.addEventListener("mouseup", draw("remove", "mousemove", "mouseup"));
  canvas.addEventListener("touchend", draw("remove", "touchmove", "touchend"));
}

window.addEventListener(
  "resize",
  function (event) {
    var canvas = document.getElementById("canvas");
    if (canvas != null) {
      canvas.width = window.innerWidth - 100;
      canvas.height = window.innerHeight - 120;
      g = canvas.getContext("2d");
      g.strokeStyle = "#eef0f5";
      g.lineJoin = "round";
      g.lineWidth = 1;
      g.filter = "blur(1px)";
    }
  },
  true
);
