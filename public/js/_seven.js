let sevenSketch = function (p) {
  let x = 0.0;
  let y = 4;
  let speed = .3;
  let seconds = 0;

  let visitH;
  let visitM;
  let visitS;

  let timeFreq = 69;
  p.setup = function () {
    p.createCanvas(1000, 500);
    p.frameRate(69);

    visitH = p.hour();
    visitM = p.minute();
    visitS = p.second();
  };

  p.draw = function () {
    //   p.background(100);
    p.clear();
    x += speed;
    if (x > p.width * 2) {
      x = 0;
    }

    let frame = p.frameCount % 69;
    speed = p.map(frame, 0, 69, 0, (p.width / p.int(timeFreq / 3)));
    speed += speed;


    p.fill(235);
    p.rect(0, 2, p.width, 35);

    p.strokeWeight(0.1);
    p.fill(100);
    p.rect(0, 0, p.width, 2); // 위 라인
    for (let i = 0; i < p.int(timeFreq / 3); i++) {
      p.rect(0 + (i * (p.width / p.int(timeFreq / 3))), 0, 2, 10);
      p.text(i+1, 0 + (i * (p.width / p.int(timeFreq / 3))), 23);

    } // 타임라인 freq = 69;
    p.fill(100);
    p.rect(0, y, p.width, 2); // 아래 라인
    p.fill(1, p.map(x, 0, p.width, 255, 80)); // 공 컬러
    p.ellipse(x, y + 1, 7, 7); // 공
    p.noStroke();
    p.fill(255, 130);
    p.rect(p.width / 2 - 120, p.height / 3 - 30, 280, 220);
    p.strokeWeight(0.2);
    p.fill(60);
    p.text('dcomp.site 웹 사이트에서는 방문객이', p.width / 2 - 100, p.height / 3);
    p.text('웹 페이지에 방문한 시각과 머무른 시간을 수집합니다.', p.width / 2 - 100, p.height / 3 + 17);
    p.text('수집된 데이터는 data composition에 사용됩니다.', p.width / 2 - 100, p.height / 3 + (17 * 2));
    p.text('접속한 시간 : ' + visitH + ' 시 ' + visitM + ' 분 ' + visitS + ' 초 ', p.width / 2 - 100, p.height / 3 + (17 * 4));
    p.text('지금의 시간 : ' + p.hour() + ' 시 ' + p.minute() + ' 분 ' + p.second() + ' 초 ', p.width / 2 - 100, p.height / 3 + (17 * 5));
    // p.text('(1Δ/44Hz)', p.width / 2 + 30, p.height / 3 + (17 * 7));
    p.text('머물고 있는 순간 (Δ1/69Hz) : Δ ' + p.int(seconds / 69.), p.width / 2 - 100, p.height / 3 + (17 * 7));

    p.text('© datacomposition 2020 by GRAYCODE,jiiiin', p.width / 2 - 100, p.height / 3 + (17 * 10));


  };
};

document.addEventListener("DOMContentLoaded", function () {
  var myp5 = new p5(sevenSketch, 'c7');
});