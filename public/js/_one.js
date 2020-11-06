var oneSketch = function( p ) { 
	var x = 980; 
	var y = 0; 
	var speed = 2.65; 

	p.setup = function() {
	  p.createCanvas(1000, 500);
	};
  
	p.draw = function() {
	//   p.background(100);
	  p.clear();
	  y += speed; 
	  if(y > p.height*2.5){
		y = 0; 
      }
      p.stroke(1);
      p.fill(100);
	  p.rect(980, 0, 6, p.height);
	  
      p.fill(1, p.map(y, 0, p.height,255, 10));
	  p.ellipse(x,y,25,25);
  
	};
  };
  
  document.addEventListener("DOMContentLoaded", function(){
	var myp5 = new p5(oneSketch, 'c1');
});
