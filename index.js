const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Creating the wall
class Brick {
  static height = 40;
  static width = 40;
  constructor({ position }) {
    this.position = position;
    this.height = 40;
    this.width = 40;
  }
  draw() {
    c.fillStyle = "#1c1cd7";
    c.fillRect(this.position.x, this.position.y, this.height, this.width);
  }
}

class PacMan {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 20;
  }
  draw() {
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = "#ffff00";
    c.fill();
    c.closePath();
  }
}

const map = [
  ["-", "-", "-", "-", "-", "-"],
  ["-", " ", " ", " ", " ", "-"],
  ["-", " ", " ", " ", " ", "-"],
  ["-", " ", "-", "-", " ", "-"],
  ["-", " ", " ", " ", " ", "-"],
  ["-", " ", " ", " ", " ", "-"],
  ["-", "-", "-", "-", "-", "-"],
];

const walls = [];

map.forEach((row, i) => {
  row.forEach((symbol, j) => {
    switch (symbol) {
      case "-":
        walls.push(
          new Brick({
            position: {
              x: Brick.width * j,
              y: Brick.height * i,
            },
          }),
        );
        break;
    }
  });
});

walls.forEach((brick) => {
  brick.draw();
});

const pacman = new PacMan({
  position: {
    x: 40,
    y: 40,
  },
  velocity: {
    x: 0,
    y: 0,
  },
});

pacman.draw();
