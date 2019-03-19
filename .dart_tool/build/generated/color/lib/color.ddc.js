define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const color$ = Object.create(_root);
  const $toInt = dartx.toInt;
  const $_get = dartx._get;
  const $_equals = dartx._equals;
  const $containsKey = dartx.containsKey;
  const $reduce = dartx.reduce;
  const $modulo = dartx['%'];
  const $isNaN = dartx.isNaN;
  const $isInfinite = dartx.isInfinite;
  const $abs = dartx.abs;
  const $_set = dartx._set;
  const $forEach = dartx.forEach;
  const $toString = dartx.toString;
  const $startsWith = dartx.startsWith;
  const $substring = dartx.substring;
  const $split = dartx.split;
  const $join = dartx.join;
  const $sublist = dartx.sublist;
  const $padLeft = dartx.padLeft;
  const $toRadixString = dartx.toRadixString;
  const $toList = dartx.toList;
  const $map = dartx.map;
  const $round = dartx.round;
  const $length = dartx.length;
  const $trim = dartx.trim;
  const $expand = dartx.expand;
  const $codeUnits = dartx.codeUnits;
  const $replaceFirst = dartx.replaceFirst;
  const $first = dartx.first;
  const $toLowerCase = dartx.toLowerCase;
  let TAndTToT = () => (TAndTToT = dart.constFn(dart.gFnType(T => [T, [T, T]], T => [core.num])))();
  let JSArrayOfnum = () => (JSArrayOfnum = dart.constFn(_interceptors.JSArray$(core.num)))();
  let IdentityMapOfString$num = () => (IdentityMapOfString$num = dart.constFn(_js_helper.IdentityMap$(core.String, core.num)))();
  let StringAndnumToNull = () => (StringAndnumToNull = dart.constFn(dart.fnType(core.Null, [core.String, core.num])))();
  let numTonum = () => (numTonum = dart.constFn(dart.fnType(core.num, [core.num])))();
  let IterableOfnum = () => (IterableOfnum = dart.constFn(core.Iterable$(core.num)))();
  let numToint = () => (numToint = dart.constFn(dart.fnType(core.int, [core.num])))();
  let IterableOfint = () => (IterableOfint = dart.constFn(core.Iterable$(core.int)))();
  let Color__ToColor = () => (Color__ToColor = dart.constFn(dart.fnType(color$.Color, [color$.Color], [core.List])))();
  let Color__ToCielabColor = () => (Color__ToCielabColor = dart.constFn(dart.fnType(color$.CielabColor, [color$.Color], [core.List])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let ListOfintToListOfint = () => (ListOfintToListOfint = dart.constFn(dart.fnType(ListOfint(), [ListOfint()])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let intToListOfint = () => (intToListOfint = dart.constFn(dart.fnType(ListOfint(), [core.int])))();
  let IterableOfListOfint = () => (IterableOfListOfint = dart.constFn(core.Iterable$(ListOfint())))();
  const _convert = Symbol('_convert');
  color$.Color = class Color extends core.Object {
    static rgb(r, g, b) {
      return new color$.RgbColor.new(r, g, b);
    }
    static hex(hexCode) {
      return color$.HexColor.new(hexCode);
    }
    static hsl(h, s, l) {
      return new color$.HslColor.new(h, s, l);
    }
    static xyz(x, y, z) {
      return new color$.XyzColor.new(x, y, z);
    }
    static cielab(l, a, b) {
      return new color$.CielabColor.new(l, a, b);
    }
    toHexColor() {
      return this.toRgbColor().toHexColor();
    }
    get hashCode() {
      let rgb = this.toRgbColor();
      return 256 * 256 * rgb.r[$toInt]() + 256 * rgb.g[$toInt]() + rgb.b[$toInt]();
    }
    _equals(other) {
      if (other == null) return false;
      return color$.Color.is(other) && this.hashCode == dart.hashCode(other);
    }
    _get(key) {
      return this.toMap()[$_get](key);
    }
    [_convert](colorType) {
      if (color$.RgbColor.is(colorType)) {
        return this.toRgbColor();
      } else if (color$.HexColor.is(colorType)) {
        return this.toHexColor();
      } else if (color$.HslColor.is(colorType)) {
        return this.toHslColor();
      } else if (color$.XyzColor.is(colorType)) {
        return this.toXyzColor();
      } else if (color$.CielabColor.is(colorType)) {
        return this.toCielabColor();
      } else {
        return this;
      }
    }
  };
  (color$.Color.new = function() {
  }).prototype = color$.Color.prototype;
  dart.addTypeTests(color$.Color);
  dart.setMethodSignature(color$.Color, () => ({
    __proto__: dart.getMethods(color$.Color.__proto__),
    toHexColor: dart.fnType(color$.HexColor, []),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object]),
    _get: dart.fnType(dart.dynamic, [core.String]),
    [_convert]: dart.fnType(color$.Color, [core.Type])
  }));
  dart.defineExtensionMethods(color$.Color, ['_equals']);
  dart.defineExtensionAccessors(color$.Color, ['hashCode']);
  color$.RgbColor = class RgbColor extends color$.Color {
    get r() {
      return this[r$];
    }
    set r(value) {
      super.r = value;
    }
    get g() {
      return this[g$];
    }
    set g(value) {
      super.g = value;
    }
    get b() {
      return this[b$];
    }
    set b(value) {
      super.b = value;
    }
    static name_(name) {
      if (dart.test(color$.RgbColor.namedColors[$containsKey](name))) {
        return color$.RgbColor.namedColors[$_get](name);
      } else {
        dart.throw(new core.ArgumentError.new("Only the color names defined by the CSS3 spec are supported. See http://www.w3.org/TR/css3-color/#svg-color for a list of valid color names."));
      }
    }
    toRgbColor() {
      return this;
    }
    toHslColor() {
      let rf = dart.notNull(this.r) / 255;
      let gf = dart.notNull(this.g) / 255;
      let bf = dart.notNull(this.b) / 255;
      let cMax = JSArrayOfnum().of([rf, gf, bf])[$reduce](dart.gbind(dart.fn(math.max, TAndTToT()), core.num));
      let cMin = JSArrayOfnum().of([rf, gf, bf])[$reduce](dart.gbind(dart.fn(math.min, TAndTToT()), core.num));
      let delta = dart.notNull(cMax) - dart.notNull(cMin);
      let hue = null;
      let saturation = null;
      let luminance = null;
      if (cMax === rf) {
        hue = 60 * ((gf - bf) / delta)[$modulo](6);
      } else if (cMax === gf) {
        hue = 60 * ((bf - rf) / delta + 2);
      } else {
        hue = 60 * ((rf - gf) / delta + 4);
      }
      if (hue[$isNaN] || hue[$isInfinite]) {
        hue = 0;
      }
      luminance = (dart.notNull(cMax) + dart.notNull(cMin)) / 2;
      if (delta === 0) {
        saturation = 0;
      } else {
        saturation = delta / (1 - (dart.notNull(luminance) * 2 - 1)[$abs]());
      }
      return new color$.HslColor.new(hue, dart.notNull(saturation) * 100, dart.notNull(luminance) * 100);
    }
    toXyzColor() {
      let rgb = new (IdentityMapOfString$num()).from(["r", dart.notNull(this.r) / 255, "g", dart.notNull(this.g) / 255, "b", dart.notNull(this.b) / 255]);
      rgb[$forEach](dart.fn((key, value) => {
        if (dart.notNull(value) > 0.04045) {
          rgb[$_set](key, math.pow((dart.notNull(value) + 0.055) / 1.055, 2.4));
        } else {
          rgb[$_set](key, dart.notNull(value) / 12.92);
        }
        rgb[$_set](key, dart.notNull(rgb[$_get](key)) * 100);
      }, StringAndnumToNull()));
      let x = dart.notNull(rgb[$_get]("r")) * 0.4124 + dart.notNull(rgb[$_get]("g")) * 0.3576 + dart.notNull(rgb[$_get]("b")) * 0.1805;
      let y = dart.notNull(rgb[$_get]("r")) * 0.2126 + dart.notNull(rgb[$_get]("g")) * 0.7152 + dart.notNull(rgb[$_get]("b")) * 0.0722;
      let z = dart.notNull(rgb[$_get]("r")) * 0.0193 + dart.notNull(rgb[$_get]("g")) * 0.1192 + dart.notNull(rgb[$_get]("b")) * 0.9505;
      return new color$.XyzColor.new(x, y, z);
    }
    toCielabColor() {
      return this.toXyzColor().toCielabColor();
    }
    toHexColor() {
      return new color$.HexColor.fromRgb(this.r, this.g, this.b);
    }
    toString() {
      return "r: " + dart.str(this.r) + ", g: " + dart.str(this.g) + ", b: " + dart.str(this.b);
    }
    toCssString() {
      return "rgb(" + dart.str(this.r[$toInt]()) + ", " + dart.str(this.g[$toInt]()) + ", " + dart.str(this.b[$toInt]()) + ")";
    }
    toMap() {
      return new (IdentityMapOfString$num()).from(["r", this.r, "g", this.g, "b", this.b]);
    }
  };
  (color$.RgbColor.new = function(r, g, b) {
    this[r$] = r;
    this[g$] = g;
    this[b$] = b;
    color$.RgbColor.__proto__.new.call(this);
  }).prototype = color$.RgbColor.prototype;
  dart.addTypeTests(color$.RgbColor);
  const r$ = Symbol("RgbColor.r");
  const g$ = Symbol("RgbColor.g");
  const b$ = Symbol("RgbColor.b");
  color$.RgbColor[dart.implements] = () => [color$.CssColorSpace];
  dart.setMethodSignature(color$.RgbColor, () => ({
    __proto__: dart.getMethods(color$.RgbColor.__proto__),
    toRgbColor: dart.fnType(color$.RgbColor, []),
    toHslColor: dart.fnType(color$.HslColor, []),
    toXyzColor: dart.fnType(color$.XyzColor, []),
    toCielabColor: dart.fnType(color$.CielabColor, []),
    toString: dart.fnType(core.String, []),
    [$toString]: dart.fnType(core.String, []),
    toCssString: dart.fnType(core.String, []),
    toMap: dart.fnType(core.Map$(core.String, core.num), [])
  }));
  dart.setFieldSignature(color$.RgbColor, () => ({
    __proto__: dart.getFields(color$.RgbColor.__proto__),
    r: dart.finalFieldType(core.num),
    g: dart.finalFieldType(core.num),
    b: dart.finalFieldType(core.num)
  }));
  dart.defineExtensionMethods(color$.RgbColor, ['toString']);
  dart.defineLazy(color$.RgbColor, {
    /*color$.RgbColor.rMin*/get rMin() {
      return 0;
    },
    /*color$.RgbColor.gMin*/get gMin() {
      return 0;
    },
    /*color$.RgbColor.bMin*/get bMin() {
      return 0;
    },
    /*color$.RgbColor.rMax*/get rMax() {
      return 255;
    },
    /*color$.RgbColor.gMax*/get gMax() {
      return 255;
    },
    /*color$.RgbColor.bMax*/get bMax() {
      return 255;
    },
    /*color$.RgbColor.namedColors*/get namedColors() {
      return dart.constMap(core.String, color$.RgbColor, ["aliceblue", color$.RgbColor._check(dart.const(color$.Color.rgb(240, 248, 255))), "antiquewhite", color$.RgbColor._check(dart.const(color$.Color.rgb(250, 235, 215))), "aqua", color$.RgbColor._check(dart.const(color$.Color.rgb(0, 255, 255))), "aquamarine", color$.RgbColor._check(dart.const(color$.Color.rgb(127, 255, 212))), "azure", color$.RgbColor._check(dart.const(color$.Color.rgb(240, 255, 255))), "beige", color$.RgbColor._check(dart.const(color$.Color.rgb(245, 245, 220))), "bisque", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 228, 196))), "black", color$.RgbColor._check(dart.const(color$.Color.rgb(0, 0, 0))), "blanchedalmond", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 235, 205))), "blue", color$.RgbColor._check(dart.const(color$.Color.rgb(0, 0, 255))), "blueviolet", color$.RgbColor._check(dart.const(color$.Color.rgb(138, 43, 226))), "brown", color$.RgbColor._check(dart.const(color$.Color.rgb(165, 42, 42))), "burlywood", color$.RgbColor._check(dart.const(color$.Color.rgb(222, 184, 135))), "cadetblue", color$.RgbColor._check(dart.const(color$.Color.rgb(95, 158, 160))), "chartreuse", color$.RgbColor._check(dart.const(color$.Color.rgb(127, 255, 0))), "chocolate", color$.RgbColor._check(dart.const(color$.Color.rgb(210, 105, 30))), "coral", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 127, 80))), "cornflowerblue", color$.RgbColor._check(dart.const(color$.Color.rgb(100, 149, 237))), "cornsilk", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 248, 220))), "crimson", color$.RgbColor._check(dart.const(color$.Color.rgb(220, 20, 60))), "cyan", color$.RgbColor._check(dart.const(color$.Color.rgb(0, 255, 255))), "darkblue", color$.RgbColor._check(dart.const(color$.Color.rgb(0, 0, 139))), "darkcyan", color$.RgbColor._check(dart.const(color$.Color.rgb(0, 139, 139))), "darkgoldenrod", color$.RgbColor._check(dart.const(color$.Color.rgb(184, 134, 11))), "darkgray", color$.RgbColor._check(dart.const(color$.Color.rgb(169, 169, 169))), "darkgreen", color$.RgbColor._check(dart.const(color$.Color.rgb(0, 100, 0))), "darkgrey", color$.RgbColor._check(dart.const(color$.Color.rgb(169, 169, 169))), "darkkhaki", color$.RgbColor._check(dart.const(color$.Color.rgb(189, 183, 107))), "darkmagenta", color$.RgbColor._check(dart.const(color$.Color.rgb(139, 0, 139))), "darkolivegreen", color$.RgbColor._check(dart.const(color$.Color.rgb(85, 107, 47))), "darkorange", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 140, 0))), "darkorchid", color$.RgbColor._check(dart.const(color$.Color.rgb(153, 50, 204))), "darkred", color$.RgbColor._check(dart.const(color$.Color.rgb(139, 0, 0))), "darksalmon", color$.RgbColor._check(dart.const(color$.Color.rgb(233, 150, 122))), "darkseagreen", color$.RgbColor._check(dart.const(color$.Color.rgb(143, 188, 143))), "darkslateblue", color$.RgbColor._check(dart.const(color$.Color.rgb(72, 61, 139))), "darkslategray", color$.RgbColor._check(dart.const(color$.Color.rgb(47, 79, 79))), "darkslategrey", color$.RgbColor._check(dart.const(color$.Color.rgb(47, 79, 79))), "darkturquoise", color$.RgbColor._check(dart.const(color$.Color.rgb(0, 206, 209))), "darkviolet", color$.RgbColor._check(dart.const(color$.Color.rgb(148, 0, 211))), "deeppink", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 20, 147))), "deepskyblue", color$.RgbColor._check(dart.const(color$.Color.rgb(0, 191, 255))), "dimgray", color$.RgbColor._check(dart.const(color$.Color.rgb(105, 105, 105))), "dimgrey", color$.RgbColor._check(dart.const(color$.Color.rgb(105, 105, 105))), "dodgerblue", color$.RgbColor._check(dart.const(color$.Color.rgb(30, 144, 255))), "firebrick", color$.RgbColor._check(dart.const(color$.Color.rgb(178, 34, 34))), "floralwhite", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 250, 240))), "forestgreen", color$.RgbColor._check(dart.const(color$.Color.rgb(34, 139, 34))), "fuchsia", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 0, 255))), "gainsboro", color$.RgbColor._check(dart.const(color$.Color.rgb(220, 220, 220))), "ghostwhite", color$.RgbColor._check(dart.const(color$.Color.rgb(248, 248, 255))), "gold", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 215, 0))), "goldenrod", color$.RgbColor._check(dart.const(color$.Color.rgb(218, 165, 32))), "gray", color$.RgbColor._check(dart.const(color$.Color.rgb(128, 128, 128))), "green", color$.RgbColor._check(dart.const(color$.Color.rgb(0, 128, 0))), "greenyellow", color$.RgbColor._check(dart.const(color$.Color.rgb(173, 255, 47))), "grey", color$.RgbColor._check(dart.const(color$.Color.rgb(128, 128, 128))), "honeydew", color$.RgbColor._check(dart.const(color$.Color.rgb(240, 255, 240))), "hotpink", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 105, 180))), "indianred", color$.RgbColor._check(dart.const(color$.Color.rgb(205, 92, 92))), "indigo", color$.RgbColor._check(dart.const(color$.Color.rgb(75, 0, 130))), "ivory", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 255, 240))), "khaki", color$.RgbColor._check(dart.const(color$.Color.rgb(240, 230, 140))), "lavender", color$.RgbColor._check(dart.const(color$.Color.rgb(230, 230, 250))), "lavenderblush", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 240, 245))), "lawngreen", color$.RgbColor._check(dart.const(color$.Color.rgb(124, 252, 0))), "lemonchiffon", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 250, 205))), "lightblue", color$.RgbColor._check(dart.const(color$.Color.rgb(173, 216, 230))), "lightcoral", color$.RgbColor._check(dart.const(color$.Color.rgb(240, 128, 128))), "lightcyan", color$.RgbColor._check(dart.const(color$.Color.rgb(224, 255, 255))), "lightgoldenrodyellow", color$.RgbColor._check(dart.const(color$.Color.rgb(250, 250, 210))), "lightgray", color$.RgbColor._check(dart.const(color$.Color.rgb(211, 211, 211))), "lightgreen", color$.RgbColor._check(dart.const(color$.Color.rgb(144, 238, 144))), "lightgrey", color$.RgbColor._check(dart.const(color$.Color.rgb(211, 211, 211))), "lightpink", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 182, 193))), "lightsalmon", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 160, 122))), "lightseagreen", color$.RgbColor._check(dart.const(color$.Color.rgb(32, 178, 170))), "lightskyblue", color$.RgbColor._check(dart.const(color$.Color.rgb(135, 206, 250))), "lightslategray", color$.RgbColor._check(dart.const(color$.Color.rgb(119, 136, 153))), "lightslategrey", color$.RgbColor._check(dart.const(color$.Color.rgb(119, 136, 153))), "lightsteelblue", color$.RgbColor._check(dart.const(color$.Color.rgb(176, 196, 222))), "lightyellow", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 255, 224))), "lime", color$.RgbColor._check(dart.const(color$.Color.rgb(0, 255, 0))), "limegreen", color$.RgbColor._check(dart.const(color$.Color.rgb(50, 205, 50))), "linen", color$.RgbColor._check(dart.const(color$.Color.rgb(250, 240, 230))), "magenta", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 0, 255))), "maroon", color$.RgbColor._check(dart.const(color$.Color.rgb(128, 0, 0))), "mediumaquamarine", color$.RgbColor._check(dart.const(color$.Color.rgb(102, 205, 170))), "mediumblue", color$.RgbColor._check(dart.const(color$.Color.rgb(0, 0, 205))), "mediumorchid", color$.RgbColor._check(dart.const(color$.Color.rgb(186, 85, 211))), "mediumpurple", color$.RgbColor._check(dart.const(color$.Color.rgb(147, 112, 219))), "mediumseagreen", color$.RgbColor._check(dart.const(color$.Color.rgb(60, 179, 113))), "mediumslateblue", color$.RgbColor._check(dart.const(color$.Color.rgb(123, 104, 238))), "mediumspringgreen", color$.RgbColor._check(dart.const(color$.Color.rgb(0, 250, 154))), "mediumturquoise", color$.RgbColor._check(dart.const(color$.Color.rgb(72, 209, 204))), "mediumvioletred", color$.RgbColor._check(dart.const(color$.Color.rgb(199, 21, 133))), "midnightblue", color$.RgbColor._check(dart.const(color$.Color.rgb(25, 25, 112))), "mintcream", color$.RgbColor._check(dart.const(color$.Color.rgb(245, 255, 250))), "mistyrose", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 228, 225))), "moccasin", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 228, 181))), "navajowhite", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 222, 173))), "navy", color$.RgbColor._check(dart.const(color$.Color.rgb(0, 0, 128))), "oldlace", color$.RgbColor._check(dart.const(color$.Color.rgb(253, 245, 230))), "olive", color$.RgbColor._check(dart.const(color$.Color.rgb(128, 128, 0))), "olivedrab", color$.RgbColor._check(dart.const(color$.Color.rgb(107, 142, 35))), "orange", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 165, 0))), "orangered", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 69, 0))), "orchid", color$.RgbColor._check(dart.const(color$.Color.rgb(218, 112, 214))), "palegoldenrod", color$.RgbColor._check(dart.const(color$.Color.rgb(238, 232, 170))), "palegreen", color$.RgbColor._check(dart.const(color$.Color.rgb(152, 251, 152))), "paleturquoise", color$.RgbColor._check(dart.const(color$.Color.rgb(175, 238, 238))), "palevioletred", color$.RgbColor._check(dart.const(color$.Color.rgb(219, 112, 147))), "papayawhip", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 239, 213))), "peachpuff", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 218, 185))), "peru", color$.RgbColor._check(dart.const(color$.Color.rgb(205, 133, 63))), "pink", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 192, 203))), "plum", color$.RgbColor._check(dart.const(color$.Color.rgb(221, 160, 221))), "powderblue", color$.RgbColor._check(dart.const(color$.Color.rgb(176, 224, 230))), "purple", color$.RgbColor._check(dart.const(color$.Color.rgb(128, 0, 128))), "rebeccapurple", color$.RgbColor._check(dart.const(color$.Color.rgb(102, 51, 153))), "red", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 0, 0))), "rosybrown", color$.RgbColor._check(dart.const(color$.Color.rgb(188, 143, 143))), "royalblue", color$.RgbColor._check(dart.const(color$.Color.rgb(65, 105, 225))), "saddlebrown", color$.RgbColor._check(dart.const(color$.Color.rgb(139, 69, 19))), "salmon", color$.RgbColor._check(dart.const(color$.Color.rgb(250, 128, 114))), "sandybrown", color$.RgbColor._check(dart.const(color$.Color.rgb(244, 164, 96))), "seagreen", color$.RgbColor._check(dart.const(color$.Color.rgb(46, 139, 87))), "seashell", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 245, 238))), "sienna", color$.RgbColor._check(dart.const(color$.Color.rgb(160, 82, 45))), "silver", color$.RgbColor._check(dart.const(color$.Color.rgb(192, 192, 192))), "skyblue", color$.RgbColor._check(dart.const(color$.Color.rgb(135, 206, 235))), "slateblue", color$.RgbColor._check(dart.const(color$.Color.rgb(106, 90, 205))), "slategray", color$.RgbColor._check(dart.const(color$.Color.rgb(112, 128, 144))), "slategrey", color$.RgbColor._check(dart.const(color$.Color.rgb(112, 128, 144))), "snow", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 250, 250))), "springgreen", color$.RgbColor._check(dart.const(color$.Color.rgb(0, 255, 127))), "steelblue", color$.RgbColor._check(dart.const(color$.Color.rgb(70, 130, 180))), "tan", color$.RgbColor._check(dart.const(color$.Color.rgb(210, 180, 140))), "teal", color$.RgbColor._check(dart.const(color$.Color.rgb(0, 128, 128))), "thistle", color$.RgbColor._check(dart.const(color$.Color.rgb(216, 191, 216))), "tomato", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 99, 71))), "turquoise", color$.RgbColor._check(dart.const(color$.Color.rgb(64, 224, 208))), "violet", color$.RgbColor._check(dart.const(color$.Color.rgb(238, 130, 238))), "wheat", color$.RgbColor._check(dart.const(color$.Color.rgb(245, 222, 179))), "white", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 255, 255))), "whitesmoke", color$.RgbColor._check(dart.const(color$.Color.rgb(245, 245, 245))), "yellow", color$.RgbColor._check(dart.const(color$.Color.rgb(255, 255, 0))), "yellowgreen", color$.RgbColor._check(dart.const(color$.Color.rgb(154, 205, 50)))]);
    }
  });
  color$.HexColor = class HexColor extends color$.RgbColor {
    static new(hexCode) {
      if (hexCode[$startsWith]("#")) {
        hexCode = hexCode[$substring](1);
      }
      let hexDigits = hexCode[$split]("");
      let r = core.int.parse(hexDigits[$sublist](0, 2)[$join](), {radix: 16});
      let g = core.int.parse(hexDigits[$sublist](2, 4)[$join](), {radix: 16});
      let b = core.int.parse(hexDigits[$sublist](4)[$join](), {radix: 16});
      return new color$.HexColor.fromRgb(r, g, b);
    }
    get rHex() {
      return this.r[$toInt]()[$toRadixString](16)[$padLeft](2, "0");
    }
    get gHex() {
      return this.g[$toInt]()[$toRadixString](16)[$padLeft](2, "0");
    }
    get bHex() {
      return this.b[$toInt]()[$toRadixString](16)[$padLeft](2, "0");
    }
    toHexColor() {
      return this;
    }
    toString() {
      return dart.str(this.rHex) + dart.str(this.gHex) + dart.str(this.bHex);
    }
    toCssString() {
      return "#" + dart.str(this.rHex) + dart.str(this.gHex) + dart.str(this.bHex);
    }
  };
  (color$.HexColor.fromRgb = function(r, g, b) {
    color$.HexColor.__proto__.new.call(this, r, g, b);
  }).prototype = color$.HexColor.prototype;
  dart.addTypeTests(color$.HexColor);
  color$.HexColor[dart.implements] = () => [color$.CssColorSpace];
  dart.setGetterSignature(color$.HexColor, () => ({
    __proto__: dart.getGetters(color$.HexColor.__proto__),
    rHex: dart.dynamic,
    gHex: dart.dynamic,
    bHex: dart.dynamic
  }));
  dart.defineExtensionMethods(color$.HexColor, ['toString']);
  color$.HslColor = class HslColor extends color$.Color {
    get h() {
      return this[h$];
    }
    set h(value) {
      super.h = value;
    }
    get s() {
      return this[s$];
    }
    set s(value) {
      super.s = value;
    }
    get l() {
      return this[l$];
    }
    set l(value) {
      super.l = value;
    }
    toRgbColor() {
      let rgb = JSArrayOfnum().of([0, 0, 0]);
      let hue = (dart.notNull(this.h) / 360)[$modulo](1);
      let saturation = dart.notNull(this.s) / 100;
      let luminance = dart.notNull(this.l) / 100;
      if (hue < 1 / 6) {
        rgb[$_set](0, 1);
        rgb[$_set](1, hue * 6);
      } else if (hue < 2 / 6) {
        rgb[$_set](0, 2 - hue * 6);
        rgb[$_set](1, 1);
      } else if (hue < 3 / 6) {
        rgb[$_set](1, 1);
        rgb[$_set](2, hue * 6 - 2);
      } else if (hue < 4 / 6) {
        rgb[$_set](1, 4 - hue * 6);
        rgb[$_set](2, 1);
      } else if (hue < 5 / 6) {
        rgb[$_set](0, hue * 6 - 4);
        rgb[$_set](2, 1);
      } else {
        rgb[$_set](0, 1);
        rgb[$_set](2, 6 - hue * 6);
      }
      rgb = IterableOfnum()._check(rgb[$map](core.num, dart.fn(val => dart.notNull(val) + (1 - saturation) * (0.5 - dart.notNull(val)), numTonum())))[$toList]();
      if (luminance < 0.5) {
        rgb = IterableOfnum()._check(rgb[$map](core.num, dart.fn(val => luminance * 2 * dart.notNull(val), numTonum())))[$toList]();
      } else {
        rgb = IterableOfnum()._check(rgb[$map](core.num, dart.fn(val => luminance * 2 * (1 - dart.notNull(val)) + 2 * dart.notNull(val) - 1, numTonum())))[$toList]();
      }
      rgb = IterableOfint()._check(rgb[$map](core.int, dart.fn(val => (dart.notNull(val) * 255)[$round](), numToint())))[$toList]();
      return new color$.RgbColor.new(rgb[$_get](0), rgb[$_get](1), rgb[$_get](2));
    }
    toHslColor() {
      return this;
    }
    toXyzColor() {
      return this.toRgbColor().toXyzColor();
    }
    toCielabColor() {
      return this.toRgbColor().toXyzColor().toCielabColor();
    }
    toString() {
      return "h: " + dart.str(this.h) + ", s: " + dart.str(this.s) + "%, l: " + dart.str(this.l) + "%";
    }
    toCssString() {
      return "hsl(" + dart.str(this.h) + ", " + dart.str(this.s) + "%, " + dart.str(this.l) + "%)";
    }
    toMap() {
      return new (IdentityMapOfString$num()).from(["h", this.h, "s", this.s, "l", this.l]);
    }
  };
  (color$.HslColor.new = function(h, s, l) {
    this[h$] = h;
    this[s$] = s;
    this[l$] = l;
    color$.HslColor.__proto__.new.call(this);
  }).prototype = color$.HslColor.prototype;
  dart.addTypeTests(color$.HslColor);
  const h$ = Symbol("HslColor.h");
  const s$ = Symbol("HslColor.s");
  const l$ = Symbol("HslColor.l");
  color$.HslColor[dart.implements] = () => [color$.CssColorSpace];
  dart.setMethodSignature(color$.HslColor, () => ({
    __proto__: dart.getMethods(color$.HslColor.__proto__),
    toRgbColor: dart.fnType(color$.RgbColor, []),
    toHslColor: dart.fnType(color$.HslColor, []),
    toXyzColor: dart.fnType(color$.XyzColor, []),
    toCielabColor: dart.fnType(color$.CielabColor, []),
    toString: dart.fnType(core.String, []),
    [$toString]: dart.fnType(core.String, []),
    toCssString: dart.fnType(core.String, []),
    toMap: dart.fnType(core.Map$(core.String, core.num), [])
  }));
  dart.setFieldSignature(color$.HslColor, () => ({
    __proto__: dart.getFields(color$.HslColor.__proto__),
    h: dart.finalFieldType(core.num),
    s: dart.finalFieldType(core.num),
    l: dart.finalFieldType(core.num)
  }));
  dart.defineExtensionMethods(color$.HslColor, ['toString']);
  dart.defineLazy(color$.HslColor, {
    /*color$.HslColor.hMin*/get hMin() {
      return 0;
    },
    /*color$.HslColor.sMin*/get sMin() {
      return 0;
    },
    /*color$.HslColor.lMin*/get lMin() {
      return 0;
    },
    /*color$.HslColor.hMax*/get hMax() {
      return 360;
    },
    /*color$.HslColor.sMax*/get sMax() {
      return 100;
    },
    /*color$.HslColor.lMax*/get lMax() {
      return 100;
    }
  });
  color$.XyzColor = class XyzColor extends color$.Color {
    get x() {
      return this[x$];
    }
    set x(value) {
      super.x = value;
    }
    get y() {
      return this[y$];
    }
    set y(value) {
      super.y = value;
    }
    get z() {
      return this[z$];
    }
    set z(value) {
      super.z = value;
    }
    toRgbColor() {
      let x = dart.notNull(this.x) / 100;
      let y = dart.notNull(this.y) / 100;
      let z = dart.notNull(this.z) / 100;
      let rgb = new (IdentityMapOfString$num()).from(["r", x * 3.2406 + y * -1.5372 + z * -0.4986, "g", x * -0.9689 + y * 1.8758 + z * 0.0415, "b", x * 0.0557 + y * -0.204 + z * 1.057]);
      rgb[$forEach](dart.fn((key, value) => {
        if (dart.notNull(value) > 0.0031308) {
          rgb[$_set](key, 1.055 * math.pow(value, 1 / 2.4) - 0.055);
        } else {
          rgb[$_set](key, dart.notNull(value) * 12.92);
        }
        rgb[$_set](key, dart.notNull(rgb[$_get](key)) * 255);
      }, StringAndnumToNull()));
      return new color$.RgbColor.new(rgb[$_get]("r"), rgb[$_get]("g"), rgb[$_get]("b"));
    }
    toHslColor() {
      return this.toRgbColor().toHslColor();
    }
    toXyzColor() {
      return this;
    }
    toCielabColor() {
      let lab = new (IdentityMapOfString$num()).new();
      let xyz = new (IdentityMapOfString$num()).new();
      this.toMap()[$forEach](dart.fn((key, value) => {
        value = dart.notNull(value) / dart.notNull(core.num._check(color$.XyzColor.referenceWhite._get(key)));
        if (dart.notNull(value) > 0.008856) {
          value = math.pow(value, 1 / 3);
        } else {
          value = 7.787 * dart.notNull(value) + 16 / 116;
        }
        xyz[$_set](key, value);
      }, StringAndnumToNull()));
      lab[$_set]("l", 116 * dart.notNull(xyz[$_get]("y")) - 16);
      lab[$_set]("a", 500 * (dart.notNull(xyz[$_get]("x")) - dart.notNull(xyz[$_get]("y"))));
      lab[$_set]("b", 200 * (dart.notNull(xyz[$_get]("y")) - dart.notNull(xyz[$_get]("z"))));
      return new color$.CielabColor.new(lab[$_get]("l"), lab[$_get]("a"), lab[$_get]("b"));
    }
    toString() {
      return "x: " + dart.str(this.x) + ", y: " + dart.str(this.y) + ", z: " + dart.str(this.z);
    }
    toMap() {
      return new (IdentityMapOfString$num()).from(["x", this.x, "y", this.y, "z", this.z]);
    }
  };
  (color$.XyzColor.new = function(x, y, z) {
    this[x$] = x;
    this[y$] = y;
    this[z$] = z;
    color$.XyzColor.__proto__.new.call(this);
  }).prototype = color$.XyzColor.prototype;
  dart.addTypeTests(color$.XyzColor);
  const x$ = Symbol("XyzColor.x");
  const y$ = Symbol("XyzColor.y");
  const z$ = Symbol("XyzColor.z");
  dart.setMethodSignature(color$.XyzColor, () => ({
    __proto__: dart.getMethods(color$.XyzColor.__proto__),
    toRgbColor: dart.fnType(color$.RgbColor, []),
    toHslColor: dart.fnType(color$.HslColor, []),
    toXyzColor: dart.fnType(color$.XyzColor, []),
    toCielabColor: dart.fnType(color$.CielabColor, []),
    toString: dart.fnType(core.String, []),
    [$toString]: dart.fnType(core.String, []),
    toMap: dart.fnType(core.Map$(core.String, core.num), [])
  }));
  dart.setFieldSignature(color$.XyzColor, () => ({
    __proto__: dart.getFields(color$.XyzColor.__proto__),
    x: dart.finalFieldType(core.num),
    y: dart.finalFieldType(core.num),
    z: dart.finalFieldType(core.num)
  }));
  dart.defineExtensionMethods(color$.XyzColor, ['toString']);
  dart.defineLazy(color$.XyzColor, {
    /*color$.XyzColor.referenceWhite*/get referenceWhite() {
      return dart.const(new color$.XyzColor.new(95.047, 100, 108.883));
    }
  });
  color$.CielabColor = class CielabColor extends color$.Color {
    get l() {
      return this[l$0];
    }
    set l(value) {
      super.l = value;
    }
    get a() {
      return this[a$];
    }
    set a(value) {
      super.a = value;
    }
    get b() {
      return this[b$0];
    }
    set b(value) {
      super.b = value;
    }
    toRgbColor() {
      let xyz = this.toXyzColor();
      return xyz.toRgbColor();
    }
    toHslColor() {
      return this.toRgbColor().toHslColor();
    }
    toXyzColor() {
      let xyz = new (IdentityMapOfString$num()).from(["x", dart.notNull(this.a) / 500 + (dart.notNull(this.l) + 16) / 116, "y", (dart.notNull(this.l) + 16) / 116, "z", (dart.notNull(this.l) + 16) / 116 - dart.notNull(this.b) / 200]);
      xyz[$forEach](dart.fn((key, value) => {
        let cube = math.pow(value, 3);
        if (cube > 0.008856) {
          xyz[$_set](key, cube);
        } else {
          xyz[$_set](key, (dart.notNull(value) - 16 / 116) / 7.787);
        }
        xyz[$_set](key, dart.notNull(xyz[$_get](key)) * dart.notNull(core.num._check(color$.XyzColor.referenceWhite._get(key))));
      }, StringAndnumToNull()));
      return new color$.XyzColor.new(xyz[$_get]("x"), xyz[$_get]("y"), xyz[$_get]("z"));
    }
    toCielabColor() {
      return this;
    }
    toString() {
      return "l: " + dart.str(this.l) + ", a: " + dart.str(this.a) + ", b: " + dart.str(this.b);
    }
    toMap() {
      return new (IdentityMapOfString$num()).from(["l", this.l, "a", this.a, "b", this.b]);
    }
  };
  (color$.CielabColor.new = function(l, a, b) {
    this[l$0] = l;
    this[a$] = a;
    this[b$0] = b;
    color$.CielabColor.__proto__.new.call(this);
  }).prototype = color$.CielabColor.prototype;
  dart.addTypeTests(color$.CielabColor);
  const l$0 = Symbol("CielabColor.l");
  const a$ = Symbol("CielabColor.a");
  const b$0 = Symbol("CielabColor.b");
  dart.setMethodSignature(color$.CielabColor, () => ({
    __proto__: dart.getMethods(color$.CielabColor.__proto__),
    toRgbColor: dart.fnType(color$.RgbColor, []),
    toHslColor: dart.fnType(color$.HslColor, []),
    toXyzColor: dart.fnType(color$.XyzColor, []),
    toCielabColor: dart.fnType(color$.CielabColor, []),
    toString: dart.fnType(core.String, []),
    [$toString]: dart.fnType(core.String, []),
    toMap: dart.fnType(core.Map$(core.String, core.num), [])
  }));
  dart.setFieldSignature(color$.CielabColor, () => ({
    __proto__: dart.getFields(color$.CielabColor.__proto__),
    l: dart.finalFieldType(core.num),
    a: dart.finalFieldType(core.num),
    b: dart.finalFieldType(core.num)
  }));
  dart.defineExtensionMethods(color$.CielabColor, ['toString']);
  color$.ColorFilter = class ColorFilter extends core.Object {
    get filterFunction() {
      return this[filterFunction$];
    }
    set filterFunction(value) {
      super.filterFunction = value;
    }
    get baseType() {
      return this[baseType$];
    }
    set baseType(value) {
      super.baseType = value;
    }
    call(color, args) {
      let startingColorSpace = dart.runtimeType(color);
      color = color[_convert](this.baseType);
      color = this.filterFunction(color, args);
      color = color[_convert](startingColorSpace);
      return color;
    }
  };
  (color$.ColorFilter.new = function(filterFunction, baseType) {
    this[filterFunction$] = filterFunction;
    this[baseType$] = baseType;
  }).prototype = color$.ColorFilter.prototype;
  dart.addTypeTests(color$.ColorFilter);
  const filterFunction$ = Symbol("ColorFilter.filterFunction");
  const baseType$ = Symbol("ColorFilter.baseType");
  dart.setMethodSignature(color$.ColorFilter, () => ({
    __proto__: dart.getMethods(color$.ColorFilter.__proto__),
    call: dart.fnType(color$.Color, [color$.Color, core.List])
  }));
  dart.setFieldSignature(color$.ColorFilter, () => ({
    __proto__: dart.getFields(color$.ColorFilter.__proto__),
    filterFunction: dart.finalFieldType(Color__ToColor()),
    baseType: dart.finalFieldType(core.Type)
  }));
  dart.defineLazy(color$.ColorFilter, {
    /*color$.ColorFilter.lighten*/get lighten() {
      return new color$.ColorFilter.new(dart.fn((inputColor, args) => {
        if (args === void 0) args = null;
        let color = inputColor.toCielabColor();
        let percent = 0.1;
        if (core.List.is(args) && dart.notNull(args[$length]) > 0 && typeof args[$_get](0) == 'number') {
          percent = core.num._check(args[$_get](0));
        }
        return new color$.CielabColor.new(dart.notNull(color.l) * (1 + dart.notNull(percent)), color.a, color.b);
      }, Color__ToCielabColor()), dart.wrapType(color$.CielabColor));
    },
    set lighten(_) {},
    /*color$.ColorFilter.darken*/get darken() {
      return new color$.ColorFilter.new(dart.fn((inputColor, args) => {
        if (args === void 0) args = null;
        let color = inputColor.toCielabColor();
        let percent = 0.1;
        if (core.List.is(args) && dart.notNull(args[$length]) > 0 && typeof args[$_get](0) == 'number') {
          percent = core.num._check(args[$_get](0));
        }
        return new color$.CielabColor.new(dart.notNull(color.l) * (1 - dart.notNull(percent)), color.a, color.b);
      }, Color__ToCielabColor()), dart.wrapType(color$.CielabColor));
    },
    set darken(_) {},
    /*color$.ColorFilter.sepia*/get sepia() {
      return new color$.ColorFilter.new(dart.fn((baseColor, args) => {
        if (args === void 0) args = null;
        let color = baseColor.toRgbColor();
        return new color$.RgbColor.new(math.min(core.num, color$.RgbColor.rMax, dart.notNull(color.r) * 0.393 + dart.notNull(color.g) * 0.769 + dart.notNull(color.b) * 0.189), math.min(core.num, color$.RgbColor.gMax, dart.notNull(color.r) * 0.349 + dart.notNull(color.g) * 0.686 + dart.notNull(color.b) * 0.168), math.min(core.num, color$.RgbColor.bMax, dart.notNull(color.r) * 0.272 + dart.notNull(color.g) * 0.534 + dart.notNull(color.b) * 0.131)).toCielabColor();
      }, Color__ToCielabColor()), dart.wrapType(color$.RgbColor));
    },
    set sepia(_) {},
    /*color$.ColorFilter.greyscale*/get greyscale() {
      return new color$.ColorFilter.new(dart.fn((inputColor, args) => {
        if (args === void 0) args = null;
        let color = inputColor.toCielabColor();
        let rgbLevel = dart.notNull(color.l) * 255 / 100;
        return new color$.RgbColor.new(rgbLevel, rgbLevel, rgbLevel).toCielabColor();
      }, Color__ToCielabColor()), dart.wrapType(color$.CielabColor));
    },
    set greyscale(_) {},
    /*color$.ColorFilter.invert*/get invert() {
      return new color$.ColorFilter.new(dart.fn((inputColor, args) => {
        if (args === void 0) args = null;
        let color = inputColor.toCielabColor();
        return new color$.CielabColor.new(100 - dart.notNull(color.l), -1 * dart.notNull(color.a), -1 * dart.notNull(color.b));
      }, Color__ToCielabColor()), dart.wrapType(color$.CielabColor));
    },
    set invert(_) {}
  });
  color$.CssColorSpace = class CssColorSpace extends core.Object {};
  (color$.CssColorSpace.new = function() {
  }).prototype = color$.CssColorSpace.prototype;
  dart.addTypeTests(color$.CssColorSpace);
  const _parseRgb = Symbol('_parseRgb');
  const _parseHex = Symbol('_parseHex');
  const _parseHsl = Symbol('_parseHsl');
  const _parseNamed = Symbol('_parseNamed');
  color$.ColorParser = class ColorParser extends core.Object {
    parse(toParse, opts) {
      let orElse = opts && 'orElse' in opts ? opts.orElse : null;
      toParse = toParse[$trim]();
      let l = this[_parseRgb](toParse);
      let l$ = l != null ? l : this[_parseHex](toParse);
      let l$0 = l$ != null ? l$ : this[_parseHsl](toParse);
      let l$1 = l$0 != null ? l$0 : this[_parseNamed](toParse);
      let l$2 = l$1 != null ? l$1 : orElse == null ? null : orElse();
      return l$2 != null ? l$2 : null;
    }
    [_parseHex](toParse) {
      if (dart.test(color$.ColorParser._hexColorRegExp.hasMatch(toParse))) {
        return color$.HexColor.new(toParse);
      }
      if (dart.test(color$.ColorParser._hexColorAbbreviatedRegExp.hasMatch(toParse))) {
        let _unAbbreviated = core.String.fromCharCodes(IterableOfint()._check(IterableOfListOfint()._check(toParse[$replaceFirst](color$.ColorParser._beginsHash, "")[$codeUnits][$map](ListOfint(), dart.fn(c => JSArrayOfint().of([c, c]), intToListOfint())))[$expand](core.int, dart.fn(c => c, ListOfintToListOfint()))));
        return color$.HexColor.new(_unAbbreviated);
      }
      return null;
    }
    [_parseHsl](toParse) {
      if (dart.test(color$.ColorParser._hslColorRegExp.hasMatch(toParse))) {
        let match = color$.ColorParser._hslColorRegExp.allMatches(toParse)[$first];
        return new color$.HslColor.new(core.int.parse(match.group(1)), core.double.parse((() => {
          let l = match.group(2);
          return l != null ? l : match.group(3);
        })()), core.double.parse((() => {
          let l = match.group(4);
          return l != null ? l : match.group(5);
        })()));
      }
      return null;
    }
    [_parseRgb](toParse) {
      if (dart.test(color$.ColorParser._rgbColorImplicitRegExp.hasMatch(toParse))) {
        let match = color$.ColorParser._rgbColorImplicitRegExp.allMatches(toParse)[$first];
        return new color$.RgbColor.new(core.int.parse(match.group(1)), core.int.parse(match.group(2)), core.int.parse(match.group(3)));
      }
      if (dart.test(color$.ColorParser._rgbColorExplicitRegExp.hasMatch(toParse))) {
        let match = color$.ColorParser._rgbColorExplicitRegExp.allMatches(toParse)[$first];
        return new color$.RgbColor.new(core.int.parse(match.group(1)), core.int.parse(match.group(2)), core.int.parse(match.group(3)));
      }
      return null;
    }
    [_parseNamed](toParse) {
      try {
        return color$.RgbColor.name_(toParse[$toLowerCase]());
      } catch (e) {
        let argumentError = dart.getThrown(e);
        return null;
      }
    }
  };
  (color$.ColorParser.new = function() {
  }).prototype = color$.ColorParser.prototype;
  dart.addTypeTests(color$.ColorParser);
  dart.setMethodSignature(color$.ColorParser, () => ({
    __proto__: dart.getMethods(color$.ColorParser.__proto__),
    parse: dart.fnType(color$.Color, [core.String], {orElse: dart.fnType(color$.Color, [])}),
    [_parseHex]: dart.fnType(color$.Color, [core.String]),
    [_parseHsl]: dart.fnType(color$.Color, [core.String]),
    [_parseRgb]: dart.fnType(color$.Color, [core.String]),
    [_parseNamed]: dart.fnType(color$.Color, [core.String])
  }));
  dart.defineLazy(color$.ColorParser, {
    /*color$.ColorParser._beginsHash*/get _beginsHash() {
      return core.RegExp.new("^#");
    },
    /*color$.ColorParser._hexColorRegExp*/get _hexColorRegExp() {
      return core.RegExp.new("^#?([\\da-fA-F]{6})$");
    },
    /*color$.ColorParser._hexColorAbbreviatedRegExp*/get _hexColorAbbreviatedRegExp() {
      return core.RegExp.new("^#?([\\da-fA-F]{3})$");
    },
    /*color$.ColorParser._rgbColorImplicitRegExp*/get _rgbColorImplicitRegExp() {
      return core.RegExp.new("^(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})$");
    },
    /*color$.ColorParser._rgbColorExplicitRegExp*/get _rgbColorExplicitRegExp() {
      return core.RegExp.new("^rgb\\(\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*\\)$");
    },
    /*color$.ColorParser._hslColorRegExp*/get _hslColorRegExp() {
      return core.RegExp.new("^hsl\\(\\s*(\\d{1,3})\\s*,\\s*(\\d+(\\.\\d*)?|\\.\\d+)%\\s*,\\s*(\\d+(\\.\\d*)?|\\.\\d+)%\\s*\\)$");
    }
  });
  dart.trackLibraries("packages/color/color.ddc", {
    "package:color/color.dart": color$
  }, '{"version":3,"sourceRoot":"","sources":["color.dart","rgb_color.dart","hex_color.dart","hsl_color.dart","xyz_color.dart","cielab_color.dart","color_filter.dart","css_color_space.dart","color_parser.dart"],"names":[],"mappings":"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","file":"color.ddc.js"}');
  // Exports:
  return {
    color: color$
  };
});

//# sourceMappingURL=color.ddc.js.map
