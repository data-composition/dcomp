let twoSketch = function(p) {
	let psize =10;
	let tick = 0;
	let noiseOcatave = 4;
	let noiseResoulution= 0.5;
	p.setup = function() {
	  p.createCanvas(900,400);
	  p.noStroke();
	  p.colorMode(p.HSB);
	  p.noiseDetail(noiseOcatave, noiseResoulution);
	}
  
	p.draw = function() {
	  tick+=1;
	  p.clear();
  
	  for (var i = 0; i < p.width/2 / psize; i++) {
		for (var j = 0; j < p.height / psize; j++) {
		  display_noise_time(45+ i, j);
		}
	  }
	  p.noFill();
	  p.stroke(1);
	  p.rect(0, 0, p.width-1, p.height-1);
	  
	  // p.fill(100);
	  p.text('the number of the entire octaves: ' + '[ ' + psize + ' , ' + noiseOcatave + ' , ' + noiseResoulution + ' ]', p.width/2 - 250, 10);
	  // p.fill(80);
	  // p.rect(p.width/2, 0, p.width/2, p.height);
	 
  
	  // for (var i=0; i<25; i++){
	  //   draw_text(i, (p.random(1000)*0.24));
	  // }
  
	  // p.fill(100);
	  // p.text('sdff', p.width/2+10, 10);
  
	}
	
	let display_noise_time = function(x, y) {
	  p.fill(0);
	  let d = p.noise(x/9, y / 10, tick / 50) * psize * 0.7;
	  p.rect(x * psize, y * psize, d, d);
	}
  
	// let draw_text = function(i, n){
	//   p.fill(100);
	//   p.text(n + '   now on working' + '    ' + n * 0.00001 + '   we got this', 10, 17 * (i+1));
	// }
  }
    
document.addEventListener("DOMContentLoaded", function(){
	var myp5 = new p5(twoSketch, 'c2');
	});
