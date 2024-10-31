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
exports.TextField = void 0;
const invisible_characters_1 = require("@everlutionsk/invisible-characters");
const material_1 = require("@mui/material");
const react_1 = __importStar(require("react"));
const conditionalForm_1 = require("./conditionalForm");
const useFieldError_1 = require("./useFieldError");
const useMemoizedField_1 = require("./useMemoizedField");
/**
 * Material-UI TextField with Formik support.
 *
 * Supports text, email, number, date, datetime-local, tel, etc.
 */
function TextField(props) {
    const { name, type } = props;
    (0, conditionalForm_1.useConditionalField)(name, 'TextField');
    const error = (0, useFieldError_1.useFieldError)(name);
    const [field, , { setValue }] = (0, useMemoizedField_1.useMemoizedField)(name);
    const isDateInput = type === 'date' || type === 'datetime-local' || type === 'month' || type === 'week';
    if (isDateInput) {
        return (react_1.default.createElement(DateControl, { ...props, fieldValue: field.value, fieldOnBlur: field.onBlur, setValue: setValue, error: error }));
    }
    return (react_1.default.createElement(Control, { ...props, fieldValue: field.value, fieldOnBlur: field.onBlur, setValue: setValue, error: error }));
}
exports.TextField = TextField;
const Control = (0, react_1.memo)((props) => {
    const { fieldValue, fieldOnBlur, setValue, error, valueFormatter, ...muiProps } = props;
    const expectedFieldValue = (0, react_1.useRef)(fieldValue);
    const [userValue, setUserValue] = (0, react_1.useState)(fieldValue ?? '');
    // Update userValue when fieldValue is changed outside of the component.
    (0, react_1.useEffect)(() => {
        if (expectedFieldValue.current === fieldValue)
            return;
        setUserValue(fieldValue);
        expectedFieldValue.current = fieldValue;
    }, [expectedFieldValue.current === fieldValue]);
    return (react_1.default.createElement(material_1.TextField, { ...muiProps, value: userValue, onChange: event => {
            const newValue = event.target.value;
            setUserValue(newValue);
            if (valueFormatter != null) {
                const newFieldValue = valueFormatter(newValue);
                setValue(newFieldValue);
                expectedFieldValue.current = newFieldValue;
            }
            else if (props.type !== 'password') {
                const newFieldValue = defaultValueFormatter(newValue, props.multiline ?? false);
                setValue(newFieldValue);
                expectedFieldValue.current = newFieldValue;
            }
            else {
                setValue(newValue);
                expectedFieldValue.current = newValue;
            }
            props.onChange?.(event);
        }, onBlur: event => {
            if (userValue !== fieldValue) {
                setUserValue(fieldValue ?? '');
            }
            fieldOnBlur(event);
            props.onBlur?.(event);
        }, error: error != null, helperText: error ?? props.helperText }));
});
const DateControl = (0, react_1.memo)((props) => {
    const { fieldValue, fieldOnBlur, setValue, error, valueFormatter, ...muiProps } = props;
    const value = (0, react_1.useMemo)(() => {
        if (muiProps.type === 'month') {
            return fieldValue ?? '';
        }
        if (muiProps.type === 'week') {
            return fieldValue ?? '';
        }
        if (fieldValue == null)
            return '';
        if (typeof fieldValue !== 'string' && !(fieldValue instanceof Date)) {
            throw new Error(`${muiProps.name}: ${fieldValue} is not supported! Field value needs to be a string or a Date.`);
        }
        if (typeof fieldValue === 'string' && fieldValue.trim() === '')
            return '';
        const date = fieldValue instanceof Date ? fieldValue : new Date(fieldValue);
        if (date.toString() === 'Invalid Date') {
            throw new Error(`${muiProps.name}: ${fieldValue} is not a valid date! Field value needs to be a valid date.`);
        }
        if (muiProps.type === 'date') {
            const year = date.getUTCFullYear().toString().padStart(4, '0');
            const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
            const day = date.getUTCDate().toString().padStart(2, '0');
            return `${year}-${month}-${day}`;
        }
        if (muiProps.type === 'datetime-local') {
            const year = date.getFullYear().toString().padStart(4, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            const hour = date.getHours().toString().padStart(2, '0');
            const minute = date.getMinutes().toString().padStart(2, '0');
            return `${year}-${month}-${day}T${hour}:${minute}`;
        }
        throw Error(`${muiProps.name}: Unknown date type`);
    }, [fieldValue, muiProps.type]);
    const [focused, setFocused] = (0, react_1.useState)(false);
    return (react_1.default.createElement(material_1.TextField, { ...muiProps, value: value, type: value === '' && !focused ? 'text' : muiProps.type, onChange: event => {
            const { value } = event.target;
            if (muiProps.type === 'month' || muiProps.type === 'week') {
                setValue(value);
            }
            else if (value === '') {
                setValue(null);
            }
            else {
                setValue(new Date(value).toISOString());
            }
            props.onChange?.(event);
        }, onBlur: event => {
            setFocused(false);
            fieldOnBlur(event);
            props.onBlur?.(event);
        }, onFocus: event => {
            setFocused(true);
            props.onFocus?.(event);
        }, error: error != null, helperText: error ?? props.helperText }));
});
function defaultValueFormatter(value, allowMultiline) {
    if (typeof value !== 'string')
        return value;
    return value
        .split('')
        .map(char => {
        if (char === '\n') {
            if (allowMultiline)
                return '\n';
            return ' ';
        }
        const { invisible, zeroSize } = (0, invisible_characters_1.analyzeCharacter)(char);
        if (zeroSize)
            return '';
        if (invisible)
            return ' ';
        return char;
    })
        .join('')
        .trim();
}
//# sourceMappingURL=textField.js.map