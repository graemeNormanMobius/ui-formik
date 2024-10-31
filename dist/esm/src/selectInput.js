import { equals } from '@everlutionsk/helpers';
import { MenuItem, TextField } from '@mui/material';
import React, { memo, useMemo } from 'react';
/**
 * Material-UI Select with better options support.
 */
export function SelectInput(props) {
    const { value, options, ...restProps } = props;
    const valueIndex = useMemo(() => {
        return options.findIndex(option => equals(option.value, value));
    }, [value, options]);
    return React.createElement(Control, { value: valueIndex, options: options, ...restProps });
}
const Control = memo((props) => {
    const { options, value, onChange, dense, ...muiProps } = props;
    return (React.createElement(TextField, { ...muiProps, onChange: event => {
            const index = event.target.value;
            onChange(options[index]?.value);
        }, value: value === -1 ? '' : value, select: true, SelectProps: {
            renderValue: index => options[index]?.label ?? ''
        } }, options.map(({ value, label, node, ...menuItemProps }, i) => (React.createElement(MenuItem, { value: i, key: i, dense: dense, ...menuItemProps }, node ?? label)))));
});
//# sourceMappingURL=selectInput.js.map