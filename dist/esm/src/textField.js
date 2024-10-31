import { analyzeCharacter } from '@everlutionsk/invisible-characters';
import { TextField as MuiTextField } from '@mui/material';
import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import { useConditionalField } from './conditionalForm';
import { useFieldError } from './useFieldError';
import { useMemoizedField } from './useMemoizedField';
/**
 * Material-UI TextField with Formik support.
 *
 * Supports text, email, number, date, datetime-local, tel, etc.
 */
export function TextField(props) {
    const { name, type } = props;
    useConditionalField(name, 'TextField');
    const error = useFieldError(name);
    const [field, , { setValue }] = useMemoizedField(name);
    const isDateInput = type === 'date' || type === 'datetime-local' || type === 'month' || type === 'week';
    if (isDateInput) {
        return (React.createElement(DateControl, { ...props, fieldValue: field.value, fieldOnBlur: field.onBlur, setValue: setValue, error: error }));
    }
    return (React.createElement(Control, { ...props, fieldValue: field.value, fieldOnBlur: field.onBlur, setValue: setValue, error: error }));
}
const Control = memo((props) => {
    const { fieldValue, fieldOnBlur, setValue, error, valueFormatter, ...muiProps } = props;
    const expectedFieldValue = useRef(fieldValue);
    const [userValue, setUserValue] = useState(fieldValue ?? '');
    // Update userValue when fieldValue is changed outside of the component.
    useEffect(() => {
        if (expectedFieldValue.current === fieldValue)
            return;
        setUserValue(fieldValue);
        expectedFieldValue.current = fieldValue;
    }, [expectedFieldValue.current === fieldValue]);
    return (React.createElement(MuiTextField, { ...muiProps, value: userValue, onChange: event => {
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
const DateControl = memo((props) => {
    const { fieldValue, fieldOnBlur, setValue, error, valueFormatter, ...muiProps } = props;
    const value = useMemo(() => {
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
    const [focused, setFocused] = useState(false);
    return (React.createElement(MuiTextField, { ...muiProps, value: value, type: value === '' && !focused ? 'text' : muiProps.type, onChange: event => {
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
        const { invisible, zeroSize } = analyzeCharacter(char);
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