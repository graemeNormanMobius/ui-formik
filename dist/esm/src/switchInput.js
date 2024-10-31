import { FormControl, FormControlLabel, FormHelperText, Switch } from '@mui/material';
import React from 'react';
/**
 * Switch with label and loading state.
 */
export function SwitchInput(props) {
    const disabled = props.disabled ?? props.value == null;
    return (React.createElement(FormControl, { error: props.error != null },
        React.createElement(FormControlLabel, { disabled: disabled, control: React.createElement(Switch, { checked: props.value ?? false, disabled: disabled, onChange: (event, checked) => {
                    if (props.value == null)
                        return;
                    props.onChange(checked);
                    props.switchProps?.onChange?.(event, checked);
                }, ...props.switchProps }), label: props.label, labelPlacement: "start", ...props.labelProps }),
        (props.error != null || props.helperText != null) && (React.createElement(FormHelperText, null, props.error ?? props.helperText))));
}
//# sourceMappingURL=switchInput.js.map