import { toYupSchema } from '@everlutionsk/helpers-yup';
export function createFormSpec(rules) {
    const validationSchema = toYupSchema(rules);
    return (initialValues) => ({ initialValues, validationSchema });
}
//# sourceMappingURL=createFormSpec.js.map