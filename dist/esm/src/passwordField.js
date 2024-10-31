import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, styled } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { TextField as BaseTextField } from './textField';
/**
 * TextField with "password reveal" button.
 */
export function PasswordField(props) {
    const [visible, setVisibility] = useState(false);
    const inputProps = useMemo(() => ({
        endAdornment: (React.createElement(InputAdornment, { position: "end" },
            React.createElement(IconButton, { onClick: () => setVisibility(!visible), "aria-label": visible ? 'Hide password' : 'Show password', edge: "end", tabIndex: -1 }, visible ? React.createElement(VisibilityOff, null) : React.createElement(Visibility, null))))
    }), [visible]);
    return (React.createElement(TextField, { ...props, type: visible ? 'text' : 'password', valueFormatter: valueFormatter, InputProps: inputProps, onBlur: event => {
            setVisibility(false);
            props.onBlur?.(event);
        }, onKeyDown: event => {
            if (event.key === 'Escape') {
                setVisibility(false);
            }
            props.onKeyDown?.(event);
        } }));
}
const TextField = styled(BaseTextField) `
  input::-ms-reveal,
  input::-ms-clear {
    display: none;
  }
`;
function valueFormatter(value) {
    return value;
}
//# sourceMappingURL=passwordField.js.map