canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
color = "red";
width_of_line = 2;

var mouseEvent = "empty";

var last_position_of_x;
var last_position_of_y;

canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e)
{
 color = document.getElementById("color_name").value;
 width_of_line = document.getElementById("line_width").value;

 mouseEvent = "mousedown";

}

canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e){
    mouseEvent = "mouseup";

}

canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e){
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown")
    {
        ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = width_of_line;

console.log("last position of x and y coordinate = ");
console.log("x = " + last_position_of_x + " , Y = " + last_position_of_y);
ctx.moveTo(last_position_of_x, last_position_of_y);

console.log("current position of x and Y coordinate = ");
console.log("x = " + mouse_x + " , Y = " + mouse_y);
ctx.lineTo(mouse_x,mouse_y);
        ctx.stroke();
    }

    last_position_of_x = mouse_x;
    last_position_of_y = mouse_y;
}

function clear_Area(){
    ctx.clearRect(0 , 0 , canvas.height, canvas.width);
}

