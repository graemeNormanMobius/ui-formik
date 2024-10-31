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
exports.CheckboxInput = void 0;
const material_1 = require("@mui/material");
const react_1 = __importStar(require("react"));
/**
 * Material-UI Checkbox with label and error helper text.
 */
exports.CheckboxInput = (0, react_1.memo)((props) => {
    const { value, error, label, helperText, labelProps, ...muiProps } = props;
    const normalizedValue = value ?? false;
    return (react_1.default.createElement(material_1.FormControl, { error: error != null },
        react_1.default.createElement(material_1.FormControlLabel, { label: label, control: react_1.default.createElement(material_1.Checkbox, { ...muiProps, value: normalizedValue, checked: normalizedValue, onChange: (event, checked) => {
                    muiProps.onChange?.(event, checked);
                }, onBlur: event => {
                    muiProps.onBlur?.(event);
                } }), ...labelProps }),
        (error != null || helperText != null) && (react_1.default.createElement(material_1.FormHelperText, null, error ?? helperText))));
});
//# sourceMappingURL=checkboxInput.js.map