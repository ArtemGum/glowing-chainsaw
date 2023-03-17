import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { memo, ReactNode } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
    children?: ReactNode
}

export const AppLink = memo(({
    className, theme = AppLinkTheme.PRIMARY, children, ...linkProps
}: AppLinkProps) => (
    <Link
        {...linkProps}
        className={classNames(cls.AppLink, {}, [className, cls[theme]])}
    >
        {children}
    </Link>
));
