import React from 'react';
import { useFieldArray } from 'react-hook-form';

import InputError from './InputError';

export default function Fields({
    control,
    register,
    errors,
    setValue,
    getValues,
    detailType,
}) {
    const { fields, append, remove, prepend } = useFieldArray({
        control,
        name: detailType,
    });

    return (
        <>
            <ul>
                <div className="label">
                    Add{' '}
                    {detailType.charAt(0).toUpperCase() + detailType.slice(1)}
                </div>
                {fields.map((item, index) => {
                    return (
                        <li key={item.id}>
                            <input
                                {...register(`${detailType}.${index}.name`, {
                                    maxLength: 2,
                                })}
                                className={
                                    errors &&
                                    errors?.detailType &&
                                    errors?.detailType[index]?.name
                                        ? 'input-text-error'
                                        : 'input-text'
                                }
                            />
                            {errors &&
                                errors?.experiences &&
                                errors?.experiences[index]?.name && (
                                    <p>{`err1: ${errors?.experiences[index]?.name?.type}`}</p>
                                )}

                            <button type="button" onClick={() => remove(index)}>
                                Delete
                            </button>
                            {/* <NestedArray nestIndex={index} {...{ control, register }} /> */}
                        </li>
                    );
                })}
            </ul>

            <section>
                <button
                    type="button"
                    onClick={() => {
                        append({ name: ' ' });
                    }}
                >
                    append {detailType}
                </button>
            </section>
        </>
    );
}
