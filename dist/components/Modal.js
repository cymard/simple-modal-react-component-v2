"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./modal.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Modal = _ref => {
  let {
    isOpen,
    onClose,
    onExternalClick,
    children
  } = _ref;
  const paragraphRef = (0, _react.useRef)(null);
  const buttonRef = (0, _react.useRef)(null);
  const handleClose = () => {
    if (typeof onClose !== 'function') {
      console.error('onClose must be a function');
      return;
    }
    onClose();
  };
  const handleExternalClick = e => {
    if (e.target === paragraphRef.current || e.target === buttonRef.current) {
      return;
    }
    if (typeof onExternalClick !== 'function') {
      console.error('onExternalClick must be a function');
      return;
    }
    onExternalClick();
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isOpen && /*#__PURE__*/_react.default.createElement("div", {
    onClick: e => handleExternalClick(e),
    className: "modalContent"
  }, /*#__PURE__*/_react.default.createElement("p", {
    ref: paragraphRef
  }, children), /*#__PURE__*/_react.default.createElement("button", {
    ref: buttonRef,
    onClick: handleClose
  })));
};
var _default = exports.default = Modal;