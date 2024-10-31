import { Box, styled } from '@mui/material';
/**
 * Groups the fields and applies the spacing between them by default.
 *
 * Each field must use the FormControl from Material-UI.
 */
export const Fields = styled(Box)(({ theme, ...boxProps }) => {
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