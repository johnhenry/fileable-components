'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var FILEABLE_COMPONENT = 'FILEABLE COMPONENT';

var createComponent = (component) => {
    component[FILEABLE_COMPONENT] = true;
    return component;
};

exports.FILEABLE_COMPONENT = FILEABLE_COMPONENT;
exports.createComponent = createComponent;
