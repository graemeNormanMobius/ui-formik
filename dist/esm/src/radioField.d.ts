import React from 'react';
import { RadioInputProps } from './radioInput';
export type RadioFieldProps<T = any> = Omit<RadioInputProps<T>, 'name' | 'value' | 'onChange' | 'error'> & {
    /**
     * Field name
     */
    readonly name: string;
};
/**
 * Material-UI Radio with Formik support.
 */
export declare function RadioField<T>(props: RadioFieldProps<T>): React.JSX.Element;
