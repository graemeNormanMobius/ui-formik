import { FilterOptionsState, TextFieldProps } from '@mui/material';
import React, { FocusEvent, ReactNode } from 'react';
import { AutocompleteOption } from './common';
export interface AutocompleteInputProps<Value, AllowCustom extends boolean | undefined> {
    /**
     * The label content.
     */
    readonly label?: ReactNode;
    /**
     * Available options for suggestion list.
     */
    readonly options: Array<AutocompleteOption<Value, AllowCustom>> | undefined;
    /**
     * Currently selected option.
     */
    readonly selected: AutocompleteOption<Value, AllowCustom> | undefined;
    /**
     * Called when user selects/removes option from suggestions list.
     */
    readonly onSelect: (option: AutocompleteOption<Value, AllowCustom> | undefined) => void;
    /**
     * Debounced callback which will be triggered when search term changes.
     */
    readonly onTermChange?: (term: string) => void;
    /**
     * Allows user to use custom text when provided options are not enough.
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
 * Autocomplete input.
 *
 * To use it with Formik, please use AutocompleteField.
 */
export declare function AutocompleteInput<Value, AllowCustom extends boolean | undefined = undefined>(props: AutocompleteInputProps<Value, AllowCustom>): React.JSX.Element;
