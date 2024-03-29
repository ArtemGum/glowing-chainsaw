import React, {
    CSSProperties, memo, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    src: string
    size?: number
    alt?: string
    className?: string
}

export const Avatar = memo(({
    src,
    size,
    alt,
    className,
}: AvatarProps) => {
    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            src={src}
            style={styles}
            alt={alt}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
});
