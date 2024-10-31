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
exports.CheckboxesField = void 0;
const react_1 = __importStar(require("react"));
const checkboxesInput_1 = require("./checkboxesInput");
const conditionalForm_1 = require("./conditionalForm");
const useFieldError_1 = require("./useFieldError");
const useMemoizedField_1 = require("./useMemoizedField");
/**
 * A list of Material-UI checkboxes which toggle the values in
 * Formik field.
 *
 * Component ensures Formik value is always an array.
 */
function CheckboxesField(props) {
    const { name } = props;
    (0, conditionalForm_1.useConditionalField)(name, 'CheckboxesField');
    const [field, , { setValue, setTouched }] = (0, useMemoizedField_1.useMemoizedField)(name);
    const error = (0, useFieldError_1.useFieldError)(name);
    // Ensures Formik value is always an array.
    (0, react_1.useEffect)(() => {
        if (!Array.isArray(field.value)) {
            setValue([], false);
        }
    }, [field.value]);
    return (react_1.default.createElement(checkboxesInput_1.CheckboxesInput, { ...props, value: field.value, onChange: value => {
            setTouched(true);
            setValue(value);
        }, error: error }));
}
exports.CheckboxesField = CheckboxesField;
//# sourceMappingURL=checkboxesField.js.map