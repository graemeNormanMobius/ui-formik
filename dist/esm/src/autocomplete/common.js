import { removeAccent } from '@everlutionsk/helpers';
import { CircularProgress } from '@mui/material';
import React from 'react';
/**
 * We need to merge available options with selected options
 * to avoid errors when selected options are missing from `options` list.
 */
export function mergeOptions(options, selected) {
    const optionsMap = new Map();
    options.map(option => optionsMap.set(option.label, option));
    if (optionsMap.size !== options.length) {
        console.warn(`Options in autocomplete input were reduced as they labels needs be unique!`);
    }
    selected.map(option => optionsMap.set(option.label, option));
    return Array.from(optionsMap.values());
}
export function LoadingSpinner() {
    return React.createElement(CircularProgress, { size: 28, className: "MuiAutocomplete-endAdornment" });
}
export function normalizeLabel(label) {
    return removeAccent(label.trim().toLocaleLowerCase());
}
//# sourceMappingURL=common.js.map