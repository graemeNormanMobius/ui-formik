import React, { useEffect } from 'react';
import { CheckboxInput } from './checkboxInput';
import { useConditionalField } from './conditionalForm';
import { useFieldError } from './useFieldError';
import { useMemoizedField } from './useMemoizedField';
/**
 * Material-UI Checkbox with Formik support.
 *
 * Component ensures Formik value is always a boolean.
 */
export function CheckboxField(props) {
    const { name } = props;
    useConditionalField(name, 'CheckboxField');
    const [field, , { setValue, setTouched }] = useMemoizedField(name);
    const error = useFieldError(name);
    // Ensures Formik value is always a boolean.
    useEffect(() => {
        if (typeof field.value !== 'boolean') {
            setValue(false, false);
        }
    }, [field.value]);
    return (React.createElement(CheckboxInput, { ...props, value: field.value, onChange: (event, value) => {
            setTouched(true);
            setValue(value);
        }, error: error }));
}
//# sourceMappingURL=checkboxField.js.map