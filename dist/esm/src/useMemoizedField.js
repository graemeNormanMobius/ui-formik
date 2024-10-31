import { useField, useFormikContext } from 'formik';
import { useMemo } from 'react';
/**
 * Optimized useField() hook.
 *
 * Unfortunately, Formik creates new `helpers` object each time
 * the useField is called which cause unnecessary re-renders.
 */
export function useMemoizedField(name) {
    const [field, meta] = useField(name);
    const { setFieldTouched, setFieldValue, setFieldError } = useFormikContext();
    const helpers = useMemo(() => ({
        setValue: (value, shouldValidate) => setFieldValue(field.name, value, shouldValidate),
        setTouched: (isTouched, shouldValidate) => setFieldTouched(field.name, isTouched, shouldValidate),
        setError: (message) => setFieldError(field.name, message)
    }), [field.name, setFieldTouched, setFieldValue, setFieldError]);
    return [field, meta, helpers];
}
//# sourceMappingURL=useMemoizedField.js.map