import { CheckboxProps } from '@mui/material';
import React, { ReactNode } from 'react';
export interface CheckboxesInputProps<T = any> {
    /**
     * Input name.
     */
    readonly name?: string;
    /**
     * Selected values.
     */
    readonly value: T[];
    /**
     * Called when user toggles option.
     */
    readonly onChange: (value: T[]) => void;
    readonly onBlur?: (e: React.FocusEvent<any>) => void;
    readonly error?: string;
    /**
     * Options to render.
     */
    readonly options: ReadonlyArray<CheckboxesInputOption<T>>;
    /**
     * The label content.
     */
    readonly label?: ReactNode;
    /**
     * The helper text content.
     */
    readonly helperText?: ReactNode;
    /**
     * Display options in a compact row.
     */
    readonly row?: boolean;
    /**
     * If `true`, all checkbox elements will be disabled.
     */
    readonly disabled?: boolean;
    readonly className?: string;
}
export interface CheckboxesInputOption<T = any> extends Omit<CheckboxProps, 'name' | 'checked' | 'children'> {
    readonly label: ReactNode;
    readonly value: T;
}
type CheckboxesInput = <T>(props: CheckboxesInputProps<T>) => ReactNode;
/**
 * Material-UI checkboxes with shared array value.
 */
export declare const CheckboxesInput: CheckboxesInput;
export {};
