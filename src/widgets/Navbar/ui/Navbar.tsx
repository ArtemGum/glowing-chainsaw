import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, []);

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onToggleModal}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={classNames(cls.links)}
            >
                {t('Войти')}
            </Button>

            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, tempore.
            </Modal>
        </header>
    );
};
