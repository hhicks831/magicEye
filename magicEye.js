window.onload = initSquare();

function blackWhite(){
	var i = Math.round(Math.random());
	return i;

}

function blackWhite2(){

	var i = Math.random();
	if(i < 0.6){
		i = 1;
	}
	else{
		i = 0;
	}
	return i;
}

function initSquare(){

	for(y = 0; y < 100; y++){
		for(x = 0; x < 100; x ++){
				var div = document.createElement("DIV");        // Create a <button> element      // Create a text node
				div.setAttribute("class", "pixel");
				div.className += " pixel("  + (x % 25) + "," + y + ")";
				div.className += " band" + Math.ceil( (x+1) / 25);
				document.getElementById("magicEye").appendChild(div);
		}                  
	}
	fillSquare();
	putPattern();
}


function fillSquare(){
	for (y = 0; y< 100; y++){
		for(x = 0; x< 25; x++){
			var p = document.getElementsByClassName("pixel(" + x + "," + y + ")");
			var b = blackWhite();
				for (i = 0; i < p.length; i++){
					if(b == 1){
					p[i].className += " black";
				}
				else{
					p[i].className += " white";
				}

				}
		}
	}

}

function pix(x, y, c){

	this.x = x;
	this.y = y;
	this.c = c;
}

function makePattern(){
var pattern = [];
	for (i = 0; i < 19; i ++){
		for(c = 0; c < 19; c++){
			var x = blackWhite2();
			pattern.push(new pix(i,c,x));
		}
	}

return pattern;
}

function putPattern(){
var p = makePattern();
	for(i = 0; i < p.length; i++){
		var c = document.getElementsByClassName("pixel(" + p[i].x + "," + (p[i].y + 40) + ") band2");
			//c[0].setAttribute("class" , "pixel pixel(" + p[i].x + "," + (p[i].y + 40) + ") band2 testred");
			if (p[i].c == 1){
				c[0].className = "pixel pixel(" + p[i].x + "," + (p[i].y + 40) + ") band2 black";
			}
			else
				c[0].className = "pixel pixel(" + p[i].x + "," + (p[i].y + 40) + ") band2 white";
			

		var c = document.getElementsByClassName("pixel(" + (p[i].x+ 5) + "," + (p[i].y + 40) + ") band3");
				//c[0].className = "pixel pixel(" + (p[i].x + 4) + "," + (p[i].y + 40) + ") band3 testred";
			
			if (p[i].c == 1){
				c[0].className = "pixel pixel(" + (p[i].x + 5) + "," + (p[i].y + 40) + ") band3 black";
			}
			else
				c[0].className = "pixel pixel(" + (p[i].x + 5) + "," + (p[i].y + 40) + ") band3 white";
			

	}
var t = document.getElementsByClassName("pixel(13,39) band2");
	t[0].className = "pixel pixel(13,39) band2 center";
var t = document.getElementsByClassName("pixel(13,39) band3");
	t[0].className = "pixel pixel(13,39) band3 center";
}

/*


				if(blackWhite() == 1){
					div.className += " black";
				}
				else{
					div.className += " white";
				}

*/