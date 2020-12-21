let fiveSketch = function (p) {
  let rectX = 568;
	let rectY = 32;
	let rectW = 380;
	let rectH = 180;
  let spaceD = 17;
  
    
	p.setup = function () {
	  p.createCanvas(1000, 500);
	  p.frameRate(60);
    p.noLoop();
	 
	};
  
	p.draw = function () {
	  // p.background(100);
	  p.clear();
  
	  p.fill(250, 255);
	  p.noStroke();
	  p.rect(rectX, rectY, rectW, rectH);
  
	  p.textSize(12);
	
	  p.fill(0);
    p.text('전시가 종료된 후', rectX+90 , rectY + 50 + (spaceD * 1));
    p.text('«Data Composition -1» - dc.seoul.kr', rectX+90 , rectY + 50 + (spaceD * 2));
    p.text('웹 사이트를 통해 모아진 데이터를', rectX+90 , rectY + 50 + (spaceD * 3));
    p.text('활용한 사운드 작품이 발표됩니다.', rectX+90 , rectY + 50 + (spaceD * 4));
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var myp5 = new p5(fiveSketch, 'c5');
});