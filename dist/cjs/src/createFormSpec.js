"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFormSpec = void 0;
const helpers_yup_1 = require("@everlutionsk/helpers-yup");
function createFormSpec(rules) {
    const validationSchema = (0, helpers_yup_1.toYupSchema)(rules);
    return (initialValues) => ({ initialValues, validationSchema });
}
exports.createFormSpec = createFormSpec;
//# sourceMappingURL=createFormSpec.js.map