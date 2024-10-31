import { equals } from '@everlutionsk/helpers';
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import React, { memo, useEffect, useMemo, useState } from 'react';
/**
 * Material-UI Radio with better options support.
 */
export const RadioInput = memo(props => {
    const isCustomSelected = useMemo(() => props.options.every(({ value }) => value !== props.value), [props.value, props.options]);
    useEffect(() => {
        const custom = props.options.filter(({ value }) => isCustomRadioValue(value));
        if (custom.length > 1)
            throw Error('RadioInput cannot have more than one custom value option!');
    }, [props.options]);
    const [customValue, setCustomValue] = useState(() => {
        if (isCustomSelected)
            return props.value;
        return '';
    });
    return (React.createElement(FormControl, { component: "fieldset", className: props.className, error: props.error != null },
        props.label && React.createElement(FormLabel, { component: "legend" }, props.label),
        React.createElement(RadioGroup, { row: props.row }, props.options.map(({ label, value, ...optionMuiProps }, i) => {
            const isCustom = isCustomRadioValue(value);
            const disabled = props.disabled ?? optionMuiProps.disabled;
            const checked = isCustom ? isCustomSelected : equals(props.value, value);
            const { __customRadioValue__, ...customValueProps } = isCustom ? value : {};
            return (React.createElement(FormControlLabel, { key: i, label: isCustom ? (React.createElement(TextField, { size: "small", value: customValue, disabled: disabled, label: label, ...customValueProps, onChange: event => {
                        const newValue = event.target.value;
                        setCustomValue(newValue);
                        props.onChange(newValue);
                        customValueProps.onChange?.(event);
                    } })) : (label), control: React.createElement(Radio, { sx: props.sx, ...optionMuiProps, name: props.name, onChange: (event, checked) => {
                        props.onChange(isCustom ? customValue : value);
                        optionMuiProps.onChange?.(event, checked);
                    }, checked: checked, onBlur: event => {
                        props.onBlur?.(event);
                        optionMuiProps.onBlur?.(event);
                    }, disabled: disabled }) }));
        })),
        (props.error != null || props.helperText != null) && (React.createElement(FormHelperText, null, props.error ?? props.helperText))));
});
/**
 * Creates custom radio value.
 *
 * RadioInput will render TextField which allows to enter custom value.
 */
export function customRadioValue(props) {
    return {
        __customRadioValue__: true,
        ...props
    };
}
function isCustomRadioValue(value) {
    return value && value.__customRadioValue__;
}
//# sourceMappingURL=radioInput.js.map