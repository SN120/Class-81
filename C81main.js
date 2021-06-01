var canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

var color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 360);
ctx.stroke();

canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
    color=document.getElementById("colour").value;
    mouse_x = e.clientX-canvas.offsetLeft;
    mouse_y = e.clientY-canvas.offsetTop;

    console.log("x = " + mouse_x + "y = " + mouse_y);
    circle(mouse_x, mouse_y);
}
function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 360);
    ctx.stroke();
}
function clear(){
    ctx.clearRect(0, 0, 800, 600);
}
