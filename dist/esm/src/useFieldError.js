import { useFormikContext } from 'formik';
import { useMemoizedField } from './useMemoizedField';
/**
 * Returns the field's error when there is one and when it should be visible.
 */
export function useFieldError(name) {
    const form = useFormikContext();
    const [{ value }, { touched, error, initialValue }] = useMemoizedField(name);
    if (error === undefined)
        return;
    if (form.submitCount > 0)
        return error;
    if (touched && value !== initialValue)
        return error;
}
//# sourceMappingURL=useFieldError.js.map