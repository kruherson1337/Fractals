define(['dart_sdk', 'packages/typed_data/typed_buffers'], function(dart_sdk, typed_buffers) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const typed_buffers$ = typed_buffers.typed_buffers;
  const _root = Object.create(null);
  const convert$ = Object.create(_root);
  const src__accumulator_sink = Object.create(_root);
  const src__byte_accumulator_sink = Object.create(_root);
  const src__hex__encoder = Object.create(_root);
  const src__utils = Object.create(_root);
  const src__hex__decoder = Object.create(_root);
  const src__hex = Object.create(_root);
  const src__identity_codec = Object.create(_root);
  const src__percent__encoder = Object.create(_root);
  const src__percent__decoder = Object.create(_root);
  const src__percent = Object.create(_root);
  const src__string_accumulator_sink = Object.create(_root);
  const $clear = dartx.clear;
  const $add = dartx.add;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $toRadixString = dartx.toRadixString;
  const $abs = dartx.abs;
  const $padLeft = dartx.padLeft;
  const $isEven = dartx.isEven;
  const $truncate = dartx.truncate;
  const $codeUnits = dartx.codeUnits;
  const $asUint8List = dartx.asUint8List;
  const $substring = dartx.substring;
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let SinkOfString = () => (SinkOfString = dart.constFn(core.Sink$(core.String)))();
  let SinkOfListOfint = () => (SinkOfListOfint = dart.constFn(core.Sink$(ListOfint())))();
  const _events = Symbol('_events');
  const _isClosed = Symbol('_isClosed');
  const _is_AccumulatorSink_default = Symbol('_is_AccumulatorSink_default');
  src__accumulator_sink.AccumulatorSink$ = dart.generic(T => {
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let UnmodifiableListViewOfT = () => (UnmodifiableListViewOfT = dart.constFn(collection.UnmodifiableListView$(T)))();
    let SinkOfT = () => (SinkOfT = dart.constFn(core.Sink$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    class AccumulatorSink extends core.Object {
      get events() {
        return new (UnmodifiableListViewOfT()).new(this[_events]);
      }
      get isClosed() {
        return this[_isClosed];
      }
      clear() {
        this[_events][$clear]();
      }
      add(event) {
        T._check(event);
        if (dart.test(this[_isClosed])) {
          dart.throw(new core.StateError.new("Can't add to a closed sink."));
        }
        this[_events][$add](event);
      }
      close() {
        this[_isClosed] = true;
      }
    }
    (AccumulatorSink.new = function() {
      this[_events] = JSArrayOfT().of([]);
      this[_isClosed] = false;
    }).prototype = AccumulatorSink.prototype;
    dart.addTypeTests(AccumulatorSink);
    AccumulatorSink.prototype[_is_AccumulatorSink_default] = true;
    AccumulatorSink[dart.implements] = () => [SinkOfT()];
    dart.setMethodSignature(AccumulatorSink, () => ({
      __proto__: dart.getMethods(AccumulatorSink.__proto__),
      clear: dart.fnType(dart.void, []),
      add: dart.fnType(dart.void, [core.Object]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(AccumulatorSink, () => ({
      __proto__: dart.getGetters(AccumulatorSink.__proto__),
      events: core.List$(T),
      isClosed: core.bool
    }));
    dart.setFieldSignature(AccumulatorSink, () => ({
      __proto__: dart.getFields(AccumulatorSink.__proto__),
      [_events]: dart.finalFieldType(ListOfT()),
      [_isClosed]: dart.fieldType(core.bool)
    }));
    return AccumulatorSink;
  });
  src__accumulator_sink.AccumulatorSink = src__accumulator_sink.AccumulatorSink$();
  dart.addTypeTests(src__accumulator_sink.AccumulatorSink, _is_AccumulatorSink_default);
  const _buffer = Symbol('_buffer');
  const _isClosed$ = Symbol('_isClosed');
  src__byte_accumulator_sink.ByteAccumulatorSink = class ByteAccumulatorSink extends convert.ByteConversionSinkBase {
    get bytes() {
      return typed_data.Uint8List.view(this[_buffer].buffer, 0, this[_buffer].length);
    }
    get isClosed() {
      return this[_isClosed$];
    }
    clear() {
      this[_buffer].clear();
    }
    add(bytes) {
      ListOfint()._check(bytes);
      if (dart.test(this[_isClosed$])) {
        dart.throw(new core.StateError.new("Can't add to a closed sink."));
      }
      this[_buffer].addAll(bytes);
    }
    addSlice(chunk, start, end, isLast) {
      if (dart.test(this[_isClosed$])) {
        dart.throw(new core.StateError.new("Can't add to a closed sink."));
      }
      this[_buffer].addAll(chunk, start, end);
      if (dart.test(isLast)) this[_isClosed$] = true;
    }
    close() {
      this[_isClosed$] = true;
    }
  };
  (src__byte_accumulator_sink.ByteAccumulatorSink.new = function() {
    this[_buffer] = new typed_buffers$.Uint8Buffer.new();
    this[_isClosed$] = false;
    src__byte_accumulator_sink.ByteAccumulatorSink.__proto__.new.call(this);
  }).prototype = src__byte_accumulator_sink.ByteAccumulatorSink.prototype;
  dart.addTypeTests(src__byte_accumulator_sink.ByteAccumulatorSink);
  dart.setMethodSignature(src__byte_accumulator_sink.ByteAccumulatorSink, () => ({
    __proto__: dart.getMethods(src__byte_accumulator_sink.ByteAccumulatorSink.__proto__),
    clear: dart.fnType(dart.void, []),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__byte_accumulator_sink.ByteAccumulatorSink, () => ({
    __proto__: dart.getGetters(src__byte_accumulator_sink.ByteAccumulatorSink.__proto__),
    bytes: typed_data.Uint8List,
    isClosed: core.bool
  }));
  dart.setFieldSignature(src__byte_accumulator_sink.ByteAccumulatorSink, () => ({
    __proto__: dart.getFields(src__byte_accumulator_sink.ByteAccumulatorSink.__proto__),
    [_buffer]: dart.finalFieldType(typed_buffers$.Uint8Buffer),
    [_isClosed$]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__hex__encoder, {
    /*src__hex__encoder.hexEncoder*/get hexEncoder() {
      return dart.const(new src__hex__encoder.HexEncoder.__());
    }
  });
  src__hex__encoder.HexEncoder = class HexEncoder extends convert.Converter$(core.List$(core.int), core.String) {
    convert(bytes) {
      ListOfint()._check(bytes);
      return src__hex__encoder._convert(bytes, 0, bytes[$length]);
    }
    startChunkedConversion(sink) {
      SinkOfString()._check(sink);
      return new src__hex__encoder._HexEncoderSink.new(sink);
    }
  };
  (src__hex__encoder.HexEncoder.__ = function() {
    src__hex__encoder.HexEncoder.__proto__.new.call(this);
  }).prototype = src__hex__encoder.HexEncoder.prototype;
  dart.addTypeTests(src__hex__encoder.HexEncoder);
  dart.setMethodSignature(src__hex__encoder.HexEncoder, () => ({
    __proto__: dart.getMethods(src__hex__encoder.HexEncoder.__proto__),
    convert: dart.fnType(core.String, [core.Object]),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [core.Object])
  }));
  const _sink = Symbol('_sink');
  src__hex__encoder._HexEncoderSink = class _HexEncoderSink extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListOfint()._check(chunk);
      this[_sink].add(src__hex__encoder._convert(chunk, 0, chunk[$length]));
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      this[_sink].add(src__hex__encoder._convert(chunk, start, end));
      if (dart.test(isLast)) this[_sink].close();
    }
    close() {
      this[_sink].close();
    }
  };
  (src__hex__encoder._HexEncoderSink.new = function(sink) {
    this[_sink] = sink;
    src__hex__encoder._HexEncoderSink.__proto__.new.call(this);
  }).prototype = src__hex__encoder._HexEncoderSink.prototype;
  dart.addTypeTests(src__hex__encoder._HexEncoderSink);
  dart.setMethodSignature(src__hex__encoder._HexEncoderSink, () => ({
    __proto__: dart.getMethods(src__hex__encoder._HexEncoderSink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hex__encoder._HexEncoderSink, () => ({
    __proto__: dart.getFields(src__hex__encoder._HexEncoderSink.__proto__),
    [_sink]: dart.finalFieldType(SinkOfString())
  }));
  src__hex__encoder._convert = function(bytes, start, end) {
    let buffer = typed_data.Uint8List.new((dart.notNull(end) - dart.notNull(start)) * 2);
    let bufferIndex = 0;
    let byteOr = 0;
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let byte = bytes[$_get](i);
      byteOr = (byteOr | dart.notNull(byte)) >>> 0;
      buffer[$_set](bufferIndex++, src__hex__encoder._codeUnitForDigit((dart.notNull(byte) & 240) >>> 4));
      buffer[$_set](bufferIndex++, src__hex__encoder._codeUnitForDigit(dart.notNull(byte) & 15));
    }
    if (byteOr >= 0 && byteOr <= 255) return core.String.fromCharCodes(buffer);
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let byte = bytes[$_get](i);
      if (dart.notNull(byte) >= 0 && dart.notNull(byte) <= 255) continue;
      dart.throw(new core.FormatException.new("Invalid byte " + (dart.notNull(byte) < 0 ? "-" : "") + "0x" + byte[$abs]()[$toRadixString](16) + ".", bytes, i));
    }
    dart.throw("unreachable");
  };
  src__hex__encoder._codeUnitForDigit = function(digit) {
    return dart.notNull(digit) < 10 ? dart.notNull(digit) + 48 : dart.notNull(digit) + 97 - 10;
  };
  src__utils.digitForCodeUnit = function(codeUnits, index) {
    let codeUnit = codeUnits[$_get](index);
    let digit = (48 ^ dart.notNull(codeUnit)) >>> 0;
    if (digit <= 9) {
      if (digit >= 0) return digit;
    } else {
      let letter = (32 | dart.notNull(codeUnit)) >>> 0;
      if (97 <= letter && letter <= 102) return letter - 97 + 10;
    }
    dart.throw(new core.FormatException.new("Invalid hexadecimal code unit " + ("U+" + codeUnit[$toRadixString](16)[$padLeft](4, "0") + "."), codeUnits, index));
  };
  dart.defineLazy(src__hex__decoder, {
    /*src__hex__decoder.hexDecoder*/get hexDecoder() {
      return dart.const(new src__hex__decoder.HexDecoder.__());
    }
  });
  src__hex__decoder.HexDecoder = class HexDecoder extends convert.Converter$(core.String, core.List$(core.int)) {
    convert(string) {
      core.String._check(string);
      if (!string.length[$isEven]) {
        dart.throw(new core.FormatException.new("Invalid input length, must be even.", string, string.length));
      }
      let bytes = typed_data.Uint8List.new((string.length / 2)[$truncate]());
      src__hex__decoder._decode(string[$codeUnits], 0, string.length, bytes, 0);
      return bytes;
    }
    startChunkedConversion(sink) {
      SinkOfListOfint()._check(sink);
      return new src__hex__decoder._HexDecoderSink.new(sink);
    }
  };
  (src__hex__decoder.HexDecoder.__ = function() {
    src__hex__decoder.HexDecoder.__proto__.new.call(this);
  }).prototype = src__hex__decoder.HexDecoder.prototype;
  dart.addTypeTests(src__hex__decoder.HexDecoder);
  dart.setMethodSignature(src__hex__decoder.HexDecoder, () => ({
    __proto__: dart.getMethods(src__hex__decoder.HexDecoder.__proto__),
    convert: dart.fnType(core.List$(core.int), [core.Object]),
    startChunkedConversion: dart.fnType(convert.StringConversionSink, [core.Object])
  }));
  const _sink$ = Symbol('_sink');
  const _lastDigit = Symbol('_lastDigit');
  const _close = Symbol('_close');
  src__hex__decoder._HexDecoderSink = class _HexDecoderSink extends convert.StringConversionSinkBase {
    addSlice(string, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, string.length);
      if (start == end) {
        if (dart.test(isLast)) this[_close](string, end);
        return;
      }
      let codeUnits = string[$codeUnits];
      let bytes = null;
      let bytesStart = null;
      if (this[_lastDigit] == null) {
        bytes = typed_data.Uint8List.new(((dart.notNull(end) - dart.notNull(start)) / 2)[$truncate]());
        bytesStart = 0;
      } else {
        let hexPairs = ((dart.notNull(end) - dart.notNull(start) - 1) / 2)[$truncate]();
        bytes = typed_data.Uint8List.new(1 + hexPairs);
        bytes[$_set](0, dart.notNull(this[_lastDigit]) + dart.notNull(src__utils.digitForCodeUnit(codeUnits, start)));
        start = dart.notNull(start) + 1;
        bytesStart = 1;
      }
      this[_lastDigit] = src__hex__decoder._decode(codeUnits, start, end, bytes, bytesStart);
      this[_sink$].add(bytes);
      if (dart.test(isLast)) this[_close](string, end);
    }
    asUtf8Sink(allowMalformed) {
      return new src__hex__decoder._HexDecoderByteSink.new(this[_sink$]);
    }
    close() {
      return this[_close]();
    }
    [_close](string, index) {
      if (string === void 0) string = null;
      if (index === void 0) index = null;
      if (this[_lastDigit] != null) {
        dart.throw(new core.FormatException.new("Input ended with incomplete encoded byte.", string, index));
      }
      this[_sink$].close();
    }
  };
  (src__hex__decoder._HexDecoderSink.new = function(sink) {
    this[_lastDigit] = null;
    this[_sink$] = sink;
  }).prototype = src__hex__decoder._HexDecoderSink.prototype;
  dart.addTypeTests(src__hex__decoder._HexDecoderSink);
  dart.setMethodSignature(src__hex__decoder._HexDecoderSink, () => ({
    __proto__: dart.getMethods(src__hex__decoder._HexDecoderSink.__proto__),
    addSlice: dart.fnType(dart.void, [core.String, core.int, core.int, core.bool]),
    close: dart.fnType(dart.void, []),
    [_close]: dart.fnType(dart.void, [], [core.String, core.int])
  }));
  dart.setFieldSignature(src__hex__decoder._HexDecoderSink, () => ({
    __proto__: dart.getFields(src__hex__decoder._HexDecoderSink.__proto__),
    [_sink$]: dart.finalFieldType(SinkOfListOfint()),
    [_lastDigit]: dart.fieldType(core.int)
  }));
  src__hex__decoder._HexDecoderByteSink = class _HexDecoderByteSink extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListOfint()._check(chunk);
      return this.addSlice(chunk, 0, chunk[$length], false);
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      if (start == end) {
        if (dart.test(isLast)) this[_close](chunk, end);
        return;
      }
      let bytes = null;
      let bytesStart = null;
      if (this[_lastDigit] == null) {
        bytes = typed_data.Uint8List.new(((dart.notNull(end) - dart.notNull(start)) / 2)[$truncate]());
        bytesStart = 0;
      } else {
        let hexPairs = ((dart.notNull(end) - dart.notNull(start) - 1) / 2)[$truncate]();
        bytes = typed_data.Uint8List.new(1 + hexPairs);
        bytes[$_set](0, dart.notNull(this[_lastDigit]) + dart.notNull(src__utils.digitForCodeUnit(chunk, start)));
        start = dart.notNull(start) + 1;
        bytesStart = 1;
      }
      this[_lastDigit] = src__hex__decoder._decode(chunk, start, end, bytes, bytesStart);
      this[_sink$].add(bytes);
      if (dart.test(isLast)) this[_close](chunk, end);
    }
    close() {
      return this[_close]();
    }
    [_close](chunk, index) {
      if (chunk === void 0) chunk = null;
      if (index === void 0) index = null;
      if (this[_lastDigit] != null) {
        dart.throw(new core.FormatException.new("Input ended with incomplete encoded byte.", chunk, index));
      }
      this[_sink$].close();
    }
  };
  (src__hex__decoder._HexDecoderByteSink.new = function(sink) {
    this[_lastDigit] = null;
    this[_sink$] = sink;
    src__hex__decoder._HexDecoderByteSink.__proto__.new.call(this);
  }).prototype = src__hex__decoder._HexDecoderByteSink.prototype;
  dart.addTypeTests(src__hex__decoder._HexDecoderByteSink);
  dart.setMethodSignature(src__hex__decoder._HexDecoderByteSink, () => ({
    __proto__: dart.getMethods(src__hex__decoder._HexDecoderByteSink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, []),
    [_close]: dart.fnType(dart.void, [], [core.List$(core.int), core.int])
  }));
  dart.setFieldSignature(src__hex__decoder._HexDecoderByteSink, () => ({
    __proto__: dart.getFields(src__hex__decoder._HexDecoderByteSink.__proto__),
    [_sink$]: dart.finalFieldType(SinkOfListOfint()),
    [_lastDigit]: dart.fieldType(core.int)
  }));
  src__hex__decoder._decode = function(codeUnits, sourceStart, sourceEnd, destination, destinationStart) {
    let destinationIndex = destinationStart;
    for (let i = sourceStart; dart.notNull(i) < dart.notNull(sourceEnd) - 1; i = dart.notNull(i) + 2) {
      let firstDigit = src__utils.digitForCodeUnit(codeUnits, i);
      let secondDigit = src__utils.digitForCodeUnit(codeUnits, dart.notNull(i) + 1);
      destination[$_set]((() => {
        let x = destinationIndex;
        destinationIndex = dart.notNull(x) + 1;
        return x;
      })(), 16 * dart.notNull(firstDigit) + dart.notNull(secondDigit));
    }
    if ((dart.notNull(sourceEnd) - dart.notNull(sourceStart))[$isEven]) return null;
    return 16 * dart.notNull(src__utils.digitForCodeUnit(codeUnits, dart.notNull(sourceEnd) - 1));
  };
  dart.defineLazy(src__hex, {
    /*src__hex.hex*/get hex() {
      return dart.const(new src__hex.HexCodec.__());
    }
  });
  src__hex.HexCodec = class HexCodec extends convert.Codec$(core.List$(core.int), core.String) {
    get encoder() {
      return src__hex__encoder.hexEncoder;
    }
    get decoder() {
      return src__hex__decoder.hexDecoder;
    }
  };
  (src__hex.HexCodec.__ = function() {
    src__hex.HexCodec.__proto__.new.call(this);
  }).prototype = src__hex.HexCodec.prototype;
  dart.addTypeTests(src__hex.HexCodec);
  dart.setGetterSignature(src__hex.HexCodec, () => ({
    __proto__: dart.getGetters(src__hex.HexCodec.__proto__),
    encoder: src__hex__encoder.HexEncoder,
    decoder: src__hex__decoder.HexDecoder
  }));
  const _is__IdentityConverter_default = Symbol('_is__IdentityConverter_default');
  src__identity_codec._IdentityConverter$ = dart.generic(T => {
    class _IdentityConverter extends convert.Converter$(T, T) {
      convert(input) {
        T._check(input);
        return input;
      }
    }
    (_IdentityConverter.new = function() {
      _IdentityConverter.__proto__.new.call(this);
    }).prototype = _IdentityConverter.prototype;
    dart.addTypeTests(_IdentityConverter);
    _IdentityConverter.prototype[_is__IdentityConverter_default] = true;
    dart.setMethodSignature(_IdentityConverter, () => ({
      __proto__: dart.getMethods(_IdentityConverter.__proto__),
      convert: dart.fnType(T, [core.Object])
    }));
    return _IdentityConverter;
  });
  src__identity_codec._IdentityConverter = src__identity_codec._IdentityConverter$();
  dart.addTypeTests(src__identity_codec._IdentityConverter, _is__IdentityConverter_default);
  const _is_IdentityCodec_default = Symbol('_is_IdentityCodec_default');
  src__identity_codec.IdentityCodec$ = dart.generic(T => {
    let _IdentityConverterOfT = () => (_IdentityConverterOfT = dart.constFn(src__identity_codec._IdentityConverter$(T)))();
    class IdentityCodec extends convert.Codec$(T, T) {
      get decoder() {
        return new (_IdentityConverterOfT()).new();
      }
      get encoder() {
        return new (_IdentityConverterOfT()).new();
      }
      fuse(R, other) {
        convert.Codec$(T, R)._check(other);
        return other;
      }
    }
    (IdentityCodec.new = function() {
      IdentityCodec.__proto__.new.call(this);
    }).prototype = IdentityCodec.prototype;
    dart.addTypeTests(IdentityCodec);
    IdentityCodec.prototype[_is_IdentityCodec_default] = true;
    dart.setMethodSignature(IdentityCodec, () => ({
      __proto__: dart.getMethods(IdentityCodec.__proto__),
      fuse: dart.gFnType(R => [convert.Codec$(T, R), [core.Object]])
    }));
    dart.setGetterSignature(IdentityCodec, () => ({
      __proto__: dart.getGetters(IdentityCodec.__proto__),
      decoder: convert.Converter$(T, T),
      encoder: convert.Converter$(T, T)
    }));
    return IdentityCodec;
  });
  src__identity_codec.IdentityCodec = src__identity_codec.IdentityCodec$();
  dart.addTypeTests(src__identity_codec.IdentityCodec, _is_IdentityCodec_default);
  dart.defineLazy(src__percent__encoder, {
    /*src__percent__encoder.percentEncoder*/get percentEncoder() {
      return dart.const(new src__percent__encoder.PercentEncoder.__());
    }
  });
  src__percent__encoder.PercentEncoder = class PercentEncoder extends convert.Converter$(core.List$(core.int), core.String) {
    convert(bytes) {
      ListOfint()._check(bytes);
      return src__percent__encoder._convert(bytes, 0, bytes[$length]);
    }
    startChunkedConversion(sink) {
      SinkOfString()._check(sink);
      return new src__percent__encoder._PercentEncoderSink.new(sink);
    }
  };
  (src__percent__encoder.PercentEncoder.__ = function() {
    src__percent__encoder.PercentEncoder.__proto__.new.call(this);
  }).prototype = src__percent__encoder.PercentEncoder.prototype;
  dart.addTypeTests(src__percent__encoder.PercentEncoder);
  dart.setMethodSignature(src__percent__encoder.PercentEncoder, () => ({
    __proto__: dart.getMethods(src__percent__encoder.PercentEncoder.__proto__),
    convert: dart.fnType(core.String, [core.Object]),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [core.Object])
  }));
  const _sink$0 = Symbol('_sink');
  src__percent__encoder._PercentEncoderSink = class _PercentEncoderSink extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListOfint()._check(chunk);
      this[_sink$0].add(src__percent__encoder._convert(chunk, 0, chunk[$length]));
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      this[_sink$0].add(src__percent__encoder._convert(chunk, start, end));
      if (dart.test(isLast)) this[_sink$0].close();
    }
    close() {
      this[_sink$0].close();
    }
  };
  (src__percent__encoder._PercentEncoderSink.new = function(sink) {
    this[_sink$0] = sink;
    src__percent__encoder._PercentEncoderSink.__proto__.new.call(this);
  }).prototype = src__percent__encoder._PercentEncoderSink.prototype;
  dart.addTypeTests(src__percent__encoder._PercentEncoderSink);
  dart.setMethodSignature(src__percent__encoder._PercentEncoderSink, () => ({
    __proto__: dart.getMethods(src__percent__encoder._PercentEncoderSink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__percent__encoder._PercentEncoderSink, () => ({
    __proto__: dart.getFields(src__percent__encoder._PercentEncoderSink.__proto__),
    [_sink$0]: dart.finalFieldType(SinkOfString())
  }));
  src__percent__encoder._convert = function(bytes, start, end) {
    let buffer = new core.StringBuffer.new();
    let byteOr = 0;
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let byte = bytes[$_get](i);
      byteOr = (byteOr | dart.notNull(byte)) >>> 0;
      let letter = (32 | dart.notNull(byte)) >>> 0;
      if (letter >= 97 && letter <= 122 || dart.notNull(byte) >= 48 && dart.notNull(byte) <= 57 || byte === 45 || byte === 46 || byte === 95 || byte === 126) {
        buffer.writeCharCode(byte);
        continue;
      }
      buffer.writeCharCode(37);
      buffer.writeCharCode(src__percent__encoder._codeUnitForDigit((dart.notNull(byte) & 240) >>> 4));
      buffer.writeCharCode(src__percent__encoder._codeUnitForDigit(dart.notNull(byte) & 15));
    }
    if (byteOr >= 0 && byteOr <= 255) return buffer.toString();
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let byte = bytes[$_get](i);
      if (dart.notNull(byte) >= 0 && dart.notNull(byte) <= 255) continue;
      dart.throw(new core.FormatException.new("Invalid byte " + (dart.notNull(byte) < 0 ? "-" : "") + "0x" + byte[$abs]()[$toRadixString](16) + ".", bytes, i));
    }
    dart.throw("unreachable");
  };
  src__percent__encoder._codeUnitForDigit = function(digit) {
    return dart.notNull(digit) < 10 ? dart.notNull(digit) + 48 : dart.notNull(digit) + 65 - 10;
  };
  dart.defineLazy(src__percent__decoder, {
    /*src__percent__decoder.percentDecoder*/get percentDecoder() {
      return dart.const(new src__percent__decoder.PercentDecoder.__());
    },
    /*src__percent__decoder._lastPercent*/get _lastPercent() {
      return -1;
    }
  });
  src__percent__decoder.PercentDecoder = class PercentDecoder extends convert.Converter$(core.String, core.List$(core.int)) {
    convert(string) {
      core.String._check(string);
      let buffer = new typed_buffers$.Uint8Buffer.new();
      let lastDigit = src__percent__decoder._decode(string[$codeUnits], 0, string.length, buffer);
      if (lastDigit != null) {
        dart.throw(new core.FormatException.new("Input ended with incomplete encoded byte.", string, string.length));
      }
      return buffer.buffer[$asUint8List](0, buffer.length);
    }
    startChunkedConversion(sink) {
      SinkOfListOfint()._check(sink);
      return new src__percent__decoder._PercentDecoderSink.new(sink);
    }
  };
  (src__percent__decoder.PercentDecoder.__ = function() {
    src__percent__decoder.PercentDecoder.__proto__.new.call(this);
  }).prototype = src__percent__decoder.PercentDecoder.prototype;
  dart.addTypeTests(src__percent__decoder.PercentDecoder);
  dart.setMethodSignature(src__percent__decoder.PercentDecoder, () => ({
    __proto__: dart.getMethods(src__percent__decoder.PercentDecoder.__proto__),
    convert: dart.fnType(core.List$(core.int), [core.Object]),
    startChunkedConversion: dart.fnType(convert.StringConversionSink, [core.Object])
  }));
  const _sink$1 = Symbol('_sink');
  const _lastDigit$ = Symbol('_lastDigit');
  const _close$ = Symbol('_close');
  src__percent__decoder._PercentDecoderSink = class _PercentDecoderSink extends convert.StringConversionSinkBase {
    addSlice(string, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, string.length);
      if (start == end) {
        if (dart.test(isLast)) this[_close$](string, end);
        return;
      }
      let buffer = new typed_buffers$.Uint8Buffer.new();
      let codeUnits = string[$codeUnits];
      if (this[_lastDigit$] === -1) {
        this[_lastDigit$] = 16 * dart.notNull(src__utils.digitForCodeUnit(codeUnits, start));
        start = dart.notNull(start) + 1;
        if (start == end) {
          if (dart.test(isLast)) this[_close$](string, end);
          return;
        }
      }
      if (this[_lastDigit$] != null) {
        buffer.add(dart.notNull(this[_lastDigit$]) + dart.notNull(src__utils.digitForCodeUnit(codeUnits, start)));
        start = dart.notNull(start) + 1;
      }
      this[_lastDigit$] = src__percent__decoder._decode(codeUnits, start, end, buffer);
      this[_sink$1].add(buffer.buffer[$asUint8List](0, buffer.length));
      if (dart.test(isLast)) this[_close$](string, end);
    }
    asUtf8Sink(allowMalformed) {
      return new src__percent__decoder._PercentDecoderByteSink.new(this[_sink$1]);
    }
    close() {
      return this[_close$]();
    }
    [_close$](string, index) {
      if (string === void 0) string = null;
      if (index === void 0) index = null;
      if (this[_lastDigit$] != null) {
        dart.throw(new core.FormatException.new("Input ended with incomplete encoded byte.", string, index));
      }
      this[_sink$1].close();
    }
  };
  (src__percent__decoder._PercentDecoderSink.new = function(sink) {
    this[_lastDigit$] = null;
    this[_sink$1] = sink;
  }).prototype = src__percent__decoder._PercentDecoderSink.prototype;
  dart.addTypeTests(src__percent__decoder._PercentDecoderSink);
  dart.setMethodSignature(src__percent__decoder._PercentDecoderSink, () => ({
    __proto__: dart.getMethods(src__percent__decoder._PercentDecoderSink.__proto__),
    addSlice: dart.fnType(dart.void, [core.String, core.int, core.int, core.bool]),
    close: dart.fnType(dart.void, []),
    [_close$]: dart.fnType(dart.void, [], [core.String, core.int])
  }));
  dart.setFieldSignature(src__percent__decoder._PercentDecoderSink, () => ({
    __proto__: dart.getFields(src__percent__decoder._PercentDecoderSink.__proto__),
    [_sink$1]: dart.finalFieldType(SinkOfListOfint()),
    [_lastDigit$]: dart.fieldType(core.int)
  }));
  src__percent__decoder._PercentDecoderByteSink = class _PercentDecoderByteSink extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListOfint()._check(chunk);
      return this.addSlice(chunk, 0, chunk[$length], false);
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      if (start == end) {
        if (dart.test(isLast)) this[_close$](chunk, end);
        return;
      }
      let buffer = new typed_buffers$.Uint8Buffer.new();
      if (this[_lastDigit$] === -1) {
        this[_lastDigit$] = 16 * dart.notNull(src__utils.digitForCodeUnit(chunk, start));
        start = dart.notNull(start) + 1;
        if (start == end) {
          if (dart.test(isLast)) this[_close$](chunk, end);
          return;
        }
      }
      if (this[_lastDigit$] != null) {
        buffer.add(dart.notNull(this[_lastDigit$]) + dart.notNull(src__utils.digitForCodeUnit(chunk, start)));
        start = dart.notNull(start) + 1;
      }
      this[_lastDigit$] = src__percent__decoder._decode(chunk, start, end, buffer);
      this[_sink$1].add(buffer.buffer[$asUint8List](0, buffer.length));
      if (dart.test(isLast)) this[_close$](chunk, end);
    }
    close() {
      return this[_close$]();
    }
    [_close$](chunk, index) {
      if (chunk === void 0) chunk = null;
      if (index === void 0) index = null;
      if (this[_lastDigit$] != null) {
        dart.throw(new core.FormatException.new("Input ended with incomplete encoded byte.", chunk, index));
      }
      this[_sink$1].close();
    }
  };
  (src__percent__decoder._PercentDecoderByteSink.new = function(sink) {
    this[_lastDigit$] = null;
    this[_sink$1] = sink;
    src__percent__decoder._PercentDecoderByteSink.__proto__.new.call(this);
  }).prototype = src__percent__decoder._PercentDecoderByteSink.prototype;
  dart.addTypeTests(src__percent__decoder._PercentDecoderByteSink);
  dart.setMethodSignature(src__percent__decoder._PercentDecoderByteSink, () => ({
    __proto__: dart.getMethods(src__percent__decoder._PercentDecoderByteSink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, []),
    [_close$]: dart.fnType(dart.void, [], [core.List$(core.int), core.int])
  }));
  dart.setFieldSignature(src__percent__decoder._PercentDecoderByteSink, () => ({
    __proto__: dart.getFields(src__percent__decoder._PercentDecoderByteSink.__proto__),
    [_sink$1]: dart.finalFieldType(SinkOfListOfint()),
    [_lastDigit$]: dart.fieldType(core.int)
  }));
  src__percent__decoder._decode = function(codeUnits, start, end, buffer) {
    let codeUnitOr = 0;
    let sliceStart = start;
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let codeUnit = codeUnits[$_get](i);
      if (codeUnits[$_get](i) !== 37) {
        codeUnitOr = (codeUnitOr | dart.notNull(codeUnit)) >>> 0;
        continue;
      }
      if (dart.notNull(i) > dart.notNull(sliceStart)) {
        src__percent__decoder._checkForInvalidCodeUnit(codeUnitOr, codeUnits, sliceStart, i);
        buffer.addAll(codeUnits, sliceStart, i);
      }
      i = dart.notNull(i) + 1;
      if (dart.notNull(i) >= dart.notNull(end)) return -1;
      let firstDigit = src__utils.digitForCodeUnit(codeUnits, i);
      i = dart.notNull(i) + 1;
      if (dart.notNull(i) >= dart.notNull(end)) return 16 * dart.notNull(firstDigit);
      let secondDigit = src__utils.digitForCodeUnit(codeUnits, i);
      buffer.add(16 * dart.notNull(firstDigit) + dart.notNull(secondDigit));
      sliceStart = dart.notNull(i) + 1;
    }
    if (dart.notNull(end) > dart.notNull(sliceStart)) {
      src__percent__decoder._checkForInvalidCodeUnit(codeUnitOr, codeUnits, sliceStart, end);
      if (start == sliceStart) {
        buffer.addAll(codeUnits);
      } else {
        buffer.addAll(codeUnits, sliceStart, end);
      }
    }
    return null;
  };
  src__percent__decoder._checkForInvalidCodeUnit = function(codeUnitOr, codeUnits, start, end) {
    if (dart.notNull(codeUnitOr) >= 0 && dart.notNull(codeUnitOr) <= 127) return;
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let codeUnit = codeUnits[$_get](i);
      if (dart.notNull(codeUnit) >= 0 && dart.notNull(codeUnit) <= 127) continue;
      dart.throw(new core.FormatException.new("Non-ASCII code unit " + ("U+" + codeUnit[$toRadixString](16)[$padLeft](4, "0")), codeUnits, i));
    }
  };
  dart.defineLazy(src__percent, {
    /*src__percent.percent*/get percent() {
      return dart.const(new src__percent.PercentCodec.__());
    }
  });
  src__percent.PercentCodec = class PercentCodec extends convert.Codec$(core.List$(core.int), core.String) {
    get encoder() {
      return src__percent__encoder.percentEncoder;
    }
    get decoder() {
      return src__percent__decoder.percentDecoder;
    }
  };
  (src__percent.PercentCodec.__ = function() {
    src__percent.PercentCodec.__proto__.new.call(this);
  }).prototype = src__percent.PercentCodec.prototype;
  dart.addTypeTests(src__percent.PercentCodec);
  dart.setGetterSignature(src__percent.PercentCodec, () => ({
    __proto__: dart.getGetters(src__percent.PercentCodec.__proto__),
    encoder: src__percent__encoder.PercentEncoder,
    decoder: src__percent__decoder.PercentDecoder
  }));
  const _buffer$ = Symbol('_buffer');
  const _isClosed$0 = Symbol('_isClosed');
  src__string_accumulator_sink.StringAccumulatorSink = class StringAccumulatorSink extends convert.StringConversionSinkBase {
    get string() {
      return dart.toString(this[_buffer$]);
    }
    get isClosed() {
      return this[_isClosed$0];
    }
    clear() {
      this[_buffer$].clear();
    }
    add(chunk) {
      core.String._check(chunk);
      if (dart.test(this[_isClosed$0])) {
        dart.throw(new core.StateError.new("Can't add to a closed sink."));
      }
      this[_buffer$].write(chunk);
    }
    addSlice(chunk, start, end, isLast) {
      if (dart.test(this[_isClosed$0])) {
        dart.throw(new core.StateError.new("Can't add to a closed sink."));
      }
      this[_buffer$].write(chunk[$substring](start, end));
      if (dart.test(isLast)) this[_isClosed$0] = true;
    }
    close() {
      this[_isClosed$0] = true;
    }
  };
  (src__string_accumulator_sink.StringAccumulatorSink.new = function() {
    this[_buffer$] = new core.StringBuffer.new();
    this[_isClosed$0] = false;
  }).prototype = src__string_accumulator_sink.StringAccumulatorSink.prototype;
  dart.addTypeTests(src__string_accumulator_sink.StringAccumulatorSink);
  dart.setMethodSignature(src__string_accumulator_sink.StringAccumulatorSink, () => ({
    __proto__: dart.getMethods(src__string_accumulator_sink.StringAccumulatorSink.__proto__),
    clear: dart.fnType(dart.void, []),
    add: dart.fnType(dart.void, [core.Object]),
    addSlice: dart.fnType(dart.void, [core.String, core.int, core.int, core.bool]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__string_accumulator_sink.StringAccumulatorSink, () => ({
    __proto__: dart.getGetters(src__string_accumulator_sink.StringAccumulatorSink.__proto__),
    string: core.String,
    isClosed: core.bool
  }));
  dart.setFieldSignature(src__string_accumulator_sink.StringAccumulatorSink, () => ({
    __proto__: dart.getFields(src__string_accumulator_sink.StringAccumulatorSink.__proto__),
    [_buffer$]: dart.finalFieldType(core.StringBuffer),
    [_isClosed$0]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/convert/convert.ddc", {
    "package:convert/convert.dart": convert$,
    "package:convert/src/accumulator_sink.dart": src__accumulator_sink,
    "package:convert/src/byte_accumulator_sink.dart": src__byte_accumulator_sink,
    "package:convert/src/hex/encoder.dart": src__hex__encoder,
    "package:convert/src/utils.dart": src__utils,
    "package:convert/src/hex/decoder.dart": src__hex__decoder,
    "package:convert/src/hex.dart": src__hex,
    "package:convert/src/identity_codec.dart": src__identity_codec,
    "package:convert/src/percent/encoder.dart": src__percent__encoder,
    "package:convert/src/percent/decoder.dart": src__percent__decoder,
    "package:convert/src/percent.dart": src__percent,
    "package:convert/src/string_accumulator_sink.dart": src__string_accumulator_sink
  }, '{"version":3,"sourceRoot":"","sources":["src/accumulator_sink.dart","src/byte_accumulator_sink.dart","src/hex/encoder.dart","src/utils.dart","src/hex/decoder.dart","src/hex.dart","src/identity_codec.dart","src/percent/encoder.dart","src/percent/decoder.dart","src/percent.dart","src/string_accumulator_sink.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;cAWwB,KAAI,+BAAoB,CAAC,aAAO;MAAC;;cAIlC,gBAAS;;;AAO5B,qBAAO,QAAM;MACf;UAES,KAAO;iBAAL;AACT,sBAAI,eAAS,GAAE;AACb,qBAAM,IAAI,mBAAU,CAAC;;AAGvB,qBAAO,MAAI,CAAC,KAAK;MACnB;;AAGE,uBAAS,GAAG;MACd;;;MAvBM,aAAO,GAAG;MAIZ,eAAS,GAAG;IAoBlB;;;;;;;;;;;;;;;;;;;;;;;;;;;;YCnByB,AAAI,0BAAc,CAAC,aAAO,OAAO,EAAE,GAAG,aAAO,OAAO;IAAC;;YAKvD,iBAAS;;;AAO5B,mBAAO,MAAM;IACf;QAES,KAAe;yBAAL;AACjB,oBAAI,gBAAS,GAAE;AACb,mBAAM,IAAI,mBAAU,CAAC;;AAGvB,mBAAO,OAAO,CAAC,KAAK;IACtB;aAEc,KAAe,EAAE,KAAS,EAAE,GAAO,EAAE,MAAW;AAC5D,oBAAI,gBAAS,GAAE;AACb,mBAAM,IAAI,mBAAU,CAAC;;AAGvB,mBAAO,OAAO,CAAC,KAAK,EAAE,KAAK,EAAE,GAAG;AAChC,oBAAI,MAAM,GAAE,gBAAS,GAAG;IAC1B;;AAGE,sBAAS,GAAG;IACd;;;IAhCM,aAAO,GAAG,IAAI,8BAAW;IAI3B,gBAAS,GAAG;;EA6BlB;;;;;;;;;;;;;;;;;;;MCxCM,4BAAU;YAAG,gBAAM,+BAAY;;;;YASpB,KAAe;yBAAL;YAAU,2BAAQ,CAAC,KAAK,EAAE,GAAG,KAAK,SAAO;IAAC;2BAEzB,IAAiB;4BAAJ;YACnD,KAAI,qCAAe,CAAC,IAAI;IAAC;;;;EALT;;;;;;;;;QAeX,KAAe;yBAAL;AACjB,iBAAK,IAAI,CAAC,0BAAQ,CAAC,KAAK,EAAE,GAAG,KAAK,SAAO;IAC3C;aAEc,KAAe,EAAE,KAAS,EAAE,GAAO,EAAE,MAAW;AAC5D,qBAAU,gBAAgB,CAAC,KAAK,EAAE,GAAG,EAAE,KAAK,SAAO;AACnD,iBAAK,IAAI,CAAC,0BAAQ,CAAC,KAAK,EAAE,KAAK,EAAE,GAAG;AACpC,oBAAI,MAAM,GAAE,WAAK,MAAM;IACzB;;AAGE,iBAAK,MAAM;IACb;;;IAdqB,WAAK;;EAAC;;;;;;;;;;;wCAiBb,KAAe,EAAE,KAAS,EAAE,GAAO;AAIjD,QAAI,SAAS,AAAI,wBAAS,CAAe,CAAT,aAAJ,GAAG,iBAAG,KAAK,KAAI;AAC3C,QAAI,cAAc;AAKlB,QAAI,SAAS;AACb,aAAS,IAAI,KAAK,EAAI,aAAF,CAAC,iBAAG,GAAG,GAAE,CAAC,gBAAD,CAAC,IA5DhC,GA4DoC;AAChC,UAAI,OAAO,KAAK,QAAC,CAAC;AAClB,YAAM,GAAN,CA9DJ,AA8DI,MAAM,gBAAI,IAAI;AAKd,YAAM,QAAC,WAAW,IAAM,mCAAiB,CAAe,CAAR,aAAL,IAAI,IAAG,SAAS;AAC3D,YAAM,QAAC,WAAW,IAAM,mCAAiB,CAAM,aAAL,IAAI,IAAG;;AAGnD,QAAI,AAAO,MAAD,IAAI,KAAK,AAAO,MAAD,IAAI,KAAK,MAAO,AAAI,0BAAoB,CAAC,MAAM;AAGxE,aAAS,IAAI,KAAK,EAAI,aAAF,CAAC,iBAAG,GAAG,GAAE,CAAC,gBAAD,CAAC,IA1EhC,GA0EoC;AAChC,UAAI,OAAO,KAAK,QAAC,CAAC;AAClB,UAAS,aAAL,IAAI,KAAI,KAAU,aAAL,IAAI,KAAI,KAAM;AAC/B,iBAAM,IAAI,wBAAe,CACrB,mBAAgB,AAAK,aAAL,IAAI,IAAG,IAAI,MAAM,aAAO,IAAI,MAAI,kBAAgB,CAAC,WACjE,KAAK,EACL,CAAC;;AAGP,eAAM;EACR;iDAIsB,KAAS;UAAK,AAAM,cAAN,KAAK,IAAG,KAAW,aAAN,KAAK,IAAG,EAAE,GAAS,AAAK,aAAX,KAAK,IAAG,EAAE,GAAG;EAAE;yCC5ExD,SAAmB,EAAE,KAAS;AAQjD,QAAI,WAAW,SAAS,QAAC,KAAK;AAC9B,QAAI,QAAQ,CAAA,AAAG,EAAD,gBAAG,QAAQ;AACzB,QAAI,AAAM,KAAD,IAAI,GAAG;AACd,UAAI,AAAM,KAAD,IAAI,GAAG,MAAO,MAAK;WACvB;AAKL,UAAI,SAAS,CAAA,AAAK,kBAAE,QAAQ;AAC5B,UAAI,AAAG,EAAD,IAAI,MAAM,IAAI,AAAO,MAAD,IAAI,GAAE,EAAE,MAAO,AAAO,AAAK,OAAN,GAAG,EAAE,GAAG;;AAGzD,eAAM,IAAI,wBAAe,CACrB,oCACA,OAAK,QAAQ,gBAAc,CAAC,aAAW,CAAC,GAAG,aAC3C,SAAS,EACT,KAAK;EACX;;MC1BM,4BAAU;YAAG,gBAAM,+BAAY;;;;YAUjB,MAAa;yBAAN;AACvB,WAAK,MAAM,OAAO,SAAO,EAAE;AACzB,mBAAM,IAAI,wBAAe,CACrB,uCAAuC,MAAM,EAAE,MAAM,OAAO;;AAGlE,UAAI,QAAQ,AAAI,wBAAS,CAAe,CA5B5C,AA4B8B,MAAM,OAAO,GAAI;AAC3C,+BAAO,CAAC,MAAM,YAAU,EAAE,GAAG,MAAM,OAAO,EAAE,KAAK,EAAE;AACnD,YAAO,MAAK;IACd;2BAE4C,IAAoB;+BAAJ;YACxD,KAAI,qCAAe,CAAC,IAAI;IAAC;;;;EAdT;;;;;;;;;;;aA+BN,MAAa,EAAE,KAAS,EAAE,GAAO,EAAE,MAAW;AAC1D,qBAAU,gBAAgB,CAAC,KAAK,EAAE,GAAG,EAAE,MAAM,OAAO;AAEpD,UAAI,KAAK,IAAI,GAAG,EAAE;AAChB,sBAAI,MAAM,GAAE,YAAM,CAAC,MAAM,EAAE,GAAG;AAC9B;;AAGF,UAAI,YAAY,MAAM,YAAU;AAChC,UAAU;AACV,UAAI;AACJ,UAAI,gBAAU,IAAI,MAAM;AACtB,aAAK,GAAG,AAAI,wBAAS,CAAe,CA/D1C,CA+DiC,aAAJ,GAAG,iBAAG,KAAK,KAAK;AACvC,kBAAU,GAAG;aACR;AACL,YAAI,WAA6B,CAlEvC,CAkE0B,AAAQ,aAAZ,GAAG,iBAAG,KAAK,IAAG,KAAM;AACpC,aAAK,GAAG,AAAI,wBAAS,CAAC,AAAE,IAAE,QAAQ;AAClC,aAAK,QAAC,GAAgB,aAAX,gBAAU,iBAAG,2BAAgB,CAAC,SAAS,EAAE,KAAK;AACzD,aAAK,gBAAL,KAAK,IArEX;AAsEM,kBAAU,GAAG;;AAGf,sBAAU,GAAG,yBAAO,CAAC,SAAS,EAAE,KAAK,EAAE,GAAG,EAAE,KAAK,EAAE,UAAU;AAE7D,kBAAK,IAAI,CAAC,KAAK;AACf,oBAAI,MAAM,GAAE,YAAM,CAAC,MAAM,EAAE,GAAG;IAChC;eAE8B,cAAmB;YAC7C,KAAI,yCAAmB,CAAC,YAAK;IAAC;;YAElB,aAAM;IAAE;aAIX,MAAa,EAAE,KAAS;6BAAjB;4BAAY;AAC9B,UAAI,gBAAU,IAAI,MAAM;AACtB,mBAAM,IAAI,wBAAe,CACrB,6CAA6C,MAAM,EAAE,KAAK;;AAGhE,kBAAK,MAAM;IACb;;;IA9CI,gBAAU;IAEO,YAAK;EAAC;;;;;;;;;;;;;;QA6DlB,KAAe;yBAAL;YAAU,cAAQ,CAAC,KAAK,EAAE,GAAG,KAAK,SAAO,EAAE;IAAM;aAEtD,KAAe,EAAE,KAAS,EAAE,GAAO,EAAE,MAAW;AAC5D,qBAAU,gBAAgB,CAAC,KAAK,EAAE,GAAG,EAAE,KAAK,SAAO;AAEnD,UAAI,KAAK,IAAI,GAAG,EAAE;AAChB,sBAAI,MAAM,GAAE,YAAM,CAAC,KAAK,EAAE,GAAG;AAC7B;;AAGF,UAAU;AACV,UAAI;AACJ,UAAI,gBAAU,IAAI,MAAM;AACtB,aAAK,GAAG,AAAI,wBAAS,CAAe,CA3H1C,CA2HiC,aAAJ,GAAG,iBAAG,KAAK,KAAK;AACvC,kBAAU,GAAG;aACR;AACL,YAAI,WAA6B,CA9HvC,CA8H0B,AAAQ,aAAZ,GAAG,iBAAG,KAAK,IAAG,KAAM;AACpC,aAAK,GAAG,AAAI,wBAAS,CAAC,AAAE,IAAE,QAAQ;AAClC,aAAK,QAAC,GAAgB,aAAX,gBAAU,iBAAG,2BAAgB,CAAC,KAAK,EAAE,KAAK;AACrD,aAAK,gBAAL,KAAK,IAjIX;AAkIM,kBAAU,GAAG;;AAGf,sBAAU,GAAG,yBAAO,CAAC,KAAK,EAAE,KAAK,EAAE,GAAG,EAAE,KAAK,EAAE,UAAU;AAEzD,kBAAK,IAAI,CAAC,KAAK;AACf,oBAAI,MAAM,GAAE,YAAM,CAAC,KAAK,EAAE,GAAG;IAC/B;;YAEgB,aAAM;IAAE;aAIX,KAAe,EAAE,KAAS;4BAAhB;4BAAW;AAChC,UAAI,gBAAU,IAAI,MAAM;AACtB,mBAAM,IAAI,wBAAe,CACrB,6CAA6C,KAAK,EAAE,KAAK;;AAG/D,kBAAK,MAAM;IACb;;;IA5CI,gBAAU;IAEW,YAAK;;EAAC;;;;;;;;;;;;;uCAoDrB,SAAmB,EAAE,WAAe,EAAE,SAAa,EAC3D,WAAqB,EAAE,gBAAoB;AAC7C,QAAI,mBAAmB,gBAAgB;AACvC,aAAS,IAAI,WAAW,EAAI,aAAF,CAAC,IAAa,aAAV,SAAS,IAAG,GAAG,CAAC,GAnKhD,aAmK+C,CAAC,IAAI,GAAG;AACnD,UAAI,aAAa,2BAAgB,CAAC,SAAS,EAAE,CAAC;AAC9C,UAAI,cAAc,2BAAgB,CAAC,SAAS,EAAI,aAAF,CAAC,IAAG;AAClD,iBAAW;gBAAC,gBAAgB;QAAhB,gBAAgB,qBAtKhC;;YAsKsC,AAAG,AAAa,kBAAX,UAAU,iBAAG,WAAW;;AAGjE,SAAe,aAAV,SAAS,iBAAG,WAAW,WAAQ,EAAE,MAAO;AAC7C,UAAO,AAAG,mBAAE,2BAAgB,CAAC,SAAS,EAAY,aAAV,SAAS,IAAG;EACtD;;MC5JM,YAAG;YAAG,gBAAM,oBAAU;;;;;YASA,6BAAU;;;YACV,6BAAU;;;;;EAElB;;;;;;;;;;cCvBR,KAAO;iBAAL;cAAU,MAAK;;;;;IADP;;;;;;;;;;;;;;;;cAgBW,KAAI,6BAAqB;MAAE;;cAC3B,KAAI,6BAAqB;MAAE;cAMtC,KAAiB;oCAAL;cAAU,MAAK;;;;;IAT1B;;;;;;;;;;;;;;;;;MCNjB,oCAAc;YAAG,gBAAM,uCAAgB;;;;YAa5B,KAAe;yBAAL;YAAU,+BAAQ,CAAC,KAAK,EAAE,GAAG,KAAK,SAAO;IAAC;2BAEzB,IAAiB;4BAAJ;YACnD,KAAI,6CAAmB,CAAC,IAAI;IAAC;;;;EALT;;;;;;;;;QAef,KAAe;yBAAL;AACjB,mBAAK,IAAI,CAAC,8BAAQ,CAAC,KAAK,EAAE,GAAG,KAAK,SAAO;IAC3C;aAEc,KAAe,EAAE,KAAS,EAAE,GAAO,EAAE,MAAW;AAC5D,qBAAU,gBAAgB,CAAC,KAAK,EAAE,GAAG,EAAE,KAAK,SAAO;AACnD,mBAAK,IAAI,CAAC,8BAAQ,CAAC,KAAK,EAAE,KAAK,EAAE,GAAG;AACpC,oBAAI,MAAM,GAAE,aAAK,MAAM;IACzB;;AAGE,mBAAK,MAAM;IACb;;;IAdyB,aAAK;;EAAC;;;;;;;;;;;4CAiBjB,KAAe,EAAE,KAAS,EAAE,GAAO;AACjD,QAAI,SAAS,IAAI,qBAAY;AAK7B,QAAI,SAAS;AACb,aAAS,IAAI,KAAK,EAAI,aAAF,CAAC,iBAAG,GAAG,GAAE,CAAC,gBAAD,CAAC,IA3DhC,GA2DoC;AAChC,UAAI,OAAO,KAAK,QAAC,CAAC;AAClB,YAAM,GAAN,CA7DJ,AA6DI,MAAM,gBAAI,IAAI;AAMd,UAAI,SAAS,CAAA,AAAK,kBAAE,IAAI;AACxB,UAAK,AAAO,MAAD,IAAI,EAAE,IAAI,AAAO,MAAD,IAAI,GAAE,IACvB,aAAL,IAAI,KAAI,EAAE,IAAS,aAAL,IAAI,KAAI,EAAE,IACzB,IAAI,KAAI,EAAK,IACb,IAAI,KAAI,EAAI,IACZ,IAAI,KAAI,EAAW,IACnB,IAAI,KAAI,GAAM,EAAE;AAElB,cAAM,cAAc,CAAC,IAAI;AACzB;;AAGF,YAAM,cAAc,CAAC,EAAQ;AAK7B,YAAM,cAAc,CAAC,uCAAiB,CAAe,CAAR,aAAL,IAAI,IAAG,SAAS;AACxD,YAAM,cAAc,CAAC,uCAAiB,CAAM,aAAL,IAAI,IAAG;;AAGhD,QAAI,AAAO,MAAD,IAAI,KAAK,AAAO,MAAD,IAAI,KAAK,MAAO,OAAM,SAAS;AAGxD,aAAS,IAAI,KAAK,EAAI,aAAF,CAAC,iBAAG,GAAG,GAAE,CAAC,gBAAD,CAAC,IA3FhC,GA2FoC;AAChC,UAAI,OAAO,KAAK,QAAC,CAAC;AAClB,UAAS,aAAL,IAAI,KAAI,KAAU,aAAL,IAAI,KAAI,KAAM;AAC/B,iBAAM,IAAI,wBAAe,CACrB,mBAAgB,AAAK,aAAL,IAAI,IAAG,IAAI,MAAM,aAAO,IAAI,MAAI,kBAAgB,CAAC,WACjE,KAAK,EACL,CAAC;;AAGP,eAAM;EACR;qDAIsB,KAAS;UAAK,AAAM,cAAN,KAAK,IAAG,KAAW,aAAN,KAAK,IAAG,EAAE,GAAS,AAAK,aAAX,KAAK,IAAG,EAAE,GAAG;EAAE;;MC3FvE,oCAAc;YAAG,gBAAM,uCAAgB;;MAEvC,kCAAY;YAAG,EAAC;;;;YAcF,MAAa;yBAAN;AACvB,UAAI,SAAS,IAAI,8BAAW;AAC5B,UAAI,YAAY,6BAAO,CAAC,MAAM,YAAU,EAAE,GAAG,MAAM,OAAO,EAAE,MAAM;AAElE,UAAI,SAAS,IAAI,MAAM;AACrB,mBAAM,IAAI,wBAAe,CACrB,6CAA6C,MAAM,EAAE,MAAM,OAAO;;AAGxE,YAAO,OAAM,OAAO,cAAY,CAAC,GAAG,MAAM,OAAO;IACnD;2BAE4C,IAAoB;+BAAJ;YACxD,KAAI,6CAAmB,CAAC,IAAI;IAAC;;;;EAfT;;;;;;;;;;;aAkCV,MAAa,EAAE,KAAS,EAAE,GAAO,EAAE,MAAW;AAC1D,qBAAU,gBAAgB,CAAC,KAAK,EAAE,GAAG,EAAE,MAAM,OAAO;AAEpD,UAAI,KAAK,IAAI,GAAG,EAAE;AAChB,sBAAI,MAAM,GAAE,aAAM,CAAC,MAAM,EAAE,GAAG;AAC9B;;AAGF,UAAI,SAAS,IAAI,8BAAW;AAC5B,UAAI,YAAY,MAAM,YAAU;AAChC,UAAI,iBAAU,KAAI,EAAY,EAAE;AAC9B,yBAAU,GAAG,AAAG,kBAAE,2BAAgB,CAAC,SAAS,EAAE,KAAK;AACnD,aAAK,gBAAL,KAAK,IA1EX;AA4EM,YAAI,KAAK,IAAI,GAAG,EAAE;AAChB,wBAAI,MAAM,GAAE,aAAM,CAAC,MAAM,EAAE,GAAG;AAC9B;;;AAIJ,UAAI,iBAAU,IAAI,MAAM;AACtB,cAAM,IAAI,CAAY,aAAX,iBAAU,iBAAG,2BAAgB,CAAC,SAAS,EAAE,KAAK;AACzD,aAAK,gBAAL,KAAK,IApFX;;AAuFI,uBAAU,GAAG,6BAAO,CAAC,SAAS,EAAE,KAAK,EAAE,GAAG,EAAE,MAAM;AAElD,mBAAK,IAAI,CAAC,MAAM,OAAO,cAAY,CAAC,GAAG,MAAM,OAAO;AACpD,oBAAI,MAAM,GAAE,aAAM,CAAC,MAAM,EAAE,GAAG;IAChC;eAE8B,cAAmB;YAC7C,KAAI,iDAAuB,CAAC,aAAK;IAAC;;YAEtB,cAAM;IAAE;cAIX,MAAa,EAAE,KAAS;6BAAjB;4BAAY;AAC9B,UAAI,iBAAU,IAAI,MAAM;AACtB,mBAAM,IAAI,wBAAe,CACrB,6CAA6C,MAAM,EAAE,KAAK;;AAGhE,mBAAK,MAAM;IACb;;;IAjDI,iBAAU;IAEW,aAAK;EAAC;;;;;;;;;;;;;;QAkEtB,KAAe;yBAAL;YAAU,cAAQ,CAAC,KAAK,EAAE,GAAG,KAAK,SAAO,EAAE;IAAM;aAEtD,KAAe,EAAE,KAAS,EAAE,GAAO,EAAE,MAAW;AAC5D,qBAAU,gBAAgB,CAAC,KAAK,EAAE,GAAG,EAAE,KAAK,SAAO;AAEnD,UAAI,KAAK,IAAI,GAAG,EAAE;AAChB,sBAAI,MAAM,GAAE,aAAM,CAAC,KAAK,EAAE,GAAG;AAC7B;;AAGF,UAAI,SAAS,IAAI,8BAAW;AAC5B,UAAI,iBAAU,KAAI,EAAY,EAAE;AAC9B,yBAAU,GAAG,AAAG,kBAAE,2BAAgB,CAAC,KAAK,EAAE,KAAK;AAC/C,aAAK,gBAAL,KAAK,IA3IX;AA6IM,YAAI,KAAK,IAAI,GAAG,EAAE;AAChB,wBAAI,MAAM,GAAE,aAAM,CAAC,KAAK,EAAE,GAAG;AAC7B;;;AAIJ,UAAI,iBAAU,IAAI,MAAM;AACtB,cAAM,IAAI,CAAY,aAAX,iBAAU,iBAAG,2BAAgB,CAAC,KAAK,EAAE,KAAK;AACrD,aAAK,gBAAL,KAAK,IArJX;;AAwJI,uBAAU,GAAG,6BAAO,CAAC,KAAK,EAAE,KAAK,EAAE,GAAG,EAAE,MAAM;AAE9C,mBAAK,IAAI,CAAC,MAAM,OAAO,cAAY,CAAC,GAAG,MAAM,OAAO;AACpD,oBAAI,MAAM,GAAE,aAAM,CAAC,KAAK,EAAE,GAAG;IAC/B;;YAEgB,cAAM;IAAE;cAIX,KAAe,EAAE,KAAS;4BAAhB;4BAAW;AAChC,UAAI,iBAAU,IAAI,MAAM;AACtB,mBAAM,IAAI,wBAAe,CACrB,6CAA6C,KAAK,EAAE,KAAK;;AAG/D,mBAAK,MAAM;IACb;;;IA/CI,iBAAU;IAEe,aAAK;;EAAC;;;;;;;;;;;;;2CAuDzB,SAAmB,EAAE,KAAS,EAAE,GAAO,EAAE,MAAkB;AAIrE,QAAI,aAAa;AAIjB,QAAI,aAAa,KAAK;AACtB,aAAS,IAAI,KAAK,EAAI,aAAF,CAAC,iBAAG,GAAG,GAAE,CAAC,gBAAD,CAAC,IA5LhC,GA4LoC;AAEhC,UAAI,WAAW,SAAS,QAAC,CAAC;AAC1B,UAAI,SAAS,QAAC,CAAC,MAAK,EAAQ,EAAE;AAC5B,kBAAU,GAAV,CAhMN,AAgMM,UAAU,gBAAI,QAAQ;AACtB;;AAKF,UAAM,aAAF,CAAC,iBAAG,UAAU,GAAE;AAClB,sDAAwB,CAAC,UAAU,EAAE,SAAS,EAAE,UAAU,EAAE,CAAC;AAC7D,cAAM,OAAO,CAAC,SAAS,EAAE,UAAU,EAAE,CAAC;;AAIxC,OAAC,gBAAD,CAAC,IA5ML;AA6MI,UAAM,aAAF,CAAC,kBAAI,GAAG,GAAE,MAAO,GAAY;AAEjC,UAAI,aAAa,2BAAgB,CAAC,SAAS,EAAE,CAAC;AAC9C,OAAC,gBAAD,CAAC,IAhNL;AAiNI,UAAM,aAAF,CAAC,kBAAI,GAAG,GAAE,MAAO,AAAG,mBAAE,UAAU;AAEpC,UAAI,cAAc,2BAAgB,CAAC,SAAS,EAAE,CAAC;AAC/C,YAAM,IAAI,CAAC,AAAG,AAAa,kBAAX,UAAU,iBAAG,WAAW;AAGxC,gBAAU,GAAK,aAAF,CAAC,IAAG;;AAGnB,QAAQ,aAAJ,GAAG,iBAAG,UAAU,GAAE;AACpB,oDAAwB,CAAC,UAAU,EAAE,SAAS,EAAE,UAAU,EAAE,GAAG;AAC/D,UAAI,KAAK,IAAI,UAAU,EAAE;AACvB,cAAM,OAAO,CAAC,SAAS;aAClB;AACL,cAAM,OAAO,CAAC,SAAS,EAAE,UAAU,EAAE,GAAG;;;AAI5C,UAAO;EACT;4DAGI,UAAc,EAAE,SAAmB,EAAE,KAAS,EAAE,GAAO;AACzD,QAAe,aAAX,UAAU,KAAI,KAAgB,aAAX,UAAU,KAAI,KAAM;AAE3C,aAAS,IAAI,KAAK,EAAI,aAAF,CAAC,iBAAG,GAAG,GAAE,CAAC,gBAAD,CAAC,IA1OhC,GA0OoC;AAChC,UAAI,WAAW,SAAS,QAAC,CAAC;AAC1B,UAAa,aAAT,QAAQ,KAAI,KAAc,aAAT,QAAQ,KAAI,KAAM;AACvC,iBAAM,IAAI,wBAAe,CACrB,0BACA,OAAK,QAAQ,gBAAc,CAAC,aAAW,CAAC,GAAG,OAC3C,SAAS,EACT,CAAC;;EAET;;MCpOM,oBAAO;YAAG,gBAAM,4BAAc;;;;;YAkBJ,qCAAc;;;YACd,qCAAc;;;;;EAEtB;;;;;;;;;;;2BCzBD,cAAO;IAAW;;YAIlB,kBAAS;;;AAO5B,oBAAO,MAAM;IACf;QAES,KAAY;yBAAL;AACd,oBAAI,iBAAS,GAAE;AACb,mBAAM,IAAI,mBAAU,CAAC;;AAGvB,oBAAO,MAAM,CAAC,KAAK;IACrB;aAEc,KAAY,EAAE,KAAS,EAAE,GAAO,EAAE,MAAW;AACzD,oBAAI,iBAAS,GAAE;AACb,mBAAM,IAAI,mBAAU,CAAC;;AAGvB,oBAAO,MAAM,CAAC,KAAK,YAAU,CAAC,KAAK,EAAE,GAAG;AACxC,oBAAI,MAAM,GAAE,iBAAS,GAAG;IAC1B;;AAGE,uBAAS,GAAG;IACd;;;IAhCM,cAAO,GAAG,IAAI,qBAAY;IAI5B,iBAAS,GAAG;EA6BlB","file":"convert.ddc.js"}');
  // Exports:
  return {
    convert: convert$,
    src__accumulator_sink: src__accumulator_sink,
    src__byte_accumulator_sink: src__byte_accumulator_sink,
    src__hex__encoder: src__hex__encoder,
    src__utils: src__utils,
    src__hex__decoder: src__hex__decoder,
    src__hex: src__hex,
    src__identity_codec: src__identity_codec,
    src__percent__encoder: src__percent__encoder,
    src__percent__decoder: src__percent__decoder,
    src__percent: src__percent,
    src__string_accumulator_sink: src__string_accumulator_sink
  };
});

//# sourceMappingURL=convert.ddc.js.map
