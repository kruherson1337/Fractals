define(['dart_sdk', 'packages/petitparser/src/core/actions/action'], function(dart_sdk, action) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__characters__code = action.src__core__characters__code;
  const src__core__characters__parser = action.src__core__characters__parser;
  const src__core__characters__predicate = action.src__core__characters__predicate;
  const src__core__characters__char = action.src__core__characters__char;
  const src__core__predicates__any = action.src__core__predicates__any;
  const src__core__parser = action.src__core__parser;
  const src__core__contexts__result = action.src__core__contexts__result;
  const src__core__contexts__context = action.src__core__contexts__context;
  const src__core__combinators__delegate = action.src__core__combinators__delegate;
  const src__core__combinators__sequence = action.src__core__combinators__sequence;
  const src__core__combinators__choice = action.src__core__combinators__choice;
  const src__core__parsers__failure = action.src__core__parsers__failure;
  const _root = Object.create(null);
  const petitparser = Object.create(_root);
  const src__core__characters__range = Object.create(_root);
  const src__core__characters__ranges = Object.create(_root);
  const src__core__characters__optimize = Object.create(_root);
  const src__core__characters__any_of = Object.create(_root);
  const src__core__characters__digit = Object.create(_root);
  const src__core__characters__letter = Object.create(_root);
  const src__core__characters__lowercase = Object.create(_root);
  const src__core__characters__not = Object.create(_root);
  const src__core__characters__none_of = Object.create(_root);
  const src__core__characters__pattern = Object.create(_root);
  const src__core__characters__uppercase = Object.create(_root);
  const src__core__characters__word = Object.create(_root);
  const src__core__definition__reference = Object.create(_root);
  const src__core__definition__grammar = Object.create(_root);
  const src__core__definition__parser = Object.create(_root);
  const src__core__expression__result = Object.create(_root);
  const src__core__expression__group = Object.create(_root);
  const src__core__expression__builder = Object.create(_root);
  const src__core__parsers__epsilon = Object.create(_root);
  const src__core__parsers__position = Object.create(_root);
  const src__core__predicates__predicate = Object.create(_root);
  const src__core__predicates__any_in = Object.create(_root);
  const src__core__predicates__string = Object.create(_root);
  const $rightShift = dartx['>>'];
  const $_get = dartx._get;
  const $map = dartx.map;
  const $codeUnits = dartx.codeUnits;
  const $sort = dartx.sort;
  const $isEmpty = dartx.isEmpty;
  const $add = dartx.add;
  const $last = dartx.last;
  const $_set = dartx._set;
  const $length = dartx.length;
  const $toList = dartx.toList;
  const $cast = dartx.cast;
  const $_equals = dartx._equals;
  const $takeWhile = dartx.takeWhile;
  const $contains = dartx.contains;
  const $isNotEmpty = dartx.isNotEmpty;
  const $removeLast = dartx.removeLast;
  const $first = dartx.first;
  const $fold = dartx.fold;
  const $substring = dartx.substring;
  const $toLowerCase = dartx.toLowerCase;
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let intToRangeCharPredicate = () => (intToRangeCharPredicate = dart.constFn(dart.fnType(src__core__characters__range.RangeCharPredicate, [core.int])))();
  let IterableOfRangeCharPredicate = () => (IterableOfRangeCharPredicate = dart.constFn(core.Iterable$(src__core__characters__range.RangeCharPredicate)))();
  let ListOfRangeCharPredicate = () => (ListOfRangeCharPredicate = dart.constFn(core.List$(src__core__characters__range.RangeCharPredicate)))();
  let RangeCharPredicateAndRangeCharPredicateToint = () => (RangeCharPredicateAndRangeCharPredicateToint = dart.constFn(dart.fnType(core.int, [src__core__characters__range.RangeCharPredicate, src__core__characters__range.RangeCharPredicate])))();
  let JSArrayOfRangeCharPredicate = () => (JSArrayOfRangeCharPredicate = dart.constFn(_interceptors.JSArray$(src__core__characters__range.RangeCharPredicate)))();
  let RangeCharPredicateToint = () => (RangeCharPredicateToint = dart.constFn(dart.fnType(core.int, [src__core__characters__range.RangeCharPredicate])))();
  let IterableOfint = () => (IterableOfint = dart.constFn(core.Iterable$(core.int)))();
  let StringToRangeCharPredicate = () => (StringToRangeCharPredicate = dart.constFn(dart.fnType(src__core__characters__range.RangeCharPredicate, [core.String])))();
  let ParserOfRangeCharPredicate = () => (ParserOfRangeCharPredicate = dart.constFn(src__core__parser.Parser$(src__core__characters__range.RangeCharPredicate)))();
  let ListToRangeCharPredicate = () => (ListToRangeCharPredicate = dart.constFn(dart.fnType(src__core__characters__range.RangeCharPredicate, [core.List])))();
  let ListToCharacterPredicate = () => (ListToCharacterPredicate = dart.constFn(dart.fnType(src__core__characters__predicate.CharacterPredicate, [core.List])))();
  let ParserOfCharacterPredicate = () => (ParserOfCharacterPredicate = dart.constFn(src__core__parser.Parser$(src__core__characters__predicate.CharacterPredicate)))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let LinkedMapOfReference$Parser = () => (LinkedMapOfReference$Parser = dart.constFn(_js_helper.LinkedMap$(src__core__definition__reference.Reference, src__core__parser.Parser)))();
  let JSArrayOfReference = () => (JSArrayOfReference = dart.constFn(_interceptors.JSArray$(src__core__definition__reference.Reference)))();
  let ReferenceToParser = () => (ReferenceToParser = dart.constFn(dart.fnType(src__core__parser.Parser, [src__core__definition__reference.Reference])))();
  let JSArrayOfParser = () => (JSArrayOfParser = dart.constFn(_interceptors.JSArray$(src__core__parser.Parser)))();
  let SetOfParser = () => (SetOfParser = dart.constFn(core.Set$(src__core__parser.Parser)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let dynamicAnddynamicTodynamic = () => (dynamicAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic])))();
  let ListTodynamic = () => (ListTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.List])))();
  let ListOfParser = () => (ListOfParser = dart.constFn(core.List$(src__core__parser.Parser)))();
  let JSArrayOfExpressionGroup = () => (JSArrayOfExpressionGroup = dart.constFn(_interceptors.JSArray$(src__core__expression__group.ExpressionGroup)))();
  let ParserAndExpressionGroupToParser = () => (ParserAndExpressionGroupToParser = dart.constFn(dart.fnType(src__core__parser.Parser, [src__core__parser.Parser, src__core__expression__group.ExpressionGroup])))();
  let ListOfExpressionGroup = () => (ListOfExpressionGroup = dart.constFn(core.List$(src__core__expression__group.ExpressionGroup)))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  src__core__characters__range.range = function(start, stop, message) {
    if (message === void 0) message = null;
    return new src__core__characters__parser.CharacterParser.new(new src__core__characters__range.RangeCharPredicate.new(src__core__characters__code.toCharCode(start), src__core__characters__code.toCharCode(stop)), message != null ? message : dart.str(src__core__characters__code.toReadableString(start)) + ".." + dart.str(src__core__characters__code.toReadableString(stop)) + " expected");
  };
  src__core__characters__range.RangeCharPredicate = class RangeCharPredicate extends core.Object {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get stop() {
      return this[stop$];
    }
    set stop(value) {
      super.stop = value;
    }
    test(value) {
      return dart.notNull(this.start) <= dart.notNull(value) && dart.notNull(value) <= dart.notNull(this.stop);
    }
    isEqualTo(other) {
      return src__core__characters__range.RangeCharPredicate.is(other) && other.start == this.start && other.stop == this.stop;
    }
  };
  (src__core__characters__range.RangeCharPredicate.new = function(start, stop) {
    this[start$] = start;
    this[stop$] = stop;
    if (!(start != null)) dart.assertFailed();
    if (!(stop != null)) dart.assertFailed();
    if (dart.notNull(this.start) > dart.notNull(this.stop)) {
      dart.throw(new core.ArgumentError.new("Invalid range: " + dart.str(this.start) + "-" + dart.str(this.stop)));
    }
  }).prototype = src__core__characters__range.RangeCharPredicate.prototype;
  dart.addTypeTests(src__core__characters__range.RangeCharPredicate);
  const start$ = Symbol("RangeCharPredicate.start");
  const stop$ = Symbol("RangeCharPredicate.stop");
  src__core__characters__range.RangeCharPredicate[dart.implements] = () => [src__core__characters__predicate.CharacterPredicate];
  dart.setMethodSignature(src__core__characters__range.RangeCharPredicate, () => ({
    __proto__: dart.getMethods(src__core__characters__range.RangeCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [src__core__characters__predicate.CharacterPredicate])
  }));
  dart.setFieldSignature(src__core__characters__range.RangeCharPredicate, () => ({
    __proto__: dart.getFields(src__core__characters__range.RangeCharPredicate.__proto__),
    start: dart.finalFieldType(core.int),
    stop: dart.finalFieldType(core.int)
  }));
  src__core__characters__ranges.RangesCharPredicate = class RangesCharPredicate extends core.Object {
    get length() {
      return this[length$];
    }
    set length(value) {
      super.length = value;
    }
    get starts() {
      return this[starts$];
    }
    set starts(value) {
      super.starts = value;
    }
    get stops() {
      return this[stops$];
    }
    set stops(value) {
      super.stops = value;
    }
    test(value) {
      let min = 0;
      let max = this.length;
      while (min < dart.notNull(max)) {
        let mid = min + (dart.notNull(max) - min)[$rightShift](1);
        let comp = dart.notNull(this.starts[$_get](mid)) - dart.notNull(value);
        if (comp === 0) {
          return true;
        } else if (comp < 0) {
          min = mid + 1;
        } else {
          max = mid;
        }
      }
      return 0 < min && dart.notNull(value) <= dart.notNull(this.stops[$_get](min - 1));
    }
    isEqualTo(other) {
      return src__core__characters__ranges.RangesCharPredicate.is(other) && other.length == this.length && dart.equals(other.starts, this.starts) && dart.equals(other.stops, this.stops);
    }
  };
  (src__core__characters__ranges.RangesCharPredicate.new = function(length, starts, stops) {
    this[length$] = length;
    this[starts$] = starts;
    this[stops$] = stops;
    if (!(length != null)) dart.assertFailed();
    if (!(starts != null)) dart.assertFailed();
    if (!(stops != null)) dart.assertFailed();
  }).prototype = src__core__characters__ranges.RangesCharPredicate.prototype;
  dart.addTypeTests(src__core__characters__ranges.RangesCharPredicate);
  const length$ = Symbol("RangesCharPredicate.length");
  const starts$ = Symbol("RangesCharPredicate.starts");
  const stops$ = Symbol("RangesCharPredicate.stops");
  src__core__characters__ranges.RangesCharPredicate[dart.implements] = () => [src__core__characters__predicate.CharacterPredicate];
  dart.setMethodSignature(src__core__characters__ranges.RangesCharPredicate, () => ({
    __proto__: dart.getMethods(src__core__characters__ranges.RangesCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [src__core__characters__predicate.CharacterPredicate])
  }));
  dart.setFieldSignature(src__core__characters__ranges.RangesCharPredicate, () => ({
    __proto__: dart.getFields(src__core__characters__ranges.RangesCharPredicate.__proto__),
    length: dart.finalFieldType(core.int),
    starts: dart.finalFieldType(ListOfint()),
    stops: dart.finalFieldType(ListOfint())
  }));
  src__core__characters__optimize.optimizedString = function(string) {
    return src__core__characters__optimize.optimizedRanges(IterableOfRangeCharPredicate()._check(string[$codeUnits][$map](src__core__characters__range.RangeCharPredicate, dart.fn(value => new src__core__characters__range.RangeCharPredicate.new(value, value), intToRangeCharPredicate()))));
  };
  src__core__characters__optimize.optimizedRanges = function(ranges) {
    let sortedRanges = ListOfRangeCharPredicate().of(ranges, {growable: false});
    sortedRanges[$sort](dart.fn((first, second) => first.start != second.start ? dart.notNull(first.start) - dart.notNull(second.start) : dart.notNull(first.stop) - dart.notNull(second.stop), RangeCharPredicateAndRangeCharPredicateToint()));
    let mergedRanges = JSArrayOfRangeCharPredicate().of([]);
    for (let thisRange of sortedRanges) {
      if (dart.test(mergedRanges[$isEmpty])) {
        mergedRanges[$add](thisRange);
      } else {
        let lastRange = mergedRanges[$last];
        if (dart.notNull(lastRange.stop) + 1 >= dart.notNull(thisRange.start)) {
          let characterRange = new src__core__characters__range.RangeCharPredicate.new(lastRange.start, thisRange.stop);
          mergedRanges[$_set](dart.notNull(mergedRanges[$length]) - 1, characterRange);
        } else {
          mergedRanges[$add](thisRange);
        }
      }
    }
    if (mergedRanges[$length] === 1) {
      return mergedRanges[$_get](0).start == mergedRanges[$_get](0).stop ? new src__core__characters__char.SingleCharPredicate.new(mergedRanges[$_get](0).start) : mergedRanges[$_get](0);
    } else {
      return new src__core__characters__ranges.RangesCharPredicate.new(mergedRanges[$length], IterableOfint()._check(mergedRanges[$map](core.int, dart.fn(range => range.start, RangeCharPredicateToint())))[$toList]({growable: false}), IterableOfint()._check(mergedRanges[$map](core.int, dart.fn(range => range.stop, RangeCharPredicateToint())))[$toList]({growable: false}));
    }
  };
  src__core__characters__any_of.anyOf = function(chars, message) {
    if (message === void 0) message = null;
    return new src__core__characters__parser.CharacterParser.new(src__core__characters__optimize.optimizedString(chars), message != null ? message : "any of \"" + dart.str(src__core__characters__code.toReadableString(chars)) + "\" expected");
  };
  let const$;
  src__core__characters__digit.digit = function(message) {
    if (message === void 0) message = "digit expected";
    return new src__core__characters__parser.CharacterParser.new(const$ || (const$ = dart.const(new src__core__characters__digit.DigitCharPredicate.new())), message);
  };
  src__core__characters__digit.DigitCharPredicate = class DigitCharPredicate extends src__core__characters__predicate.CharacterPredicate {
    test(value) {
      return 48 <= dart.notNull(value) && dart.notNull(value) <= 57;
    }
    isEqualTo(other) {
      return src__core__characters__digit.DigitCharPredicate.is(other);
    }
  };
  (src__core__characters__digit.DigitCharPredicate.new = function() {
    src__core__characters__digit.DigitCharPredicate.__proto__.new.call(this);
  }).prototype = src__core__characters__digit.DigitCharPredicate.prototype;
  dart.addTypeTests(src__core__characters__digit.DigitCharPredicate);
  dart.setMethodSignature(src__core__characters__digit.DigitCharPredicate, () => ({
    __proto__: dart.getMethods(src__core__characters__digit.DigitCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [src__core__characters__predicate.CharacterPredicate])
  }));
  let const$0;
  src__core__characters__letter.letter = function(message) {
    if (message === void 0) message = "letter expected";
    return new src__core__characters__parser.CharacterParser.new(const$0 || (const$0 = dart.const(new src__core__characters__letter.LetterCharPredicate.new())), message);
  };
  src__core__characters__letter.LetterCharPredicate = class LetterCharPredicate extends src__core__characters__predicate.CharacterPredicate {
    test(value) {
      return 65 <= dart.notNull(value) && dart.notNull(value) <= 90 || 97 <= dart.notNull(value) && dart.notNull(value) <= 122;
    }
    isEqualTo(other) {
      return src__core__characters__letter.LetterCharPredicate.is(other);
    }
  };
  (src__core__characters__letter.LetterCharPredicate.new = function() {
    src__core__characters__letter.LetterCharPredicate.__proto__.new.call(this);
  }).prototype = src__core__characters__letter.LetterCharPredicate.prototype;
  dart.addTypeTests(src__core__characters__letter.LetterCharPredicate);
  dart.setMethodSignature(src__core__characters__letter.LetterCharPredicate, () => ({
    __proto__: dart.getMethods(src__core__characters__letter.LetterCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [src__core__characters__predicate.CharacterPredicate])
  }));
  let const$1;
  src__core__characters__lowercase.lowercase = function(message) {
    if (message === void 0) message = "lowercase letter expected";
    return new src__core__characters__parser.CharacterParser.new(const$1 || (const$1 = dart.const(new src__core__characters__lowercase.LowercaseCharPredicate.new())), message);
  };
  src__core__characters__lowercase.LowercaseCharPredicate = class LowercaseCharPredicate extends src__core__characters__predicate.CharacterPredicate {
    test(value) {
      return 97 <= dart.notNull(value) && dart.notNull(value) <= 122;
    }
    isEqualTo(other) {
      return src__core__characters__lowercase.LowercaseCharPredicate.is(other);
    }
  };
  (src__core__characters__lowercase.LowercaseCharPredicate.new = function() {
    src__core__characters__lowercase.LowercaseCharPredicate.__proto__.new.call(this);
  }).prototype = src__core__characters__lowercase.LowercaseCharPredicate.prototype;
  dart.addTypeTests(src__core__characters__lowercase.LowercaseCharPredicate);
  dart.setMethodSignature(src__core__characters__lowercase.LowercaseCharPredicate, () => ({
    __proto__: dart.getMethods(src__core__characters__lowercase.LowercaseCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [src__core__characters__predicate.CharacterPredicate])
  }));
  src__core__characters__not.NotCharacterPredicate = class NotCharacterPredicate extends src__core__characters__predicate.CharacterPredicate {
    get predicate() {
      return this[predicate$];
    }
    set predicate(value) {
      super.predicate = value;
    }
    test(value) {
      return !dart.test(this.predicate.test(value));
    }
    isEqualTo(other) {
      return src__core__characters__not.NotCharacterPredicate.is(other) && dart.test(other.predicate.isEqualTo(other.predicate));
    }
  };
  (src__core__characters__not.NotCharacterPredicate.new = function(predicate) {
    this[predicate$] = predicate;
    if (!(predicate != null)) dart.assertFailed();
    src__core__characters__not.NotCharacterPredicate.__proto__.new.call(this);
  }).prototype = src__core__characters__not.NotCharacterPredicate.prototype;
  dart.addTypeTests(src__core__characters__not.NotCharacterPredicate);
  const predicate$ = Symbol("NotCharacterPredicate.predicate");
  dart.setMethodSignature(src__core__characters__not.NotCharacterPredicate, () => ({
    __proto__: dart.getMethods(src__core__characters__not.NotCharacterPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [src__core__characters__predicate.CharacterPredicate])
  }));
  dart.setFieldSignature(src__core__characters__not.NotCharacterPredicate, () => ({
    __proto__: dart.getFields(src__core__characters__not.NotCharacterPredicate.__proto__),
    predicate: dart.finalFieldType(src__core__characters__predicate.CharacterPredicate)
  }));
  src__core__characters__none_of.noneOf = function(chars, message) {
    if (message === void 0) message = null;
    return new src__core__characters__parser.CharacterParser.new(new src__core__characters__not.NotCharacterPredicate.new(src__core__characters__optimize.optimizedString(chars)), message != null ? message : "none of \"" + dart.str(src__core__characters__code.toReadableString(chars)) + "\" expected");
  };
  src__core__characters__pattern.pattern = function(element, message) {
    if (message === void 0) message = null;
    return new src__core__characters__parser.CharacterParser.new(src__core__characters__pattern.pattern_.parse(element).value, message != null ? message : "[" + dart.str(src__core__characters__code.toReadableString(element)) + "] expected");
  };
  dart.defineLazy(src__core__characters__pattern, {
    /*src__core__characters__pattern.single_*/get single_() {
      return ParserOfRangeCharPredicate()._check(src__core__predicates__any.any().map(src__core__characters__range.RangeCharPredicate, dart.fn(element => new src__core__characters__range.RangeCharPredicate.new(src__core__characters__code.toCharCode(element), src__core__characters__code.toCharCode(element)), StringToRangeCharPredicate())));
    },
    /*src__core__characters__pattern.range_*/get range_() {
      return ParserOfRangeCharPredicate()._check(src__core__predicates__any.any().seq(src__core__characters__char.char("-")).seq(src__core__predicates__any.any()).map(src__core__characters__range.RangeCharPredicate, dart.fn(elements => new src__core__characters__range.RangeCharPredicate.new(src__core__characters__code.toCharCode(elements[$_get](0)), src__core__characters__code.toCharCode(elements[$_get](2))), ListToRangeCharPredicate())));
    },
    /*src__core__characters__pattern.sequence_*/get sequence_() {
      return ParserOfCharacterPredicate()._check(src__core__characters__pattern.range_.or(src__core__characters__pattern.single_).plus().map(src__core__characters__predicate.CharacterPredicate, dart.fn(predicates => src__core__characters__optimize.optimizedRanges(ListOfRangeCharPredicate()._check(predicates[$cast](src__core__characters__range.RangeCharPredicate))), ListToCharacterPredicate())));
    },
    /*src__core__characters__pattern.pattern_*/get pattern_() {
      return ParserOfCharacterPredicate()._check(src__core__characters__char.char("^").optional().seq(src__core__characters__pattern.sequence_).map(src__core__characters__predicate.CharacterPredicate, dart.fn(predicates => src__core__characters__predicate.CharacterPredicate._check(predicates[$_get](0) == null ? predicates[$_get](1) : new src__core__characters__not.NotCharacterPredicate.new(src__core__characters__predicate.CharacterPredicate._check(predicates[$_get](1)))), ListToCharacterPredicate())));
    }
  });
  let const$2;
  src__core__characters__uppercase.uppercase = function(message) {
    if (message === void 0) message = "uppercase letter expected";
    return new src__core__characters__parser.CharacterParser.new(const$2 || (const$2 = dart.const(new src__core__characters__uppercase.UppercaseCharPredicate.new())), message);
  };
  src__core__characters__uppercase.UppercaseCharPredicate = class UppercaseCharPredicate extends core.Object {
    test(value) {
      return 65 <= dart.notNull(value) && dart.notNull(value) <= 90;
    }
    isEqualTo(other) {
      return src__core__characters__uppercase.UppercaseCharPredicate.is(other);
    }
  };
  (src__core__characters__uppercase.UppercaseCharPredicate.new = function() {
  }).prototype = src__core__characters__uppercase.UppercaseCharPredicate.prototype;
  dart.addTypeTests(src__core__characters__uppercase.UppercaseCharPredicate);
  src__core__characters__uppercase.UppercaseCharPredicate[dart.implements] = () => [src__core__characters__predicate.CharacterPredicate];
  dart.setMethodSignature(src__core__characters__uppercase.UppercaseCharPredicate, () => ({
    __proto__: dart.getMethods(src__core__characters__uppercase.UppercaseCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [src__core__characters__predicate.CharacterPredicate])
  }));
  let const$3;
  src__core__characters__word.word = function(message) {
    if (message === void 0) message = "letter or digit expected";
    return new src__core__characters__parser.CharacterParser.new(const$3 || (const$3 = dart.const(new src__core__characters__word.WordCharPredicate.new())), message);
  };
  src__core__characters__word.WordCharPredicate = class WordCharPredicate extends core.Object {
    test(value) {
      return 65 <= dart.notNull(value) && dart.notNull(value) <= 90 || 97 <= dart.notNull(value) && dart.notNull(value) <= 122 || 48 <= dart.notNull(value) && dart.notNull(value) <= 57 || value === 95;
    }
    isEqualTo(other) {
      return src__core__characters__word.WordCharPredicate.is(other);
    }
  };
  (src__core__characters__word.WordCharPredicate.new = function() {
  }).prototype = src__core__characters__word.WordCharPredicate.prototype;
  dart.addTypeTests(src__core__characters__word.WordCharPredicate);
  src__core__characters__word.WordCharPredicate[dart.implements] = () => [src__core__characters__predicate.CharacterPredicate];
  dart.setMethodSignature(src__core__characters__word.WordCharPredicate, () => ({
    __proto__: dart.getMethods(src__core__characters__word.WordCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [src__core__characters__predicate.CharacterPredicate])
  }));
  src__core__definition__reference.Reference = class Reference extends src__core__parser.Parser {
    get function() {
      return this[func];
    }
    set function(value) {
      super.function = value;
    }
    get arguments() {
      return this[arguments$];
    }
    set arguments(value) {
      super.arguments = value;
    }
    resolve() {
      return src__core__parser.Parser._check(core.Function.apply(this.function, this.arguments));
    }
    _equals(other) {
      if (other == null) return false;
      if (src__core__definition__reference.Reference.is(other)) {
        if (!dart.equals(other.function, this.function) || other.arguments[$length] != this.arguments[$length]) {
          return false;
        }
        for (let i = 0; i < dart.notNull(this.arguments[$length]); i++) {
          let a = this.arguments[$_get](i), b = other.arguments[$_get](i);
          if (src__core__parser.Parser.is(a) && !src__core__definition__reference.Reference.is(a) && src__core__parser.Parser.is(b) && !src__core__definition__reference.Reference.is(b)) {
            if (!dart.test(a.isEqualTo(b))) {
              return false;
            }
          } else {
            if (!dart.equals(a, b)) {
              return false;
            }
          }
        }
        return true;
      }
      return false;
    }
    get hashCode() {
      return dart.hashCode(this.function);
    }
    copy() {
      return dart.throw(new core.UnsupportedError.new("References cannot be copied."));
    }
    parseOn(context) {
      return dart.throw(new core.UnsupportedError.new("References cannot be parsed."));
    }
  };
  (src__core__definition__reference.Reference.new = function(function$0, arguments$0) {
    this[func] = function$0;
    this[arguments$] = arguments$0;
    if (!(function$0 != null)) dart.assertFailed();
    if (!(arguments$0 != null)) dart.assertFailed();
    src__core__definition__reference.Reference.__proto__.new.call(this);
  }).prototype = src__core__definition__reference.Reference.prototype;
  dart.addTypeTests(src__core__definition__reference.Reference);
  const func = Symbol("Reference.function");
  const arguments$ = Symbol("Reference.arguments");
  dart.setMethodSignature(src__core__definition__reference.Reference, () => ({
    __proto__: dart.getMethods(src__core__definition__reference.Reference.__proto__),
    resolve: dart.fnType(src__core__parser.Parser, []),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object]),
    copy: dart.fnType(src__core__definition__reference.Reference, []),
    parseOn: dart.fnType(src__core__contexts__result.Result, [src__core__contexts__context.Context])
  }));
  dart.setFieldSignature(src__core__definition__reference.Reference, () => ({
    __proto__: dart.getFields(src__core__definition__reference.Reference.__proto__),
    function: dart.finalFieldType(core.Function),
    arguments: dart.finalFieldType(core.List)
  }));
  dart.defineExtensionMethods(src__core__definition__reference.Reference, ['_equals']);
  dart.defineExtensionAccessors(src__core__definition__reference.Reference, ['hashCode']);
  let const$4;
  const _resolve = Symbol('_resolve');
  src__core__definition__grammar.GrammarDefinition = class GrammarDefinition extends core.Object {
    ref(function$0, arg1, arg2, arg3, arg4, arg5, arg6) {
      if (arg1 === void 0) arg1 = null;
      if (arg2 === void 0) arg2 = null;
      if (arg3 === void 0) arg3 = null;
      if (arg4 === void 0) arg4 = null;
      if (arg5 === void 0) arg5 = null;
      if (arg6 === void 0) arg6 = null;
      let arguments$0 = [arg1, arg2, arg3, arg4, arg5, arg6][$takeWhile](dart.fn(each => each != null, dynamicTobool()))[$toList]({growable: false});
      return new src__core__definition__reference.Reference.new(function$0, arguments$0);
    }
    build(opts) {
      let start = opts && 'start' in opts ? opts.start : null;
      let arguments$0 = opts && 'arguments' in opts ? opts.arguments : const$4 || (const$4 = dart.constList([], dart.dynamic));
      return this[_resolve](new src__core__definition__reference.Reference.new(start != null ? start : dart.bind(this, 'start'), arguments$0));
    }
    [_resolve](reference) {
      let mapping = new (LinkedMapOfReference$Parser()).new();
      function _dereference(reference) {
        let parser = mapping[$_get](reference);
        if (parser == null) {
          let references = JSArrayOfReference().of([reference]);
          parser = reference.resolve();
          while (src__core__definition__reference.Reference.is(parser)) {
            let otherReference = src__core__definition__reference.Reference._check(parser);
            if (dart.test(references[$contains](otherReference))) {
              dart.throw(new core.StateError.new("Recursive references detected: " + dart.str(references)));
            }
            references[$add](otherReference);
            parser = otherReference.resolve();
          }
          for (let otherReference of references) {
            mapping[$_set](otherReference, parser);
          }
        }
        return parser;
      }
      dart.fn(_dereference, ReferenceToParser());
      let todo = JSArrayOfParser().of([_dereference(reference)]);
      let seen = SetOfParser().of(todo);
      while (dart.test(todo[$isNotEmpty])) {
        let parent = todo[$removeLast]();
        for (let child of parent.children) {
          if (src__core__definition__reference.Reference.is(child)) {
            let referenced = _dereference(src__core__definition__reference.Reference._check(child));
            parent.replace(child, referenced);
            child = referenced;
          }
          if (!dart.test(seen.contains(child))) {
            seen.add(child);
            todo[$add](child);
          }
        }
      }
      return mapping[$_get](reference);
    }
  };
  (src__core__definition__grammar.GrammarDefinition.new = function() {
  }).prototype = src__core__definition__grammar.GrammarDefinition.prototype;
  dart.addTypeTests(src__core__definition__grammar.GrammarDefinition);
  dart.setMethodSignature(src__core__definition__grammar.GrammarDefinition, () => ({
    __proto__: dart.getMethods(src__core__definition__grammar.GrammarDefinition.__proto__),
    ref: dart.fnType(src__core__parser.Parser, [core.Function], [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic]),
    build: dart.fnType(src__core__parser.Parser, [], {start: core.Function, arguments: core.List}),
    [_resolve]: dart.fnType(src__core__parser.Parser, [src__core__definition__reference.Reference])
  }));
  src__core__definition__parser.GrammarParser = class GrammarParser extends src__core__combinators__delegate.DelegateParser {
    fastParseOn(buffer, position) {
      return this.delegate.fastParseOn(buffer, position);
    }
  };
  (src__core__definition__parser.GrammarParser.new = function(definition) {
    src__core__definition__parser.GrammarParser.__proto__.new.call(this, definition.build());
  }).prototype = src__core__definition__parser.GrammarParser.prototype;
  dart.addTypeTests(src__core__definition__parser.GrammarParser);
  dart.setMethodSignature(src__core__definition__parser.GrammarParser, () => ({
    __proto__: dart.getMethods(src__core__definition__parser.GrammarParser.__proto__),
    fastParseOn: dart.fnType(core.int, [core.String, core.int])
  }));
  src__core__expression__result.ExpressionResult = class ExpressionResult extends core.Object {
    get operator() {
      return this[operator$];
    }
    set operator(value) {
      super.operator = value;
    }
    get action() {
      return this[action$];
    }
    set action(value) {
      super.action = value;
    }
  };
  (src__core__expression__result.ExpressionResult.new = function(operator, action) {
    this[operator$] = operator;
    this[action$] = action;
  }).prototype = src__core__expression__result.ExpressionResult.prototype;
  dart.addTypeTests(src__core__expression__result.ExpressionResult);
  const operator$ = Symbol("ExpressionResult.operator");
  const action$ = Symbol("ExpressionResult.action");
  dart.setFieldSignature(src__core__expression__result.ExpressionResult, () => ({
    __proto__: dart.getFields(src__core__expression__result.ExpressionResult.__proto__),
    operator: dart.finalFieldType(core.Object),
    action: dart.finalFieldType(core.Function)
  }));
  const _primitives = Symbol('_primitives');
  const _prefix = Symbol('_prefix');
  const _postfix = Symbol('_postfix');
  const _right = Symbol('_right');
  const _left = Symbol('_left');
  const _buildChoice = Symbol('_buildChoice');
  const _buildPrimitive = Symbol('_buildPrimitive');
  const _buildPrefix = Symbol('_buildPrefix');
  const _buildPostfix = Symbol('_buildPostfix');
  const _buildRight = Symbol('_buildRight');
  const _buildLeft = Symbol('_buildLeft');
  src__core__expression__group.ExpressionGroup = class ExpressionGroup extends core.Object {
    primitive(T, parser, action) {
      if (action === void 0) action = null;
      this[_primitives][$add](action != null ? parser.map(dart.dynamic, action) : parser);
    }
    [_buildPrimitive](inner) {
      return this[_buildChoice](this[_primitives], inner);
    }
    prefix(T, parser, action) {
      if (action === void 0) action = null;
      let t = action;
      t == null ? action = dart.fn((operator, value) => JSArrayOfObject().of([operator, value]), dart.fnType(ListOfObject(), [T, core.Object])) : t;
      this[_prefix][$add](parser.map(dart.dynamic, dart.fn(operator => new src__core__expression__result.ExpressionResult.new(operator, action), dart.fnType(src__core__expression__result.ExpressionResult, [T]))));
    }
    [_buildPrefix](inner) {
      if (dart.test(this[_prefix][$isEmpty])) {
        return inner;
      } else {
        return new src__core__combinators__sequence.SequenceParser.new(JSArrayOfParser().of([this[_buildChoice](this[_prefix]).star(), inner])).map(dart.dynamic, dart.fn(tuple => dart.dsend(dart.dload(tuple[$first], 'reversed'), 'fold', [tuple[$last], dart.fn((value, result) => {
            let expressionResult = src__core__expression__result.ExpressionResult._check(result);
            return dart.dsend(expressionResult, 'action', [expressionResult.operator, value]);
          }, dynamicAnddynamicTodynamic())]), ListTodynamic()));
      }
    }
    postfix(T, parser, action) {
      if (action === void 0) action = null;
      let t = action;
      t == null ? action = dart.fn((value, operator) => JSArrayOfObject().of([value, operator]), dart.fnType(ListOfObject(), [core.Object, T])) : t;
      this[_postfix][$add](parser.map(dart.dynamic, dart.fn(operator => new src__core__expression__result.ExpressionResult.new(operator, action), dart.fnType(src__core__expression__result.ExpressionResult, [T]))));
    }
    [_buildPostfix](inner) {
      if (dart.test(this[_postfix][$isEmpty])) {
        return inner;
      } else {
        return new src__core__combinators__sequence.SequenceParser.new(JSArrayOfParser().of([inner, this[_buildChoice](this[_postfix]).star()])).map(dart.dynamic, dart.fn(tuple => dart.dsend(tuple[$last], 'fold', [tuple[$first], dart.fn((value, result) => {
            let expressionResult = src__core__expression__result.ExpressionResult._check(result);
            return dart.dsend(expressionResult, 'action', [value, expressionResult.operator]);
          }, dynamicAnddynamicTodynamic())]), ListTodynamic()));
      }
    }
    right(T, parser, action) {
      if (action === void 0) action = null;
      let t = action;
      t == null ? action = dart.fn((left, operator, right) => JSArrayOfObject().of([left, operator, right]), dart.fnType(ListOfObject(), [core.Object, T, core.Object])) : t;
      this[_right][$add](parser.map(dart.dynamic, dart.fn(operator => new src__core__expression__result.ExpressionResult.new(operator, action), dart.fnType(src__core__expression__result.ExpressionResult, [T]))));
    }
    [_buildRight](inner) {
      if (dart.test(this[_right][$isEmpty])) {
        return inner;
      } else {
        return inner.separatedBy(dart.dynamic, this[_buildChoice](this[_right])).map(dart.dynamic, dart.fn(sequence => {
          let result = sequence[$last];
          for (let i = dart.notNull(sequence[$length]) - 2; i > 0; i = i - 2) {
            let expressionResult = src__core__expression__result.ExpressionResult._check(sequence[$_get](i));
            result = dart.dsend(expressionResult, 'action', [sequence[$_get](i - 1), expressionResult.operator, result]);
          }
          return result;
        }, ListTodynamic()));
      }
    }
    left(T, parser, action) {
      if (action === void 0) action = null;
      let t = action;
      t == null ? action = dart.fn((left, operator, right) => JSArrayOfObject().of([left, operator, right]), dart.fnType(ListOfObject(), [core.Object, T, core.Object])) : t;
      this[_left][$add](parser.map(dart.dynamic, dart.fn(operator => new src__core__expression__result.ExpressionResult.new(operator, action), dart.fnType(src__core__expression__result.ExpressionResult, [T]))));
    }
    [_buildLeft](inner) {
      if (dart.test(this[_left][$isEmpty])) {
        return inner;
      } else {
        return inner.separatedBy(dart.dynamic, this[_buildChoice](this[_left])).map(dart.dynamic, dart.fn(sequence => {
          let result = sequence[$first];
          for (let i = 1; i < dart.notNull(sequence[$length]); i = i + 2) {
            let expressionResult = src__core__expression__result.ExpressionResult._check(sequence[$_get](i));
            result = dart.dsend(expressionResult, 'action', [result, expressionResult.operator, sequence[$_get](i + 1)]);
          }
          return result;
        }, ListTodynamic()));
      }
    }
    [_buildChoice](parsers, otherwise) {
      if (otherwise === void 0) otherwise = null;
      if (dart.test(parsers[$isEmpty])) {
        return otherwise;
      } else if (parsers[$length] === 1) {
        return parsers[$first];
      } else {
        return new src__core__combinators__choice.ChoiceParser.new(parsers);
      }
    }
    build(inner) {
      return this[_buildLeft](this[_buildRight](this[_buildPostfix](this[_buildPrefix](this[_buildPrimitive](inner)))));
    }
  };
  (src__core__expression__group.ExpressionGroup.new = function() {
    this[_primitives] = JSArrayOfParser().of([]);
    this[_prefix] = JSArrayOfParser().of([]);
    this[_postfix] = JSArrayOfParser().of([]);
    this[_right] = JSArrayOfParser().of([]);
    this[_left] = JSArrayOfParser().of([]);
  }).prototype = src__core__expression__group.ExpressionGroup.prototype;
  dart.addTypeTests(src__core__expression__group.ExpressionGroup);
  dart.setMethodSignature(src__core__expression__group.ExpressionGroup, () => ({
    __proto__: dart.getMethods(src__core__expression__group.ExpressionGroup.__proto__),
    primitive: dart.gFnType(T => [dart.void, [src__core__parser.Parser$(T)], [dart.fnType(core.Object, [T])]]),
    [_buildPrimitive]: dart.fnType(src__core__parser.Parser, [src__core__parser.Parser]),
    prefix: dart.gFnType(T => [dart.void, [src__core__parser.Parser$(T)], [dart.fnType(core.Object, [T, core.Object])]]),
    [_buildPrefix]: dart.fnType(src__core__parser.Parser, [src__core__parser.Parser]),
    postfix: dart.gFnType(T => [dart.void, [src__core__parser.Parser$(T)], [dart.fnType(core.Object, [core.Object, T])]]),
    [_buildPostfix]: dart.fnType(src__core__parser.Parser, [src__core__parser.Parser]),
    right: dart.gFnType(T => [dart.void, [src__core__parser.Parser$(T)], [dart.fnType(core.Object, [core.Object, T, core.Object])]]),
    [_buildRight]: dart.fnType(src__core__parser.Parser, [src__core__parser.Parser]),
    left: dart.gFnType(T => [dart.void, [src__core__parser.Parser$(T)], [dart.fnType(core.Object, [core.Object, T, core.Object])]]),
    [_buildLeft]: dart.fnType(src__core__parser.Parser, [src__core__parser.Parser]),
    [_buildChoice]: dart.fnType(src__core__parser.Parser, [core.List$(src__core__parser.Parser)], [src__core__parser.Parser]),
    build: dart.fnType(src__core__parser.Parser, [src__core__parser.Parser])
  }));
  dart.setFieldSignature(src__core__expression__group.ExpressionGroup, () => ({
    __proto__: dart.getFields(src__core__expression__group.ExpressionGroup.__proto__),
    [_primitives]: dart.finalFieldType(ListOfParser()),
    [_prefix]: dart.finalFieldType(ListOfParser()),
    [_postfix]: dart.finalFieldType(ListOfParser()),
    [_right]: dart.finalFieldType(ListOfParser()),
    [_left]: dart.finalFieldType(ListOfParser())
  }));
  const _groups = Symbol('_groups');
  src__core__expression__builder.ExpressionBuilder = class ExpressionBuilder extends core.Object {
    group() {
      let group = new src__core__expression__group.ExpressionGroup.new();
      this[_groups][$add](group);
      return group;
    }
    build() {
      return src__core__parser.Parser._check(this[_groups][$fold](src__core__parser.Parser, src__core__parsers__failure.failure(dart.dynamic, "Highest priority group should define a primitive parser."), dart.fn((a, b) => b.build(a), ParserAndExpressionGroupToParser())));
    }
  };
  (src__core__expression__builder.ExpressionBuilder.new = function() {
    this[_groups] = JSArrayOfExpressionGroup().of([]);
  }).prototype = src__core__expression__builder.ExpressionBuilder.prototype;
  dart.addTypeTests(src__core__expression__builder.ExpressionBuilder);
  dart.setMethodSignature(src__core__expression__builder.ExpressionBuilder, () => ({
    __proto__: dart.getMethods(src__core__expression__builder.ExpressionBuilder.__proto__),
    group: dart.fnType(src__core__expression__group.ExpressionGroup, []),
    build: dart.fnType(src__core__parser.Parser, [])
  }));
  dart.setFieldSignature(src__core__expression__builder.ExpressionBuilder, () => ({
    __proto__: dart.getFields(src__core__expression__builder.ExpressionBuilder.__proto__),
    [_groups]: dart.finalFieldType(ListOfExpressionGroup())
  }));
  src__core__parsers__epsilon.epsilon = function(T, result) {
    if (result === void 0) result = null;
    return new (src__core__parsers__epsilon.EpsilonParser$(T)).new(result);
  };
  const _is_EpsilonParser_default = Symbol('_is_EpsilonParser_default');
  src__core__parsers__epsilon.EpsilonParser$ = dart.generic(T => {
    let EpsilonParserOfT = () => (EpsilonParserOfT = dart.constFn(src__core__parsers__epsilon.EpsilonParser$(T)))();
    class EpsilonParser extends src__core__parser.Parser$(T) {
      get result() {
        return this[result$];
      }
      set result(value) {
        super.result = value;
      }
      parseOn(context) {
        return context.success(T, this.result);
      }
      fastParseOn(buffer, position) {
        return position;
      }
      copy() {
        return new (EpsilonParserOfT()).new(this.result);
      }
      hasEqualProperties(other) {
        EpsilonParserOfT()._check(other);
        return dart.test(super.hasEqualProperties(other)) && dart.equals(this.result, other.result);
      }
    }
    (EpsilonParser.new = function(result) {
      this[result$] = result;
      EpsilonParser.__proto__.new.call(this);
    }).prototype = EpsilonParser.prototype;
    dart.addTypeTests(EpsilonParser);
    EpsilonParser.prototype[_is_EpsilonParser_default] = true;
    const result$ = Symbol("EpsilonParser.result");
    dart.setMethodSignature(EpsilonParser, () => ({
      __proto__: dart.getMethods(EpsilonParser.__proto__),
      parseOn: dart.fnType(src__core__contexts__result.Result$(T), [src__core__contexts__context.Context]),
      copy: dart.fnType(src__core__parsers__epsilon.EpsilonParser$(T), [])
    }));
    dart.setFieldSignature(EpsilonParser, () => ({
      __proto__: dart.getFields(EpsilonParser.__proto__),
      result: dart.finalFieldType(T)
    }));
    return EpsilonParser;
  });
  src__core__parsers__epsilon.EpsilonParser = src__core__parsers__epsilon.EpsilonParser$();
  dart.addTypeTests(src__core__parsers__epsilon.EpsilonParser, _is_EpsilonParser_default);
  let const$5;
  src__core__parsers__position.position = function() {
    return const$5 || (const$5 = dart.const(new src__core__parsers__position.PositionParser.new()));
  };
  src__core__parsers__position.PositionParser = class PositionParser extends src__core__parser.Parser$(core.int) {
    parseOn(context) {
      return context.success(core.int, context.position);
    }
    fastParseOn(buffer, position) {
      return position;
    }
    copy() {
      return this;
    }
  };
  (src__core__parsers__position.PositionParser.new = function() {
    src__core__parsers__position.PositionParser.__proto__.new.call(this);
  }).prototype = src__core__parsers__position.PositionParser.prototype;
  dart.addTypeTests(src__core__parsers__position.PositionParser);
  dart.setMethodSignature(src__core__parsers__position.PositionParser, () => ({
    __proto__: dart.getMethods(src__core__parsers__position.PositionParser.__proto__),
    parseOn: dart.fnType(src__core__contexts__result.Result$(core.int), [src__core__contexts__context.Context]),
    fastParseOn: dart.fnType(core.int, [core.String, core.int]),
    copy: dart.fnType(src__core__parsers__position.PositionParser, [])
  }));
  src__core__predicates__predicate.predicate = function(length, predicate, message) {
    return new src__core__predicates__predicate.PredicateParser.new(length, predicate, message);
  };
  src__core__predicates__predicate.PredicateParser = class PredicateParser extends src__core__parser.Parser$(core.String) {
    get length() {
      return this[length$0];
    }
    set length(value) {
      super.length = value;
    }
    get predicate() {
      return this[predicate$0];
    }
    set predicate(value) {
      super.predicate = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    parseOn(context) {
      let start = context.position;
      let stop = dart.notNull(start) + dart.notNull(this.length);
      if (stop <= context.buffer.length) {
        let result = context.buffer[$substring](start, stop);
        if (dart.test(this.predicate(result))) {
          return context.success(core.String, result, stop);
        }
      }
      return context.failure(core.String, this.message);
    }
    fastParseOn(buffer, position) {
      let stop = dart.notNull(position) + dart.notNull(this.length);
      return stop <= buffer.length && dart.test(this.predicate(buffer[$substring](position, stop))) ? stop : -1;
    }
    toString() {
      return dart.str(super.toString()) + "[" + dart.str(this.message) + "]";
    }
    copy() {
      return new src__core__predicates__predicate.PredicateParser.new(this.length, this.predicate, this.message);
    }
    hasEqualProperties(other) {
      src__core__predicates__predicate.PredicateParser._check(other);
      return dart.test(super.hasEqualProperties(other)) && this.length == other.length && dart.equals(this.predicate, other.predicate) && this.message == other.message;
    }
  };
  (src__core__predicates__predicate.PredicateParser.new = function(length, predicate, message) {
    this[length$0] = length;
    this[predicate$0] = predicate;
    this[message$] = message;
    if (!(dart.notNull(length) > 0)) dart.assertFailed();
    if (!(predicate != null)) dart.assertFailed();
    if (!(message != null)) dart.assertFailed();
    src__core__predicates__predicate.PredicateParser.__proto__.new.call(this);
  }).prototype = src__core__predicates__predicate.PredicateParser.prototype;
  dart.addTypeTests(src__core__predicates__predicate.PredicateParser);
  const length$0 = Symbol("PredicateParser.length");
  const predicate$0 = Symbol("PredicateParser.predicate");
  const message$ = Symbol("PredicateParser.message");
  dart.setMethodSignature(src__core__predicates__predicate.PredicateParser, () => ({
    __proto__: dart.getMethods(src__core__predicates__predicate.PredicateParser.__proto__),
    parseOn: dart.fnType(src__core__contexts__result.Result$(core.String), [src__core__contexts__context.Context]),
    fastParseOn: dart.fnType(core.int, [core.String, core.int]),
    copy: dart.fnType(src__core__predicates__predicate.PredicateParser, [])
  }));
  dart.setFieldSignature(src__core__predicates__predicate.PredicateParser, () => ({
    __proto__: dart.getFields(src__core__predicates__predicate.PredicateParser.__proto__),
    length: dart.finalFieldType(core.int),
    predicate: dart.finalFieldType(StringTobool()),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__core__predicates__predicate.PredicateParser, ['toString']);
  src__core__predicates__any_in.anyIn = function(elements, message) {
    if (message === void 0) message = null;
    return src__core__predicates__predicate.predicate(1, dart.fn(each => elements[$contains](each), StringTobool()), message != null ? message : "any of " + dart.str(elements) + " expected");
  };
  src__core__predicates__string.string = function(element, message) {
    if (message === void 0) message = null;
    return src__core__predicates__predicate.predicate(element.length, dart.fn(each => element == each, StringTobool()), message != null ? message : dart.str(element) + " expected");
  };
  src__core__predicates__string.stringIgnoreCase = function(element, message) {
    if (message === void 0) message = null;
    let lowerElement = element[$toLowerCase]();
    return src__core__predicates__predicate.predicate(element.length, dart.fn(each => lowerElement === each[$toLowerCase](), StringTobool()), message != null ? message : dart.str(element) + " expected");
  };
  dart.trackLibraries("packages/petitparser/petitparser.ddc", {
    "package:petitparser/petitparser.dart": petitparser,
    "package:petitparser/src/core/characters/range.dart": src__core__characters__range,
    "package:petitparser/src/core/characters/ranges.dart": src__core__characters__ranges,
    "package:petitparser/src/core/characters/optimize.dart": src__core__characters__optimize,
    "package:petitparser/src/core/characters/any_of.dart": src__core__characters__any_of,
    "package:petitparser/src/core/characters/digit.dart": src__core__characters__digit,
    "package:petitparser/src/core/characters/letter.dart": src__core__characters__letter,
    "package:petitparser/src/core/characters/lowercase.dart": src__core__characters__lowercase,
    "package:petitparser/src/core/characters/not.dart": src__core__characters__not,
    "package:petitparser/src/core/characters/none_of.dart": src__core__characters__none_of,
    "package:petitparser/src/core/characters/pattern.dart": src__core__characters__pattern,
    "package:petitparser/src/core/characters/uppercase.dart": src__core__characters__uppercase,
    "package:petitparser/src/core/characters/word.dart": src__core__characters__word,
    "package:petitparser/src/core/definition/reference.dart": src__core__definition__reference,
    "package:petitparser/src/core/definition/grammar.dart": src__core__definition__grammar,
    "package:petitparser/src/core/definition/parser.dart": src__core__definition__parser,
    "package:petitparser/src/core/expression/result.dart": src__core__expression__result,
    "package:petitparser/src/core/expression/group.dart": src__core__expression__group,
    "package:petitparser/src/core/expression/builder.dart": src__core__expression__builder,
    "package:petitparser/src/core/parsers/epsilon.dart": src__core__parsers__epsilon,
    "package:petitparser/src/core/parsers/position.dart": src__core__parsers__position,
    "package:petitparser/src/core/predicates/predicate.dart": src__core__predicates__predicate,
    "package:petitparser/src/core/predicates/any_in.dart": src__core__predicates__any_in,
    "package:petitparser/src/core/predicates/string.dart": src__core__predicates__string
  }, '{"version":3,"sourceRoot":"","sources":["src/core/characters/range.dart","src/core/characters/ranges.dart","src/core/characters/optimize.dart","src/core/characters/any_of.dart","src/core/characters/digit.dart","src/core/characters/letter.dart","src/core/characters/lowercase.dart","src/core/characters/not.dart","src/core/characters/none_of.dart","src/core/characters/pattern.dart","src/core/characters/uppercase.dart","src/core/characters/word.dart","src/core/definition/reference.dart","src/core/definition/grammar.dart","src/core/definition/parser.dart","src/core/expression/result.dart","src/core/expression/group.dart","src/core/expression/builder.dart","src/core/parsers/epsilon.dart","src/core/parsers/position.dart","src/core/predicates/predicate.dart","src/core/predicates/any_in.dart","src/core/predicates/string.dart"],"names":[],"mappings":"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","file":"petitparser.ddc.js"}');
  // Exports:
  return {
    petitparser: petitparser,
    src__core__characters__range: src__core__characters__range,
    src__core__characters__ranges: src__core__characters__ranges,
    src__core__characters__optimize: src__core__characters__optimize,
    src__core__characters__any_of: src__core__characters__any_of,
    src__core__characters__digit: src__core__characters__digit,
    src__core__characters__letter: src__core__characters__letter,
    src__core__characters__lowercase: src__core__characters__lowercase,
    src__core__characters__not: src__core__characters__not,
    src__core__characters__none_of: src__core__characters__none_of,
    src__core__characters__pattern: src__core__characters__pattern,
    src__core__characters__uppercase: src__core__characters__uppercase,
    src__core__characters__word: src__core__characters__word,
    src__core__definition__reference: src__core__definition__reference,
    src__core__definition__grammar: src__core__definition__grammar,
    src__core__definition__parser: src__core__definition__parser,
    src__core__expression__result: src__core__expression__result,
    src__core__expression__group: src__core__expression__group,
    src__core__expression__builder: src__core__expression__builder,
    src__core__parsers__epsilon: src__core__parsers__epsilon,
    src__core__parsers__position: src__core__parsers__position,
    src__core__predicates__predicate: src__core__predicates__predicate,
    src__core__predicates__any_in: src__core__predicates__any_in,
    src__core__predicates__string: src__core__predicates__string
  };
});

//# sourceMappingURL=petitparser.ddc.js.map
