function init() {
  setTimeout(updateCanvas, 1000);
  updateCanvas();
}

// RANDOM CIRCLE PATTERN
function updateCanvas() {
  console.log("hello canvas");
  let width = window.innerWidth;
  let height = window.innerHeight;
  let myCanvas = document.getElementById("myCanvas");
  myCanvas.width = width;
  myCanvas.height = height;

  let context = myCanvas.getContext("2d");
  context.clearRect(0, 0, width, height);
  context.fillStyle = "#FCEAB8";
  context.fillRect(0, 0, width, height);

  let circleSize = 10;
  let gaps = circleSize + 9;
  let widthCount = parseInt(width / gaps);
  let heightCount = parseInt(height / gaps);
  let aColors = ["#43A9D1", "#EFA63B", "#EF7625", "#5E4130"];
  let aColorLength = aColors.length;

  for (let x = 0; x < widthCount; x++) {
    for (var y = 0; y < heightCount; y++) {
      context.fillStyle = aColors[parseInt(Math.random() * aColorLength)];
      context.beginPath();
      context.arc(circleSize + gaps * x, circleSize + gaps * y, circleSize, 0, Math.PI * 2, true);
      context.closePath();
      context.fill();
    }
  }
}