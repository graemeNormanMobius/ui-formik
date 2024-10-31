import { MenuItemProps, TextFieldProps } from '@mui/material';
import React, { ReactNode } from 'react';
export type SelectInputProps<T = any> = Omit<TextFieldProps, 'value' | 'onChange' | 'type' | 'select' | 'SelectProps' | 'placeholder'> & {
    /**
     * Selected value.
     */
    readonly value: T | undefined;
    /**
     * Called when user selects option from list.
     */
    readonly onChange: (value: T) => void;
    /**
     * Options to render.
     */
    readonly options: ReadonlyArray<SelectOption<T>>;
    /**
     * If `true`, compact vertical padding designed
     * for keyboard and mouse input will be used for options.
     */
    readonly dense?: boolean;
};
export interface SelectOption<T = any> extends Omit<MenuItemProps, 'value' | 'children'> {
    readonly label: ReactNode;
    readonly value: T;
    /**
     * ReactNode which will be rendered as menu option.
     *
     * Fallbacks to `label` if not specified.
     */
    readonly node?: ReactNode;
}
/**
 * Material-UI Select with better options support.
 */
export declare function SelectInput<T>(props: SelectInputProps<T>): React.JSX.Element;
