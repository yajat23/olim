var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx =  canvas.getContext("2d");

color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{

  current_position_of_mouse_x = e.clientX - offsetLeft;
  current_position_of_mouse_y = e.clientY - offsetTop;
  
  if(mouseEvent == "mouseDown") {
ctx.beginPath()
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;

console.log("last position of x and last position of y = ");
console.log("x = " +last_position_of_x + last_position_of_y);
ctx.stroke();

console.log("current position of x and current position of y = ");
console.log("x = " +current_position_of_x + current_position_of_y);
ctx.stroke();

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
mouseEvent = "mouseleave";
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
    



  }
}
