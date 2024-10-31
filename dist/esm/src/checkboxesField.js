import React, { useEffect } from 'react';
import { CheckboxesInput } from './checkboxesInput';
import { useConditionalField } from './conditionalForm';
import { useFieldError } from './useFieldError';
import { useMemoizedField } from './useMemoizedField';
/**
 * A list of Material-UI checkboxes which toggle the values in
 * Formik field.
 *
 * Component ensures Formik value is always an array.
 */
export function CheckboxesField(props) {
    const { name } = props;
    useConditionalField(name, 'CheckboxesField');
    const [field, , { setValue, setTouched }] = useMemoizedField(name);
    const error = useFieldError(name);
    // Ensures Formik value is always an array.
    useEffect(() => {
        if (!Array.isArray(field.value)) {
            setValue([], false);
        }
    }, [field.value]);
    return (React.createElement(CheckboxesInput, { ...props, value: field.value, onChange: value => {
            setTouched(true);
            setValue(value);
        }, error: error }));
}
//# sourceMappingURL=checkboxesField.js.map