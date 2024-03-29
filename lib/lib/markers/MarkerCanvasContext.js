"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkerCanvasProvider = exports.MarkerCanvasConsumer = void 0;
var _createReactContext2 = _interopRequireDefault(require("create-react-context"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable no-console */
var defaultContextState = {
  subscribeToMouseOver: function subscribeToMouseOver() {
    console.warn('"subscribeToMouseOver" default func is being used');
  }
};
/* eslint-enable */

var _createReactContext = (0, _createReactContext2["default"])(defaultContextState),
  Consumer = _createReactContext.Consumer,
  Provider = _createReactContext.Provider;
var MarkerCanvasProvider = exports.MarkerCanvasProvider = Provider;
var MarkerCanvasConsumer = exports.MarkerCanvasConsumer = Consumer;