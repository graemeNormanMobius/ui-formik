"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwitchField = void 0;
const react_1 = __importDefault(require("react"));
const conditionalForm_1 = require("./conditionalForm");
const switchInput_1 = require("./switchInput");
const useFieldError_1 = require("./useFieldError");
const useMemoizedField_1 = require("./useMemoizedField");
/**
 * Material-UI Switch with Formik support.
 */
function SwitchField(props) {
    const { name } = props;
    (0, conditionalForm_1.useConditionalField)(props.name, 'SwitchField');
    const [field, , { setValue, setTouched }] = (0, useMemoizedField_1.useMemoizedField)(name);
    const error = (0, useFieldError_1.useFieldError)(name);
    return (react_1.default.createElement(switchInput_1.SwitchInput, { ...props, value: field.value, onChange: value => {
            setValue(value);
            setTouched(true);
        }, error: error }));
}
exports.SwitchField = SwitchField;
//# sourceMappingURL=switchField.js.map