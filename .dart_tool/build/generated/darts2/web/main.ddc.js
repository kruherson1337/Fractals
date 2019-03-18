define(['dart_sdk', 'packages/stagexl/stagexl'], function(dart_sdk, stagexl) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__display = stagexl.src__display;
  const src__ui__color = stagexl.src__ui__color;
  const src__engine = stagexl.src__engine;
  const src__resources = stagexl.src__resources;
  const src__animation = stagexl.src__animation;
  const src__events = stagexl.src__events;
  const src__ui__mouse = stagexl.src__ui__mouse;
  const _root = Object.create(null);
  const main = Object.create(_root);
  let numTonum = () => (numTonum = dart.constFn(dart.fnType(core.num, [core.num])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let MouseEventToNull = () => (MouseEventToNull = dart.constFn(dart.fnType(core.Null, [src__events.MouseEvent])))();
  main.main = function() {
    return async.async(core.Null, function* main() {
      let options = new src__display.StageOptions.new();
      options.backgroundColor = src__ui__color.Color.White;
      options.renderEngine = src__engine.RenderEngine.WebGL;
      let canvas = html.querySelector("#stage");
      let stage = new src__display.Stage.new(html.CanvasElement._check(canvas), {width: 1280, height: 800, options: options});
      let renderLoop = new src__display.RenderLoop.new();
      renderLoop.addStage(stage);
      let resourceManager = new src__resources.ResourceManager.new();
      resourceManager.addBitmapData("dart", "images/dart@1x.png");
      yield resourceManager.load();
      let logoData = resourceManager.getBitmapData("dart");
      let logo = new src__display.Sprite.new();
      logo.addChild(new src__display.Bitmap.new(logoData));
      logo.pivotX = dart.notNull(logoData.width) / 2;
      logo.pivotY = dart.notNull(logoData.height) / 2;
      logo.x = 1280 / 2;
      logo.y = 0;
      stage.addChild(logo);
      let tween = stage.juggler.addTween(logo, 3, dart.fn(src__animation.Transition.easeOutBounce, numTonum()));
      tween.animate.y.to(800 / 2);
      let rotation = null;
      logo.onMouseClick.listen(dart.fn(e => {
        if (rotation != null) return;
        rotation = stage.juggler.addTween(logo, 0.5, dart.fn(src__animation.Transition.easeInOutCubic, numTonum()));
        rotation.animate.rotation.by(2 * 3.141592653589793);
        rotation.onComplete = dart.fn(() => rotation = null, VoidToNull());
      }, MouseEventToNull()));
      logo.mouseCursor = src__ui__mouse.MouseCursor.POINTER;
    });
  };
  dart.trackLibraries("web/main.ddc", {
    "main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;AAKoB;AAClB,UAAa,cAAU,6BAAY;MAAtB,0BACS,oBAAK,MAAM;MADpB,uBAEM,wBAAY,MAAM;AAErC,UAAI,SAAS,AAAK,kBAAa,CAAC;AAChC,UAAI,YAAQ,sBAAK,2BAAC,MAAM,WAAS,cAAc,cAAc,OAAO;AAEpE,UAAI,iBAAa,2BAAU;AAC3B,gBAAU,SAAS,CAAC,KAAK;AAEzB,UAAI,sBAAkB,kCAAe;AACrC,qBAAe,cAAc,CAAC,QAAQ;AAEtC,YAAM,eAAe,KAAK;AAE1B,UAAI,WAAW,eAAe,cAAc,CAAC;AAC7C,UAAI,WAAO,uBAAM;AACjB,UAAI,SAAS,KAAC,uBAAM,CAAC,QAAQ;AAE7B,UAAI,OAAO,GAAkB,aAAf,QAAQ,MAAM,IAAG;AAC/B,UAAI,OAAO,GAAmB,aAAhB,QAAQ,OAAO,IAAG;AAGhC,UAAI,EAAE,GAAG,AAAK,OAAE;AAChB,UAAI,EAAE,GAAG;AAET,WAAK,SAAS,CAAC,IAAI;AAGnB,UAAI,QAAQ,KAAK,QAAQ,SAAS,CAAC,IAAI,EAAE,WAAG,yBAAU,cAAc;AACpE,WAAK,QAAQ,EAAE,GAAG,CAAC,AAAI,MAAE;AAGzB,UAAM;AACN,UAAI,aAAa,OAAO,CAAC,QAAC,CAAY;AAEpC,YAAI,QAAQ,IAAI,MAAM;AACtB,gBAAQ,GAAG,KAAK,QAAQ,SAAS,CAAC,IAAI,EAAE,aAAK,yBAAU,eAAe;AACtE,gBAAQ,QAAQ,SAAS,GAAG,CAAC,AAAE,IAAE,iBAAE;AACnC,gBAAQ,WAAW,GAAG,cAAM,QAAQ,GAAG;;AAEzC,UAAI,YAAY,GAAG,0BAAW,QAAQ;IACxC","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
