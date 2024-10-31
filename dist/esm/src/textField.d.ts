import { TextFieldProps as MuiTextFieldProps } from '@mui/material';
import React from 'react';
export type TextFieldProps = Omit<MuiTextFieldProps, 'name' | 'value' | 'error' | 'select' | 'SelectProps'> & {
    /**
     * Name attribute of the `input` element.
     */
    readonly name: string;
    /**
     * Allows to format the value before it is pushed into Formik.
     *
     * HTML input value will be replaced with a formatted value on each blur event.
     *
     * Default formatter trims string values and normalizes invisible characters.
     *
     * Default formatter is not used when input type is "password"
     */
    readonly valueFormatter?: (value: any) => any;
};
/**
 * Material-UI TextField with Formik support.
 *
 * Supports text, email, number, date, datetime-local, tel, etc.
 */
export declare function TextField(props: TextFieldProps): React.JSX.Element;
