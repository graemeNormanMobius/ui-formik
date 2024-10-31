import React from 'react';
import { SwitchInputProps } from './switchInput';
export interface SwitchFieldProps extends Omit<SwitchInputProps, 'value' | 'onChange'> {
    /**
     * Field name
     */
    readonly name: string;
}
/**
 * Material-UI Switch with Formik support.
 */
export declare function SwitchField(props: SwitchFieldProps): React.JSX.Element;
