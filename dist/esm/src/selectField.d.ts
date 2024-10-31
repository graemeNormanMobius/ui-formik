import React from 'react';
import { SelectInputProps } from './selectInput';
export type SelectFieldProps<T = any> = Omit<SelectInputProps<T>, 'name' | 'value' | 'onChange' | 'error'> & {
    /**
     * Field name
     */
    readonly name: string;
};
/**
 * Material-UI Select with Formik support.
 */
export declare function SelectField<T>(props: SelectFieldProps<T>): React.JSX.Element;
