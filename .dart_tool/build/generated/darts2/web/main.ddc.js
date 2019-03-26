define(['dart_sdk', 'packages/image/image'], function(dart_sdk, image) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const html = dart_sdk.html;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__image = image.src__image;
  const src__image_exception = image.src__image_exception;
  const _root = Object.create(null);
  const main = Object.create(_root);
  const $setFillColorRgb = dartx.setFillColorRgb;
  const $setStrokeColorRgb = dartx.setStrokeColorRgb;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $isNotEmpty = dartx.isNotEmpty;
  const $floor = dartx.floor;
  const $length = dartx.length;
  const $innerHtml = dartx.innerHtml;
  const $visibility = dartx.visibility;
  const $getContext = dartx.getContext;
  const $onClick = dartx.onClick;
  const $abs = dartx.abs;
  const $createImageData = dartx.createImageData;
  const $context2D = dartx.context2D;
  const $setRange = dartx.setRange;
  const $putImageData = dartx.putImageData;
  const $modulo = dartx['%'];
  const $truncate = dartx.truncate;
  const $round = dartx.round;
  const $toInt = dartx.toInt;
  let MouseEventToNull = () => (MouseEventToNull = dart.constFn(dart.fnType(core.Null, [html.MouseEvent])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  dart.defineLazy(main, {
    /*main.WIDTH*/get WIDTH() {
      return 600;
    },
    set WIDTH(_) {},
    /*main.HEIGHT*/get HEIGHT() {
      return 600;
    },
    set HEIGHT(_) {},
    /*main.CELL_SIZE*/get CELL_SIZE() {
      return 40;
    },
    set CELL_SIZE(_) {},
    /*main.random*/get random() {
      return math.Random.new();
    },
    set random(_) {},
    /*main.grid*/get grid() {
      return [];
    },
    set grid(_) {},
    /*main.cols*/get cols() {
      return null;
    },
    set cols(_) {},
    /*main.rows*/get rows() {
      return null;
    },
    set rows(_) {},
    /*main.canvas*/get canvas() {
      return null;
    },
    set canvas(_) {},
    /*main.ctx*/get ctx() {
      return null;
    },
    set ctx(_) {}
  });
  main.Cell = class Cell extends core.Object {
    get x() {
      return this[x$];
    }
    set x(value) {
      this[x$] = value;
    }
    get y() {
      return this[y$];
    }
    set y(value) {
      this[y$] = value;
    }
    get top() {
      return this[top];
    }
    set top(value) {
      this[top] = value;
    }
    get bottom() {
      return this[bottom];
    }
    set bottom(value) {
      this[bottom] = value;
    }
    get left() {
      return this[left];
    }
    set left(value) {
      this[left] = value;
    }
    get right() {
      return this[right];
    }
    set right(value) {
      this[right] = value;
    }
    get visited() {
      return this[visited];
    }
    set visited(value) {
      this[visited] = value;
    }
    draw() {
      let x = dart.notNull(this.x) * dart.notNull(main.CELL_SIZE);
      let y = dart.notNull(this.y) * dart.notNull(main.CELL_SIZE);
      if (dart.test(this.visited)) {
        main.ctx[$setFillColorRgb](255, 255, 255);
        main.ctx.fillRect(x, y, main.CELL_SIZE, main.CELL_SIZE);
      }
      if (dart.test(this.top)) {
        main.ctx[$setStrokeColorRgb](0, 0, 0);
        let _ = main.ctx;
        _.beginPath();
        _.moveTo(x, y);
        _.lineTo(x + dart.notNull(main.CELL_SIZE), y);
        _.stroke();
      }
      if (dart.test(this.right)) {
        main.ctx[$setStrokeColorRgb](0, 0, 0);
        let _$ = main.ctx;
        _$.beginPath();
        _$.moveTo(x + dart.notNull(main.CELL_SIZE), y);
        _$.lineTo(x + dart.notNull(main.CELL_SIZE), y + dart.notNull(main.CELL_SIZE));
        _$.stroke();
      }
      if (dart.test(this.bottom)) {
        main.ctx[$setStrokeColorRgb](0, 0, 0);
        let _$0 = main.ctx;
        _$0.beginPath();
        _$0.moveTo(x + dart.notNull(main.CELL_SIZE), y + dart.notNull(main.CELL_SIZE));
        _$0.lineTo(x, y + dart.notNull(main.CELL_SIZE));
        _$0.stroke();
      }
      if (dart.test(this.left)) {
        main.ctx[$setStrokeColorRgb](0, 0, 0);
        let _$1 = main.ctx;
        _$1.beginPath();
        _$1.moveTo(x, y + dart.notNull(main.CELL_SIZE));
        _$1.lineTo(x, y);
        _$1.stroke();
      }
    }
    checkNeighbors() {
      let neighbors = [];
      let topIndex = this.index(this.x, dart.notNull(this.y) - 1);
      if (!dart.equals(topIndex, -1)) {
        if (!dart.dtest(dart.dload(main.grid[$_get](core.int._check(topIndex)), 'visited'))) {
          neighbors[$add](main.grid[$_get](core.int._check(topIndex)));
        }
      }
      let rightIndex = this.index(dart.notNull(this.x) + 1, this.y);
      if (!dart.equals(rightIndex, -1)) {
        if (!dart.dtest(dart.dload(main.grid[$_get](core.int._check(rightIndex)), 'visited'))) {
          neighbors[$add](main.grid[$_get](core.int._check(rightIndex)));
        }
      }
      let bottomIndex = this.index(this.x, dart.notNull(this.y) + 1);
      if (!dart.equals(bottomIndex, -1)) {
        if (!dart.dtest(dart.dload(main.grid[$_get](core.int._check(bottomIndex)), 'visited'))) {
          neighbors[$add](main.grid[$_get](core.int._check(bottomIndex)));
        }
      }
      let leftIndex = this.index(dart.notNull(this.x) - 1, this.y);
      if (!dart.equals(leftIndex, -1)) {
        if (!dart.dtest(dart.dload(main.grid[$_get](core.int._check(leftIndex)), 'visited'))) {
          neighbors[$add](main.grid[$_get](core.int._check(leftIndex)));
        }
      }
      if (dart.test(neighbors[$isNotEmpty])) {
        let randomIndex = main.random.nextInt(neighbors[$length])[$floor]();
        return neighbors[$_get](randomIndex);
      } else {
        return null;
      }
    }
    index(i, j) {
      if (dart.dtest(dart.dsend(i, '<', [0])) || dart.dtest(dart.dsend(j, '<', [0])) || dart.dtest(dart.dsend(i, '>', [dart.dsend(main.cols, '-', [1])])) || dart.dtest(dart.dsend(j, '>', [dart.dsend(main.rows, '-', [1])]))) return -1;
      return dart.dsend(i, '+', [dart.dsend(j, '*', [main.cols])]);
    }
  };
  (main.Cell.new = function(x, y) {
    this[x$] = null;
    this[y$] = null;
    this[top] = null;
    this[bottom] = null;
    this[left] = null;
    this[right] = null;
    this[visited] = null;
    this.x = x;
    this.y = y;
    this.top = true;
    this.bottom = true;
    this.left = true;
    this.right = true;
    this.visited = false;
  }).prototype = main.Cell.prototype;
  dart.addTypeTests(main.Cell);
  const x$ = Symbol("Cell.x");
  const y$ = Symbol("Cell.y");
  const top = Symbol("Cell.top");
  const bottom = Symbol("Cell.bottom");
  const left = Symbol("Cell.left");
  const right = Symbol("Cell.right");
  const visited = Symbol("Cell.visited");
  dart.setMethodSignature(main.Cell, () => ({
    __proto__: dart.getMethods(main.Cell.__proto__),
    draw: dart.fnType(dart.dynamic, []),
    checkNeighbors: dart.fnType(dart.dynamic, []),
    index: dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic])
  }));
  dart.setFieldSignature(main.Cell, () => ({
    __proto__: dart.getFields(main.Cell.__proto__),
    x: dart.fieldType(core.int),
    y: dart.fieldType(core.int),
    top: dart.fieldType(core.bool),
    bottom: dart.fieldType(core.bool),
    left: dart.fieldType(core.bool),
    right: dart.fieldType(core.bool),
    visited: dart.fieldType(core.bool)
  }));
  main.main = function() {
    return async.async(core.Null, function* main$() {
      let header = html.querySelector("#header");
      header[$innerHtml] = "Fractals";
      let subheader = html.querySelector("#subheader");
      subheader[$innerHtml] = "Select Fractal!";
      let cellSizeInput = html.InputElement._check(html.querySelector("#cellsize"));
      let mazeVars = html.querySelector("#mazeVars");
      let fractalButtons = html.querySelector("#fractalButtons");
      let mazeButtons = html.querySelector("#mazeButtons");
      mazeButtons.style[$visibility] = "hidden";
      mazeVars.style[$visibility] = "hidden";
      let ButtonFractals = html.querySelector("#ButtonFractals");
      let ButtonMaze = html.querySelector("#ButtonMaze");
      let ButtonMandelbrot = html.querySelector("#ButtonMandelbrot");
      let ButtonJuliaSet = html.querySelector("#ButtonJuliaSet");
      let ButtonSierpinskiCarpet = html.querySelector("#ButtonSierpinskiCarpet");
      let ButtonRecursiveBacktracker = html.querySelector("#ButtonRecursiveBacktracker");
      let ButtonRandomizedKruskal = html.querySelector("#ButtonRandomizedKruskal");
      let ButtonRandomizedPrim = html.querySelector("#ButtonRandomizedPrim");
      main.canvas = html.CanvasElement._check(html.querySelector("#stage"));
      main.ctx = html.CanvasRenderingContext2D._check(main.canvas[$getContext]("2d"));
      ButtonFractals[$onClick].listen(dart.fn(event => {
        header[$innerHtml] = "Fractals";
        subheader[$innerHtml] = "Select Fractal!";
        fractalButtons.style[$visibility] = "visible";
        mazeButtons.style[$visibility] = "hidden";
        mazeVars.style[$visibility] = "hidden";
      }, MouseEventToNull()));
      ButtonMaze[$onClick].listen(dart.fn(event => {
        header[$innerHtml] = "Mazes";
        subheader[$innerHtml] = "Select Maze!";
        fractalButtons.style[$visibility] = "hidden";
        mazeButtons.style[$visibility] = "visible";
        mazeVars.style[$visibility] = "visible";
      }, MouseEventToNull()));
      ButtonMandelbrot[$onClick].listen(dart.fn(event => {
        subheader[$innerHtml] = "Mandelbrot";
        let image = new src__image.Image.new(main.WIDTH, main.HEIGHT);
        for (let x = 0; x < dart.notNull(main.WIDTH); x++) {
          for (let y = 0; y < dart.notNull(main.HEIGHT); y++) {
            let a = -2 + 4 / dart.notNull(main.WIDTH) * x;
            let b = -2 + 4 / dart.notNull(main.HEIGHT) * y;
            let n = 0;
            let ca = a;
            let cb = b;
            while (n < 100) {
              let aa = a * a - b * b;
              let bb = 2 * a * b;
              a = aa + ca;
              b = bb + cb;
              if ((a + b)[$abs]() > 16) {
                break;
              }
              n++;
            }
            let brightness = (2.55 * n)[$floor]();
            if (n === 100) {
              brightness = 0;
            }
            image.setPixelRGBA(x, y, brightness, brightness, brightness);
          }
        }
        let imageData = main.canvas[$context2D][$createImageData](main.WIDTH, main.HEIGHT);
        imageData.data[$setRange](0, imageData.data[$length], image.getBytes());
        main.canvas[$context2D][$putImageData](imageData, 0, 0);
      }, MouseEventToNull()));
      ButtonJuliaSet[$onClick].listen(dart.fn(event => {
        subheader[$innerHtml] = "Julia Set";
        let image = new src__image.Image.new(main.WIDTH, main.HEIGHT);
        let cRe = null, cIm = null;
        let newRe = null, newIm = null, oldRe = null, oldIm = null;
        let zoom = 1, moveX = 0, moveY = 0;
        let maxIterations = 300;
        cRe = -0.8;
        cIm = 0.156;
        for (let y = 0; y < dart.notNull(main.HEIGHT); y++)
          for (let x = 0; x < dart.notNull(main.WIDTH); x++) {
            newRe = 1.5 * (x - dart.notNull(main.WIDTH) / 2) / (0.5 * zoom * dart.notNull(main.WIDTH)) + moveX;
            newIm = (y - dart.notNull(main.HEIGHT) / 2) / (0.5 * zoom * dart.notNull(main.HEIGHT)) + moveY;
            let i = null;
            for (i = 0; dart.notNull(i) < maxIterations; i = dart.notNull(i) + 1) {
              oldRe = newRe;
              oldIm = newIm;
              newRe = dart.notNull(oldRe) * dart.notNull(oldRe) - dart.notNull(oldIm) * dart.notNull(oldIm) + dart.notNull(cRe);
              newIm = 2 * dart.notNull(oldRe) * dart.notNull(oldIm) + dart.notNull(cIm);
              if (dart.notNull(newRe) * dart.notNull(newRe) + dart.notNull(newIm) * dart.notNull(newIm) > 4) break;
            }
            let r = null, g = null, b = null, p = dart.notNull(i) / 32, l = (p * 6)[$floor](), o = p * 6 - l, q = 1 - o;
            let result = l[$modulo](6);
            if (result === 0) {
              r = 1;
              g = o;
              b = 0;
            } else if (result === 1) {
              r = q;
              g = 1;
              b = 0;
            } else if (result === 2) {
              r = 0;
              g = 1;
              b = o;
            } else if (result === 3) {
              r = 0;
              g = q;
              b = 1;
            } else if (result === 4) {
              r = o;
              g = 0;
              b = 1;
            } else if (result === 5) {
              r = 1;
              g = 0;
              b = q;
            }
            let rr = core.int._check(dart.dsend(dart.dsend(r, '*', [255]), 'floor', []));
            let gg = core.int._check(dart.dsend(dart.dsend(g, '*', [255]), 'floor', []));
            let bb = core.int._check(dart.dsend(dart.dsend(b, '*', [255]), 'floor', []));
            image.setPixelRGBA(x, y, rr, gg, bb);
          }
        let imageData = main.canvas[$context2D][$createImageData](main.WIDTH, main.HEIGHT);
        imageData.data[$setRange](0, imageData.data[$length], image.getBytes());
        main.canvas[$context2D][$putImageData](imageData, 0, 0);
      }, MouseEventToNull()));
      ButtonSierpinskiCarpet[$onClick].listen(dart.fn(event => {
        subheader[$innerHtml] = "Sierpinski Carpet";
        main.ctx.fillStyle = "#080848";
        main.ctx.fillRect(0, 0, main.WIDTH, main.HEIGHT);
        let n = 3;
        let w = 22;
        n = dart.asInt(math.pow(n, 3));
        for (let i = 0; i < dart.notNull(n); i++)
          for (let j = 0; j < dart.notNull(n); j++) {
            if (dart.test(main.isCarpet(i, j))) {
              main.ctx.fillStyle = "rgb(0,0,10)";
            } else {
              main.ctx.fillStyle = "rgb(255,255,255)";
            }
            main.ctx.fillRect(i * w, j * w, w, w);
          }
      }, MouseEventToNull()));
      ButtonRecursiveBacktracker[$onClick].listen(dart.fn(event => {
        subheader[$innerHtml] = "Recursive Backtracker";
        main.CELL_SIZE = core.int.parse(cellSizeInput.value);
        main.cols = (dart.notNull(main.WIDTH) / dart.notNull(main.CELL_SIZE))[$floor]();
        main.rows = (dart.notNull(main.HEIGHT) / dart.notNull(main.CELL_SIZE))[$floor]();
        let stack = collection.Queue.new();
        main.ctx.fillStyle = "black";
        main.ctx.fillRect(0, 0, main.WIDTH, main.HEIGHT);
        main.grid = [];
        for (let y = 0; y < dart.notNull(core.num._check(main.rows)); y++) {
          for (let x = 0; x < dart.notNull(core.num._check(main.cols)); x++) {
            let cell = new main.Cell.new(x, y);
            main.grid[$add](cell);
          }
        }
        for (let i = 0; i < dart.notNull(main.grid[$length]); i++) {
          dart.dsend(main.grid[$_get](i), 'draw', []);
        }
        let currentCell = main.grid[$_get](0);
        dart.dput(currentCell, 'visited', true);
        let unvisitedCells = true;
        while (unvisitedCells) {
          let nextCell = dart.dsend(currentCell, 'checkNeighbors', []);
          if (nextCell != null) {
            dart.dput(nextCell, 'visited', true);
            stack.addLast(currentCell);
            main.removeWalls(currentCell, nextCell);
            currentCell = nextCell;
          } else if (dart.test(stack.isNotEmpty)) {
            currentCell = stack.removeLast();
          }
          unvisitedCells = false;
          for (let i = 0; i < dart.notNull(main.grid[$length]); i++) {
            if (!dart.dtest(dart.dload(main.grid[$_get](i), 'visited'))) {
              unvisitedCells = true;
              break;
            }
          }
        }
      }, MouseEventToNull()));
      ButtonRandomizedKruskal[$onClick].listen(dart.fn(event => {
        subheader[$innerHtml] = "Randomized Kruskal's algorithm";
        let image = new src__image.Image.new(main.WIDTH, main.HEIGHT);
        for (let x = 0; x < dart.notNull(main.WIDTH); x++) {
          for (let y = 0; y < dart.notNull(main.HEIGHT); y++) {
          }
        }
        let imageData = main.canvas[$context2D][$createImageData](main.WIDTH, main.HEIGHT);
        imageData.data[$setRange](0, imageData.data[$length], image.getBytes());
        main.canvas[$context2D][$putImageData](imageData, 0, 0);
      }, MouseEventToNull()));
      ButtonRandomizedPrim[$onClick].listen(dart.fn(event => {
        subheader[$innerHtml] = "Randomized Prim's algorithm";
        let image = new src__image.Image.new(main.WIDTH, main.HEIGHT);
        for (let x = 0; x < dart.notNull(main.WIDTH); x++) {
          for (let y = 0; y < dart.notNull(main.HEIGHT); y++) {
          }
        }
        let imageData = main.canvas[$context2D][$createImageData](main.WIDTH, main.HEIGHT);
        imageData.data[$setRange](0, imageData.data[$length], image.getBytes());
        main.canvas[$context2D][$putImageData](imageData, 0, 0);
      }, MouseEventToNull()));
    });
  };
  main.isCarpet = function(x, y) {
    while (true === true) {
      if (x === 0 || y === 0)
        return true;
      else if (x[$modulo](3) === 1 && y[$modulo](3) === 1) return false;
      x = (dart.notNull(x) / 3)[$truncate]();
      y = (dart.notNull(y) / 3)[$truncate]();
    }
    return true;
  };
  main.isSierpinskiCarpetPixelFilled = function(x, y, size) {
    while (dart.notNull(x) > 0 || dart.notNull(y) > 0) {
      if (x[$modulo](size) === 1 && y[$modulo](size) === 1) return 0;
      x = dart.notNull(x) / dart.notNull(size);
      y = dart.notNull(y) / dart.notNull(size);
    }
    return 1;
  };
  main.removeWalls = function(currentCell, nextCell) {
    let x = dart.dsend(dart.dload(currentCell, 'x'), '-', [dart.dload(nextCell, 'x')]);
    if (dart.equals(x, 1)) {
      dart.dput(currentCell, 'left', false);
      dart.dput(nextCell, 'right', false);
    } else if (dart.equals(x, -1)) {
      dart.dput(currentCell, 'right', false);
      dart.dput(nextCell, 'left', false);
    }
    let y = dart.dsend(dart.dload(currentCell, 'y'), '-', [dart.dload(nextCell, 'y')]);
    if (dart.equals(y, 1)) {
      dart.dput(currentCell, 'top', false);
      dart.dput(nextCell, 'bottom', false);
    } else if (dart.equals(y, -1)) {
      dart.dput(currentCell, 'bottom', false);
      dart.dput(nextCell, 'top', false);
    }
    dart.dsend(currentCell, 'draw', []);
    dart.dsend(nextCell, 'draw', []);
  };
  main.hsvToRGB = function(hue, saturation, brightness) {
    if (saturation === 0) {
      let gray = (dart.notNull(brightness) * 255.0)[$round]();
      return JSArrayOfint().of([gray, gray, gray]);
    }
    let h = (dart.notNull(hue) - hue[$floor]()) * 6.0;
    let f = dart.notNull(h) - h[$floor]();
    let p = dart.notNull(brightness) * (1.0 - dart.notNull(saturation));
    let q = dart.notNull(brightness) * (1.0 - dart.notNull(saturation) * f);
    let t = dart.notNull(brightness) * (1.0 - dart.notNull(saturation) * (1.0 - f));
    switch (h[$toInt]()) {
      case 0:
      {
        return JSArrayOfint().of([(dart.notNull(brightness) * 255.0)[$round](), (dart.notNull(t) * 255.0)[$round](), (dart.notNull(p) * 255.0)[$round]()]);
      }
      case 1:
      {
        return JSArrayOfint().of([(dart.notNull(q) * 255.0)[$round](), (dart.notNull(brightness) * 255.0)[$round](), (dart.notNull(p) * 255.0)[$round]()]);
      }
      case 2:
      {
        return JSArrayOfint().of([(dart.notNull(p) * 255.0)[$round](), (dart.notNull(brightness) * 255.0)[$round](), (dart.notNull(t) * 255.0)[$round]()]);
      }
      case 3:
      {
        return JSArrayOfint().of([(dart.notNull(p) * 255.0)[$round](), (dart.notNull(q) * 255.0)[$round](), (dart.notNull(brightness) * 255.0)[$round]()]);
      }
      case 4:
      {
        return JSArrayOfint().of([(dart.notNull(t) * 255.0)[$round](), (dart.notNull(p) * 255.0)[$round](), (dart.notNull(brightness) * 255.0)[$round]()]);
      }
      case 5:
      {
        return JSArrayOfint().of([(dart.notNull(brightness) * 255.0)[$round](), (dart.notNull(p) * 255.0)[$round](), (dart.notNull(q) * 255.0)[$round]()]);
      }
      default:
      {
        dart.throw(new src__image_exception.ImageException.new("invalid hue"));
      }
    }
  };
  dart.trackLibraries("web/main.ddc", {
    "main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":"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","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
