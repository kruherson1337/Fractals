define(['dart_sdk', 'packages/collection/src/comparators', 'packages/convert/convert', 'packages/typed_data/typed_buffers'], function(dart_sdk, comparators, convert, typed_buffers) {
  'use strict';
  const core = dart_sdk.core;
  const convert$ = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__equality = comparators.src__equality;
  const src__hex = convert.src__hex;
  const typed_buffers$ = typed_buffers.typed_buffers;
  const _root = Object.create(null);
  const crypto = Object.create(_root);
  const src__digest = Object.create(_root);
  const src__digest_sink = Object.create(_root);
  const src__hash = Object.create(_root);
  const src__hmac = Object.create(_root);
  const src__utils = Object.create(_root);
  const src__hash_sink = Object.create(_root);
  const src__md5 = Object.create(_root);
  const src__sha1 = Object.create(_root);
  const src__sha256 = Object.create(_root);
  const $_equals = dartx._equals;
  const $length = dartx.length;
  const $setRange = dartx.setRange;
  const $_set = dartx._set;
  const $_get = dartx._get;
  const $leftShift = dartx['<<'];
  const $rightShift = dartx['>>'];
  const $asUint8List = dartx.asUint8List;
  const $buffer = dartx.buffer;
  const $lengthInBytes = dartx.lengthInBytes;
  const $asByteData = dartx.asByteData;
  const $setUint32 = dartx.setUint32;
  const $truncate = dartx.truncate;
  const $getUint32 = dartx.getUint32;
  const $modulo = dartx['%'];
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let SinkOfDigest = () => (SinkOfDigest = dart.constFn(core.Sink$(src__digest.Digest)))();
  let SinkOfListOfint = () => (SinkOfListOfint = dart.constFn(core.Sink$(ListOfint())))();
  let const$;
  let const$0;
  src__digest.Digest = class Digest extends core.Object {
    get bytes() {
      return this[bytes$];
    }
    set bytes(value) {
      super.bytes = value;
    }
    _equals(other) {
      if (other == null) return false;
      return src__digest.Digest.is(other) && dart.test((const$ || (const$ = dart.const(new src__equality.ListEquality.new()))).equals(this.bytes, other.bytes));
    }
    get hashCode() {
      return (const$0 || (const$0 = dart.const(new src__equality.ListEquality.new()))).hash(this.bytes);
    }
    toString() {
      return src__hex.hex.encode(this.bytes);
    }
  };
  (src__digest.Digest.new = function(bytes) {
    this[bytes$] = bytes;
  }).prototype = src__digest.Digest.prototype;
  dart.addTypeTests(src__digest.Digest);
  const bytes$ = Symbol("Digest.bytes");
  dart.setMethodSignature(src__digest.Digest, () => ({
    __proto__: dart.getMethods(src__digest.Digest.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setFieldSignature(src__digest.Digest, () => ({
    __proto__: dart.getFields(src__digest.Digest.__proto__),
    bytes: dart.finalFieldType(ListOfint())
  }));
  dart.defineExtensionMethods(src__digest.Digest, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__digest.Digest, ['hashCode']);
  const _value = Symbol('_value');
  src__digest_sink.DigestSink = class DigestSink extends core.Sink$(src__digest.Digest) {
    get value() {
      if (!(this[_value] != null)) dart.assertFailed();
      return this[_value];
    }
    add(value) {
      src__digest.Digest._check(value);
      if (!(this[_value] == null)) dart.assertFailed();
      this[_value] = value;
    }
    close() {
      if (!(this[_value] != null)) dart.assertFailed();
    }
  };
  (src__digest_sink.DigestSink.new = function() {
    this[_value] = null;
  }).prototype = src__digest_sink.DigestSink.prototype;
  dart.addTypeTests(src__digest_sink.DigestSink);
  dart.setMethodSignature(src__digest_sink.DigestSink, () => ({
    __proto__: dart.getMethods(src__digest_sink.DigestSink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__digest_sink.DigestSink, () => ({
    __proto__: dart.getGetters(src__digest_sink.DigestSink.__proto__),
    value: src__digest.Digest
  }));
  dart.setFieldSignature(src__digest_sink.DigestSink, () => ({
    __proto__: dart.getFields(src__digest_sink.DigestSink.__proto__),
    [_value]: dart.fieldType(src__digest.Digest)
  }));
  src__hash.Hash = class Hash extends convert$.Converter$(core.List$(core.int), src__digest.Digest) {
    convert(data) {
      ListOfint()._check(data);
      let innerSink = new src__digest_sink.DigestSink.new();
      let outerSink = this.startChunkedConversion(innerSink);
      outerSink.add(data);
      outerSink.close();
      return innerSink.value;
    }
  };
  (src__hash.Hash.new = function() {
    src__hash.Hash.__proto__.new.call(this);
  }).prototype = src__hash.Hash.prototype;
  dart.addTypeTests(src__hash.Hash);
  dart.setMethodSignature(src__hash.Hash, () => ({
    __proto__: dart.getMethods(src__hash.Hash.__proto__),
    convert: dart.fnType(src__digest.Digest, [core.Object])
  }));
  const _hash = Symbol('_hash');
  const _key = Symbol('_key');
  src__hmac.Hmac = class Hmac extends convert$.Converter$(core.List$(core.int), src__digest.Digest) {
    convert(data) {
      ListOfint()._check(data);
      let innerSink = new src__digest_sink.DigestSink.new();
      let outerSink = this.startChunkedConversion(innerSink);
      outerSink.add(data);
      outerSink.close();
      return innerSink.value;
    }
    startChunkedConversion(sink) {
      SinkOfDigest()._check(sink);
      return new src__hmac._HmacSink.new(sink, this[_hash], this[_key]);
    }
  };
  (src__hmac.Hmac.new = function(hash, key) {
    this[_hash] = hash;
    this[_key] = typed_data.Uint8List.new(hash.blockSize);
    src__hmac.Hmac.__proto__.new.call(this);
    if (dart.notNull(key[$length]) > dart.notNull(this[_hash].blockSize)) key = this[_hash].convert(key).bytes;
    this[_key][$setRange](0, key[$length], key);
  }).prototype = src__hmac.Hmac.prototype;
  dart.addTypeTests(src__hmac.Hmac);
  dart.setMethodSignature(src__hmac.Hmac, () => ({
    __proto__: dart.getMethods(src__hmac.Hmac.__proto__),
    convert: dart.fnType(src__digest.Digest, [core.Object]),
    startChunkedConversion: dart.fnType(convert$.ByteConversionSink, [core.Object])
  }));
  dart.setFieldSignature(src__hmac.Hmac, () => ({
    __proto__: dart.getFields(src__hmac.Hmac.__proto__),
    [_hash]: dart.finalFieldType(src__hash.Hash),
    [_key]: dart.finalFieldType(typed_data.Uint8List)
  }));
  const _outerSink = Symbol('_outerSink');
  const _innerResultSink = Symbol('_innerResultSink');
  const _innerSink = Symbol('_innerSink');
  const _isClosed = Symbol('_isClosed');
  src__hmac._HmacSink = class _HmacSink extends convert$.ByteConversionSink {
    add(data) {
      ListOfint()._check(data);
      if (dart.test(this[_isClosed])) dart.throw(new core.StateError.new("HMAC is closed"));
      this[_innerSink].add(data);
    }
    addSlice(data, start, end, isLast) {
      if (dart.test(this[_isClosed])) dart.throw(new core.StateError.new("HMAC is closed"));
      this[_innerSink].addSlice(data, start, end, isLast);
    }
    close() {
      if (dart.test(this[_isClosed])) return;
      this[_isClosed] = true;
      this[_innerSink].close();
      this[_outerSink].add(this[_innerResultSink].value.bytes);
      this[_outerSink].close();
    }
  };
  (src__hmac._HmacSink.new = function(sink, hash, key) {
    this[_innerResultSink] = new src__digest_sink.DigestSink.new();
    this[_innerSink] = null;
    this[_isClosed] = false;
    this[_outerSink] = hash.startChunkedConversion(sink);
    src__hmac._HmacSink.__proto__.new.call(this);
    this[_innerSink] = hash.startChunkedConversion(this[_innerResultSink]);
    let padding = typed_data.Uint8List.new(key[$length]);
    for (let i = 0; i < dart.notNull(padding[$length]); i++) {
      padding[$_set](i, (92 ^ dart.notNull(key[$_get](i))) >>> 0);
    }
    this[_outerSink].add(padding);
    for (let i = 0; i < dart.notNull(padding[$length]); i++) {
      padding[$_set](i, (54 ^ dart.notNull(key[$_get](i))) >>> 0);
    }
    this[_innerSink].add(padding);
  }).prototype = src__hmac._HmacSink.prototype;
  dart.addTypeTests(src__hmac._HmacSink);
  dart.setMethodSignature(src__hmac._HmacSink, () => ({
    __proto__: dart.getMethods(src__hmac._HmacSink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    addSlice: dart.fnType(dart.void, [core.List$(core.int), core.int, core.int, core.bool]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hmac._HmacSink, () => ({
    __proto__: dart.getFields(src__hmac._HmacSink.__proto__),
    [_outerSink]: dart.finalFieldType(convert$.ByteConversionSink),
    [_innerResultSink]: dart.finalFieldType(src__digest_sink.DigestSink),
    [_innerSink]: dart.fieldType(convert$.ByteConversionSink),
    [_isClosed]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__utils, {
    /*src__utils.mask32*/get mask32() {
      return 4294967295;
    },
    /*src__utils.bitsPerByte*/get bitsPerByte() {
      return 8;
    },
    /*src__utils.bytesPerWord*/get bytesPerWord() {
      return 4;
    }
  });
  src__utils.add32 = function(x, y) {
    return (dart.notNull(x) + dart.notNull(y) & 4294967295) >>> 0;
  };
  src__utils.rotl32 = function(val, shift) {
    let modShift = dart.notNull(shift) & 31;
    return (val[$leftShift](modShift) & 4294967295 | ((dart.notNull(val) & 4294967295) >>> 0)[$rightShift](32 - modShift)) >>> 0;
  };
  const _sink = Symbol('_sink');
  const _endian = Symbol('_endian');
  const _currentChunk = Symbol('_currentChunk');
  const _lengthInBytes = Symbol('_lengthInBytes');
  const _pendingData = Symbol('_pendingData');
  const _isClosed$ = Symbol('_isClosed');
  const _iterate = Symbol('_iterate');
  const _finalizeData = Symbol('_finalizeData');
  const _byteDigest = Symbol('_byteDigest');
  const _roundUp = Symbol('_roundUp');
  src__hash_sink.HashSink = class HashSink extends core.Object {
    add(data) {
      ListOfint()._check(data);
      if (dart.test(this[_isClosed$])) dart.throw(new core.StateError.new("Hash.add() called after close()."));
      this[_lengthInBytes] = dart.notNull(this[_lengthInBytes]) + dart.notNull(data[$length]);
      this[_pendingData].addAll(data);
      this[_iterate]();
    }
    close() {
      if (dart.test(this[_isClosed$])) return;
      this[_isClosed$] = true;
      this[_finalizeData]();
      this[_iterate]();
      if (!dart.test(this[_pendingData].isEmpty)) dart.assertFailed();
      this[_sink].add(new src__digest.Digest.new(this[_byteDigest]()));
      this[_sink].close();
    }
    [_byteDigest]() {
      if (dart.equals(this[_endian], typed_data.Endian.host)) return this.digest[$buffer][$asUint8List]();
      let byteDigest = typed_data.Uint8List.new(this.digest[$lengthInBytes]);
      let byteData = byteDigest[$buffer][$asByteData]();
      for (let i = 0; i < dart.notNull(this.digest[$length]); i++) {
        byteData[$setUint32](i * 4, this.digest[$_get](i));
      }
      return byteDigest;
    }
    [_iterate]() {
      let pendingDataBytes = this[_pendingData].buffer[$asByteData]();
      let pendingDataChunks = (dart.notNull(this[_pendingData].length) / dart.notNull(this[_currentChunk][$lengthInBytes]))[$truncate]();
      for (let i = 0; i < pendingDataChunks; i++) {
        for (let j = 0; j < dart.notNull(this[_currentChunk][$length]); j++) {
          this[_currentChunk][$_set](j, pendingDataBytes[$getUint32](i * dart.notNull(this[_currentChunk][$lengthInBytes]) + j * 4, this[_endian]));
        }
        this.updateHash(this[_currentChunk]);
      }
      this[_pendingData].removeRange(0, pendingDataChunks * dart.notNull(this[_currentChunk][$lengthInBytes]));
    }
    [_finalizeData]() {
      this[_pendingData].add(128);
      let contentsLength = dart.notNull(this[_lengthInBytes]) + 9;
      let finalizedLength = this[_roundUp](contentsLength, this[_currentChunk][$lengthInBytes]);
      for (let i = 0; i < dart.notNull(finalizedLength) - contentsLength; i++) {
        this[_pendingData].add(0);
      }
      if (dart.notNull(this[_lengthInBytes]) > 1125899906842623) {
        dart.throw(new core.UnsupportedError.new("Hashing is unsupported for messages with more than 2^53 bits."));
      }
      let lengthInBits = dart.notNull(this[_lengthInBytes]) * 8;
      let offset = this[_pendingData].length;
      this[_pendingData].addAll(typed_data.Uint8List.new(8));
      let byteData = this[_pendingData].buffer[$asByteData]();
      let highBits = lengthInBits[$rightShift](32);
      let lowBits = (lengthInBits & 4294967295) >>> 0;
      if (dart.equals(this[_endian], typed_data.Endian.big)) {
        byteData[$setUint32](offset, highBits, this[_endian]);
        byteData[$setUint32](dart.notNull(offset) + 4, lowBits, this[_endian]);
      } else {
        byteData[$setUint32](offset, lowBits, this[_endian]);
        byteData[$setUint32](dart.notNull(offset) + 4, highBits, this[_endian]);
      }
    }
    [_roundUp](val, n) {
      return (dart.notNull(val) + dart.notNull(n) - 1 & -dart.notNull(n)) >>> 0;
    }
  };
  (src__hash_sink.HashSink.new = function(sink, chunkSizeInWords, opts) {
    let endian = opts && 'endian' in opts ? opts.endian : typed_data.Endian.big;
    this[_lengthInBytes] = 0;
    this[_pendingData] = new typed_buffers$.Uint8Buffer.new();
    this[_isClosed$] = false;
    this[_sink] = sink;
    this[_endian] = endian;
    this[_currentChunk] = typed_data.Uint32List.new(chunkSizeInWords);
  }).prototype = src__hash_sink.HashSink.prototype;
  dart.addTypeTests(src__hash_sink.HashSink);
  src__hash_sink.HashSink[dart.implements] = () => [SinkOfListOfint()];
  dart.setMethodSignature(src__hash_sink.HashSink, () => ({
    __proto__: dart.getMethods(src__hash_sink.HashSink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, []),
    [_byteDigest]: dart.fnType(typed_data.Uint8List, []),
    [_iterate]: dart.fnType(dart.void, []),
    [_finalizeData]: dart.fnType(dart.void, []),
    [_roundUp]: dart.fnType(core.int, [core.int, core.int])
  }));
  dart.setFieldSignature(src__hash_sink.HashSink, () => ({
    __proto__: dart.getFields(src__hash_sink.HashSink.__proto__),
    [_sink]: dart.finalFieldType(SinkOfDigest()),
    [_endian]: dart.finalFieldType(typed_data.Endian),
    [_currentChunk]: dart.finalFieldType(typed_data.Uint32List),
    [_lengthInBytes]: dart.fieldType(core.int),
    [_pendingData]: dart.finalFieldType(typed_buffers$.Uint8Buffer),
    [_isClosed$]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__hash_sink.HashSink, {
    /*src__hash_sink.HashSink._maxMessageLengthInBytes*/get _maxMessageLengthInBytes() {
      return 1125899906842623;
    }
  });
  dart.defineLazy(src__md5, {
    /*src__md5.md5*/get md5() {
      return new src__md5.MD5.__();
    }
  });
  src__md5.MD5 = class MD5 extends src__hash.Hash {
    get blockSize() {
      return this[blockSize];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    startChunkedConversion(sink) {
      SinkOfDigest()._check(sink);
      return convert$.ByteConversionSink.from(new src__md5._MD5Sink.new(sink));
    }
  };
  (src__md5.MD5.__ = function() {
    this[blockSize] = 16 * 4;
    src__md5.MD5.__proto__.new.call(this);
  }).prototype = src__md5.MD5.prototype;
  dart.addTypeTests(src__md5.MD5);
  const blockSize = Symbol("MD5.blockSize");
  dart.setMethodSignature(src__md5.MD5, () => ({
    __proto__: dart.getMethods(src__md5.MD5.__proto__),
    startChunkedConversion: dart.fnType(convert$.ByteConversionSink, [core.Object])
  }));
  dart.setFieldSignature(src__md5.MD5, () => ({
    __proto__: dart.getFields(src__md5.MD5.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(src__md5, {
    /*src__md5._noise*/get _noise() {
      return dart.constList([3614090360, 3905402710, 606105819, 3250441966, 4118548399, 1200080426, 2821735955, 4249261313, 1770035416, 2336552879, 4294925233, 2304563134, 1804603682, 4254626195, 2792965006, 1236535329, 4129170786, 3225465664, 643717713, 3921069994, 3593408605, 38016083, 3634488961, 3889429448, 568446438, 3275163606, 4107603335, 1163531501, 2850285829, 4243563512, 1735328473, 2368359562, 4294588738, 2272392833, 1839030562, 4259657740, 2763975236, 1272893353, 4139469664, 3200236656, 681279174, 3936430074, 3572445317, 76029189, 3654602809, 3873151461, 530742520, 3299628645, 4096336452, 1126891415, 2878612391, 4237533241, 1700485571, 2399980690, 4293915773, 2240044497, 1873313359, 4264355552, 2734768916, 1309151649, 4149444226, 3174756917, 718787259, 3951481745], core.int);
    },
    /*src__md5._shiftAmounts*/get _shiftAmounts() {
      return dart.constList([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21], core.int);
    }
  });
  src__md5._MD5Sink = class _MD5Sink extends src__hash_sink.HashSink {
    updateHash(chunk) {
      if (!(chunk[$length] === 16)) dart.assertFailed();
      let a = this.digest[$_get](0);
      let b = this.digest[$_get](1);
      let c = this.digest[$_get](2);
      let d = this.digest[$_get](3);
      let e = null;
      let f = null;
      for (let i = 0; i < 64; i++) {
        if (i < 16) {
          e = (dart.notNull(b) & dart.notNull(c) | ~dart.notNull(b) & 4294967295 & dart.notNull(d)) >>> 0;
          f = i;
        } else if (i < 32) {
          e = (dart.notNull(d) & dart.notNull(b) | ~dart.notNull(d) & 4294967295 & dart.notNull(c)) >>> 0;
          f = (5 * i + 1)[$modulo](16);
        } else if (i < 48) {
          e = (dart.notNull(b) ^ dart.notNull(c) ^ dart.notNull(d)) >>> 0;
          f = (3 * i + 5)[$modulo](16);
        } else {
          e = (dart.notNull(c) ^ (dart.notNull(b) | ~dart.notNull(d) & 4294967295)) >>> 0;
          f = (7 * i)[$modulo](16);
        }
        let temp = d;
        d = c;
        c = b;
        b = src__utils.add32(b, src__utils.rotl32(src__utils.add32(src__utils.add32(a, e), src__utils.add32(src__md5._noise[$_get](i), chunk[$_get](f))), src__md5._shiftAmounts[$_get](i)));
        a = temp;
      }
      this.digest[$_set](0, src__utils.add32(a, this.digest[$_get](0)));
      this.digest[$_set](1, src__utils.add32(b, this.digest[$_get](1)));
      this.digest[$_set](2, src__utils.add32(c, this.digest[$_get](2)));
      this.digest[$_set](3, src__utils.add32(d, this.digest[$_get](3)));
    }
  };
  (src__md5._MD5Sink.new = function(sink) {
    this.digest = typed_data.Uint32List.new(4);
    src__md5._MD5Sink.__proto__.new.call(this, sink, 16, {endian: typed_data.Endian.little});
    this.digest[$_set](0, 1732584193);
    this.digest[$_set](1, 4023233417);
    this.digest[$_set](2, 2562383102);
    this.digest[$_set](3, 271733878);
  }).prototype = src__md5._MD5Sink.prototype;
  dart.addTypeTests(src__md5._MD5Sink);
  dart.setMethodSignature(src__md5._MD5Sink, () => ({
    __proto__: dart.getMethods(src__md5._MD5Sink.__proto__),
    updateHash: dart.fnType(dart.void, [typed_data.Uint32List])
  }));
  dart.setFieldSignature(src__md5._MD5Sink, () => ({
    __proto__: dart.getFields(src__md5._MD5Sink.__proto__),
    digest: dart.finalFieldType(typed_data.Uint32List)
  }));
  dart.defineLazy(src__sha1, {
    /*src__sha1.sha1*/get sha1() {
      return new src__sha1.Sha1.__();
    }
  });
  src__sha1.Sha1 = class Sha1 extends src__hash.Hash {
    get blockSize() {
      return this[blockSize$];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    startChunkedConversion(sink) {
      SinkOfDigest()._check(sink);
      return convert$.ByteConversionSink.from(new src__sha1._Sha1Sink.new(sink));
    }
  };
  (src__sha1.Sha1.__ = function() {
    this[blockSize$] = 16 * 4;
    src__sha1.Sha1.__proto__.new.call(this);
  }).prototype = src__sha1.Sha1.prototype;
  dart.addTypeTests(src__sha1.Sha1);
  const blockSize$ = Symbol("Sha1.blockSize");
  dart.setMethodSignature(src__sha1.Sha1, () => ({
    __proto__: dart.getMethods(src__sha1.Sha1.__proto__),
    startChunkedConversion: dart.fnType(convert$.ByteConversionSink, [core.Object])
  }));
  dart.setFieldSignature(src__sha1.Sha1, () => ({
    __proto__: dart.getFields(src__sha1.Sha1.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  const _extended = Symbol('_extended');
  src__sha1._Sha1Sink = class _Sha1Sink extends src__hash_sink.HashSink {
    updateHash(chunk) {
      if (!(chunk[$length] === 16)) dart.assertFailed();
      let a = this.digest[$_get](0);
      let b = this.digest[$_get](1);
      let c = this.digest[$_get](2);
      let d = this.digest[$_get](3);
      let e = this.digest[$_get](4);
      for (let i = 0; i < 80; i++) {
        if (i < 16) {
          this[_extended][$_set](i, chunk[$_get](i));
        } else {
          this[_extended][$_set](i, src__utils.rotl32((dart.notNull(this[_extended][$_get](i - 3)) ^ dart.notNull(this[_extended][$_get](i - 8)) ^ dart.notNull(this[_extended][$_get](i - 14)) ^ dart.notNull(this[_extended][$_get](i - 16))) >>> 0, 1));
        }
        let newA = src__utils.add32(src__utils.add32(src__utils.rotl32(a, 5), e), this[_extended][$_get](i));
        if (i < 20) {
          newA = src__utils.add32(src__utils.add32(newA, (dart.notNull(b) & dart.notNull(c) | ~dart.notNull(b) & dart.notNull(d)) >>> 0), 1518500249);
        } else if (i < 40) {
          newA = src__utils.add32(src__utils.add32(newA, (dart.notNull(b) ^ dart.notNull(c) ^ dart.notNull(d)) >>> 0), 1859775393);
        } else if (i < 60) {
          newA = src__utils.add32(src__utils.add32(newA, (dart.notNull(b) & dart.notNull(c) | dart.notNull(b) & dart.notNull(d) | dart.notNull(c) & dart.notNull(d)) >>> 0), 2400959708);
        } else {
          newA = src__utils.add32(src__utils.add32(newA, (dart.notNull(b) ^ dart.notNull(c) ^ dart.notNull(d)) >>> 0), 3395469782);
        }
        e = d;
        d = c;
        c = src__utils.rotl32(b, 30);
        b = a;
        a = (dart.notNull(newA) & 4294967295) >>> 0;
      }
      this.digest[$_set](0, src__utils.add32(a, this.digest[$_get](0)));
      this.digest[$_set](1, src__utils.add32(b, this.digest[$_get](1)));
      this.digest[$_set](2, src__utils.add32(c, this.digest[$_get](2)));
      this.digest[$_set](3, src__utils.add32(d, this.digest[$_get](3)));
      this.digest[$_set](4, src__utils.add32(e, this.digest[$_get](4)));
    }
  };
  (src__sha1._Sha1Sink.new = function(sink) {
    this.digest = typed_data.Uint32List.new(5);
    this[_extended] = typed_data.Uint32List.new(80);
    src__sha1._Sha1Sink.__proto__.new.call(this, sink, 16);
    this.digest[$_set](0, 1732584193);
    this.digest[$_set](1, 4023233417);
    this.digest[$_set](2, 2562383102);
    this.digest[$_set](3, 271733878);
    this.digest[$_set](4, 3285377520);
  }).prototype = src__sha1._Sha1Sink.prototype;
  dart.addTypeTests(src__sha1._Sha1Sink);
  dart.setMethodSignature(src__sha1._Sha1Sink, () => ({
    __proto__: dart.getMethods(src__sha1._Sha1Sink.__proto__),
    updateHash: dart.fnType(dart.void, [typed_data.Uint32List])
  }));
  dart.setFieldSignature(src__sha1._Sha1Sink, () => ({
    __proto__: dart.getFields(src__sha1._Sha1Sink.__proto__),
    digest: dart.finalFieldType(typed_data.Uint32List),
    [_extended]: dart.finalFieldType(typed_data.Uint32List)
  }));
  dart.defineLazy(src__sha256, {
    /*src__sha256.sha256*/get sha256() {
      return new src__sha256.Sha256.__();
    }
  });
  src__sha256.Sha256 = class Sha256 extends src__hash.Hash {
    get blockSize() {
      return this[blockSize$0];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    newInstance() {
      return new src__sha256.Sha256.__();
    }
    startChunkedConversion(sink) {
      SinkOfDigest()._check(sink);
      return convert$.ByteConversionSink.from(new src__sha256._Sha256Sink.new(sink));
    }
  };
  (src__sha256.Sha256.__ = function() {
    this[blockSize$0] = 16 * 4;
    src__sha256.Sha256.__proto__.new.call(this);
  }).prototype = src__sha256.Sha256.prototype;
  dart.addTypeTests(src__sha256.Sha256);
  const blockSize$0 = Symbol("Sha256.blockSize");
  dart.setMethodSignature(src__sha256.Sha256, () => ({
    __proto__: dart.getMethods(src__sha256.Sha256.__proto__),
    newInstance: dart.fnType(src__sha256.Sha256, []),
    startChunkedConversion: dart.fnType(convert$.ByteConversionSink, [core.Object])
  }));
  dart.setFieldSignature(src__sha256.Sha256, () => ({
    __proto__: dart.getFields(src__sha256.Sha256.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(src__sha256, {
    /*src__sha256._noise*/get _noise() {
      return dart.constList([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], core.int);
    }
  });
  const _extended$ = Symbol('_extended');
  const _rotr32 = Symbol('_rotr32');
  const _ch = Symbol('_ch');
  const _maj = Symbol('_maj');
  const _bsig0 = Symbol('_bsig0');
  const _bsig1 = Symbol('_bsig1');
  const _ssig0 = Symbol('_ssig0');
  const _ssig1 = Symbol('_ssig1');
  src__sha256._Sha256Sink = class _Sha256Sink extends src__hash_sink.HashSink {
    [_rotr32](n, x) {
      return (x[$rightShift](n) | x[$leftShift](32 - dart.notNull(n)) & 4294967295) >>> 0;
    }
    [_ch](x, y, z) {
      return (dart.notNull(x) & dart.notNull(y) ^ ~dart.notNull(x) & 4294967295 & dart.notNull(z)) >>> 0;
    }
    [_maj](x, y, z) {
      return (dart.notNull(x) & dart.notNull(y) ^ dart.notNull(x) & dart.notNull(z) ^ dart.notNull(y) & dart.notNull(z)) >>> 0;
    }
    [_bsig0](x) {
      return (dart.notNull(this[_rotr32](2, x)) ^ dart.notNull(this[_rotr32](13, x)) ^ dart.notNull(this[_rotr32](22, x))) >>> 0;
    }
    [_bsig1](x) {
      return (dart.notNull(this[_rotr32](6, x)) ^ dart.notNull(this[_rotr32](11, x)) ^ dart.notNull(this[_rotr32](25, x))) >>> 0;
    }
    [_ssig0](x) {
      return (dart.notNull(this[_rotr32](7, x)) ^ dart.notNull(this[_rotr32](18, x)) ^ x[$rightShift](3)) >>> 0;
    }
    [_ssig1](x) {
      return (dart.notNull(this[_rotr32](17, x)) ^ dart.notNull(this[_rotr32](19, x)) ^ x[$rightShift](10)) >>> 0;
    }
    updateHash(chunk) {
      if (!(chunk[$length] === 16)) dart.assertFailed();
      for (let i = 0; i < 16; i++) {
        this[_extended$][$_set](i, chunk[$_get](i));
      }
      for (let i = 16; i < 64; i++) {
        this[_extended$][$_set](i, src__utils.add32(src__utils.add32(this[_ssig1](this[_extended$][$_get](i - 2)), this[_extended$][$_get](i - 7)), src__utils.add32(this[_ssig0](this[_extended$][$_get](i - 15)), this[_extended$][$_get](i - 16))));
      }
      let a = this.digest[$_get](0);
      let b = this.digest[$_get](1);
      let c = this.digest[$_get](2);
      let d = this.digest[$_get](3);
      let e = this.digest[$_get](4);
      let f = this.digest[$_get](5);
      let g = this.digest[$_get](6);
      let h = this.digest[$_get](7);
      for (let i = 0; i < 64; i++) {
        let temp1 = src__utils.add32(src__utils.add32(h, this[_bsig1](e)), src__utils.add32(this[_ch](e, f, g), src__utils.add32(src__sha256._noise[$_get](i), this[_extended$][$_get](i))));
        let temp2 = src__utils.add32(this[_bsig0](a), this[_maj](a, b, c));
        h = g;
        g = f;
        f = e;
        e = src__utils.add32(d, temp1);
        d = c;
        c = b;
        b = a;
        a = src__utils.add32(temp1, temp2);
      }
      this.digest[$_set](0, src__utils.add32(a, this.digest[$_get](0)));
      this.digest[$_set](1, src__utils.add32(b, this.digest[$_get](1)));
      this.digest[$_set](2, src__utils.add32(c, this.digest[$_get](2)));
      this.digest[$_set](3, src__utils.add32(d, this.digest[$_get](3)));
      this.digest[$_set](4, src__utils.add32(e, this.digest[$_get](4)));
      this.digest[$_set](5, src__utils.add32(f, this.digest[$_get](5)));
      this.digest[$_set](6, src__utils.add32(g, this.digest[$_get](6)));
      this.digest[$_set](7, src__utils.add32(h, this.digest[$_get](7)));
    }
  };
  (src__sha256._Sha256Sink.new = function(sink) {
    this.digest = typed_data.Uint32List.new(8);
    this[_extended$] = typed_data.Uint32List.new(64);
    src__sha256._Sha256Sink.__proto__.new.call(this, sink, 16);
    this.digest[$_set](0, 1779033703);
    this.digest[$_set](1, 3144134277);
    this.digest[$_set](2, 1013904242);
    this.digest[$_set](3, 2773480762);
    this.digest[$_set](4, 1359893119);
    this.digest[$_set](5, 2600822924);
    this.digest[$_set](6, 528734635);
    this.digest[$_set](7, 1541459225);
  }).prototype = src__sha256._Sha256Sink.prototype;
  dart.addTypeTests(src__sha256._Sha256Sink);
  dart.setMethodSignature(src__sha256._Sha256Sink, () => ({
    __proto__: dart.getMethods(src__sha256._Sha256Sink.__proto__),
    [_rotr32]: dart.fnType(core.int, [core.int, core.int]),
    [_ch]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_maj]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_bsig0]: dart.fnType(core.int, [core.int]),
    [_bsig1]: dart.fnType(core.int, [core.int]),
    [_ssig0]: dart.fnType(core.int, [core.int]),
    [_ssig1]: dart.fnType(core.int, [core.int]),
    updateHash: dart.fnType(dart.void, [typed_data.Uint32List])
  }));
  dart.setFieldSignature(src__sha256._Sha256Sink, () => ({
    __proto__: dart.getFields(src__sha256._Sha256Sink.__proto__),
    digest: dart.finalFieldType(typed_data.Uint32List),
    [_extended$]: dart.finalFieldType(typed_data.Uint32List)
  }));
  dart.trackLibraries("packages/crypto/crypto.ddc", {
    "package:crypto/crypto.dart": crypto,
    "package:crypto/src/digest.dart": src__digest,
    "package:crypto/src/digest_sink.dart": src__digest_sink,
    "package:crypto/src/hash.dart": src__hash,
    "package:crypto/src/hmac.dart": src__hmac,
    "package:crypto/src/utils.dart": src__utils,
    "package:crypto/src/hash_sink.dart": src__hash_sink,
    "package:crypto/src/md5.dart": src__md5,
    "package:crypto/src/sha1.dart": src__sha1,
    "package:crypto/src/sha256.dart": src__sha256
  }, '{"version":3,"sourceRoot":"","sources":["src/digest.dart","src/digest_sink.dart","src/hash.dart","src/hmac.dart","src/utils.dart","src/hash_sink.dart","src/md5.dart","src/sha1.dart","src/sha256.dart"],"names":[],"mappings":"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","file":"crypto.ddc.js"}');
  // Exports:
  return {
    crypto: crypto,
    src__digest: src__digest,
    src__digest_sink: src__digest_sink,
    src__hash: src__hash,
    src__hmac: src__hmac,
    src__utils: src__utils,
    src__hash_sink: src__hash_sink,
    src__md5: src__md5,
    src__sha1: src__sha1,
    src__sha256: src__sha256
  };
});

//# sourceMappingURL=crypto.ddc.js.map
