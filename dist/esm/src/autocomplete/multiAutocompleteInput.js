import { equals } from '@everlutionsk/helpers';
import { constants, useDelayedTrue, useLatestNonNilValue } from '@everlutionsk/ui';
import { Autocomplete, Chip, TextField } from '@mui/material';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { LoadingSpinner, mergeOptions, normalizeLabel } from './common';
/**
 * Autocomplete input with multi-selection support.
 *
 * To use it with Formik, please use MultiAutocompleteField.
 */
export function MultiAutocompleteInput(props) {
    const [term, setTerm] = useState('');
    const [hasFocus, setFocusState] = useState(false);
    const [serveFromCache, setServeFromCache] = useState(false);
    const cache = useRef(new Map());
    useEffect(() => {
        const timeout = setTimeout(() => {
            props.onTermChange?.(term);
            setServeFromCache(false);
        }, constants.searchDebounce);
        return () => clearTimeout(timeout);
    }, [term]);
    const selected = useLatestNonNilValue(props.selected);
    const rawOptions = useLatestNonNilValue(serveFromCache ? cache.current.get(term) : props.options);
    const loading = props.selected == null || props.options == null;
    const showLoading = useDelayedTrue(hasFocus && loading, constants.loadingDelay);
    const options = useMemo(() => prepareOptions(rawOptions ?? [], selected ?? [], term, loading, serveFromCache, props.allowCustom), [rawOptions, selected, term, loading, serveFromCache, props.allowCustom]);
    if (props.options != null) {
        cache.current.set(term, props.options);
    }
    return (React.createElement(Autocomplete, { options: options, loading: showLoading, onChange: (event, _, reason, details) => {
            if (reason === 'clear') {
                props.onClear?.();
            }
            const option = details?.option;
            if (option == null)
                return;
            if (reason === 'selectOption') {
                if (option.label.trim() === '')
                    return;
                props.onSelect(option);
                setTerm('');
            }
            if (reason === 'removeOption') {
                props.onRemove(option);
            }
        }, inputValue: term, multiple: true, value: selected, filterSelectedOptions: true, disabled: props.disabled, onFocus: () => setFocusState(true), onBlur: event => {
            cache.current.clear();
            setFocusState(false);
            props.onBlur?.(event);
        }, onInputChange: (_, value) => {
            setServeFromCache(true);
            setTerm(value);
        }, isOptionEqualToValue: (option, value) => equals(option.value, value.value) || option.label.trim() === value.label.trim(), getOptionLabel: ({ label }) => label, renderOption: (props, { label, value, node }) => {
            if (value === undefined)
                return React.createElement("li", { ...props },
                    "Add \"",
                    label,
                    "\"");
            return React.createElement("li", { ...props }, node ?? label);
        }, filterOptions: props.filterOptions, getOptionDisabled: option => option.disabled ?? false, renderTags: (options, getTagProps) => options.map((option, index) => {
            const isCustomOption = props.allowCustom && option.value === undefined;
            return (React.createElement(Chip, { label: option.label, color: isCustomOption ? 'secondary' : undefined, ...getTagProps({ index }) }));
        }), renderInput: params => (React.createElement(TextField, { ...params, type: "text", label: props.label, autoFocus: props.autoFocus, error: props.error != null, helperText: props.error, InputProps: {
                ...params.InputProps,
                endAdornment: showLoading ? React.createElement(LoadingSpinner, null) : params.InputProps.endAdornment
            }, placeholder: props.placeholder, ...props.TextFieldProps })) }));
}
/**
 * We need to merge available options with selected options
 * to avoid errors when selected options are missing from `options` list.
 *
 * Also, if `allowCustom` is enabled, we need to inject the custom option too.
 */
function prepareOptions(options, selected, term, loading, serveFromCache, allowCustom) {
    const all = mergeOptions(options, selected);
    const normalizedTerm = normalizeLabel(term);
    if (!loading &&
        !serveFromCache &&
        allowCustom &&
        normalizedTerm !== '' &&
        all.every(({ label }) => normalizeLabel(label) !== normalizedTerm)) {
        all.push({ label: term, value: undefined });
    }
    return all;
}
//# sourceMappingURL=multiAutocompleteInput.js.map