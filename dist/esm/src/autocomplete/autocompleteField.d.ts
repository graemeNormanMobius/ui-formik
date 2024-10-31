import React from 'react';
import { AutocompleteInputProps } from './autocompleteInput';
export interface AutocompleteFieldPops<Value, AllowCustom extends boolean | undefined> extends Omit<AutocompleteInputProps<Value, AllowCustom>, 'error' | 'selected' | 'onSelect'> {
    /**
     * Field name.
     */
    readonly name: string;
}
/**
 * Autocomplete field.
 *
 * To use it without Formik, please use AutocompleteInput.
 */
export declare function AutocompleteField<Value, AllowCustom extends boolean | undefined>(props: AutocompleteFieldPops<Value, AllowCustom>): React.JSX.Element;
