"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyYupLocalePreset = void 0;
const yup = __importStar(require("yup"));
function applyYupLocalePreset(lang) {
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
exports.applyYupLocalePreset = applyYupLocalePreset;
//# sourceMappingURL=yupLocale.js.map