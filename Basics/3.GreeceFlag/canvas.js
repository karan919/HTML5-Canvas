function init() {
    updateCanvas();
}
// GREECE FLAG PATTERN
function updateCanvas() {
    let myCanvas = document.getElementById("myCanvas");
    let width = window.innerWidth;
    let height = window.innerHeight;
    myCanvas.width = width;
    myCanvas.height = height;

    let context = myCanvas.getContext("2d");
    context.fillStyle = "#000080";
    context.fillRect(0, 0, width, height);

    let lineHeight = height / 9;
    context.lineWidth = lineHeight;
    context.strokeStyle = "white";

    let offset = lineHeight / 2;
    for (let i = 1; i < 8; i += 2) {
        context.moveTo(0, i * lineHeight + offset);
        context.lineTo(width, i * lineHeight + offset);
    }
    context.stroke();

    context.fillRect(0, 0, lineHeight * 5, lineHeight * 5);
    context.beginPath();
    context.moveTo(0, lineHeight * 2.5);
    context.lineTo(lineHeight * 5, lineHeight * 2.5);
    context.moveTo(lineHeight * 2.5, 0);
    context.lineTo(lineHeight * 2.5, lineHeight * 5 + 1);
    context.closePath();
    context.stroke();

}