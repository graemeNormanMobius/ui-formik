"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFieldError = void 0;
const formik_1 = require("formik");
const useMemoizedField_1 = require("./useMemoizedField");
/**
 * Returns the field's error when there is one and when it should be visible.
 */
function useFieldError(name) {
    const form = (0, formik_1.useFormikContext)();
    const [{ value }, { touched, error, initialValue }] = (0, useMemoizedField_1.useMemoizedField)(name);
    if (error === undefined)
        return;
    if (form.submitCount > 0)
        return error;
    if (touched && value !== initialValue)
        return error;
}
exports.useFieldError = useFieldError;
//# sourceMappingURL=useFieldError.js.map