 const canvas = document.getElementById('canvas1');
 const game = canvas.getContext('2d');
 canvas.width = 800;
 canvas.height = 500;

 const knight = {
	speed: 7,
	x: 0,
	frameX: 0,
	y: 0,
	frameY: 0,
	width: 70,
	height: 70,
};

 
 const keys = [];
 
 
 function drawCircle(x, y, side, color){
 game.beginPath();
 game.fillRect(x, y, side, side);
 game.fillStyle = color;
 }

 var xpos = 0;
 var ypos = 0;
 var xspeed = 5;
 var yspeed = 5;

 var xpos2 = 0;
 var ypos2 = 0;
 var xspeed2 = 3.5;
 var yspeed2 = 3.5;

 var xpos3 = 15;
 var ypos3 = 15;
 var xspeed3 = 4;
 var yspeed3 = 4;

 var xpos4 = 3;
 var ypos4 = 3;
 var xspeed4 = 7;
 var yspeed4 = 7;

function init(){
	xpos = canvas.width/3;
	ypos = canvas.height/3;
	xpos2 = canvas.width/3;
	ypos2 = canvas.height/3;
	xpos3 = canvas.width/3;
	ypos3 = canvas.height/3;
	xpos4 = canvas.width/3;
	ypos4 = canvas.height/3;
	animate()
 }
 

function movement(){
	xpos = xpos + xspeed;
	ypos = ypos + yspeed;
	
	if(ypos > canvas.height){
	yspeed = -yspeed;
	}
	else if(ypos < 0){
	yspeed = -yspeed;
	}
	
	if(xpos > canvas.width){
	xspeed = -xspeed;
	}
	else if(ypos < 0){
	xspeed = -xspeed;
	}
	if(knight.x == xpos && knight.y == ypos){
		collectible.style.display = "none";
	}


	xpos2 = xpos2 + xspeed2;
	ypos2 = ypos2 + yspeed2;
	
	if(ypos2 > canvas.height){
	yspeed2 = -yspeed2;
	}
	else if(ypos2 < 0){
	yspeed2 = -yspeed2;
	}
	
	if(xpos2 > canvas.width){
	xspeed2 = -xspeed2;
	}
	else if(ypos2 < 0){
	xspeed2 = -xspeed2;
	}
	if(knight.x == xpos2 && knight.y == ypos2){
		collectible.style.display = "none";
	}

	xpos3 = xpos3 + xspeed3;
	ypos3 = ypos3 + yspeed3;
	
	if(ypos3 > canvas.height){
	yspeed3 = -yspeed3;
	}
	else if(ypos3 < 0){
	yspeed3 = -yspeed3;
	}
	
	if(xpos3 > canvas.width){
	xspeed3 = -xspeed3;
	}
	else if(ypos3 < 0){
	xspeed3 = -xspeed3;
	}
	if(knight.x == xpos3 && knight.y == ypos3){
		collectible.style.display = "none";
	}

	xpos4 = xpos4 + xspeed4;
	ypos4 = ypos4 + yspeed4;
	
	if(ypos4 > canvas.height){
	yspeed4 = -yspeed4;
	}
	else if(ypos4 < 0){
	yspeed4 = -yspeed4;
	}
	
	if(xpos4 > canvas.width){
	xspeed4 = -xspeed4;
	}
	else if(ypos4 < 0){
	xspeed4 = -xspeed4;
	}
	if(knight.x == xpos4 && knight.y == ypos4){
		collectible.style.display = "none";
	}

}

 
 
 const characterSprite = new Image();
 const background = new Image();
 
 function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
     game.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
 }

 let clear = game.clearRect(0, 0, canvas.width, canvas.height);
 
 
 var leftArrow = 37;
 var rightArrow = 39;
 var downArrow = 40;
 var upArrow = 38;


 window.addEventListener("keydown", function(e) {
	keys[e.keyCode] = true;
});
window.addEventListener("keyup", function(e) {
	delete keys[e.keyCode];
});
  

 
 function animate() {
     	 requestAnimationFrame(animate);
         clear;
         game.drawImage(background, 0, 0, canvas.width, canvas.height);
         drawSprite(characterSprite, knight.width * knight.frameX, knight.height * knight.frameY, knight.width, knight.height, knight.x, knight.y, knight.width, knight.height);
     	 move();
     	 drawCircle(xpos, ypos, 20, "red");
		 drawCircle(xpos2, ypos2, 20, "red");
		 drawCircle(xpos3, ypos3, 20, "red");
		 drawCircle(xpos4, ypos4, 20, "red");
     	 movement();
		 

 }

