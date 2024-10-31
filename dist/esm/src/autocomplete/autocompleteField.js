import { useField } from 'formik';
import React from 'react';
import { useFieldError } from '../useFieldError';
import { AutocompleteInput } from './autocompleteInput';
/**
 * Autocomplete field.
 *
 * To use it without Formik, please use AutocompleteInput.
 */
export function AutocompleteField(props) {
    const { name, ...restProps } = props;
    const [field, , { setValue, setTouched }] = useField(name);
    const error = useFieldError(name);
    return (React.createElement(AutocompleteInput, { ...restProps, error: error, selected: field.value, onSelect: setValue, onBlur: event => {
            setTouched(true);
            props.onBlur?.(event);
        } }));
}
//# sourceMappingURL=autocompleteField.js.map