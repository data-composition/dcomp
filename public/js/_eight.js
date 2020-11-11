let eightSketch = function (p) {
  let psize = 20;
  let tick = 0;

  let x = 0.0;
  let y = 4;
  let timeFreq = 69;
  let initValue = 24;

  p.setup = function () {
    p.createCanvas(1000, 500);
    p.frameRate(69);
    p.noiseDetail(12, 0.4);
  };

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
    p.rect(0, 2, p.width, 35);

    p.strokeWeight(0.1);
    p.fill(100);
    p.rect(0, 0, p.width, 2); // 위 라인
    for (let i = 0; i < p.int(timeFreq / 3); i++) {
      p.rect(0 + (i * (p.width / p.int(timeFreq / 3))), 0, 2, 10);
      p.text(i + initValue, 0 + (i * (p.width / p.int(timeFreq / 3))), 23);

    } // 타임라인 freq = 69;
    p.fill(100);
    p.rect(0, y, p.width, 2); // 아래 라인



  };

  let display_noise_time = function (x, y) {
    p.fill(0);
    let d = p.noise(x / 5, y / 10, tick / 10) * psize * 0.6;
    p.rect(p.width / 2 + (x * psize), y * psize, d, d);
  }

  let draw_text = function (i, n) {
    p.fill(80);
    p.text(n + '   now on working' + '    ' + n * 0.00001 + '   we got this', 10, (p.random(35)) * (i + 1));
  }
};

document.addEventListener("DOMContentLoaded", function () {
  var myp5 = new p5(eightSketch, 'c8');
});