import React, { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    label?: string
    options?: SelectOption[]
    value?: string
    onChange?: (value: string) => void
    readonly?: boolean
    className?: string
}

export const Select = memo(({
    label,
    options,
    value,
    onChange,
    readonly,
    className,
}: SelectProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionsList = useMemo(() => options?.map(({ value, content }) => (
        <option
            value={value}
            key={value}
            className={cls.option}
        >
            {content}
        </option>
    )), [options]);

    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
                className={cls.select}
            >
                {optionsList}
            </select>
        </div>
    );
});
