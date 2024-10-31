import { useField } from 'formik';
import React from 'react';
import { useFieldError } from '../useFieldError';
import { MultiAutocompleteInput } from './multiAutocompleteInput';
/**
 * Autocomplete field with multi-selection support.
 *
 * To use it without Formik, please use MultiAutocompleteInput
 */
export function MultiAutocompleteField(props) {
    const { name, ...restProps } = props;
    const [field, , { setValue, setTouched }] = useField(name);
    const error = useFieldError(name);
    const value = field.value ?? [];
    return (React.createElement(MultiAutocompleteInput, { ...restProps, error: error, selected: field.value, onSelect: option => setValue([...value, option]), onRemove: option => setValue(value.filter(({ label }) => label !== option.label)), onBlur: event => {
            setTouched(true);
            props.onBlur?.(event);
        }, onClear: () => setValue([]) }));
}
//# sourceMappingURL=multiAutocompleteField.js.map