"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiAutocompleteField = void 0;
const formik_1 = require("formik");
const react_1 = __importDefault(require("react"));
const useFieldError_1 = require("../useFieldError");
const multiAutocompleteInput_1 = require("./multiAutocompleteInput");
/**
 * Autocomplete field with multi-selection support.
 *
 * To use it without Formik, please use MultiAutocompleteInput
 */
function MultiAutocompleteField(props) {
    const { name, ...restProps } = props;
    const [field, , { setValue, setTouched }] = (0, formik_1.useField)(name);
    const error = (0, useFieldError_1.useFieldError)(name);
    const value = field.value ?? [];
    return (react_1.default.createElement(multiAutocompleteInput_1.MultiAutocompleteInput, { ...restProps, error: error, selected: field.value, onSelect: option => setValue([...value, option]), onRemove: option => setValue(value.filter(({ label }) => label !== option.label)), onBlur: event => {
            setTouched(true);
            props.onBlur?.(event);
        }, onClear: () => setValue([]) }));
}
exports.MultiAutocompleteField = MultiAutocompleteField;
//# sourceMappingURL=multiAutocompleteField.js.map