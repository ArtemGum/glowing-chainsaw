import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const AppRouter = () => (
    <Suspense fallback={<div><PageLoader /></div>}>
        <Routes>
            {Object.values(routeConfig).map(({ element, ...routeProps }) => (
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

export default AppRouter;
