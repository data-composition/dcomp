var fiveSketch = function( p ) { 
	var x = 100.0; 
	var y = 480; 
	var speed = 2.5; 
	p.setup = function() {
	  p.createCanvas(1000, 500);
	};
  
	p.draw = function() {
	//   p.background(100);
	  p.clear();
	  x += speed; 
	  if(x > p.width*2){
		x = 0; 
      }
      p.stroke(1);
      p.fill(100);
      p.rect(0,p.height-20, p.width,6);
      p.fill(130);
      p.rect(0,5, p.width,6);
      p.rect(990,0, 6, p.height);
      p.fill(1, p.map(x, 0, p.width,255, 10));
	  p.ellipse(x,y,25,25);
      p.strokeWeight(0.2);
      p.fill(60);
      p.text('dcomp.site 웹 사이트에서는 방문객이', p.width/2 - 100, p.height/2);
      p.text('웹 페이지에 방문한 시각과 머무른 시각을 수집합니다', p.width/2 - 100, p.height/2 + 17);
      p.text('수집된 데이터는 data composition에 사용됩니다', p.width/2 - 100, p.height/2 + (17*2));
      p.text('datacomposition 2020, GRAYCODE,jiiiin', p.width/2 - 100, p.height/2 + (17*3));



	};
  };
  
  document.addEventListener("DOMContentLoaded", function(){
	var myp5 = new p5(fiveSketch, 'c5');
});
