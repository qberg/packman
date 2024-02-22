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
