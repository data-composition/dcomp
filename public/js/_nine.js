let nineSketch = function (p) {
  let x = 0.0;
  let y = 4;
  let timeFreq = 69;
  let initValue = 47;
  
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
    p.rect(0, 2, p.width, 35);
    p.rect(p.width - 155, 47, 150, 35); 

    p.strokeWeight(0.1);
    p.fill(100);
    p.rect(0, 0, p.width, 2); // 위 라인
    for (let i = 0; i < p.int(timeFreq / 3); i++) {
      p.rect(0 + (i * (p.width / p.int(timeFreq / 3))), 0, 2, 10);
      p.text(i + initValue, 0 + (i * (p.width / p.int(timeFreq / 3))), 23);

    } // 타임라인 freq = 69;
    p.fill(100);
    p.rect(0, y, p.width, 2); // 아래 라인

    p.rect(p.width - 2, 0, 2, 60);
    p.textStyle(p.BOLD);
    p.text('(69Hz as the unit of time)', p.width - 150, 75);
    p.text('(period / unit Hertz) Sec.', p.width - 150,60);
  }
}



document.addEventListener("DOMContentLoaded", function(){
  var myp5 = new p5(nineSketch, 'c9');

    setInterval(function(){
      fetch(apiUrl + '/api/log')
      .then(response => response.json())
      .then(data => {
        console.log(data)
          let userIds = ''

          for(const d of data.docs){
            userIds += '<span>' + d.userId + ':' + d.target + '</span></br>'
          }
          document.querySelector('#nine').innerHTML = userIds
      });
    }, 1000)
})
