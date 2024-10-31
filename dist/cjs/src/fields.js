"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fields = void 0;
const material_1 = require("@mui/material");
/**
 * Groups the fields and applies the spacing between them by default.
 *
 * Each field must use the FormControl from Material-UI.
 */
exports.Fields = (0, material_1.styled)(material_1.Box)(({ theme, ...boxProps }) => {
    const { style = {}, fieldStyle } = theme['@everlutionsk/ui-formik']?.Fields;
    return {
        display: 'flex',
        flexDirection: 'column',
        ...overrideThemeStyleWithBoxProps(style, boxProps),
        '& > .MuiFormControl-root, & > .MuiAutocomplete-root': {
            marginBottom: theme.spacing(2),
            ...fieldStyle
        },
        '& > .MuiButton-root[type=submit]': {
            alignSelf: 'flex-end'
        }
    };
});
function overrideThemeStyleWithBoxProps(styleFromTheme, boxProps) {
    const themeKeys = Object.keys(styleFromTheme);
    return themeKeys.reduce((acc, key) => ({
        ...acc,
        [key]: boxProps[key] ?? styleFromTheme[key]
    }), {});
}
//# sourceMappingURL=fields.js.map