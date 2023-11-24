"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./modal.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Composant Modal utilisé pour afficher un message.
 * @component
 * @param {boolean} isOpen - Indique si la modal est ouverte ou fermée.
 * @param {Function} onClose - Fonction appelé pour fermer la modale.
 * @param {Function} onExternalClick - Fonction appelée lors d'un clic en dehors de la modal.
 * @param {React.ReactNode} children - Contenu de la modal.
 * @returns {JSX.Element} - Élément React représentant la modal.
 */
const Modal = _ref => {
  let {
    isOpen,
    onClose,
    onExternalClick,
    children
  } = _ref;
  const paragraphRef = (0, _react.useRef)(null);
  const buttonRef = (0, _react.useRef)(null);

  /**
   * Gère la fermeture de la modal.
   * @function
   * @private
   */
  const handleClose = () => {
    if (typeof onClose !== 'function') {
      console.error('onClose must be a function');
      return;
    }
    onClose();
  };

  /**
   * Gère les clics en dehors de la modal.
   * @function
   * @private
   * @param {MouseEvent} e - Objet d'événement représentant le clic de la souris.
   */
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