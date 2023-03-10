import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    title?: string;
    text?: string;
    theme?: TextTheme;
    className?: string;
}

export const Text = ({
    title,
    text,
    theme = TextTheme.PRIMARY,
    className,
}: TextProps) => (
    <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
    </div>
);
