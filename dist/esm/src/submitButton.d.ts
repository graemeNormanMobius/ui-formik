import { ButtonProps } from '@everlutionsk/ui';
import React from 'react';
export type SubmitButtonProps = Omit<ButtonProps, 'type'>;
/**
 * Submit button with Formik support.
 *
 * Disable itself & shows loading spinner automatically during submit.
 */
export declare function SubmitButton(props: SubmitButtonProps): React.JSX.Element;
