import React from 'react';
import { useConditionalField } from './conditionalForm';
import { RadioInput } from './radioInput';
import { useFieldError } from './useFieldError';
import { useMemoizedField } from './useMemoizedField';
/**
 * Material-UI Radio with Formik support.
 */
export function RadioField(props) {
    const { name } = props;
    useConditionalField(props.name, 'RadioField');
    const [field, , { setValue, setTouched }] = useMemoizedField(name);
    const error = useFieldError(name);
    return (React.createElement(RadioInput, { ...props, value: field.value, onChange: value => {
            setTouched(true);
            setValue(value);
        }, error: error }));
}
//# sourceMappingURL=radioField.js.map