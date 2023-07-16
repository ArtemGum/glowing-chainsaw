import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

interface TextProps {
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
    className?: string
}

export const Text = memo(({
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    className,
}: TextProps) => (
    <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
    </div>
));
