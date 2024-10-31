import { CheckboxProps, FormControlLabelProps } from '@mui/material';
import React, { ReactNode } from 'react';
export interface CheckboxInputProps extends Omit<CheckboxProps, 'name' | 'error' | 'value' | 'checked'> {
    /**
     * The checkbox value.
     */
    readonly value: boolean;
    /**
     * The label content.
     */
    readonly label: ReactNode;
    /**
     * MUI FormControlLabel props.
     */
    readonly labelProps?: Omit<FormControlLabelProps, 'control' | 'label'>;
    /**
     * The helper text content.
     */
    readonly helperText?: ReactNode;
    /**
     * The error message.
     */
    readonly error?: string;
}
/**
 * Material-UI Checkbox with label and error helper text.
 */
export declare const CheckboxInput: React.MemoExoticComponent<(props: CheckboxInputProps) => React.JSX.Element>;
