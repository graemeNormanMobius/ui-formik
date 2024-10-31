"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeLabel = exports.LoadingSpinner = exports.mergeOptions = void 0;
const helpers_1 = require("@everlutionsk/helpers");
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
/**
 * We need to merge available options with selected options
 * to avoid errors when selected options are missing from `options` list.
 */
function mergeOptions(options, selected) {
    const optionsMap = new Map();
    options.map(option => optionsMap.set(option.label, option));
    if (optionsMap.size !== options.length) {
        console.warn(`Options in autocomplete input were reduced as they labels needs be unique!`);
    }
    selected.map(option => optionsMap.set(option.label, option));
    return Array.from(optionsMap.values());
}
exports.mergeOptions = mergeOptions;
function LoadingSpinner() {
    return react_1.default.createElement(material_1.CircularProgress, { size: 28, className: "MuiAutocomplete-endAdornment" });
}
exports.LoadingSpinner = LoadingSpinner;
function normalizeLabel(label) {
    return (0, helpers_1.removeAccent)(label.trim().toLocaleLowerCase());
}
exports.normalizeLabel = normalizeLabel;
//# sourceMappingURL=common.js.map