let fourSketch = function (p) {
 
  let rectX = 19;
	let rectY = 41;
	let rectW = 493;
	let rectH = 182;
  let spaceD = 17;
  

	let visitH;
	let visitM;
	let visitS;
  
  let interval = p.int(p.random(59));
  
	p.setup = function () {
	  p.createCanvas(1000, 500);
	  p.frameRate(interval);
  
	  visitH = p.hour();
	  visitM = p.minute();
	  visitS = p.second();
	};
  
	p.draw = function () {
	  // p.background(100);
	  p.clear();
  
	//   p.fill(250, 255);
	//   p.noStroke();
	//   p.rect(rectX, rectY, rectW, rectH);
  
	  p.textSize(12);
	
	  p.fill(0);
	  p.text('접속한 시간 :                                 ' + visitH + ' 시 ' + visitM + ' 분 ' + visitS + ' 초 ', rectX + 100, rectY + 50 + (spaceD * 1));
	  p.text('지금의 시간 :                                 ' + p.hour() + ' 시 ' + p.minute() + ' 분 ' + p.second() + ' 초 ', rectX + 100, rectY + 50 + (spaceD *2));
	  p.text('머물고 있는 순간 (Δ1/' +  interval + ') :            Δ ' + p.int(p.frameCount), rectX + 100, rectY + 50 + (spaceD * 4));
	};
};
document.addEventListener("DOMContentLoaded", function () {
  var myp5 = new p5(fourSketch, 'c4');
});