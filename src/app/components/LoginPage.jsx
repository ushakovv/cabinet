import React from 'react';
import { Link } from 'react-router-dom';

import { User } from '../models/User';
import { Form } from '../core/helper/Form';

const auth = (event) => {
    event.preventDefault();
    if (Form.validate(event.target)) {
        User.auth(event.target, (resp) => {
            if (resp.data.errors) {
                Form.mail.parents('.form-group').addClass('has-error');
                Form.password.parents('.form-group').addClass('has-error');
                Form.password.next().text('Incorrect password or email');
            } else {
                window.localStorage.setItem('auth', JSON.stringify(resp.data.result.user));
                window.location.pathname = '/';
            }
        });
    }
};

export const LoginPage = () => (
    <div className="row">
        <div className="main-login col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
            <div className="logo margin-top-30">
                <h3>MAILMAKER</h3>
            </div>
            <div className="box-login">
                <form className="form-login" onSubmit={auth}>
                    <fieldset>
                        <legend>Sign in to your account</legend>
                        <p>Please enter your email and password to log in.</p>
                        <div className="form-group">
                            <span className="input-icon">
                                <input type="email" className="form-control" name="email" placeholder="Email" />
                                <span className="help-block" />
                                <i className="fa fa-envelope-o" />
                            </span>
                        </div>
                        <div className="form-group form-actions">
                            <span className="input-icon">
                                <input
                                    type="password"
                                    className="form-control password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <span className="help-block" />
                                <i className="fa fa-lock" />
                                <Link to="/recover/">I forgot my password</Link>
                            </span>
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="btn btn-primary pull-right">
                                Login <i className="fa fa-arrow-circle-right" />
                            </button>
                        </div>
                        <div className="new-account">
                            Don't have an account yet?
                            <Link to="/registration/"> Create an account</Link>
                        </div>
                    </fieldset>
                </form>
                <div className="copyright">&copy;
                <span className="current-year"></span>
                <span className="text-bold text-uppercase"> MailMaker</span>. <span>All rights reserved</span>
                </div>
            </div>
        </div>
    </div>
);
