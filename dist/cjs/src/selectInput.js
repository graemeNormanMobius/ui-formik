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
exports.SelectInput = void 0;
const helpers_1 = require("@everlutionsk/helpers");
const material_1 = require("@mui/material");
const react_1 = __importStar(require("react"));
/**
 * Material-UI Select with better options support.
 */
function SelectInput(props) {
    const { value, options, ...restProps } = props;
    const valueIndex = (0, react_1.useMemo)(() => {
        return options.findIndex(option => (0, helpers_1.equals)(option.value, value));
    }, [value, options]);
    return react_1.default.createElement(Control, { value: valueIndex, options: options, ...restProps });
}
exports.SelectInput = SelectInput;
const Control = (0, react_1.memo)((props) => {
    const { options, value, onChange, dense, ...muiProps } = props;
    return (react_1.default.createElement(material_1.TextField, { ...muiProps, onChange: event => {
            const index = event.target.value;
            onChange(options[index]?.value);
        }, value: value === -1 ? '' : value, select: true, SelectProps: {
            renderValue: index => options[index]?.label ?? ''
        } }, options.map(({ value, label, node, ...menuItemProps }, i) => (react_1.default.createElement(material_1.MenuItem, { value: i, key: i, dense: dense, ...menuItemProps }, node ?? label)))));
});
//# sourceMappingURL=selectInput.js.map