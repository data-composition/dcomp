var t = function( p ) { 
	var x = 100.0; 
	var y = 100; 
	var speed = 2.5; 
	p.setup = function() {
	  p.createCanvas(300, 200);
	};
  
	p.draw = function() {
	  p.background(100);
	  p.fill(1);
	  x += speed; 
	  if(x > p.width){
		x = 0; 
	  }
	  p.ellipse(x,y,50,50);
  
	};
  };
  
  document.addEventListener("DOMContentLoaded", function(){
	var myp5 = new p5(t, 'c4');
});
