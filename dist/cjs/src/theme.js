"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUiFormikTheme = void 0;
/**
 * Creates theme for @everlutionsk/ui-formik components.
 */
function createUiFormikTheme(muiTheme, options) {
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
exports.createUiFormikTheme = createUiFormikTheme;
//# sourceMappingURL=theme.js.map