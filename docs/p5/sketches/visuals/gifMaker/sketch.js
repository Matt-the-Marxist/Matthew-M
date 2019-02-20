let capture;
let recording = false;
let c;
let gif;
let totalFrames = 120;

function setup() {
  c = createCanvas(400, 400);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
  setupGif();
}

function draw() {
  background(0);
  percent = frameCount/totalFrames;
  render()
  image(capture, 0, 0, 320, 240);

  if (recording && frameCount % 3 == 0) {
    gif.addFrame(c.elt, {delay: 1, copy: true});
  }

}

function mousePressed() {
  recording = !recording;
  if (!recording) {
    gif.render();
  }
}

function setupGif() {
  gif = new GIF({
    workers: 2,
    quality: 40
  });

  gif.on('finished', function(blob) {
    window.open(URL.createObjectURL(blob));
    setupGif();
  });
}

function render(percent){
	background(0);
	translate(width/2,height/2)
	noFill();
	stroke(255);
	strokeWeight(5)
	rotate(percent*TWO_PI/4);
	rect(0,0,100,100)
}