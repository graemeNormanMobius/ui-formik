import { FilterOptionsState, TextFieldProps } from '@mui/material';
import React, { FocusEvent, ReactNode } from 'react';
import { AutocompleteOption } from './common';
export interface MultiAutocompleteInputProps<Value, AllowCustom extends boolean | undefined> {
    /**
     * The label content.
     */
    readonly label?: ReactNode;
    /**
     * Available options for suggestion list.
     */
    readonly options: Array<AutocompleteOption<Value, AllowCustom>> | undefined;
    /**
     * A list of already selected options.
     */
    readonly selected: Array<AutocompleteOption<Value, AllowCustom>> | undefined;
    /**
     * Debounced callback which will be triggered when search term changes.
     */
    readonly onTermChange?: (term: string) => void;
    /**
     * Called when user selects option from suggestions list.
     */
    readonly onSelect: (option: AutocompleteOption<Value, AllowCustom>) => void;
    /**
     * Called when user removes already selected option.
     */
    readonly onRemove: (option: AutocompleteOption<Value, AllowCustom>) => void;
    /**
     * Called when user removes all selected options by clicking on X button.
     */
    readonly onClear?: () => void;
    /**
     * Allows user to add custom option when provided options are not enough.
     *
     * Renders `Add ${term}` at the end of the suggestion list.
     *
     * When set to TRUE, selected option may have no value, only label.
     */
    readonly allowCustom?: AllowCustom;
    /**
     * Renders error message when provided.
     */
    readonly error?: string;
    /**
     * If `true`, the `input` element will be focused during the first mount.
     */
    readonly autoFocus?: boolean;
    readonly onBlur?: (event: FocusEvent<HTMLDivElement>) => void;
    readonly placeholder?: string;
    readonly disabled?: boolean;
    readonly TextFieldProps?: TextFieldProps;
    readonly filterOptions?: (options: Array<AutocompleteOption<Value, AllowCustom>>, state: FilterOptionsState<AutocompleteOption<Value, AllowCustom>>) => Array<AutocompleteOption<Value, AllowCustom>>;
}
/**
 * Autocomplete input with multi-selection support.
 *
 * To use it with Formik, please use MultiAutocompleteField.
 */
export declare function MultiAutocompleteInput<Value, AllowCustom extends boolean | undefined = undefined>(props: MultiAutocompleteInputProps<Value, AllowCustom>): React.JSX.Element;
