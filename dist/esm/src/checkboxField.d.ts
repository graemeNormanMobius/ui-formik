import React, { ReactNode } from 'react';
import { CheckboxInputProps } from './checkboxInput';
export interface CheckboxFieldProps extends Omit<CheckboxInputProps, 'value' | 'onChange' | 'error'> {
    /**
     * Name attribute of the `input` element.
     */
    readonly name: string;
    /**
     * The label content.
     */
    readonly label: ReactNode;
    /**
     * The helper text content.
     */
    readonly helperText?: ReactNode;
}
/**
 * Material-UI Checkbox with Formik support.
 *
 * Component ensures Formik value is always a boolean.
 */
export declare function CheckboxField(props: CheckboxFieldProps): React.JSX.Element;
