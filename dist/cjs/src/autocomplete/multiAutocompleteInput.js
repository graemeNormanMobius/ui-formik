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
exports.MultiAutocompleteInput = void 0;
const helpers_1 = require("@everlutionsk/helpers");
const ui_1 = require("@everlutionsk/ui");
const material_1 = require("@mui/material");
const react_1 = __importStar(require("react"));
const common_1 = require("./common");
/**
 * Autocomplete input with multi-selection support.
 *
 * To use it with Formik, please use MultiAutocompleteField.
 */
function MultiAutocompleteInput(props) {
    const [term, setTerm] = (0, react_1.useState)('');
    const [hasFocus, setFocusState] = (0, react_1.useState)(false);
    const [serveFromCache, setServeFromCache] = (0, react_1.useState)(false);
    const cache = (0, react_1.useRef)(new Map());
    (0, react_1.useEffect)(() => {
        const timeout = setTimeout(() => {
            props.onTermChange?.(term);
            setServeFromCache(false);
        }, ui_1.constants.searchDebounce);
        return () => clearTimeout(timeout);
    }, [term]);
    const selected = (0, ui_1.useLatestNonNilValue)(props.selected);
    const rawOptions = (0, ui_1.useLatestNonNilValue)(serveFromCache ? cache.current.get(term) : props.options);
    const loading = props.selected == null || props.options == null;
    const showLoading = (0, ui_1.useDelayedTrue)(hasFocus && loading, ui_1.constants.loadingDelay);
    const options = (0, react_1.useMemo)(() => prepareOptions(rawOptions ?? [], selected ?? [], term, loading, serveFromCache, props.allowCustom), [rawOptions, selected, term, loading, serveFromCache, props.allowCustom]);
    if (props.options != null) {
        cache.current.set(term, props.options);
    }
    return (react_1.default.createElement(material_1.Autocomplete, { options: options, loading: showLoading, onChange: (event, _, reason, details) => {
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
        }, isOptionEqualToValue: (option, value) => (0, helpers_1.equals)(option.value, value.value) || option.label.trim() === value.label.trim(), getOptionLabel: ({ label }) => label, renderOption: (props, { label, value, node }) => {
            if (value === undefined)
                return react_1.default.createElement("li", { ...props },
                    "Add \"",
                    label,
                    "\"");
            return react_1.default.createElement("li", { ...props }, node ?? label);
        }, filterOptions: props.filterOptions, getOptionDisabled: option => option.disabled ?? false, renderTags: (options, getTagProps) => options.map((option, index) => {
            const isCustomOption = props.allowCustom && option.value === undefined;
            return (react_1.default.createElement(material_1.Chip, { label: option.label, color: isCustomOption ? 'secondary' : undefined, ...getTagProps({ index }) }));
        }), renderInput: params => (react_1.default.createElement(material_1.TextField, { ...params, type: "text", label: props.label, autoFocus: props.autoFocus, error: props.error != null, helperText: props.error, InputProps: {
                ...params.InputProps,
                endAdornment: showLoading ? react_1.default.createElement(common_1.LoadingSpinner, null) : params.InputProps.endAdornment
            }, placeholder: props.placeholder, ...props.TextFieldProps })) }));
}
exports.MultiAutocompleteInput = MultiAutocompleteInput;
/**
 * We need to merge available options with selected options
 * to avoid errors when selected options are missing from `options` list.
 *
 * Also, if `allowCustom` is enabled, we need to inject the custom option too.
 */
function prepareOptions(options, selected, term, loading, serveFromCache, allowCustom) {
    const all = (0, common_1.mergeOptions)(options, selected);
    const normalizedTerm = (0, common_1.normalizeLabel)(term);
    if (!loading &&
        !serveFromCache &&
        allowCustom &&
        normalizedTerm !== '' &&
        all.every(({ label }) => (0, common_1.normalizeLabel)(label) !== normalizedTerm)) {
        all.push({ label: term, value: undefined });
    }
    return all;
}
//# sourceMappingURL=multiAutocompleteInput.js.map