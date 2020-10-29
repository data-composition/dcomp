var u = function (p){
	let shader_test;
	let shader_img;
	p.preload = function(){
		shader_test = p.loadShader("shaders/blank.vert", "shaders/first.frag");
		shader_img = p.loadImage("shaders/firstFragImg.jpg");
	};
	p.setup = function(){
		p.createCanvas(980,480, p.WEBGL);
	};
	p.draw = function(){
		p.resetShader();
		p.shader(shader_test);
		shader_test.setUniform("iResolution", [980, 480]);
		shader_test.setUniform("iTime", p.millis()/100000.0);	
		shader_test.setUniform("iChannel0", shader_img);	
		p.rect(0, 0, 980, 480);

	};
};

document.addEventListener("DOMContentLoaded", function(){
	var myp5 = new p5(u, 'c2');
	});
