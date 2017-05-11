Simulation = {
  context: {},
  startTime: 0,
  task: -1,
  time: 0,
  tick: function() {
  },
  setCanvas: function(context) {
    this.context = context;
  },
  start: function() {
  },
  stop: function() {
  }
}

Scene = {
  balls: [],
  ramps: []
}

Ball = {
  x: 0,
  y: 0,
  dX: 0,
  dY: 0,
  motion: function() {
  },
  randomPos: function() {
    this.x = getRandomInt(0, 590);
    this.y = getRandomInt(0, 270);
  },
  setPos: function(x, y) {
    this.x = x;
    this.y = y;
  }
}

Ramp = {
  x: 0,
  y: 0,
  rotation: 0
}
  
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
