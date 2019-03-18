define(['dart_sdk', 'packages/petitparser/petitparser', 'packages/petitparser/src/core/actions/action', 'packages/collection/src/canonicalized_map'], function(dart_sdk, petitparser, action, canonicalized_map) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__characters__pattern = petitparser.src__core__characters__pattern;
  const src__core__characters__digit = petitparser.src__core__characters__digit;
  const src__core__characters__word = petitparser.src__core__characters__word;
  const src__core__predicates__string = petitparser.src__core__predicates__string;
  const src__core__definition__grammar = petitparser.src__core__definition__grammar;
  const src__core__parser = action.src__core__parser;
  const src__core__characters__char = action.src__core__characters__char;
  const src__core__contexts__result = action.src__core__contexts__result;
  const src__core__contexts__context = action.src__core__contexts__context;
  const src__core__predicates__any = action.src__core__predicates__any;
  const src__core__characters__whitespace = action.src__core__characters__whitespace;
  const src__core__token = action.src__core__token;
  const src__wrappers = canonicalized_map.src__wrappers;
  const _root = Object.create(null);
  const src__xml__utils__node_type = Object.create(_root);
  const src__xml__utils__token = Object.create(_root);
  const src__xml__utils__attribute_type = Object.create(_root);
  const src__xml__utils__entities = Object.create(_root);
  const src__xml__visitors__transformer = Object.create(_root);
  const src__xml__visitors__normalizer = Object.create(_root);
  const src__xml__utils__node_list = Object.create(_root);
  const src__xml__visitors__visitable = Object.create(_root);
  const src__xml__nodes__document_fragment = Object.create(_root);
  const src__xml__visitors__writer = Object.create(_root);
  const src__xml__nodes__text = Object.create(_root);
  const src__xml__nodes__processing = Object.create(_root);
  const src__xml__visitors__pretty_writer = Object.create(_root);
  const src__xml__utils__writable = Object.create(_root);
  const src__xml__utils__simple_name = Object.create(_root);
  const src__xml__utils__prefix_name = Object.create(_root);
  const src__xml__utils__exceptions = Object.create(_root);
  const src__xml__utils__owned = Object.create(_root);
  const src__xml__utils__name = Object.create(_root);
  const src__xml__utils__named = Object.create(_root);
  const src__xml__utils__name_matcher = Object.create(_root);
  const src__xml__nodes__parent = Object.create(_root);
  const src__xml__nodes__element = Object.create(_root);
  const src__xml__nodes__document = Object.create(_root);
  const src__xml__nodes__doctype = Object.create(_root);
  const src__xml__nodes__comment = Object.create(_root);
  const src__xml__visitors__visitor = Object.create(_root);
  const src__xml__nodes__data = Object.create(_root);
  const src__xml__nodes__cdata = Object.create(_root);
  const src__xml__iterators__preceding = Object.create(_root);
  const src__xml__iterators__following = Object.create(_root);
  const src__xml__iterators__descendants = Object.create(_root);
  const src__xml__iterators__ancestors = Object.create(_root);
  const src__xml__nodes__node = Object.create(_root);
  const src__xml__nodes__attribute = Object.create(_root);
  const src__xml__builder = Object.create(_root);
  const src__xml__production = Object.create(_root);
  const src__xml__grammar = Object.create(_root);
  const src__xml__parser = Object.create(_root);
  const $_get = dartx._get;
  const $codeUnitAt = dartx.codeUnitAt;
  const $substring = dartx.substring;
  const $replaceAllMapped = dartx.replaceAllMapped;
  const $forEach = dartx.forEach;
  const $length = dartx.length;
  const $isEmpty = dartx.isEmpty;
  const $removeAt = dartx.removeAt;
  const $map = dartx.map;
  const $addAll = dartx.addAll;
  const $add = dartx.add;
  const $_set = dartx._set;
  const $fillRange = dartx.fillRange;
  const $setRange = dartx.setRange;
  const $replaceRange = dartx.replaceRange;
  const $setAll = dartx.setAll;
  const $insert = dartx.insert;
  const $insertAll = dartx.insertAll;
  const $where = dartx.where;
  const $whereType = dartx.whereType;
  const $first = dartx.first;
  const $last = dartx.last;
  const $join = dartx.join;
  const $isNotEmpty = dartx.isNotEmpty;
  const $trim = dartx.trim;
  const $indexOf = dartx.indexOf;
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  const $contains = dartx.contains;
  const $iterator = dartx.iterator;
  const $removeLast = dartx.removeLast;
  const $clear = dartx.clear;
  const $reversed = dartx.reversed;
  const $sublist = dartx.sublist;
  const $toString = dartx.toString;
  const $firstWhere = dartx.firstWhere;
  const $remove = dartx.remove;
  const $containsKey = dartx.containsKey;
  const $any = dartx.any;
  const $values = dartx.values;
  const $lastWhere = dartx.lastWhere;
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let ParserOfString = () => (ParserOfString = dart.constFn(src__core__parser.Parser$(core.String)))();
  let JSArrayOfParser = () => (JSArrayOfParser = dart.constFn(_interceptors.JSArray$(src__core__parser.Parser)))();
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  let LinkedMapOfXmlAttributeType$String = () => (LinkedMapOfXmlAttributeType$String = dart.constFn(_js_helper.LinkedMap$(src__xml__utils__attribute_type.XmlAttributeType, core.String)))();
  let LinkedMapOfXmlAttributeType$Pattern = () => (LinkedMapOfXmlAttributeType$Pattern = dart.constFn(_js_helper.LinkedMap$(src__xml__utils__attribute_type.XmlAttributeType, core.Pattern)))();
  let LinkedMapOfXmlAttributeType$MatchToString = () => (LinkedMapOfXmlAttributeType$MatchToString = dart.constFn(_js_helper.LinkedMap$(src__xml__utils__attribute_type.XmlAttributeType, MatchToString())))();
  let IterableOfXmlNode = () => (IterableOfXmlNode = dart.constFn(core.Iterable$(src__xml__nodes__node.XmlNode)))();
  let IterableOfXmlAttribute = () => (IterableOfXmlAttribute = dart.constFn(core.Iterable$(src__xml__nodes__attribute.XmlAttribute)))();
  let SetOfXmlNodeType = () => (SetOfXmlNodeType = dart.constFn(core.Set$(src__xml__utils__node_type.XmlNodeType)))();
  let XmlNodeListOfXmlNode = () => (XmlNodeListOfXmlNode = dart.constFn(src__xml__utils__node_list.XmlNodeList$(src__xml__nodes__node.XmlNode)))();
  let IterableOfXmlElement = () => (IterableOfXmlElement = dart.constFn(core.Iterable$(src__xml__nodes__element.XmlElement)))();
  let XmlNodeToString = () => (XmlNodeToString = dart.constFn(dart.fnType(core.String, [src__xml__nodes__node.XmlNode])))();
  let XmlNodeTobool = () => (XmlNodeTobool = dart.constFn(dart.fnType(core.bool, [src__xml__nodes__node.XmlNode])))();
  let IterableOfString = () => (IterableOfString = dart.constFn(core.Iterable$(core.String)))();
  let XmlNamedTobool = () => (XmlNamedTobool = dart.constFn(dart.fnType(core.bool, [src__xml__utils__named.XmlNamed])))();
  let XmlNodeListOfXmlAttribute = () => (XmlNodeListOfXmlAttribute = dart.constFn(src__xml__utils__node_list.XmlNodeList$(src__xml__nodes__attribute.XmlAttribute)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTobottom = () => (VoidTobottom = dart.constFn(dart.fnType(dart.bottom, [])))();
  let JSArrayOfXmlNode = () => (JSArrayOfXmlNode = dart.constFn(_interceptors.JSArray$(src__xml__nodes__node.XmlNode)))();
  let ListOfXmlNode = () => (ListOfXmlNode = dart.constFn(core.List$(src__xml__nodes__node.XmlNode)))();
  let ListOfXmlNodeBuilder = () => (ListOfXmlNodeBuilder = dart.constFn(core.List$(src__xml__builder.XmlNodeBuilder)))();
  let XmlAttributeTobool = () => (XmlAttributeTobool = dart.constFn(dart.fnType(core.bool, [src__xml__nodes__attribute.XmlAttribute])))();
  let StringAndNamespaceDataToNull = () => (StringAndNamespaceDataToNull = dart.constFn(dart.fnType(core.Null, [core.String, src__xml__builder.NamespaceData])))();
  let XmlNodeBuilderTobool = () => (XmlNodeBuilderTobool = dart.constFn(dart.fnType(core.bool, [src__xml__builder.XmlNodeBuilder])))();
  let NamespaceDataTobool = () => (NamespaceDataTobool = dart.constFn(dart.fnType(core.bool, [src__xml__builder.NamespaceData])))();
  let IdentityMapOfString$NamespaceData = () => (IdentityMapOfString$NamespaceData = dart.constFn(_js_helper.IdentityMap$(core.String, src__xml__builder.NamespaceData)))();
  let MapOfString$NamespaceData = () => (MapOfString$NamespaceData = dart.constFn(core.Map$(core.String, src__xml__builder.NamespaceData)))();
  let JSArrayOfXmlAttribute = () => (JSArrayOfXmlAttribute = dart.constFn(_interceptors.JSArray$(src__xml__nodes__attribute.XmlAttribute)))();
  let ListOfXmlAttribute = () => (ListOfXmlAttribute = dart.constFn(core.List$(src__xml__nodes__attribute.XmlAttribute)))();
  let dynamicToList = () => (dynamicToList = dart.constFn(dart.fnType(core.List, [dart.dynamic])))();
  src__xml__utils__node_type.XmlNodeType = class XmlNodeType extends core.Object {
    toString() {
      return {
        0: "XmlNodeType.ELEMENT",
        1: "XmlNodeType.ATTRIBUTE",
        2: "XmlNodeType.TEXT",
        3: "XmlNodeType.CDATA",
        4: "XmlNodeType.PROCESSING",
        5: "XmlNodeType.COMMENT",
        6: "XmlNodeType.DOCUMENT",
        7: "XmlNodeType.DOCUMENT_FRAGMENT",
        8: "XmlNodeType.DOCUMENT_TYPE"
      }[this.index];
    }
  };
  (src__xml__utils__node_type.XmlNodeType.new = function(x) {
    this.index = x;
  }).prototype = src__xml__utils__node_type.XmlNodeType.prototype;
  dart.addTypeTests(src__xml__utils__node_type.XmlNodeType);
  dart.setFieldSignature(src__xml__utils__node_type.XmlNodeType, () => ({
    __proto__: dart.getFields(src__xml__utils__node_type.XmlNodeType.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__xml__utils__node_type.XmlNodeType, ['toString']);
  src__xml__utils__node_type.XmlNodeType.ELEMENT = dart.const(new src__xml__utils__node_type.XmlNodeType.new(0));
  src__xml__utils__node_type.XmlNodeType.ATTRIBUTE = dart.const(new src__xml__utils__node_type.XmlNodeType.new(1));
  src__xml__utils__node_type.XmlNodeType.TEXT = dart.const(new src__xml__utils__node_type.XmlNodeType.new(2));
  src__xml__utils__node_type.XmlNodeType.CDATA = dart.const(new src__xml__utils__node_type.XmlNodeType.new(3));
  src__xml__utils__node_type.XmlNodeType.PROCESSING = dart.const(new src__xml__utils__node_type.XmlNodeType.new(4));
  src__xml__utils__node_type.XmlNodeType.COMMENT = dart.const(new src__xml__utils__node_type.XmlNodeType.new(5));
  src__xml__utils__node_type.XmlNodeType.DOCUMENT = dart.const(new src__xml__utils__node_type.XmlNodeType.new(6));
  src__xml__utils__node_type.XmlNodeType.DOCUMENT_FRAGMENT = dart.const(new src__xml__utils__node_type.XmlNodeType.new(7));
  src__xml__utils__node_type.XmlNodeType.DOCUMENT_TYPE = dart.const(new src__xml__utils__node_type.XmlNodeType.new(8));
  src__xml__utils__node_type.XmlNodeType.values = dart.constList([src__xml__utils__node_type.XmlNodeType.ELEMENT, src__xml__utils__node_type.XmlNodeType.ATTRIBUTE, src__xml__utils__node_type.XmlNodeType.TEXT, src__xml__utils__node_type.XmlNodeType.CDATA, src__xml__utils__node_type.XmlNodeType.PROCESSING, src__xml__utils__node_type.XmlNodeType.COMMENT, src__xml__utils__node_type.XmlNodeType.DOCUMENT, src__xml__utils__node_type.XmlNodeType.DOCUMENT_FRAGMENT, src__xml__utils__node_type.XmlNodeType.DOCUMENT_TYPE], src__xml__utils__node_type.XmlNodeType);
  src__xml__utils__token.XmlToken = class XmlToken extends core.Object {};
  (src__xml__utils__token.XmlToken.new = function() {
  }).prototype = src__xml__utils__token.XmlToken.prototype;
  dart.addTypeTests(src__xml__utils__token.XmlToken);
  dart.defineLazy(src__xml__utils__token.XmlToken, {
    /*src__xml__utils__token.XmlToken.doubleQuote*/get doubleQuote() {
      return "\"";
    },
    /*src__xml__utils__token.XmlToken.singleQuote*/get singleQuote() {
      return "'";
    },
    /*src__xml__utils__token.XmlToken.equals*/get equals() {
      return "=";
    },
    /*src__xml__utils__token.XmlToken.namespace*/get namespace() {
      return ":";
    },
    /*src__xml__utils__token.XmlToken.whitespace*/get whitespace() {
      return " ";
    },
    /*src__xml__utils__token.XmlToken.openComment*/get openComment() {
      return "<!--";
    },
    /*src__xml__utils__token.XmlToken.closeComment*/get closeComment() {
      return "-->";
    },
    /*src__xml__utils__token.XmlToken.openCDATA*/get openCDATA() {
      return "<![CDATA[";
    },
    /*src__xml__utils__token.XmlToken.closeCDATA*/get closeCDATA() {
      return "]]>";
    },
    /*src__xml__utils__token.XmlToken.openElement*/get openElement() {
      return "<";
    },
    /*src__xml__utils__token.XmlToken.closeElement*/get closeElement() {
      return ">";
    },
    /*src__xml__utils__token.XmlToken.openEndElement*/get openEndElement() {
      return "</";
    },
    /*src__xml__utils__token.XmlToken.closeEndElement*/get closeEndElement() {
      return "/>";
    },
    /*src__xml__utils__token.XmlToken.openDoctype*/get openDoctype() {
      return "<!DOCTYPE";
    },
    /*src__xml__utils__token.XmlToken.closeDoctype*/get closeDoctype() {
      return ">";
    },
    /*src__xml__utils__token.XmlToken.openDoctypeBlock*/get openDoctypeBlock() {
      return "[";
    },
    /*src__xml__utils__token.XmlToken.closeDoctypeBlock*/get closeDoctypeBlock() {
      return "]";
    },
    /*src__xml__utils__token.XmlToken.openProcessing*/get openProcessing() {
      return "<?";
    },
    /*src__xml__utils__token.XmlToken.closeProcessing*/get closeProcessing() {
      return "?>";
    }
  });
  src__xml__utils__attribute_type.XmlAttributeType = class XmlAttributeType extends core.Object {
    toString() {
      return {
        0: "XmlAttributeType.SINGLE_QUOTE",
        1: "XmlAttributeType.DOUBLE_QUOTE"
      }[this.index];
    }
  };
  (src__xml__utils__attribute_type.XmlAttributeType.new = function(x) {
    this.index = x;
  }).prototype = src__xml__utils__attribute_type.XmlAttributeType.prototype;
  dart.addTypeTests(src__xml__utils__attribute_type.XmlAttributeType);
  dart.setFieldSignature(src__xml__utils__attribute_type.XmlAttributeType, () => ({
    __proto__: dart.getFields(src__xml__utils__attribute_type.XmlAttributeType.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__xml__utils__attribute_type.XmlAttributeType, ['toString']);
  src__xml__utils__attribute_type.XmlAttributeType.SINGLE_QUOTE = dart.const(new src__xml__utils__attribute_type.XmlAttributeType.new(0));
  src__xml__utils__attribute_type.XmlAttributeType.DOUBLE_QUOTE = dart.const(new src__xml__utils__attribute_type.XmlAttributeType.new(1));
  src__xml__utils__attribute_type.XmlAttributeType.values = dart.constList([src__xml__utils__attribute_type.XmlAttributeType.SINGLE_QUOTE, src__xml__utils__attribute_type.XmlAttributeType.DOUBLE_QUOTE], src__xml__utils__attribute_type.XmlAttributeType);
  dart.defineLazy(src__xml__utils__entities, {
    /*src__xml__utils__entities._entityHex*/get _entityHex() {
      return ParserOfString()._check(src__core__characters__pattern.pattern("xX").seq(src__core__characters__pattern.pattern("A-Fa-f0-9").plus().flatten("Expected hexadecimal character reference").map(dart.dynamic, dart.fn(value => core.String.fromCharCode(core.int.parse(value, {radix: 16})), StringToString()))).pick(core.String, 1));
    },
    /*src__xml__utils__entities._entityDigit*/get _entityDigit() {
      return ParserOfString()._check(src__core__characters__char.char("#").seq(src__xml__utils__entities._entityHex.or(src__core__characters__digit.digit().plus().flatten("Expected decimal character reference").map(dart.dynamic, dart.fn(value => core.String.fromCharCode(core.int.parse(value)), StringToString())))).pick(core.String, 1));
    },
    /*src__xml__utils__entities._entity*/get _entity() {
      return ParserOfString()._check(src__core__characters__char.char("&").seq(src__xml__utils__entities._entityDigit.or(src__core__characters__word.word().plus().flatten("Expected named character reference").map(dart.dynamic, dart.fn(value => src__xml__utils__entities.entityToChar[$_get](value), StringToString())))).seq(src__core__characters__char.char(";")).pick(core.String, 1));
    }
  });
  const _stopper = Symbol('_stopper');
  const _stopperCode = Symbol('_stopperCode');
  const _minLength = Symbol('_minLength');
  src__xml__utils__entities.XmlCharacterDataParser = class XmlCharacterDataParser extends src__core__parser.Parser$(core.String) {
    parseOn(context) {
      let input = context.buffer;
      let length = input.length;
      let output = new core.StringBuffer.new();
      let position = context.position;
      let start = position;
      while (dart.notNull(position) < length) {
        let value = input[$codeUnitAt](position);
        if (value === this[_stopperCode]) {
          break;
        } else if (value === 38) {
          let result = src__xml__utils__entities._entity.parseOn(context.success(core.Null, null, position));
          if (dart.test(result.isSuccess) && result.value != null) {
            output.write(input[$substring](start, position));
            output.write(result.value);
            position = result.position;
            start = position;
          } else {
            position = dart.notNull(position) + 1;
          }
        } else {
          position = dart.notNull(position) + 1;
        }
      }
      output.write(input[$substring](start, position));
      return dart.notNull(output.length) < dart.notNull(this[_minLength]) ? context.failure(core.String, "Unable to parse chracter data.") : context.success(core.String, output.toString(), position);
    }
    fastParseOn(buffer, position) {
      let start = position;
      let length = buffer.length;
      while (dart.notNull(position) < length) {
        let value = buffer[$codeUnitAt](position);
        if (value === this[_stopperCode]) {
          break;
        } else {
          position = dart.notNull(position) + 1;
        }
      }
      return dart.notNull(position) - dart.notNull(start) < dart.notNull(this[_minLength]) ? -1 : position;
    }
    get children() {
      return JSArrayOfParser().of([src__xml__utils__entities._entity]);
    }
    copy() {
      return new src__xml__utils__entities.XmlCharacterDataParser.new(this[_stopper], this[_minLength]);
    }
    hasEqualProperties(other) {
      src__xml__utils__entities.XmlCharacterDataParser._check(other);
      return dart.test(super.hasEqualProperties(other)) && this[_stopper] == other[_stopper] && this[_minLength] == other[_minLength];
    }
  };
  (src__xml__utils__entities.XmlCharacterDataParser.new = function(stopper, minLength) {
    this[_stopper] = stopper;
    this[_stopperCode] = stopper[$codeUnitAt](0);
    this[_minLength] = minLength;
    src__xml__utils__entities.XmlCharacterDataParser.__proto__.new.call(this);
  }).prototype = src__xml__utils__entities.XmlCharacterDataParser.prototype;
  dart.addTypeTests(src__xml__utils__entities.XmlCharacterDataParser);
  dart.setMethodSignature(src__xml__utils__entities.XmlCharacterDataParser, () => ({
    __proto__: dart.getMethods(src__xml__utils__entities.XmlCharacterDataParser.__proto__),
    parseOn: dart.fnType(src__core__contexts__result.Result$(core.String), [src__core__contexts__context.Context]),
    fastParseOn: dart.fnType(core.int, [core.String, core.int]),
    copy: dart.fnType(src__xml__utils__entities.XmlCharacterDataParser, [])
  }));
  dart.setGetterSignature(src__xml__utils__entities.XmlCharacterDataParser, () => ({
    __proto__: dart.getGetters(src__xml__utils__entities.XmlCharacterDataParser.__proto__),
    children: core.List$(src__core__parser.Parser)
  }));
  dart.setFieldSignature(src__xml__utils__entities.XmlCharacterDataParser, () => ({
    __proto__: dart.getFields(src__xml__utils__entities.XmlCharacterDataParser.__proto__),
    [_stopper]: dart.finalFieldType(core.String),
    [_stopperCode]: dart.finalFieldType(core.int),
    [_minLength]: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(src__xml__utils__entities, {
    /*src__xml__utils__entities.entityToChar*/get entityToChar() {
      return dart.constMap(core.String, core.String, ["lt", "<", "gt", ">", "amp", "&", "apos", "'", "quot", "\"", "Aacute", "Á", "aacute", "á", "Acirc", "Â", "acirc", "â", "acute", "´", "AElig", "Æ", "aelig", "æ", "Agrave", "À", "agrave", "à", "alefsym", "ℵ", "Alpha", "Α", "alpha", "α", "and", "∧", "ang", "∠", "Aring", "Å", "aring", "å", "asymp", "≈", "Atilde", "Ã", "atilde", "ã", "Auml", "Ä", "auml", "ä", "bdquo", "„", "Beta", "Β", "beta", "β", "brvbar", "¦", "bull", "•", "cap", "∩", "Ccedil", "Ç", "ccedil", "ç", "cedil", "¸", "cent", "¢", "Chi", "Χ", "chi", "χ", "circ", "ˆ", "clubs", "♣", "cong", "≅", "copy", "©", "crarr", "↵", "cup", "∪", "curren", "¤", "dagger", "†", "Dagger", "‡", "darr", "↓", "dArr", "⇓", "deg", "°", "Delta", "Δ", "delta", "δ", "diams", "♦", "divide", "÷", "Eacute", "É", "eacute", "é", "Ecirc", "Ê", "ecirc", "ê", "Egrave", "È", "egrave", "è", "empty", "∅", "emsp", " ", "ensp", " ", "Epsilon", "Ε", "epsilon", "ε", "equiv", "≡", "Eta", "Η", "eta", "η", "ETH", "Ð", "eth", "ð", "Euml", "Ë", "euml", "ë", "euro", "€", "exist", "∃", "fnof", "ƒ", "forall", "∀", "frac12", "½", "frac14", "¼", "frac34", "¾", "frasl", "⁄", "Gamma", "Γ", "gamma", "γ", "ge", "≥", "harr", "↔", "hArr", "⇔", "hearts", "♥", "hellip", "…", "Iacute", "Í", "iacute", "í", "Icirc", "Î", "icirc", "î", "iexcl", "¡", "Igrave", "Ì", "igrave", "ì", "image", "ℑ", "infin", "∞", "int", "∫", "Iota", "Ι", "iota", "ι", "iquest", "¿", "isin", "∈", "Iuml", "Ï", "iuml", "ï", "Kappa", "Κ", "kappa", "κ", "Lambda", "Λ", "lambda", "λ", "lang", "〈", "laquo", "«", "larr", "←", "lArr", "⇐", "lceil", "⌈", "ldquo", "“", "le", "≤", "lfloor", "⌊", "lowast", "∗", "loz", "◊", "lrm", "‎", "lsaquo", "‹", "lsquo", "‘", "macr", "¯", "mdash", "—", "micro", "µ", "middot", "·", "minus", "−", "Mu", "Μ", "mu", "μ", "nabla", "∇", "nbsp", " ", "ndash", "–", "ne", "≠", "ni", "∋", "not", "¬", "notin", "∉", "nsub", "⊄", "Ntilde", "Ñ", "ntilde", "ñ", "Nu", "Ν", "nu", "ν", "Oacute", "Ó", "oacute", "ó", "Ocirc", "Ô", "ocirc", "ô", "OElig", "Œ", "oelig", "œ", "Ograve", "Ò", "ograve", "ò", "oline", "‾", "Omega", "Ω", "omega", "ω", "Omicron", "Ο", "omicron", "ο", "oplus", "⊕", "or", "∨", "ordf", "ª", "ordm", "º", "Oslash", "Ø", "oslash", "ø", "Otilde", "Õ", "otilde", "õ", "otimes", "⊗", "Ouml", "Ö", "ouml", "ö", "para", "¶", "part", "∂", "permil", "‰", "perp", "⊥", "Phi", "Φ", "phi", "φ", "Pi", "Π", "pi", "π", "piv", "ϖ", "plusmn", "±", "pound", "£", "prime", "′", "Prime", "″", "prod", "∏", "prop", "∝", "Psi", "Ψ", "psi", "ψ", "radic", "√", "rang", "〉", "raquo", "»", "rarr", "→", "rArr", "⇒", "rceil", "⌉", "rdquo", "”", "real", "ℜ", "reg", "®", "rfloor", "⌋", "Rho", "Ρ", "rho", "ρ", "rlm", "‏", "rsaquo", "›", "rsquo", "’", "sbquo", "‚", "Scaron", "Š", "scaron", "š", "sdot", "⋅", "sect", "§", "shy", "­", "Sigma", "Σ", "sigma", "σ", "sigmaf", "ς", "sim", "∼", "spades", "♠", "sub", "⊂", "sube", "⊆", "sum", "∑", "sup", "⊃", "sup1", "¹", "sup2", "²", "sup3", "³", "supe", "⊇", "szlig", "ß", "Tau", "Τ", "tau", "τ", "there4", "∴", "Theta", "Θ", "theta", "θ", "thetasym", "ϑ", "thinsp", " ", "THORN", "Þ", "thorn", "þ", "tilde", "˜", "times", "×", "trade", "™", "Uacute", "Ú", "uacute", "ú", "uarr", "↑", "uArr", "⇑", "Ucirc", "Û", "ucirc", "û", "Ugrave", "Ù", "ugrave", "ù", "uml", "¨", "upsih", "ϒ", "Upsilon", "Υ", "upsilon", "υ", "Uuml", "Ü", "uuml", "ü", "weierp", "℘", "Xi", "Ξ", "xi", "ξ", "Yacute", "Ý", "yacute", "ý", "yen", "¥", "yuml", "ÿ", "Yuml", "Ÿ", "Zeta", "Ζ", "zeta", "ζ", "zwj", "‍", "zwnj", "‌"]);
    }
  });
  src__xml__utils__entities.encodeXmlText = function(input) {
    return input[$replaceAllMapped](src__xml__utils__entities._textPattern, dart.fn(src__xml__utils__entities._textReplace, MatchToString()));
  };
  dart.defineLazy(src__xml__utils__entities, {
    /*src__xml__utils__entities._textPattern*/get _textPattern() {
      return core.RegExp.new("[&<]|]]>");
    }
  });
  src__xml__utils__entities._textReplace = function(match) {
    switch (match.group(0)) {
      case "<":
      {
        return "&lt;";
      }
      case "&":
      {
        return "&amp;";
      }
      case "]]>":
      {
        return "]]&gt;";
      }
      default:
      {
        dart.throw(new core.AssertionError.new());
      }
    }
  };
  src__xml__utils__entities.encodeXmlAttributeValue = function(input, attributeType) {
    return input[$replaceAllMapped](src__xml__utils__entities._attributePattern[$_get](attributeType), src__xml__utils__entities._attributeReplace[$_get](attributeType));
  };
  src__xml__utils__entities.encodeXmlAttributeValueWithQuotes = function(input, attributeType) {
    let quote = src__xml__utils__entities.attributeQuote[$_get](attributeType);
    let buffer = new core.StringBuffer.new();
    buffer.write(quote);
    buffer.write(src__xml__utils__entities.encodeXmlAttributeValue(input, attributeType));
    buffer.write(quote);
    return buffer.toString();
  };
  dart.defineLazy(src__xml__utils__entities, {
    /*src__xml__utils__entities.attributeQuote*/get attributeQuote() {
      return new (LinkedMapOfXmlAttributeType$String()).from([src__xml__utils__attribute_type.XmlAttributeType.SINGLE_QUOTE, "'", src__xml__utils__attribute_type.XmlAttributeType.DOUBLE_QUOTE, "\""]);
    },
    /*src__xml__utils__entities._attributePattern*/get _attributePattern() {
      return new (LinkedMapOfXmlAttributeType$Pattern()).from([src__xml__utils__attribute_type.XmlAttributeType.SINGLE_QUOTE, core.RegExp.new("['&<\\n\\r\\t]"), src__xml__utils__attribute_type.XmlAttributeType.DOUBLE_QUOTE, core.RegExp.new("[\"&<\\n\\r\\t]")]);
    },
    /*src__xml__utils__entities._attributeReplace*/get _attributeReplace() {
      return new (LinkedMapOfXmlAttributeType$MatchToString()).from([src__xml__utils__attribute_type.XmlAttributeType.SINGLE_QUOTE, dart.fn(match => {
          switch (match.group(0)) {
            case "'":
            {
              return "&apos;";
            }
            case "&":
            {
              return "&amp;";
            }
            case "<":
            {
              return "&lt;";
            }
            case "\n":
            {
              return "&#xA;";
            }
            case "\r":
            {
              return "&#xD;";
            }
            case "\t":
            {
              return "&#x9;";
            }
            default:
            {
              dart.throw(new core.AssertionError.new());
            }
          }
        }, MatchToString()), src__xml__utils__attribute_type.XmlAttributeType.DOUBLE_QUOTE, dart.fn(match => {
          switch (match.group(0)) {
            case "\"":
            {
              return "&quot;";
            }
            case "&":
            {
              return "&amp;";
            }
            case "<":
            {
              return "&lt;";
            }
            case "\n":
            {
              return "&#xA;";
            }
            case "\r":
            {
              return "&#xD;";
            }
            case "\t":
            {
              return "&#x9;";
            }
            default:
            {
              dart.throw(new core.AssertionError.new());
            }
          }
        }, MatchToString())]);
    }
  });
  src__xml__visitors__visitor.XmlVisitor = class XmlVisitor extends core.Object {
    visit(T, visitable) {
      return T._check(visitable.accept(this));
    }
    visitName(name) {
      return null;
    }
    visitAttribute(node) {
      return null;
    }
    visitDocument(node) {
      return null;
    }
    visitDocumentFragment(node) {
      return null;
    }
    visitElement(node) {
      return null;
    }
    visitCDATA(node) {
      return null;
    }
    visitComment(node) {
      return null;
    }
    visitDoctype(node) {
      return null;
    }
    visitProcessing(node) {
      return null;
    }
    visitText(node) {
      return null;
    }
  };
  (src__xml__visitors__visitor.XmlVisitor.new = function() {
  }).prototype = src__xml__visitors__visitor.XmlVisitor.prototype;
  dart.addTypeTests(src__xml__visitors__visitor.XmlVisitor);
  dart.setMethodSignature(src__xml__visitors__visitor.XmlVisitor, () => ({
    __proto__: dart.getMethods(src__xml__visitors__visitor.XmlVisitor.__proto__),
    visit: dart.gFnType(T => [T, [src__xml__visitors__visitable.XmlVisitable]]),
    visitName: dart.fnType(dart.dynamic, [src__xml__utils__name.XmlName]),
    visitAttribute: dart.fnType(dart.dynamic, [src__xml__nodes__attribute.XmlAttribute]),
    visitDocument: dart.fnType(dart.dynamic, [src__xml__nodes__document.XmlDocument]),
    visitDocumentFragment: dart.fnType(dart.dynamic, [src__xml__nodes__document_fragment.XmlDocumentFragment]),
    visitElement: dart.fnType(dart.dynamic, [src__xml__nodes__element.XmlElement]),
    visitCDATA: dart.fnType(dart.dynamic, [src__xml__nodes__cdata.XmlCDATA]),
    visitComment: dart.fnType(dart.dynamic, [src__xml__nodes__comment.XmlComment]),
    visitDoctype: dart.fnType(dart.dynamic, [src__xml__nodes__doctype.XmlDoctype]),
    visitProcessing: dart.fnType(dart.dynamic, [src__xml__nodes__processing.XmlProcessing]),
    visitText: dart.fnType(dart.dynamic, [src__xml__nodes__text.XmlText])
  }));
  src__xml__visitors__transformer.XmlTransformer = class XmlTransformer extends src__xml__visitors__visitor.XmlVisitor {
    visitAttribute(node) {
      return new src__xml__nodes__attribute.XmlAttribute.new(this.visit(src__xml__utils__name.XmlName, node.name), node.value, node.attributeType);
    }
    visitCDATA(node) {
      return new src__xml__nodes__cdata.XmlCDATA.new(node.text);
    }
    visitComment(node) {
      return new src__xml__nodes__comment.XmlComment.new(node.text);
    }
    visitDoctype(node) {
      return new src__xml__nodes__doctype.XmlDoctype.new(node.text);
    }
    visitDocument(node) {
      return new src__xml__nodes__document.XmlDocument.new(IterableOfXmlNode()._check(node.children.map(src__xml__nodes__node.XmlNode, dart.gbind(dart.bind(this, 'visit'), src__xml__nodes__node.XmlNode))));
    }
    visitDocumentFragment(node) {
      return new src__xml__nodes__document_fragment.XmlDocumentFragment.new(IterableOfXmlNode()._check(node.children.map(src__xml__nodes__node.XmlNode, dart.gbind(dart.bind(this, 'visit'), src__xml__nodes__node.XmlNode))));
    }
    visitElement(node) {
      return new src__xml__nodes__element.XmlElement.new(this.visit(src__xml__utils__name.XmlName, node.name), IterableOfXmlAttribute()._check(node.attributes.map(src__xml__nodes__attribute.XmlAttribute, dart.gbind(dart.bind(this, 'visit'), src__xml__nodes__attribute.XmlAttribute))), IterableOfXmlNode()._check(node.children.map(src__xml__nodes__node.XmlNode, dart.gbind(dart.bind(this, 'visit'), src__xml__nodes__node.XmlNode))), node.isSelfClosing);
    }
    visitName(name) {
      return src__xml__utils__name.XmlName.fromString(name.qualified);
    }
    visitProcessing(node) {
      return new src__xml__nodes__processing.XmlProcessing.new(node.target, node.text);
    }
    visitText(node) {
      return new src__xml__nodes__text.XmlText.new(node.text);
    }
  };
  (src__xml__visitors__transformer.XmlTransformer.new = function() {
  }).prototype = src__xml__visitors__transformer.XmlTransformer.prototype;
  dart.addTypeTests(src__xml__visitors__transformer.XmlTransformer);
  dart.setMethodSignature(src__xml__visitors__transformer.XmlTransformer, () => ({
    __proto__: dart.getMethods(src__xml__visitors__transformer.XmlTransformer.__proto__),
    visitAttribute: dart.fnType(src__xml__nodes__attribute.XmlAttribute, [src__xml__nodes__attribute.XmlAttribute]),
    visitCDATA: dart.fnType(src__xml__nodes__cdata.XmlCDATA, [src__xml__nodes__cdata.XmlCDATA]),
    visitComment: dart.fnType(src__xml__nodes__comment.XmlComment, [src__xml__nodes__comment.XmlComment]),
    visitDoctype: dart.fnType(src__xml__nodes__doctype.XmlDoctype, [src__xml__nodes__doctype.XmlDoctype]),
    visitDocument: dart.fnType(src__xml__nodes__document.XmlDocument, [src__xml__nodes__document.XmlDocument]),
    visitDocumentFragment: dart.fnType(src__xml__nodes__document_fragment.XmlDocumentFragment, [src__xml__nodes__document_fragment.XmlDocumentFragment]),
    visitElement: dart.fnType(src__xml__nodes__element.XmlElement, [src__xml__nodes__element.XmlElement]),
    visitName: dart.fnType(src__xml__utils__name.XmlName, [src__xml__utils__name.XmlName]),
    visitProcessing: dart.fnType(src__xml__nodes__processing.XmlProcessing, [src__xml__nodes__processing.XmlProcessing]),
    visitText: dart.fnType(src__xml__nodes__text.XmlText, [src__xml__nodes__text.XmlText])
  }));
  dart.defineLazy(src__xml__visitors__transformer.XmlTransformer, {
    /*src__xml__visitors__transformer.XmlTransformer.defaultInstance*/get defaultInstance() {
      return new src__xml__visitors__transformer.XmlTransformer.new();
    }
  });
  const _normalize = Symbol('_normalize');
  const _removeEmpty = Symbol('_removeEmpty');
  const _mergeAdjacent = Symbol('_mergeAdjacent');
  src__xml__visitors__normalizer.XmlNormalizer = class XmlNormalizer extends src__xml__visitors__visitor.XmlVisitor {
    visitDocument(node) {
      return this[_normalize](node.children);
    }
    visitDocumentFragment(node) {
      return this[_normalize](node.children);
    }
    visitElement(node) {
      return this[_normalize](node.children);
    }
    [_normalize](children) {
      this[_removeEmpty](children);
      this[_mergeAdjacent](children);
      children[$forEach](dart.gbind(dart.bind(this, 'visit'), dart.dynamic));
    }
    [_removeEmpty](children) {
      for (let i = 0; i < dart.notNull(children[$length]);) {
        let node = children[$_get](i);
        if (node.nodeType === src__xml__utils__node_type.XmlNodeType.TEXT && node.text[$isEmpty]) {
          children[$removeAt](i);
        } else {
          i++;
        }
      }
    }
    [_mergeAdjacent](children) {
      let previousText = null;
      for (let i = 0; i < dart.notNull(children[$length]);) {
        let node = children[$_get](i);
        if (node.nodeType === src__xml__utils__node_type.XmlNodeType.TEXT) {
          if (previousText == null) {
            previousText = src__xml__nodes__text.XmlText._check(node);
            i++;
          } else {
            previousText.text = dart.notNull(previousText.text) + dart.notNull(node.text);
            children[$removeAt](i);
          }
        } else {
          previousText = null;
          i++;
        }
      }
    }
  };
  (src__xml__visitors__normalizer.XmlNormalizer.new = function() {
  }).prototype = src__xml__visitors__normalizer.XmlNormalizer.prototype;
  dart.addTypeTests(src__xml__visitors__normalizer.XmlNormalizer);
  dart.setMethodSignature(src__xml__visitors__normalizer.XmlNormalizer, () => ({
    __proto__: dart.getMethods(src__xml__visitors__normalizer.XmlNormalizer.__proto__),
    visitDocument: dart.fnType(dart.void, [src__xml__nodes__document.XmlDocument]),
    visitDocumentFragment: dart.fnType(dart.void, [src__xml__nodes__document_fragment.XmlDocumentFragment]),
    visitElement: dart.fnType(dart.void, [src__xml__nodes__element.XmlElement]),
    [_normalize]: dart.fnType(dart.void, [core.List$(src__xml__nodes__node.XmlNode)]),
    [_removeEmpty]: dart.fnType(dart.void, [core.List$(src__xml__nodes__node.XmlNode)]),
    [_mergeAdjacent]: dart.fnType(dart.void, [core.List$(src__xml__nodes__node.XmlNode)])
  }));
  dart.defineLazy(src__xml__visitors__normalizer.XmlNormalizer, {
    /*src__xml__visitors__normalizer.XmlNormalizer.defaultInstance*/get defaultInstance() {
      return new src__xml__visitors__normalizer.XmlNormalizer.new();
    }
  });
  const _expandFragment = Symbol('_expandFragment');
  const _expandNodes = Symbol('_expandNodes');
  const _parent = Symbol('_parent');
  src__xml__utils__owned.XmlOwned = class XmlOwned extends core.Object {
    get parent() {
      return this[_parent];
    }
    get root() {
      return src__xml__nodes__node.XmlNode._check(dart.test(this.hasParent) ? this.parent.root : this);
    }
    get hasParent() {
      return this.parent != null;
    }
    attachParent(parent) {
      src__xml__utils__exceptions.XmlParentException.checkNoParent(this);
      this[_parent] = parent;
    }
    detachParent(parent) {
      this[_parent] = null;
    }
  };
  (src__xml__utils__owned.XmlOwned.new = function() {
    this[_parent] = null;
  }).prototype = src__xml__utils__owned.XmlOwned.prototype;
  dart.addTypeTests(src__xml__utils__owned.XmlOwned);
  dart.setMethodSignature(src__xml__utils__owned.XmlOwned, () => ({
    __proto__: dart.getMethods(src__xml__utils__owned.XmlOwned.__proto__),
    attachParent: dart.fnType(dart.void, [src__xml__nodes__node.XmlNode]),
    detachParent: dart.fnType(dart.void, [src__xml__nodes__node.XmlNode])
  }));
  dart.setGetterSignature(src__xml__utils__owned.XmlOwned, () => ({
    __proto__: dart.getGetters(src__xml__utils__owned.XmlOwned.__proto__),
    parent: src__xml__nodes__node.XmlNode,
    root: src__xml__nodes__node.XmlNode,
    hasParent: core.bool
  }));
  dart.setFieldSignature(src__xml__utils__owned.XmlOwned, () => ({
    __proto__: dart.getFields(src__xml__utils__owned.XmlOwned.__proto__),
    [_parent]: dart.fieldType(src__xml__nodes__node.XmlNode)
  }));
  const _is_XmlNodeList_default = Symbol('_is_XmlNodeList_default');
  src__xml__utils__node_list.XmlNodeList$ = dart.generic(E => {
    let JSArrayOfE = () => (JSArrayOfE = dart.constFn(_interceptors.JSArray$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let ETobool = () => (ETobool = dart.constFn(dart.fnType(core.bool, [E])))();
    let XmlNodeToE = () => (XmlNodeToE = dart.constFn(dart.fnType(E, [src__xml__nodes__node.XmlNode])))();
    const DelegatingList_XmlOwned$ = class DelegatingList_XmlOwned extends src__wrappers.DelegatingList$(E) {};
    (DelegatingList_XmlOwned$.new = function(base) {
      src__xml__utils__owned.XmlOwned.new.call(this);
      DelegatingList_XmlOwned$.__proto__.new.call(this, base);
    }).prototype = DelegatingList_XmlOwned$.prototype;
    dart.applyMixin(DelegatingList_XmlOwned$, src__xml__utils__owned.XmlOwned);
    class XmlNodeList extends DelegatingList_XmlOwned$ {
      get validNodeTypes() {
        return this[validNodeTypes$];
      }
      set validNodeTypes(value) {
        super.validNodeTypes = value;
      }
      _set(index, value) {
        E._check(value);
        src__xml__utils__exceptions.XmlNodeTypeException.checkNotNull(value);
        core.RangeError.checkValidIndex(index, this);
        src__xml__utils__exceptions.XmlNodeTypeException.checkValidType(value, this.validNodeTypes);
        src__xml__utils__exceptions.XmlParentException.checkNoParent(value);
        this._get(index).detachParent(this.parent);
        super._set(index, value);
        value.attachParent(this.parent);
        return value;
      }
      set length(length) {
        return dart.throw(new core.UnsupportedError.new("Unsupported length change of node list."));
      }
      get length() {
        return super.length;
      }
      add(value) {
        E._check(value);
        src__xml__utils__exceptions.XmlNodeTypeException.checkNotNull(value);
        if (value.nodeType === src__xml__utils__node_type.XmlNodeType.DOCUMENT_FRAGMENT) {
          this.addAll(this[_expandFragment](value));
        } else {
          src__xml__utils__exceptions.XmlNodeTypeException.checkValidType(value, this.validNodeTypes);
          src__xml__utils__exceptions.XmlParentException.checkNoParent(value);
          super.add(value);
          value.attachParent(this.parent);
        }
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        let expanded = this[_expandNodes](iterable);
        super.addAll(expanded);
        for (let node of expanded) {
          node.attachParent(this.parent);
        }
      }
      remove(value) {
        let removed = super.remove(value);
        if (dart.test(removed)) {
          let node = E._check(value);
          node.detachParent(this.parent);
        }
        return removed;
      }
      removeWhere(test) {
        super.removeWhere(dart.fn(node => {
          let remove = test(node);
          if (dart.test(remove)) {
            node.detachParent(this.parent);
          }
          return remove;
        }, ETobool()));
      }
      retainWhere(test) {
        super.retainWhere(dart.fn(node => {
          let retain = test(node);
          if (!dart.test(retain)) {
            node.detachParent(this.parent);
          }
          return retain;
        }, ETobool()));
      }
      clear() {
        for (let node of this) {
          node.detachParent(this.parent);
        }
        super.clear();
      }
      removeLast() {
        let node = super.removeLast();
        node.detachParent(this.parent);
        return node;
      }
      removeRange(start, end) {
        core.RangeError.checkValidRange(start, end, this.length);
        for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
          this._get(i).detachParent(this.parent);
        }
        super.removeRange(start, end);
      }
      fillRange(start, end, fillValue) {
        if (fillValue === void 0) fillValue = null;
        E._check(fillValue);
        return dart.throw(new core.UnsupportedError.new("Unsupported range filling of node list."));
      }
      setRange(start, end, iterable, skipCount) {
        IterableOfE()._check(iterable);
        if (skipCount === void 0) skipCount = 0;
        core.RangeError.checkValidRange(start, end, this.length);
        let expanded = this[_expandNodes](iterable);
        for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
          this._get(i).detachParent(this.parent);
        }
        super.setRange(start, end, expanded, skipCount);
        for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
          this._get(i).attachParent(this.parent);
        }
      }
      replaceRange(start, end, iterable) {
        IterableOfE()._check(iterable);
        core.RangeError.checkValidRange(start, end, this.length);
        let expanded = this[_expandNodes](iterable);
        for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
          this._get(i).detachParent(this.parent);
        }
        super.replaceRange(start, end, expanded);
        for (let node of expanded) {
          node.attachParent(this.parent);
        }
      }
      setAll(index, iterable) {
        IterableOfE()._check(iterable);
        return dart.throw(new core.UnimplementedError.new());
      }
      insert(index, element) {
        E._check(element);
        src__xml__utils__exceptions.XmlNodeTypeException.checkNotNull(element);
        if (element.nodeType === src__xml__utils__node_type.XmlNodeType.DOCUMENT_FRAGMENT) {
          this.insertAll(index, this[_expandFragment](element));
        } else {
          src__xml__utils__exceptions.XmlNodeTypeException.checkValidType(element, this.validNodeTypes);
          src__xml__utils__exceptions.XmlParentException.checkNoParent(element);
          super.insert(index, element);
          element.attachParent(this.parent);
        }
      }
      insertAll(index, iterable) {
        IterableOfE()._check(iterable);
        let expanded = this[_expandNodes](iterable);
        super.insertAll(index, expanded);
        for (let node of expanded) {
          node.attachParent(this.parent);
        }
      }
      removeAt(index) {
        core.RangeError.checkValidIndex(index, this);
        this._get(index).detachParent(this.parent);
        return super.removeAt(index);
      }
      [_expandFragment](fragment) {
        E._check(fragment);
        return IterableOfE()._check(fragment.children[$map](E, dart.fn(node => {
          src__xml__utils__exceptions.XmlNodeTypeException.checkValidType(node, this.validNodeTypes);
          return E._check(node.copy());
        }, XmlNodeToE())));
      }
      [_expandNodes](iterable) {
        IterableOfE()._check(iterable);
        let expanded = JSArrayOfE().of([]);
        for (let node of iterable) {
          src__xml__utils__exceptions.XmlNodeTypeException.checkNotNull(node);
          if (node.nodeType === src__xml__utils__node_type.XmlNodeType.DOCUMENT_FRAGMENT) {
            expanded[$addAll](this[_expandFragment](node));
          } else {
            src__xml__utils__exceptions.XmlNodeTypeException.checkValidType(node, this.validNodeTypes);
            src__xml__utils__exceptions.XmlParentException.checkNoParent(node);
            expanded[$add](node);
          }
        }
        return expanded;
      }
    }
    (XmlNodeList.new = function(validNodeTypes) {
      this[validNodeTypes$] = validNodeTypes;
      XmlNodeList.__proto__.new.call(this, JSArrayOfE().of([]));
    }).prototype = XmlNodeList.prototype;
    dart.addTypeTests(XmlNodeList);
    XmlNodeList.prototype[_is_XmlNodeList_default] = true;
    const validNodeTypes$ = Symbol("XmlNodeList.validNodeTypes");
    dart.setMethodSignature(XmlNodeList, () => ({
      __proto__: dart.getMethods(XmlNodeList.__proto__),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object]),
      add: dart.fnType(dart.void, [core.Object]),
      [$add]: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      fillRange: dart.fnType(dart.void, [core.int, core.int], [core.Object]),
      [$fillRange]: dart.fnType(dart.void, [core.int, core.int], [core.Object]),
      setRange: dart.fnType(dart.void, [core.int, core.int, core.Object], [core.int]),
      [$setRange]: dart.fnType(dart.void, [core.int, core.int, core.Object], [core.int]),
      replaceRange: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      [$replaceRange]: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      setAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$setAll]: dart.fnType(dart.void, [core.int, core.Object]),
      insert: dart.fnType(dart.void, [core.int, core.Object]),
      [$insert]: dart.fnType(dart.void, [core.int, core.Object]),
      insertAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$insertAll]: dart.fnType(dart.void, [core.int, core.Object]),
      [_expandFragment]: dart.fnType(core.Iterable$(E), [core.Object]),
      [_expandNodes]: dart.fnType(core.Iterable$(E), [core.Object])
    }));
    dart.setFieldSignature(XmlNodeList, () => ({
      __proto__: dart.getFields(XmlNodeList.__proto__),
      validNodeTypes: dart.finalFieldType(SetOfXmlNodeType())
    }));
    dart.defineExtensionMethods(XmlNodeList, [
      '_set',
      'add',
      'addAll',
      'remove',
      'removeWhere',
      'retainWhere',
      'clear',
      'removeLast',
      'removeRange',
      'fillRange',
      'setRange',
      'replaceRange',
      'setAll',
      'insert',
      'insertAll',
      'removeAt'
    ]);
    dart.defineExtensionAccessors(XmlNodeList, ['length']);
    return XmlNodeList;
  });
  src__xml__utils__node_list.XmlNodeList = src__xml__utils__node_list.XmlNodeList$();
  dart.addTypeTests(src__xml__utils__node_list.XmlNodeList, _is_XmlNodeList_default);
  src__xml__visitors__visitable.XmlVisitable = class XmlVisitable extends core.Object {};
  (src__xml__visitors__visitable.XmlVisitable.new = function() {
  }).prototype = src__xml__visitors__visitable.XmlVisitable.prototype;
  dart.addTypeTests(src__xml__visitors__visitable.XmlVisitable);
  let const$;
  const _filterElements = Symbol('_filterElements');
  let const$0;
  let const$1;
  src__xml__utils__writable.XmlWritable = class XmlWritable extends core.Object {
    writeTo(buffer) {
      new src__xml__visitors__writer.XmlWriter.new(buffer).visit(dart.dynamic, this);
    }
    writePrettyTo(buffer, level, indent) {
      new src__xml__visitors__pretty_writer.XmlPrettyWriter.new(buffer, level, indent).visit(dart.dynamic, this);
    }
    toString() {
      return this.toXmlString();
    }
    toXmlString(opts) {
      let pretty = opts && 'pretty' in opts ? opts.pretty : false;
      let indent = opts && 'indent' in opts ? opts.indent : "  ";
      let buffer = new core.StringBuffer.new();
      if (dart.test(pretty)) {
        this.writePrettyTo(buffer, 0, indent);
      } else {
        this.writeTo(buffer);
      }
      return buffer.toString();
    }
  };
  (src__xml__utils__writable.XmlWritable.new = function() {
  }).prototype = src__xml__utils__writable.XmlWritable.prototype;
  dart.addTypeTests(src__xml__utils__writable.XmlWritable);
  src__xml__utils__writable.XmlWritable[dart.implements] = () => [src__xml__visitors__visitable.XmlVisitable];
  dart.setMethodSignature(src__xml__utils__writable.XmlWritable, () => ({
    __proto__: dart.getMethods(src__xml__utils__writable.XmlWritable.__proto__),
    writeTo: dart.fnType(dart.void, [core.StringBuffer]),
    writePrettyTo: dart.fnType(dart.void, [core.StringBuffer, core.int, core.String]),
    toXmlString: dart.fnType(core.String, [], {pretty: core.bool, indent: core.String})
  }));
  dart.defineExtensionMethods(src__xml__utils__writable.XmlWritable, ['toString']);
  const Object_XmlVisitable$ = class Object_XmlVisitable extends core.Object {};
  (Object_XmlVisitable$.new = function() {
  }).prototype = Object_XmlVisitable$.prototype;
  dart.applyMixin(Object_XmlVisitable$, src__xml__visitors__visitable.XmlVisitable);
  const Object_XmlWritable$ = class Object_XmlWritable extends Object_XmlVisitable$ {};
  (Object_XmlWritable$.new = function() {
  }).prototype = Object_XmlWritable$.prototype;
  dart.applyMixin(Object_XmlWritable$, src__xml__utils__writable.XmlWritable);
  const Object_XmlOwned$ = class Object_XmlOwned extends Object_XmlWritable$ {};
  (Object_XmlOwned$.new = function() {
    src__xml__utils__owned.XmlOwned.new.call(this);
  }).prototype = Object_XmlOwned$.prototype;
  dart.applyMixin(Object_XmlOwned$, src__xml__utils__owned.XmlOwned);
  src__xml__nodes__node.XmlNode = class XmlNode extends Object_XmlOwned$ {
    get children() {
      return const$0 || (const$0 = dart.constList([], src__xml__nodes__node.XmlNode));
    }
    get attributes() {
      return const$1 || (const$1 = dart.constList([], src__xml__nodes__attribute.XmlAttribute));
    }
    get preceding() {
      return new src__xml__iterators__preceding.XmlPrecedingIterable.new(this);
    }
    get descendants() {
      return new src__xml__iterators__descendants.XmlDescendantsIterable.new(this);
    }
    get following() {
      return new src__xml__iterators__following.XmlFollowingIterable.new(this);
    }
    get ancestors() {
      return new src__xml__iterators__ancestors.XmlAncestorsIterable.new(this);
    }
    get document() {
      return this.parent == null ? null : this.parent.document;
    }
    get depth() {
      return this.parent == null ? 0 : dart.notNull(this.parent.depth) + 1;
    }
    get firstChild() {
      return dart.test(this.children[$isEmpty]) ? null : this.children[$first];
    }
    get lastChild() {
      return dart.test(this.children[$isEmpty]) ? null : this.children[$last];
    }
    get text() {
      return IterableOfString()._check(this.descendants[$where](dart.fn(node => src__xml__nodes__text.XmlText.is(node) || src__xml__nodes__cdata.XmlCDATA.is(node), XmlNodeTobool()))[$map](core.String, dart.fn(node => node.text, XmlNodeToString())))[$join]();
    }
    get nextSibling() {
      if (this.parent != null) {
        let siblings = this.parent.children;
        for (let i = 0; i < dart.notNull(siblings[$length]) - 1; i++) {
          if (dart.equals(siblings[$_get](i), this)) {
            return siblings[$_get](i + 1);
          }
        }
      }
      return null;
    }
    get previousSibling() {
      if (this.parent != null) {
        let siblings = this.parent.children;
        for (let i = dart.notNull(siblings[$length]) - 1; i > 0; i--) {
          if (dart.equals(siblings[$_get](i), this)) {
            return siblings[$_get](i - 1);
          }
        }
      }
      return null;
    }
    copy() {
      return src__xml__visitors__transformer.XmlTransformer.defaultInstance.visit(src__xml__nodes__node.XmlNode, this);
    }
    normalize() {
      return src__xml__visitors__normalizer.XmlNormalizer.defaultInstance.visit(dart.void, this);
    }
  };
  (src__xml__nodes__node.XmlNode.new = function() {
    src__xml__nodes__node.XmlNode.__proto__.new.call(this);
  }).prototype = src__xml__nodes__node.XmlNode.prototype;
  dart.addTypeTests(src__xml__nodes__node.XmlNode);
  dart.setMethodSignature(src__xml__nodes__node.XmlNode, () => ({
    __proto__: dart.getMethods(src__xml__nodes__node.XmlNode.__proto__),
    copy: dart.fnType(src__xml__nodes__node.XmlNode, []),
    normalize: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__xml__nodes__node.XmlNode, () => ({
    __proto__: dart.getGetters(src__xml__nodes__node.XmlNode.__proto__),
    children: core.List$(src__xml__nodes__node.XmlNode),
    attributes: core.List$(src__xml__nodes__attribute.XmlAttribute),
    preceding: core.Iterable$(src__xml__nodes__node.XmlNode),
    descendants: core.Iterable$(src__xml__nodes__node.XmlNode),
    following: core.Iterable$(src__xml__nodes__node.XmlNode),
    ancestors: core.Iterable$(src__xml__nodes__node.XmlNode),
    document: src__xml__nodes__document.XmlDocument,
    depth: core.int,
    firstChild: src__xml__nodes__node.XmlNode,
    lastChild: src__xml__nodes__node.XmlNode,
    text: core.String,
    nextSibling: src__xml__nodes__node.XmlNode,
    previousSibling: src__xml__nodes__node.XmlNode
  }));
  src__xml__nodes__parent.XmlParent = class XmlParent extends src__xml__nodes__node.XmlNode {
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    findElements(name, opts) {
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      return this[_filterElements](this.children, name, namespace);
    }
    findAllElements(name, opts) {
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      return this[_filterElements](this.descendants, name, namespace);
    }
    [_filterElements](iterable, name, namespace) {
      let matcher = src__xml__utils__name_matcher.createNameMatcher(name, namespace);
      return IterableOfXmlElement()._check(iterable[$whereType](src__xml__nodes__element.XmlElement))[$where](matcher);
    }
  };
  (src__xml__nodes__parent.XmlParent.new = function(supportedChildrenTypes, children) {
    this[children$] = new (XmlNodeListOfXmlNode()).new(supportedChildrenTypes);
    src__xml__nodes__parent.XmlParent.__proto__.new.call(this);
    this.children.attachParent(this);
    this.children.addAll(children);
  }).prototype = src__xml__nodes__parent.XmlParent.prototype;
  dart.addTypeTests(src__xml__nodes__parent.XmlParent);
  const children$ = Symbol("XmlParent.children");
  dart.setMethodSignature(src__xml__nodes__parent.XmlParent, () => ({
    __proto__: dart.getMethods(src__xml__nodes__parent.XmlParent.__proto__),
    findElements: dart.fnType(core.Iterable$(src__xml__nodes__element.XmlElement), [core.String], {namespace: core.String}),
    findAllElements: dart.fnType(core.Iterable$(src__xml__nodes__element.XmlElement), [core.String], {namespace: core.String}),
    [_filterElements]: dart.fnType(core.Iterable$(src__xml__nodes__element.XmlElement), [core.Iterable$(src__xml__nodes__node.XmlNode), core.String, core.String])
  }));
  dart.setFieldSignature(src__xml__nodes__parent.XmlParent, () => ({
    __proto__: dart.getFields(src__xml__nodes__parent.XmlParent.__proto__),
    children: dart.finalFieldType(XmlNodeListOfXmlNode())
  }));
  src__xml__nodes__document_fragment.XmlDocumentFragment = class XmlDocumentFragment extends src__xml__nodes__parent.XmlParent {
    get document() {
      return null;
    }
    get text() {
      return null;
    }
    get nodeType() {
      return src__xml__utils__node_type.XmlNodeType.DOCUMENT_FRAGMENT;
    }
    accept(visitor) {
      return visitor.visitDocumentFragment(this);
    }
  };
  (src__xml__nodes__document_fragment.XmlDocumentFragment.new = function(children) {
    if (children === void 0) children = const$ || (const$ = dart.constList([], src__xml__nodes__node.XmlNode));
    src__xml__nodes__document_fragment.XmlDocumentFragment.__proto__.new.call(this, src__xml__nodes__document_fragment.childrenNodeTypes, children);
  }).prototype = src__xml__nodes__document_fragment.XmlDocumentFragment.prototype;
  dart.addTypeTests(src__xml__nodes__document_fragment.XmlDocumentFragment);
  dart.setMethodSignature(src__xml__nodes__document_fragment.XmlDocumentFragment, () => ({
    __proto__: dart.getMethods(src__xml__nodes__document_fragment.XmlDocumentFragment.__proto__),
    accept: dart.fnType(dart.dynamic, [src__xml__visitors__visitor.XmlVisitor])
  }));
  dart.setGetterSignature(src__xml__nodes__document_fragment.XmlDocumentFragment, () => ({
    __proto__: dart.getGetters(src__xml__nodes__document_fragment.XmlDocumentFragment.__proto__),
    nodeType: src__xml__utils__node_type.XmlNodeType
  }));
  dart.defineLazy(src__xml__nodes__document_fragment, {
    /*src__xml__nodes__document_fragment.childrenNodeTypes*/get childrenNodeTypes() {
      return dart.constSet(src__xml__utils__node_type.XmlNodeType, [src__xml__utils__node_type.XmlNodeType.CDATA, src__xml__utils__node_type.XmlNodeType.COMMENT, src__xml__utils__node_type.XmlNodeType.DOCUMENT_TYPE, src__xml__utils__node_type.XmlNodeType.ELEMENT, src__xml__utils__node_type.XmlNodeType.PROCESSING, src__xml__utils__node_type.XmlNodeType.TEXT]);
    }
  });
  src__xml__visitors__writer.XmlWriter = class XmlWriter extends src__xml__visitors__visitor.XmlVisitor {
    get buffer() {
      return this[buffer$];
    }
    set buffer(value) {
      super.buffer = value;
    }
    visitAttribute(node) {
      this.visit(dart.dynamic, node.name);
      this.buffer.write(src__xml__utils__token.XmlToken.equals);
      this.buffer.write(src__xml__utils__entities.encodeXmlAttributeValueWithQuotes(node.value, node.attributeType));
    }
    visitCDATA(node) {
      this.buffer.write(src__xml__utils__token.XmlToken.openCDATA);
      this.buffer.write(node.text);
      this.buffer.write(src__xml__utils__token.XmlToken.closeCDATA);
    }
    visitComment(node) {
      this.buffer.write(src__xml__utils__token.XmlToken.openComment);
      this.buffer.write(node.text);
      this.buffer.write(src__xml__utils__token.XmlToken.closeComment);
    }
    visitDoctype(node) {
      this.buffer.write(src__xml__utils__token.XmlToken.openDoctype);
      this.buffer.write(src__xml__utils__token.XmlToken.whitespace);
      this.buffer.write(node.text);
      this.buffer.write(src__xml__utils__token.XmlToken.closeDoctype);
    }
    visitDocument(node) {
      this.writeChildren(node);
    }
    visitDocumentFragment(node) {
      this.buffer.write("#document-fragment");
    }
    visitElement(node) {
      this.buffer.write(src__xml__utils__token.XmlToken.openElement);
      this.visit(dart.dynamic, node.name);
      this.writeAttributes(node);
      if (dart.test(node.children.isEmpty) && dart.test(node.isSelfClosing)) {
        this.buffer.write(src__xml__utils__token.XmlToken.closeEndElement);
      } else {
        this.buffer.write(src__xml__utils__token.XmlToken.closeElement);
        this.writeChildren(node);
        this.buffer.write(src__xml__utils__token.XmlToken.openEndElement);
        this.visit(dart.dynamic, node.name);
        this.buffer.write(src__xml__utils__token.XmlToken.closeElement);
      }
    }
    visitName(name) {
      this.buffer.write(name.qualified);
    }
    visitProcessing(node) {
      this.buffer.write(src__xml__utils__token.XmlToken.openProcessing);
      this.buffer.write(node.target);
      if (node.text[$isNotEmpty]) {
        this.buffer.write(src__xml__utils__token.XmlToken.whitespace);
        this.buffer.write(node.text);
      }
      this.buffer.write(src__xml__utils__token.XmlToken.closeProcessing);
    }
    visitText(node) {
      this.buffer.write(src__xml__utils__entities.encodeXmlText(node.text));
    }
    writeAttributes(node) {
      for (let attribute of node.attributes) {
        this.buffer.write(src__xml__utils__token.XmlToken.whitespace);
        this.visit(dart.dynamic, attribute);
      }
    }
    writeChildren(node) {
      node.children[$forEach](dart.gbind(dart.bind(this, 'visit'), dart.dynamic));
    }
  };
  (src__xml__visitors__writer.XmlWriter.new = function(buffer) {
    this[buffer$] = buffer;
  }).prototype = src__xml__visitors__writer.XmlWriter.prototype;
  dart.addTypeTests(src__xml__visitors__writer.XmlWriter);
  const buffer$ = Symbol("XmlWriter.buffer");
  dart.setMethodSignature(src__xml__visitors__writer.XmlWriter, () => ({
    __proto__: dart.getMethods(src__xml__visitors__writer.XmlWriter.__proto__),
    visitAttribute: dart.fnType(dart.void, [src__xml__nodes__attribute.XmlAttribute]),
    visitCDATA: dart.fnType(dart.void, [src__xml__nodes__cdata.XmlCDATA]),
    visitComment: dart.fnType(dart.void, [src__xml__nodes__comment.XmlComment]),
    visitDoctype: dart.fnType(dart.void, [src__xml__nodes__doctype.XmlDoctype]),
    visitDocument: dart.fnType(dart.void, [src__xml__nodes__document.XmlDocument]),
    visitDocumentFragment: dart.fnType(dart.void, [src__xml__nodes__document_fragment.XmlDocumentFragment]),
    visitElement: dart.fnType(dart.void, [src__xml__nodes__element.XmlElement]),
    visitName: dart.fnType(dart.void, [src__xml__utils__name.XmlName]),
    visitProcessing: dart.fnType(dart.void, [src__xml__nodes__processing.XmlProcessing]),
    visitText: dart.fnType(dart.void, [src__xml__nodes__text.XmlText]),
    writeAttributes: dart.fnType(dart.void, [src__xml__nodes__node.XmlNode]),
    writeChildren: dart.fnType(dart.void, [src__xml__nodes__node.XmlNode])
  }));
  dart.setFieldSignature(src__xml__visitors__writer.XmlWriter, () => ({
    __proto__: dart.getFields(src__xml__visitors__writer.XmlWriter.__proto__),
    buffer: dart.finalFieldType(core.StringBuffer)
  }));
  const _text = Symbol('_text');
  src__xml__nodes__data.XmlData = class XmlData extends src__xml__nodes__node.XmlNode {
    get text() {
      return this[_text];
    }
    set text(text) {
      if (text == null) {
        dart.throw(new core.ArgumentError.notNull("text"));
      }
      this[_text] = text;
    }
  };
  (src__xml__nodes__data.XmlData.new = function(text) {
    this[_text] = null;
    src__xml__nodes__data.XmlData.__proto__.new.call(this);
    this.text = text;
  }).prototype = src__xml__nodes__data.XmlData.prototype;
  dart.addTypeTests(src__xml__nodes__data.XmlData);
  dart.setSetterSignature(src__xml__nodes__data.XmlData, () => ({
    __proto__: dart.getSetters(src__xml__nodes__data.XmlData.__proto__),
    text: core.String
  }));
  dart.setFieldSignature(src__xml__nodes__data.XmlData, () => ({
    __proto__: dart.getFields(src__xml__nodes__data.XmlData.__proto__),
    [_text]: dart.fieldType(core.String)
  }));
  src__xml__nodes__text.XmlText = class XmlText extends src__xml__nodes__data.XmlData {
    get nodeType() {
      return src__xml__utils__node_type.XmlNodeType.TEXT;
    }
    accept(visitor) {
      return visitor.visitText(this);
    }
  };
  (src__xml__nodes__text.XmlText.new = function(text) {
    src__xml__nodes__text.XmlText.__proto__.new.call(this, text);
  }).prototype = src__xml__nodes__text.XmlText.prototype;
  dart.addTypeTests(src__xml__nodes__text.XmlText);
  dart.setMethodSignature(src__xml__nodes__text.XmlText, () => ({
    __proto__: dart.getMethods(src__xml__nodes__text.XmlText.__proto__),
    accept: dart.fnType(dart.dynamic, [src__xml__visitors__visitor.XmlVisitor])
  }));
  dart.setGetterSignature(src__xml__nodes__text.XmlText, () => ({
    __proto__: dart.getGetters(src__xml__nodes__text.XmlText.__proto__),
    nodeType: src__xml__utils__node_type.XmlNodeType
  }));
  src__xml__nodes__processing.XmlProcessing = class XmlProcessing extends src__xml__nodes__data.XmlData {
    get target() {
      return this[target$];
    }
    set target(value) {
      super.target = value;
    }
    get nodeType() {
      return src__xml__utils__node_type.XmlNodeType.PROCESSING;
    }
    accept(visitor) {
      return visitor.visitProcessing(this);
    }
  };
  (src__xml__nodes__processing.XmlProcessing.new = function(target, text) {
    this[target$] = target;
    src__xml__nodes__processing.XmlProcessing.__proto__.new.call(this, text);
  }).prototype = src__xml__nodes__processing.XmlProcessing.prototype;
  dart.addTypeTests(src__xml__nodes__processing.XmlProcessing);
  const target$ = Symbol("XmlProcessing.target");
  dart.setMethodSignature(src__xml__nodes__processing.XmlProcessing, () => ({
    __proto__: dart.getMethods(src__xml__nodes__processing.XmlProcessing.__proto__),
    accept: dart.fnType(dart.dynamic, [src__xml__visitors__visitor.XmlVisitor])
  }));
  dart.setGetterSignature(src__xml__nodes__processing.XmlProcessing, () => ({
    __proto__: dart.getGetters(src__xml__nodes__processing.XmlProcessing.__proto__),
    nodeType: src__xml__utils__node_type.XmlNodeType
  }));
  dart.setFieldSignature(src__xml__nodes__processing.XmlProcessing, () => ({
    __proto__: dart.getFields(src__xml__nodes__processing.XmlProcessing.__proto__),
    target: dart.finalFieldType(core.String)
  }));
  src__xml__visitors__pretty_writer.XmlPrettyWriter = class XmlPrettyWriter extends src__xml__visitors__writer.XmlWriter {
    get level() {
      return this[level$];
    }
    set level(value) {
      this[level$] = value;
    }
    get indent() {
      return this[indent$];
    }
    set indent(value) {
      super.indent = value;
    }
    visitCDATA(node) {
      this.newLine();
      super.visitCDATA(node);
    }
    visitComment(node) {
      this.newLine();
      super.visitComment(node);
    }
    visitDoctype(node) {
      this.newLine();
      super.visitDoctype(node);
    }
    visitElement(node) {
      this.newLine();
      this.buffer.write(src__xml__utils__token.XmlToken.openElement);
      this.visit(dart.dynamic, node.name);
      this.writeAttributes(node);
      if (dart.test(node.children.isEmpty) && dart.test(node.isSelfClosing)) {
        this.buffer.write(src__xml__utils__token.XmlToken.closeEndElement);
      } else {
        this.buffer.write(src__xml__utils__token.XmlToken.closeElement);
        this.level = dart.notNull(this.level) + 1;
        this.writeChildren(node);
        this.level = dart.notNull(this.level) - 1;
        if (!dart.test(node.children.every(dart.fn(each => src__xml__nodes__text.XmlText.is(each), XmlNodeTobool())))) {
          this.newLine();
        }
        this.buffer.write(src__xml__utils__token.XmlToken.openEndElement);
        this.visit(dart.dynamic, node.name);
        this.buffer.write(src__xml__utils__token.XmlToken.closeElement);
      }
    }
    visitProcessing(node) {
      this.newLine();
      super.visitProcessing(node);
    }
    visitText(node) {
      if (node.text[$trim]()[$isNotEmpty]) {
        super.visitText(node);
      }
    }
    newLine() {
      if (dart.test(this.buffer.isNotEmpty)) {
        this.buffer.writeln();
      }
      for (let i = 0; i < dart.notNull(this.level); i++) {
        this.buffer.write(this.indent);
      }
    }
  };
  (src__xml__visitors__pretty_writer.XmlPrettyWriter.new = function(buffer, level, indent) {
    this[level$] = level;
    this[indent$] = indent;
    src__xml__visitors__pretty_writer.XmlPrettyWriter.__proto__.new.call(this, core.StringBuffer._check(buffer));
  }).prototype = src__xml__visitors__pretty_writer.XmlPrettyWriter.prototype;
  dart.addTypeTests(src__xml__visitors__pretty_writer.XmlPrettyWriter);
  const level$ = Symbol("XmlPrettyWriter.level");
  const indent$ = Symbol("XmlPrettyWriter.indent");
  dart.setMethodSignature(src__xml__visitors__pretty_writer.XmlPrettyWriter, () => ({
    __proto__: dart.getMethods(src__xml__visitors__pretty_writer.XmlPrettyWriter.__proto__),
    newLine: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__xml__visitors__pretty_writer.XmlPrettyWriter, () => ({
    __proto__: dart.getFields(src__xml__visitors__pretty_writer.XmlPrettyWriter.__proto__),
    level: dart.fieldType(core.int),
    indent: dart.finalFieldType(core.String)
  }));
  const Object_XmlVisitable$$ = class Object_XmlVisitable extends core.Object {};
  (Object_XmlVisitable$$.new = function() {
  }).prototype = Object_XmlVisitable$$.prototype;
  dart.applyMixin(Object_XmlVisitable$$, src__xml__visitors__visitable.XmlVisitable);
  const Object_XmlWritable$$ = class Object_XmlWritable extends Object_XmlVisitable$$ {};
  (Object_XmlWritable$$.new = function() {
  }).prototype = Object_XmlWritable$$.prototype;
  dart.applyMixin(Object_XmlWritable$$, src__xml__utils__writable.XmlWritable);
  const Object_XmlOwned$$ = class Object_XmlOwned extends Object_XmlWritable$$ {};
  (Object_XmlOwned$$.new = function() {
    src__xml__utils__owned.XmlOwned.new.call(this);
  }).prototype = Object_XmlOwned$$.prototype;
  dart.applyMixin(Object_XmlOwned$$, src__xml__utils__owned.XmlOwned);
  src__xml__utils__name.XmlName = class XmlName extends Object_XmlOwned$$ {
    static new(local, prefix) {
      if (prefix === void 0) prefix = null;
      return prefix == null || prefix[$isEmpty] ? new src__xml__utils__simple_name.XmlSimpleName.new(local) : new src__xml__utils__prefix_name.XmlPrefixName.new(prefix, local, dart.str(prefix) + src__xml__utils__token.XmlToken.namespace + dart.str(local));
    }
    static fromString(qualified) {
      let index = qualified[$indexOf](src__xml__utils__token.XmlToken.namespace);
      if (index > 0) {
        let prefix = qualified[$substring](0, index);
        let local = qualified[$substring](index + 1);
        return new src__xml__utils__prefix_name.XmlPrefixName.new(prefix, local, qualified);
      } else {
        return new src__xml__utils__simple_name.XmlSimpleName.new(qualified);
      }
    }
    accept(visitor) {
      return visitor.visitName(this);
    }
    _equals(other) {
      if (other == null) return false;
      return src__xml__utils__name.XmlName.is(other) && other.local == this.local && other.namespaceUri == this.namespaceUri;
    }
    get hashCode() {
      return dart.hashCode(this.qualified);
    }
  };
  (src__xml__utils__name.XmlName.internal = function() {
    src__xml__utils__name.XmlName.__proto__.new.call(this);
  }).prototype = src__xml__utils__name.XmlName.prototype;
  dart.addTypeTests(src__xml__utils__name.XmlName);
  dart.setMethodSignature(src__xml__utils__name.XmlName, () => ({
    __proto__: dart.getMethods(src__xml__utils__name.XmlName.__proto__),
    accept: dart.fnType(dart.dynamic, [src__xml__visitors__visitor.XmlVisitor]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.defineExtensionMethods(src__xml__utils__name.XmlName, ['_equals']);
  dart.defineExtensionAccessors(src__xml__utils__name.XmlName, ['hashCode']);
  src__xml__utils__simple_name.XmlSimpleName = class XmlSimpleName extends src__xml__utils__name.XmlName {
    get prefix() {
      return null;
    }
    get local() {
      return this[local$];
    }
    set local(value) {
      super.local = value;
    }
    get qualified() {
      return this.local;
    }
    get namespaceUri() {
      for (let node = this.parent; node != null; node = node.parent) {
        for (let attribute of node.attributes) {
          if (attribute.name.prefix == null && attribute.name.local === "xmlns") {
            return attribute.value;
          }
        }
      }
      return null;
    }
  };
  (src__xml__utils__simple_name.XmlSimpleName.new = function(local) {
    this[local$] = local;
    src__xml__utils__simple_name.XmlSimpleName.__proto__.internal.call(this);
  }).prototype = src__xml__utils__simple_name.XmlSimpleName.prototype;
  dart.addTypeTests(src__xml__utils__simple_name.XmlSimpleName);
  const local$ = Symbol("XmlSimpleName.local");
  dart.setGetterSignature(src__xml__utils__simple_name.XmlSimpleName, () => ({
    __proto__: dart.getGetters(src__xml__utils__simple_name.XmlSimpleName.__proto__),
    prefix: core.String,
    qualified: core.String,
    namespaceUri: core.String
  }));
  dart.setFieldSignature(src__xml__utils__simple_name.XmlSimpleName, () => ({
    __proto__: dart.getFields(src__xml__utils__simple_name.XmlSimpleName.__proto__),
    local: dart.finalFieldType(core.String)
  }));
  src__xml__utils__prefix_name.XmlPrefixName = class XmlPrefixName extends src__xml__utils__name.XmlName {
    get prefix() {
      return this[prefix$];
    }
    set prefix(value) {
      super.prefix = value;
    }
    get local() {
      return this[local$0];
    }
    set local(value) {
      super.local = value;
    }
    get qualified() {
      return this[qualified$];
    }
    set qualified(value) {
      super.qualified = value;
    }
    get namespaceUri() {
      for (let node = this.parent; node != null; node = node.parent) {
        for (let attribute of node.attributes) {
          if (attribute.name.prefix === "xmlns" && attribute.name.local == this.prefix) {
            return attribute.value;
          }
        }
      }
      return null;
    }
  };
  (src__xml__utils__prefix_name.XmlPrefixName.new = function(prefix, local, qualified) {
    this[prefix$] = prefix;
    this[local$0] = local;
    this[qualified$] = qualified;
    src__xml__utils__prefix_name.XmlPrefixName.__proto__.internal.call(this);
  }).prototype = src__xml__utils__prefix_name.XmlPrefixName.prototype;
  dart.addTypeTests(src__xml__utils__prefix_name.XmlPrefixName);
  const prefix$ = Symbol("XmlPrefixName.prefix");
  const local$0 = Symbol("XmlPrefixName.local");
  const qualified$ = Symbol("XmlPrefixName.qualified");
  dart.setGetterSignature(src__xml__utils__prefix_name.XmlPrefixName, () => ({
    __proto__: dart.getGetters(src__xml__utils__prefix_name.XmlPrefixName.__proto__),
    namespaceUri: core.String
  }));
  dart.setFieldSignature(src__xml__utils__prefix_name.XmlPrefixName, () => ({
    __proto__: dart.getFields(src__xml__utils__prefix_name.XmlPrefixName.__proto__),
    prefix: dart.finalFieldType(core.String),
    local: dart.finalFieldType(core.String),
    qualified: dart.finalFieldType(core.String)
  }));
  src__xml__utils__exceptions.XmlException = class XmlException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return this.message != null ? this.message : super.toString();
    }
  };
  (src__xml__utils__exceptions.XmlException.new = function(message) {
    if (message === void 0) message = null;
    this[message$] = message;
  }).prototype = src__xml__utils__exceptions.XmlException.prototype;
  dart.addTypeTests(src__xml__utils__exceptions.XmlException);
  const message$ = Symbol("XmlException.message");
  src__xml__utils__exceptions.XmlException[dart.implements] = () => [core.Exception];
  dart.setFieldSignature(src__xml__utils__exceptions.XmlException, () => ({
    __proto__: dart.getFields(src__xml__utils__exceptions.XmlException.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__xml__utils__exceptions.XmlException, ['toString']);
  src__xml__utils__exceptions.XmlParserException = class XmlParserException extends src__xml__utils__exceptions.XmlException {
    get line() {
      return this[line$];
    }
    set line(value) {
      super.line = value;
    }
    get column() {
      return this[column$];
    }
    set column(value) {
      super.column = value;
    }
    toString() {
      return dart.str(super.toString()) + " at " + dart.str(this.line) + ":" + dart.str(this.column);
    }
  };
  (src__xml__utils__exceptions.XmlParserException.new = function(message, line, column) {
    this[line$] = line;
    this[column$] = column;
    src__xml__utils__exceptions.XmlParserException.__proto__.new.call(this, message);
  }).prototype = src__xml__utils__exceptions.XmlParserException.prototype;
  dart.addTypeTests(src__xml__utils__exceptions.XmlParserException);
  const line$ = Symbol("XmlParserException.line");
  const column$ = Symbol("XmlParserException.column");
  dart.setFieldSignature(src__xml__utils__exceptions.XmlParserException, () => ({
    __proto__: dart.getFields(src__xml__utils__exceptions.XmlParserException.__proto__),
    line: dart.finalFieldType(core.int),
    column: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__xml__utils__exceptions.XmlParserException, ['toString']);
  src__xml__utils__exceptions.XmlNodeTypeException = class XmlNodeTypeException extends src__xml__utils__exceptions.XmlException {
    static checkNotNull(node) {
      if (node == null) {
        dart.throw(new src__xml__utils__exceptions.XmlNodeTypeException.new("Node must not be null."));
      }
    }
    static checkValidType(node, types) {
      if (!dart.test(types[$contains](node.nodeType))) {
        dart.throw(new src__xml__utils__exceptions.XmlNodeTypeException.new("Expected node of type: " + dart.str(types)));
      }
    }
  };
  (src__xml__utils__exceptions.XmlNodeTypeException.new = function(message) {
    src__xml__utils__exceptions.XmlNodeTypeException.__proto__.new.call(this, message);
  }).prototype = src__xml__utils__exceptions.XmlNodeTypeException.prototype;
  dart.addTypeTests(src__xml__utils__exceptions.XmlNodeTypeException);
  src__xml__utils__exceptions.XmlParentException = class XmlParentException extends src__xml__utils__exceptions.XmlException {
    static checkNoParent(owned) {
      if (dart.test(owned.hasParent)) {
        dart.throw(new src__xml__utils__exceptions.XmlParentException.new("Node already has a parent, copy or remove it first: " + dart.str(owned)));
      }
    }
  };
  (src__xml__utils__exceptions.XmlParentException.new = function(message) {
    src__xml__utils__exceptions.XmlParentException.__proto__.new.call(this, message);
  }).prototype = src__xml__utils__exceptions.XmlParentException.prototype;
  dart.addTypeTests(src__xml__utils__exceptions.XmlParentException);
  src__xml__utils__exceptions.XmlTagException = class XmlTagException extends src__xml__utils__exceptions.XmlException {};
  (src__xml__utils__exceptions.XmlTagException.new = function(message) {
    src__xml__utils__exceptions.XmlTagException.__proto__.new.call(this, message);
  }).prototype = src__xml__utils__exceptions.XmlTagException.prototype;
  dart.addTypeTests(src__xml__utils__exceptions.XmlTagException);
  dart.defineLazy(src__xml__utils__name, {
    /*src__xml__utils__name.xml*/get xml() {
      return "xml";
    },
    /*src__xml__utils__name.xmlUri*/get xmlUri() {
      return "http://www.w3.org/XML/1998/namespace";
    },
    /*src__xml__utils__name.xmlns*/get xmlns() {
      return "xmlns";
    },
    /*src__xml__utils__name.xmlData*/get xmlData() {
      return new src__xml__builder.NamespaceData.new("xml", true);
    }
  });
  src__xml__utils__named.XmlNamed = class XmlNamed extends core.Object {};
  (src__xml__utils__named.XmlNamed.new = function() {
  }).prototype = src__xml__utils__named.XmlNamed.prototype;
  dart.addTypeTests(src__xml__utils__named.XmlNamed);
  src__xml__utils__name_matcher.createNameMatcher = function(name, namespace) {
    if (name == null) {
      dart.throw(new core.ArgumentError.new("Illegal name matcher."));
    } else if (name === "*") {
      if (namespace == null || namespace === "*") {
        return dart.fn(named => true, XmlNamedTobool());
      } else {
        return dart.fn(named => named.name.namespaceUri == namespace, XmlNamedTobool());
      }
    } else {
      if (namespace == null) {
        return dart.fn(named => named.name.qualified == name, XmlNamedTobool());
      } else if (namespace === "*") {
        return dart.fn(named => named.name.local == name, XmlNamedTobool());
      } else {
        return dart.fn(named => named.name.local == name && named.name.namespaceUri == namespace, XmlNamedTobool());
      }
    }
  };
  let const$2;
  let const$3;
  src__xml__nodes__element.XmlElement = class XmlElement extends src__xml__nodes__parent.XmlParent {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get attributes() {
      return this[attributes$];
    }
    set attributes(value) {
      super.attributes = value;
    }
    get isSelfClosing() {
      return this[isSelfClosing$];
    }
    set isSelfClosing(value) {
      this[isSelfClosing$] = value;
    }
    getAttribute(name, opts) {
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      let attribute = this.getAttributeNode(name, {namespace: namespace});
      return attribute != null ? attribute.value : null;
    }
    getAttributeNode(name, opts) {
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      return this.attributes.firstWhere(src__xml__utils__name_matcher.createNameMatcher(name, namespace), {orElse: dart.fn(() => null, VoidToNull())});
    }
    get nodeType() {
      return src__xml__utils__node_type.XmlNodeType.ELEMENT;
    }
    accept(visitor) {
      return visitor.visitElement(this);
    }
  };
  (src__xml__nodes__element.XmlElement.new = function(name, attributes, children, isSelfClosing) {
    if (attributes === void 0) attributes = const$2 || (const$2 = dart.constList([], src__xml__nodes__attribute.XmlAttribute));
    if (children === void 0) children = const$3 || (const$3 = dart.constList([], src__xml__nodes__node.XmlNode));
    if (isSelfClosing === void 0) isSelfClosing = true;
    this[name$] = name;
    this[isSelfClosing$] = isSelfClosing;
    this[attributes$] = new (XmlNodeListOfXmlAttribute()).new(src__xml__nodes__element.attributeNodeTypes);
    src__xml__nodes__element.XmlElement.__proto__.new.call(this, src__xml__nodes__element.childrenNodeTypes, children);
    this.name.attachParent(this);
    this.attributes.attachParent(this);
    this.attributes.addAll(attributes);
  }).prototype = src__xml__nodes__element.XmlElement.prototype;
  dart.addTypeTests(src__xml__nodes__element.XmlElement);
  const name$ = Symbol("XmlElement.name");
  const attributes$ = Symbol("XmlElement.attributes");
  const isSelfClosing$ = Symbol("XmlElement.isSelfClosing");
  src__xml__nodes__element.XmlElement[dart.implements] = () => [src__xml__utils__named.XmlNamed];
  dart.setMethodSignature(src__xml__nodes__element.XmlElement, () => ({
    __proto__: dart.getMethods(src__xml__nodes__element.XmlElement.__proto__),
    getAttribute: dart.fnType(core.String, [core.String], {namespace: core.String}),
    getAttributeNode: dart.fnType(src__xml__nodes__attribute.XmlAttribute, [core.String], {namespace: core.String}),
    accept: dart.fnType(dart.dynamic, [src__xml__visitors__visitor.XmlVisitor])
  }));
  dart.setGetterSignature(src__xml__nodes__element.XmlElement, () => ({
    __proto__: dart.getGetters(src__xml__nodes__element.XmlElement.__proto__),
    nodeType: src__xml__utils__node_type.XmlNodeType
  }));
  dart.setFieldSignature(src__xml__nodes__element.XmlElement, () => ({
    __proto__: dart.getFields(src__xml__nodes__element.XmlElement.__proto__),
    name: dart.finalFieldType(src__xml__utils__name.XmlName),
    attributes: dart.finalFieldType(XmlNodeListOfXmlAttribute()),
    isSelfClosing: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__xml__nodes__element, {
    /*src__xml__nodes__element.childrenNodeTypes*/get childrenNodeTypes() {
      return dart.constSet(src__xml__utils__node_type.XmlNodeType, [src__xml__utils__node_type.XmlNodeType.CDATA, src__xml__utils__node_type.XmlNodeType.COMMENT, src__xml__utils__node_type.XmlNodeType.ELEMENT, src__xml__utils__node_type.XmlNodeType.PROCESSING, src__xml__utils__node_type.XmlNodeType.TEXT]);
    },
    /*src__xml__nodes__element.attributeNodeTypes*/get attributeNodeTypes() {
      return dart.constSet(src__xml__utils__node_type.XmlNodeType, [src__xml__utils__node_type.XmlNodeType.ATTRIBUTE]);
    }
  });
  let const$4;
  src__xml__nodes__document.XmlDocument = class XmlDocument extends src__xml__nodes__parent.XmlParent {
    get doctypeElement() {
      return src__xml__nodes__doctype.XmlDoctype._check(this.children.firstWhere(dart.fn(node => src__xml__nodes__doctype.XmlDoctype.is(node), XmlNodeTobool()), {orElse: dart.fn(() => null, VoidToNull())}));
    }
    get rootElement() {
      return src__xml__nodes__element.XmlElement._check(this.children.firstWhere(dart.fn(node => src__xml__nodes__element.XmlElement.is(node), XmlNodeTobool()), {orElse: dart.fn(() => dart.throw(new core.StateError.new("Empty XML document")), VoidTobottom())}));
    }
    get document() {
      return this;
    }
    get text() {
      return null;
    }
    get nodeType() {
      return src__xml__utils__node_type.XmlNodeType.DOCUMENT;
    }
    accept(visitor) {
      return visitor.visitDocument(this);
    }
  };
  (src__xml__nodes__document.XmlDocument.new = function(children) {
    if (children === void 0) children = const$4 || (const$4 = dart.constList([], src__xml__nodes__node.XmlNode));
    src__xml__nodes__document.XmlDocument.__proto__.new.call(this, src__xml__nodes__document.childrenNodeTypes, children);
  }).prototype = src__xml__nodes__document.XmlDocument.prototype;
  dart.addTypeTests(src__xml__nodes__document.XmlDocument);
  dart.setMethodSignature(src__xml__nodes__document.XmlDocument, () => ({
    __proto__: dart.getMethods(src__xml__nodes__document.XmlDocument.__proto__),
    accept: dart.fnType(dart.dynamic, [src__xml__visitors__visitor.XmlVisitor])
  }));
  dart.setGetterSignature(src__xml__nodes__document.XmlDocument, () => ({
    __proto__: dart.getGetters(src__xml__nodes__document.XmlDocument.__proto__),
    doctypeElement: src__xml__nodes__doctype.XmlDoctype,
    rootElement: src__xml__nodes__element.XmlElement,
    nodeType: src__xml__utils__node_type.XmlNodeType
  }));
  dart.defineLazy(src__xml__nodes__document, {
    /*src__xml__nodes__document.childrenNodeTypes*/get childrenNodeTypes() {
      return dart.constSet(src__xml__utils__node_type.XmlNodeType, [src__xml__utils__node_type.XmlNodeType.CDATA, src__xml__utils__node_type.XmlNodeType.COMMENT, src__xml__utils__node_type.XmlNodeType.DOCUMENT_TYPE, src__xml__utils__node_type.XmlNodeType.ELEMENT, src__xml__utils__node_type.XmlNodeType.PROCESSING, src__xml__utils__node_type.XmlNodeType.TEXT]);
    }
  });
  src__xml__nodes__doctype.XmlDoctype = class XmlDoctype extends src__xml__nodes__data.XmlData {
    get nodeType() {
      return src__xml__utils__node_type.XmlNodeType.DOCUMENT_TYPE;
    }
    accept(visitor) {
      return visitor.visitDoctype(this);
    }
  };
  (src__xml__nodes__doctype.XmlDoctype.new = function(text) {
    src__xml__nodes__doctype.XmlDoctype.__proto__.new.call(this, text);
  }).prototype = src__xml__nodes__doctype.XmlDoctype.prototype;
  dart.addTypeTests(src__xml__nodes__doctype.XmlDoctype);
  dart.setMethodSignature(src__xml__nodes__doctype.XmlDoctype, () => ({
    __proto__: dart.getMethods(src__xml__nodes__doctype.XmlDoctype.__proto__),
    accept: dart.fnType(dart.dynamic, [src__xml__visitors__visitor.XmlVisitor])
  }));
  dart.setGetterSignature(src__xml__nodes__doctype.XmlDoctype, () => ({
    __proto__: dart.getGetters(src__xml__nodes__doctype.XmlDoctype.__proto__),
    nodeType: src__xml__utils__node_type.XmlNodeType
  }));
  src__xml__nodes__comment.XmlComment = class XmlComment extends src__xml__nodes__data.XmlData {
    get nodeType() {
      return src__xml__utils__node_type.XmlNodeType.COMMENT;
    }
    accept(visitor) {
      return visitor.visitComment(this);
    }
  };
  (src__xml__nodes__comment.XmlComment.new = function(text) {
    src__xml__nodes__comment.XmlComment.__proto__.new.call(this, text);
  }).prototype = src__xml__nodes__comment.XmlComment.prototype;
  dart.addTypeTests(src__xml__nodes__comment.XmlComment);
  dart.setMethodSignature(src__xml__nodes__comment.XmlComment, () => ({
    __proto__: dart.getMethods(src__xml__nodes__comment.XmlComment.__proto__),
    accept: dart.fnType(dart.dynamic, [src__xml__visitors__visitor.XmlVisitor])
  }));
  dart.setGetterSignature(src__xml__nodes__comment.XmlComment, () => ({
    __proto__: dart.getGetters(src__xml__nodes__comment.XmlComment.__proto__),
    nodeType: src__xml__utils__node_type.XmlNodeType
  }));
  src__xml__nodes__cdata.XmlCDATA = class XmlCDATA extends src__xml__nodes__data.XmlData {
    get nodeType() {
      return src__xml__utils__node_type.XmlNodeType.CDATA;
    }
    accept(visitor) {
      return visitor.visitCDATA(this);
    }
  };
  (src__xml__nodes__cdata.XmlCDATA.new = function(text) {
    src__xml__nodes__cdata.XmlCDATA.__proto__.new.call(this, text);
  }).prototype = src__xml__nodes__cdata.XmlCDATA.prototype;
  dart.addTypeTests(src__xml__nodes__cdata.XmlCDATA);
  dart.setMethodSignature(src__xml__nodes__cdata.XmlCDATA, () => ({
    __proto__: dart.getMethods(src__xml__nodes__cdata.XmlCDATA.__proto__),
    accept: dart.fnType(dart.dynamic, [src__xml__visitors__visitor.XmlVisitor])
  }));
  dart.setGetterSignature(src__xml__nodes__cdata.XmlCDATA, () => ({
    __proto__: dart.getGetters(src__xml__nodes__cdata.XmlCDATA.__proto__),
    nodeType: src__xml__utils__node_type.XmlNodeType
  }));
  src__xml__iterators__preceding.XmlPrecedingIterable = class XmlPrecedingIterable extends collection.IterableBase$(src__xml__nodes__node.XmlNode) {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get iterator() {
      return new src__xml__iterators__preceding.XmlPrecedingIterator.new(this.start);
    }
  };
  (src__xml__iterators__preceding.XmlPrecedingIterable.new = function(start) {
    this[start$] = start;
    src__xml__iterators__preceding.XmlPrecedingIterable.__proto__.new.call(this);
  }).prototype = src__xml__iterators__preceding.XmlPrecedingIterable.prototype;
  dart.addTypeTests(src__xml__iterators__preceding.XmlPrecedingIterable);
  const start$ = Symbol("XmlPrecedingIterable.start");
  dart.setGetterSignature(src__xml__iterators__preceding.XmlPrecedingIterable, () => ({
    __proto__: dart.getGetters(src__xml__iterators__preceding.XmlPrecedingIterable.__proto__),
    iterator: core.Iterator$(src__xml__nodes__node.XmlNode),
    [$iterator]: core.Iterator$(src__xml__nodes__node.XmlNode)
  }));
  dart.setFieldSignature(src__xml__iterators__preceding.XmlPrecedingIterable, () => ({
    __proto__: dart.getFields(src__xml__iterators__preceding.XmlPrecedingIterable.__proto__),
    start: dart.finalFieldType(src__xml__nodes__node.XmlNode)
  }));
  dart.defineExtensionAccessors(src__xml__iterators__preceding.XmlPrecedingIterable, ['iterator']);
  src__xml__iterators__preceding.XmlPrecedingIterator = class XmlPrecedingIterator extends core.Iterator$(src__xml__nodes__node.XmlNode) {
    get start() {
      return this[start$0];
    }
    set start(value) {
      super.start = value;
    }
    get todo() {
      return this[todo];
    }
    set todo(value) {
      super.todo = value;
    }
    get current() {
      return this[current];
    }
    set current(value) {
      this[current] = value;
    }
    moveNext() {
      if (dart.test(this.todo[$isEmpty])) {
        this.current = null;
        return false;
      } else {
        this.current = this.todo[$removeLast]();
        if (this.current == this.start) {
          this.current = null;
          this.todo[$clear]();
          return false;
        }
        this.todo[$addAll](this.current.children[$reversed]);
        this.todo[$addAll](this.current.attributes[$reversed]);
        return true;
      }
    }
  };
  (src__xml__iterators__preceding.XmlPrecedingIterator.new = function(start) {
    this[todo] = JSArrayOfXmlNode().of([]);
    this[current] = null;
    this[start$0] = start;
    this.todo[$add](this.start.root);
  }).prototype = src__xml__iterators__preceding.XmlPrecedingIterator.prototype;
  dart.addTypeTests(src__xml__iterators__preceding.XmlPrecedingIterator);
  const start$0 = Symbol("XmlPrecedingIterator.start");
  const todo = Symbol("XmlPrecedingIterator.todo");
  const current = Symbol("XmlPrecedingIterator.current");
  dart.setMethodSignature(src__xml__iterators__preceding.XmlPrecedingIterator, () => ({
    __proto__: dart.getMethods(src__xml__iterators__preceding.XmlPrecedingIterator.__proto__),
    moveNext: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__xml__iterators__preceding.XmlPrecedingIterator, () => ({
    __proto__: dart.getFields(src__xml__iterators__preceding.XmlPrecedingIterator.__proto__),
    start: dart.finalFieldType(src__xml__nodes__node.XmlNode),
    todo: dart.finalFieldType(ListOfXmlNode()),
    current: dart.fieldType(src__xml__nodes__node.XmlNode)
  }));
  src__xml__iterators__following.XmlFollowingIterable = class XmlFollowingIterable extends collection.IterableBase$(src__xml__nodes__node.XmlNode) {
    get start() {
      return this[start$1];
    }
    set start(value) {
      super.start = value;
    }
    get iterator() {
      return new src__xml__iterators__following.XmlFollowingIterator.new(this.start);
    }
  };
  (src__xml__iterators__following.XmlFollowingIterable.new = function(start) {
    this[start$1] = start;
    src__xml__iterators__following.XmlFollowingIterable.__proto__.new.call(this);
  }).prototype = src__xml__iterators__following.XmlFollowingIterable.prototype;
  dart.addTypeTests(src__xml__iterators__following.XmlFollowingIterable);
  const start$1 = Symbol("XmlFollowingIterable.start");
  dart.setGetterSignature(src__xml__iterators__following.XmlFollowingIterable, () => ({
    __proto__: dart.getGetters(src__xml__iterators__following.XmlFollowingIterable.__proto__),
    iterator: core.Iterator$(src__xml__nodes__node.XmlNode),
    [$iterator]: core.Iterator$(src__xml__nodes__node.XmlNode)
  }));
  dart.setFieldSignature(src__xml__iterators__following.XmlFollowingIterable, () => ({
    __proto__: dart.getFields(src__xml__iterators__following.XmlFollowingIterable.__proto__),
    start: dart.finalFieldType(src__xml__nodes__node.XmlNode)
  }));
  dart.defineExtensionAccessors(src__xml__iterators__following.XmlFollowingIterable, ['iterator']);
  src__xml__iterators__following.XmlFollowingIterator = class XmlFollowingIterator extends core.Iterator$(src__xml__nodes__node.XmlNode) {
    get todo() {
      return this[todo$];
    }
    set todo(value) {
      super.todo = value;
    }
    get current() {
      return this[current$];
    }
    set current(value) {
      this[current$] = value;
    }
    moveNext() {
      if (dart.test(this.todo[$isEmpty])) {
        this.current = null;
        return false;
      } else {
        this.current = this.todo[$removeLast]();
        this.todo[$addAll](this.current.children[$reversed]);
        this.todo[$addAll](this.current.attributes[$reversed]);
        return true;
      }
    }
  };
  (src__xml__iterators__following.XmlFollowingIterator.new = function(start) {
    this[todo$] = JSArrayOfXmlNode().of([]);
    this[current$] = null;
    let following = JSArrayOfXmlNode().of([]);
    for (let parent = start.parent, child = start; parent != null; parent = parent.parent, child = child.parent) {
      if (src__xml__nodes__attribute.XmlAttribute.is(child)) {
        let attributesIndex = parent.attributes[$indexOf](child);
        following[$addAll](parent.attributes[$sublist](dart.notNull(attributesIndex) + 1));
        following[$addAll](parent.children);
      } else {
        let childrenIndex = parent.children[$indexOf](child);
        following[$addAll](parent.children[$sublist](dart.notNull(childrenIndex) + 1));
      }
    }
    this.todo[$addAll](following[$reversed]);
  }).prototype = src__xml__iterators__following.XmlFollowingIterator.prototype;
  dart.addTypeTests(src__xml__iterators__following.XmlFollowingIterator);
  const todo$ = Symbol("XmlFollowingIterator.todo");
  const current$ = Symbol("XmlFollowingIterator.current");
  dart.setMethodSignature(src__xml__iterators__following.XmlFollowingIterator, () => ({
    __proto__: dart.getMethods(src__xml__iterators__following.XmlFollowingIterator.__proto__),
    moveNext: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__xml__iterators__following.XmlFollowingIterator, () => ({
    __proto__: dart.getFields(src__xml__iterators__following.XmlFollowingIterator.__proto__),
    todo: dart.finalFieldType(ListOfXmlNode()),
    current: dart.fieldType(src__xml__nodes__node.XmlNode)
  }));
  src__xml__iterators__descendants.XmlDescendantsIterable = class XmlDescendantsIterable extends collection.IterableBase$(src__xml__nodes__node.XmlNode) {
    get start() {
      return this[start$2];
    }
    set start(value) {
      super.start = value;
    }
    get iterator() {
      return new src__xml__iterators__descendants.XmlDescendantsIterator.new(this.start);
    }
  };
  (src__xml__iterators__descendants.XmlDescendantsIterable.new = function(start) {
    this[start$2] = start;
    src__xml__iterators__descendants.XmlDescendantsIterable.__proto__.new.call(this);
  }).prototype = src__xml__iterators__descendants.XmlDescendantsIterable.prototype;
  dart.addTypeTests(src__xml__iterators__descendants.XmlDescendantsIterable);
  const start$2 = Symbol("XmlDescendantsIterable.start");
  dart.setGetterSignature(src__xml__iterators__descendants.XmlDescendantsIterable, () => ({
    __proto__: dart.getGetters(src__xml__iterators__descendants.XmlDescendantsIterable.__proto__),
    iterator: core.Iterator$(src__xml__nodes__node.XmlNode),
    [$iterator]: core.Iterator$(src__xml__nodes__node.XmlNode)
  }));
  dart.setFieldSignature(src__xml__iterators__descendants.XmlDescendantsIterable, () => ({
    __proto__: dart.getFields(src__xml__iterators__descendants.XmlDescendantsIterable.__proto__),
    start: dart.finalFieldType(src__xml__nodes__node.XmlNode)
  }));
  dart.defineExtensionAccessors(src__xml__iterators__descendants.XmlDescendantsIterable, ['iterator']);
  src__xml__iterators__descendants.XmlDescendantsIterator = class XmlDescendantsIterator extends core.Iterator$(src__xml__nodes__node.XmlNode) {
    get todo() {
      return this[todo$0];
    }
    set todo(value) {
      super.todo = value;
    }
    push(node) {
      this.todo[$addAll](node.children[$reversed]);
      this.todo[$addAll](node.attributes[$reversed]);
    }
    get current() {
      return this[current$0];
    }
    set current(value) {
      this[current$0] = value;
    }
    moveNext() {
      if (dart.test(this.todo[$isEmpty])) {
        this.current = null;
        return false;
      } else {
        this.current = this.todo[$removeLast]();
        this.push(this.current);
        return true;
      }
    }
  };
  (src__xml__iterators__descendants.XmlDescendantsIterator.new = function(start) {
    this[todo$0] = JSArrayOfXmlNode().of([]);
    this[current$0] = null;
    this.push(start);
  }).prototype = src__xml__iterators__descendants.XmlDescendantsIterator.prototype;
  dart.addTypeTests(src__xml__iterators__descendants.XmlDescendantsIterator);
  const todo$0 = Symbol("XmlDescendantsIterator.todo");
  const current$0 = Symbol("XmlDescendantsIterator.current");
  dart.setMethodSignature(src__xml__iterators__descendants.XmlDescendantsIterator, () => ({
    __proto__: dart.getMethods(src__xml__iterators__descendants.XmlDescendantsIterator.__proto__),
    push: dart.fnType(dart.void, [src__xml__nodes__node.XmlNode]),
    moveNext: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__xml__iterators__descendants.XmlDescendantsIterator, () => ({
    __proto__: dart.getFields(src__xml__iterators__descendants.XmlDescendantsIterator.__proto__),
    todo: dart.finalFieldType(ListOfXmlNode()),
    current: dart.fieldType(src__xml__nodes__node.XmlNode)
  }));
  src__xml__iterators__ancestors.XmlAncestorsIterable = class XmlAncestorsIterable extends collection.IterableBase$(src__xml__nodes__node.XmlNode) {
    get start() {
      return this[start$3];
    }
    set start(value) {
      super.start = value;
    }
    get iterator() {
      return new src__xml__iterators__ancestors.XmlAncestorsIterator.new(this.start);
    }
  };
  (src__xml__iterators__ancestors.XmlAncestorsIterable.new = function(start) {
    this[start$3] = start;
    src__xml__iterators__ancestors.XmlAncestorsIterable.__proto__.new.call(this);
  }).prototype = src__xml__iterators__ancestors.XmlAncestorsIterable.prototype;
  dart.addTypeTests(src__xml__iterators__ancestors.XmlAncestorsIterable);
  const start$3 = Symbol("XmlAncestorsIterable.start");
  dart.setGetterSignature(src__xml__iterators__ancestors.XmlAncestorsIterable, () => ({
    __proto__: dart.getGetters(src__xml__iterators__ancestors.XmlAncestorsIterable.__proto__),
    iterator: core.Iterator$(src__xml__nodes__node.XmlNode),
    [$iterator]: core.Iterator$(src__xml__nodes__node.XmlNode)
  }));
  dart.setFieldSignature(src__xml__iterators__ancestors.XmlAncestorsIterable, () => ({
    __proto__: dart.getFields(src__xml__iterators__ancestors.XmlAncestorsIterable.__proto__),
    start: dart.finalFieldType(src__xml__nodes__node.XmlNode)
  }));
  dart.defineExtensionAccessors(src__xml__iterators__ancestors.XmlAncestorsIterable, ['iterator']);
  src__xml__iterators__ancestors.XmlAncestorsIterator = class XmlAncestorsIterator extends core.Iterator$(src__xml__nodes__node.XmlNode) {
    get current() {
      return this[current$1];
    }
    set current(value) {
      this[current$1] = value;
    }
    moveNext() {
      if (this.current != null) {
        this.current = this.current.parent;
      }
      return this.current != null;
    }
  };
  (src__xml__iterators__ancestors.XmlAncestorsIterator.new = function(current) {
    this[current$1] = current;
  }).prototype = src__xml__iterators__ancestors.XmlAncestorsIterator.prototype;
  dart.addTypeTests(src__xml__iterators__ancestors.XmlAncestorsIterator);
  const current$1 = Symbol("XmlAncestorsIterator.current");
  dart.setMethodSignature(src__xml__iterators__ancestors.XmlAncestorsIterator, () => ({
    __proto__: dart.getMethods(src__xml__iterators__ancestors.XmlAncestorsIterator.__proto__),
    moveNext: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__xml__iterators__ancestors.XmlAncestorsIterator, () => ({
    __proto__: dart.getFields(src__xml__iterators__ancestors.XmlAncestorsIterator.__proto__),
    current: dart.fieldType(src__xml__nodes__node.XmlNode)
  }));
  const _value = Symbol('_value');
  src__xml__nodes__attribute.XmlAttribute = class XmlAttribute extends src__xml__nodes__node.XmlNode {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    get value() {
      return this[_value];
    }
    set value(value) {
      if (value == null) {
        dart.throw(new core.ArgumentError.notNull("value"));
      }
      this[_value] = value;
    }
    get attributeType() {
      return this[attributeType$];
    }
    set attributeType(value) {
      super.attributeType = value;
    }
    get nodeType() {
      return src__xml__utils__node_type.XmlNodeType.ATTRIBUTE;
    }
    accept(visitor) {
      return visitor.visitAttribute(this);
    }
  };
  (src__xml__nodes__attribute.XmlAttribute.new = function(name, value, attributeType) {
    if (attributeType === void 0) attributeType = src__xml__utils__attribute_type.XmlAttributeType.DOUBLE_QUOTE;
    this[_value] = null;
    this[name$0] = name;
    this[attributeType$] = attributeType;
    src__xml__nodes__attribute.XmlAttribute.__proto__.new.call(this);
    this.name.attachParent(this);
    this.value = value;
  }).prototype = src__xml__nodes__attribute.XmlAttribute.prototype;
  dart.addTypeTests(src__xml__nodes__attribute.XmlAttribute);
  const name$0 = Symbol("XmlAttribute.name");
  const attributeType$ = Symbol("XmlAttribute.attributeType");
  src__xml__nodes__attribute.XmlAttribute[dart.implements] = () => [src__xml__utils__named.XmlNamed];
  dart.setMethodSignature(src__xml__nodes__attribute.XmlAttribute, () => ({
    __proto__: dart.getMethods(src__xml__nodes__attribute.XmlAttribute.__proto__),
    accept: dart.fnType(dart.dynamic, [src__xml__visitors__visitor.XmlVisitor])
  }));
  dart.setGetterSignature(src__xml__nodes__attribute.XmlAttribute, () => ({
    __proto__: dart.getGetters(src__xml__nodes__attribute.XmlAttribute.__proto__),
    value: core.String,
    nodeType: src__xml__utils__node_type.XmlNodeType
  }));
  dart.setSetterSignature(src__xml__nodes__attribute.XmlAttribute, () => ({
    __proto__: dart.getSetters(src__xml__nodes__attribute.XmlAttribute.__proto__),
    value: core.String
  }));
  dart.setFieldSignature(src__xml__nodes__attribute.XmlAttribute, () => ({
    __proto__: dart.getFields(src__xml__nodes__attribute.XmlAttribute.__proto__),
    name: dart.finalFieldType(src__xml__utils__name.XmlName),
    [_value]: dart.fieldType(core.String),
    attributeType: dart.finalFieldType(src__xml__utils__attribute_type.XmlAttributeType)
  }));
  const _stack = Symbol('_stack');
  let const$5;
  let const$6;
  const _insert = Symbol('_insert');
  const _buildName = Symbol('_buildName');
  const _lookup = Symbol('_lookup');
  src__xml__builder.XmlBuilder = class XmlBuilder extends core.Object {
    get optimizeNamespaces() {
      return this[optimizeNamespaces$];
    }
    set optimizeNamespaces(value) {
      super.optimizeNamespaces = value;
    }
    text(text) {
      let children = this[_stack][$last].children;
      if (dart.test(children[$isNotEmpty]) && src__xml__nodes__text.XmlText.is(children[$last])) {
        let previous = children[$removeLast]();
        children[$add](new src__xml__nodes__text.XmlText.new(dart.str(previous.text) + dart.str(dart.toString(text))));
      } else {
        children[$add](new src__xml__nodes__text.XmlText.new(dart.toString(text)));
      }
    }
    cdata(text) {
      this[_stack][$last].children[$add](new src__xml__nodes__cdata.XmlCDATA.new(dart.toString(text)));
    }
    processing(target, text) {
      this[_stack][$last].children[$add](new src__xml__nodes__processing.XmlProcessing.new(target, dart.toString(text)));
    }
    comment(text) {
      this[_stack][$last].children[$add](new src__xml__nodes__comment.XmlComment.new(dart.toString(text)));
    }
    element(name, opts) {
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      let namespaces = opts && 'namespaces' in opts ? opts.namespaces : const$5 || (const$5 = dart.constMap(core.String, core.String, []));
      let attributes = opts && 'attributes' in opts ? opts.attributes : const$6 || (const$6 = dart.constMap(core.String, core.String, []));
      let isSelfClosing = opts && 'isSelfClosing' in opts ? opts.isSelfClosing : true;
      let nest = opts && 'nest' in opts ? opts.nest : null;
      let element = new src__xml__builder.XmlElementBuilder.new();
      this[_stack][$add](element);
      namespaces[$forEach](dart.bind(this, 'namespace'));
      attributes[$forEach](dart.bind(this, 'attribute'));
      if (nest != null) {
        this[_insert](nest);
      }
      element.name = this[_buildName](name, namespace);
      element.isSelfClosing = isSelfClosing;
      if (dart.test(this.optimizeNamespaces)) {
        element.namespaces[$forEach](dart.fn((uri, meta) => {
          if (!dart.test(meta.used)) {
            let name = meta.name;
            let attribute = element.attributes[$firstWhere](dart.fn(attribute => dart.equals(attribute.name, name), XmlAttributeTobool()));
            element.attributes[$remove](attribute);
          }
        }, StringAndNamespaceDataToNull()));
      }
      this[_stack][$removeLast]();
      this[_stack][$last].children[$add](element.build());
    }
    attribute(name, value, opts) {
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      let attributeType = opts && 'attributeType' in opts ? opts.attributeType : null;
      let attribute = new src__xml__nodes__attribute.XmlAttribute.new(this[_buildName](name, namespace), dart.toString(value), attributeType != null ? attributeType : src__xml__utils__attribute_type.XmlAttributeType.DOUBLE_QUOTE);
      this[_stack][$last].attributes[$add](attribute);
    }
    namespace(uri, prefix) {
      if (prefix === void 0) prefix = null;
      if (prefix === "xmlns" || prefix === "xml") {
        dart.throw(new core.ArgumentError.new("The \"" + dart.str(prefix) + "\" prefix cannot be bound."));
      }
      if (dart.test(this.optimizeNamespaces) && dart.test(this[_stack][$any](dart.fn(builder => dart.test(builder.namespaces[$containsKey](uri)) && builder.namespaces[$_get](uri).prefix == prefix, XmlNodeBuilderTobool())))) {
        return;
      }
      if (dart.test(this[_stack][$last].namespaces[$values][$any](dart.fn(meta => meta.prefix == prefix, NamespaceDataTobool())))) {
        dart.throw(new core.ArgumentError.new("The \"" + dart.str(prefix) + "\" prefix conflicts with existing binding."));
      }
      let meta = new src__xml__builder.NamespaceData.new(prefix, false);
      this[_stack][$last].attributes[$add](new src__xml__nodes__attribute.XmlAttribute.new(meta.name, uri, src__xml__utils__attribute_type.XmlAttributeType.DOUBLE_QUOTE));
      this[_stack][$last].namespaces[$_set](uri, meta);
    }
    build() {
      return this[_stack][$last].build();
    }
    [_buildName](name, uri) {
      if (uri != null && uri[$isNotEmpty]) {
        let meta = this[_lookup](uri);
        meta.used = true;
        return src__xml__utils__name.XmlName.new(name, meta.prefix);
      } else {
        return src__xml__utils__name.XmlName.fromString(name);
      }
    }
    [_lookup](uri) {
      let builder = this[_stack][$lastWhere](dart.fn(builder => builder.namespaces[$containsKey](uri), XmlNodeBuilderTobool()), {orElse: dart.fn(() => dart.throw(new core.ArgumentError.new("Undefined namespace: " + dart.str(uri))), VoidTobottom())});
      return builder.namespaces[$_get](uri);
    }
    [_insert](value) {
      if (core.Function.is(value)) {
        dart.dcall(value, []);
      } else if (core.Iterable.is(value)) {
        value[$forEach](dart.bind(this, _insert));
      } else if (src__xml__nodes__node.XmlNode.is(value)) {
        if (src__xml__nodes__text.XmlText.is(value)) {
          this.text(value.text);
        } else if (src__xml__nodes__attribute.XmlAttribute.is(value)) {
          this[_stack][$last].attributes[$add](src__xml__visitors__transformer.XmlTransformer.defaultInstance.visit(src__xml__nodes__attribute.XmlAttribute, value));
        } else if (src__xml__nodes__document_fragment.XmlDocumentFragment.is(value)) {
          value.children.forEach(dart.bind(this, _insert));
        } else if (src__xml__nodes__element.XmlElement.is(value) || src__xml__nodes__data.XmlData.is(value)) {
          this[_stack][$last].children[$add](src__xml__visitors__transformer.XmlTransformer.defaultInstance.visit(src__xml__nodes__node.XmlNode, value));
        } else {
          dart.throw(new core.ArgumentError.new("Unable to add element of type " + dart.str(value.nodeType)));
        }
      } else {
        this.text(dart.toString(value));
      }
    }
  };
  (src__xml__builder.XmlBuilder.new = function(opts) {
    let optimizeNamespaces = opts && 'optimizeNamespaces' in opts ? opts.optimizeNamespaces : false;
    this[_stack] = ListOfXmlNodeBuilder().from([new src__xml__builder.XmlDocumentBuilder.new()]);
    this[optimizeNamespaces$] = optimizeNamespaces;
  }).prototype = src__xml__builder.XmlBuilder.prototype;
  dart.addTypeTests(src__xml__builder.XmlBuilder);
  const optimizeNamespaces$ = Symbol("XmlBuilder.optimizeNamespaces");
  dart.setMethodSignature(src__xml__builder.XmlBuilder, () => ({
    __proto__: dart.getMethods(src__xml__builder.XmlBuilder.__proto__),
    text: dart.fnType(dart.void, [core.Object]),
    cdata: dart.fnType(dart.void, [core.Object]),
    processing: dart.fnType(dart.void, [core.String, core.Object]),
    comment: dart.fnType(dart.void, [core.Object]),
    element: dart.fnType(dart.void, [core.String], {namespace: core.String, namespaces: core.Map$(core.String, core.String), attributes: core.Map$(core.String, core.String), isSelfClosing: core.bool, nest: core.Object}),
    attribute: dart.fnType(dart.void, [core.String, core.Object], {namespace: core.String, attributeType: src__xml__utils__attribute_type.XmlAttributeType}),
    namespace: dart.fnType(dart.void, [core.String], [core.String]),
    build: dart.fnType(src__xml__nodes__node.XmlNode, []),
    [_buildName]: dart.fnType(src__xml__utils__name.XmlName, [core.String, core.String]),
    [_lookup]: dart.fnType(src__xml__builder.NamespaceData, [core.String]),
    [_insert]: dart.fnType(dart.void, [core.Object])
  }));
  dart.setFieldSignature(src__xml__builder.XmlBuilder, () => ({
    __proto__: dart.getFields(src__xml__builder.XmlBuilder.__proto__),
    optimizeNamespaces: dart.finalFieldType(core.bool),
    [_stack]: dart.finalFieldType(ListOfXmlNodeBuilder())
  }));
  src__xml__builder.NamespaceData = class NamespaceData extends core.Object {
    get prefix() {
      return this[prefix$0];
    }
    set prefix(value) {
      super.prefix = value;
    }
    get used() {
      return this[used$];
    }
    set used(value) {
      this[used$] = value;
    }
    get name() {
      return this.prefix == null || this.prefix[$isEmpty] ? src__xml__utils__name.XmlName.new("xmlns") : src__xml__utils__name.XmlName.new(this.prefix, "xmlns");
    }
  };
  (src__xml__builder.NamespaceData.new = function(prefix, used) {
    if (used === void 0) used = false;
    this[prefix$0] = prefix;
    this[used$] = used;
  }).prototype = src__xml__builder.NamespaceData.prototype;
  dart.addTypeTests(src__xml__builder.NamespaceData);
  const prefix$0 = Symbol("NamespaceData.prefix");
  const used$ = Symbol("NamespaceData.used");
  dart.setGetterSignature(src__xml__builder.NamespaceData, () => ({
    __proto__: dart.getGetters(src__xml__builder.NamespaceData.__proto__),
    name: src__xml__utils__name.XmlName
  }));
  dart.setFieldSignature(src__xml__builder.NamespaceData, () => ({
    __proto__: dart.getFields(src__xml__builder.NamespaceData.__proto__),
    prefix: dart.finalFieldType(core.String),
    used: dart.fieldType(core.bool)
  }));
  src__xml__builder.XmlNodeBuilder = class XmlNodeBuilder extends core.Object {};
  (src__xml__builder.XmlNodeBuilder.new = function() {
  }).prototype = src__xml__builder.XmlNodeBuilder.prototype;
  dart.addTypeTests(src__xml__builder.XmlNodeBuilder);
  src__xml__builder.XmlDocumentBuilder = class XmlDocumentBuilder extends src__xml__builder.XmlNodeBuilder {
    get namespaces() {
      return this[namespaces];
    }
    set namespaces(value) {
      super.namespaces = value;
    }
    get attributes() {
      dart.throw(new core.ArgumentError.new("Unable to define attributes at the document level."));
    }
    get children() {
      return this[children];
    }
    set children(value) {
      super.children = value;
    }
    build() {
      return new src__xml__nodes__document.XmlDocument.new(this.children);
    }
  };
  (src__xml__builder.XmlDocumentBuilder.new = function() {
    this[namespaces] = new (IdentityMapOfString$NamespaceData()).from(["http://www.w3.org/XML/1998/namespace", src__xml__utils__name.xmlData]);
    this[children] = JSArrayOfXmlNode().of([]);
  }).prototype = src__xml__builder.XmlDocumentBuilder.prototype;
  dart.addTypeTests(src__xml__builder.XmlDocumentBuilder);
  const namespaces = Symbol("XmlDocumentBuilder.namespaces");
  const children = Symbol("XmlDocumentBuilder.children");
  dart.setMethodSignature(src__xml__builder.XmlDocumentBuilder, () => ({
    __proto__: dart.getMethods(src__xml__builder.XmlDocumentBuilder.__proto__),
    build: dart.fnType(src__xml__nodes__node.XmlNode, [])
  }));
  dart.setGetterSignature(src__xml__builder.XmlDocumentBuilder, () => ({
    __proto__: dart.getGetters(src__xml__builder.XmlDocumentBuilder.__proto__),
    attributes: core.List$(src__xml__nodes__attribute.XmlAttribute)
  }));
  dart.setFieldSignature(src__xml__builder.XmlDocumentBuilder, () => ({
    __proto__: dart.getFields(src__xml__builder.XmlDocumentBuilder.__proto__),
    namespaces: dart.finalFieldType(MapOfString$NamespaceData()),
    children: dart.finalFieldType(ListOfXmlNode())
  }));
  src__xml__builder.XmlElementBuilder = class XmlElementBuilder extends src__xml__builder.XmlNodeBuilder {
    get namespaces() {
      return this[namespaces$];
    }
    set namespaces(value) {
      super.namespaces = value;
    }
    get attributes() {
      return this[attributes];
    }
    set attributes(value) {
      super.attributes = value;
    }
    get children() {
      return this[children$0];
    }
    set children(value) {
      super.children = value;
    }
    get isSelfClosing() {
      return this[isSelfClosing];
    }
    set isSelfClosing(value) {
      this[isSelfClosing] = value;
    }
    get name() {
      return this[name];
    }
    set name(value) {
      this[name] = value;
    }
    build() {
      return new src__xml__nodes__element.XmlElement.new(this.name, this.attributes, this.children, this.isSelfClosing);
    }
  };
  (src__xml__builder.XmlElementBuilder.new = function() {
    this[namespaces$] = new (IdentityMapOfString$NamespaceData()).new();
    this[attributes] = JSArrayOfXmlAttribute().of([]);
    this[children$0] = JSArrayOfXmlNode().of([]);
    this[isSelfClosing] = true;
    this[name] = null;
  }).prototype = src__xml__builder.XmlElementBuilder.prototype;
  dart.addTypeTests(src__xml__builder.XmlElementBuilder);
  const namespaces$ = Symbol("XmlElementBuilder.namespaces");
  const attributes = Symbol("XmlElementBuilder.attributes");
  const children$0 = Symbol("XmlElementBuilder.children");
  const isSelfClosing = Symbol("XmlElementBuilder.isSelfClosing");
  const name = Symbol("XmlElementBuilder.name");
  dart.setMethodSignature(src__xml__builder.XmlElementBuilder, () => ({
    __proto__: dart.getMethods(src__xml__builder.XmlElementBuilder.__proto__),
    build: dart.fnType(src__xml__nodes__node.XmlNode, [])
  }));
  dart.setFieldSignature(src__xml__builder.XmlElementBuilder, () => ({
    __proto__: dart.getFields(src__xml__builder.XmlElementBuilder.__proto__),
    namespaces: dart.finalFieldType(MapOfString$NamespaceData()),
    attributes: dart.finalFieldType(ListOfXmlAttribute()),
    children: dart.finalFieldType(ListOfXmlNode()),
    isSelfClosing: dart.fieldType(core.bool),
    name: dart.fieldType(src__xml__utils__name.XmlName)
  }));
  src__xml__production.XmlProductionDefinition = class XmlProductionDefinition extends src__core__definition__grammar.GrammarDefinition {
    start() {
      return this.ref(dart.bind(this, 'document')).end();
    }
    attribute() {
      return this.ref(dart.bind(this, 'qualified')).seq(this.ref(dart.bind(this, 'spaceOptional'))).seq(src__core__characters__char.char(src__xml__utils__token.XmlToken.equals)).seq(this.ref(dart.bind(this, 'spaceOptional'))).seq(this.ref(dart.bind(this, 'attributeValue')));
    }
    attributeValue() {
      return this.ref(dart.bind(this, 'attributeValueDouble')).or(this.ref(dart.bind(this, 'attributeValueSingle')));
    }
    attributeValueDouble() {
      return src__core__characters__char.char(src__xml__utils__token.XmlToken.doubleQuote).seq(new src__xml__utils__entities.XmlCharacterDataParser.new(src__xml__utils__token.XmlToken.doubleQuote, 0)).seq(src__core__characters__char.char(src__xml__utils__token.XmlToken.doubleQuote));
    }
    attributeValueSingle() {
      return src__core__characters__char.char(src__xml__utils__token.XmlToken.singleQuote).seq(new src__xml__utils__entities.XmlCharacterDataParser.new(src__xml__utils__token.XmlToken.singleQuote, 0)).seq(src__core__characters__char.char(src__xml__utils__token.XmlToken.singleQuote));
    }
    attributes() {
      return this.ref(dart.bind(this, 'space')).seq(this.ref(dart.bind(this, 'attribute'))).pick(dart.dynamic, 1).star();
    }
    comment() {
      return src__core__predicates__string.string(src__xml__utils__token.XmlToken.openComment).seq(src__core__predicates__any.any().starLazy(src__core__predicates__string.string(src__xml__utils__token.XmlToken.closeComment)).flatten("Expected comment content")).seq(src__core__predicates__string.string(src__xml__utils__token.XmlToken.closeComment));
    }
    cdata() {
      return src__core__predicates__string.string(src__xml__utils__token.XmlToken.openCDATA).seq(src__core__predicates__any.any().starLazy(src__core__predicates__string.string(src__xml__utils__token.XmlToken.closeCDATA)).flatten("Expected CDATA content")).seq(src__core__predicates__string.string(src__xml__utils__token.XmlToken.closeCDATA));
    }
    content() {
      return this.ref(dart.bind(this, 'characterData')).or(this.ref(dart.bind(this, 'element'))).or(this.ref(dart.bind(this, 'processing'))).or(this.ref(dart.bind(this, 'comment'))).or(this.ref(dart.bind(this, 'cdata'))).star();
    }
    doctype() {
      return src__core__predicates__string.string(src__xml__utils__token.XmlToken.openDoctype).seq(this.ref(dart.bind(this, 'space'))).seq(this.ref(dart.bind(this, 'nameToken')).or(this.ref(dart.bind(this, 'attributeValue'))).or(src__core__predicates__any.any().starLazy(src__core__characters__char.char(src__xml__utils__token.XmlToken.openDoctypeBlock)).seq(src__core__characters__char.char(src__xml__utils__token.XmlToken.openDoctypeBlock)).seq(src__core__predicates__any.any().starLazy(src__core__characters__char.char(src__xml__utils__token.XmlToken.closeDoctypeBlock))).seq(src__core__characters__char.char(src__xml__utils__token.XmlToken.closeDoctypeBlock))).separatedBy(dart.dynamic, this.ref(dart.bind(this, 'space'))).flatten("Expected doctype content")).seq(this.ref(dart.bind(this, 'spaceOptional'))).seq(src__core__characters__char.char(src__xml__utils__token.XmlToken.closeDoctype));
    }
    document() {
      return this.ref(dart.bind(this, 'misc')).seq(this.ref(dart.bind(this, 'doctype')).optional()).seq(this.ref(dart.bind(this, 'misc'))).seq(this.ref(dart.bind(this, 'element'))).seq(this.ref(dart.bind(this, 'misc')));
    }
    element() {
      return src__core__characters__char.char(src__xml__utils__token.XmlToken.openElement).seq(this.ref(dart.bind(this, 'qualified'))).seq(this.ref(dart.bind(this, 'attributes'))).seq(this.ref(dart.bind(this, 'spaceOptional'))).seq(src__core__predicates__string.string(src__xml__utils__token.XmlToken.closeEndElement).or(src__core__characters__char.char(src__xml__utils__token.XmlToken.closeElement).seq(this.ref(dart.bind(this, 'content'))).seq(src__core__predicates__string.string(src__xml__utils__token.XmlToken.openEndElement).token()).seq(this.ref(dart.bind(this, 'qualified'))).seq(this.ref(dart.bind(this, 'spaceOptional'))).seq(src__core__characters__char.char(src__xml__utils__token.XmlToken.closeElement))));
    }
    processing() {
      return src__core__predicates__string.string(src__xml__utils__token.XmlToken.openProcessing).seq(this.ref(dart.bind(this, 'nameToken'))).seq(this.ref(dart.bind(this, 'space')).seq(src__core__predicates__any.any().starLazy(src__core__predicates__string.string(src__xml__utils__token.XmlToken.closeProcessing)).flatten("Expected processing instruction content")).pick(dart.dynamic, 1).optional("")).seq(src__core__predicates__string.string(src__xml__utils__token.XmlToken.closeProcessing));
    }
    qualified() {
      return this.ref(dart.bind(this, 'nameToken'));
    }
    characterData() {
      return new src__xml__utils__entities.XmlCharacterDataParser.new(src__xml__utils__token.XmlToken.openElement, 1);
    }
    misc() {
      return this.ref(dart.bind(this, 'spaceText')).or(this.ref(dart.bind(this, 'comment'))).or(this.ref(dart.bind(this, 'processing'))).star();
    }
    space() {
      return src__core__characters__whitespace.whitespace().plus();
    }
    spaceText() {
      return this.ref(dart.bind(this, 'space')).flatten("Expected whitespace");
    }
    spaceOptional() {
      return src__core__characters__whitespace.whitespace().star();
    }
    nameToken() {
      return this.ref(dart.bind(this, 'nameStartChar')).seq(this.ref(dart.bind(this, 'nameChar')).star()).flatten("Expected name");
    }
    nameStartChar() {
      return src__core__characters__pattern.pattern(":A-Z_a-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、퟿豈-﷏ﷰ-�");
    }
    nameChar() {
      return src__core__characters__pattern.pattern("-.0-9·̀-ͯ‿-⁀:A-Z_a-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、퟿豈-﷏ﷰ-�");
    }
  };
  (src__xml__production.XmlProductionDefinition.new = function() {
    src__xml__production.XmlProductionDefinition.__proto__.new.call(this);
  }).prototype = src__xml__production.XmlProductionDefinition.prototype;
  dart.addTypeTests(src__xml__production.XmlProductionDefinition);
  dart.setMethodSignature(src__xml__production.XmlProductionDefinition, () => ({
    __proto__: dart.getMethods(src__xml__production.XmlProductionDefinition.__proto__),
    start: dart.fnType(src__core__parser.Parser, []),
    attribute: dart.fnType(src__core__parser.Parser, []),
    attributeValue: dart.fnType(src__core__parser.Parser, []),
    attributeValueDouble: dart.fnType(src__core__parser.Parser, []),
    attributeValueSingle: dart.fnType(src__core__parser.Parser, []),
    attributes: dart.fnType(src__core__parser.Parser, []),
    comment: dart.fnType(src__core__parser.Parser, []),
    cdata: dart.fnType(src__core__parser.Parser, []),
    content: dart.fnType(src__core__parser.Parser, []),
    doctype: dart.fnType(src__core__parser.Parser, []),
    document: dart.fnType(src__core__parser.Parser, []),
    element: dart.fnType(src__core__parser.Parser, []),
    processing: dart.fnType(src__core__parser.Parser, []),
    qualified: dart.fnType(src__core__parser.Parser, []),
    characterData: dart.fnType(src__core__parser.Parser, []),
    misc: dart.fnType(src__core__parser.Parser, []),
    space: dart.fnType(src__core__parser.Parser, []),
    spaceText: dart.fnType(src__core__parser.Parser, []),
    spaceOptional: dart.fnType(src__core__parser.Parser, []),
    nameToken: dart.fnType(src__core__parser.Parser, []),
    nameStartChar: dart.fnType(src__core__parser.Parser, []),
    nameChar: dart.fnType(src__core__parser.Parser, [])
  }));
  dart.defineLazy(src__xml__production.XmlProductionDefinition, {
    /*src__xml__production.XmlProductionDefinition._nameStartChars*/get _nameStartChars() {
      return ":A-Z_a-zÀ-ÖØ-öø-˿" + "Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、" + "퟿豈-﷏ﷰ-�";
    },
    /*src__xml__production.XmlProductionDefinition._nameChars*/get _nameChars() {
      return "-.0-9·̀-ͯ‿-⁀" + ":A-Z_a-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、퟿豈-﷏ﷰ-�";
    }
  });
  const _is_XmlGrammarDefinition_default = Symbol('_is_XmlGrammarDefinition_default');
  src__xml__grammar.XmlGrammarDefinition$ = dart.generic((TNode, TName) => {
    let dynamicToTNode = () => (dynamicToTNode = dart.constFn(dart.fnType(TNode, [dart.dynamic])))();
    let JSArrayOfTNode = () => (JSArrayOfTNode = dart.constFn(_interceptors.JSArray$(TNode)))();
    class XmlGrammarDefinition extends src__xml__production.XmlProductionDefinition {
      attribute() {
        return super.attribute().map(dart.dynamic, dart.fn(each => this.createAttribute(TName._check(dart.dindex(each, 0)), core.String._check(dart.dindex(dart.dindex(each, 4), 0)), src__xml__utils__attribute_type.XmlAttributeType._check(dart.dindex(dart.dindex(each, 4), 1))), dynamicToTNode()));
      }
      attributeValueDouble() {
        return super.attributeValueDouble().map(dart.dynamic, dart.fn(each => [dart.dindex(each, 1), src__xml__utils__attribute_type.XmlAttributeType.DOUBLE_QUOTE], dynamicToList()));
      }
      attributeValueSingle() {
        return super.attributeValueSingle().map(dart.dynamic, dart.fn(each => [dart.dindex(each, 1), src__xml__utils__attribute_type.XmlAttributeType.SINGLE_QUOTE], dynamicToList()));
      }
      comment() {
        return super.comment().map(dart.dynamic, dart.fn(each => this.createComment(core.String._check(dart.dindex(each, 1))), dynamicToTNode()));
      }
      cdata() {
        return super.cdata().map(dart.dynamic, dart.fn(each => this.createCDATA(core.String._check(dart.dindex(each, 1))), dynamicToTNode()));
      }
      doctype() {
        return super.doctype().map(dart.dynamic, dart.fn(each => this.createDoctype(core.String._check(dart.dindex(each, 2))), dynamicToTNode()));
      }
      document() {
        return super.document().map(dart.dynamic, dart.fn(each => {
          let nodes = [];
          nodes[$addAll](core.Iterable._check(dart.dindex(each, 0)));
          if (dart.dindex(each, 1) != null) {
            nodes[$add](dart.dindex(each, 1));
          }
          nodes[$addAll](core.Iterable._check(dart.dindex(each, 2)));
          nodes[$add](dart.dindex(each, 3));
          nodes[$addAll](core.Iterable._check(dart.dindex(each, 4)));
          return this.createDocument(core.List.castFrom(dart.dynamic, TNode, nodes));
        }, dynamicToTNode()));
      }
      element() {
        return super.element().map(dart.dynamic, dart.fn(list => {
          let name = TName._check(dart.dindex(list, 1));
          let attributes = core.List.castFrom(dart.dynamic, TNode, core.List._check(dart.dindex(list, 2)));
          if (dart.equals(dart.dindex(list, 4), src__xml__utils__token.XmlToken.closeEndElement)) {
            return this.createElement(name, attributes, JSArrayOfTNode().of([]), true);
          } else {
            if (dart.equals(dart.dindex(list, 1), dart.dindex(dart.dindex(list, 4), 3))) {
              let children = core.List.castFrom(dart.dynamic, TNode, core.List._check(dart.dindex(dart.dindex(list, 4), 1)));
              return this.createElement(name, attributes, children, children[$isNotEmpty]);
            } else {
              let token = src__core__token.Token._check(dart.dindex(dart.dindex(list, 4), 2));
              dart.throw(new src__xml__utils__exceptions.XmlParserException.new("Expected </" + dart.str(dart.dindex(list, 1)) + ">, but found </" + dart.str(dart.dindex(dart.dindex(list, 4), 3)) + ">", token.line, token.column));
            }
          }
        }, dynamicToTNode()));
      }
      processing() {
        return super.processing().map(dart.dynamic, dart.fn(each => this.createProcessing(core.String._check(dart.dindex(each, 1)), core.String._check(dart.dindex(each, 2))), dynamicToTNode()));
      }
      qualified() {
        return ParserOfString()._check(super.qualified().cast(core.String)).map(dart.dynamic, dart.bind(this, 'createQualified'));
      }
      characterData() {
        return ParserOfString()._check(super.characterData().cast(core.String)).map(dart.dynamic, dart.bind(this, 'createText'));
      }
      spaceText() {
        return ParserOfString()._check(super.spaceText().cast(core.String)).map(dart.dynamic, dart.bind(this, 'createText'));
      }
    }
    (XmlGrammarDefinition.new = function() {
      XmlGrammarDefinition.__proto__.new.call(this);
    }).prototype = XmlGrammarDefinition.prototype;
    dart.addTypeTests(XmlGrammarDefinition);
    XmlGrammarDefinition.prototype[_is_XmlGrammarDefinition_default] = true;
    dart.setMethodSignature(XmlGrammarDefinition, () => ({
      __proto__: dart.getMethods(XmlGrammarDefinition.__proto__),
      attribute: dart.fnType(src__core__parser.Parser, []),
      attributeValueDouble: dart.fnType(src__core__parser.Parser, []),
      attributeValueSingle: dart.fnType(src__core__parser.Parser, []),
      comment: dart.fnType(src__core__parser.Parser, []),
      cdata: dart.fnType(src__core__parser.Parser, []),
      doctype: dart.fnType(src__core__parser.Parser, []),
      document: dart.fnType(src__core__parser.Parser, []),
      element: dart.fnType(src__core__parser.Parser, []),
      processing: dart.fnType(src__core__parser.Parser, []),
      qualified: dart.fnType(src__core__parser.Parser, []),
      characterData: dart.fnType(src__core__parser.Parser, []),
      spaceText: dart.fnType(src__core__parser.Parser, [])
    }));
    return XmlGrammarDefinition;
  });
  src__xml__grammar.XmlGrammarDefinition = src__xml__grammar.XmlGrammarDefinition$();
  dart.addTypeTests(src__xml__grammar.XmlGrammarDefinition, _is_XmlGrammarDefinition_default);
  src__xml__parser.XmlParserDefinition = class XmlParserDefinition extends src__xml__grammar.XmlGrammarDefinition$(src__xml__nodes__node.XmlNode, src__xml__utils__name.XmlName) {
    createAttribute(name, text, type) {
      src__xml__utils__name.XmlName._check(name);
      return new src__xml__nodes__attribute.XmlAttribute.new(name, text, type);
    }
    createComment(text) {
      return new src__xml__nodes__comment.XmlComment.new(text);
    }
    createCDATA(text) {
      return new src__xml__nodes__cdata.XmlCDATA.new(text);
    }
    createDoctype(text) {
      return new src__xml__nodes__doctype.XmlDoctype.new(text);
    }
    createDocument(children) {
      IterableOfXmlNode()._check(children);
      return new src__xml__nodes__document.XmlDocument.new(children);
    }
    createElement(name, attributes, children, isSelfClosing) {
      src__xml__utils__name.XmlName._check(name);
      IterableOfXmlNode()._check(attributes);
      IterableOfXmlNode()._check(children);
      if (isSelfClosing === void 0) isSelfClosing = true;
      return new src__xml__nodes__element.XmlElement.new(name, ListOfXmlAttribute().from(attributes), children, isSelfClosing);
    }
    createProcessing(target, text) {
      return new src__xml__nodes__processing.XmlProcessing.new(target, text);
    }
    createQualified(name) {
      return src__xml__utils__name.XmlName.fromString(name);
    }
    createText(text) {
      return new src__xml__nodes__text.XmlText.new(text);
    }
  };
  (src__xml__parser.XmlParserDefinition.new = function() {
    src__xml__parser.XmlParserDefinition.__proto__.new.call(this);
  }).prototype = src__xml__parser.XmlParserDefinition.prototype;
  dart.addTypeTests(src__xml__parser.XmlParserDefinition);
  dart.setMethodSignature(src__xml__parser.XmlParserDefinition, () => ({
    __proto__: dart.getMethods(src__xml__parser.XmlParserDefinition.__proto__),
    createAttribute: dart.fnType(src__xml__nodes__attribute.XmlAttribute, [core.Object, core.String, src__xml__utils__attribute_type.XmlAttributeType]),
    createComment: dart.fnType(src__xml__nodes__comment.XmlComment, [core.String]),
    createCDATA: dart.fnType(src__xml__nodes__cdata.XmlCDATA, [core.String]),
    createDoctype: dart.fnType(src__xml__nodes__doctype.XmlDoctype, [core.String]),
    createDocument: dart.fnType(src__xml__nodes__document.XmlDocument, [core.Object]),
    createElement: dart.fnType(src__xml__nodes__element.XmlElement, [core.Object, core.Object, core.Object], [core.bool]),
    createProcessing: dart.fnType(src__xml__nodes__processing.XmlProcessing, [core.String, core.String]),
    createQualified: dart.fnType(src__xml__utils__name.XmlName, [core.String]),
    createText: dart.fnType(src__xml__nodes__text.XmlText, [core.String])
  }));
  dart.trackLibraries("packages/xml/src/xml/builder.ddc", {
    "package:xml/src/xml/utils/node_type.dart": src__xml__utils__node_type,
    "package:xml/src/xml/utils/token.dart": src__xml__utils__token,
    "package:xml/src/xml/utils/attribute_type.dart": src__xml__utils__attribute_type,
    "package:xml/src/xml/utils/entities.dart": src__xml__utils__entities,
    "package:xml/src/xml/visitors/transformer.dart": src__xml__visitors__transformer,
    "package:xml/src/xml/visitors/normalizer.dart": src__xml__visitors__normalizer,
    "package:xml/src/xml/utils/node_list.dart": src__xml__utils__node_list,
    "package:xml/src/xml/visitors/visitable.dart": src__xml__visitors__visitable,
    "package:xml/src/xml/nodes/document_fragment.dart": src__xml__nodes__document_fragment,
    "package:xml/src/xml/visitors/writer.dart": src__xml__visitors__writer,
    "package:xml/src/xml/nodes/text.dart": src__xml__nodes__text,
    "package:xml/src/xml/nodes/processing.dart": src__xml__nodes__processing,
    "package:xml/src/xml/visitors/pretty_writer.dart": src__xml__visitors__pretty_writer,
    "package:xml/src/xml/utils/writable.dart": src__xml__utils__writable,
    "package:xml/src/xml/utils/simple_name.dart": src__xml__utils__simple_name,
    "package:xml/src/xml/utils/prefix_name.dart": src__xml__utils__prefix_name,
    "package:xml/src/xml/utils/exceptions.dart": src__xml__utils__exceptions,
    "package:xml/src/xml/utils/owned.dart": src__xml__utils__owned,
    "package:xml/src/xml/utils/name.dart": src__xml__utils__name,
    "package:xml/src/xml/utils/named.dart": src__xml__utils__named,
    "package:xml/src/xml/utils/name_matcher.dart": src__xml__utils__name_matcher,
    "package:xml/src/xml/nodes/parent.dart": src__xml__nodes__parent,
    "package:xml/src/xml/nodes/element.dart": src__xml__nodes__element,
    "package:xml/src/xml/nodes/document.dart": src__xml__nodes__document,
    "package:xml/src/xml/nodes/doctype.dart": src__xml__nodes__doctype,
    "package:xml/src/xml/nodes/comment.dart": src__xml__nodes__comment,
    "package:xml/src/xml/visitors/visitor.dart": src__xml__visitors__visitor,
    "package:xml/src/xml/nodes/data.dart": src__xml__nodes__data,
    "package:xml/src/xml/nodes/cdata.dart": src__xml__nodes__cdata,
    "package:xml/src/xml/iterators/preceding.dart": src__xml__iterators__preceding,
    "package:xml/src/xml/iterators/following.dart": src__xml__iterators__following,
    "package:xml/src/xml/iterators/descendants.dart": src__xml__iterators__descendants,
    "package:xml/src/xml/iterators/ancestors.dart": src__xml__iterators__ancestors,
    "package:xml/src/xml/nodes/node.dart": src__xml__nodes__node,
    "package:xml/src/xml/nodes/attribute.dart": src__xml__nodes__attribute,
    "package:xml/src/xml/builder.dart": src__xml__builder,
    "package:xml/src/xml/production.dart": src__xml__production,
    "package:xml/src/xml/grammar.dart": src__xml__grammar,
    "package:xml/src/xml/parser.dart": src__xml__parser
  }, '{"version":3,"sourceRoot":"","sources":["utils/token.dart","utils/entities.dart","visitors/visitor.dart","visitors/transformer.dart","visitors/normalizer.dart","utils/owned.dart","utils/node_list.dart","visitors/visitable.dart","utils/writable.dart","nodes/node.dart","nodes/parent.dart","nodes/document_fragment.dart","visitors/writer.dart","nodes/data.dart","nodes/text.dart","nodes/processing.dart","visitors/pretty_writer.dart","utils/name.dart","utils/simple_name.dart","utils/prefix_name.dart","utils/exceptions.dart","utils/named.dart","utils/name_matcher.dart","nodes/element.dart","nodes/document.dart","nodes/doctype.dart","nodes/comment.dart","nodes/cdata.dart","iterators/preceding.dart","iterators/following.dart","iterators/descendants.dart","iterators/ancestors.dart","nodes/attribute.dart","builder.dart","production.dart","grammar.dart","parser.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAuBA;;;MAnBsB,2CAAW;YAAG;;MACd,2CAAW;YAAG;;MACd,sCAAM;YAAG;;MACT,yCAAS;YAAG;;MACZ,0CAAU;YAAG;;MACb,2CAAW;YAAG;;MACd,4CAAY;YAAG;;MACf,yCAAS;YAAG;;MACZ,0CAAU;YAAG;;MACb,2CAAW;YAAG;;MACd,4CAAY;YAAG;;MACf,8CAAc;YAAG;;MACjB,+CAAe;YAAG;;MAClB,2CAAW;YAAG;;MACd,4CAAY;YAAG;;MACf,gDAAgB;YAAG;;MACnB,iDAAiB;YAAG;;MACpB,8CAAc;YAAG;;MACjB,+CAAe;YAAG;;;;;;;;;;;;;;;;;;;;;;;;MCfnB,oCAAU;qCAAG,sCAAO,CAAC,SAClC,CAAC,sCAAO,CAAC,iBACJ,UACG,CAAC,+CACL,eAAC,QAAC,KAAK,IAAK,wBAAmB,CAAC,QAAG,MAAM,CAAC,KAAK,UAAS,+BAC3D,cAAC;;MAGW,sCAAY;qCAAG,gCAAI,CAAC,QACjC,CAAC,oCAAU,GAAG,CAAC,kCAAK,OACf,UACG,CAAC,2CACL,eAAC,QAAC,KAAK,IAAK,wBAAmB,CAAC,QAAG,MAAM,CAAC,KAAK,6BAClD,cAAC;;MAGW,iCAAO;qCAAG,gCAAI,CAAC,QAC5B,CAAC,sCAAY,GAAG,CAAC,gCAAI,OAChB,UACG,CAAC,yCACL,eAAC,QAAC,KAAK,IAAK,sCAAY,QAAC,KAAK,2BAClC,CAAC,gCAAI,CAAC,UACL,cAAC;;;;;;;YAce,OAAe;AACpC,UAAM,QAAQ,OAAO,OAAO;AAC5B,UAAM,SAAS,KAAK,OAAO;AAC3B,UAAM,aAAS,qBAAY;AAC3B,UAAI,WAAW,OAAO,SAAS;AAC/B,UAAI,QAAQ,QAAQ;AAGpB,aAAgB,aAAT,QAAQ,IAAG,MAAM,EAAE;AACxB,YAAM,QAAQ,KAAK,aAAW,CAAC,QAAQ;AACvC,YAAI,KAAK,KAAI,kBAAY,EAAE;AACzB;cACK,KAAI,KAAK,KAAI,IAAI;AACtB,cAAM,SAAS,iCAAO,QAAQ,CAAC,OAAO,QAAQ,YAAC,MAAM,QAAQ;AAC7D,wBAAI,MAAM,UAAU,KAAI,MAAM,MAAM,IAAI,MAAM;AAC5C,kBAAM,MAAM,CAAC,KAAK,YAAU,CAAC,KAAK,EAAE,QAAQ;AAC5C,kBAAM,MAAM,CAAC,MAAM,MAAM;AACzB,oBAAQ,GAAG,MAAM,SAAS;AAC1B,iBAAK,GAAG,QAAQ;iBACX;AACL,oBAAQ,gBAAR,QAAQ,IA/DlB;;eAiEa;AACL,kBAAQ,gBAAR,QAAQ,IAlEhB;;;AAqEI,YAAM,MAAM,CAAC,KAAK,YAAU,CAAC,KAAK,EAAE,QAAQ;AAG5C,YAAO,AAAc,cAAd,MAAM,OAAO,iBAAG,gBAAU,IAC3B,OAAO,QAAQ,cAAC,oCAChB,OAAO,QAAQ,cAAC,MAAM,SAAS,IAAI,QAAQ;IACnD;gBAGgB,MAAa,EAAE,QAAY;AACzC,UAAM,QAAQ,QAAQ;AACtB,UAAM,SAAS,MAAM,OAAO;AAC5B,aAAgB,aAAT,QAAQ,IAAG,MAAM,EAAE;AACxB,YAAM,QAAQ,MAAM,aAAW,CAAC,QAAQ;AACxC,YAAI,KAAK,KAAI,kBAAY,EAAE;AACzB;eACK;AACL,kBAAQ,gBAAR,QAAQ,IAtFhB;;;AAyFI,YAAO,AAAS,AAAQ,cAAjB,QAAQ,iBAAG,KAAK,iBAAG,gBAAU,IAAG,CAAC,IAAI,QAAQ;IACtD;;YAG6B,uBAAC,iCAAO;IAAC;;iBAGL,oDAAsB,CAAC,cAAQ,EAAE,gBAAU;IAAC;uBAGrD,KAA4B;8DAAL;YAEhB,WAD3B,wBAAwB,CAAC,KAAK,MAC9B,cAAQ,IAAI,KAAK,UAAS,IAC1B,gBAAU,IAAI,KAAK,YAAW;;;mEAjEX,OAAc,EAAE,SAAa;IAC9C,cAAQ,GAAG,OAAO;IAClB,kBAAY,GAAG,OAAO,aAAW,CAAC;IAClC,gBAAU,GAAG,SAAS;;;;;;;;;;;;;;;;;;;;;MAkEJ,sCAAY;YAAG,0CAEvC,MAAM,KACN,MAAM,KACN,OAAO,KACP,QAAQ,KACR,QAAQ,MAGR,UAAU,KACV,UAAU,KACV,SAAS,KACT,SAAS,KACT,SAAS,KACT,SAAS,KACT,SAAS,KACT,UAAU,KACV,UAAU,KACV,WAAW,KACX,SAAS,KACT,SAAS,KACT,OAAO,KACP,OAAO,KACP,SAAS,KACT,SAAS,KACT,SAAS,KACT,UAAU,KACV,UAAU,KACV,QAAQ,KACR,QAAQ,KACR,SAAS,KACT,QAAQ,KACR,QAAQ,KACR,UAAU,KACV,QAAQ,KACR,OAAO,KACP,UAAU,KACV,UAAU,KACV,SAAS,KACT,QAAQ,KACR,OAAO,KACP,OAAO,KACP,QAAQ,KACR,SAAS,KACT,QAAQ,KACR,QAAQ,KACR,SAAS,KACT,OAAO,KACP,UAAU,KACV,UAAU,KACV,UAAU,KACV,QAAQ,KACR,QAAQ,KACR,OAAO,KACP,SAAS,KACT,SAAS,KACT,SAAS,KACT,UAAU,KACV,UAAU,KACV,UAAU,KACV,SAAS,KACT,SAAS,KACT,UAAU,KACV,UAAU,KACV,SAAS,KACT,QAAQ,KACR,QAAQ,KACR,WAAW,KACX,WAAW,KACX,SAAS,KACT,OAAO,KACP,OAAO,KACP,OAAO,KACP,OAAO,KACP,QAAQ,KACR,QAAQ,KACR,QAAQ,KACR,SAAS,KACT,QAAQ,KACR,UAAU,KACV,UAAU,KACV,UAAU,KACV,UAAU,KACV,SAAS,KACT,SAAS,KACT,SAAS,KACT,MAAM,KACN,QAAQ,KACR,QAAQ,KACR,UAAU,KACV,UAAU,KACV,UAAU,KACV,UAAU,KACV,SAAS,KACT,SAAS,KACT,SAAS,KACT,UAAU,KACV,UAAU,KACV,SAAS,KACT,SAAS,KACT,OAAO,KACP,QAAQ,KACR,QAAQ,KACR,UAAU,KACV,QAAQ,KACR,QAAQ,KACR,QAAQ,KACR,SAAS,KACT,SAAS,KACT,UAAU,KACV,UAAU,KACV,QAAQ,KACR,SAAS,KACT,QAAQ,KACR,QAAQ,KACR,SAAS,KACT,SAAS,KACT,MAAM,KACN,UAAU,KACV,UAAU,KACV,OAAO,KACP,OAAO,KACP,UAAU,KACV,SAAS,KACT,QAAQ,KACR,SAAS,KACT,SAAS,KACT,UAAU,KACV,SAAS,KACT,MAAM,KACN,MAAM,KACN,SAAS,KACT,QAAQ,KACR,SAAS,KACT,MAAM,KACN,MAAM,KACN,OAAO,KACP,SAAS,KACT,QAAQ,KACR,UAAU,KACV,UAAU,KACV,MAAM,KACN,MAAM,KACN,UAAU,KACV,UAAU,KACV,SAAS,KACT,SAAS,KACT,SAAS,KACT,SAAS,KACT,UAAU,KACV,UAAU,KACV,SAAS,KACT,SAAS,KACT,SAAS,KACT,WAAW,KACX,WAAW,KACX,SAAS,KACT,MAAM,KACN,QAAQ,KACR,QAAQ,KACR,UAAU,KACV,UAAU,KACV,UAAU,KACV,UAAU,KACV,UAAU,KACV,QAAQ,KACR,QAAQ,KACR,QAAQ,KACR,QAAQ,KACR,UAAU,KACV,QAAQ,KACR,OAAO,KACP,OAAO,KACP,MAAM,KACN,MAAM,KACN,OAAO,KACP,UAAU,KACV,SAAS,KACT,SAAS,KACT,SAAS,KACT,QAAQ,KACR,QAAQ,KACR,OAAO,KACP,OAAO,KACP,SAAS,KACT,QAAQ,KACR,SAAS,KACT,QAAQ,KACR,QAAQ,KACR,SAAS,KACT,SAAS,KACT,QAAQ,KACR,OAAO,KACP,UAAU,KACV,OAAO,KACP,OAAO,KACP,OAAO,KACP,UAAU,KACV,SAAS,KACT,SAAS,KACT,UAAU,KACV,UAAU,KACV,QAAQ,KACR,QAAQ,KACR,OAAO,KACP,SAAS,KACT,SAAS,KACT,UAAU,KACV,OAAO,KACP,UAAU,KACV,OAAO,KACP,QAAQ,KACR,OAAO,KACP,OAAO,KACP,QAAQ,KACR,QAAQ,KACR,QAAQ,KACR,QAAQ,KACR,SAAS,KACT,OAAO,KACP,OAAO,KACP,UAAU,KACV,SAAS,KACT,SAAS,KACT,YAAY,KACZ,UAAU,KACV,SAAS,KACT,SAAS,KACT,SAAS,KACT,SAAS,KACT,SAAS,KACT,UAAU,KACV,UAAU,KACV,QAAQ,KACR,QAAQ,KACR,SAAS,KACT,SAAS,KACT,UAAU,KACV,UAAU,KACV,OAAO,KACP,SAAS,KACT,WAAW,KACX,WAAW,KACX,QAAQ,KACR,QAAQ,KACR,UAAU,KACV,MAAM,KACN,MAAM,KACN,UAAU,KACV,UAAU,KACV,OAAO,KACP,QAAQ,KACR,QAAQ,KACR,QAAQ,KACR,QAAQ,KACR,OAAO,KACP,QAAQ;;;qDAOW,KAAY;UAC7B,MAAK,mBAAiB,CAAC,sCAAY,EAAE,gEAAY;EAAC;;MAExC,sCAAY;YAAG,gBAAM,CAAC;;;oDAEhB,KAAW;AAC7B,YAAQ,KAAK,MAAM,CAAC;UACb;;AACH,cAAO;;UACJ;;AACH,cAAO;;UACJ;;AACH,cAAO;;;;AAEP,uBAAM,uBAAc;;;EAE1B;+DAG+B,KAAY,EAAE,aAA8B;UACvE,MAAK,mBAAiB,CAClB,2CAAiB,QAAC,aAAa,GAAG,2CAAiB,QAAC,aAAa;EAAE;yEAIvE,KAAY,EAAE,aAA8B;AAC9C,QAAM,QAAQ,wCAAc,QAAC,aAAa;AAC1C,QAAM,aAAS,qBAAY;AAC3B,UAAM,MAAM,CAAC,KAAK;AAClB,UAAM,MAAM,CAAC,iDAAuB,CAAC,KAAK,EAAE,aAAa;AACzD,UAAM,MAAM,CAAC,KAAK;AAClB,UAAO,OAAM,SAAS;EACxB;;MAEoC,wCAAc;YAAG,kDACnD,gDAAgB,aAAa,EAAE,KAC/B,gDAAgB,aAAa,EAAE;;MAGI,2CAAiB;YAAG,mDACvD,gDAAgB,aAAa,EAAE,eAAM,CAAC,mBACtC,gDAAgB,aAAa,EAAE,eAAM,CAAC;;MAGK,2CAAiB;YAAG,yDAC/D,gDAAgB,aAAa,EAAE,QAAC,KAAK;AACnC,kBAAQ,KAAK,MAAM,CAAC;gBACb;;AACH,oBAAO;;gBACJ;;AACH,oBAAO;;gBACJ;;AACH,oBAAO;;gBACJ;;AACH,oBAAO;;gBACJ;;AACH,oBAAO;;gBACJ;;AACH,oBAAO;;;;AAEP,6BAAM,uBAAc;;;6BAG1B,gDAAgB,aAAa,EAAE,QAAC,KAAK;AACnC,kBAAQ,KAAK,MAAM,CAAC;gBACb;;AACH,oBAAO;;gBACJ;;AACH,oBAAO;;gBACJ;;AACH,oBAAO;;gBACJ;;AACH,oBAAO;;gBACJ;;AACH,oBAAO;;gBACJ;;AACH,oBAAO;;;;AAEP,6BAAM,uBAAc;;;;;;;aC7af,SAAsB;sBAAK,SAAS,OAAO,CAAC;IAAK;cAG1C,IAAY;YAAK;IAAI;mBAGhB,IAAiB;YAAK;IAAI;kBAG3B,IAAgB;YAAK;IAAI;0BAGjB,IAAwB;YAAK;IAAI;iBAG1C,IAAe;YAAK;IAAI;eAG1B,IAAa;YAAK;IAAI;iBAGpB,IAAe;YAAK;IAAI;iBAGxB,IAAe;YAAK;IAAI;oBAGrB,IAAkB;YAAK;IAAI;cAGjC,IAAY;YAAK;IAAI;;;EACzC;;;;;;;;;;;;;;;;;mBC3B8B,IAAiB;iBACzC,2CAAY,CAAC,UAAK,gCAAC,IAAI,KAAK,GAAG,IAAI,MAAM,EAAE,IAAI,cAAc;IAAC;eAG9C,IAAa;iBAAK,mCAAQ,CAAC,IAAI,KAAK;IAAC;iBAGjC,IAAe;iBAAK,uCAAU,CAAC,IAAI,KAAK;IAAC;iBAGzC,IAAe;iBAAK,uCAAU,CAAC,IAAI,KAAK;IAAC;kBAGvC,IAAgB;iBACtC,yCAAW,4BAAC,IAAI,SAAS,IAAI,2CAAC,wBAAK;IAAE;0BAGC,IAAwB;iBAC9D,0DAAmB,4BAAC,IAAI,SAAS,IAAI,2CAAC,wBAAK;IAAE;iBAGzB,IAAe;iBAAK,uCAAU,CAAC,UAAK,gCAAC,IAAI,KAAK,mCAClE,IAAI,WAAW,IAAI,qDAAC,wBAAK,yEAAG,IAAI,SAAS,IAAI,2CAAC,wBAAK,oCAAG,IAAI,cAAc;IAAC;cAG3D,IAAY;YAAK,yCAAkB,CAAC,IAAI,UAAU;IAAC;oBAGvC,IAAkB;iBAC5C,6CAAa,CAAC,IAAI,OAAO,EAAE,IAAI,KAAK;IAAC;cAGvB,IAAY;iBAAK,iCAAO,CAAC,IAAI,KAAK;IAAC;;;EACvD;;;;;;;;;;;;;;;;MApC8B,8DAAe;iBAAG,kDAAc;;;;;;;kBCJzC,IAAgB;YAAK,iBAAU,CAAC,IAAI,SAAS;IAAC;0BAGtC,IAAwB;YAC/C,iBAAU,CAAC,IAAI,SAAS;IAAC;iBAGX,IAAe;YAAK,iBAAU,CAAC,IAAI,SAAS;IAAC;iBAE/C,QAAsB;AACpC,wBAAY,CAAC,QAAQ;AACrB,0BAAc,CAAC,QAAQ;AACvB,cAAQ,UAAQ,YAAC,wBAAK;IACxB;mBAEkB,QAAsB;AACtC,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,QAAQ,SAAO,IAAG;AACpC,YAAM,OAAO,QAAQ,QAAC,CAAC;AACvB,YAAI,IAAI,SAAS,KAAI,sCAAW,KAAK,IAAI,IAAI,KAAK,UAAQ,EAAE;AAC1D,kBAAQ,WAAS,CAAC,CAAC;eACd;AACL,WAAC;;;IAGP;qBAEoB,QAAsB;AACxC,UAAQ;AACR,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,QAAQ,SAAO,IAAG;AACpC,YAAM,OAAO,QAAQ,QAAC,CAAC;AACvB,YAAI,IAAI,SAAS,KAAI,sCAAW,KAAK,EAAE;AACrC,cAAI,YAAY,IAAI,MAAM;AACxB,wBAAY,wCAAG,IAAI;AACnB,aAAC;iBACI;AACL,wBAAY,KAAK,GAlD3B,aAkDU,YAAY,KAAK,iBAAI,IAAI,KAAK;AAC9B,oBAAQ,WAAS,CAAC,CAAC;;eAEhB;AACL,sBAAY,GAAG;AACf,WAAC;;;IAGP;;;EACF;;;;;;;;;;;;MA/C6B,4DAAe;iBAAG,gDAAa;;;;;;;;YCFpC,cAAO;;;4DAIT,cAAS,IAAG,WAAM,KAAK,GAAG;IAAI;;YAG5B,YAAM,IAAI;IAAI;iBAGlB,MAAc;AAC9B,oDAAkB,cAAc,CAAC;AACjC,mBAAO,GAAG,MAAM;IAClB;iBAGkB,MAAc;AAC9B,mBAAO,GAAG;IACZ;;;IArBQ,aAAO;EAsBjB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MChByB;;;;;;WAGL,KAAS,EAAE,KAAO;iBAAL;AAC7B,wDAAoB,aAAa,CAAC,KAAK;AACvC,uBAAU,gBAAgB,CAAC,KAAK,EAAE;AAClC,wDAAoB,eAAe,CAAC,KAAK,EAAE,mBAAc;AACzD,sDAAkB,cAAc,CAAC,KAAK;AACtC,kBAAK,KAAK,cAAc,CAAC,WAAM;AAC/B,mBAAM,KAAK,EAAI,KAAK;AACpB,aAAK,aAAa,CAAC,WAAM;cAPE,MAAO;MAQpC;iBAGW,MAAU;cACjB,gBAAM,yBAAgB,CAAC;MAA0C;;;;UAG5D,KAAO;iBAAL;AACT,wDAAoB,aAAa,CAAC,KAAK;AACvC,YAAI,KAAK,SAAS,KAAI,sCAAW,kBAAkB,EAAE;AACnD,qBAAM,CAAC,qBAAe,CAAC,KAAK;eACvB;AACL,0DAAoB,eAAe,CAAC,KAAK,EAAE,mBAAc;AACzD,wDAAkB,cAAc,CAAC,KAAK;AACtC,mBAAS,CAAC,KAAK;AACf,eAAK,aAAa,CAAC,WAAM;;MAE7B;aAGY,QAAoB;6BAAR;AACtB,YAAM,WAAW,kBAAY,CAAC,QAAQ;AACtC,oBAAY,CAAC,QAAQ;AACrB,iBAAS,OAAQ,SAAQ,EAAE;AACzB,cAAI,aAAa,CAAC,WAAM;;MAE5B;aAGY,KAAY;AACtB,YAAM,UAAU,YAAY,CAAC,KAAK;AAClC,sBAAI,OAAO,GAAE;AACX,cAAQ,gBAAO,KAAK;AACpB,cAAI,aAAa,CAAC,WAAM;;AAE1B,cAAO,QAAO;MAChB;kBAGiB,IAA6B;AAC5C,yBAAiB,CAAC,QAAC,IAAI;AACrB,cAAM,SAAS,IAAI,CAAC,IAAI;AACxB,wBAAI,MAAM,GAAE;AACV,gBAAI,aAAa,CAAC,WAAM;;AAE1B,gBAAO,OAAM;;MAEjB;kBAGiB,IAA0B;AACzC,yBAAiB,CAAC,QAAC,IAAI;AACrB,cAAM,SAAS,IAAI,CAAC,IAAI;AACxB,yBAAK,MAAM,GAAE;AACX,gBAAI,aAAa,CAAC,WAAM;;AAE1B,gBAAO,OAAM;;MAEjB;;AAIE,iBAAS,OAAQ,OAAM;AACrB,cAAI,aAAa,CAAC,WAAM;;AAE1B,mBAAW;MACb;;AAIE,YAAM,OAAO,gBAAgB;AAC7B,YAAI,aAAa,CAAC,WAAM;AACxB,cAAO,KAAI;MACb;kBAGiB,KAAS,EAAE,GAAO;AACjC,uBAAU,gBAAgB,CAAC,KAAK,EAAE,GAAG,EAAE,WAAM;AAC7C,iBAAS,IAAI,KAAK,EAAI,aAAF,CAAC,iBAAG,GAAG,GAAE,CAAC,gBAAD,CAAC,IAtGlC,GAsGsC;AAChC,oBAAK,CAAC,cAAc,CAAC,WAAM;;AAE7B,yBAAiB,CAAC,KAAK,EAAE,GAAG;MAC9B;gBAGe,KAAS,EAAE,GAAO,EAAG,SAAW;kCAAT;;cAClC,gBAAM,yBAAgB,CAAC;MAA0C;eAGvD,KAAS,EAAE,GAAO,EAAE,QAAoB,EAAG,SAAiB;6BAA5B;kCAAe,YAAY;AACvE,uBAAU,gBAAgB,CAAC,KAAK,EAAE,GAAG,EAAE,WAAM;AAC7C,YAAM,WAAW,kBAAY,CAAC,QAAQ;AACtC,iBAAS,IAAI,KAAK,EAAI,aAAF,CAAC,iBAAG,GAAG,GAAE,CAAC,gBAAD,CAAC,IApHlC,GAoHsC;AAChC,oBAAK,CAAC,cAAc,CAAC,WAAM;;AAE7B,sBAAc,CAAC,KAAK,EAAE,GAAG,EAAE,QAAQ,EAAE,SAAS;AAC9C,iBAAS,IAAI,KAAK,EAAI,aAAF,CAAC,iBAAG,GAAG,GAAE,CAAC,gBAAD,CAAC,IAxHlC,GAwHsC;AAChC,oBAAK,CAAC,cAAc,CAAC,WAAM;;MAE/B;mBAGkB,KAAS,EAAE,GAAO,EAAE,QAAoB;6BAAR;AAChD,uBAAU,gBAAgB,CAAC,KAAK,EAAE,GAAG,EAAE,WAAM;AAC7C,YAAM,WAAW,kBAAY,CAAC,QAAQ;AACtC,iBAAS,IAAI,KAAK,EAAI,aAAF,CAAC,iBAAG,GAAG,GAAE,CAAC,gBAAD,CAAC,IAjIlC,GAiIsC;AAChC,oBAAK,CAAC,cAAc,CAAC,WAAM;;AAE7B,0BAAkB,CAAC,KAAK,EAAE,GAAG,EAAE,QAAQ;AACvC,iBAAS,OAAQ,SAAQ,EAAE;AACzB,cAAI,aAAa,CAAC,WAAM;;MAE5B;aAGY,KAAS,EAAE,QAAoB;6BAAR;cAAa,gBAAM,2BAAkB;MAAE;aAG9D,KAAS,EAAE,OAAS;iBAAP;AACvB,wDAAoB,aAAa,CAAC,OAAO;AACzC,YAAI,OAAO,SAAS,KAAI,sCAAW,kBAAkB,EAAE;AACrD,wBAAS,CAAC,KAAK,EAAE,qBAAe,CAAC,OAAO;eACnC;AACL,0DAAoB,eAAe,CAAC,OAAO,EAAE,mBAAc;AAC3D,wDAAkB,cAAc,CAAC,OAAO;AACxC,sBAAY,CAAC,KAAK,EAAE,OAAO;AAC3B,iBAAO,aAAa,CAAC,WAAM;;MAE/B;gBAGe,KAAS,EAAE,QAAoB;6BAAR;AACpC,YAAM,WAAW,kBAAY,CAAC,QAAQ;AACtC,uBAAe,CAAC,KAAK,EAAE,QAAQ;AAC/B,iBAAS,OAAQ,SAAQ,EAAE;AACzB,cAAI,aAAa,CAAC,WAAM;;MAE5B;eAGW,KAAS;AAClB,uBAAU,gBAAgB,CAAC,KAAK,EAAE;AAClC,kBAAK,KAAK,cAAc,CAAC,WAAM;AAC/B,cAAO,eAAc,CAAC,KAAK;MAC7B;wBAE4B,QAAU;iBAAR;oCAAa,QAAQ,SAAS,MAAI,IAAC,QAAC,IAAI;AAChE,0DAAoB,eAAe,CAAC,IAAI,EAAE,mBAAc;AACxD,0BAAO,IAAI,KAAK;;MAChB;qBAEmB,QAAoB;6BAAR;AACnC,YAAM,WAAW;AACjB,iBAAS,OAAQ,SAAQ,EAAE;AACzB,0DAAoB,aAAa,CAAC,IAAI;AACtC,cAAI,IAAI,SAAS,KAAI,sCAAW,kBAAkB,EAAE;AAClD,oBAAQ,SAAO,CAAC,qBAAe,CAAC,IAAI;iBAC/B;AACL,4DAAoB,eAAe,CAAC,IAAI,EAAE,mBAAc;AACxD,0DAAkB,cAAc,CAAC,IAAI;AACrC,oBAAQ,MAAI,CAAC,IAAI;;;AAGrB,cAAO,SAAQ;MACjB;;gCAlLY,cAAmB;MAAd,qBAAc,GAAd,cAAc;AAAI,2CAAM;IAAM;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ECFjD;;;;;;;YCCe,MAAmB;AAC9B,kDAAS,CAAC,MAAM,OAAO,eAAC;IAC1B;kBAGmB,MAAmB,EAAE,KAAS,EAAE,MAAa;AAC9D,+DAAe,CAAC,MAAM,EAAE,KAAK,EAAE,MAAM,OAAO,eAAC;IAC/C;;YAIqB,iBAAW;IAAE;;UAST,kDAAS;UAAc,kDAAS;AACvD,UAAM,aAAS,qBAAY;AAC3B,oBAAI,MAAM,GAAE;AACV,0BAAa,CAAC,MAAM,EAAE,GAAG,MAAM;aAC1B;AACL,oBAAO,CAAC,MAAM;;AAEhB,YAAO,OAAM,SAAS;IACxB;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;YClBgC;IAAQ;;YAGD;IAAQ;;iBAIV,uDAAoB,CAAC;IAAK;;iBAIxB,2DAAsB,CAAC;IAAK;;iBAI9B,uDAAoB,CAAC;IAAK;;iBAI1B,uDAAoB,CAAC;IAAK;;YAOjC,YAAM,IAAI,OAAO,OAAO,WAAM,SAAS;;;YAGlD,YAAM,IAAI,OAAO,IAAiB,aAAb,WAAM,MAAM,IAAG;IAAC;;uBAG5B,aAAQ,UAAQ,IAAG,OAAO,aAAQ,QAAM;;;uBAGzC,aAAQ,UAAQ,IAAG,OAAO,aAAQ,OAAK;;;uCAG7C,gBAAW,QACpB,CAAC,QAAC,IAAI,IAAqB,iCAAhB,IAAI,wCAAe,IAAI,0BACpC,cAAC,QAAC,IAAI,IAAK,IAAI,KAAK,6BACnB;IAAE;;AAIT,UAAI,WAAM,IAAI,MAAM;AAClB,YAAM,WAAW,WAAM,SAAS;AAChC,iBAAS,IAAI,GAAG,AAAE,CAAD,GAAmB,aAAhB,QAAQ,SAAO,IAAG,GAAG,CAAC,IAAI;AAC5C,0BAAI,QAAQ,QAAC,CAAC,GAAK,OAAM;AACvB,kBAAO,SAAQ,QAAC,AAAE,CAAD,GAAG;;;;AAI1B,YAAO;IACT;;AAIE,UAAI,WAAM,IAAI,MAAM;AAClB,YAAM,WAAW,WAAM,SAAS;AAChC,iBAAS,IAAoB,aAAhB,QAAQ,SAAO,IAAG,GAAG,AAAE,CAAD,GAAG,GAAG,CAAC,IAAI;AAC5C,0BAAI,QAAQ,QAAC,CAAC,GAAK,OAAM;AACvB,kBAAO,SAAQ,QAAC,AAAE,CAAD,GAAG;;;;AAI1B,YAAO;IACT;;YAGkB,+CAAc,gBAAgB,MAAM,gCAAC;IAAK;;YAIxC,6CAAa,gBAAgB,MAAM,YAAC;IAAK;;;;EAC/D;;;;;;;;;;;;;;;;;;;;;;;;IC5E6B;;;;;;iBAIO,IAAW;UAAU;YACnD,sBAAe,CAAC,aAAQ,EAAE,IAAI,EAAE,SAAS;IAAC;oBAIT,IAAW;UAAU;YACtD,sBAAe,CAAC,gBAAW,EAAE,IAAI,EAAE,SAAS;IAAC;sBAG7C,QAA0B,EAAE,IAAW,EAAE,SAAgB;AAC3D,UAAM,UAAU,+CAAiB,CAAC,IAAI,EAAE,SAAS;AACjD,2CAAO,QAAQ,YAAU,8CAAoB,CAAC,OAAO;IACvD;;oDAxBU,sBAAuC,EAAE,QAA0B;IACvE,eAAQ,OAAG,4BAAW,CAAC,sBAAsB;;AACjD,iBAAa,aAAa,CAAC;AAC3B,iBAAa,OAAO,CAAC,QAAQ;EAC/B;;;;;;;;;;;;;;;YCA4B;IAAI;;YAGb;IAAI;;YAGK,uCAAW,kBAAkB;;WAG1C,OAAkB;YAAK,QAAO,sBAAsB,CAAC;IAAK;;yEAbpD,QAAqC;6BAAnB,WAAW;AAC5C,oFAAM,oDAAiB,EAAE,QAAQ;EAAC;;;;;;;;;;;MAgBnB,oDAAiB;YAAG,wDACzC,sCAAW,MAAM,EACjB,sCAAW,QAAQ,EACnB,sCAAW,cAAc,EACzB,sCAAW,QAAQ,EACnB,sCAAW,WAAW,EACtB,sCAAW,KAAK;;;;ICfG;;;;;;mBAKC,IAAiB;AACnC,gBAAK,eAAC,IAAI,KAAK;AACf,iBAAM,MAAM,CAAC,+BAAQ,OAAO;AAC5B,iBAAM,MAAM,CACR,2DAAiC,CAAC,IAAI,MAAM,EAAE,IAAI,cAAc;IACtE;eAGgB,IAAa;AAC3B,iBAAM,MAAM,CAAC,+BAAQ,UAAU;AAC/B,iBAAM,MAAM,CAAC,IAAI,KAAK;AACtB,iBAAM,MAAM,CAAC,+BAAQ,WAAW;IAClC;iBAGkB,IAAe;AAC/B,iBAAM,MAAM,CAAC,+BAAQ,YAAY;AACjC,iBAAM,MAAM,CAAC,IAAI,KAAK;AACtB,iBAAM,MAAM,CAAC,+BAAQ,aAAa;IACpC;iBAGkB,IAAe;AAC/B,iBAAM,MAAM,CAAC,+BAAQ,YAAY;AACjC,iBAAM,MAAM,CAAC,+BAAQ,WAAW;AAChC,iBAAM,MAAM,CAAC,IAAI,KAAK;AACtB,iBAAM,MAAM,CAAC,+BAAQ,aAAa;IACpC;kBAGmB,IAAgB;AACjC,wBAAa,CAAC,IAAI;IACpB;0BAG2B,IAAwB;AACjD,iBAAM,MAAM,CAAC;IACf;iBAGkB,IAAe;AAC/B,iBAAM,MAAM,CAAC,+BAAQ,YAAY;AACjC,gBAAK,eAAC,IAAI,KAAK;AACf,0BAAe,CAAC,IAAI;AACpB,oBAAI,IAAI,SAAS,QAAQ,eAAI,IAAI,cAAc,GAAE;AAC/C,mBAAM,MAAM,CAAC,+BAAQ,gBAAgB;aAChC;AACL,mBAAM,MAAM,CAAC,+BAAQ,aAAa;AAClC,0BAAa,CAAC,IAAI;AAClB,mBAAM,MAAM,CAAC,+BAAQ,eAAe;AACpC,kBAAK,eAAC,IAAI,KAAK;AACf,mBAAM,MAAM,CAAC,+BAAQ,aAAa;;IAEtC;cAGe,IAAY;AACzB,iBAAM,MAAM,CAAC,IAAI,UAAU;IAC7B;oBAGqB,IAAkB;AACrC,iBAAM,MAAM,CAAC,+BAAQ,eAAe;AACpC,iBAAM,MAAM,CAAC,IAAI,OAAO;AACxB,UAAI,IAAI,KAAK,aAAW,EAAE;AACxB,mBAAM,MAAM,CAAC,+BAAQ,WAAW;AAChC,mBAAM,MAAM,CAAC,IAAI,KAAK;;AAExB,iBAAM,MAAM,CAAC,+BAAQ,gBAAgB;IACvC;cAGe,IAAY;AACzB,iBAAM,MAAM,CAAC,uCAAa,CAAC,IAAI,KAAK;IACtC;oBAEqB,IAAY;AAC/B,eAAS,YAAa,KAAI,WAAW,EAAE;AACrC,mBAAM,MAAM,CAAC,+BAAQ,WAAW;AAChC,kBAAK,eAAC,SAAS;;IAEnB;kBAEmB,IAAY;AAC7B,UAAI,SAAS,UAAQ,YAAC,wBAAK;IAC7B;;uDAxFU,MAAW;IAAN,aAAM,GAAN,MAAM;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;YCXH,YAAK;;aAGf,IAAW;AAClB,UAAI,IAAI,IAAI,MAAM;AAChB,uBAAM,0BAAqB,CAAC;;AAE9B,iBAAK,GAAG,IAAI;IACd;;gDAGQ,IAAW;IAfZ,WAAK;;AAgBV,aAAS,GAAG,IAAI;EAClB;;;;;;;;;;;;YCX4B,uCAAW,KAAK;;WAG7B,OAAkB;YAAK,QAAO,UAAU,CAAC;IAAK;;gDANrD,IAAW;AAAI,2DAAM,IAAI;EAAC;;;;;;;;;;;ICArB;;;;;;;YAMe,uCAAW,WAAW;;WAGnC,OAAkB;YAAK,QAAO,gBAAgB,CAAC;IAAK;;4DANrD,MAAW,EAAE,IAAW;IAAnB,aAAM,GAAN,MAAM;AAAiB,uEAAM,IAAI;EAAC;;;;;;;;;;;;;;;;ICEjD;;;;;;IACS;;;;;;eAKG,IAAa;AAC3B,kBAAO;AACP,sBAAgB,CAAC,IAAI;IACvB;iBAGkB,IAAe;AAC/B,kBAAO;AACP,wBAAkB,CAAC,IAAI;IACzB;iBAGkB,IAAe;AAC/B,kBAAO;AACP,wBAAkB,CAAC,IAAI;IACzB;iBAGkB,IAAe;AAC/B,kBAAO;AACP,iBAAM,MAAM,CAAC,+BAAQ,YAAY;AACjC,gBAAK,eAAC,IAAI,KAAK;AACf,0BAAe,CAAC,IAAI;AACpB,oBAAI,IAAI,SAAS,QAAQ,eAAI,IAAI,cAAc,GAAE;AAC/C,mBAAM,MAAM,CAAC,+BAAQ,gBAAgB;aAChC;AACL,mBAAM,MAAM,CAAC,+BAAQ,aAAa;AAClC,kBAAK,gBAAL,UAAK,IA/CX;AAgDM,0BAAa,CAAC,IAAI;AAClB,kBAAK,gBAAL,UAAK,IAjDX;AAkDM,uBAAK,IAAI,SAAS,MAAM,CAAC,QAAC,IAAI,qCAAK,IAAI,uBAAc;AACnD,sBAAO;;AAET,mBAAM,MAAM,CAAC,+BAAQ,eAAe;AACpC,kBAAK,eAAC,IAAI,KAAK;AACf,mBAAM,MAAM,CAAC,+BAAQ,aAAa;;IAEtC;oBAGqB,IAAkB;AACrC,kBAAO;AACP,2BAAqB,CAAC,IAAI;IAC5B;cAGe,IAAY;AAGzB,UAAI,IAAI,KAAK,OAAK,eAAa,EAAE;AAC/B,uBAAe,CAAC,IAAI;;IAExB;;AAGE,oBAAI,WAAM,WAAW,GAAE;AACrB,mBAAM,QAAQ;;AAEhB,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,UAAK,GAAE,CAAC,IAAI;AAC9B,mBAAM,MAAM,CAAC,WAAM;;IAEvB;;oEAhEgB,MAAM,EAAE,KAAU,EAAE,MAAW;IAAlB,YAAK,GAAL,KAAK;IAAO,aAAM,GAAN,MAAM;AAAI,wGAAM,MAAM;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;eCgBhD,KAAY,EAAG,MAAa;6BAAN;AAAS,YAC3C,OAAM,IAAI,QAAQ,MAAM,UAAQ,OAC1B,8CAAa,CAAC,KAAK,QACnB,8CAAa,CAAC,MAAM,EAAE,KAAK,EAAE,SAAE,MAAM,IAAE,+BAAQ,UAAU,YAAE,KAAK;IAAE;sBAGjD,SAAgB;AAAE,AAC3C,UAAM,QAAQ,SAAS,UAAQ,CAAC,+BAAQ,UAAU;AAClD,UAAI,AAAM,KAAD,GAAG,GAAG;AACb,YAAM,SAAS,SAAS,YAAU,CAAC,GAAG,KAAK;AAC3C,YAAM,QAAQ,SAAS,YAAU,CAAC,AAAM,KAAD,GAAG;AAC1C,mBAAO,8CAAa,CAAC,MAAM,EAAE,KAAK,EAAE,SAAS;aACxC;AACL,mBAAO,8CAAa,CAAC,SAAS;;IAElC;WAKe,OAAkB;YAAK,QAAO,UAAU,CAAC;IAAK;YAG5C,KAAY;UAAZ,KAAY;YAEJ,kCADrB,KAAK,KACL,KAAK,MAAM,IAAI,UAAK,IACpB,KAAK,aAAa,IAAI,iBAAY;;;2BAGlB,cAAS;IAAS;;;;EAZpB;;;;;;;;;;;;YC3CG;IAAI;IAGZ;;;;;;;YAGW,WAAK;;;AAI3B,eAAS,OAAO,WAAM,EAAE,IAAI,IAAI,MAAM,IAAI,GAAG,IAAI,OAAO,EAAE;AACxD,iBAAS,YAAa,KAAI,WAAW,EAAE;AACrC,cAAI,SAAS,KAAK,OAAO,IAAI,QAAQ,SAAS,KAAK,MAAM,KAAI,OAAK,EAAE;AAClE,kBAAO,UAAS,MAAM;;;;AAI5B,YAAO;IACT;;6DAEc,KAAU;IAAL,YAAK,GAAL,KAAK;AAAI;EAAgB;;;;;;;;;;;;;;ICpB/B;;;;;;IAGA;;;;;;IAGA;;;;;;;AAIX,eAAS,OAAO,WAAM,EAAE,IAAI,IAAI,MAAM,IAAI,GAAG,IAAI,OAAO,EAAE;AACxD,iBAAS,YAAa,KAAI,WAAW,EAAE;AACrC,cAAI,SAAS,KAAK,OAAO,KAAI,OAAK,IAAI,SAAS,KAAK,MAAM,IAAI,WAAM,EAAE;AACpE,kBAAO,UAAS,MAAM;;;;AAI5B,YAAO;IACT;;6DAEc,MAAW,EAAE,KAAU,EAAE,SAAc;IAAlC,aAAM,GAAN,MAAM;IAAO,aAAK,GAAL,KAAK;IAAO,gBAAS,GAAT,SAAS;AAAI;EAAgB;;;;;;;;;;;;;;;;ICnB5D;;;;;;;YAKQ,aAAO,WAAP,YAAO,GAAI,cAAc;IAAE;;2DAHlC,OAAY;4BAAP;kBAAO,GAAP,OAAO;EAAE;;;;;;;;;;IAQlB;;;;;;IACA;;;;;;;YAKW,UAAG,cAAc,wBAAQ,SAAI,mBAAE,WAAM;IAAC;;iEAHxC,OAAc,EAAE,IAAS,EAAE,MAAW;IAAjB,WAAI,GAAJ,IAAI;IAAO,aAAM,GAAN,MAAM;AAAI,4EAAM,OAAO;EAAC;;;;;;;;;;;wBASlD,IAAY;AACnC,UAAI,IAAI,IAAI,MAAM;AAChB,uBAAM,oDAAoB,CAAC;;IAE/B;0BAG2B,IAAY,EAAE,KAA2B;AAClE,qBAAK,KAAK,WAAS,CAAC,IAAI,SAAS,IAAG;AAClC,uBAAM,oDAAoB,CAAC,qCAAyB,KAAK;;IAE7D;;mEAEqB,OAAc;AAAI,8EAAM,OAAO;EAAC;;;yBAM3B,KAAc;AACtC,oBAAI,KAAK,UAAU,GAAE;AACnB,uBAAM,kDAAkB,CACpB,kEAAsD,KAAK;;IAEnE;;iEAEmB,OAAc;AAAI,4EAAM,OAAO;EAAC;;;8DAKnC,OAAc;AAAI,yEAAM,OAAO;EAAC;;;MHjDrC,yBAAG;YAAG;;MACN,4BAAM;YAAG;;MACT,2BAAK;YAAG;;MACD,6BAAO;iBAAG,mCAAa,CAAC,KAAG,EAAE;;;;;EILjD;;6DCFiC,IAAW,EAAE,SAAgB;AAC5D,QAAI,IAAI,IAAI,MAAM;AAChB,qBAAM,sBAAa,CAAC;UACf,KAAI,IAAI,KAAI,KAAK;AACtB,UAAI,SAAS,IAAI,QAAQ,SAAS,KAAI,KAAK;AACzC,cAAO,SAAC,KAAK,IAAK;aACb;AACL,cAAO,SAAC,KAAK,IAAK,KAAK,KAAK,aAAa,IAAI,SAAS;;WAEnD;AACL,UAAI,SAAS,IAAI,MAAM;AACrB,cAAO,SAAC,KAAK,IAAK,KAAK,KAAK,UAAU,IAAI,IAAI;YACzC,KAAI,SAAS,KAAI,KAAK;AAC3B,cAAO,SAAC,KAAK,IAAK,KAAK,KAAK,MAAM,IAAI,IAAI;aACrC;AACL,cAAO,SAAC,KAAK,IACT,AAAyB,KAApB,KAAK,MAAM,IAAI,IAAI,IAAI,KAAK,KAAK,aAAa,IAAI,SAAS;;;EAG1E;;;;ICEgB;;;;;;IAIkB;;;;;;IAG3B;;;;;;iBAGe,IAAW;UAAU;AACvC,UAAM,YAAY,qBAAgB,CAAC,IAAI,cAAa,SAAS;AAC7D,YAAO,UAAS,IAAI,OAAO,SAAS,MAAM,GAAG;IAC/C;qBAG8B,IAAW;UAAU;YAAe,gBAAU,WAC7D,CAAC,+CAAiB,CAAC,IAAI,EAAE,SAAS,YAAW,cAAM;IAAK;;YAG3C,uCAAW,QAAQ;;WAGhC,OAAkB;YAAK,QAAO,aAAa,CAAC;IAAK;;sDApCrD,IAAS,EACf,UAA4C,EAC7C,QAAqC,EACrC,aAAyB;+BAFD,aAAa;6BACnB,WAAW;kCACxB,gBAAgB;IAHT,WAAI,GAAJ,IAAI;IAGX,oBAAa,GAAb,aAAa;IAChB,iBAAU,OAAG,iCAAW,CAAC,2CAAkB;AAC3C,iEAAM,0CAAiB,EAAE,QAAQ;AACrC,aAAS,aAAa,CAAC;AACvB,mBAAe,aAAa,CAAC;AAC7B,mBAAe,OAAO,CAAC,UAAU;EACnC;;;;;;;;;;;;;;;;;;;;;;;MA+BqB,0CAAiB;YAAG,wDACzC,sCAAW,MAAM,EACjB,sCAAW,QAAQ,EACnB,sCAAW,QAAQ,EACnB,sCAAW,WAAW,EACtB,sCAAW,KAAK;;MAIK,2CAAkB;YAAG,wDAC1C,sCAAW,UAAU;;;;;;wDC1CjB,aAAQ,WAAW,CAAC,QAAC,IAAI,2CAAK,IAAI,8BAAwB,cAAM;IAAK;;wDAYrE,aAAQ,WAAW,CAAC,QAAC,IAAI,2CAAK,IAAI,8BACtB,cAAM,eAAM,mBAAU,CAAC;IAAsB;;YAGjC;IAAI;;YAGb;IAAI;;YAGK,uCAAW,SAAS;;WAGjC,OAAkB;YAAK,QAAO,cAAc,CAAC;IAAK;;wDArCpD,QAAqC;6BAAnB,WAAW;AACpC,mEAAM,2CAAiB,EAAE,QAAQ;EAAC;;;;;;;;;;;;;MAwCnB,2CAAiB;YAAG,wDACzC,sCAAW,MAAM,EACjB,sCAAW,QAAQ,EACnB,sCAAW,cAAc,EACzB,sCAAW,QAAQ,EACnB,sCAAW,WAAW,EACtB,sCAAW,KAAK;;;;;YC/CY,uCAAW,cAAc;;WAGtC,OAAkB;YAAK,QAAO,aAAa,CAAC;IAAK;;sDANrD,IAAW;AAAI,iEAAM,IAAI;EAAC;;;;;;;;;;;;YCGT,uCAAW,QAAQ;;WAGhC,OAAkB;YAAK,QAAO,aAAa,CAAC;IAAK;;sDANrD,IAAW;AAAI,iEAAM,IAAI;EAAC;;;;;;;;;;;;YCGT,uCAAW,MAAM;;WAG9B,OAAkB;YAAK,QAAO,WAAW,CAAC;IAAK;;kDANrD,IAAW;AAAI,6DAAM,IAAI;EAAC;;;;;;;;;;;ICDrB;;;;;;;iBAKoB,uDAAoB,CAAC,UAAK;IAAC;;sEAHxC,KAAU;IAAL,YAAK,GAAL,KAAK;;EAAC;;;;;;;;;;;;;;IAQlB;;;;;;IACM;;;;;;IAOZ;;;;;;;AAIN,oBAAI,SAAI,UAAQ,GAAE;AAChB,oBAAO,GAAG;AACV,cAAO;aACF;AACL,oBAAO,GAAG,SAAI,aAAW;AACzB,YAAI,AAAU,YAAO,IAAE,UAAK,EAAG;AAC7B,sBAAO,GAAG;AACV,mBAAI,QAAM;AACV,gBAAO;;AAET,iBAAI,SAAO,CAAC,YAAO,SAAS,WAAS;AACrC,iBAAI,SAAO,CAAC,YAAO,WAAW,WAAS;AACvC,cAAO;;IAEX;;sEAvBqB,KAAU;IAFX,UAAI,GAAG;IAOnB,aAAO;IALW,aAAK,GAAL,KAAK;AAC7B,aAAI,MAAI,CAAC,UAAK,KAAK;EACrB;;;;;;;;;;;;;;;;ICdc;;;;;;;iBAKoB,uDAAoB,CAAC,UAAK;IAAC;;sEAHxC,KAAU;IAAL,aAAK,GAAL,KAAK;;EAAC;;;;;;;;;;;;;;IAQZ;;;;;;IAoBZ;;;;;;;AAIN,oBAAI,SAAI,UAAQ,GAAE;AAChB,oBAAO,GAAG;AACV,cAAO;aACF;AACL,oBAAO,GAAG,SAAI,aAAW;AACzB,iBAAI,SAAO,CAAC,YAAO,SAAS,WAAS;AACrC,iBAAI,SAAO,CAAC,YAAO,WAAW,WAAS;AACvC,cAAO;;IAEX;;sEA/BqB,KAAa;IAFd,WAAI,GAAG;IAoBnB,cAAO;AAjBb,QAAM,YAAY;AAClB,aAAS,SAAS,KAAK,OAAO,EAAE,QAAQ,KAAK,EACzC,MAAM,IAAI,MACV,MAAM,GAAG,MAAM,OAAO,EAAE,KAAK,GAAG,KAAK,OAAO,EAAE;AAChD,qDAAI,KAAK,GAAkB;AACzB,YAAM,kBAAkB,MAAM,WAAW,UAAQ,CAAC,KAAK;AACvD,iBAAS,SAAO,CAAC,MAAM,WAAW,UAAQ,CAAiB,aAAhB,eAAe,IAAG;AAC7D,iBAAS,SAAO,CAAC,MAAM,SAAS;aAC3B;AACL,YAAM,gBAAgB,MAAM,SAAS,UAAQ,CAAC,KAAK;AACnD,iBAAS,SAAO,CAAC,MAAM,SAAS,UAAQ,CAAe,aAAd,aAAa,IAAG;;;AAG7D,aAAI,SAAO,CAAC,SAAS,WAAS;EAChC;;;;;;;;;;;;;;IC5Bc;;;;;;;iBAKoB,2DAAsB,CAAC,UAAK;IAAC;;0EAHxC,KAAU;IAAL,aAAK,GAAL,KAAK;;EAAC;;;;;;;;;;;;;;IAQd;;;;;;SAMV,IAAY;AACpB,eAAI,SAAO,CAAC,IAAI,SAAS,WAAS;AAClC,eAAI,SAAO,CAAC,IAAI,WAAW,WAAS;IACtC;IAGQ;;;;;;;AAIN,oBAAI,SAAI,UAAQ,GAAE;AAChB,oBAAO,GAAG;AACV,cAAO;aACF;AACL,oBAAO,GAAG,SAAI,aAAW;AACzB,iBAAI,CAAC,YAAO;AACZ,cAAO;;IAEX;;0EAtBuB,KAAa;IAFhB,YAAI,GAAG;IAYnB,eAAO;AATb,aAAI,CAAC,KAAK;EACZ;;;;;;;;;;;;;;;ICdc;;;;;;;iBAKoB,uDAAoB,CAAC,UAAK;IAAC;;sEAHxC,KAAU;IAAL,aAAK,GAAL,KAAK;;EAAC;;;;;;;;;;;;;;IAWxB;;;;;;;AAIN,UAAI,YAAO,IAAI,MAAM;AACnB,oBAAO,GAAG,YAAO,OAAO;;AAE1B,YAAO,aAAO,IAAI;IACpB;;sEAXqB,OAAY;IAAP,eAAO,GAAP,OAAO;EAAC;;;;;;;;;;;;;ICNpB;;;;;;;YAKM,aAAM;;cAGhB,KAAY;AACpB,UAAI,KAAK,IAAI,MAAM;AACjB,uBAAM,0BAAqB,CAAC;;AAE9B,kBAAM,GAAG,KAAK;IAChB;IAGuB;;;;;;;YAUK,uCAAW,UAAU;;WAGlC,OAAkB;YAAK,QAAO,eAAe,CAAC;IAAK;;0DAVrD,IAAS,EAAE,KAAY,EAC/B,aAAkD;kCAA7C,gBAAgB,gDAAgB,aAAa;IAlBhD,YAAM;IAiBK,YAAI,GAAJ,IAAI;IACZ,oBAAa,GAAb,aAAa;;AACrB,aAAI,aAAa,CAAC;AAClB,cAAU,GAAG,KAAK;EACpB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICTW;;;;;;SAiBD,IAAW;AACnB,UAAM,WAAW,YAAM,OAAK,SAAS;AACrC,oBAAI,QAAQ,aAAW,sCAAI,QAAQ,OAAK,GAAa;AAEnD,YAAM,WAAW,QAAQ,aAAW;AACpC,gBAAQ,MAAI,KAAC,iCAAO,CAAC,SAAG,QAAQ,KAAK,2BAAG,IAAI;aACvC;AACL,gBAAQ,MAAI,KAAC,iCAAO,eAAC,IAAI;;IAE7B;UASW,IAAW;AACpB,kBAAM,OAAK,SAAS,MAAI,KAAC,mCAAQ,eAAC,IAAI;IACxC;eASgB,MAAa,EAAE,IAAW;AACxC,kBAAM,OAAK,SAAS,MAAI,KAAC,6CAAa,CAAC,MAAM,gBAAE,IAAI;IACrD;YASa,IAAW;AACtB,kBAAM,OAAK,SAAS,MAAI,KAAC,uCAAU,eAAC,IAAI;IAC1C;YA+Ba,IAAW;UACZ;UACY,8DAAa;UACb,8DAAa;UAC5B,uEAAgB;UACd;AACT,UAAM,cAAU,uCAAiB;AACjC,kBAAM,MAAI,CAAC,OAAO;AAClB,gBAAU,UAAQ,WAAC;AACnB,gBAAU,UAAQ,WAAC;AACnB,UAAI,IAAI,IAAI,MAAM;AAChB,qBAAO,CAAC,IAAI;;AAEd,aAAO,KAAK,GAAG,gBAAU,CAAC,IAAI,EAAE,SAAS;AACzC,aAAO,cAAc,GAAG,aAAa;AACrC,oBAAI,uBAAkB,GAAE;AAGtB,eAAO,WAAW,UAAQ,CAAC,SAAC,GAAG,EAAE,IAAI;AACnC,yBAAK,IAAI,KAAK,GAAE;AACd,gBAAM,OAAO,IAAI,KAAK;AACtB,gBAAM,YAAY,OAAO,WAAW,aACrB,CAAC,QAAC,SAAS,gBAAK,SAAS,KAAK,EAAI,IAAI;AACrD,mBAAO,WAAW,SAAO,CAAC,SAAS;;;;AAIzC,kBAAM,aAAW;AACjB,kBAAM,OAAK,SAAS,MAAI,CAAC,OAAO,MAAM;IACxC;cAce,IAAW,EAAE,KAAY;UAC5B;UAA4B;AACtC,UAAM,gBAAY,2CAAY,CAAC,gBAAU,CAAC,IAAI,EAAE,SAAS,iBACrD,KAAK,GAAa,aAAa,WAAb,aAAa,GAAI,gDAAgB,aAAa;AACpE,kBAAM,OAAK,WAAW,MAAI,CAAC,SAAS;IACtC;cAKe,GAAU,EAAG,MAAa;6BAAN;AACjC,UAAI,MAAM,KAAI,OAAK,IAAI,MAAM,KAAI,KAAG,EAAE;AACpC,uBAAM,sBAAa,CAAC,oBAAO,MAAM;;AAEnC,oBAAI,uBAAkB,eAClB,YAAM,MAAI,CAAC,QAAC,OAAO,IACqB,UAApC,OAAO,WAAW,cAAY,CAAC,GAAG,MAClC,OAAO,WAAW,QAAC,GAAG,QAAQ,IAAI,MAAM,6BAAG;AAEjD;;AAEF,oBAAI,YAAM,OAAK,WAAW,SAAO,MAAI,CAAC,QAAC,IAAI,IAAK,IAAI,OAAO,IAAI,MAAM,4BAAG;AACtE,uBAAM,sBAAa,CACf,oBAAO,MAAM;;AAEnB,UAAM,WAAO,mCAAa,CAAC,MAAM,EAAE;AACnC,kBAAM,OAAK,WAAW,MACd,KAAC,2CAAY,CAAC,IAAI,KAAK,EAAE,GAAG,EAAE,gDAAgB,aAAa;AACnE,kBAAM,OAAK,WAAW,QAAC,GAAG,EAAI,IAAI;IACpC;;YAGmB,aAAM,OAAK,MAAM;IAAE;iBAGnB,IAAW,EAAE,GAAU;AACxC,UAAI,GAAG,IAAI,QAAQ,GAAG,aAAW,EAAE;AACjC,YAAM,OAAO,aAAO,CAAC,GAAG;AACxB,YAAI,KAAK,GAAG;AACZ,cAAO,kCAAO,CAAC,IAAI,EAAE,IAAI,OAAO;aAC3B;AACL,cAAO,yCAAkB,CAAC,IAAI;;IAElC;cAGsB,GAAU;AAC9B,UAAM,UAAU,YAAM,YAAU,CAC5B,QAAC,OAAO,IAAK,OAAO,WAAW,cAAY,CAAC,GAAG,qCACvC,cAAM,eAAM,sBAAa,CAAC,mCAAuB,GAAG;AAChE,YAAO,QAAO,WAAW,QAAC,GAAG;IAC/B;cAGa,KAAY;AACvB,2BAAI,KAAK,GAAc;AACrB,wBAAK;YACA,sBAAI,KAAK,GAAc;AAC5B,aAAK,UAAQ,CAAC,wBAAO;YAChB,sCAAI,KAAK,GAAa;AAC3B,6CAAI,KAAK,GAAa;AAEpB,mBAAI,CAAC,KAAK,KAAK;cACV,gDAAI,KAAK,GAAkB;AAEhC,sBAAM,OAAK,WAAW,MAAI,CAAC,8CAAc,gBAAgB,MAAM,0CAAC,KAAK;cAChE,+DAAI,KAAK,GAAyB;AAEvC,eAAK,SAAS,QAAQ,CAAC,wBAAO;cACzB,4CAAI,KAAK,sCAAkB,KAAK,GAAa;AAElD,sBAAM,OAAK,SAAS,MAAI,CAAC,8CAAc,gBAAgB,MAAM,gCAAC,KAAK;eAC9D;AACL,yBAAM,sBAAa,CAAC,4CAAiC,KAAK,SAAS;;aAEhE;AACL,iBAAI,eAAC,KAAK;;IAEd;;;QA1MiB,sFAAqB;IANX,YAAM,GAAG,2BAAS,CAAC,KAAC,wCAAkB;IAMhD,yBAAkB,GAAlB,kBAAkB;EAAU;;;;;;;;;;;;;;;;;;;;;;;IA8MhC;;;;;;IACR;;;;;;;YAIe,YAAM,IAAI,QAAQ,WAAM,UAAQ,GAC9C,iCAAO,CAAC,OAAK,IACb,iCAAO,CAAC,WAAM,EAAE,OAAK;IAAC;;kDAJd,MAAW,EAAG,IAAiB;yBAAZ,OAAO;IAArB,cAAM,GAAN,MAAM;IAAQ,WAAI,GAAJ,IAAI;EAAU;;;;;;;;;;;;;;;EAYjD;;;IAImC;;;;;;;AAI/B,qBAAM,sBAAa,CAAC;IACtB;IAGoB;;;;;;;iBAGD,yCAAW,CAAC,aAAQ;IAAC;;;IAXP,gBAAU,GAAG,gDAAC,sCAAM,EAAE,6BAAO;IAQ1C,cAAQ,GAAG;EAIjC;;;;;;;;;;;;;;;;;;IAImC;;;;;;IAGR;;;;;;IAGL;;;;;;IAEf;;;;;;IAEG;;;;;;;iBAGW,uCAAU,CAAC,SAAI,EAAE,eAAU,EAAE,aAAQ,EAAE,kBAAa;IAAC;;;IAbvC,iBAAU,GAAG;IAGrB,gBAAU,GAAG;IAGlB,gBAAQ,GAAG;IAE1B,mBAAa,GAAG;IAEb,UAAI;EAId;;;;;;;;;;;;;;;;;;;;;YChRoB,SAAG,CAAC,2BAAQ,KAAK;IAAE;;YAEf,SAAG,CAAC,4BAAS,KAC3B,CAAC,QAAG,CAAC,gCAAa,MAClB,CAAC,gCAAI,CAAC,+BAAQ,OAAO,MACrB,CAAC,QAAG,CAAC,gCAAa,MAClB,CAAC,QAAG,CAAC,iCAAc;IAAE;;YAEzB,SAAG,CAAC,uCAAoB,IAAI,CAAC,QAAG,CAAC,uCAAoB;IAAE;;YAC1B,iCAAI,CAAC,+BAAQ,YAAY,KAClD,KAAC,oDAAsB,CAAC,+BAAQ,YAAY,EAAE,OAC9C,CAAC,gCAAI,CAAC,+BAAQ,YAAY;IAAE;;YACH,iCAAI,CAAC,+BAAQ,YAAY,KAClD,KAAC,oDAAsB,CAAC,+BAAQ,YAAY,EAAE,OAC9C,CAAC,gCAAI,CAAC,+BAAQ,YAAY;IAAE;;YACb,SAAG,CAAC,wBAAK,KAAK,CAAC,QAAG,CAAC,4BAAS,OAAO,eAAC,OAAO;IAAE;;YAChD,qCAAM,CAAC,+BAAQ,YAAY,KACvC,CAAC,8BAAG,WACK,CAAC,oCAAM,CAAC,+BAAQ,aAAa,UAC9B,CAAC,gCACT,CAAC,oCAAM,CAAC,+BAAQ,aAAa;IAAE;;YACrB,qCAAM,CAAC,+BAAQ,UAAU,KACnC,CAAC,8BAAG,WACK,CAAC,oCAAM,CAAC,+BAAQ,WAAW,UAC5B,CAAC,8BACT,CAAC,oCAAM,CAAC,+BAAQ,WAAW;IAAE;;YACjB,SAAG,CAAC,gCAAa,IAC9B,CAAC,QAAG,CAAC,0BAAO,KACZ,CAAC,QAAG,CAAC,6BAAU,KACf,CAAC,QAAG,CAAC,0BAAO,KACZ,CAAC,QAAG,CAAC,wBAAK,OACR;IAAE;;YACS,qCAAM,CAAC,+BAAQ,YAAY,KACvC,CAAC,QAAG,CAAC,wBAAK,MACV,CAAC,QAAG,CAAC,4BAAS,IACX,CAAC,QAAG,CAAC,iCAAc,KACnB,CAAC,8BAAG,WACM,CAAC,gCAAI,CAAC,+BAAQ,iBAAiB,MACpC,CAAC,gCAAI,CAAC,+BAAQ,iBAAiB,MAC/B,CAAC,8BAAG,WAAW,CAAC,gCAAI,CAAC,+BAAQ,kBAAkB,OAC/C,CAAC,gCAAI,CAAC,+BAAQ,kBAAkB,eAC5B,eAAC,QAAG,CAAC,wBAAK,UACd,CAAC,gCACT,CAAC,QAAG,CAAC,gCAAa,MAClB,CAAC,gCAAI,CAAC,+BAAQ,aAAa;IAAE;;YAChB,SAAG,CAAC,uBAAI,KACrB,CAAC,QAAG,CAAC,0BAAO,UAAU,OACtB,CAAC,QAAG,CAAC,uBAAI,MACT,CAAC,QAAG,CAAC,0BAAO,MACZ,CAAC,QAAG,CAAC,uBAAI;IAAE;;YACC,iCAAI,CAAC,+BAAQ,YAAY,KACrC,CAAC,QAAG,CAAC,4BAAS,MACd,CAAC,QAAG,CAAC,6BAAU,MACf,CAAC,QAAG,CAAC,gCAAa,MAClB,CAAC,oCAAM,CAAC,+BAAQ,gBAAgB,IAAI,CAAC,gCAAI,CAAC,+BAAQ,aAAa,KAC3D,CAAC,QAAG,CAAC,0BAAO,MACZ,CAAC,oCAAM,CAAC,+BAAQ,eAAe,OAAO,OACtC,CAAC,QAAG,CAAC,4BAAS,MACd,CAAC,QAAG,CAAC,gCAAa,MAClB,CAAC,gCAAI,CAAC,+BAAQ,aAAa;IAAI;;YACpB,qCAAM,CAAC,+BAAQ,eAAe,KAC7C,CAAC,QAAG,CAAC,4BAAS,MACd,CAAC,QAAG,CAAC,wBAAK,KACN,CAAC,8BAAG,WACK,CAAC,oCAAM,CAAC,+BAAQ,gBAAgB,UACjC,CAAC,gDACR,eAAC,WACG,CAAC,QACV,CAAC,oCAAM,CAAC,+BAAQ,gBAAgB;IAAE;;YACpB,SAAG,CAAC,4BAAS;IAAC;;iBAEV,oDAAsB,CAAC,+BAAQ,YAAY,EAAE;IAAE;;YACxD,SAAG,CAAC,4BAAS,IAAI,CAAC,QAAG,CAAC,0BAAO,KAAK,CAAC,QAAG,CAAC,6BAAU,OAAO;IAAE;;YACzD,6CAAU,OAAO;IAAE;;YACf,SAAG,CAAC,wBAAK,SAAS,CAAC;IAAsB;;YACrC,6CAAU,OAAO;IAAE;;YAGzC,SAAG,CAAC,gCAAa,KAAK,CAAC,QAAG,CAAC,2BAAQ,MAAM,WAAW,CAAC;IAAgB;;YAC/C,uCAAO,CAAC,0CAAe;IAAC;;YAC7B,uCAAO,CAAC,sDAAU;IAAC;;;;EAC1C;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAzFsB,4DAAe;YAC/B,uBACA,qBACA;;MACgB,uDAAU;YAC1B,kBAAuC,0CAAe;;;;;;;;;cCWpC,gBACR,MACN,eAAC,QAAC,IAAI,IAAK,oBAAe,0BAAC,IAAI,EAAC,gDAAI,IAAI,EAAC,IAAG,qFAAI,IAAI,EAAC,IAAG;MAAI;;cAGnC,2BACR,MACjB,eAAC,QAAC,IAAI,IAAK,aAAC,IAAI,EAAC,IAAI,gDAAgB,aAAa;MAAE;;cAG3B,2BACR,MACjB,eAAC,QAAC,IAAI,IAAK,aAAC,IAAI,EAAC,IAAI,gDAAgB,aAAa;MAAE;;cAGxC,cAAa,MAAM,eAAC,QAAC,IAAI,IAAK,kBAAa,gCAAC,IAAI,EAAC;MAAI;;cAGvD,YAAW,MAAM,eAAC,QAAC,IAAI,IAAK,gBAAW,gCAAC,IAAI,EAAC;MAAI;;cAG/C,cAAa,MAAM,eAAC,QAAC,IAAI,IAAK,kBAAa,gCAAC,IAAI,EAAC;MAAI;;cAGpD,eAAc,MAAM,eAAC,QAAC,IAAI;AACzC,cAAM,QAAQ;AACd,eAAK,SAAO,kCAAC,IAAI,EAAC;AAClB,0BAAI,IAAI,EAAC,MAAM,MAAM;AACnB,iBAAK,MAAI,aAAC,IAAI,EAAC;;AAEjB,eAAK,SAAO,kCAAC,IAAI,EAAC;AAClB,eAAK,MAAI,aAAC,IAAI,EAAC;AACf,eAAK,SAAO,kCAAC,IAAI,EAAC;AAClB,gBAAO,oBAAc,CAAC,SAAI,SAAS,sBAAiB,KAAK;;MACzD;;cAGc,cAAa,MAAM,eAAC,QAAC,IAAI;AACvC,cAAY,gCAAO,IAAI,EAAC;AACxB,cAAM,aAAa,SAAI,SAAS,mDAAiB,IAAI,EAAC;AACtD,sCAAI,IAAI,EAAC,IAAM,+BAAQ,gBAAgB,GAAE;AACvC,kBAAO,mBAAa,CAAC,IAAI,EAAE,UAAU,EAAE,yBAAI;iBACtC;AACL,wCAAI,IAAI,EAAC,4BAAM,IAAI,EAAC,IAAG,KAAI;AACzB,kBAAM,WAAW,SAAI,SAAS,+DAAiB,IAAI,EAAC,IAAG;AACvD,oBAAO,mBAAa,CAChB,IAAI,EAAE,UAAU,EAAE,QAAQ,EAAE,QAAQ,aAAW;mBAC9C;AACL,kBAAY,8DAAQ,IAAI,EAAC,IAAG;AAC5B,6BAAM,kDAAkB,CACpB,qCAAc,IAAI,EAAC,2DAAoB,IAAI,EAAC,IAAG,WAC/C,KAAK,KAAK,EACV,KAAK,OAAO;;;;MAGpB;;cAIF,iBAAgB,MAAM,eAAC,QAAC,IAAI,IAAK,qBAAgB,gCAAC,IAAI,EAAC,oCAAI,IAAI,EAAC;MAAI;;uCAGlD,eAAe,OAAO,kBAAc,eAAC,kCAAe;MAAC;;uCAIvE,mBAAmB,OAAO,kBAAc,eAAC,6BAAU;MAAC;;uCAGlC,eAAe,OAAO,kBAAc,eAAC,6BAAU;MAAC;;;;IACxE;;;;;;;;;;;;;;;;;;;;;;;oBC7EU,IAAY,EAAE,IAAW,EAAE,IAAqB;2CAAxC;iBACZ,2CAAY,CAAC,IAAI,EAAE,IAAI,EAAE,IAAI;IAAC;kBAGT,IAAW;iBAAK,uCAAU,CAAC,IAAI;IAAC;gBAGpC,IAAW;iBAAK,mCAAQ,CAAC,IAAI;IAAC;kBAG1B,IAAW;iBAAK,uCAAU,CAAC,IAAI;IAAC;mBAG9B,QAA0B;iCAAR;iBACzC,yCAAW,CAAC,QAAQ;IAAC;kBAGA,IAAY,EAAE,UAA4B,EAC3D,QAA0B,EAAG,aAAyB;2CAD7B;iCAAwB;iCAC/B;oCAAgB,gBAAgB;iBACtD,uCAAU,CACN,IAAI,EAAE,yBAAuB,CAAC,UAAU,GAAG,QAAQ,EAAE,aAAa;IAAC;qBAG5C,MAAa,EAAE,IAAW;iBACrD,6CAAa,CAAC,MAAM,EAAE,IAAI;IAAC;oBAGP,IAAW;YAAK,yCAAkB,CAAC,IAAI;IAAC;eAG7C,IAAW;iBAAK,iCAAO,CAAC,IAAI;IAAC;;;;EAClD","file":"builder.ddc.js"}');
  // Exports:
  return {
    src__xml__utils__node_type: src__xml__utils__node_type,
    src__xml__utils__token: src__xml__utils__token,
    src__xml__utils__attribute_type: src__xml__utils__attribute_type,
    src__xml__utils__entities: src__xml__utils__entities,
    src__xml__visitors__transformer: src__xml__visitors__transformer,
    src__xml__visitors__normalizer: src__xml__visitors__normalizer,
    src__xml__utils__node_list: src__xml__utils__node_list,
    src__xml__visitors__visitable: src__xml__visitors__visitable,
    src__xml__nodes__document_fragment: src__xml__nodes__document_fragment,
    src__xml__visitors__writer: src__xml__visitors__writer,
    src__xml__nodes__text: src__xml__nodes__text,
    src__xml__nodes__processing: src__xml__nodes__processing,
    src__xml__visitors__pretty_writer: src__xml__visitors__pretty_writer,
    src__xml__utils__writable: src__xml__utils__writable,
    src__xml__utils__simple_name: src__xml__utils__simple_name,
    src__xml__utils__prefix_name: src__xml__utils__prefix_name,
    src__xml__utils__exceptions: src__xml__utils__exceptions,
    src__xml__utils__owned: src__xml__utils__owned,
    src__xml__utils__name: src__xml__utils__name,
    src__xml__utils__named: src__xml__utils__named,
    src__xml__utils__name_matcher: src__xml__utils__name_matcher,
    src__xml__nodes__parent: src__xml__nodes__parent,
    src__xml__nodes__element: src__xml__nodes__element,
    src__xml__nodes__document: src__xml__nodes__document,
    src__xml__nodes__doctype: src__xml__nodes__doctype,
    src__xml__nodes__comment: src__xml__nodes__comment,
    src__xml__visitors__visitor: src__xml__visitors__visitor,
    src__xml__nodes__data: src__xml__nodes__data,
    src__xml__nodes__cdata: src__xml__nodes__cdata,
    src__xml__iterators__preceding: src__xml__iterators__preceding,
    src__xml__iterators__following: src__xml__iterators__following,
    src__xml__iterators__descendants: src__xml__iterators__descendants,
    src__xml__iterators__ancestors: src__xml__iterators__ancestors,
    src__xml__nodes__node: src__xml__nodes__node,
    src__xml__nodes__attribute: src__xml__nodes__attribute,
    src__xml__builder: src__xml__builder,
    src__xml__production: src__xml__production,
    src__xml__grammar: src__xml__grammar,
    src__xml__parser: src__xml__parser
  };
});

//# sourceMappingURL=builder.ddc.js.map
