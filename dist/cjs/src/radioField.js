"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioField = void 0;
const react_1 = __importDefault(require("react"));
const conditionalForm_1 = require("./conditionalForm");
const radioInput_1 = require("./radioInput");
const useFieldError_1 = require("./useFieldError");
const useMemoizedField_1 = require("./useMemoizedField");
/**
 * Material-UI Radio with Formik support.
 */
function RadioField(props) {
    const { name } = props;
    (0, conditionalForm_1.useConditionalField)(props.name, 'RadioField');
    const [field, , { setValue, setTouched }] = (0, useMemoizedField_1.useMemoizedField)(name);
    const error = (0, useFieldError_1.useFieldError)(name);
    return (react_1.default.createElement(radioInput_1.RadioInput, { ...props, value: field.value, onChange: value => {
            setTouched(true);
            setValue(value);
        }, error: error }));
}
exports.RadioField = RadioField;
//# sourceMappingURL=radioField.js.map