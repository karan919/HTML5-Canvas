function init() {
    updateCanvas();
}
// FLAG PATTERN
function updateCanvas() {
    let mycanvas = document.getElementById("myCanvas");
    let width = window.innerWidth;
    let height = window.innerHeight;
    mycanvas.width = width;
    mycanvas.height = height;

    let context = mycanvas.getContext("2d");
    context.fillStyle = "#4AADD6";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "#FFDE00";
    context.beginPath();
    context.arc(width / 2, height / 2, width / 9, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();

}
