/**
 * Optimized useField() hook.
 *
 * Unfortunately, Formik creates new `helpers` object each time
 * the useField is called which cause unnecessary re-renders.
 */
export declare function useMemoizedField<T>(name: string): readonly [import("formik").FieldInputProps<T>, import("formik").FieldMetaProps<T>, {
    setValue: (value: any, shouldValidate?: boolean) => Promise<void | import("formik").FormikErrors<unknown>>;
    setTouched: (isTouched: boolean, shouldValidate?: boolean) => Promise<void | import("formik").FormikErrors<unknown>>;
    setError: (message: string) => void;
}];
