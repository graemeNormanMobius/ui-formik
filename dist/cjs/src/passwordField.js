"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordField = void 0;
const icons_material_1 = require("@mui/icons-material");
const material_1 = require("@mui/material");
const react_1 = __importStar(require("react"));
const textField_1 = require("./textField");
/**
 * TextField with "password reveal" button.
 */
function PasswordField(props) {
    const [visible, setVisibility] = (0, react_1.useState)(false);
    const inputProps = (0, react_1.useMemo)(() => ({
        endAdornment: (react_1.default.createElement(material_1.InputAdornment, { position: "end" },
            react_1.default.createElement(material_1.IconButton, { onClick: () => setVisibility(!visible), "aria-label": visible ? 'Hide password' : 'Show password', edge: "end", tabIndex: -1 }, visible ? react_1.default.createElement(icons_material_1.VisibilityOff, null) : react_1.default.createElement(icons_material_1.Visibility, null))))
    }), [visible]);
    return (react_1.default.createElement(TextField, { ...props, type: visible ? 'text' : 'password', valueFormatter: valueFormatter, InputProps: inputProps, onBlur: event => {
            setVisibility(false);
            props.onBlur?.(event);
        }, onKeyDown: event => {
            if (event.key === 'Escape') {
                setVisibility(false);
            }
            props.onKeyDown?.(event);
        } }));
}
exports.PasswordField = PasswordField;
const TextField = (0, material_1.styled)(textField_1.TextField) `
  input::-ms-reveal,
  input::-ms-clear {
    display: none;
  }
`;
function valueFormatter(value) {
    return value;
}
//# sourceMappingURL=passwordField.js.map