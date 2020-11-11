let threeSketch = function (p) {
  let timeFreq = 72;
  let initValue = 49;


  p.setup = function () {
    p.createCanvas(1000, 500);
    p.colorMode(p.RGB);
    p.noLoop();
  }

  p.draw = function () {
    let titleBoxPosX = p.width / 4;
    let titleBoxPosY = p.height / 4 - 15;
    let titleBoxPosW = p.width / 2;
    let titleBoxPosH = p.height / 3 + 15;


    p.noStroke();
    p.fill(235);
    p.rect(0, p.height - 35, p.width, 35); // 아래 긴 네모
    p.rect(10, p.height - 100, 100, 30); // 섹션 구분용 네모
    p.rect(titleBoxPosX, titleBoxPosY, titleBoxPosW, titleBoxPosH); // description box
    p.rect(p.width - 145, p.height - 65 , 143, 25)

    p.fill(50);
    p.textStyle(p.BOLD);
    p.text('data composition', titleBoxPosX + 30, titleBoxPosY + 50);
    p.text('2020', titleBoxPosX + 30, titleBoxPosY + 65);
    p.text('GRAYCODE', titleBoxPosX + 30, titleBoxPosY + 110);
    p.text('jiiiiin', titleBoxPosX + 30, titleBoxPosY + 130);

    p.textStyle(p.NORMAL);
    p.text('어느덧 데이터는 인류에 무늬를 수놓고 있다. ', titleBoxPosX + 200, titleBoxPosY + 50);
    p.text('우리의 삶과 관계하는 모든 손짓이 정보가되어', titleBoxPosX + 200, titleBoxPosY + 65);
    p.text('오늘의 세대를 이룩하고 있다. 그리하여 우리는', titleBoxPosX + 200, titleBoxPosY + 80);
    p.text('생각하는 존재로서 오프라인에 실재하지만 동시에', titleBoxPosX + 200, titleBoxPosY + 95);
    p.text('데이터가 되어 온라인 공간에 존재하게 된다.  ', titleBoxPosX + 200, titleBoxPosY + 120);
    p.text('data composition 에서 데이터는 시간이다.', titleBoxPosX + 200, titleBoxPosY + 135);
    p.text('이 순간 당신에게 데이터는 무엇인가.', titleBoxPosX + 200, titleBoxPosY + 150);

    p.text('9 / 13', 45, p.height - 80);
    p.fill(100);
    p.rect(0, p.height - 2, p.width, 2); // 아래 라인
    p.rect(0, p.height - 6, p.width, 2); // 아래 라인

    for (let i = 0; i < p.int(timeFreq / 3); i++) {
      p.rect(0 + (i * (p.width / p.int(timeFreq / 3))), p.height - 10, 2, 10);
      p.text(i + initValue, 0 + (i * (p.width / p.int(timeFreq / 3))), p.height - 13);
    } // 타임라인 freq = 72;

    p.rect(p.width - 2, p.height - 60, 2, 60);
    p.textStyle(p.BOLD);
    p.text('(72Hz as the unit of time)', p.width - 140, p.height - 55);
    p.text('(period / unit Hertz) Sec.', p.width - 140, p.height - 40);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  var myp5 = new p5(threeSketch, 'c3');
});