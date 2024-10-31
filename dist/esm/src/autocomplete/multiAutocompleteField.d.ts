import React from 'react';
import { MultiAutocompleteInputProps } from './multiAutocompleteInput';
export interface MultiAutocompleteFieldPops<Value, AllowCustom extends boolean | undefined> extends Omit<MultiAutocompleteInputProps<Value, AllowCustom>, 'error' | 'selected' | 'onSelect' | 'onRemove' | 'onClear'> {
    /**
     * Field name.
     */
    readonly name: string;
}
/**
 * Autocomplete field with multi-selection support.
 *
 * To use it without Formik, please use MultiAutocompleteInput
 */
export declare function MultiAutocompleteField<Value, AllowCustom extends boolean | undefined>(props: MultiAutocompleteFieldPops<Value, AllowCustom>): React.JSX.Element;
