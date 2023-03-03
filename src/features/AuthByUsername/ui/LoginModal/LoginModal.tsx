import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
    className?: string
}

export const LoginModal = ({ isOpen, onClose, className }: LoginModalProps) => (
    <Modal
        lazy
        isOpen={isOpen}
        onClose={onClose}
        className={classNames('', {}, [className])}
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync />
        </Suspense>
    </Modal>
);
