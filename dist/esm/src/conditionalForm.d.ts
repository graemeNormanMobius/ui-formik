import React, { ReactNode } from 'react';
/**
 * A drop-in replacement for formik's <Form />.
 *
 * Provides support for `useConditionalField` hook.
 */
export declare function ConditionalForm({ children }: {
    children: ReactNode;
}): React.JSX.Element;
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
export declare function useConditionalField(name: string, type: string): void;
