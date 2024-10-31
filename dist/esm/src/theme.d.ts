import { Theme as MuiTheme } from '@mui/material';
import { FieldsTheme } from './fields';
import { SubmitButtonProps } from './submitButton';
export interface UiFormikTheme {
    '@everlutionsk/ui-formik': {
        Fields: FieldsTheme;
        SubmitButton: {
            defaultProps: Partial<SubmitButtonProps>;
        };
    };
}
export interface UiFormikThemeOptions {
    Fields?: Partial<FieldsTheme>;
    SubmitButton?: {
        defaultProps?: Partial<SubmitButtonProps>;
    };
}
/**
 * Creates theme for @everlutionsk/ui-formik components.
 */
export declare function createUiFormikTheme(muiTheme: MuiTheme, options?: UiFormikThemeOptions): UiFormikTheme;
