"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutocompleteField = void 0;
const formik_1 = require("formik");
const react_1 = __importDefault(require("react"));
const useFieldError_1 = require("../useFieldError");
const autocompleteInput_1 = require("./autocompleteInput");
/**
 * Autocomplete field.
 *
 * To use it without Formik, please use AutocompleteInput.
 */
function AutocompleteField(props) {
    const { name, ...restProps } = props;
    const [field, , { setValue, setTouched }] = (0, formik_1.useField)(name);
    const error = (0, useFieldError_1.useFieldError)(name);
    return (react_1.default.createElement(autocompleteInput_1.AutocompleteInput, { ...restProps, error: error, selected: field.value, onSelect: setValue, onBlur: event => {
            setTouched(true);
            props.onBlur?.(event);
        } }));
}
exports.AutocompleteField = AutocompleteField;
//# sourceMappingURL=autocompleteField.js.map