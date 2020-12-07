let oneSketch = function (p) {
	let rectX = 185;
	let rectY = 117;
	let rectW = 600;
	let rectH = 350;
	let spaceD = 17;
  
	let visitH;
	let visitM;
	let visitS;
  
  
  
	p.setup = function () {
	  p.createCanvas(1000, 500);
	  p.frameRate(37);
  
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
	  p.text('전시 <Data Composition> 은 2021년 1월 15일부터 시작합니다.', rectX + 10, rectY + 20);
	  p.fill(0);
	  p.text('dc.seoul.kr 웹 사이트에서는 방문객이', rectX + 180, rectY + 100);
	  p.text('웹 페이지에 방문한 시각과 머무른 시간을 수집합니다.', rectX + 180, rectY + 100 + spaceD);
	  p.text('수집된 데이터는 작품 <Data Composition>에 사용됩니다.', rectX + 180, rectY + 100 + (spaceD * 2));
	  p.text('접속한 시간 : ' + visitH + ' 시 ' + visitM + ' 분 ' + visitS + ' 초 ', rectX + 180, rectY + 100 + (spaceD * 4));
	  p.text('지금의 시간 : ' + p.hour() + ' 시 ' + p.minute() + ' 분 ' + p.second() + ' 초 ', rectX + 180, rectY + 100 + (spaceD * 5));
	  p.text('머물고 있는 순간 (Δ1/37) : Δ ' + p.int(p.frameCount), rectX + 180, rectY + 100 + (spaceD * 7));
  
	  p.text('© Data Composition 2020 by GRAYCODE,jiiiin', rectX + 180, rectY + 100 + (spaceD * 13));

  
	};
};

document.addEventListener("DOMContentLoaded", function () {
	var myp5 = new p5(oneSketch, 'c1');
});