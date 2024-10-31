import * as yup from 'yup';
export function applyYupLocalePreset(lang) {
    if (lang !== 'en') {
        throw Error(`Unsupported language: ${lang}`);
    }
    yup.setLocale({
        mixed: {
            required: 'Required field'
        },
        string: {
            email: 'Must be a valid email address',
            min: 'Must be at least ${min} characters',
            max: 'Must be at most ${max} characters',
            url: 'Must be a valid URL',
            length: 'Must be ${length} characters'
        },
        number: {
            integer: 'Must be an integer',
            min: 'Must be at least ${min}',
            max: 'Must be at most ${max}',
            lessThan: 'Must be less than ${less}',
            moreThan: 'Must be more than ${more}',
            positive: 'Must be a positive number',
            negative: 'Must be a negative number',
            notEqual: 'Must not be equal to ${notEqual}'
        }
    });
}
//# sourceMappingURL=yupLocale.js.map