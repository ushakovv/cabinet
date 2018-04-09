import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const checkAccess = () => {
    const user = JSON.parse(window.localStorage.getItem('auth'));
    if (user && user.id > 0) {
        return true;
    }
    return false;
};

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            checkAccess() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to="/login"
                />
            )
        }
    />
);
