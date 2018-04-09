import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CabinetPage from './CabinetPage';
import { LoginPage } from './LoginPage';
import { RegistrationPage } from './RegistrationPage';
import { RecoverPage } from './RecoverPage';
import ConfirmPage from './ConfirmPage';
import { PrivateRoute } from './PrivateRouteHOC';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/confirm_user" component={ConfirmPage} />
                    <Route path="/registration" component={RegistrationPage} />
                    <Route path="/recover" component={RecoverPage} />
                    <PrivateRoute path="/" component={CabinetPage} />
                </Switch>
            </div>
        </Router>
    </Provider>
);

export default Root;
