let oneSketch = function (p) {
	
	let rectX = 19;
	let rectY = 280;
	let rectW = 493;
	let rectH = 182;
	let spaceD = 17;
	 

	let visitH;
	let visitM;
	let visitS;
  
	p.setup = function () {
	  p.createCanvas(1000, 500);
	  p.frameRate(37);
      p.noLoop();


	  visitH = p.hour();
	  visitM = p.minute();
	  visitS = p.second();
	};
  
	p.draw = function () {
	  // p.background(100);
	  p.clear();
  
	  p.fill(250, 255);
	  p.noStroke();
	  p.rect(rectX, rectY, rectW, rectH);
  
	  p.textSize(12);
	  p.fill(117);
	  p.text('전시 «Data Composition» 은 2021년 1월 15일부터 시작합니다.', rectX + 10, rectY + 20);
	  p.fill(0);
	  p.text('dc.seoul.kr 웹 사이트에서는 방문객이', rectX + 100, rectY + 80);
	  p.text('웹 페이지에 방문한 시각과 머무른 시간을 수집합니다.', rectX + 100, rectY + 80 + spaceD);
	  p.text('수집된 데이터는 작품 «Data Composition»에 사용됩니다.', rectX + 100, rectY + 80 + (spaceD * 2));
	};
};

document.addEventListener("DOMContentLoaded", function () {
	var myp5 = new p5(oneSketch, 'c1');
});