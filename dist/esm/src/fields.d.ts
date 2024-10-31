import { BoxProps } from '@mui/material';
import { Properties as CssProperties } from 'csstype';
import { ComponentType } from 'react';
export type FieldsProps = BoxProps;
/**
 * Groups the fields and applies the spacing between them by default.
 *
 * Each field must use the FormControl from Material-UI.
 */
export declare const Fields: ComponentType<FieldsProps>;
export interface FieldsTheme {
    /**
     * Overrides the default style for the <Fields> component.
     */
    readonly style: CssProperties | undefined;
    /**
     * Overrides the default field style in the <Fields> component.
     */
    readonly fieldStyle: CssProperties | undefined;
}
