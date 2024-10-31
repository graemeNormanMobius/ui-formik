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
exports.customRadioValue = exports.RadioInput = void 0;
const helpers_1 = require("@everlutionsk/helpers");
const material_1 = require("@mui/material");
const react_1 = __importStar(require("react"));
/**
 * Material-UI Radio with better options support.
 */
exports.RadioInput = (0, react_1.memo)(props => {
    const isCustomSelected = (0, react_1.useMemo)(() => props.options.every(({ value }) => value !== props.value), [props.value, props.options]);
    (0, react_1.useEffect)(() => {
        const custom = props.options.filter(({ value }) => isCustomRadioValue(value));
        if (custom.length > 1)
            throw Error('RadioInput cannot have more than one custom value option!');
    }, [props.options]);
    const [customValue, setCustomValue] = (0, react_1.useState)(() => {
        if (isCustomSelected)
            return props.value;
        return '';
    });
    return (react_1.default.createElement(material_1.FormControl, { component: "fieldset", className: props.className, error: props.error != null },
        props.label && react_1.default.createElement(material_1.FormLabel, { component: "legend" }, props.label),
        react_1.default.createElement(material_1.RadioGroup, { row: props.row }, props.options.map(({ label, value, ...optionMuiProps }, i) => {
            const isCustom = isCustomRadioValue(value);
            const disabled = props.disabled ?? optionMuiProps.disabled;
            const checked = isCustom ? isCustomSelected : (0, helpers_1.equals)(props.value, value);
            const { __customRadioValue__, ...customValueProps } = isCustom ? value : {};
            return (react_1.default.createElement(material_1.FormControlLabel, { key: i, label: isCustom ? (react_1.default.createElement(material_1.TextField, { size: "small", value: customValue, disabled: disabled, label: label, ...customValueProps, onChange: event => {
                        const newValue = event.target.value;
                        setCustomValue(newValue);
                        props.onChange(newValue);
                        customValueProps.onChange?.(event);
                    } })) : (label), control: react_1.default.createElement(material_1.Radio, { sx: props.sx, ...optionMuiProps, name: props.name, onChange: (event, checked) => {
                        props.onChange(isCustom ? customValue : value);
                        optionMuiProps.onChange?.(event, checked);
                    }, checked: checked, onBlur: event => {
                        props.onBlur?.(event);
                        optionMuiProps.onBlur?.(event);
                    }, disabled: disabled }) }));
        })),
        (props.error != null || props.helperText != null) && (react_1.default.createElement(material_1.FormHelperText, null, props.error ?? props.helperText))));
});
/**
 * Creates custom radio value.
 *
 * RadioInput will render TextField which allows to enter custom value.
 */
function customRadioValue(props) {
    return {
        __customRadioValue__: true,
        ...props
    };
}
exports.customRadioValue = customRadioValue;
function isCustomRadioValue(value) {
    return value && value.__customRadioValue__;
}
//# sourceMappingURL=radioInput.js.map