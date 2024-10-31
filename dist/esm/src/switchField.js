import React from 'react';
import { useConditionalField } from './conditionalForm';
import { SwitchInput } from './switchInput';
import { useFieldError } from './useFieldError';
import { useMemoizedField } from './useMemoizedField';
/**
 * Material-UI Switch with Formik support.
 */
export function SwitchField(props) {
    const { name } = props;
    useConditionalField(props.name, 'SwitchField');
    const [field, , { setValue, setTouched }] = useMemoizedField(name);
    const error = useFieldError(name);
    return (React.createElement(SwitchInput, { ...props, value: field.value, onChange: value => {
            setValue(value);
            setTouched(true);
        }, error: error }));
}
//# sourceMappingURL=switchField.js.map