"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectField = void 0;
const react_1 = __importDefault(require("react"));
const conditionalForm_1 = require("./conditionalForm");
const selectInput_1 = require("./selectInput");
const useFieldError_1 = require("./useFieldError");
const useMemoizedField_1 = require("./useMemoizedField");
/**
 * Material-UI Select with Formik support.
 */
function SelectField(props) {
    const { name } = props;
    (0, conditionalForm_1.useConditionalField)(props.name, 'SelectField');
    const [field, , { setValue, setTouched }] = (0, useMemoizedField_1.useMemoizedField)(name);
    const error = (0, useFieldError_1.useFieldError)(name);
    return (react_1.default.createElement(selectInput_1.SelectInput, { ...props, value: field.value, onChange: setValue, onBlur: event => {
            setTouched(true);
            props.onBlur?.(event);
        }, error: error != null, helperText: error ?? props.helperText }));
}
exports.SelectField = SelectField;
//# sourceMappingURL=selectField.js.map