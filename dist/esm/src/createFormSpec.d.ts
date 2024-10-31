import type { Ref, Schema } from 'yup';
export declare function createFormSpec<T extends object>(rules: Record<keyof T, Schema<any> | Ref>): (initialValues: Record<keyof T, any>) => {
    initialValues: Record<keyof T, any>;
    validationSchema: import("yup").ObjectSchema<T, object>;
};
