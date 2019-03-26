import 'dart:async';
import 'dart:collection';
import 'dart:html' as html;
import 'dart:html';
import 'package:stagexl/stagexl.dart';
import 'dart:core';
import 'dart:math';
import 'package:color/color.dart';
import 'package:image/image.dart';

var WIDTH = 600;
var HEIGHT = 600;
var CELL_SIZE = 40;

var random = new Random();
var grid = new List();
var cols;
var rows;

CanvasElement canvas;
CanvasRenderingContext2D ctx;

class Cell {
  int x;
  int y;
  bool top;
  bool bottom;
  bool left;
  bool right;
  bool visited;

  Cell(int x, int y) {
    this.x = x;
    this.y = y;
    this.top = true;
    this.bottom = true;
    this.left = true;
    this.right = true;
    this.visited = false;
  }

  draw() {
    var x = this.x * CELL_SIZE;
    var y = this.y * CELL_SIZE;

    if (this.visited) {
      ctx.setFillColorRgb(255, 255, 255);
      ctx..fillRect(x, y, CELL_SIZE, CELL_SIZE);
    }

    if (this.top) {
      ctx.setStrokeColorRgb(0, 0, 0);
      ctx
        ..beginPath()
        ..moveTo(x, y)
        ..lineTo(x + CELL_SIZE, y)
        ..stroke();
    }

    if (this.right) {
      ctx.setStrokeColorRgb(0, 0, 0);
      ctx
        ..beginPath()
        ..moveTo(x + CELL_SIZE, y)
        ..lineTo(x + CELL_SIZE, y + CELL_SIZE)
        ..stroke();
    }

    if (this.bottom) {
      ctx.setStrokeColorRgb(0, 0, 0);
      ctx
        ..beginPath()
        ..moveTo(x + CELL_SIZE, y + CELL_SIZE)
        ..lineTo(x, y + CELL_SIZE)
        ..stroke();
    }

    if (this.left) {
      ctx.setStrokeColorRgb(0, 0, 0);
      ctx
        ..beginPath()
        ..moveTo(x, y + CELL_SIZE)
        ..lineTo(x, y)
        ..stroke();
    }
  }

  checkNeighbors() {
    var neighbors = new List();

    var topIndex = index(this.x, this.y - 1);
    if (topIndex != -1) {
      if (!grid[topIndex].visited) {
        neighbors.add(grid[topIndex]);
      }
    }
    var rightIndex = index(this.x + 1, this.y);
    if (rightIndex != -1) {
      if (!grid[rightIndex].visited) {
        neighbors.add(grid[rightIndex]);
      }
    }
    var bottomIndex = index(this.x, this.y + 1);
    if (bottomIndex != -1) {
      if (!grid[bottomIndex].visited) {
        neighbors.add(grid[bottomIndex]);
      }
    }
    var leftIndex = index(this.x - 1, this.y);
    if (leftIndex != -1) {
      if (!grid[leftIndex].visited) {
        neighbors.add(grid[leftIndex]);
      }
    }

    if (neighbors.isNotEmpty) {
      var randomIndex = (random.nextInt(neighbors.length)).floor();
      return neighbors[randomIndex];
    } else {
      return null;
    }
  }

  index(var i, var j) {
    if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) return -1;
    return i + j * cols;
  }
}

Future<Null> main() async {
  var header = html.querySelector('#header');
  header.innerHtml = "Fractals";
  var subheader = html.querySelector('#subheader');
  subheader.innerHtml = "Select Fractal!";
  InputElement cellSizeInput = html.querySelector('#cellsize');
  var mazeVars = html.querySelector("#mazeVars");
  var fractalButtons = html.querySelector('#fractalButtons');
  var mazeButtons = html.querySelector('#mazeButtons');
  mazeButtons.style.visibility = "hidden";
  mazeVars.style.visibility = "hidden";

  var ButtonFractals = html.querySelector('#ButtonFractals');
  var ButtonMaze = html.querySelector('#ButtonMaze');
  var ButtonMandelbrot = html.querySelector('#ButtonMandelbrot');
  var ButtonJuliaSet = html.querySelector('#ButtonJuliaSet');
  var ButtonSierpinskiCarpet = html.querySelector('#ButtonSierpinskiCarpet');
  var ButtonRecursiveBacktracker =
      html.querySelector('#ButtonRecursiveBacktracker');
  var ButtonRandomizedKruskal = html.querySelector('#ButtonRandomizedKruskal');
  var ButtonRandomizedPrim = html.querySelector('#ButtonRandomizedPrim');

  canvas = html.querySelector('#stage');
  ctx = canvas.getContext("2d");

  ButtonFractals.onClick.listen((event) {
    header.innerHtml = "Fractals";
    subheader.innerHtml = "Select Fractal!";

    fractalButtons.style.visibility = "visible";
    mazeButtons.style.visibility = "hidden";
    mazeVars.style.visibility = "hidden";
  });

  ButtonMaze.onClick.listen((event) {
    header.innerHtml = "Mazes";
    subheader.innerHtml = "Select Maze!";

    fractalButtons.style.visibility = "hidden";
    mazeButtons.style.visibility = "visible";
    mazeVars.style.visibility = "visible";
  });

  ButtonMandelbrot.onClick.listen((event) {
    // https://www.youtube.com/watch?v=6z7GQewK-Ks&t=1354s
    subheader.innerHtml = "Mandelbrot";
    Image image = new Image(WIDTH, HEIGHT);
    for (var x = 0; x < WIDTH; x++) {
      for (var y = 0; y < HEIGHT; y++) {
        var a = -2 + (4 / WIDTH) * x;
        var b = -2 + (4 / HEIGHT) * y;
        var n = 0;
        var ca = a;
        var cb = b;
        while (n < 100) {
          var aa = a * a - b * b;
          var bb = 2 * a * b;
          a = aa + ca;
          b = bb + cb;
          if ((a + b).abs() > 16) {
            break;
          }
          n++;
        }
        var brightness = (2.55 * n).floor();
        if (n == 100) {
          brightness = 0;
        }
        image.setPixelRGBA(x, y, brightness, brightness, brightness);
      }
    }
    var imageData = canvas.context2D.createImageData(WIDTH, HEIGHT);
    imageData.data.setRange(0, imageData.data.length, image.getBytes());
    canvas.context2D.putImageData(imageData, 0, 0);
  });

  ButtonJuliaSet.onClick.listen((event) {
    // https://lodev.org/cgtutor/juliamandelbrot.html
    subheader.innerHtml = "Julia Set";
    Image image = new Image(WIDTH, HEIGHT);
    //each iteration, it calculates: new = old*old + c, where c is a constant and old starts at current pixel
    double cRe,
        cIm; //real and imaginary part of the constant c, determinate shape of the Julia Set
    double newRe, newIm, oldRe, oldIm; //real and imaginary parts of new and old
    double zoom = 1,
        moveX = 0,
        moveY = 0; //you can change these to zoom and change position
    int maxIterations =
        300; //after how much iterations the function should stop

    //pick some values for the constant c, this determines the shape of the Julia Set
    cRe = -0.8;
    cIm = 0.156;

    //loop through every pixel
    for (int y = 0; y < HEIGHT; y++)
      for (int x = 0; x < WIDTH; x++) {
        //calculate the initial real and imaginary part of z, based on the pixel location and zoom and position values
        newRe = 1.5 * (x - WIDTH / 2) / (0.5 * zoom * WIDTH) + moveX;
        newIm = (y - HEIGHT / 2) / (0.5 * zoom * HEIGHT) + moveY;
        //i will represent the number of iterations
        int i;
        //start the iteration process
        for (i = 0; i < maxIterations; i++) {
          //remember value of previous iteration
          oldRe = newRe;
          oldIm = newIm;
          //the actual iteration, the real and imaginary part are calculated
          newRe = oldRe * oldRe - oldIm * oldIm + cRe;
          newIm = 2 * oldRe * oldIm + cIm;
          //if the point is outside the circle with radius 2: stop
          if ((newRe * newRe + newIm * newIm) > 4) break;
        }
        //use color model conversion to get rainbow palette, make brightness black if maxIterations reached
        var r, g, b, p = i / 32, l = (p * 6).floor(), o = p * 6 - l, q = 1 - o;

        var result = (l % 6);
        if (result == 0) {
          r = 1;
          g = o;
          b = 0;
        } else if (result == 1) {
          r = q;
          g = 1;
          b = 0;
        } else if (result == 2) {
          r = 0;
          g = 1;
          b = o;
        } else if (result == 3) {
          r = 0;
          g = q;
          b = 1;
        } else if (result == 4) {
          r = o;
          g = 0;
          b = 1;
        } else if (result == 5) {
          r = 1;
          g = 0;
          b = q;
        }

        int rr = (r * 255).floor();
        int gg = (g * 255).floor();
        int bb = (b * 255).floor();

        //draw the pixel
        image.setPixelRGBA(x, y, rr, gg, bb);
      }
    var imageData = canvas.context2D.createImageData(WIDTH, HEIGHT);
    imageData.data.setRange(0, imageData.data.length, image.getBytes());
    canvas.context2D.putImageData(imageData, 0, 0);
  });

  ButtonSierpinskiCarpet.onClick.listen((event) {
    subheader.innerHtml = "Sierpinski Carpet";
    // https://en.wikipedia.org/wiki/Sierpinski_carpet

    // total number of times the process will be repeated
    ctx.fillStyle = "#080848";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    int n = 3;
    int w = 22; //1-40
    n = pow(n, 3);

    for (int i = 0; i < n; i++)
      for (int j = 0; j < n; j++) {
        if (isCarpet(i, j)) {
          ctx.fillStyle = 'rgb(0,0,10)';
        } else {
          ctx.fillStyle = 'rgb(255,255,255)';
        }
        ctx.fillRect(i * w, j * w, w, w);
      }
  });

  ButtonRecursiveBacktracker.onClick.listen((event) {
    // https://en.wikipedia.org/wiki/Maze_generation_algorithm
    subheader.innerHtml = "Recursive Backtracker";
    CELL_SIZE = int.parse(cellSizeInput.value);
    cols = (WIDTH / CELL_SIZE).floor();
    rows = (HEIGHT / CELL_SIZE).floor();
    Queue stack = new Queue();

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    grid = new List();
    for (int y = 0; y < rows; y++) {
      for (int x = 0; x < cols; x++) {
        var cell = new Cell(x, y);
        grid.add(cell);
      }
    }

    for (int i = 0; i < grid.length; i++) {
      grid[i].draw();
    }

    var currentCell = grid[0];
    currentCell.visited = true;

    var unvisitedCells = true;
    while (unvisitedCells) {
      var nextCell = currentCell.checkNeighbors();

      if (nextCell != null) {
        nextCell.visited = true;
        stack.addLast(currentCell);
        removeWalls(currentCell, nextCell);
        currentCell = nextCell;
      } else if (stack.isNotEmpty) {
        currentCell = stack.removeLast();
      }

      unvisitedCells = false;
      for (int i = 0; i < grid.length; i++) {
        if (!grid[i].visited) {
          unvisitedCells = true;
          break;
        }
      }
    }
  });

  ButtonRandomizedKruskal.onClick.listen((event) {
    subheader.innerHtml = "Randomized Kruskal's algorithm";
    Image image = new Image(WIDTH, HEIGHT);

    // https://en.wikipedia.org/wiki/Maze_generation_algorithm
    for (double x = 0; x < WIDTH; x++) {
      for (double y = 0; y < HEIGHT; y++) {}
    }
    var imageData = canvas.context2D.createImageData(WIDTH, HEIGHT);
    imageData.data.setRange(0, imageData.data.length, image.getBytes());
    canvas.context2D.putImageData(imageData, 0, 0);
  });

  ButtonRandomizedPrim.onClick.listen((event) {
    subheader.innerHtml = "Randomized Prim's algorithm";
    Image image = new Image(WIDTH, HEIGHT);

    // https://en.wikipedia.org/wiki/Maze_generation_algorithm
    for (double x = 0; x < WIDTH; x++) {
      for (double y = 0; y < HEIGHT; y++) {}
    }
    var imageData = canvas.context2D.createImageData(WIDTH, HEIGHT);
    imageData.data.setRange(0, imageData.data.length, image.getBytes());
    canvas.context2D.putImageData(imageData, 0, 0);
  });
}

bool isCarpet(int x, int y) {
  while (true == true) {
    if (x == 0 || y == 0)
      return true;
    else if (x % 3 == 1 && y % 3 == 1) return false;
    x = x ~/ 3;
    y = y ~/ 3;
  }
  return true;
}

int isSierpinskiCarpetPixelFilled(double x, double y, double size) {
  while (x > 0 ||
      y > 0) // when either of these reaches zero the pixel is determined to be on the edge
  // at that square level and must be filled
  {
    if (x % size == 1 &&
        y % size ==
            1) //checks if the pixel is in the center for the current square level
      return 0;
    x /= size; //x and y are decremented to check the next larger square level
    y /= size;
  }
  return 1;
}

void removeWalls(var currentCell, var nextCell) {
  var x = currentCell.x - nextCell.x;
  if (x == 1) {
    currentCell.left = false;
    nextCell.right = false;
  } else if (x == -1) {
    currentCell.right = false;
    nextCell.left = false;
  }
  var y = currentCell.y - nextCell.y;
  if (y == 1) {
    currentCell.top = false;
    nextCell.bottom = false;
  } else if (y == -1) {
    currentCell.bottom = false;
    nextCell.top = false;
  }

  currentCell.draw();
  nextCell.draw();
}

List<int> hsvToRGB(num hue, num saturation, num brightness) {
  if (saturation == 0) {
    var gray = (brightness * 255.0).round();
    return [gray, gray, gray];
  }

  double h = (hue - hue.floor()) * 6.0;
  double f = h - h.floor();
  double p = brightness * (1.0 - saturation);
  double q = brightness * (1.0 - saturation * f);
  double t = brightness * (1.0 - (saturation * (1.0 - f)));

  switch (h.toInt()) {
    case 0:
      return [
        (brightness * 255.0).round(),
        (t * 255.0).round(),
        (p * 255.0).round()
      ];
    case 1:
      return [
        (q * 255.0).round(),
        (brightness * 255.0).round(),
        (p * 255.0).round()
      ];
    case 2:
      return [
        (p * 255.0).round(),
        (brightness * 255.0).round(),
        (t * 255.0).round()
      ];
    case 3:
      return [
        (p * 255.0).round(),
        (q * 255.0).round(),
        (brightness * 255.0).round()
      ];
    case 4:
      return [
        (t * 255.0).round(),
        (p * 255.0).round(),
        (brightness * 255.0).round()
      ];
    case 5:
      return [
        (brightness * 255.0).round(),
        (p * 255.0).round(),
        (q * 255.0).round()
      ];
    default:
      throw new ImageException('invalid hue');
  }
}
