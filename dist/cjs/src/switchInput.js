"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwitchInput = void 0;
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
/**
 * Switch with label and loading state.
 */
function SwitchInput(props) {
    const disabled = props.disabled ?? props.value == null;
    return (react_1.default.createElement(material_1.FormControl, { error: props.error != null },
        react_1.default.createElement(material_1.FormControlLabel, { disabled: disabled, control: react_1.default.createElement(material_1.Switch, { checked: props.value ?? false, disabled: disabled, onChange: (event, checked) => {
                    if (props.value == null)
                        return;
                    props.onChange(checked);
                    props.switchProps?.onChange?.(event, checked);
                }, ...props.switchProps }), label: props.label, labelPlacement: "start", ...props.labelProps }),
        (props.error != null || props.helperText != null) && (react_1.default.createElement(material_1.FormHelperText, null, props.error ?? props.helperText))));
}
exports.SwitchInput = SwitchInput;
//# sourceMappingURL=switchInput.js.map