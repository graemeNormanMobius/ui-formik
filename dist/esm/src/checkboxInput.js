import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material';
import React, { memo } from 'react';
/**
 * Material-UI Checkbox with label and error helper text.
 */
export const CheckboxInput = memo((props) => {
    const { value, error, label, helperText, labelProps, ...muiProps } = props;
    const normalizedValue = value ?? false;
    return (React.createElement(FormControl, { error: error != null },
        React.createElement(FormControlLabel, { label: label, control: React.createElement(Checkbox, { ...muiProps, value: normalizedValue, checked: normalizedValue, onChange: (event, checked) => {
                    muiProps.onChange?.(event, checked);
                }, onBlur: event => {
                    muiProps.onBlur?.(event);
                } }), ...labelProps }),
        (error != null || helperText != null) && (React.createElement(FormHelperText, null, error ?? helperText))));
});
//# sourceMappingURL=checkboxInput.js.map