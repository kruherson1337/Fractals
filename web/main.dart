import 'dart:async';
import 'dart:html' as html;
import 'dart:html';
import 'package:stagexl/stagexl.dart';
import 'dart:core';
import 'dart:math';
import 'package:color/color.dart';

Future<Null> main() async {
  StageOptions options = StageOptions()
    ..backgroundColor = 0xFFFFFF
    ..renderEngine = RenderEngine.WebGL;

  var canvas = html.querySelector('#stage');
  var width = 600;
  var height = 400;
  double angle = 0;
  var stage = Stage(canvas, width: width, height: height, options: options);

  var header = html.querySelector('#header');
  var subheader = html.querySelector('#subheader');

  var renderLoop = RenderLoop();
  renderLoop.addStage(stage);

  var currentFractal = 0;
  window.onKeyDown.listen((event) {
    if (event is html.KeyboardEvent) {
      if (event.keyCode == KeyCode.SPACE) {
        print('Current Fractal: $currentFractal');
        subheader.innerHtml = "";

        if (stage.children.length == 1) stage.removeChildAt(0);
        var bitmapData = new BitmapData(width, height);

        switch (currentFractal) {
          case 0:
            // https://www.youtube.com/watch?v=6z7GQewK-Ks&t=1354s
            header.innerHtml = "Mandelbrot";

            for (var x = 0; x < width; x++) {
              for (var y = 0; y < height; y++) {
                var a = -2 + (4 / width) * x;
                var b = -2 + (4 / height) * y;

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

                bitmapData.setPixel32(
                    x,
                    y,
                    (0xFF << 24) |
                        (brightness << 16) |
                        (brightness << 8) |
                        brightness);
              }
            }

            currentFractal++;
            break;

          case 1:
            // https://lodev.org/cgtutor/juliamandelbrot.html
            header.innerHtml = "Julia Set";
            double cX =-0.70176;
            double cY =-0.3842;
            double zx, zy;
            double maxIter = 100;
            for (int x = 0; x < width; x++) {
              for (int y = 0; y < height; y++) {
                zx = 1.5 * (x - width / 2) / (0.5 * width);
                zy = (y - height / 2) / (0.5 * height);
                double i = maxIter;
                while (zx * zx + zy * zy < 4 && i > 0) {
                  double tmp = zx * zx - zy * zy + cX;
                  zy = 2.0 * zx * zy + cY;
                  zx = tmp;
                  i -= 1;
                }
                bitmapData.setPixel32(
                    x, y, hsv2rgb(i / maxIter * 360, 1, i > 1 ? 1 : 0));
              }
            }

            currentFractal++;
            break;

          case 2:
            // https://en.wikipedia.org/wiki/Sierpinski_carpet
            header.innerHtml = "Sierpinski carpet";
            for (double x = 0; x < width; x++) {
              for (double y = 0; y < height; y++) {
                  if(isSierpinskiCarpetPixelFilled(x,y,15) == 1){
                    bitmapData.setPixel32(
                        x, y, 0xFFFFFFFF);
                  } else {
                    bitmapData.setPixel32(
                        x, y, 0xFF000000);
                  }
              }
            }


            currentFractal = 0;
            break;

          default:
            break;
        }

        var bitmap = new Bitmap(bitmapData);
        stage.addChild(bitmap);
      }else if (event.keyCode == KeyCode.W) {

        print('Current Fractal: $currentFractal');
        subheader.innerHtml = "";

        if (stage.children.length == 1) stage.removeChildAt(0);
        var bitmapData = new BitmapData(width, height);

        // https://lodev.org/cgtutor/juliamandelbrot.html
        header.innerHtml = "Julia Set";
        angle += 5;
        print('angle: $angle');
        double cX = cos(angle*3.213);
        double cY = sin(angle);
        double zx, zy;
        double maxIter = 100;
        for (int x = 0; x < width; x++) {
          for (int y = 0; y < height; y++) {
            zx = 1.5 * (x - width / 2) / (0.5 * width);
            zy = (y - height / 2) / (0.5 * height);
            double i = maxIter;
            while (zx * zx + zy * zy < 4 && i > 0) {
              double tmp = zx * zx - zy * zy + cX;
              zy = 2.0 * zx * zy + cY;
              zx = tmp;
              i -= 1;
            }
            bitmapData.setPixel32(
                x, y, hsv2rgb(i / maxIter * 360, 1, i > 1 ? 1 : 0));
          }
        }

        var bitmap = new Bitmap(bitmapData);
        stage.addChild(bitmap);

      }
    }
  });
}

int isSierpinskiCarpetPixelFilled(double x, double y, double size) {
  while (x > 0 || y > 0) // when either of these reaches zero the pixel is determined to be on the edge
    // at that square level and must be filled
      {
    if (x % size == 1 && y % size == 1) //checks if the pixel is in the center for the current square level
      return 0;
    x /= size; //x and y are decremented to check the next larger square level
    y /= size;
  }
  return 1;
}
int hsv2rgb(double h, double s, double v) {
  double c = v * s;
  double x = c * (1 - (((h / 60) % 2) - 1).abs());
  double m = v - c;

  double r, g, b;
  if (h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h < 300) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }

  int ri = ((r + m) * 255).round();
  int gi = ((g + m) * 255).round();
  int bi = ((b + m) * 255).round();

  return (0xFF << 24) | (ri << 16) | (gi << 8) | bi;
}
