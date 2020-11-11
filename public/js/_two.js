let twoSketch = function (p) {
	let psize = 10;
	let tick = 0;
	let timeFreq = 72;
	let initValue = 25;
  
	p.setup = function () {
	  p.createCanvas(1000, 500);
	  p.colorMode(p.RGB);
	  p.noiseDetail(4, 0.5);
	}
  
	p.draw = function () {
	  tick += 1;
	  p.clear();
  
	  p.fill(0, 0.5);
	  p.rect(0, 0, p.width / 2, p.height);
  
	  for (var i = 0; i < p.width / 2 / psize; i++) {
		for (var j = 0; j < p.height / psize; j++) {
		  display_noise_time(i, j);
		}
	  }
  
	  for (var i = 0; i < 25; i++) {
		draw_text(i, (p.random(1000) * 0.24));
	  }
  
	  p.noStroke();
	  p.fill(235);
	  p.rect(0, p.height - 35, p.width, 35); // 아래 긴 네모
	  p.rect(10, p.height - 100, 100, 30); // 섹션 구분용 네모
	  p.fill(50);
	  p.text('3 / 13', 45, p.height - 80);
	  p.fill(100);
	  p.rect(0, p.height - 2, p.width, 2); // 아래 라인
	  p.rect(0, p.height - 6, p.width, 2); // 아래 라인
  
	  for (let i = 0; i < p.int(timeFreq / 3); i++) {
		p.rect(0 + (i * (p.width / p.int(timeFreq / 3))), p.height - 10, 2, 10);
		p.text(i + initValue, 0 + (i * (p.width / p.int(timeFreq / 3))), p.height - 13);
	  } // 타임라인 freq = 72;
  
	}
  
	let display_noise_time = function (x, y) {
	  p.fill(0);
	  let d = p.noise(x / 9, y / 50, tick / 50) * psize * 0.7;
	  p.rect(x * psize, y * psize, d, d);
	}
  
	let draw_text = function (i, n) {
	  p.fill(80);
	  p.text(n + '   now on working' + '    ' + n * 0.00001 + '   we got this', p.width / 2 + 10, (p.random(35)) * (i + 1));
	}
}

document.addEventListener("DOMContentLoaded", function () {
	var myp5 = new p5(twoSketch, 'c2');
});