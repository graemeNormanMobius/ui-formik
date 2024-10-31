import React, { ReactNode } from 'react';
export interface AutocompleteOption<Value = any, AllowCustom extends boolean | undefined = undefined> {
    /**
     * Option label which will be used for autocomplete
     */
    readonly label: string;
    readonly value: AllowCustom extends true ? Value | undefined : Value;
    /**
     * ReactNode which will be rendered.
     *
     * Fallbacks to `label` if not specified.
     */
    readonly node?: ReactNode;
    readonly disabled?: boolean;
}
/**
 * We need to merge available options with selected options
 * to avoid errors when selected options are missing from `options` list.
 */
export declare function mergeOptions<T extends AutocompleteOption<any, any>>(options: T[], selected: T[]): T[];
export declare function LoadingSpinner(): React.JSX.Element;
export declare function normalizeLabel(label: string): string;
