"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutocompleteInput = void 0;
const helpers_1 = require("@everlutionsk/helpers");
const ui_1 = require("@everlutionsk/ui");
const material_1 = require("@mui/material");
const react_1 = __importStar(require("react"));
const common_1 = require("./common");
/**
 * Autocomplete input.
 *
 * To use it with Formik, please use AutocompleteField.
 */
function AutocompleteInput(props) {
    const [term, setTerm] = (0, react_1.useState)('');
    const [hasFocus, setFocusState] = (0, react_1.useState)(false);
    const [serveFromCache, setServeFromCache] = (0, react_1.useState)(false);
    const termDebounceTimer = (0, react_1.useRef)();
    const cache = (0, react_1.useRef)(new Map());
    const rawOptions = (0, ui_1.useLatestNonNilValue)(serveFromCache ? cache.current.get(term) : props.options);
    const options = (0, react_1.useMemo)(() => (0, common_1.mergeOptions)(rawOptions ?? [], props.selected?.value !== undefined ? [props.selected] : []), [rawOptions, props.selected]);
    if (props.options != null) {
        cache.current.set(term, props.options);
    }
    const showLoadingSpinner = (0, ui_1.useDelayedTrue)(hasFocus && props.options == null, ui_1.constants.loadingDelay);
    const showLoadingMsg = showLoadingSpinner && !props.allowCustom;
    // If there are no options and the input field is empty,
    // we will temporarily switch to `freeSolo` mode to avoid "No options" message.
    const freeSolo = props.allowCustom || (term.trim().length === 0 && options.length === 0);
    return (react_1.default.createElement(material_1.Autocomplete, { options: options, loading: showLoadingMsg, onChange: (event, _, reason, details) => {
            if (reason === 'removeOption' || reason === 'clear') {
                props.onSelect(undefined);
                setTerm('');
            }
            const option = details?.option;
            if (option == null)
                return;
            if (reason === 'createOption' || reason === 'selectOption') {
                if (typeof option === 'string') {
                    const normalizedOptionLabel = (0, common_1.normalizeLabel)(option);
                    const similar = options.find(({ label }) => (0, common_1.normalizeLabel)(label) === normalizedOptionLabel);
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
                const normalizedTerm = (0, common_1.normalizeLabel)(term);
                if (normalizedTerm === '') {
                    props.onSelect(undefined);
                }
                else {
                    const similar = options.find(({ label }) => (0, common_1.normalizeLabel)(label) === normalizedTerm);
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
                }, ui_1.constants.searchDebounce);
            }
        }, isOptionEqualToValue: (option, value) => (0, helpers_1.equals)(option.value, value.value) || option.label.trim() === value.label.trim(), getOptionLabel: option => (typeof option === 'string' ? option : option?.label ?? ''), renderOption: (props, option) => {
            if (option == null)
                return react_1.default.createElement("li", { ...props });
            return react_1.default.createElement("li", { ...props }, option.node ?? option.label);
        }, filterOptions: props.filterOptions, renderInput: params => (react_1.default.createElement(material_1.TextField, { ...params, type: "text", label: props.label, autoFocus: props.autoFocus, error: props.error != null, helperText: props.error, InputProps: {
                ...params.InputProps,
                endAdornment: showLoadingSpinner ? react_1.default.createElement(common_1.LoadingSpinner, null) : params.InputProps.endAdornment
            }, placeholder: props.placeholder, ...props.TextFieldProps })) }));
}
exports.AutocompleteInput = AutocompleteInput;
//# sourceMappingURL=autocompleteInput.js.map