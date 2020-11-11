let fourSketch = function (p) {
  let THE_SEED;

  let width = 500;

  let resolution =20;

  let noise_zoom = 15;
  let magnitude = 100;

  let plate_padding = 10; // make space

  let number_of_blocks = 10;
  let blocks = [];

  let palette;
  // let updateCound = 10+(p.random(10));

  p.setup = function () {
    p.createCanvas(1000, 500);
    p.clear();
    // p.frameRate(updateCound);
    p.noLoop();
    // p.noStroke();
    p.strokeWeight(0.1);

    palette = [
      p.color(86, 86, 86, 100),
      p.color(196, 196, 199, 100),
      p.color(33, 46, 66, 100),
      p.color(94, 94, 94, 100),
      p.color(42, 60, 110, 100),
      p.color(227, 227, 227, 100)
    ];

    THE_SEED = p.floor(p.random(9999999));
    p.noiseSeed(THE_SEED);

    for (var i = 0; i < number_of_blocks; i++) {
      blocks.push(create_block(p.random(1, 10), i));
    }
  };

  p.draw = function () {
    p.background(235, 235, 235);
    let current_height = 0;
    
    p.fill(100);
    p.rect(10,0, 2, p.height); // 오른 옆
    /*
    p.rect(8,2, p.width - 8, 2); // 위
    p.rect(8, p.height-4, p.width - 8, 2); // 아래

    p.rect(3, 2, 5, 2);
    p.rect(3, p.height - 4, 5, 2);
    p.text('amount', 10, 10);
    */
    p.translate(10, p.height);

    blocks.forEach(function (block, index) {
      let block_height = p.abs(Math.min(...block[block.length - 1].points) - 10);

      if (current_height + block_height < p.height -100) {
        display_block(block, index);
        p.translate(0, -block_height);
        current_height += block_height;
      } else {
        p.translate(190, current_height);
        display_block(block, index);
        p.translate(0, -block_height);
        current_height = block_height;
      }
    }, this);
  };

  function create_block(number_of_plates, block_index) {
    let plates = [];
    for (var plate_index = 0; plate_index < number_of_plates; plate_index++) {
      let points = [];

      let plate_height = p.randomGaussian(0,10);
      if (plate_index > 0) {
        for (let i = 0; i <= resolution; i++) {
          points.push(
            p.min(-plate_padding, get_noise(i, plate_index, block_index) - plate_height) +
            plates[plate_index - 1].points[i]
          );
        }
      } else {
        for (let i = 0; i <= resolution; i++) {
          points.push(p.min(-plate_padding, get_noise(i, plate_index, block_index) - plate_height));
        }
      }

      plates.push({
        points: points,
        color: palette[p.floor(p.random(palette.length))]
      });
    }
    return plates;
  }

  function display_block(block, block_index) {
    block.forEach(function (plate, index) {
      p.fill(plate.color);
      p.beginShape();

      if (index === 0) {
        p.vertex(0, 0);
        p.vertex(100 + (p.random(width)), 0);
      } else {
        for (let i = 0; i <= resolution; i++) {
          p.vertex(i * p.random(width) / resolution, block[index - 1].points[i] - plate_padding);
        }
      }
      for (let i = resolution; i >= 0; i--) {
        p.vertex(i * p.random(width) / resolution, block[index].points[i]);
      }
      p.endShape(p.CLOSE);

    }, this);
  }

  function get_noise(x, y, z) {
    return -magnitude * (p.noise(x / noise_zoom, y, z) - 0.4);
  }

};
  document.addEventListener("DOMContentLoaded", function(){
	var myp5 = new p5(fourSketch, 'c4');
});
  