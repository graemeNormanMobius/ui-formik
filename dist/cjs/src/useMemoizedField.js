"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMemoizedField = void 0;
const formik_1 = require("formik");
const react_1 = require("react");
/**
 * Optimized useField() hook.
 *
 * Unfortunately, Formik creates new `helpers` object each time
 * the useField is called which cause unnecessary re-renders.
 */
function useMemoizedField(name) {
    const [field, meta] = (0, formik_1.useField)(name);
    const { setFieldTouched, setFieldValue, setFieldError } = (0, formik_1.useFormikContext)();
    const helpers = (0, react_1.useMemo)(() => ({
        setValue: (value, shouldValidate) => setFieldValue(field.name, value, shouldValidate),
        setTouched: (isTouched, shouldValidate) => setFieldTouched(field.name, isTouched, shouldValidate),
        setError: (message) => setFieldError(field.name, message)
    }), [field.name, setFieldTouched, setFieldValue, setFieldError]);
    return [field, meta, helpers];
}
exports.useMemoizedField = useMemoizedField;
//# sourceMappingURL=useMemoizedField.js.map