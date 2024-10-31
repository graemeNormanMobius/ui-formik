/**
 * Creates theme for @everlutionsk/ui-formik components.
 */
export function createUiFormikTheme(muiTheme, options) {
    return {
        '@everlutionsk/ui-formik': {
            Fields: {
                style: options?.Fields?.style,
                fieldStyle: options?.Fields?.fieldStyle
            },
            SubmitButton: {
                defaultProps: options?.SubmitButton?.defaultProps ?? {}
            }
        }
    };
}
//# sourceMappingURL=theme.js.map