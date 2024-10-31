"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitButton = void 0;
const ui_1 = require("@everlutionsk/ui");
const formik_1 = require("formik");
const react_1 = __importDefault(require("react"));
/**
 * Submit button with Formik support.
 *
 * Disable itself & shows loading spinner automatically during submit.
 */
function SubmitButton(props) {
    const theme = (0, ui_1.INTERNAL_usePackageTheme)('@everlutionsk/ui-formik').SubmitButton;
    const { isSubmitting } = (0, formik_1.useFormikContext)();
    return (react_1.default.createElement(ui_1.Button, { ...theme.defaultProps, ...props, type: "submit", loading: props.loading ?? isSubmitting }));
}
exports.SubmitButton = SubmitButton;
//# sourceMappingURL=submitButton.js.map