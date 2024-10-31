import React from 'react';
import { TextFieldProps } from './textField';
export type PasswordFieldProps = Omit<TextFieldProps, 'type' | 'InputProps'>;
/**
 * TextField with "password reveal" button.
 */
export declare function PasswordField(props: PasswordFieldProps): React.JSX.Element;
