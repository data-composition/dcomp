let eightSketch = function (p) {
  const w = 380;
  const h = 100;
  let t = 0;
  let n = 100;
  let particles = [];

  p.setup = function() {
    p.createCanvas(1000, 500);
    p.fill(0);

    for(var i = 0; i < n; i++) {
      particles.push(
        {
          pos: p.createVector(p.random(w), p.random(h)),
          vel: p.createVector(p.random(-1,1),p.random(-1,1)),
          seed: i
        }
      )
    }
  }

  p.draw = function() {
    p.clear();
    particles.forEach( function(prtcl) {
      display(prtcl.pos, prtcl.vel);
      update(prtcl.pos, prtcl.vel, prtcl.seed);
    });

    t += 0.002;
  }

  let display = function(pos, vel) {
    p.ellipse( 55 + pos.x, 90 + pos.y, 2);
  }

  let update = function(pos, vel, seed) {
    pos.x = mod((pos.x + vel.x), w);
    pos.y = mod((pos.y + vel.y), h);

    let r = p5.Vector.fromAngle(p.noise(seed,t) * p.TWO_PI);
    //let r = p.createVector(p.random(-1,1),p.random(-1,1));
    vel.x = r.x;
    vel.y = r.y;
  }

  let mod = function (x, n) {
    return ((x % n) + n ) % n;
  }
};

document.addEventListener("DOMContentLoaded", function () {
  var myp5 = new p5(eightSketch, 'c8');
});