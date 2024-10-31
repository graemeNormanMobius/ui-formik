import React from 'react';
import { useConditionalField } from './conditionalForm';
import { SelectInput } from './selectInput';
import { useFieldError } from './useFieldError';
import { useMemoizedField } from './useMemoizedField';
/**
 * Material-UI Select with Formik support.
 */
export function SelectField(props) {
    const { name } = props;
    useConditionalField(props.name, 'SelectField');
    const [field, , { setValue, setTouched }] = useMemoizedField(name);
    const error = useFieldError(name);
    return (React.createElement(SelectInput, { ...props, value: field.value, onChange: setValue, onBlur: event => {
            setTouched(true);
            props.onBlur?.(event);
        }, error: error != null, helperText: error ?? props.helperText }));
}
//# sourceMappingURL=selectField.js.map