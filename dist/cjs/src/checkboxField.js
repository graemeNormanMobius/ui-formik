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
exports.CheckboxField = void 0;
const react_1 = __importStar(require("react"));
const checkboxInput_1 = require("./checkboxInput");
const conditionalForm_1 = require("./conditionalForm");
const useFieldError_1 = require("./useFieldError");
const useMemoizedField_1 = require("./useMemoizedField");
/**
 * Material-UI Checkbox with Formik support.
 *
 * Component ensures Formik value is always a boolean.
 */
function CheckboxField(props) {
    const { name } = props;
    (0, conditionalForm_1.useConditionalField)(name, 'CheckboxField');
    const [field, , { setValue, setTouched }] = (0, useMemoizedField_1.useMemoizedField)(name);
    const error = (0, useFieldError_1.useFieldError)(name);
    // Ensures Formik value is always a boolean.
    (0, react_1.useEffect)(() => {
        if (typeof field.value !== 'boolean') {
            setValue(false, false);
        }
    }, [field.value]);
    return (react_1.default.createElement(checkboxInput_1.CheckboxInput, { ...props, value: field.value, onChange: (event, value) => {
            setTouched(true);
            setValue(value);
        }, error: error }));
}
exports.CheckboxField = CheckboxField;
//# sourceMappingURL=checkboxField.js.map