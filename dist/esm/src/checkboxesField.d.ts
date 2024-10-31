import React from 'react';
import { CheckboxesInputProps } from './checkboxesInput';
export type CheckboxesFieldProps<T = any> = Omit<CheckboxesInputProps<T>, 'name' | 'value' | 'onChange' | 'error'> & {
    /**
     * Field name
     */
    readonly name: string;
};
/**
 * A list of Material-UI checkboxes which toggle the values in
 * Formik field.
 *
 * Component ensures Formik value is always an array.
 */
export declare function CheckboxesField<T>(props: CheckboxesFieldProps<T>): React.JSX.Element;
