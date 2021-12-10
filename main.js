canvas = new fabric.Canvas("myCanvas");

player_x = 20;
player_y = 20;
block_height = 40;
block_width = 40;
player_object = " ";
block_object = " ";

function player_update(){
    fabric.Image.fromURL("cutegirl.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top : player_y,
            left : player_x
        });
        canvas.add(player_object);
        
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top : player_y,
            left : player_x
        });
        canvas.add(block_object);
        
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == "80"){
        console.log("shift & p pressed");
        block_height = block_height + 10;
        block_width = block_width + 10;
        document.getElementById("current_height").innerHTML = block_height;
        document.getElementById("current_width").innerHTML = block_width;
    }
    if (e.shiftKey == true && keypressed == "77"){
        console.log("shift & m pressed");
        block_height = block_height - 10;
        block_width = block_width - 10;
        document.getElementById("current_height").innerHTML = block_height;
        document.getElementById("current_width").innerHTML = block_width;
    }

    if (keypressed == "40"){
        down();
        console.log("down");
    }
    if (keypressed == "37"){
        left();
        console.log("left");
    }
    if (keypressed == "38"){
        up();
        console.log("up");
    }
    if (keypressed == "39"){
        right();
        console.log("right");
    }
    if (keypressed == "87"){
        new_image("wall.jpg");
        console.log("w");
    }
    if (keypressed == "89"){
        new_image("yellow_wall.png");
        console.log("y");
    }
    if (keypressed == "68"){
        new_image("dark_green.png");
        console.log("d");
    }
    if (keypressed == "71"){
        new_image("ground.png");
        console.log("g");
    }
    if (keypressed == "76"){
        new_image("light_green.png");
        console.log("l");
    }
    if (keypressed == "79"){
        new_image("Oak-Planks-7.png");
        console.log("o");
    }
    if (keypressed == "82"){
        new_image("roof.jpg");
        console.log("r");
    }
    if (keypressed == "84"){
        new_image("trunk.jpg");
        console.log("t");
    }
    if (keypressed == "85"){
        new_image("unique.png");
        console.log("u");
    }
    if (keypressed == "83"){
        new_image("cloud.jpg");
        console.log("s");
    }
}

function up(){
    if (player_y >= 0){
        player_y = player_y - block_height;
        console.log(block_height);
        console.log("up pressed x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if (player_y <= 500){
        player_y = player_y + block_height;
        console.log(block_height);
        console.log("down pressed x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if (player_x >= 0){
        player_x = player_x - block_width;
        console.log(block_width);
        console.log("left pressed x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if (player_x <= 850){
        player_x = player_x + block_width;
        console.log(block_width);
        console.log("right pressed x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}