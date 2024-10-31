import { toggleIn } from '@everlutionsk/helpers';
import { Checkbox, FormControl, FormControlLabel, FormGroup as MuiFormGroup, FormHelperText, FormLabel, styled } from '@mui/material';
import React, { memo } from 'react';
/**
 * Material-UI checkboxes with shared array value.
 */
export const CheckboxesInput = memo(props => {
    return (React.createElement(FormControl, { component: "fieldset", className: props.className, error: props.error != null },
        props.label && React.createElement(FormLabel, { component: "legend" }, props.label),
        React.createElement(FormGroup, { row: props.row }, props.options.map(({ label, value, ...optionMuiProps }, i) => (React.createElement(FormControlLabel, { key: i, label: label, control: React.createElement(Checkbox, { ...optionMuiProps, name: props.name, onChange: (event, checked) => {
                    const updated = toggleIn(props.value ?? [], value);
                    props.onChange(updated);
                    optionMuiProps.onChange?.(event, checked);
                }, checked: (props.value ?? []).includes(value), onBlur: event => {
                    props.onBlur?.(event);
                    optionMuiProps.onBlur?.(event);
                }, disabled: props.disabled ?? optionMuiProps.disabled }) })))),
        (props.error != null || props.helperText != null) && (React.createElement(FormHelperText, null, props.error ?? props.helperText))));
});
const FormGroup = styled(MuiFormGroup) `
  &.row {
    flex-direction: row;
  }
  &.column {
    flex-direction: column;
  }
`;
//# sourceMappingURL=checkboxesInput.js.map