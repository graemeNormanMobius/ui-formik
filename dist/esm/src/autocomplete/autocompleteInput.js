import { equals } from '@everlutionsk/helpers';
import { constants, useDelayedTrue, useLatestNonNilValue } from '@everlutionsk/ui';
import { Autocomplete, TextField } from '@mui/material';
import React, { useMemo, useRef, useState } from 'react';
import { LoadingSpinner, mergeOptions, normalizeLabel } from './common';
/**
 * Autocomplete input.
 *
 * To use it with Formik, please use AutocompleteField.
 */
export function AutocompleteInput(props) {
    const [term, setTerm] = useState('');
    const [hasFocus, setFocusState] = useState(false);
    const [serveFromCache, setServeFromCache] = useState(false);
    const termDebounceTimer = useRef();
    const cache = useRef(new Map());
    const rawOptions = useLatestNonNilValue(serveFromCache ? cache.current.get(term) : props.options);
    const options = useMemo(() => mergeOptions(rawOptions ?? [], props.selected?.value !== undefined ? [props.selected] : []), [rawOptions, props.selected]);
    if (props.options != null) {
        cache.current.set(term, props.options);
    }
    const showLoadingSpinner = useDelayedTrue(hasFocus && props.options == null, constants.loadingDelay);
    const showLoadingMsg = showLoadingSpinner && !props.allowCustom;
    // If there are no options and the input field is empty,
    // we will temporarily switch to `freeSolo` mode to avoid "No options" message.
    const freeSolo = props.allowCustom || (term.trim().length === 0 && options.length === 0);
    return (React.createElement(Autocomplete, { options: options, loading: showLoadingMsg, onChange: (event, _, reason, details) => {
            if (reason === 'removeOption' || reason === 'clear') {
                props.onSelect(undefined);
                setTerm('');
            }
            const option = details?.option;
            if (option == null)
                return;
            if (reason === 'createOption' || reason === 'selectOption') {
                if (typeof option === 'string') {
                    const normalizedOptionLabel = normalizeLabel(option);
                    const similar = options.find(({ label }) => normalizeLabel(label) === normalizedOptionLabel);
                    if (similar) {
                        props.onSelect(similar);
                    }
                    else {
                        props.onSelect({ label: option, value: undefined });
                    }
                }
                else {
                    props.onSelect(option);
                }
                // Clear the term.
                //
                // To keep the value in input field, consumer
                // needs to set the `props.value` on each change.
                setTerm('');
            }
        }, onFocus: () => setFocusState(true), onBlur: event => {
            cache.current.clear();
            setFocusState(false);
            if (props.allowCustom) {
                const normalizedTerm = normalizeLabel(term);
                if (normalizedTerm === '') {
                    props.onSelect(undefined);
                }
                else {
                    const similar = options.find(({ label }) => normalizeLabel(label) === normalizedTerm);
                    if (similar) {
                        props.onSelect(similar);
                        setTerm(similar.label);
                    }
                    else {
                        props.onSelect({ label: term, value: undefined });
                    }
                }
            }
            props.onBlur?.(event);
        }, inputValue: term, value: props.selected ?? null, freeSolo: freeSolo, disabled: props.disabled, onInputChange: (_, value, reason) => {
            setServeFromCache(true);
            setTerm(value);
            clearTimeout(termDebounceTimer.current);
            if (reason === 'input' || value === '') {
                termDebounceTimer.current = setTimeout(() => {
                    props.onTermChange?.(value);
                    setServeFromCache(false);
                }, constants.searchDebounce);
            }
        }, isOptionEqualToValue: (option, value) => equals(option.value, value.value) || option.label.trim() === value.label.trim(), getOptionLabel: option => (typeof option === 'string' ? option : option?.label ?? ''), renderOption: (props, option) => {
            if (option == null)
                return React.createElement("li", { ...props });
            return React.createElement("li", { ...props }, option.node ?? option.label);
        }, filterOptions: props.filterOptions, renderInput: params => (React.createElement(TextField, { ...params, type: "text", label: props.label, autoFocus: props.autoFocus, error: props.error != null, helperText: props.error, InputProps: {
                ...params.InputProps,
                endAdornment: showLoadingSpinner ? React.createElement(LoadingSpinner, null) : params.InputProps.endAdornment
            }, placeholder: props.placeholder, ...props.TextFieldProps })) }));
}
//# sourceMappingURL=autocompleteInput.js.map