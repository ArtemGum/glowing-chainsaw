import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value) => {
        dispatch((loginActions.setUsername(value)));
    }, [dispatch]);

    const onChangePassword = useCallback((value) => {
        dispatch((loginActions.setPassword(value)));
    }, [dispatch]);

    const onLoginCLick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('SignUp')} />
                {error && <Text text={error} theme={TextTheme.ERROR} />}
                <Input
                    value={username}
                    className={cls.input}
                    onChange={onChangeUsername}
                    placeholder={t('Vvedite username')}
                    autofocus
                />
                <Input
                    value={password}
                    className={cls.input}
                    onChange={onChangePassword}
                    placeholder={t('Vvedite parol')}
                />
                <Button
                    disabled={isLoading}
                    onClick={onLoginCLick}
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                >
                    {t('??????????')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
