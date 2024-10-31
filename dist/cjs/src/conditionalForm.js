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
exports.useConditionalField = exports.ConditionalForm = void 0;
const formik_1 = require("formik");
const react_1 = __importStar(require("react"));
const mountedKey = '__mounted__';
/**
 * A drop-in replacement for formik's <Form />.
 *
 * Provides support for `useConditionalField` hook.
 */
function ConditionalForm({ children }) {
    const data = (0, react_1.useRef)({ [mountedKey]: true });
    (0, react_1.useEffect)(() => {
        return () => {
            data.current[mountedKey] = false;
        };
    });
    return (react_1.default.createElement(Provider, { value: data.current },
        react_1.default.createElement(formik_1.Form, null, children)));
}
exports.ConditionalForm = ConditionalForm;
/**
 * Stores field's current value in context and reverts it to initialValue
 * when field is removed from DOM.
 *
 * Also, when field re-appears in DOM, it's value is automatically restored.
 *
 * With this, one can render fields conditionally without worrying, that
 * removed field will affect form values.
 *
 * @param name Field name
 * @param type Field type (example: InputField)
 */
function useConditionalField(name, type) {
    const key = `${name}|${type}`;
    const [{ value }, { initialValue }, { setValue }] = (0, formik_1.useField)(name);
    const data = (0, react_1.useContext)(context);
    const initializing = (0, react_1.useRef)(true);
    const isNotConditional = data === undefined;
    if (!isNotConditional) {
        if (data[key] === undefined) {
            data[key] = { value };
        }
        else if (!initializing.current) {
            data[key].value = value;
        }
    }
    (0, react_1.useEffect)(() => {
        if (isNotConditional)
            return;
        if (data[key].value !== initialValue) {
            setValue(data[key].value);
        }
        initializing.current = false;
        return () => {
            // We need to fire the update in the next tick as otherwise,
            // Formik merges it's state incorrectly.
            setTimeout(() => {
                if (data[mountedKey] === true)
                    setValue(initialValue);
            }, 0);
        };
    }, []);
}
exports.useConditionalField = useConditionalField;
const context = (0, react_1.createContext)(undefined);
context.displayName = 'ConditionalFormContext';
const { Provider } = context;
//# sourceMappingURL=conditionalForm.js.map