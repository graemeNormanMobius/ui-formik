import { FormControlLabelProps, SwitchProps } from '@mui/material';
import React, { ReactNode } from 'react';
export interface SwitchInputProps {
    readonly label: FormControlLabelProps['label'];
    /**
     * Use `undefined` or `null` to move input into loading state.
     */
    readonly value: boolean | undefined | null;
    readonly onChange: (value: boolean) => void;
    /**
     * Disabled by default if the value is `undefined` or `null`.
     */
    readonly disabled?: boolean;
    /**
     * MUI FormControlLabel props.
     */
    readonly labelProps?: Omit<FormControlLabelProps, 'control' | 'label'>;
    /**
     * MUI Switch props.
     */
    readonly switchProps?: Omit<SwitchProps, 'checked' | 'disabled'>;
    /**
     * Field error.
     */
    readonly error?: string;
    /**
     * The helper text content.
     */
    readonly helperText?: ReactNode;
}
/**
 * Switch with label and loading state.
 */
export declare function SwitchInput(props: SwitchInputProps): React.JSX.Element;
