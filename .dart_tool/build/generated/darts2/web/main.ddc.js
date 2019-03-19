define(['dart_sdk', 'packages/stagexl/stagexl'], function(dart_sdk, stagexl) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__display = stagexl.src__display;
  const src__engine = stagexl.src__engine;
  const _root = Object.create(null);
  const main = Object.create(_root);
  const $innerHtml = dartx.innerHtml;
  const $abs = dartx.abs;
  const $floor = dartx.floor;
  const $onKeyDown = dartx.onKeyDown;
  const $modulo = dartx['%'];
  const $round = dartx.round;
  let KeyboardEventToNull = () => (KeyboardEventToNull = dart.constFn(dart.fnType(core.Null, [html.KeyboardEvent])))();
  main.main = function() {
    return async.async(core.Null, function* main$() {
      let options = new src__display.StageOptions.new();
      options.backgroundColor = 16777215;
      options.renderEngine = src__engine.RenderEngine.WebGL;
      let canvas = html.querySelector("#stage");
      let width = 600;
      let height = 400;
      let angle = 0;
      let stage = new src__display.Stage.new(html.CanvasElement._check(canvas), {width: width, height: height, options: options});
      let header = html.querySelector("#header");
      let subheader = html.querySelector("#subheader");
      let renderLoop = new src__display.RenderLoop.new();
      renderLoop.addStage(stage);
      let currentFractal = 0;
      html.window[$onKeyDown].listen(dart.fn(event => {
        if (html.KeyboardEvent.is(event)) {
          if (event.keyCode === html.KeyCode.SPACE) {
            core.print("Current Fractal: " + dart.str(currentFractal));
            subheader[$innerHtml] = "";
            if (stage.children.length === 1) stage.removeChildAt(0);
            let bitmapData = src__display.BitmapData.new(width, height);
            switch (currentFractal) {
              case 0:
              {
                header[$innerHtml] = "Mandelbrot";
                for (let x = 0; x < width; x++) {
                  for (let y = 0; y < height; y++) {
                    let a = -2 + 4 / width * x;
                    let b = -2 + 4 / height * y;
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
                    bitmapData.setPixel32(x, y, (255 << 24 | brightness << 16 | brightness << 8 | brightness) >>> 0);
                  }
                }
                currentFractal++;
                break;
              }
              case 1:
              {
                header[$innerHtml] = "Julia Set";
                let cX = -0.70176;
                let cY = -0.3842;
                let zx = null, zy = null;
                let maxIter = 100;
                for (let x = 0; x < width; x++) {
                  for (let y = 0; y < height; y++) {
                    zx = 1.5 * (x - width / 2) / (0.5 * width);
                    zy = (y - height / 2) / (0.5 * height);
                    let i = maxIter;
                    while (dart.notNull(zx) * dart.notNull(zx) + dart.notNull(zy) * dart.notNull(zy) < 4 && i > 0) {
                      let tmp = dart.notNull(zx) * dart.notNull(zx) - dart.notNull(zy) * dart.notNull(zy) + cX;
                      zy = 2.0 * dart.notNull(zx) * dart.notNull(zy) + cY;
                      zx = tmp;
                      i = i - 1;
                    }
                    bitmapData.setPixel32(x, y, main.hsv2rgb(i / maxIter * 360, 1, i > 1 ? 1 : 0));
                  }
                }
                currentFractal++;
                break;
              }
              case 2:
              {
                header[$innerHtml] = "Sierpinski carpet";
                for (let x = 0; x < width; x++) {
                  for (let y = 0; y < height; y++) {
                    if (main.isSierpinskiCarpetPixelFilled(x, y, 3) === 1) {
                      bitmapData.setPixel32(x, y, 4294967295);
                    } else {
                      bitmapData.setPixel32(x, y, 4278190080);
                    }
                  }
                }
                currentFractal = 0;
                break;
              }
              default:
              {
                break;
              }
            }
            let bitmap = new src__display.Bitmap.new(bitmapData);
            stage.addChild(bitmap);
          } else if (event.keyCode === html.KeyCode.W) {
            core.print("Current Fractal: " + dart.str(currentFractal));
            subheader[$innerHtml] = "";
            if (stage.children.length === 1) stage.removeChildAt(0);
            let bitmapData = src__display.BitmapData.new(width, height);
            header[$innerHtml] = "Julia Set";
            angle = angle + 5;
            core.print("angle: " + dart.str(angle));
            let cX = math.cos(angle * 3.213);
            let cY = math.sin(angle);
            let zx = null, zy = null;
            let maxIter = 100;
            for (let x = 0; x < width; x++) {
              for (let y = 0; y < height; y++) {
                zx = 1.5 * (x - width / 2) / (0.5 * width);
                zy = (y - height / 2) / (0.5 * height);
                let i = maxIter;
                while (dart.notNull(zx) * dart.notNull(zx) + dart.notNull(zy) * dart.notNull(zy) < 4 && i > 0) {
                  let tmp = dart.notNull(zx) * dart.notNull(zx) - dart.notNull(zy) * dart.notNull(zy) + cX;
                  zy = 2.0 * dart.notNull(zx) * dart.notNull(zy) + cY;
                  zx = tmp;
                  i = i - 1;
                }
                bitmapData.setPixel32(x, y, main.hsv2rgb(i / maxIter * 360, 1, i > 1 ? 1 : 0));
              }
            }
            let bitmap = new src__display.Bitmap.new(bitmapData);
            stage.addChild(bitmap);
          }
        }
      }, KeyboardEventToNull()));
    });
  };
  main.isSierpinskiCarpetPixelFilled = function(x, y, size) {
    while (dart.notNull(x) > 0 || dart.notNull(y) > 0) {
      if (x[$modulo](size) === 1 && y[$modulo](size) === 1) return 0;
      x = dart.notNull(x) / dart.notNull(size);
      y = dart.notNull(y) / dart.notNull(size);
    }
    return 1;
  };
  main.hsv2rgb = function(h, s, v) {
    let c = dart.notNull(v) * dart.notNull(s);
    let x = c * (1 - ((dart.notNull(h) / 60)[$modulo](2) - 1)[$abs]());
    let m = dart.notNull(v) - c;
    let r = null, g = null, b = null;
    if (dart.notNull(h) < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (dart.notNull(h) < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (dart.notNull(h) < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (dart.notNull(h) < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (dart.notNull(h) < 300) {
      r = x;
      g = 0;
      b = c;
    } else {
      r = c;
      g = 0;
      b = x;
    }
    let ri = ((dart.notNull(r) + m) * 255)[$round]();
    let gi = ((dart.notNull(g) + m) * 255)[$round]();
    let bi = ((dart.notNull(b) + m) * 255)[$round]();
    return (255 << 24 | ri << 16 | gi << 8 | bi) >>> 0;
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
