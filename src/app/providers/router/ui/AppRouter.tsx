import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => Object.values(routeConfig).filter(({ authOnly }) => authOnly && !isAuth), [isAuth]);

    return (
        <Suspense fallback={<div><PageLoader /></div>}>
            <Routes>
                {routes.map(({
                    element,
                    ...routeProps
                }) => (
                    <Route
                        key={routeProps.path}
                        {...routeProps}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
