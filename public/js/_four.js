let fourSketch = function (p) {
  let greeting;
  p.setup = function () {
    p.createCanvas(1000, 500);
    p.noLoop();
    greeting = p.int(p.random(4)) + 1;
  };


  p.draw = function () {
    p.fill(20, 0, 0, 10);
    p.strokeWeight(0.1);
    p.rect(36,80, 100, 100);

    p.textSize(10);
    p.fill(50);
    p.text('Data Composition -1', 40, 100);
    p.text('2021', 40, 110);
    p.textSize(15);
    if (greeting === 1) {
      p.text('안녕하세요 1',40, 140);
    } else if (greeting === 2) {
      p.text('안녕하세요 2', 40, 140);
    } else if (greeting === 3) {
      p.text('안녕하세요 3', 40, 140);
    } else if (greeting === 4) {
      p.text('안녕하세요 4', 40, 140);
    }

  };

};
document.addEventListener("DOMContentLoaded", function () {
  var myp5 = new p5(fourSketch, 'c4');
});