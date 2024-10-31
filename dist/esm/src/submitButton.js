import { Button, INTERNAL_usePackageTheme } from '@everlutionsk/ui';
import { useFormikContext } from 'formik';
import React from 'react';
/**
 * Submit button with Formik support.
 *
 * Disable itself & shows loading spinner automatically during submit.
 */
export function SubmitButton(props) {
    const theme = INTERNAL_usePackageTheme('@everlutionsk/ui-formik').SubmitButton;
    const { isSubmitting } = useFormikContext();
    return (React.createElement(Button, { ...theme.defaultProps, ...props, type: "submit", loading: props.loading ?? isSubmitting }));
}
//# sourceMappingURL=submitButton.js.map