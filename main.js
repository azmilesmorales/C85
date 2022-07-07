canvas = document.getElementById ("myCanvas") ;
ctx = canvas.getContext ("2d");
nasa_mars_images_array = ["1.jpg","2.jpg","3.jpg","4.jpg"];
random_number = Math.floor(Math.random()*4);
console.log (random_number);
rover_width = 100 ;
rover_height = 90;
background_image = nasa_mars_images_array [random_number];
console.log ("background_image"+ background_image);
rover_image = "rover.png";
rover_x = 10 ;
rover_y = 10 ;



function add () {
    background_imgtag = new Image (); // defining a variable with new image
    background_imgtag.onload = uploadBackground; // setting a function, onloading this variable
    background_imgtag.src = background_image; // load image

    rover_imgTag = new Image (); // defining a variable with new image
    rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
    rover_imgTag.src = rover_image; // load image
}

function uploadBackground() {
    ctx.drawImage(background_imgtag,0,0,canvas.width , canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x ,rover_y,rover_width,rover_height )
}

window.addEventListener("keydown", my_keydown);
function my_keydown (e)
{
    key_pressed = e.keyCode;
    console.log (key_pressed);
    if(key_pressed == '37')
    {
       left();
       console.log ("left");
       
    }
    if(key_pressed == '38')
    {
       up();
       console.log ("up");
       
    }
    if(key_pressed == '39')
    {
       right();
       console.log ("right");
       
    }
    if(key_pressed == '40')
    {
       down();
       console.log ("down");
       
    }
}
function up ()
{
    if (rover_y >= 0)
    {
        rover_y = rover_y - 10;
        console.log ("when up arrow is pressed,x = "+rover_x+"| y="+rover_y);
        uploadBackground();
        uploadrover();

    }
}
function down ()
{
    if (rover_y <= 500)
    {
        rover_y = rover_y+  10;
        console.log ("when up arrow is pressed,x = "+rover_x+"| y="+rover_y);
        uploadBackground();
        uploadrover();
        
    }
}
function left ()
{
    if (rover_x >= 0)
    {
        rover_x = rover_x - 10;
        console.log ("when up arrow is pressed,x = "+rover_x+"| y="+rover_y);
        uploadBackground();
        uploadrover();
        
    }
}
function right ()
{
    if (rover_x <= 700)
    {
        rover_x = rover_x + 10;
        console.log ("when up arrow is pressed,x = "+rover_x+"| y="+rover_y);
        uploadBackground();
        uploadrover();
        
    }
}