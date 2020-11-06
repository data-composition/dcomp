let sixSketch = function(p) {

  p.setup = function() {
    p.createCanvas(1000,500);
    p.noStroke();
    p.colorMode(p.RGB);
  }

  p.draw = function() {
    p.clear();

   
    for (var i=0; i<25; i++){
      draw_text(i, (p.random(1000)*0.24));
    }
  }
  let draw_text = function(i, n){
    p.fill(90);
    p.text(n + '   now on working' + '    ' + n * 0.00001 + '   we got this', p.width/2+10, (p.random(35)) * (i+1));
  }
}

  document.addEventListener("DOMContentLoaded", function(){
	var myp5 = new p5(sixSketch, 'c6');
	});

  