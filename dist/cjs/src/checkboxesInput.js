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
exports.CheckboxesInput = void 0;
const helpers_1 = require("@everlutionsk/helpers");
const material_1 = require("@mui/material");
const react_1 = __importStar(require("react"));
/**
 * Material-UI checkboxes with shared array value.
 */
exports.CheckboxesInput = (0, react_1.memo)(props => {
    return (react_1.default.createElement(material_1.FormControl, { component: "fieldset", className: props.className, error: props.error != null },
        props.label && react_1.default.createElement(material_1.FormLabel, { component: "legend" }, props.label),
        react_1.default.createElement(FormGroup, { row: props.row }, props.options.map(({ label, value, ...optionMuiProps }, i) => (react_1.default.createElement(material_1.FormControlLabel, { key: i, label: label, control: react_1.default.createElement(material_1.Checkbox, { ...optionMuiProps, name: props.name, onChange: (event, checked) => {
                    const updated = (0, helpers_1.toggleIn)(props.value ?? [], value);
                    props.onChange(updated);
                    optionMuiProps.onChange?.(event, checked);
                }, checked: (props.value ?? []).includes(value), onBlur: event => {
                    props.onBlur?.(event);
                    optionMuiProps.onBlur?.(event);
                }, disabled: props.disabled ?? optionMuiProps.disabled }) })))),
        (props.error != null || props.helperText != null) && (react_1.default.createElement(material_1.FormHelperText, null, props.error ?? props.helperText))));
});
const FormGroup = (0, material_1.styled)(material_1.FormGroup) `
  &.row {
    flex-direction: row;
  }
  &.column {
    flex-direction: column;
  }
`;
//# sourceMappingURL=checkboxesInput.js.map