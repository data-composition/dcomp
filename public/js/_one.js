let oneSketch = function (p) {
	let timeFreq = 72;
	let x = 0.0;
	let y = 4;
	let speed = .3;
	let seconds = 0;
	p.setup = function () {
		p.createCanvas(1000, 500);
	};

	p.draw = function () {
		p.clear();
		x += speed;
		if (x > p.width * 2.5) {
			x = 0;
		}
		p.noStroke();
		p.fill(235);
		p.rect(0, p.height - 35, p.width, 35); // 아래 긴 네모
		p.rect(10, p.height - 100, 100, 30); // 섹션 구분용 네모
		p.fill(50);
		p.text('1 / 13', 45, p.height - 80 );
		p.fill(100);
		p.rect(0, p.height - 2, p.width, 2); // 아래 라인
		p.rect(0, p.height - 6, p.width, 2); // 아래 라인

		for (let i = 0; i < p.int(timeFreq / 3); i++) {
			p.rect(0 + (i * (p.width / p.int(timeFreq / 3))), p.height - 10, 2, 10);
			p.text(i+1, 0 + (i * (p.width / p.int(timeFreq / 3))), p.height - 13);
		} // 타임라인 freq = 72;

		p.fill(1, p.map(y, 0, p.width, 255, 10));
		p.ellipse(x, p.height - 6, 7, 7);

	};
};

document.addEventListener("DOMContentLoaded", function () {
	var myp5 = new p5(oneSketch, 'c1');
});