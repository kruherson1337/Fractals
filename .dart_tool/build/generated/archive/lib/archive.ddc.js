define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const archive = Object.create(_root);
  dart.trackLibraries("packages/archive/archive.ddc", {
    "package:archive/archive.dart": archive
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"archive.ddc.js"}');
  // Exports:
  return {
    archive: archive
  };
});

//# sourceMappingURL=archive.ddc.js.map
