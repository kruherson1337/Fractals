define(['dart_sdk', 'packages/xml/src/xml/builder', 'packages/petitparser/src/core/actions/action'], function(dart_sdk, builder, action) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__xml__parser = builder.src__xml__parser;
  const src__xml__utils__exceptions = builder.src__xml__utils__exceptions;
  const src__xml__nodes__document = builder.src__xml__nodes__document;
  const src__core__token = action.src__core__token;
  const _root = Object.create(null);
  const xml = Object.create(_root);
  const $_get = dartx._get;
  dart.defineLazy(xml, {
    /*xml._parser*/get _parser() {
      return new src__xml__parser.XmlParserDefinition.new().build();
    }
  });
  xml.parse = function(input) {
    let result = xml._parser.parse(input);
    if (dart.test(result.isFailure)) {
      let position = src__core__token.Token.lineAndColumnOf(input, result.position);
      dart.throw(new src__xml__utils__exceptions.XmlParserException.new(result.message, position[$_get](0), position[$_get](1)));
    }
    return src__xml__nodes__document.XmlDocument._check(result.value);
  };
  dart.trackLibraries("packages/xml/xml.ddc", {
    "package:xml/xml.dart": xml
  }, '{"version":3,"sourceRoot":"","sources":["xml.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAmDa,WAAO;iBAAG,wCAAmB,QAAQ;;;uBAIhC,KAAY;AAC5B,QAAM,SAAS,WAAO,MAAM,CAAC,KAAK;AAClC,kBAAI,MAAM,UAAU,GAAE;AACpB,UAAM,WAAW,sBAAK,gBAAgB,CAAC,KAAK,EAAE,MAAM,SAAS;AAC7D,qBAAM,kDAAkB,CAAC,MAAM,QAAQ,EAAE,QAAQ,QAAC,IAAI,QAAQ,QAAC;;AAEjE,wDAAO,MAAM,MAAM;EACrB","file":"xml.ddc.js"}');
  // Exports:
  return {
    xml: xml
  };
});

//# sourceMappingURL=xml.ddc.js.map
