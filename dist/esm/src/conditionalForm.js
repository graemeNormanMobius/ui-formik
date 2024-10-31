import { Form, useField } from 'formik';
import React, { createContext, useContext, useEffect, useRef } from 'react';
const mountedKey = '__mounted__';
/**
 * A drop-in replacement for formik's <Form />.
 *
 * Provides support for `useConditionalField` hook.
 */
export function ConditionalForm({ children }) {
    const data = useRef({ [mountedKey]: true });
    useEffect(() => {
        return () => {
            data.current[mountedKey] = false;
        };
    });
    return (React.createElement(Provider, { value: data.current },
        React.createElement(Form, null, children)));
}
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
export function useConditionalField(name, type) {
    const key = `${name}|${type}`;
    const [{ value }, { initialValue }, { setValue }] = useField(name);
    const data = useContext(context);
    const initializing = useRef(true);
    const isNotConditional = data === undefined;
    if (!isNotConditional) {
        if (data[key] === undefined) {
            data[key] = { value };
        }
        else if (!initializing.current) {
            data[key].value = value;
        }
    }
    useEffect(() => {
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
const context = createContext(undefined);
context.displayName = 'ConditionalFormContext';
const { Provider } = context;
//# sourceMappingURL=conditionalForm.js.map