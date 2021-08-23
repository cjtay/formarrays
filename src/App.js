import React, { useState } from 'react';

import { useForm, useFieldArray } from 'react-hook-form';

import FieldArray from './FieldArray';
const defaultValues = {
    experiences: [],
};

export default function App() {
    const {
        register,
        control,
        handleSubmit,
        watch,
        setValue,
        getValues,
        formState: { errors },
    } = useForm({ defaultValues: { experiences: [] } });
    const onSubmit = (data) => console.log(data);

    console.log(watch('example')); // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-5">
                <FieldArray
                    {...{
                        control,
                        register,
                        defaultValues,
                        getValues,
                        setValue,
                        errors,
                        detailType: 'experiences',
                    }}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
