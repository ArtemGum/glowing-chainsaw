import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import { Red } from 'shared/ui/AppLink/AppLink.stories';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({
    className, theme = AppLinkTheme.PRIMARY, children, ...linkProps
}) => (
    <Link
        className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        {...linkProps}
    >
        {children}
    </Link>
);
